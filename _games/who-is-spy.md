---
title: Who is Spy
description: 多人推理派对游戏，找出隐藏在你身边的卧底
category: Party
color: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
emoji: 🕵️
image: /assets/images/games/undercover-hero.png
thumbnail: /assets/images/games/thumbs/undercover-hero.webp
type: Party
platform: Web
year: 2024
date: 2026-04-21
---

<style>
.ws-intro-container {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
}

.ws-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ws-intro-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.ws-intro-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 500;
}

.ws-intro-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.ws-intro-tag {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.ws-intro-section {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.ws-intro-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ws-intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
}

.ws-intro-desc ul {
  list-style: none;
  padding-left: 0;
}

.ws-intro-desc li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.ws-intro-desc li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4facfe;
}

.ws-hero-wrapper {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0 0 40px 0;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(79, 172, 254, 0.25);
  border-radius: 16px;
}

.ws-hero-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.ws-hero-overlay {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.ws-intro-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 48px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(79, 172, 254, 0.5), 0 0 0 4px rgba(255,255,255,0.3);
  letter-spacing: 1px;
  backdrop-filter: blur(8px);
}

.ws-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(79, 172, 254, 0.6), 0 0 0 4px rgba(255,255,255,0.4);
}

@media (max-width: 768px) {
  .ws-intro-container {
    padding: 24px 16px;
    min-height: calc(100vh - 160px);
  }
  
  .ws-intro-title {
    font-size: 32px;
  }
  
  .ws-intro-subtitle {
    font-size: 16px;
  }
  
  .ws-intro-section {
    padding: 20px;
  }
  
  .ws-hero-wrapper {
    border-radius: 12px;
    margin-bottom: 32px;
    min-height: 250px;
  }
  
  .ws-hero-wrapper img {
    width: 100%;
    height: auto;
  }
  
  .ws-hero-overlay {
    bottom: 16px;
  }
  
  .ws-intro-start-btn {
    padding: 14px 36px;
    font-size: 15px;
  }
}
</style>

<div class="ws-intro-container">
  <div class="ws-hero-wrapper">
    <picture>
      <source srcset="{{ '/assets/images/games/undercover-hero.webp' | relative_url }}" type="image/webp">
      <img src="{{ '/assets/images/games/undercover-hero.png' | relative_url }}" alt="谁是卧底" loading="lazy">
    </picture>
    <div class="ws-hero-overlay">
      <a href="{{ '/games/who-is-spy/play/' | relative_url }}" target="_blank" rel="noopener" class="ws-intro-start-btn">
        <span>🎮</span>
        <span>开始游戏</span>
      </a>
    </div>
  </div>
  
  <div class="ws-intro-content">
    <h1 class="ws-intro-title">谁是卧底</h1>
    <p class="ws-intro-subtitle">Who is Spy - 多人推理派对游戏</p>
    
    <div class="ws-intro-tags">
      <span class="ws-intro-tag">🎉 派对</span>
      <span class="ws-intro-tag">🧠 推理</span>
      <span class="ws-intro-tag">👥 多人</span>
    </div>
    
    <div class="ws-intro-section">
      <div class="ws-intro-section-title">📖 游戏介绍</div>
      <div class="ws-intro-desc">
        <p>《谁是卧底》是一款经典的多人推理派对游戏。玩家中大部分是拿到相同词语的"平民"，少数是拿到相近词语的"卧底"。通过轮流描述和投票，平民需要找出卧底，卧底则需要隐藏身份。适合朋友聚会、家庭娱乐！</p>
      </div>
    </div>
    
    <div class="ws-intro-section">
      <div class="ws-intro-section-title">🎮 游戏规则</div>
      <div class="ws-intro-desc">
        <ul>
          <li><strong>发牌阶段</strong>：每人秘密查看自己的词，大部分人是相同的（平民），1-2人是相近的词（卧底）</li>
          <li><strong>描述阶段</strong>：轮流描述自己的词，不能直接说出词中的字，也不能说同音字</li>
          <li><strong>投票阶段</strong>：根据描述，投票选出最像卧底的人</li>
          <li><strong>胜利条件</strong>：平民找出所有卧底获胜；卧底撑到最后或猜出平民词获胜</li>
        </ul>
      </div>
    </div>
    
    <div class="ws-intro-section">
      <div class="ws-intro-section-title">✨ 游戏特色</div>
      <div class="ws-intro-desc">
        <ul>
          <li>支持3-10人同时游戏，推荐5-8人效果最佳</li>
          <li>内置丰富的词库：动物、水果、职业、体育、美食、地点、历史、科技等</li>
          <li>手机端友好设计，聚会时方便传递查看</li>
          <li>每局词组随机抽取，重复可玩性高</li>
        </ul>
      </div>
    </div>
  </div>
</div>
