---
layout: game
title: "Taking care of SPACE JUNK"
description: "太空垃圾终结者 — 使用鼠标控制飞船，收集太空垃圾，小心躲避陨石"
category: Game
color: linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)
emoji: 🚀
image: /assets/images/games/space-junk-intro.webp
thumbnail: /assets/images/games/thumbs/maxjunk-cover.webp
type: Game
platform: Scratch
year: 2024
date: 2024-05-02
---

<style>
.mj-intro-container {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
}

.mj-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mj-intro-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.mj-intro-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 500;
}

.mj-intro-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.mj-intro-tag {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.mj-intro-section {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.mj-intro-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mj-intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
}

.mj-intro-desc ul {
  list-style: none;
  padding-left: 0;
}

.mj-intro-desc li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.mj-intro-desc li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #6366f1;
}

.mj-hero-wrapper {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0 0 40px 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(30, 58, 95, 0.25);
}

.mj-hero-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.mj-hero-overlay {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mj-intro-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 48px;
  background: linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(30, 58, 95, 0.5), 0 0 0 4px rgba(255,255,255,0.3);
  letter-spacing: 1px;
  backdrop-filter: blur(8px);
}

.mj-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(30, 58, 95, 0.6), 0 0 0 4px rgba(255,255,255,0.4);
}

.mj-scratch-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #f59e0b;
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.mj-letter-box {
  font-style: italic;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #1e3a5f;
}

.mj-letter-box p {
  margin-bottom: 12px;
}

.mj-letter-box p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .mj-intro-container {
    padding: 24px 16px;
    min-height: calc(100vh - 160px);
  }

  .mj-intro-title {
    font-size: 28px;
  }

  .mj-intro-subtitle {
    font-size: 16px;
  }

  .mj-intro-section {
    padding: 20px;
  }

  .mj-hero-wrapper {
    width: 100%;
    margin: 0 0 32px 0;
  }

  .mj-hero-overlay {
    bottom: 16px;
  }

  .mj-intro-start-btn {
    padding: 14px 36px;
    font-size: 15px;
  }
}
</style>

<style>
.mj-intro-container {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
}

.mj-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mj-intro-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.mj-intro-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 500;
}

.mj-intro-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.mj-intro-tag {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.mj-intro-section {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.mj-intro-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mj-intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
}

.mj-intro-desc ul {
  list-style: none;
  padding-left: 0;
}

.mj-intro-desc li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.mj-intro-desc li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #6366f1;
}

.mj-hero-wrapper {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0 0 40px 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.25);
}

.mj-hero-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.mj-hero-overlay {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mj-intro-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 48px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.5), 0 0 0 4px rgba(255,255,255,0.3);
  letter-spacing: 1px;
  backdrop-filter: blur(8px);
}

.mj-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6), 0 0 0 4px rgba(255,255,255,0.4);
}

.mj-scratch-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #f59e0b;
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* Game player page */
.game-player-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.game-player-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* 4:3 aspect ratio for Scratch */
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}

.game-player-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.game-player-info {
  text-align: center;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}

.game-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.game-loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .mj-intro-container {
    padding: 24px 16px;
    min-height: calc(100vh - 160px);
  }

  .mj-intro-title {
    font-size: 32px;
  }

  .mj-intro-subtitle {
    font-size: 16px;
  }

  .mj-intro-section {
    padding: 20px;
  }

  .mj-hero-wrapper {
    width: 100%;
    margin: 0 0 32px 0;
  }

  .mj-hero-overlay {
    bottom: 16px;
  }

  .mj-intro-start-btn {
    padding: 14px 36px;
    font-size: 15px;
  }

  .game-player-container {
    padding: 10px;
  }
}
</style>

<div class="mj-intro-container">
  <div class="mj-hero-wrapper">
    <img src="{{ '/assets/images/games/space-junk-intro.webp' | relative_url }}" alt="Taking care of SPACE JUNK - 太空垃圾终结者">
    <div class="mj-hero-overlay">
      <a href="{{ '/games/maxjunk/play/' | relative_url }}" class="mj-intro-start-btn">
        <span>▶</span>
        <span>开始游戏</span>
      </a>
    </div>
  </div>

  <div class="mj-intro-content">
    <h1 class="mj-intro-title">Taking care of SPACE JUNK</h1>
    <p class="mj-intro-subtitle">太空垃圾终结者 — 保护宇宙，从清理太空垃圾开始</p>

    <div class="mj-intro-tags">
      <span class="mj-intro-tag">🚀 太空</span>
      <span class="mj-intro-tag">🎮 游戏</span>
      <span class="mj-intro-tag">♻️ 环保</span>
      <span class="mj-scratch-badge">🐱 Scratch</span>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">📖 关于游戏</div>
      <div class="mj-intro-desc">
        <p>《Taking care of SPACE JUNK》是一款以太空垃圾清理为主题的 Scratch 创意游戏。玩家使用鼠标控制飞船，在浩瀚的宇宙中收集太空垃圾，同时小心躲避陨石的袭击。</p>
        <p style="margin-top: 12px;">游戏融合了<strong>环保教育</strong>与<strong>太空探索</strong>的双重主题，通过趣味互动的方式，让玩家了解太空垃圾问题的严重性，以及保护宇宙环境的重要意义。</p>
      </div>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">🎯 核心玩法</div>
      <div class="mj-intro-desc">
        <ul>
          <li>🖱️ <strong>鼠标控制</strong>：移动鼠标控制飞船方向</li>
          <li>♻️ <strong>收集垃圾</strong>：靠近太空碎片自动收集</li>
          <li>☄️ <strong>躲避陨石</strong>：小心横冲直撞的陨石</li>
          <li>🏆 <strong>挑战高分</strong>：清理越多，得分越高</li>
        </ul>
      </div>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">📨 来自太空的一封信</div>
      <div class="mj-intro-desc" style="font-style: italic; background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #6366f1;">
        <p>每当你站在地球上仰望星空，是不是充满了无限好奇，想象着自己在宇宙中遨游的情景。</p>
        <p>可如果从太空中观察地球，会发现这颗美丽的蔚蓝色行星的外层，漂浮着无数碎片。这些碎片大多是人类发射到地球大气层之外、已经停止工作或正在运行过程中的航天器意外解体所形成的。</p>
        <p>它们不受控制地横冲直撞，威胁到卫星，也威胁着航天员的生命安全，让人类对太空的探索造成了阻碍，甚至危及地球的环境。</p>
        <p>所以它们被称为<strong>"太空垃圾"</strong>。</p>
        <p>当太空垃圾密度达到一定阈值时，就产生<strong>"凯斯勒现象"</strong>，碎片之间的碰撞不断叠加，直至将所有航天器损毁。</p>
        <p>随着科技发展的日新月异，人类探索星际的脚步越走越远，太空垃圾的数量却逐年递增。这已经成为人类急需解决的问题。</p>
        <p>智慧的科学家们肯定能想出更多更好的方法来征服太空垃圾，也为未来的星际移民计划创造更有利的条件。</p>
        <p>在地球的小朋友们也要好好学习，常常抬头仰望夜空，关注宇宙太空，心怀浩瀚星辰，去探索未来的无限可能。</p>
      </div>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">🛠 技术信息</div>
      <div class="mj-intro-desc">
        <ul>
          <li><strong>引擎</strong>：Scratch Desktop 3.12.0</li>
          <li><strong>平台</strong>：Windows 11 / Web 浏览器</li>
          <li><strong>版本</strong>：V1.00</li>
          <li><strong>发布</strong>：2024 年 5 月</li>
        </ul>
      </div>
    </div>
  </div>
</div>
