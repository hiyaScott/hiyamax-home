---
layout: default
title: About
permalink: /about/
---

<!-- About Page -->
<div class="about-page">

  <!-- Back Button -->
  <a href="https://hiyamax.com" class="back-link">
    <span class="back-arrow">←</span>
    <span>Back to hiyaMax.com</span>
  </a>

  <!-- Main Content -->
  <div class="about-content">

    <!-- Left: Image -->
    <div class="about-image-section">
      <div class="about-image-container">
        <img src="/assets/images/max-player.webp" alt="HiyaMax" class="about-image" loading="eager" decoding="async" width="800">
      </div>
    </div>

    <!-- Right: Info Panel -->
    <div class="about-info-section">

      <!-- Header -->
      <div class="about-header">
        <span class="about-tag">Player</span>
        <span class="about-tag secondary">Creator</span>
      </div>

      <!-- Title -->
      <h1 class="about-title">HiyaMax</h1>

      <!-- Meta Info -->
      <div class="about-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">Student / Game Maker / Artist</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Location</span>
          <span class="meta-value">China</span>
        </div>
      </div>

      <!-- Description -->
      <div class="about-description">
        <p>
          A curious explorer of games, stories and virtual worlds —
          and also a maker of games, art, inventions, stories and my own IP.
        </p>
        <p>
          This site is where I keep my projects, thoughts, and experiments.
          Feel free to look around.
        </p>
      </div>

    </div>
  </div>

</div>

<style>
/* About Page */
.about-page {
  min-height: calc(100vh - var(--header-height));
  padding: 100px 40px 60px;
  max-width: var(--max-content-width);
  margin: 0 auto;
  background: #fff;
}

/* Back Link */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 30px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #111;
}

.back-arrow {
  font-size: 18px;
}

/* Main Content - Two Column Layout */
.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Left: Image Section */
.about-image-section {
  position: sticky;
  top: 100px;
}

.about-image-container {
  background: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Right: Info Section */
.about-info-section {
  padding-top: 20px;
}

.about-header {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.about-tag {
  padding: 4px 12px;
  background: #111;
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about-tag.secondary {
  background: #f0f0f0;
  color: #666;
}

.about-title {
  font-size: 42px;
  font-weight: 700;
  color: #111;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -1px;
}

/* Meta Info */
.about-meta {
  display: flex;
  gap: 32px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #999;
  font-weight: 500;
}

.meta-value {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

/* Description */
.about-description {
  font-size: 16px;
  line-height: 1.7;
  color: #444;
}

.about-description p {
  margin-bottom: 16px;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image-section {
    position: relative;
    top: 0;
  }

  .about-title {
    font-size: 32px;
  }
}

@media (max-width: 640px) {
  .about-page {
    padding: 80px 20px 40px;
  }

  .about-title {
    font-size: 28px;
  }

  .about-meta {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
