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
/* ========== 介绍页样式（浅色主题） ========== */
.wa-intro-page {
  background: linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%);
  color: #1a1a2e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 20px;
}

.wa-intro-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.wa-intro-back-btn {
  padding: 8px 14px;
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  color: #586069;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.wa-intro-back-btn:hover {
  background: #f6f8fa;
  color: #1a1a2e;
}

.wa-intro-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
}

.wa-intro-icon {
  font-size: 96px;
  margin-bottom: 16px;
  animation: wa-float 3s ease-in-out infinite;
  filter: drop-shadow(0 8px 32px rgba(245, 158, 11, 0.3));
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
  margin-bottom: 32px;
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
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.4);
  letter-spacing: 1px;
  margin: 20px 0 40px;
}

.wa-intro-start-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.5);
}

.wa-intro-start-btn:active {
  transform: translateY(0) scale(0.98);
}

@keyframes wa-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* 响应式 */
@media (max-width: 768px) {
  .wa-intro-page {
    padding: 16px;
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
  
  .wa-intro-start-btn {
    padding: 16px 40px;
    font-size: 16px;
  }
}

/* ========== 游戏界面样式（深色主题 - 完全复制 scott-portfolio 版本） ========== */
.wa-game-interface {
  display: none;
}

.wa-game-interface.active {
  display: block;
}

.wa-game-interface * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 色彩系统 */
.wa-game-interface {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --accent-gold: #f59e0b;
  --accent-cyan: #06b6d4;
  --accent-purple: #8b5cf6;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  line-height: 1.6;
}

/* 顶部导航 */
.wa-game-interface .nav-bar {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 16px;
}

.wa-game-interface .nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.wa-game-interface .back-btn {
  padding: 8px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.wa-game-interface .back-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.wa-game-interface .game-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.wa-game-interface .stats-mini {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: var(--text-secondary);
}

.wa-game-interface .stats-mini span {
  color: var(--accent-gold);
  font-weight: 600;
}

/* 主游戏区域 */
.wa-game-interface .game-container {
  width: 100%;
  max-width: 600px;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border);
  overflow: hidden;
}

/* 目标区域 */
.wa-game-interface .target-section {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%);
  border-bottom: 2px solid var(--accent-gold);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
}

.wa-game-interface .target-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wa-game-interface .target-level-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wa-game-interface .level-code {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 600;
  letter-spacing: 1px;
}

.wa-game-interface .target-label-badge {
  font-size: 10px;
  color: var(--accent-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  background: rgba(245, 158, 11, 0.2);
  padding: 3px 8px;
  border-radius: 10px;
}

.wa-game-interface .target-stat {
  font-size: 13px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.wa-game-interface .target-stat-value {
  color: var(--accent-gold);
  font-weight: 700;
  font-size: 14px;
}

.wa-game-interface .target-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  border-left: 1px solid rgba(245, 158, 11, 0.3);
  margin-left: 20px;
}

.wa-game-interface .target-word {
  font-size: 72px;
  font-weight: 800;
  color: var(--text-primary);
  text-shadow: 0 0 40px rgba(245, 158, 11, 0.5);
  letter-spacing: 8px;
  line-height: 1;
}

/* 炼金台 */
.wa-game-interface .alchemy-section {
  padding: 32px 24px;
  background: var(--bg-secondary);
}

.wa-game-interface .alchemy-table {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.wa-game-interface .slot {
  width: 88px;
  height: 88px;
  background: var(--bg-tertiary);
  border: 2px dashed var(--border);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.wa-game-interface .slot:hover {
  border-color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.1);
}

.wa-game-interface .slot.filled {
  border-style: solid;
  border-color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.15);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.wa-game-interface .slot.selected {
  border-color: var(--accent-gold);
  background: rgba(245, 158, 11, 0.15);
}

.wa-game-interface .slot::after {
  content: attr(data-slot);
  position: absolute;
  bottom: 4px;
  font-size: 10px;
  color: var(--text-muted);
}

.wa-game-interface .operator {
  font-size: 24px;
  color: var(--text-muted);
  font-weight: 300;
}

.wa-game-interface .result-slot {
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.05) 100%);
  border: 2px solid var(--accent-gold);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--accent-gold);
}

/* 主操作按钮 */
.wa-game-interface .main-action {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.wa-game-interface .btn-combine {
  padding: 16px 48px;
  background: linear-gradient(135deg, var(--accent-gold) 0%, #d97706 100%);
  border: none;
  border-radius: 12px;
  color: var(--bg-primary);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
}

.wa-game-interface .btn-combine:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
}

.wa-game-interface .btn-combine:active {
  transform: translateY(0);
}

.wa-game-interface .btn-combine:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.wa-game-interface .btn-secondary {
  padding: 14px 24px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.wa-game-interface .btn-secondary:hover {
  background: var(--bg-primary);
  color: var(--text-primary);
}

/* 元素库 - 7列 */
.wa-game-interface .elements-section {
  padding: 20px 24px;
  background: var(--bg-primary);
  border-top: 1px solid var(--border);
}

.wa-game-interface .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.wa-game-interface .section-title {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wa-game-interface .section-count {
  font-size: 12px;
  color: var(--text-muted);
  background: var(--bg-tertiary);
  padding: 4px 12px;
  border-radius: 12px;
}

.wa-game-interface .elements-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.wa-game-interface .element-btn {
  aspect-ratio: 1;
  background: var(--bg-secondary);
  border: 2px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  padding: 8px 4px;
  position: relative;
  overflow: hidden;
}

.wa-game-interface .element-btn:hover {
  border-color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.1);
  transform: translateY(-2px);
}

.wa-game-interface .element-btn.selected {
  border-color: var(--accent-gold);
  background: rgba(245, 158, 11, 0.15);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
}

.wa-game-interface .element-btn.in-slot-1 {
  border-top: 3px solid var(--accent-cyan);
}

.wa-game-interface .element-btn.in-slot-2 {
  border-top: 3px solid var(--accent-purple);
}

.wa-game-interface .element-icon {
  font-size: 28px;
  margin-bottom: 4px;
}

.wa-game-interface .element-name {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* 配方书 */
.wa-game-interface .recipes-section {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}

.wa-game-interface .recipes-toggle {
  width: 100%;
  padding: 16px 24px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 14px;
  transition: all 0.2s;
}

.wa-game-interface .recipes-toggle:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.wa-game-interface .recipes-toggle.expanded {
  color: var(--accent-gold);
}

.wa-game-interface .recipes-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.wa-game-interface .recipes-content.expanded {
  max-height: 400px;
  overflow-y: auto;
}

.wa-game-interface .recipes-inner {
  padding: 16px 24px;
}

.wa-game-interface .recipe-category {
  margin-bottom: 16px;
}

.wa-game-interface .recipe-category-title {
  font-size: 12px;
  color: var(--accent-cyan);
  margin-bottom: 8px;
  font-weight: 600;
}

.wa-game-interface .recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wa-game-interface .recipe-item {
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  padding: 6px 12px;
  border-radius: 8px;
}

/* 提示按钮 */
.wa-game-interface .hint-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: var(--accent-cyan);
  border: none;
  border-radius: 50%;
  color: var(--bg-primary);
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.4);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.wa-game-interface .hint-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(6, 182, 212, 0.5);
}

/* 弹窗 */
.wa-game-interface .overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.wa-game-interface .overlay.show {
  display: flex;
}

.wa-game-interface .popup {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 40px;
  text-align: center;
  max-width: 320px;
  animation: popupIn 0.3s ease;
}

@keyframes popupIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.wa-game-interface .popup-icon {
  font-size: 56px;
  margin-bottom: 12px;
}

.wa-game-interface .popup-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.wa-game-interface .popup-highlight {
  font-size: 42px;
  font-weight: 800;
  color: var(--accent-gold);
  margin-bottom: 12px;
  text-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
}

.wa-game-interface .popup-formula {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.wa-game-interface .popup-subtitle {
  font-size: 14px;
  color: var(--text-muted);
}

/* 响应式 */
@media (max-width: 480px) {
  .wa-game-interface {
    padding: 12px;
  }

  .wa-game-interface .target-section {
    padding: 16px 20px;
    min-height: 80px;
  }

  .wa-game-interface .target-word {
    font-size: 48px;
    letter-spacing: 4px;
  }

  .wa-game-interface .target-right {
    padding-left: 16px;
    margin-left: 16px;
  }

  .wa-game-interface .target-label-badge {
    font-size: 9px;
    padding: 2px 6px;
  }

  .wa-game-interface .target-stat {
    font-size: 11px;
  }

  .wa-game-interface .slot, .wa-game-interface .result-slot {
    width: 72px;
    height: 72px;
    font-size: 28px;
  }

  .wa-game-interface .alchemy-table {
    gap: 8px;
  }

  .wa-game-interface .btn-combine {
    padding: 14px 36px;
    font-size: 16px;
  }

  .wa-game-interface .elements-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
  }

  .wa-game-interface .element-btn {
    border-radius: 10px;
    padding: 6px 2px;
  }

  .wa-game-interface .element-icon {
    font-size: 20px;
  }

  .wa-game-interface .element-name {
    font-size: 9px;
  }
}

@media (max-width: 360px) {
  .wa-game-interface .elements-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .wa-game-interface .element-btn {
    border-radius: 8px;
    padding: 4px 2px;
  }

  .wa-game-interface .element-icon {
    font-size: 18px;
  }

  .wa-game-interface .element-name {
    font-size: 8px;
  }

  .wa-game-interface .target-word {
    font-size: 36px;
  }
}
</style>

<!-- ========== 介绍页 ========== -->
<div class="wa-intro-page" id="wa-introPage">
  <div class="wa-intro-header">
    <a href="{{ '/games/' | relative_url }}" class="wa-intro-back-btn">← 返回</a>
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
    
    <button class="wa-intro-start-btn" onclick="startGame()">
      <span>✨</span>
      <span>开始游戏</span>
    </button>
  </div>
</div>

<!-- ========== 游戏界面（完全复制 scott-portfolio 版本） ========== -->
<div class="wa-game-interface" id="wa-gameInterface">
  <!-- 导航栏 -->
  <nav class="nav-bar">
    <div class="nav-left">
      <button class="back-btn" onclick="backToIntro()">← 返回介绍</button>
      <span class="game-title">词语炼金术</span>
    </div>
    <div class="stats-mini">
      <div>关卡 <span id="navLevel">1</span></div>
      <div>得分 <span id="navScore">0</span></div>
    </div>
  </nav>

  <!-- 主游戏区 -->
  <div class="game-container">
    <!-- 目标区域 -->
    <div class="target-section">
      <div class="target-left">
        <div class="target-level-row">
          <span class="level-code">LV.<span id="levelDisplay">01</span></span>
          <span class="target-label-badge">当前目标</span>
        </div>
        <div class="target-stat">
          合成进度 <span class="target-stat-value" id="progressText">0/1</span>
        </div>
      </div>
      <div class="target-right">
        <div class="target-word" id="targetWord">蒸汽</div>
      </div>
    </div>

    <!-- 炼金台 -->
    <div class="alchemy-section">
      <div class="alchemy-table">
        <div class="slot" id="slot1" onclick="clearSlot(1)" data-slot="1">?</div>
        <span class="operator">+</span>
        <div class="slot" id="slot2" onclick="clearSlot(2)" data-slot="2">?</div>
        <span class="operator">=</span>
        <div class="result-slot" id="result">?</div>
      </div>
      <div class="main-action">
        <button class="btn-combine" onclick="combine()">✨ 炼成</button>
        <button class="btn-secondary" onclick="clearSlots()">清空</button>
      </div>
    </div>

    <!-- 元素库 -->
    <div class="elements-section">
      <div class="section-header">
        <div class="section-title">🔮 元素库 <span class="section-count" id="elementCount">4/50</span></div>
      </div>
      <div class="elements-grid" id="elementsGrid">
        <!-- 动态生成 -->
      </div>
    </div>

    <!-- 配方书 -->
    <div class="recipes-section">
      <button class="recipes-toggle" id="recipesToggle" onclick="toggleRecipes()">
        <span>📖 已解锁配方 <span id="recipeCountBadge">0</span></span>
        <span id="toggleArrow">▼</span>
      </button>
      <div class="recipes-content" id="recipesContent">
        <div class="recipes-inner" id="recipes">
          <!-- 动态生成 -->
        </div>
      </div>
    </div>
  </div>

  <!-- 提示按钮 -->
  <button class="hint-btn" onclick="showHint()" title="提示">💡</button>

  <!-- 弹窗 -->
  <div class="overlay" id="overlay">
    <div class="popup" id="popup">
      <div class="popup-icon" id="popupIcon">✨</div>
      <div class="popup-title" id="popupTitle">炼成成功</div>
      <div class="popup-highlight" id="popupHighlight"></div>
      <div class="popup-formula" id="popupFormula"></div>
      <div class="popup-subtitle" id="popupSubtitle"></div>
    </div>
  </div>
</div>

<script>
// ========== 页面切换函数 ==========
function startGame() {
  // 隐藏介绍页
  document.getElementById('wa-introPage').style.display = 'none';
  
  // 显示游戏界面
  document.getElementById('wa-gameInterface').classList.add('active');
  
  // 初始化游戏
  initGame();
  
  // 手机端尝试进入全屏
  if (window.matchMedia('(pointer: coarse)').matches) {
    const gameInterface = document.getElementById('wa-gameInterface');
    if (gameInterface.requestFullscreen) {
      gameInterface.requestFullscreen().catch(err => {
        console.log('全屏请求失败:', err);
      });
    } else if (gameInterface.webkitRequestFullscreen) {
      gameInterface.webkitRequestFullscreen().catch(err => {
        console.log('全屏请求失败:', err);
      });
    }
  }
}

function backToIntro() {
  // 显示介绍页
  document.getElementById('wa-introPage').style.display = 'flex';
  
  // 隐藏游戏界面
  document.getElementById('wa-gameInterface').classList.remove('active');
  
  // 退出全屏（如果在全屏状态）
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        console.log('退出全屏失败:', err);
      });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen().catch(err => {
        console.log('退出全屏失败:', err);
      });
    }
  }
}

// ========== 游戏逻辑（完全复制 scott-portfolio 版本） ==========
const recipes = {
  '火+水': '蒸汽', '火+土': '岩浆', '水+土': '泥浆',
  '火+风': '烟', '水+风': '云', '土+风': '沙尘',
  '蒸汽+水': '雾', '云+水': '雨', '雨+土': '植物',
  '植物+火': '灰烬', '岩浆+水': '石头', '石头+火': '金属',
  '金属+火': '工具', '植物+工具': '木材', '木材+火': '炭',
  '植物+云': '生命', '生命+水': '鱼', '鱼+工具': '食物',
  '生命+土': '人', '人+工具': '房子', '房子+生命': '家庭',
  '金属+石头': '城堡', '云+风': '风暴', '风暴+水': '海啸',
  '人+火': '知识', '知识+人': '科学', '科学+金属': '机器',
  '机器+生命': '机器人', '家庭+爱': '幸福', '人+人': '爱',
  '人+鱼': '人鱼', '火+鱼': '烤鱼', '机器+人': '人造人15号',
  '石头+生命': '孙悟空', '猫+互联网': '网红猫', '狗+工作': '社畜',
  '手机+床': '熬夜', '周一+工作': '痛苦', '周五+下班': '自由',
  '梦想+现实': '幻灭', '面包+火': '吐司', '番茄+蛋': '番茄炒蛋',
  '土豆+火': '薯条', '牛奶+时间': '奶酪', '葡萄+时间': '葡萄酒',
  '肉+时间': '腊肉', '人+鸟': '天使', '人+狼': '狼人',
  '咖啡+工作': '加班', '纸+笔': '作业', '书+枕头': '失眠',
};

const elementCategories = {
  '基础': ['火', '水', '土', '风'],
  '自然': ['蒸汽', '云', '雨', '雾', '风暴', '海啸', '沙尘', '烟'],
  '物质': ['岩浆', '石头', '金属', '工具', '木材', '炭', '城堡'],
  '生命': ['植物', '生命', '鱼', '人', '家庭'],
  '食物': ['食物', '烤鱼', '吐司', '番茄炒蛋', '薯条', '奶酪', '葡萄酒', '腊肉'],
  '概念': ['知识', '科学', '机器', '机器人', '爱', '幸福', '痛苦', '自由', '幻灭'],
  '彩蛋': ['人鱼', '人造人15号', '网红猫', '社畜', '熬夜', '加班', '作业', '失眠', '天使', '狼人', '孙悟空']
};

const levels = [
  { target: '蒸汽', hint: '火 + 水' },
  { target: '云', hint: '水 + 风' },
  { target: '植物', hint: '雨 + 土' },
  { target: '石头', hint: '岩浆 + 水' },
  { target: '金属', hint: '石头 + 火' },
  { target: '工具', hint: '金属 + 火' },
  { target: '木材', hint: '植物 + 工具' },
  { target: '生命', hint: '植物 + 云' },
  { target: '人', hint: '生命 + 土' },
  { target: '知识', hint: '人 + 火' },
];

let level = 1;
let score = 0;
let slots = [null, null];
let selectedSlot = 1;
let combineCount = 0;
let newRecipeCount = 0;
let recipesExpanded = false;
let unlockedRecipes = [];
let unlockedElements = ['火', '水', '土', '风'];
let gameInitialized = false;

function getElementIcon(element) {
  const icons = {
    '火': '🔥', '水': '💧', '土': '🌍', '风': '💨',
    '蒸汽': '♨️', '云': '☁️', '雨': '🌧️', '雾': '🌫️',
    '风暴': '⛈️', '海啸': '🌊', '沙尘': '🌪️', '烟': '💨',
    '岩浆': '🌋', '石头': '🪨', '金属': '⚙️', '工具': '🔧',
    '木材': '🪵', '炭': '🖤', '城堡': '🏰',
    '植物': '🌱', '生命': '🌿', '鱼': '🐟', '人': '👤',
    '房子': '🏠', '家庭': '👨‍👩‍👧‍👦', '食物': '🍖',
    '知识': '📚', '科学': '🔬', '机器': '⚙️', '机器人': '🤖',
    '爱': '❤️', '幸福': '😊', '痛苦': '😣', '自由': '🕊️',
    '人鱼': '🧜', '天使': '👼', '狼人': '🐺', '孙悟空': '🐵',
    '网红猫': '😺', '社畜': '🐕‍🦺', '熬夜': '📱', '加班': '☕',
    '作业': '📝', '失眠': '🛏️', '幻灭': '💔',
    '烤鱼': '🐠', '人造人15号': '🤖',
    '吐司': '🍞', '番茄炒蛋': '🍳', '薯条': '🍟',
    '奶酪': '🧀', '葡萄酒': '🍷', '腊肉': '🥓'
  };
  return icons[element] || '✨';
}

function getElementCategory(element) {
  for (const [cat, elements] of Object.entries(elementCategories)) {
    if (elements.includes(element)) return cat;
  }
  return '其他';
}

function initGame() {
  if (!gameInitialized) {
    loadLevel();
    renderElements();
    renderRecipes();
    gameInitialized = true;
  }
}

function loadLevel() {
  const lvl = levels[(level - 1) % levels.length];
  document.getElementById('targetWord').textContent = lvl.target;
  document.getElementById('levelDisplay').textContent = String(level).padStart(2, '0');
  document.getElementById('navLevel').textContent = level;
  document.getElementById('navScore').textContent = score;
  document.getElementById('progressText').textContent = `${combineCount}/${level === 1 ? 1 : 2}`;
  clearSlots();
}

function renderElements() {
  const grid = document.getElementById('elementsGrid');
  const categorized = {};
  unlockedElements.forEach(el => {
    const cat = getElementCategory(el);
    if (!categorized[cat]) categorized[cat] = [];
    categorized[cat].push(el);
  });

  const order = ['基础', '自然', '物质', '生命', '食物', '概念', '彩蛋'];
  let html = '';

  order.forEach(cat => {
    if (categorized[cat]) {
      categorized[cat].forEach(el => {
        const inSlot1 = slots[0] === el ? 'in-slot-1' : '';
        const inSlot2 = slots[1] === el ? 'in-slot-2' : '';
        const selected = (slots[0] === el || slots[1] === el) ? 'selected' : '';
        html += `
          <div class="element-btn ${selected} ${inSlot1} ${inSlot2}" 
               onclick="selectElement('${el}')" 
               data-element="${el}">
            <span class="element-icon">${getElementIcon(el)}</span>
            <span class="element-name">${el}</span>
          </div>
        `;
      });
    }
  });

  grid.innerHTML = html;
  document.getElementById('elementCount').textContent = `${unlockedElements.length}/50`;
}

function renderRecipes() {
  const container = document.getElementById('recipes');
  if (unlockedRecipes.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted);font-size:13px;">暂无已解锁配方</span>';
    document.getElementById('recipeCountBadge').textContent = '0';
    return;
  }

  const categorized = {};
  unlockedRecipes.forEach(r => {
    const cat = getElementCategory(r.output);
    if (!categorized[cat]) categorized[cat] = [];
    categorized[cat].push(r);
  });

  const order = ['基础', '自然', '物质', '生命', '食物', '概念', '彩蛋'];
  let html = '';

  order.forEach(cat => {
    if (categorized[cat]) {
      html += `<div class="recipe-category">`;
      html += `<div class="recipe-category-title">${cat}</div>`;
      html += `<div class="recipe-list">`;
      categorized[cat].forEach(r => {
        html += `<div class="recipe-item">${r.input.join('+')}=${r.output}</div>`;
      });
      html += `</div></div>`;
    }
  });

  container.innerHTML = html;
  document.getElementById('recipeCountBadge').textContent = unlockedRecipes.length;
}

function selectElement(element) {
  if (slots[0] === element) {
    slots[0] = null;
    selectedSlot = 1;
    updateSlots();
    renderElements();
    return;
  }
  if (slots[1] === element) {
    slots[1] = null;
    selectedSlot = 2;
    updateSlots();
    renderElements();
    return;
  }

  slots[selectedSlot - 1] = element;
  selectedSlot = selectedSlot === 1 ? 2 : 1;

  updateSlots();
  renderElements();
}

function updateSlots() {
  const slot1 = document.getElementById('slot1');
  const slot2 = document.getElementById('slot2');
  const resultSlot = document.getElementById('result');

  slot1.textContent = slots[0] ? getElementIcon(slots[0]) : '?';
  slot1.className = 'slot' + (slots[0] ? ' filled' : '');

  slot2.textContent = slots[1] ? getElementIcon(slots[1]) : '?';
  slot2.className = 'slot' + (slots[1] ? ' filled' : '');

  if (slots[0] && slots[1]) {
    const key1 = `${slots[0]}+${slots[1]}`;
    const key2 = `${slots[1]}+${slots[0]}`;
    const result = recipes[key1] || recipes[key2];
    resultSlot.textContent = result ? getElementIcon(result) : '✗';
  } else {
    resultSlot.textContent = '?';
  }
}

function clearSlots() {
  slots = [null, null];
  selectedSlot = 1;
  updateSlots();
  renderElements();
}

function clearSlot(slotNum) {
  slots[slotNum - 1] = null;
  selectedSlot = slotNum;
  updateSlots();
  renderElements();
}

function combine() {
  if (!slots[0] || !slots[1]) {
    showPopup('⚠️', '请先选择两个元素', '', '点击元素库中的元素');
    return;
  }

  combineCount++;
  const key1 = `${slots[0]}+${slots[1]}`;
  const key2 = `${slots[1]}+${slots[0]}`;
  const result = recipes[key1] || recipes[key2];

  if (result) {
    const isTarget = result === document.getElementById('targetWord').textContent;
    const isNewRecipe = !unlockedRecipes.find(r => r.output === result);
    const isNewElement = !unlockedElements.includes(result);

    if (isNewElement) {
      unlockedElements.push(result);
      renderElements();
    }

    if (isNewRecipe) {
      unlockedRecipes.push({ input: [slots[0], slots[1]].sort(), output: result });
      renderRecipes();
      newRecipeCount++;
      score += 50;
    } else {
      score += 10;
    }

    document.getElementById('navScore').textContent = score;

    if (isTarget) {
      score += 100;
      document.getElementById('navScore').textContent = score;
      showPopup('🎉', '关卡完成！', result, `${slots[0]} + ${slots[1]}`);
      setTimeout(() => {
        if (level < 10) {
            level++;
            combineCount = 0;
            newRecipeCount = 0;
            loadLevel();
          } else {
            showPopup('🏆', '恭喜通关！', '10/10', '已完成所有关卡');
          }
      }, 2000);
    } else {
      if (isNewRecipe) {
        showPopup('✨', '新配方解锁', result, `${slots[0]} + ${slots[1]}`);
      } else {
        showPopup('📝', '已有配方', result, '已收录至配方书');
      }
    }

    clearSlots();
  } else {
    showPopup('❌', '无法组合', '', '试试其他组合方式');
  }
}

function showPopup(icon, title, highlight, subtitle) {
  document.getElementById('popupIcon').textContent = icon;
  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupHighlight').textContent = highlight;
  document.getElementById('popupFormula').textContent = subtitle;
  document.getElementById('overlay').classList.add('show');

  setTimeout(() => {
    document.getElementById('overlay').classList.remove('show');
  }, 2000);
}

function toggleRecipes() {
  recipesExpanded = !recipesExpanded;
  document.getElementById('recipesToggle').classList.toggle('expanded', recipesExpanded);
  document.getElementById('recipesContent').classList.toggle('expanded', recipesExpanded);
}

function showHint() {
  const lvl = levels[(level - 1) % levels.length];
  showPopup('💡', '提示', '', lvl.hint);
}

// 点击遮罩关闭弹窗
document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('show');
  }
});
</script>
