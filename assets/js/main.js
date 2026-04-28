// HiyaMax - Main JavaScript
// Handles avatar interaction, mobile menu, and device orientation

(function() {
  'use strict';

  // Avatar elements
  const avatarWrapper = document.getElementById('avatarWrapper');
  const avatarPlayer = document.getElementById('avatarPlayer');
  const avatarCreator = document.getElementById('avatarCreator');

  // Background text elements
  const bgTextTitleLeft = document.querySelector('.bg-text-left .bg-text-title');
  const bgTextTitleRight = document.querySelector('.bg-text-right .bg-text-title');
  const bgTextDescLeft = document.querySelector('.bg-text-left .bg-text-desc');
  const bgTextDescRight = document.querySelector('.bg-text-right .bg-text-desc');

  // State
  let currentPercent = 0;
  let targetPercent = 0;
  let isAnimating = true;
  let gyroActive = false;
  let lastGyroTime = 0;

  /**
   * Update avatar layout based on percentage (-1 to 1)
   */
  function updateLayout(percent) {
    if (!avatarWrapper) return;

    const offsetX = -percent * 30;
    avatarWrapper.style.transform = `translate(calc(-50% + ${offsetX}px), 0)`;

    const playerClip = Math.max(0, Math.min(100, 50 - percent * 50));
    const creatorClip = Math.max(0, Math.min(100, 50 + percent * 50));

    if (avatarPlayer) {
      avatarPlayer.style.clipPath = `inset(0 ${100 - playerClip}% 0 0)`;
    }
    if (avatarCreator) {
      avatarCreator.style.clipPath = `inset(0 0 0 ${100 - creatorClip}%)`;
    }

    if (bgTextTitleLeft && bgTextTitleRight) {
      bgTextTitleLeft.style.opacity = Math.max(0, Math.min(1, 0.5 - percent * 0.5));
      bgTextTitleRight.style.opacity = Math.max(0, Math.min(1, 0.5 + percent * 0.5));
    }

    if (bgTextDescLeft && bgTextDescRight) {
      bgTextDescLeft.style.opacity = Math.min(1, Math.max(0, -percent));
      bgTextDescRight.style.opacity = Math.min(1, Math.max(0, percent));
    }
  }

  /**
   * Mouse move handler — desktop only, disabled when gyro is active
   */
  function handleMouseMove(e) {
    // Skip if gyroscope is providing data
    if (gyroActive) return;
    // Skip on small screens (phones in portrait)
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

    const gamma = e.gamma || 0;
    const beta = e.beta || 0;

    // Mark gyro as active when we get real non-zero data
    if (Math.abs(gamma) > 0.1 || Math.abs(beta) > 0.1) {
      gyroActive = true;
      lastGyroTime = Date.now();
    }

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

    // Auto-sway on mobile when no gyro data available
    if (!gyroActive && window.innerWidth <= 640) {
      const now = Date.now();
      const sway = Math.sin(now / 1500) * 0.15;
      targetPercent = sway;
    }

    // If gyro goes silent for 3s, mark inactive (allows mouse to take over)
    if (gyroActive && Date.now() - lastGyroTime > 3000) {
      gyroActive = false;
    }

    currentPercent += (targetPercent - currentPercent) * 0.1;
    updateLayout(currentPercent);

    requestAnimationFrame(animate);
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
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
  };

  /**
   * WeChat QR Modal
   */
  window.showWeChatQR = function() {
    const modal = document.getElementById('weChatModal');
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
    // Mouse events — always listen, but handler checks gyroActive
    document.addEventListener('mousemove', handleMouseMove);

    // Device orientation — iOS requires user gesture (click) to request permission
    if (window.DeviceOrientationEvent) {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS 13+: request permission on first click anywhere
        document.body.addEventListener('click', function requestIOSPermission() {
          DeviceOrientationEvent.requestPermission()
            .then(function(permissionState) {
              if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
              }
              console.log('Device orientation permission:', permissionState);
            })
            .catch(function(error) {
              console.log('Device orientation permission denied:', error);
            });
          document.body.removeEventListener('click', requestIOSPermission);
        }, { once: true });
      } else {
        // Android / older iOS: direct access
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
