# 📒 Collective Scrapbook

A beautiful, real-time collaborative digital scrapbook application with a skeuomorphic design that mimics a physical notebook with textures like black cardstock, graph paper, and spiral bindings.

![Scrapbook Preview](preview.png)

## ✨ Features

### 🎨 Visual Design
- **Skeuomorphic Interface**: Realistic scrapbook with black cardstock and graph paper textures
- **Spiral Binding**: Authentic metal spiral binding between pages
- **Wooden Supplies Drawer**: Bottom-docked drawer with realistic wood grain texture
- **Tactile Elements**: Polaroid frames, washi tape, stickers, and "ransom note" style letters

### 🛠️ Core Functionality
- **Multi-page Canvas**: Navigate between multiple scrapbook pages
- **Advanced Drag-and-Drop**: Add photos, stickers, and text by dragging from the supplies drawer
- **Full Object Manipulation**: Resize, rotate (360°), and reposition any element
- **Layering System**: Right-click context menu with "Bring to Front" and "Send to Back"
- **Drawing Tools**: Marker, pencil, highlighter, and eraser with pressure-sensitive drawing
- **Smart Stickers**: Pre-loaded sticker packs (hearts, stars, flowers, food, travel, emoji)
- **Ransom Note Text**: Mismatched letter styles for creative typography
- **Handwriting Fonts**: Multiple cursive and handwriting font options

### 👥 Collaboration (Coming Soon)
- Real-time sync across all users
- Live cursor positions
- User presence indicators
- Version history ("Time Machine")

## 🚀 Getting Started

### Simple Start (No Build Required)
1. Open `index.html` in your browser
2. That's it! The app works standalone with CDN dependencies

### Development Setup
```bash
# Clone the repository
git clone <repo-url>
cd collective-scrapbook

# If you want to use a local server
npx serve .
# or
python -m http.server 8000
```

## 📁 Project Structure

```
collective-scrapbook/
├── index.html          # Main HTML structure
├── styles.css          # Skeuomorphic CSS styling
├── app.js             # Fabric.js canvas logic & interactions
├── supabase-config.js # Real-time collaboration setup
└── README.md          # This file
```

## 🎯 Usage Guide

### Supplies Drawer
Click the wooden drawer handle at the bottom to reveal:
- **📸 Photos**: Upload or drag photos onto the canvas (creates Polaroid effect)
- **⭐ Stickers**: 6 themed sticker packs with emoji
- **📎 Tape/Staples**: Washi tape rolls and fasteners
- **🖊️ Pens**: Drawing tools with color palette and brush size
- **📝 Text**: Ransom note letters and text boxes

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Delete` / `Backspace` | Delete selected object |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Escape` | Deselect / Exit drawing mode |

### Context Menu (Right-Click)
- Bring to Front
- Send to Back
- Duplicate
- Lock/Unlock
- Add Frame
- AI Cutout (Remove Background)
- Delete

## 🛠️ Technical Stack

- **Canvas Engine**: [Fabric.js](http://fabricjs.com/) - Complex drag/rotate/layering logic
- **Fonts**: Google Fonts (Caveat, Patrick Hand, Permanent Marker, etc.)
- **Real-time Sync**: Supabase (placeholder ready for integration)

## 🎨 Customization

### Page Textures
Available textures in `styles.css`:
- `cardstock` - Black textured cardstock
- `graph` - Graph paper with grid lines
- `kraft` - Brown kraft paper

### Color Palette
CSS variables in `:root`:
```css
--heart-pink: #FF6B9D;
--star-gold: #FFD700;
--accent-coral: #FF6B6B;
--accent-teal: #4ECDC4;
--accent-yellow: #FFE66D;
```

## 🔮 Roadmap

- [ ] Supabase real-time collaboration
- [ ] AI background removal integration
- [ ] More sticker packs
- [ ] Custom page sizes
- [ ] Export to PDF/PNG
- [ ] Template library
- [ ] Mobile touch support improvements

## 📄 License

MIT License - Feel free to use and modify!

---

Made with 💕 for creative memory-making

