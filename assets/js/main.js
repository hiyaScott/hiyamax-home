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
  
  // Animation state
  let currentPercent = 0;
  let targetPercent = 0;
  let isAnimating = true;
  let orientationEnabled = false;
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
    panel.style.cssText = 'position:fixed;bottom:10px;left:10px;z-index:9999;background:rgba(0,0,0,0.85);color:#0f0;font-family:monospace;font-size:11px;padding:10px;border-radius:6px;max-width:280px;line-height:1.5;pointer-events:none;user-select:none;';
    panel.innerHTML = '<div style="color:#fff;font-weight:bold;margin-bottom:4px;font-size:12px;">🧭 Gyro Debug v1.6.0-baseline</div>' +
      '<div id="debug-gamma">gamma: --</div>' +
      '<div id="debug-beta">beta: --</div>' +
      '<div id="debug-alpha">alpha: --</div>' +
      '<div id="debug-percent">percent: --</div>' +
      '<div id="debug-orient">orient: --</div>' +
      '<div id="debug-count">events: 0</div>' +
      '<div id="debug-hasgyro">hasGyro: false</div>' +
      '<div id="debug-ua" style="color:#888;font-size:9px;margin-top:4px;">--</div>';
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
    if (o) o.textContent = 'orient: ' + debugData.orientation;
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
    
    debugData.eventCount++;
    
    const gamma = e.gamma || 0;
    const beta = e.beta || 0;
    const alpha = e.alpha || 0;
    
    debugData.gamma = gamma;
    debugData.beta = beta;
    debugData.alpha = alpha;
    
    // Detect if we have real gyro data (not just 0,0,0 or null)
    if (alpha === 0 && beta === 0 && gamma === 0) return;
    
    lastGyroTime = Date.now();
    debugData.hasGyro = true;
    
    // Detect screen orientation
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
   * Device motion handler (accelerometer fallback)
   */
  function handleMotion(e) {
    if (!e || !e.rotationRate) return;
    
    const rr = e.rotationRate;
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
    
    if (orientationEnabled && elapsed > 2000 && window.innerWidth <= 640) {
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
    
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    }
    
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
    createDebugPanel();
    updateDebugPanel();
    
    // Mouse events (desktop)
    document.addEventListener('mousemove', handleMouseMove);
    
    // Device orientation setup - requires user interaction on most mobile browsers
    if (window.DeviceOrientationEvent || window.DeviceMotionEvent) {
      var permissionRequested = false;
      
      function onFirstInteraction(e) {
        if (permissionRequested) return;
        permissionRequested = true;
        requestOrientationPermission();
      }
      
      document.body.addEventListener('click', onFirstInteraction, { once: true });
      document.body.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
    }
    
    animate();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
