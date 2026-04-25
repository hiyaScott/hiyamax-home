---
title: MaxJunk
description: 只存在于你的想象 - 一个由 Scratch 制作的创意互动游戏
category: Game
color: linear-gradient(135deg, #6366f1 0%, #a855f7 100%)
emoji: 🎮
image: /assets/images/games/maxjunk-cover.jpg
thumbnail: /assets/images/games/maxjunk-cover.jpg
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
}
</style>

<div class="mj-intro-container">
  <div class="mj-hero-wrapper">
    <img src="{{ '/assets/images/games/maxjunk-cover.jpg' | relative_url }}" alt="MaxJunk - 只存在于你的想象">
    <div class="mj-hero-overlay">
      <a href="{{ '/games/maxjunk/play/' | relative_url }}" class="mj-intro-start-btn">
        <span>▶</span>
        <span>开始游戏</span>
      </a>
    </div>
  </div>

  <div class="mj-intro-content">
    <h1 class="mj-intro-title">MaxJunk</h1>
    <p class="mj-intro-subtitle">只存在于你的想象 — 由 Scratch 制作的创意互动体验</p>

    <div class="mj-intro-tags">
      <span class="mj-intro-tag">🎮 游戏</span>
      <span class="mj-intro-tag">🧩 互动</span>
      <span class="mj-scratch-badge">🐱 Scratch</span>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">📖 关于游戏</div>
      <div class="mj-intro-desc">
        <p>《MaxJunk》是一款使用 Scratch 平台创作的互动游戏。项目名称"只存在于你的想象"暗示了游戏的核心体验 —— 探索想象力的边界，发现那些只存在于你脑海中的奇妙世界。</p>
      </div>
    </div>

    <div class="mj-intro-section">
      <div class="mj-intro-section-title">🛠 技术信息</div>
      <div class="mj-intro-desc">
        <ul>
          <li><strong>引擎</strong>：Scratch 3.0</li>
          <li><strong>平台</strong>：Web 浏览器直接运行</li>
          <li><strong>版本</strong>：V1.00</li>
          <li><strong>发布</strong>：2024 年 5 月</li>
        </ul>
      </div>
    </div>
  </div>
</div>
