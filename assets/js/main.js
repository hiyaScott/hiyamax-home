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

  // Debug data
  let debugData = {
    gamma: 0,
    beta: 0,
    alpha: 0,
    percent: 0,
    orientation: 'portrait',
    eventCount: 0,
    hasGyro: false,
    ua: navigator.userAgent.substring(0, 50)
  };

  /**
   * Create debug panel
   */
  function createDebugPanel() {
    var panel = document.createElement('div');
    panel.id = 'gyro-debug';
    panel.style.cssText = 'position:fixed;bottom:10px;left:10px;z-index:9999;background:rgba(0,0,0,0.85);color:#0f0;font-family:monospace;font-size:12px;padding:12px;border-radius:8px;max-width:320px;line-height:1.6;pointer-events:none;user-select:none;';
    panel.innerHTML = '<div style="color:#fff;font-weight:bold;margin-bottom:6px;">🧭 Gyroscope Debug</div>' +
      '<div id="debug-gamma">gamma: --</div>' +
      '<div id="debug-beta">beta: --</div>' +
      '<div id="debug-alpha">alpha: --</div>' +
      '<div id="debug-percent">percent: --</div>' +
      '<div id="debug-orient">orientation: --</div>' +
      '<div id="debug-count">events: 0</div>' +
      '<div id="debug-hasgyro">hasGyro: false</div>' +
      '<div id="debug-ua" style="color:#888;font-size:10px;margin-top:4px;">--</div>';
    document.body.appendChild(panel);
  }

  function updateDebugPanel() {
    var g = document.getElementById('debug-gamma');
    var b = document.getElementById('debug-beta');
    var a = document.getElementById('debug-alpha');
    var p = document.getElementById('debug-percent');
    var o = document.getElementById('debug-orient');
    var c = document.getElementById('debug-count');
    var h = document.getElementById('debug-hasgyro');
    var u = document.getElementById('debug-ua');
    if (g) g.textContent = 'gamma: ' + debugData.gamma.toFixed(2);
    if (b) b.textContent = 'beta: ' + debugData.beta.toFixed(2);
    if (a) a.textContent = 'alpha: ' + debugData.alpha.toFixed(2);
    if (p) p.textContent = 'percent: ' + debugData.percent.toFixed(3);
    if (o) o.textContent = 'orientation: ' + debugData.orientation;
    if (c) c.textContent = 'events: ' + debugData.eventCount;
    if (h) h.textContent = 'hasGyro: ' + debugData.hasGyro;
    if (u) u.textContent = debugData.ua;
  }

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

    debugData.eventCount++;

    const gamma = e.gamma || 0;
    const beta = e.beta || 0;
    const alpha = e.alpha || 0;

    debugData.gamma = gamma;
    debugData.beta = beta;
    debugData.alpha = alpha;

    // Mark gyro as active when we get real non-zero data
    if (Math.abs(gamma) > 0.1 || Math.abs(beta) > 0.1) {
      gyroActive = true;
      lastGyroTime = Date.now();
      debugData.hasGyro = true;
    }

    let isLandscape = false;
    if (screen.orientation && screen.orientation.type) {
      isLandscape = screen.orientation.type.includes('landscape');
    } else if (window.orientation !== undefined) {
      isLandscape = window.orientation === 90 || window.orientation === -90;
    } else {
      isLandscape = window.innerWidth > window.innerHeight;
    }

    debugData.orientation = isLandscape ? 'landscape' : 'portrait';

    let percent;
    if (isLandscape) {
      percent = Math.max(-1, Math.min(1, beta / 8));
    } else {
      percent = Math.max(-1, Math.min(1, gamma / 12));
    }

    debugData.percent = percent;
    targetPercent = percent;
    updateDebugPanel();
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
      debugData.hasGyro = false;
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
    // Create debug panel
    createDebugPanel();
    updateDebugPanel();

    // Mouse events — always listen, but handler checks gyroActive
    document.addEventListener('mousemove', handleMouseMove);

    // Device orientation (gyroscope)
    if (window.DeviceOrientationEvent) {
      // iOS 13+ requires permission request on user gesture
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
