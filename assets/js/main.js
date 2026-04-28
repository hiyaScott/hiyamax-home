// HiyaMax - Main JavaScript
// v1.5.2: v1.5.1 + devicemotion fallback for HarmonyOS/Android

(function() {
  'use strict';

  const avatarWrapper = document.getElementById('avatarWrapper');
  const avatarPlayer = document.getElementById('avatarPlayer');
  const avatarCreator = document.getElementById('avatarCreator');
  const bgTextTitleLeft = document.querySelector('.bg-text-left .bg-text-title');
  const bgTextTitleRight = document.querySelector('.bg-text-right .bg-text-title');
  const bgTextDescLeft = document.querySelector('.bg-text-left .bg-text-desc');
  const bgTextDescRight = document.querySelector('.bg-text-right .bg-text-desc');

  let currentPercent = 0;
  let targetPercent = 0;
  let isAnimating = true;

  // Debug data
  let debugData = {
    gamma: 0, beta: 0, alpha: 0, percent: 0,
    orientation: 'portrait', eventCount: 0, hasGyro: false,
    ua: navigator.userAgent.substring(0, 50)
  };

  function createDebugPanel() {
    var panel = document.createElement('div');
    panel.id = 'gyro-debug';
    panel.style.cssText = 'position:fixed;bottom:10px;left:10px;z-index:9999;background:rgba(0,0,0,0.85);color:#0f0;font-family:monospace;font-size:11px;padding:10px;border-radius:6px;max-width:280px;line-height:1.5;pointer-events:none;user-select:none;';
    panel.innerHTML = '<div style="color:#fff;font-weight:bold;margin-bottom:4px;font-size:12px;">🧭 Gyro Debug v1.5.2</div>' +
      '<div id="debug-gamma">gamma: --</div>' +
      '<div id="debug-beta">beta: --</div>' +
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
    var p = document.getElementById('debug-percent');
    var o = document.getElementById('debug-orient');
    var c = document.getElementById('debug-count');
    var h = document.getElementById('debug-hasgyro');
    var u = document.getElementById('debug-ua');
    if (g) g.textContent = 'gamma: ' + debugData.gamma.toFixed(2);
    if (b) b.textContent = 'beta: ' + debugData.beta.toFixed(2);
    if (p) p.textContent = 'percent: ' + debugData.percent.toFixed(3);
    if (o) o.textContent = 'orient: ' + debugData.orientation;
    if (c) c.textContent = 'events: ' + debugData.eventCount;
    if (h) h.textContent = 'hasGyro: ' + debugData.hasGyro;
    if (u) u.textContent = debugData.ua;
  }

  function updateLayout(percent) {
    if (!avatarWrapper) return;
    const offsetX = -percent * 30;
    avatarWrapper.style.transform = `translate(calc(-50% + ${offsetX}px), 0)`;
    const playerClip = Math.max(0, Math.min(100, 50 - percent * 50));
    const creatorClip = Math.max(0, Math.min(100, 50 + percent * 50));
    if (avatarPlayer) avatarPlayer.style.clipPath = `inset(0 ${100 - playerClip}% 0 0)`;
    if (avatarCreator) avatarCreator.style.clipPath = `inset(0 0 0 ${100 - creatorClip}%)`;
    if (bgTextTitleLeft && bgTextTitleRight) {
      bgTextTitleLeft.style.opacity = Math.max(0, Math.min(1, 0.5 - percent * 0.5));
      bgTextTitleRight.style.opacity = Math.max(0, Math.min(1, 0.5 + percent * 0.5));
    }
    if (bgTextDescLeft && bgTextDescRight) {
      bgTextDescLeft.style.opacity = Math.min(1, Math.max(0, -percent));
      bgTextDescRight.style.opacity = Math.min(1, Math.max(0, percent));
    }
  }

  function handleMouseMove(e) {
    if (window.innerWidth <= 640) return;
    const centerX = window.innerWidth / 2;
    const percent = Math.max(-1, Math.min(1, (e.clientX - centerX) / (centerX * 0.5)));
    targetPercent = percent;
  }

  // ===== Primary: deviceorientation (iOS + standard Android) =====
  function handleOrientation(e) {
    if (!e) return;
    debugData.eventCount++;

    const gamma = e.gamma || 0;
    const beta = e.beta || 0;
    const alpha = e.alpha || 0;

    debugData.gamma = gamma;
    debugData.beta = beta;
    debugData.alpha = alpha;

    if (Math.abs(gamma) > 0.1 || Math.abs(beta) > 0.1) {
      debugData.hasGyro = true;
    }

    let isLandscape = window.innerWidth > window.innerHeight;
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

  // ===== Fallback: devicemotion (HarmonyOS + Android without gyro) =====
  function handleMotion(e) {
    if (!e) return;

    var acc = e.accelerationIncludingGravity;
    if (!acc) return;

    var ax = acc.x || 0;
    var ay = acc.y || 0;
    var az = acc.z || 0;

    // Skip if deviceorientation is already working
    if (debugData.eventCount > 0) return;

    debugData.eventCount++;

    var isLandscape = window.innerWidth > window.innerHeight;
    debugData.orientation = isLandscape ? 'landscape' : 'portrait';

    var percent;
    if (isLandscape) {
      percent = Math.max(-1, Math.min(1, ay / 5));
      debugData.gamma = ay;
    } else {
      percent = Math.max(-1, Math.min(1, ax / 5));
      debugData.gamma = ax;
    }

    debugData.beta = az;

    if (Math.abs(percent) > 0.05) {
      debugData.hasGyro = true;
    }

    debugData.percent = percent;
    targetPercent = percent;
    updateDebugPanel();
  }

  function animate() {
    if (!isAnimating) return;
    currentPercent += (targetPercent - currentPercent) * 0.1;
    updateLayout(currentPercent);
    requestAnimationFrame(animate);
  }

  window.toggleMenu = function() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.toggle('active');
      mobileNavOverlay.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
  };

  window.showWeChatQR = function() {
    const modal = document.getElementById('weChatModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeWeChatModal = function(event) {
    if (event && event.target && !event.target.classList.contains('wechat-modal') && !event.target.classList.contains('wechat-modal-close')) return;
    const modal = document.getElementById('weChatModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  function init() {
    createDebugPanel();
    updateDebugPanel();

    document.addEventListener('mousemove', handleMouseMove);

    // deviceorientation (standard)
    if (window.DeviceOrientationEvent) {
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

    // devicemotion fallback (HarmonyOS, some Android)
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();