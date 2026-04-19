---
title: Word Alchemy
description: 词语炼金术 - 元素合成解谜游戏
category: Puzzle
color: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
emoji: 🔮
type: Puzzle
platform: Web
year: 2024
---

<style>
.wa-intro-container {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
}

.wa-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wa-intro-icon {
  font-size: 96px;
  margin-bottom: 16px;
  animation: wa-float 3s ease-in-out infinite;
  filter: drop-shadow(0 8px 32px rgba(245, 158, 11, 0.3));
}

@keyframes wa-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.wa-intro-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.wa-intro-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 500;
}

.wa-intro-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.wa-intro-tag {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.wa-intro-section {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.wa-intro-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wa-intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
}

.wa-intro-desc ul {
  list-style: none;
  padding-left: 0;
}

.wa-intro-desc li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.wa-intro-desc li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
}

.wa-intro-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 56px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.4);
  letter-spacing: 1px;
  margin: 20px auto 40px;
}

.wa-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.5);
}

.wa-hero-image {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 32px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.25);
}

.wa-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .wa-intro-container {
    padding: 24px 16px;
    min-height: calc(100vh - 160px);
  }
  
  .wa-intro-title {
    font-size: 32px;
  }
  
  .wa-intro-subtitle {
    font-size: 16px;
  }
  
  .wa-intro-icon {
    font-size: 72px;
  }
  
  .wa-intro-section {
    padding: 20px;
  }
  
  .wa-intro-start-btn {
    padding: 16px 40px;
    font-size: 16px;
    width: 100%;
    justify-content: center;
  }
  
  .wa-hero-image {
    border-radius: 12px;
    margin-bottom: 24px;
  }
}
</style>

<div class="wa-intro-container">
  <div class="wa-hero-image">
    <img src="{{ '/assets/images/games/word-alchemy-hero.webp' | relative_url }}" alt="词语炼金术 - 魔法书">
  </div>
  
  <div class="wa-intro-content">
    <div class="wa-intro-icon">🔮</div>
    <h1 class="wa-intro-title">词语炼金术</h1>
    <p class="wa-intro-subtitle">Word Alchemy - 元素合成解谜游戏</p>
    
    <div class="wa-intro-tags">
      <span class="wa-intro-tag">🧩 解谜</span>
      <span class="wa-intro-tag">💡 益智</span>
      <span class="wa-intro-tag">🎯 合成</span>
    </div>
    
    <div class="wa-intro-section">
      <div class="wa-intro-section-title">📖 游戏介绍</div>
      <div class="wa-intro-desc">
        <p>《词语炼金术》是一款创意元素合成解谜游戏。从基础的🔥火、💧水、🌍土、💨风四种元素开始，通过不断的组合与探索，发现隐藏在这个世界中的 50+ 种神秘元素。</p>
      </div>
    </div>
    
    <div class="wa-intro-section">
      <div class="wa-intro-section-title">🎮 核心玩法</div>
      <div class="wa-intro-desc">
        <ul>
          <li><strong>元素合成</strong>：将两种不同的元素组合，创造出全新的元素</li>
          <li><strong>配方探索</strong>：50+ 种隐藏配方等待你的发现</li>
          <li><strong>关卡挑战</strong>：完成特定目标，解锁更多元素</li>
          <li><strong>炼金图鉴</strong>：收集所有元素，完成你的炼金百科</li>
        </ul>
      </div>
    </div>
    
    <a href="https://hiyascott.github.io/scott-portfolio/games/word-alchemy/" class="wa-intro-start-btn" target="_blank" rel="noopener">
      <span>✨</span>
      <span>开始游戏</span>
    </a>
  </div>
</div>
