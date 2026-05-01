// HiyaMax - Main JavaScript
// Handles avatar interaction, mobile menu, and device orientation

(function() {
  'use strict';

  // Avatar elements
  const avatarWrapper = document.getElementById('avatarWrapper');
  const avatarPlayer = document.getElementById('avatarPlayer');
  const avatarCreator = document.getElementById('avatarCreator');
  
  // Background text elements
  const bgTextLeft = document.querySelector('.bg-text-left');
  const bgTextRight = document.querySelector('.bg-text-right');
  const bgTextTitleLeft = document.querySelector('.bg-text-left .bg-text-title');
  const bgTextTitleRight = document.querySelector('.bg-text-right .bg-text-title');
  const bgTextDescLeft = document.querySelector('.bg-text-left .bg-text-desc');
  const bgTextDescRight = document.querySelector('.bg-text-right .bg-text-desc');
  
  // Animation state
  let currentPercent = 0;
  let targetPercent = 0;
  let isAnimating = true;
  
  /**
   * Update avatar layout based on percentage (-1 to 1)
   * -1 = far left (Player fully visible)
   * 0 = center (50/50 split)
   * 1 = far right (Creator fully visible)
   */
  function updateLayout(percent) {
    if (!avatarWrapper) return;
    
    // Avatar displacement: max 30px
    const offsetX = -percent * 30;
    avatarWrapper.style.transform = `translate(calc(-50% + ${offsetX}px), 0)`;
    
    // Clip-path changes (area percentage)
    const playerClip = Math.max(0, Math.min(100, 50 - percent * 50));
    const creatorClip = Math.max(0, Math.min(100, 50 + percent * 50));
    
    if (avatarPlayer) {
      avatarPlayer.style.clipPath = `inset(0 ${100 - playerClip}% 0 0)`;
    }
    if (avatarCreator) {
      avatarCreator.style.clipPath = `inset(0 0 0 ${100 - creatorClip}%)`;
    }
    
    // Title opacity
    if (bgTextTitleLeft && bgTextTitleRight) {
      const leftTitleOpacity = 0.5 - percent * 0.5;
      const rightTitleOpacity = 0.5 + percent * 0.5;
      
      bgTextTitleLeft.style.opacity = Math.max(0, Math.min(1, leftTitleOpacity));
      bgTextTitleRight.style.opacity = Math.max(0, Math.min(1, rightTitleOpacity));
    }
    
    // Description opacity (hidden by default, shows on tilt)
    if (bgTextDescLeft && bgTextDescRight) {
      const leftDescOpacity = Math.max(0, -percent);
      const rightDescOpacity = Math.max(0, percent);
      
      bgTextDescLeft.style.opacity = Math.min(1, leftDescOpacity);
      bgTextDescRight.style.opacity = Math.min(1, rightDescOpacity);
    }
  }
  
  /**
   * Mouse move handler
   */
  function handleMouseMove(e) {
    if (window.innerWidth <= 640) return;
    
    const centerX = window.innerWidth / 2;
    const percent = Math.max(-1, Math.min(1, (e.clientX - centerX) / (centerX * 0.5)));
    targetPercent = percent;
  }
  
  /**
   * Device orientation handler (gyroscope)
   */
  function handleOrientation(e) {
    const gamma = e.gamma || 0;  // Portrait left/right tilt
    const beta = e.beta || 0;    // Landscape left/right tilt
    
    // Detect screen orientation
    let isLandscape = false;
    if (screen.orientation && screen.orientation.type) {
      isLandscape = screen.orientation.type.includes('landscape');
    } else if (window.orientation !== undefined) {
      isLandscape = window.orientation === 90 || window.orientation === -90;
    } else {
      isLandscape = window.innerWidth > window.innerHeight;
    }
    
    let percent;
    if (isLandscape) {
      percent = Math.max(-1, Math.min(1, beta / 8));
    } else {
      percent = Math.max(-1, Math.min(1, gamma / 12));
    }
    
    targetPercent = percent;
  }
  
  /**
   * Animation loop
   */
  function animate() {
    if (!isAnimating) return;
    
    // Smooth interpolation
    currentPercent += (targetPercent - currentPercent) * 0.1;
    updateLayout(currentPercent);
    
    requestAnimationFrame(animate);
  }
  
  /**
   * Progressive image loading
   * Load full-size images in background after small placeholders are visible
   */
  function loadFullSizeImages() {
    const images = [
      { el: avatarPlayer, fullSrc: avatarPlayer ? avatarPlayer.dataset.srcFull : null },
      { el: avatarCreator, fullSrc: avatarCreator ? avatarCreator.dataset.srcFull : null }
    ];
    
    images.forEach(function(item) {
      if (!item.el || !item.fullSrc) return;
      
      // Create a new Image to preload the full-size version
      const preloadImg = new Image();
      
      preloadImg.onload = function() {
        // Full image loaded, swap it in with a smooth transition
        item.el.style.transition = 'opacity 0.5s ease';
        item.el.style.opacity = '0.7';
        
        setTimeout(function() {
          // Update both the img src and any picture source srcset
          item.el.src = item.fullSrc;
          
          var picture = item.el.parentElement;
          if (picture && picture.tagName === 'PICTURE') {
            var source = picture.querySelector('source');
            if (source) {
              source.srcset = item.fullSrc;
            }
          }
          
          item.el.style.opacity = '1';
          console.log('Full-size image loaded:', item.fullSrc);
        }, 300);
      };
      
      preloadImg.onerror = function() {
        console.log('Failed to load full-size image:', item.fullSrc);
      };
      
      // Start loading after a short delay to let the small image render first
      setTimeout(function() {
        preloadImg.src = item.fullSrc;
      }, 100);
    });
  }
  
  /**
   * Mobile menu toggle
   */
  window.toggleMenu = function() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.toggle('active');
      mobileNavOverlay.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };
  
  /**
   * WeChat QR Modal
   */
  window.showWeChatQR = function() {
    const modal = document.getElementById('wechatModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };
  
  window.closeWeChatModal = function(event) {
    if (event && event.target && !event.target.classList.contains('wechat-modal') && !event.target.classList.contains('wechat-modal-close')) {
      return;
    }
    const modal = document.getElementById('wechatModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
  
  /**
   * Initialize
   */
  function init() {
    // Mouse events
    document.addEventListener('mousemove', handleMouseMove);
    
    // Device orientation (gyroscope)
    if (window.DeviceOrientationEvent) {
      // iOS 13+ requires permission
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        document.body.addEventListener('click', function requestIOSPermission() {
          DeviceOrientationEvent.requestPermission()
            .then(function(permissionState) {
              if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
              }
            })
            .catch(function(error) {
              console.log('Device orientation permission denied:', error);
            });
          document.body.removeEventListener('click', requestIOSPermission);
        }, { once: true });
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }
    
    // Start animation loop
    animate();
    
    // Progressive image loading - load full-size images after small placeholders
    loadFullSizeImages();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
