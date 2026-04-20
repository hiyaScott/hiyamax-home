---
title: Mama Counter
description: 记录小朋友一天喊多少次"妈妈"的亲子互动计数器
category: Utility
color: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
emoji: 👶
image: /assets/images/games/mama-counter-hero.png
type: Utility
platform: Mobile
year: 2024
---

<style>
.mc-intro-container {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
}

.mc-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mc-intro-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.mc-intro-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 500;
}

.mc-intro-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.mc-intro-tag {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.mc-intro-section {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.mc-intro-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mc-intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
}

.mc-intro-desc ul {
  list-style: none;
  padding-left: 0;
}

.mc-intro-desc li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.mc-intro-desc li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #f5576c;
}

.mc-hero-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(245, 87, 108, 0.25);
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mc-hero-content {
  text-align: center;
  color: #fff;
  padding: 40px;
}

.mc-hero-emoji {
  font-size: 120px;
  margin-bottom: 20px;
}

.mc-hero-text {
  font-size: 24px;
  font-weight: 600;
}

.mc-hero-overlay {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mc-intro-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 48px;
  background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(245, 87, 108, 0.5), 0 0 0 4px rgba(255,255,255,0.3);
  letter-spacing: 1px;
  backdrop-filter: blur(8px);
}

.mc-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(245, 87, 108, 0.6), 0 0 0 4px rgba(255,255,255,0.4);
}

@media (max-width: 768px) {
  .mc-intro-container {
    padding: 24px 16px;
    min-height: calc(100vh - 160px);
  }
  
  .mc-intro-title {
    font-size: 32px;
  }
  
  .mc-intro-subtitle {
    font-size: 16px;
  }
  
  .mc-intro-section {
    padding: 20px;
  }
  
  .mc-hero-wrapper {
    border-radius: 12px;
    margin-bottom: 32px;
    min-height: 250px;
  }
  
  .mc-hero-emoji {
    font-size: 80px;
  }
  
  .mc-hero-text {
    font-size: 18px;
  }
  
  .mc-hero-overlay {
    bottom: 16px;
  }
  
  .mc-intro-start-btn {
    padding: 14px 36px;
    font-size: 15px;
  }
}
</style>

<div class="mc-intro-container">
  <div class="mc-hero-wrapper">
    <div class="mc-hero-content">
      <div class="mc-hero-emoji">👶</div>
      <div class="mc-hero-text">妈妈计数器</div>
    </div>
    <div class="mc-hero-overlay">
      <a href="{{ '/games/mama-counter/play/' | relative_url }}" target="_blank" rel="noopener" class="mc-intro-start-btn">
        <span>🎙️</span>
        <span>开始计数</span>
      </a>
    </div>
  </div>
  
  <div class="mc-intro-content">
    <h1 class="mc-intro-title">妈妈计数器</h1>
    <p class="mc-intro-subtitle">Mama Counter - 记录小朋友一天喊多少次"妈妈"</p>
    
    <div class="mc-intro-tags">
      <span class="mc-intro-tag">👶 亲子</span>
      <span class="mc-intro-tag">🎙️ 语音</span>
      <span class="mc-intro-tag">📊 统计</span>
    </div>
    
    <div class="mc-intro-section">
      <div class="mc-intro-section-title">📖 游戏介绍</div>
      <div class="mc-intro-desc">
        <p>《妈妈计数器》是一款轻松有趣的亲子互动工具。通过语音识别自动检测小朋友喊"妈妈"的次数，并生成每日/每周/每月的统计报告。适合用来记录和调侃小朋友对妈妈的依赖程度！</p>
      </div>
    </div>
    
    <div class="mc-intro-section">
      <div class="mc-intro-section-title">🎮 核心功能</div>
      <div class="mc-intro-desc">
        <ul>
          <li><strong>语音监听</strong>：自动识别"妈妈"、"麻麻"、"妈咪"等关键词</li>
          <li><strong>实时计数</strong>：检测到时立即+1，配有音效提示</li>
          <li><strong>数据统计</strong>：查看今日、本周、本月、历史最高记录</li>
          <li><strong>时间记录</strong>：每次喊妈妈的具体时间都会记录下来</li>
          <li><strong>手动补录</strong>：漏听的可以手动添加</li>
        </ul>
      </div>
    </div>
    
    <div class="mc-intro-section">
      <div class="mc-intro-section-title">💡 使用提示</div>
      <div class="mc-intro-desc">
        <ul>
          <li>点击"开始监听"后，保持页面打开，建议锁定屏幕</li>
          <li>数据保存在本地，刷新页面不会丢失</li>
          <li>支持 Chrome 和 Safari 浏览器</li>
          <li>需要授权麦克风权限才能使用语音识别</li>
        </ul>
      </div>
    </div>
  </div>
</div>
