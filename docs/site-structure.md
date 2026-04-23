# HiyaMax Home 网站结构文档

> 生成时间: 2026-04-23  
> 仓库: `hiyaScott/hiyamax-home`  
> 部署地址: `https://hiyascott.github.io/hiyamax-home/`  
> 本地路径: `/root/.openclaw/workspace/hiyamax-home-jekyll/`

---

## 一、技术栈

| 项 | 值 |
|---|---|
| 静态生成器 | Jekyll 4.3 |
| 托管 | GitHub Pages |
| 域名 | `hiyascott.github.io/hiyamax-home` |
| baseurl | `/hiyamax-home` |
| 样式 | SCSS → CSS (Jekyll 编译) |
| 字体 | Inter (Google Fonts) |

---

## 二、页面层级

### 一级页面（导航入口）

| 页面 | 文件 | Layout | URL |
|------|------|--------|-----|
| 首页 / About | `index.md` | `home` | `/` |
| Games 列表 | `games.html` | `games-list` | `/games/` |
| Books 列表 | `books.html` | `books-list` | `/books/` |
| Artworks 列表 | `artworks.html` | `artworks-list` | `/artworks/` |
| hiyaMax™️ 列表 | `hiyamax.html` | `hiyamaxtm-list` | `/hiyamax/` |

### 二级页面（Collection 详情页）

| Collection | 目录 | Layout | URL 模式 | 已有条目 |
|-------------|------|--------|----------|---------|
| Games | `_games/` | `game` | `/games/:name/` | 3 (mama-counter, who-is-spy, word-alchemy) |
| Books | `_books/` | `book` | `/books/:name/` | 1 (qian-yiqiu-resume) |
| Artworks | `_artworks/` | `artwork` | `/artworks/:name/` | 28 |
| hiyaMax™️ | `_hiyamaxtm/` | `hiyamaxtm-product` | `/hiyamax/:name/` | 若干 |

---

## 三、Layout 继承链

```
default.html (根布局)
├── head.html       ← <head> 标签内容
├── header.html     ← 顶部导航栏
│   ├── desktop nav (about/games/books/artworks/hiyaMax™️)
│   └── mobile nav (汉堡菜单 + 全屏下拉)
├── {{ content }}   ← 页面主体内容
└── footer.html     ← 底部导航栏
    ├── footer-nav (重复主导航)
    ├── footer-social (微信/小红书/IG/FB)
    └── footer-version (v1.5.1)

home.html           ← 继承 default (首页专用布局)
games-list.html     ← 继承 default (Games 列表页)
games-list.html     ← 继承 default (Books 列表页)
artworks-list.html  ← 继承 default (Artworks 列表页)
hiyamaxtm-list.html ← 继承 default (hiyaMax™️ 列表页)

game.html           ← 继承 default (游戏详情页)
book.html           ← 继承 default (书籍详情页)
artwork.html        ← 继承 default (作品详情页)
hiyamaxtm-product.html ← 继承 default (产品详情页)
```

**关键规则**: 所有二级页面 Layout **必须**继承 `default.html`，否则缺失 header/footer。

---

## 四、统一组件

### 1. 导航数据 (`_data/navigation.yml`)

```yaml
main:      # 主导航 (header + footer 共用)
  - title: about       → /
  - title: games       → /games/
  - title: books       → /books/
  - title: artworks    → /artworks/
  - title: hiyaMax™️   → /hiyamax/

social:    # 社交链接
  - WeChat, RedBook, Instagram, Facebook

icons:     # SVG 图标定义
```

**修改导航只需改这一处**，header 和 footer 自动同步。

### 2. 卡片组件

| 组件 | 文件 | 用途 |
|------|------|------|
| 统一卡片 | `_includes/card-unified.html` | 列表页通用卡片 (books/artworks/hiyamaxtm 共用) |
| 游戏卡片 | `_includes/game-card-full.html` | 游戏详情页卡片 |
| 书籍卡片 | `_includes/book-card-full.html` | 书籍详情页卡片 |
| 作品卡片 | `_includes/artwork-card-full.html` | 作品详情页卡片 |
| 产品卡片 | `_includes/product-card-full.html` | 产品详情页卡片 |

**统一卡片支持的字段**:
```yaml
title       # 标题
description # 描述
category    # 分类标签 (左上角)
year        # 年份 (右上角)
date        # 日期 (底部)
emoji       # 无图片时的占位图标
image       # 封面图片路径
color       # 无图片时的渐变背景
type        # 类型标签
status      # 状态标签
platform    # 平台标签
```

---

## 五、Collection 数据规范

### 新增条目只需创建 Markdown 文件

**Books 示例** (`_books/qian-yiqiu-resume.md`):
```yaml
---
title: "钱羿丘同学简历"           # 必填
description: "简介..."            # 卡片描述
category: 升学简历                # 标签
year: 2025                        # 年份
date: 2025-04-23                  # 排序用日期
emoji: 📋                          # 无图时占位
image: /assets/images/books/...    # 封面图
pdf: /assets/files/...             # PDF 文件
pages: "20页"                     # 页数
fileSize: "3MB"                    # 文件大小
author: 钱羿丘                     # 作者
highlights:                        # 亮点列表
  - 亮点1
  - 亮点2
toc:                               # 目录
  - title: 章节1
    num: 1
    page: "p.1"
---

正文内容（显示在详情页简介区域）
```

### 各 Collection 支持字段

| 字段 | Games | Books | Artworks | hiyaMax™️ |
|------|:-----:|:-----:|:--------:|:---------:|
| title | ✅ | ✅ | ✅ | ✅ |
| description | ✅ | ✅ | ✅ | ✅ |
| category | ✅ | ✅ | ✅ | ✅ |
| year | ✅ | ✅ | ✅ | ✅ |
| date | ✅ | ✅ | ✅ | ✅ |
| emoji | ✅ | ✅ | ✅ | ✅ |
| image | ✅ | ✅ | ✅ | ✅ |
| color | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | — | — |
| platform | ✅ | — | — | — |
| status | ✅ | — | — | — |
| pdf | — | ✅ | — | — |
| pages | — | ✅ | — | — |
| fileSize | — | ✅ | — | — |
| author | — | ✅ | — | — |
| highlights | — | ✅ | — | — |
| toc | — | ✅ | — | — |

---

## 六、资源目录

```
assets/
├── css/
│   └── style.scss          # 主样式 (SCSS → CSS)
├── js/
│   └── main.js             # 交互脚本 (菜单/网格背景等)
├── images/
│   ├── logo-hiya-max.webp  # 网站 Logo
│   ├── max-player.webp     # 首页 Player 头像
│   ├── max-creator.webp    # 首页 Creator 头像
│   ├── games/              # 游戏封面图
│   │   ├── mama-counter-2d9904e3.webp
│   │   ├── undercover-hero.webp
│   │   └── word-alchemy-hero.webp
│   ├── books/              # 书籍封面图
│   │   └── qian-yiqiu-resume-cover.png
│   └── hiyamaxtm/          # 产品图
├── artworks/               # 艺术作品图 (webp/jpg)
│   ├── abstract-energy.webp
│   ├── color-explosion.webp
│   └── ... (28张)
└── files/                  # 可下载文件
    └── qian-yiqiu-resume.pdf
```

---

## 七、部署流程

```
本地修改 → git add → git commit → git push → GitHub Pages 自动构建
                              ↑
                        约 1-2 分钟后线上生效
```

**强制刷新缓存**: URL 后加 `?nocache=1`

---

## 八、常用操作速查

### 新增一本书
1. 准备封面图 → `assets/images/books/xxx.webp`
2. 准备 PDF → `assets/files/xxx.pdf` (如需)
3. 创建 `_books/xxx.md` (参照 `qian-yiqiu-resume.md`)
4. `git add -A && git commit -m "add book: xxx" && git push`

### 修改导航
1. 编辑 `_data/navigation.yml`
2. 提交推送，header + footer 自动同步

### 修改全局样式
1. 编辑 `assets/css/style.scss` 或 `_sass/` 目录
2. Jekyll 编译后生效

---

## 九、关键教训

> **Layout 必须继承 default**。`book.html` 曾因写成 `layout: book`（自引用）导致缺失 header/footer。所有详情页 Layout 的 front matter 必须是 `layout: default`。
>
> **baseurl 处理**。所有内部链接使用 `| relative_url` 过滤器，自动加上 `/hiyamax-home` 前缀。