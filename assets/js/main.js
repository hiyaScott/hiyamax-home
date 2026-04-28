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
  let orientationEnabled = false;
  let lastGyroTime = 0;
  
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
    if (!e) return;
    
    const gamma = e.gamma || 0;  // Portrait left/right tilt (-90 to 90)
    const beta = e.beta || 0;    // Front/back tilt (-180 to 180)
    const alpha = e.alpha || 0;   // Compass direction (0 to 360)
    
    // Detect if we have real gyro data (not just 0,0,0 or null)
    if (alpha === 0 && beta === 0 && gamma === 0) return;
    lastGyroTime = Date.now();
    
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
      // In landscape, beta maps to left/right tilt
      percent = Math.max(-1, Math.min(1, beta / 8));
    } else {
      // In portrait, gamma maps to left/right tilt
      percent = Math.max(-1, Math.min(1, gamma / 12));
    }
    
    targetPercent = percent;
  }
  
  /**
   * Device motion handler (accelerometer fallback)
   */
  function handleMotion(e) {
    if (!e || !e.rotationRate) return;
    
    const rr = e.rotationRate;
    // rotationRate.beta approximates left/right tilt in many devices
    const tilt = rr.beta || 0;
    if (tilt === 0) return;
    
    lastGyroTime = Date.now();
    const percent = Math.max(-1, Math.min(1, tilt / 20));
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
   * Check if gyroscope data is being received
   */
  function checkGyroActive() {
    const now = Date.now();
    const elapsed = now - lastGyroTime;
    
    // If no gyro data for 2 seconds, fall back to auto-demo mode on mobile
    if (orientationEnabled && elapsed > 2000 && window.innerWidth <= 640) {
      // Gentle auto-sway when no gyro available
      const sway = Math.sin(now / 1500) * 0.15;
      targetPercent = sway;
    }
  }
  
  /**
   * Enable device orientation with permission handling
   */
  function enableOrientation() {
    if (orientationEnabled) return;
    orientationEnabled = true;
    
    // Try deviceorientation first
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    
    // Fallback to devicemotion for devices without gyro
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    }
    
    // Start gyro check interval
    setInterval(checkGyroActive, 1000);
  }
  
  /**
   * Request iOS device orientation permission
   */
  function requestOrientationPermission() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(function(permissionState) {
          if (permissionState === 'granted') {
            enableOrientation();
          }
          console.log('Device orientation permission:', permissionState);
        })
        .catch(function(error) {
          console.log('Device orientation permission denied:', error);
          // Still try to enable - some iOS versions work without explicit permission
          enableOrientation();
        });
    } else {
      enableOrientation();
    }
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
    // Mouse events (desktop)
    document.addEventListener('mousemove', handleMouseMove);
    
    // Device orientation setup - requires user interaction on most mobile browsers
    if (window.DeviceOrientationEvent || window.DeviceMotionEvent) {
      // Use both click and touchstart to catch all interactions
      var permissionRequested = false;
      
      function onFirstInteraction(e) {
        if (permissionRequested) return;
        permissionRequested = true;
        requestOrientationPermission();
      }
      
      document.body.addEventListener('click', onFirstInteraction, { once: true });
      document.body.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
    }
    
    // Start animation loop
    animate();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
