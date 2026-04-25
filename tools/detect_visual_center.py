#!/usr/bin/env python3
"""
Visual Focus Detector for Artwork Thumbnails
Analyzes each thumbnail to find the visual center of interest
and generates object-position values for CSS.
"""

from PIL import Image, ImageFilter, ImageStat
import os
import re

THUMB_DIR = "assets/images/artworks/thumbs/"
ARTWORKS_DIR = "_artworks/"

def find_visual_center(image_path):
    """Find the visual focal point of an image using edge density analysis."""
    img = Image.open(image_path).convert('L')
    w, h = img.size
    
    # Edge detection - regions with more edges = more visual interest
    edges = img.filter(ImageFilter.FIND_EDGES)
    
    # Also use standard deviation to find high-contrast regions
    # Combine edge density with local contrast
    
    block_size = max(w, h) // 6  # Search in overlapping blocks
    step = block_size // 3
    
    max_score = 0
    best_x, best_y = w // 2, h // 2
    
    for y in range(0, h - block_size + 1, step):
        for x in range(0, w - block_size + 1, step):
            block_edges = edges.crop((x, y, x + block_size, y + block_size))
            block_orig = img.crop((x, y, x + block_size, y + block_size))
            
            stat_edges = ImageStat.Stat(block_edges)
            stat_orig = ImageStat.Stat(block_orig)
            
            # Score = edge density + contrast variance
            edge_score = stat_edges.mean[0]
            contrast_score = stat_orig.stddev[0]
            score = edge_score * 0.7 + contrast_score * 0.3
            
            if score > max_score:
                max_score = score
                best_x = x + block_size // 2
                best_y = y + block_size // 2
    
    # Convert to percentage
    cx = (best_x / w) * 100
    cy = (best_y / h) * 100
    
    # Clamp to reasonable range (10% - 90%) to avoid extreme crops
    cx = max(10, min(90, cx))
    cy = max(10, min(90, cy))
    
    return f"{cx:.1f}% {cy:.1f}%"


def update_artwork_position(artwork_path, position):
    """Add or update thumbnail_position in artwork front matter."""
    with open(artwork_path, 'r') as f:
        content = f.read()
    
    # Check if thumbnail_position already exists
    if 'thumbnail_position:' in content:
        # Update existing
        content = re.sub(
            r'thumbnail_position:.*\n',
            f'thumbnail_position: {position}\n',
            content
        )
    else:
        # Insert after thumbnail: line
        content = re.sub(
            r'(thumbnail:.*\n)',
            r'\1thumbnail_position: ' + position + '\n',
            content
        )
    
    with open(artwork_path, 'w') as f:
        f.write(content)


def find_thumbnail_for_artwork(artworks_dir, thumb_name):
    """Find the artwork .md file that references this thumbnail/image."""
    # thumb_name might be like 'artwork-90adc393.webp' or 'wall-studies-1.webp'
    base = thumb_name.replace('.webp', '').replace('.jpg', '').replace('.png', '')
    
    # Strategy 1: direct slug match (descriptive names)
    slug = base
    if '-' in base and base.split('-')[-1].isdigit():
        slug = '-'.join(base.split('-')[:-1])
    
    artwork_path = os.path.join(artworks_dir, f"{slug}.md")
    if os.path.exists(artwork_path):
        return artwork_path
    
    # Strategy 2: search all .md files for reference to this image/thumb
    for f in os.listdir(artworks_dir):
        if not f.endswith('.md'):
            continue
        filepath = os.path.join(artworks_dir, f)
        with open(filepath, 'r') as fh:
            content = fh.read()
        # Check if this artwork references the thumbnail filename
        if thumb_name in content or base in content:
            return filepath
    
    return None


def main():
    # Find all thumbnails and matching artwork files
    thumbs = sorted([f for f in os.listdir(THUMB_DIR) if f.endswith(('.webp', '.jpg', '.png'))])
    
    updated = 0
    skipped = 0
    not_found = []
    for thumb in thumbs:
        artwork_path = find_thumbnail_for_artwork(ARTWORKS_DIR, thumb)
        
        if not artwork_path:
            not_found.append(thumb)
            continue
        
        # Skip if already has thumbnail_position (manual override)
        with open(artwork_path, 'r') as f:
            content = f.read()
        if 'thumbnail_position:' in content:
            skipped += 1
            continue
        
        # Detect visual center
        thumb_path = os.path.join(THUMB_DIR, thumb)
        position = find_visual_center(thumb_path)
        
        # Update artwork file
        update_artwork_position(artwork_path, position)
        
        print(f"✅ {thumb} -> {position} ({os.path.basename(artwork_path)})")
        updated += 1
    
    print(f"\nUpdated: {updated} | Skipped (manual): {skipped} | Not found: {len(not_found)}")
    if not_found:
        print("Not matched:", ', '.join(not_found[:5]), "..." if len(not_found) > 5 else "")


if __name__ == '__main__':
    main()
