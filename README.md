# HiyaMax - Player & Creator

> A personal brand website built with Jekyll.

## 🚀 Quick Start

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build site
bundle exec jekyll build
```

## 📁 Project Structure

```
.
├── _config.yml              # Site configuration
├── _data/
│   └── navigation.yml       # Navigation data
├── _includes/               # Reusable components
│   ├── header.html          # Site header with navigation
│   ├── footer.html          # Site footer
│   ├── head.html            # HTML head section
│   └── game-card.html       # Game card component
├── _layouts/                # Page layouts
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage
│   ├── game.html            # Individual game page
│   └── games-list.html      # Games listing page
├── _games/                  # Game collection
│   ├── word-alchemy.md
│   ├── mama-counter.md
│   └── who-is-spy.md
├── _sass/                   # SCSS partials
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   └── _responsive.scss
├── assets/
│   ├── css/style.scss
│   └── js/main.js
├── index.md                 # Homepage
└── games.html               # Games list page
```

## ✨ Features

- **Player & Creator Concept**: Dual avatar with interactive mouse/gyroscope effects
- **Template Inheritance**: Consistent header/footer across all pages
- **Responsive Design**: Desktop, tablet, and mobile optimized
- **Game Collection**: Jekyll collections for easy game management
- **Data-Driven Navigation**: Centralized navigation configuration

## 🎨 Design Reference

Original design preserved from `research/max-home/index.html`:
- Inter font family
- Player/Creator avatar concept
- Background text with descriptions
- Works grid layout
- Mobile navigation

## 📝 License

© 2025 HiyaMax. All rights reserved.