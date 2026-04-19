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
/* Word Alchemy Game Styles - Self-contained */
.word-alchemy-game {
  --wa-bg-primary: #0f172a;
  --wa-bg-secondary: #1e293b;
  --wa-bg-tertiary: #334155;
  --wa-accent-gold: #f59e0b;
  --wa-accent-cyan: #06b6d4;
  --wa-accent-purple: #8b5cf6;
  --wa-text-primary: #f8fafc;
  --wa-text-secondary: #94a3b8;
  --wa-text-muted: #64748b;
  --wa-border: rgba(148, 163, 184, 0.2);
  font-family: 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
}

.word-alchemy-game * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.word-alchemy-game {
  background: var(--wa-bg-primary);
  color: var(--wa-text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  line-height: 1.6;
  border-radius: 20px;
  overflow: hidden;
}

/* 顶部导航 */
.wa-nav-bar {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 16px;
}

.wa-nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.wa-back-btn {
  padding: 8px 14px;
  background: var(--wa-bg-secondary);
  border: 1px solid var(--wa-border);
  border-radius: 8px;
  color: var(--wa-text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s;
}

.wa-back-btn:hover {
  background: var(--wa-bg-tertiary);
  color: var(--wa-text-primary);
}

.wa-game-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--wa-text-primary);
}

.wa-stats-mini {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: var(--wa-text-secondary);
}

.wa-stats-mini span {
  color: var(--wa-accent-gold);
  font-weight: 600;
}

/* 主游戏区域 */
.wa-game-container {
  width: 100%;
  background: var(--wa-bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--wa-border);
  overflow: hidden;
}

/* 目标区域 */
.wa-target-section {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%);
  border-bottom: 2px solid var(--wa-accent-gold);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
}

.wa-target-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wa-target-level-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wa-level-code {
  font-size: 11px;
  color: var(--wa-text-muted);
  font-weight: 600;
  letter-spacing: 1px;
}

.wa-target-label-badge {
  font-size: 10px;
  color: var(--wa-accent-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  background: rgba(245, 158, 11, 0.2);
  padding: 3px 8px;
  border-radius: 10px;
}

.wa-target-stat {
  font-size: 13px;
  color: var(--wa-text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.wa-target-stat-value {
  color: var(--wa-accent-gold);
  font-weight: 700;
  font-size: 14px;
}

.wa-target-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  border-left: 1px solid rgba(245, 158, 11, 0.3);
  margin-left: 20px;
}

.wa-target-word {
  font-size: 72px;
  font-weight: 800;
  color: var(--wa-text-primary);
  text-shadow: 0 0 40px rgba(245, 158, 11, 0.5);
  letter-spacing: 8px;
  line-height: 1;
}

/* 炼金台 */
.wa-alchemy-section {
  padding: 32px 24px;
  background: var(--wa-bg-secondary);
}

.wa-alchemy-table {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.wa-slot {
  width: 88px;
  height: 88px;
  background: var(--wa-bg-tertiary);
  border: 2px dashed var(--wa-border);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.wa-slot:hover {
  border-color: var(--wa-accent-cyan);
  background: rgba(6, 182, 212, 0.1);
}

.wa-slot.filled {
  border-style: solid;
  border-color: var(--wa-accent-cyan);
  background: rgba(6, 182, 212, 0.15);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.wa-slot.selected {
  border-color: var(--wa-accent-gold);
  background: rgba(245, 158, 11, 0.15);
}

.wa-operator {
  font-size: 24px;
  color: var(--wa-text-muted);
  font-weight: 300;
}

.wa-result-slot {
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.05) 100%);
  border: 2px solid var(--wa-accent-gold);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--wa-accent-gold);
}

.wa-main-action {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.wa-btn-combine {
  padding: 16px 48px;
  background: linear-gradient(135deg, var(--wa-accent-gold) 0%, #d97706 100%);
  border: none;
  border-radius: 12px;
  color: var(--wa-bg-primary);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
}

.wa-btn-combine:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
}

.wa-btn-combine:active {
  transform: translateY(0);
}

.wa-btn-combine:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.wa-btn-secondary {
  padding: 14px 24px;
  background: var(--wa-bg-tertiary);
  border: 1px solid var(--wa-border);
  border-radius: 10px;
  color: var(--wa-text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.wa-btn-secondary:hover {
  background: var(--wa-bg-primary);
  color: var(--wa-text-primary);
}

/* 元素库 */
.wa-elements-section {
  padding: 20px 24px;
  background: var(--wa-bg-primary);
  border-top: 1px solid var(--wa-border);
}

.wa-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.wa-section-title {
  font-size: 14px;
  color: var(--wa-text-secondary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wa-section-count {
  font-size: 12px;
  color: var(--wa-text-muted);
  background: var(--wa-bg-tertiary);
  padding: 4px 12px;
  border-radius: 12px;
}

.wa-elements-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.wa-element-btn {
  aspect-ratio: 1;
  background: var(--wa-bg-secondary);
  border: 2px solid var(--wa-border);
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

.wa-element-btn:hover {
  border-color: var(--wa-accent-cyan);
  background: rgba(6, 182, 212, 0.1);
  transform: translateY(-2px);
}

.wa-element-btn.selected {
  border-color: var(--wa-accent-gold);
  background: rgba(245, 158, 11, 0.15);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
}

.wa-element-btn.in-slot-1 {
  border-top: 3px solid var(--wa-accent-cyan);
}

.wa-element-btn.in-slot-2 {
  border-top: 3px solid var(--wa-accent-purple);
}

.wa-element-icon {
  font-size: 28px;
  margin-bottom: 4px;
}

.wa-element-name {
  font-size: 12px;
  color: var(--wa-text-secondary);
  font-weight: 500;
}

/* 配方书 */
.wa-recipes-section {
  background: var(--wa-bg-secondary);
  border-top: 1px solid var(--wa-border);
}

.wa-recipes-toggle {
  width: 100%;
  padding: 16px 24px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--wa-text-secondary);
  font-size: 14px;
  transition: all 0.2s;
}

.wa-recipes-toggle:hover {
  background: var(--wa-bg-tertiary);
  color: var(--wa-text-primary);
}

.wa-recipes-toggle.expanded {
  color: var(--wa-accent-gold);
}

.wa-recipes-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.wa-recipes-content.expanded {
  max-height: 400px;
  overflow-y: auto;
}

.wa-recipes-inner {
  padding: 16px 24px;
}

.wa-recipe-category {
  margin-bottom: 16px;
}

.wa-recipe-category-title {
  font-size: 12px;
  color: var(--wa-accent-cyan);
  margin-bottom: 8px;
  font-weight: 600;
}

.wa-recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wa-recipe-item {
  font-size: 13px;
  color: var(--wa-text-secondary);
  background: var(--wa-bg-tertiary);
  padding: 6px 12px;
  border-radius: 8px;
}

/* 提示按钮 */
.wa-hint-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: var(--wa-accent-cyan);
  border: none;
  border-radius: 50%;
  color: var(--wa-bg-primary);
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.4);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.wa-hint-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(6, 182, 212, 0.5);
}

/* 弹窗 */
.wa-overlay {
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

.wa-overlay.show {
  display: flex;
}

.wa-popup {
  background: var(--wa-bg-secondary);
  border: 1px solid var(--wa-border);
  border-radius: 20px;
  padding: 32px 40px;
  text-align: center;
  max-width: 320px;
  animation: wa-popupIn 0.3s ease;
}

@keyframes wa-popupIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.wa-popup-icon {
  font-size: 56px;
  margin-bottom: 12px;
}

.wa-popup-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--wa-text-primary);
  margin-bottom: 16px;
}

.wa-popup-highlight {
  font-size: 42px;
  font-weight: 800;
  color: var(--wa-accent-gold);
  margin-bottom: 12px;
  text-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
}

.wa-popup-formula {
  font-size: 16px;
  color: var(--wa-text-secondary);
  margin-bottom: 8px;
}

.wa-popup-subtitle {
  font-size: 14px;
  color: var(--wa-text-muted);
}

/* 启动封面样式 */
.wa-launch-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.wa-launch-screen.hidden {
  opacity: 0;
  visibility: hidden;
}

.wa-launch-icon {
  font-size: 80px;
  margin-bottom: 24px;
  animation: wa-float 3s ease-in-out infinite;
}

.wa-launch-title {
  font-size: 42px;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 12px;
  text-shadow: 0 0 40px rgba(245, 158, 11, 0.6);
  animation: wa-glow 2s ease-in-out infinite;
  letter-spacing: 4px;
}

.wa-launch-subtitle {
  font-size: 18px;
  color: #94a3b8;
  margin-bottom: 48px;
  font-weight: 500;
}

.wa-launch-btn {
  padding: 18px 64px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border: none;
  border-radius: 16px;
  color: #0f172a;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.4);
  letter-spacing: 2px;
}

.wa-launch-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.6);
}

.wa-launch-btn:active {
  transform: scale(0.98);
}

.wa-launch-hint {
  margin-top: 64px;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 16px;
  max-width: 420px;
  text-align: center;
}

.wa-launch-hint-title {
  font-size: 14px;
  color: #06b6d4;
  margin-bottom: 12px;
  font-weight: 600;
}

.wa-launch-hint-text {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.8;
}

@keyframes wa-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes wa-glow {
  0%, 100% { text-shadow: 0 0 40px rgba(245, 158, 11, 0.6); }
  50% { text-shadow: 0 0 60px rgba(245, 158, 11, 0.9), 0 0 80px rgba(245, 158, 11, 0.4); }
}

/* 响应式 */
@media (max-width: 480px) {
  .word-alchemy-game {
    padding: 12px;
  }

  .wa-target-section {
    padding: 16px 20px;
    min-height: 80px;
  }

  .wa-target-word {
    font-size: 48px;
    letter-spacing: 4px;
  }

  .wa-target-right {
    padding-left: 16px;
    margin-left: 16px;
  }

  .wa-target-label-badge {
    font-size: 9px;
    padding: 2px 6px;
  }

  .wa-target-stat {
    font-size: 11px;
  }

  .wa-slot, .wa-result-slot {
    width: 72px;
    height: 72px;
    font-size: 28px;
  }

  .wa-alchemy-table {
    gap: 8px;
  }

  .wa-btn-combine {
    padding: 14px 36px;
    font-size: 16px;
  }

  .wa-elements-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
  }

  .wa-element-btn {
    border-radius: 10px;
    padding: 6px 2px;
  }

  .wa-element-icon {
    font-size: 20px;
  }

  .wa-element-name {
    font-size: 9px;
  }

  .wa-launch-icon {
    font-size: 64px;
  }

  .wa-launch-title {
    font-size: 32px;
  }

  .wa-launch-subtitle {
    font-size: 16px;
    margin-bottom: 36px;
  }

  .wa-launch-btn {
    padding: 16px 48px;
    font-size: 18px;
  }

  .wa-launch-hint {
    margin-top: 48px;
    padding: 20px 24px;
    max-width: 340px;
  }
}

@media (max-width: 360px) {
  .wa-elements-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .wa-element-btn {
    border-radius: 8px;
    padding: 4px 2px;
  }

  .wa-element-icon {
    font-size: 18px;
  }

  .wa-element-name {
    font-size: 8px;
  }

  .wa-target-word {
    font-size: 36px;
  }
}
</style>

<div class="word-alchemy-game">
  <!-- 启动封面 -->
  <div class="wa-launch-screen" id="wa-launchScreen">
    <div class="wa-launch-icon">🔮</div>
    <div class="wa-launch-title">词语炼金术</div>
    <div class="wa-launch-subtitle">Word Alchemy</div>
    <button class="wa-launch-btn" onclick="waStartGame()">✨ 开始炼成</button>
    <div class="wa-launch-hint">
      <div class="wa-launch-hint-title">💡 玩法说明</div>
      <div class="wa-launch-hint-text">
        选择两个元素放入炼金台，点击「炼成」合成新元素。<br>
        每种组合都可能产生意想不到的结果！<br>
        合成目标元素即可进入下一关卡。
      </div>
    </div>
  </div>

  <!-- 游戏内容 -->
  <div id="wa-gameContent" style="display:none; width:100%;">
    <!-- 导航栏 -->
    <nav class="wa-nav-bar">
      <div class="wa-nav-left">
        <a href="{{ '/games/' | relative_url }}" class="wa-back-btn">← 返回</a>
        <span class="wa-game-title">词语炼金术</span>
      </div>
      <div class="wa-stats-mini">
        <div>关卡 <span id="wa-navLevel">1</span></div>
        <div>得分 <span id="wa-navScore">0</span></div>
      </div>
    </nav>

    <!-- 主游戏区 -->
    <div class="wa-game-container">
      <!-- 目标区域 -->
      <div class="wa-target-section">
        <div class="wa-target-left">
          <div class="wa-target-level-row">
            <span class="wa-level-code">LV.<span id="wa-levelDisplay">01</span></span>
            <span class="wa-target-label-badge">当前目标</span>
          </div>
          <div class="wa-target-stat">
            合成进度 <span class="wa-target-stat-value" id="wa-progressText">0/1</span>
          </div>
        </div>
        <div class="wa-target-right">
          <div class="wa-target-word" id="wa-targetWord">蒸汽</div>
        </div>
      </div>

      <!-- 炼金台 -->
      <div class="wa-alchemy-section">
        <div class="wa-alchemy-table">
          <div class="wa-slot" id="wa-slot1" onclick="waClearSlot(1)" data-slot="1">?</div>
          <span class="wa-operator">+</span>
          <div class="wa-slot" id="wa-slot2" onclick="waClearSlot(2)" data-slot="2">?</div>
          <span class="wa-operator">=</span>
          <div class="wa-result-slot" id="wa-result">?</div>
        </div>
        <div class="wa-main-action">
          <button class="wa-btn-combine" onclick="waCombine()">✨ 炼成</button>
          <button class="wa-btn-secondary" onclick="waClearSlots()">清空</button>
        </div>
      </div>

      <!-- 元素库 -->
      <div class="wa-elements-section">
        <div class="wa-section-header">
          <div class="wa-section-title">🔮 元素库 <span class="wa-section-count" id="wa-elementCount">4/50</span></div>
        </div>
        <div class="wa-elements-grid" id="wa-elementsGrid">
          <!-- 动态生成 -->
        </div>
      </div>

      <!-- 配方书 -->
      <div class="wa-recipes-section">
        <button class="wa-recipes-toggle" id="wa-recipesToggle" onclick="waToggleRecipes()">
          <span>📖 已解锁配方 <span id="wa-recipeCountBadge">0</span></span>
          <span id="wa-toggleArrow">▼</span>
        </button>
        <div class="wa-recipes-content" id="wa-recipesContent">
          <div class="wa-recipes-inner" id="wa-recipes">
            <!-- 动态生成 -->
          </div>
        </div>
      </div>
    </div>

    <!-- 提示按钮 -->
    <button class="wa-hint-btn" onclick="waShowHint()" title="提示">💡</button>

    <!-- 弹窗 -->
    <div class="wa-overlay" id="wa-overlay">
      <div class="wa-popup" id="wa-popup">
        <div class="wa-popup-icon" id="wa-popupIcon">✨</div>
        <div class="wa-popup-title" id="wa-popupTitle">炼成成功</div>
        <div class="wa-popup-highlight" id="wa-popupHighlight"></div>
        <div class="wa-popup-formula" id="wa-popupFormula"></div>
        <div class="wa-popup-subtitle" id="wa-popupSubtitle"></div>
      </div>
    </div>
  </div>
</div>

<script>
// 启动游戏函数
window.waStartGame = function() {
  // 隐藏启动封面
  document.getElementById('wa-launchScreen').classList.add('hidden');
  
  // 显示游戏内容
  document.getElementById('wa-gameContent').style.display = 'block';
  
  // 尝试进入全屏模式
  const gameContainer = document.querySelector('.word-alchemy-game');
  if (gameContainer && gameContainer.requestFullscreen) {
    gameContainer.requestFullscreen().catch(err => {
      console.log('全屏请求失败:', err);
    });
  }
};

// Word Alchemy Game Logic
(function() {
  // 游戏数据
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

  // 游戏状态
  let level = 1;
  let score = 0;
  let slots = [null, null];
  let selectedSlot = 1;
  let combineCount = 0;
  let newRecipeCount = 0;
  let recipesExpanded = false;
  let unlockedRecipes = [];
  let unlockedElements = ['火', '水', '土', '风'];

  // 元素图标
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

  function init() {
    loadLevel();
    renderElements();
    renderRecipes();
  }

  function loadLevel() {
    const lvl = levels[(level - 1) % levels.length];
    document.getElementById('wa-targetWord').textContent = lvl.target;
    document.getElementById('wa-levelDisplay').textContent = String(level).padStart(2, '0');
    document.getElementById('wa-navLevel').textContent = level;
    document.getElementById('wa-navScore').textContent = score;
    document.getElementById('wa-progressText').textContent = `${combineCount}/${level === 1 ? 1 : 2}`;
    waClearSlots();
  }

  function renderElements() {
    const grid = document.getElementById('wa-elementsGrid');
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
            <div class="wa-element-btn ${selected} ${inSlot1} ${inSlot2}" 
                 onclick="waSelectElement('${el}')" 
                 data-element="${el}">
              <span class="wa-element-icon">${getElementIcon(el)}</span>
              <span class="wa-element-name">${el}</span>
            </div>
          `;
        });
      }
    });

    grid.innerHTML = html;
    document.getElementById('wa-elementCount').textContent = `${unlockedElements.length}/50`;
  }

  function renderRecipes() {
    const container = document.getElementById('wa-recipes');
    if (unlockedRecipes.length === 0) {
      container.innerHTML = '<span style="color:var(--wa-text-muted);font-size:13px;">暂无已解锁配方</span>';
      document.getElementById('wa-recipeCountBadge').textContent = '0';
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
        html += `<div class="wa-recipe-category">`;
        html += `<div class="wa-recipe-category-title">${cat}</div>`;
        html += `<div class="wa-recipe-list">`;
        categorized[cat].forEach(r => {
          html += `<div class="wa-recipe-item">${r.input.join('+')}=${r.output}</div>`;
        });
        html += `</div></div>`;
      }
    });

    container.innerHTML = html;
    document.getElementById('wa-recipeCountBadge').textContent = unlockedRecipes.length;
  }

  // 暴露给全局的函数
  window.waSelectElement = function(element) {
    if (slots[0] === element) {
      slots[0] = null;
      selectedSlot = 1;
      waUpdateSlots();
      renderElements();
      return;
    }
    if (slots[1] === element) {
      slots[1] = null;
      selectedSlot = 2;
      waUpdateSlots();
      renderElements();
      return;
    }

    slots[selectedSlot - 1] = element;
    selectedSlot = selectedSlot === 1 ? 2 : 1;

    waUpdateSlots();
    renderElements();
  };

  window.waUpdateSlots = function() {
    const slot1 = document.getElementById('wa-slot1');
    const slot2 = document.getElementById('wa-slot2');
    const resultSlot = document.getElementById('wa-result');

    slot1.textContent = slots[0] ? getElementIcon(slots[0]) : '?';
    slot1.className = 'wa-slot' + (slots[0] ? ' filled' : '');

    slot2.textContent = slots[1] ? getElementIcon(slots[1]) : '?';
    slot2.className = 'wa-slot' + (slots[1] ? ' filled' : '');

    if (slots[0] && slots[1]) {
      const key1 = `${slots[0]}+${slots[1]}`;
      const key2 = `${slots[1]}+${slots[0]}`;
      const result = recipes[key1] || recipes[key2];
      resultSlot.textContent = result ? getElementIcon(result) : '✗';
    } else {
      resultSlot.textContent = '?';
    }
  };

  window.waClearSlots = function() {
    slots = [null, null];
    selectedSlot = 1;
    waUpdateSlots();
    renderElements();
  };

  window.waClearSlot = function(slotNum) {
    slots[slotNum - 1] = null;
    selectedSlot = slotNum;
    waUpdateSlots();
    renderElements();
  };

  window.waCombine = function() {
    if (!slots[0] || !slots[1]) {
      waShowPopup('⚠️', '请先选择两个元素', '', '点击元素库中的元素');
      return;
    }

    combineCount++;
    const key1 = `${slots[0]}+${slots[1]}`;
    const key2 = `${slots[1]}+${slots[0]}`;
    const result = recipes[key1] || recipes[key2];

    if (result) {
      const isTarget = result === document.getElementById('wa-targetWord').textContent;
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

      document.getElementById('wa-navScore').textContent = score;

      if (isTarget) {
        score += 100;
        document.getElementById('wa-navScore').textContent = score;
        waShowPopup('🎉', '关卡完成！', result, `${slots[0]} + ${slots[1]}`);
        setTimeout(() => {
          level++;
          combineCount = 0;
          newRecipeCount = 0;
          loadLevel();
        }, 2000);
      } else {
        if (isNewRecipe) {
          waShowPopup('✨', '新配方解锁', result, `${slots[0]} + ${slots[1]}`);
        } else {
          waShowPopup('📝', '已有配方', result, '已收录至配方书');
        }
      }

      waClearSlots();
    } else {
      waShowPopup('❌', '无法组合', '', '试试其他组合方式');
    }
  };

  window.waShowPopup = function(icon, title, highlight, subtitle) {
    document.getElementById('wa-popupIcon').textContent = icon;
    document.getElementById('wa-popupTitle').textContent = title;
    document.getElementById('wa-popupHighlight').textContent = highlight;
    document.getElementById('wa-popupFormula').textContent = subtitle;
    document.getElementById('wa-overlay').classList.add('show');

    setTimeout(() => {
      document.getElementById('wa-overlay').classList.remove('show');
    }, 2000);
  };

  window.waToggleRecipes = function() {
    recipesExpanded = !recipesExpanded;
    document.getElementById('wa-recipesToggle').classList.toggle('expanded', recipesExpanded);
    document.getElementById('wa-recipesContent').classList.toggle('expanded', recipesExpanded);
  };

  window.waShowHint = function() {
    const lvl = levels[(level - 1) % levels.length];
    waShowPopup('💡', '提示', '', lvl.hint);
  };

  // 点击遮罩关闭弹窗
  document.getElementById('wa-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('show');
    }
  });
})();
</script>
