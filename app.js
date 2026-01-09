/**
 * Collective Scrapbook - Figma-Inspired Digital Scrapbook
 * Features: Red hardcover book, cream pages, scattered polaroids
 */

// ==========================================
// CONFIGURATION & ASSETS
// ==========================================
const CONFIG = {
  canvasWidth: 420,
  canvasHeight: 560,
  defaultBrushSize: 4,
  defaultBrushColor: '#1a1a1a',
  
  // Static list of sticker files
  stickerFiles: [
    '05.png', '06.png', '07.png', '08.png', '09.png',
    '10.png', '11.png', '12.png', '13.png', '14.png',
    '15.png', '16.png', '17.png', '18.png', '19.png',
    '20.png', '21.png', '22.png', '23.png', '24.png',
    '25.png', '26.png', '27.png', '28.png', '29.png',
    '30.png', '31.png', '32.png', '33.png', '34.png'
  ],
  
  // Backup online stickers (always work)
  onlineStickers: [
    'https://em-content.zobj.net/source/apple/391/star_2b50.png',
    'https://em-content.zobj.net/source/apple/391/sparkling-heart_1f496.png',
    'https://em-content.zobj.net/source/apple/391/rainbow_1f308.png',
    'https://em-content.zobj.net/source/apple/391/butterfly_1f98b.png',
    'https://em-content.zobj.net/source/apple/391/cherry-blossom_1f338.png',
    'https://em-content.zobj.net/source/apple/391/sun_2600-fe0f.png',
    'https://em-content.zobj.net/source/apple/391/crescent-moon_1f319.png',
    'https://em-content.zobj.net/source/apple/391/cloud_2601-fe0f.png',
    'https://em-content.zobj.net/source/apple/391/fire_1f525.png',
    'https://em-content.zobj.net/source/apple/391/red-heart_2764-fe0f.png',
    'https://em-content.zobj.net/source/apple/391/glowing-star_1f31f.png',
    'https://em-content.zobj.net/source/apple/391/sparkles_2728.png',
    'https://em-content.zobj.net/source/apple/391/tulip_1f337.png',
    'https://em-content.zobj.net/source/apple/391/rose_1f339.png',
    'https://em-content.zobj.net/source/apple/391/hibiscus_1f33a.png',
    'https://em-content.zobj.net/source/apple/391/sunflower_1f33b.png',
    'https://em-content.zobj.net/source/apple/391/smiling-face-with-hearts_1f970.png',
    'https://em-content.zobj.net/source/apple/391/face-blowing-a-kiss_1f618.png',
    'https://em-content.zobj.net/source/apple/391/cat-with-tears-of-joy_1f639.png',
    'https://em-content.zobj.net/source/apple/391/dog-face_1f436.png'
  ],
  
  // Sticker base path
  stickerBasePath: 'assets/stickers/',

  // Ephemera items
  ephemera: {
    tickets: [
      { type: 'ticket', label: 'ADMIT ONE', color: '#E63946' },
      { type: 'ticket', label: 'VIP PASS', color: '#FFD700' },
      { type: 'ticket', label: 'CINEMA', color: '#1a1a1a' },
      { type: 'ticket', label: 'CONCERT', color: '#4ECDC4' },
      { type: 'boarding', label: 'BOARDING PASS', color: '#87CEEB' },
      { type: 'receipt', label: 'RECEIPT', color: '#F5F0E6' },
    ],
    stamps: [
      { type: 'stamp', label: '5¢', color: '#E63946' },
      { type: 'stamp', label: '10¢', color: '#4ECDC4' },
      { type: 'stamp', label: 'AIR MAIL', color: '#87CEEB' },
      { type: 'stamp', label: 'LOVE', color: '#FFB5C5' },
      { type: 'postmark', label: 'POSTMARK', color: '#1a1a1a' },
      { type: 'seal', label: 'APPROVED', color: '#98D8AA' },
    ],
    vintage: [
      { type: 'cassette', label: 'MIX TAPE', color: '#1a1a1a' },
      { type: 'polaroid-empty', label: 'BLANK POLAROID', color: '#FFFFFF' },
      { type: 'airmail', label: 'AIR MAIL', color: '#F5F0E6' },
      { type: 'postcard', label: 'POSTCARD', color: '#F5F0E6' },
      { type: 'filmstrip', label: 'FILM', color: '#1a1a1a' },
      { type: 'label', label: 'VINTAGE LABEL', color: '#C4A77D' },
    ]
  },

  // Ransom letter styles
  ransomStyles: [
    { bg: '#FF6B6B', color: '#FFFFFF', font: 'Times New Roman, serif' },
    { bg: '#4ECDC4', color: '#FFFFFF', font: 'Impact, sans-serif' },
    { bg: '#FFE66D', color: '#1a1a1a', font: 'Georgia, serif', italic: true },
    { bg: '#FFFFFF', color: '#1a1a1a', font: 'Courier New, monospace', border: true },
    { bg: '#AA96DA', color: '#FFFFFF', font: 'Arial Black, sans-serif' },
    { bg: '#1a1a1a', color: '#FFFFFF', font: 'Verdana, sans-serif' },
    { bg: '#FF8C42', color: '#FFFFFF', font: 'Trebuchet MS, sans-serif' },
    { bg: '#98D8AA', color: '#1a1a1a', font: 'Georgia, serif' },
    { bg: '#FFB5C5', color: '#1a1a1a', font: 'Comic Sans MS, cursive' },
    { bg: '#87CEEB', color: '#FFFFFF', font: 'Impact, sans-serif' },
  ],

  // Tape patterns (for canvas rendering)
  tapePatterns: {
    'pink-stripe': { colors: ['#FFB5C5', '#FFF0F3'], type: 'stripe' },
    'blue-dots': { colors: ['#87CEEB', '#E6F3FA'], type: 'dots' },
    'washi-floral': { colors: ['#FFB6C1', '#98FB98', '#FFD700'], type: 'floral' },
    'gingham': { colors: ['#FFB5C5', '#FFFFFF'], type: 'gingham' },
    'gold-foil': { colors: ['#D4AF37', '#F5D060'], type: 'metallic' },
    'kraft-tape': { colors: ['#C4A77D'], type: 'solid' },
    'clear-tape': { colors: ['rgba(255,255,255,0.3)'], type: 'clear' },
    'masking': { colors: ['#F5E6C8'], type: 'solid' },
  },

  // Photo frame settings
  frames: {
    polaroid: { padding: 10, bottom: 45, color: '#FFFFFF', shadow: true },
    film: { padding: 8, sides: 25, color: '#1a1a1a', holes: true },
    torn: { irregular: true, color: 'transparent' },
    none: { padding: 0 }
  }
};

// ==========================================
// APPLICATION STATE
// ==========================================
const state = {
  leftCanvas: null,
  rightCanvas: null,
  activeCanvas: null,
  activeTool: 'select',
  activeFrame: 'polaroid',
  activeFont: 'Caveat',
  brushColor: CONFIG.defaultBrushColor,
  brushSize: CONFIG.defaultBrushSize,
  isDrawerOpen: false,
  selectedObject: null,
  currentPage: 1,
  pages: [{ left: [], right: [] }],
  history: [],
  historyIndex: -1
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Always set up the loading screen skip FIRST
  hideLoading();
  
  try {
    // Check if Fabric.js is loaded
    if (typeof fabric === 'undefined') {
      console.error('Fabric.js not loaded - check network connection');
      const overlay = document.getElementById('loadingOverlay');
      if (overlay) {
        overlay.innerHTML = `
          <div style="text-align: center; padding: 40px; font-family: Georgia, serif; color: #5C4033;">
            <p style="font-size: 18px;">couldn't load scrapbook</p>
            <p style="font-size: 14px; opacity: 0.7;">please check your internet connection and refresh</p>
          </div>
        `;
        overlay.style.cursor = 'default';
      }
      return;
    }
    
    initCanvases();
    initDrawer();
    initStickers();
    initAIStickerGenerator();
    initTape();
    initRansomKeyboard();
    initNotebookColors();
    initSaveShare();
    initEventListeners();
  } catch (error) {
    console.error('Initialization error:', error);
    // Still hide loading on error so user can see something
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
});

// ==========================================
// NOTEBOOK COLOR PICKER
// ==========================================
function initNotebookColors() {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const book = document.querySelector('.scrapbook-book');
  
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      // Update active state
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      
      // Update book color class
      const color = swatch.dataset.color;
      book.className = 'scrapbook-book color-' + color;
      
      // Save preference
      localStorage.setItem('scrapbook-color', color);
    });
  });
  
  // Load saved color
  const savedColor = localStorage.getItem('scrapbook-color');
  if (savedColor) {
    const savedSwatch = document.querySelector(`.color-swatch[data-color="${savedColor}"]`);
    if (savedSwatch) {
      colorSwatches.forEach(s => s.classList.remove('active'));
      savedSwatch.classList.add('active');
      book.className = 'scrapbook-book color-' + savedColor;
    }
  }
}

// ==========================================
// SAVE & SHARE FUNCTIONALITY
// ==========================================
function initSaveShare() {
  document.getElementById('saveBtn')?.addEventListener('click', saveScrapbook);
  document.getElementById('shareBtn')?.addEventListener('click', shareScrapbook);
  document.getElementById('exportBtn')?.addEventListener('click', exportScrapbook);
  
  // Load saved scrapbook if exists
  loadScrapbook();
}

function saveScrapbook(showMessage = true) {
  if (!state.leftCanvas || !state.rightCanvas) return;
  
  const scrapbookData = {
    version: 1,
    color: localStorage.getItem('scrapbook-color') || 'red',
    currentPage: state.currentPage,
    leftCanvas: state.leftCanvas.toJSON(),
    rightCanvas: state.rightCanvas.toJSON(),
    timestamp: Date.now()
  };
  
  // Generate unique ID if not exists
  let scrapbookId = localStorage.getItem('scrapbook-id');
  if (!scrapbookId) {
    scrapbookId = generateScrapbookId();
    localStorage.setItem('scrapbook-id', scrapbookId);
  }
  
  // Save to localStorage
  try {
    localStorage.setItem('scrapbook-data', JSON.stringify(scrapbookData));
  } catch (e) {
    console.error('Failed to save:', e);
    return;
  }
  
  // Animate save button
  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) {
    saveBtn.classList.remove('needs-save');
    saveBtn.classList.add('save-success');
    setTimeout(() => saveBtn.classList.remove('save-success'), 500);
  }
  
  // Show save confirmation only if requested
  if (showMessage) {
    showNotification('scrapbook saved!');
  }
}

// Auto-save after changes (debounced)
let autoSaveTimeout = null;
function autoSave() {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    saveScrapbook(false); // Save without showing message
  }, 2000); // Save 2 seconds after last change
}

function loadScrapbook() {
  const savedData = localStorage.getItem('scrapbook-data');
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      
      // Wait for canvases to initialize, then load
      setTimeout(() => {
        if (data.leftCanvas && state.leftCanvas) {
          state.leftCanvas.loadFromJSON(data.leftCanvas, () => {
            state.leftCanvas.renderAll();
          });
        }
        if (data.rightCanvas && state.rightCanvas) {
          state.rightCanvas.loadFromJSON(data.rightCanvas, () => {
            state.rightCanvas.renderAll();
          });
        }
      }, 500);
    } catch (e) {
      console.error('Failed to load scrapbook:', e);
    }
  }
}

function shareScrapbook() {
  // Save current state first
  saveScrapbook();
  
  // Get or create scrapbook ID
  let scrapbookId = localStorage.getItem('scrapbook-id');
  if (!scrapbookId) {
    scrapbookId = generateScrapbookId();
    localStorage.setItem('scrapbook-id', scrapbookId);
  }
  
  // Create shareable data (compressed)
  const scrapbookData = localStorage.getItem('scrapbook-data');
  const compressed = btoa(scrapbookData);
  
  // Create shareable URL
  const shareUrl = `${window.location.origin}${window.location.pathname}?s=${scrapbookId}`;
  
  // Also store in URL fragment for direct sharing
  const fullUrl = `${shareUrl}#data=${compressed.substring(0, 500)}`;
  
  // Copy to clipboard
  navigator.clipboard.writeText(shareUrl).then(() => {
    showNotification('link copied! share the love!');
    createConfetti(80); // Celebrate!
  }).catch(() => {
    // Fallback - show the URL
    prompt('Copy this link to share:', shareUrl);
  });
}

function exportScrapbook() {
  // Create a combined canvas for export
  const exportCanvas = document.createElement('canvas');
  const ctx = exportCanvas.getContext('2d');
  
  const leftCanvas = state.leftCanvas;
  const rightCanvas = state.rightCanvas;
  
  // Set export canvas size
  exportCanvas.width = leftCanvas.width + rightCanvas.width + 40;
  exportCanvas.height = Math.max(leftCanvas.height, rightCanvas.height) + 40;
  
  // Draw paper background
  ctx.fillStyle = '#F8F5EC';
  ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
  
  // Draw canvases
  ctx.drawImage(leftCanvas.toCanvasElement(), 20, 20);
  ctx.drawImage(rightCanvas.toCanvasElement(), leftCanvas.width + 20, 20);
  
  // Download as PNG
  const link = document.createElement('a');
  link.download = `scrapbook-${Date.now()}.png`;
  link.href = exportCanvas.toDataURL('image/png');
  link.click();
  
  // Celebrate the export!
  createConfetti(50);
  showNotification('scrapbook exported! beautiful memories saved!');
}

function generateScrapbookId() {
  return 'sb_' + Math.random().toString(36).substring(2, 10);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('visible'), 10);
  
  // Remove after delay
  setTimeout(() => {
    notification.classList.remove('visible');
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// ==========================================
// DECORATIVE STICKERS (around polaroids)
// ==========================================
async function loadDecorativeStickers() {
  const stickerElements = document.querySelectorAll('.decorative-sticker');
  const basePath = CONFIG.stickerBasePath;
  const availableStickers = [];
  
  // Try to find stickers
  for (let i = 1; i <= 20; i++) {
    const src = `${basePath}${i}.png`;
    const exists = await checkImageExists(src);
    if (exists) {
      availableStickers.push(src);
    }
  }
  
  // Also check subfolders
  const folders = ['stars', 'hearts', 'flowers', 'characters'];
  for (const folder of folders) {
    for (let i = 1; i <= 5; i++) {
      const src = `${basePath}${folder}/${i}.png`;
      const exists = await checkImageExists(src);
      if (exists) {
        availableStickers.push(src);
      }
    }
  }
  
  // Randomly assign stickers to decorative elements
  if (availableStickers.length > 0) {
    stickerElements.forEach(el => {
      const randomSticker = availableStickers[Math.floor(Math.random() * availableStickers.length)];
      el.style.backgroundImage = `url('${randomSticker}')`;
    });
  }
}

// Load decorative stickers after page load
setTimeout(loadDecorativeStickers, 1000);

function initCanvases() {
  const leftPage = document.getElementById('leftPage');
  const rightPage = document.getElementById('rightPage');
  
  // Calculate canvas size based on page dimensions
  // Using viewport-based calculation
  const viewportHeight = window.innerHeight;
  const toolbarHeight = 52;
  const drawerHeight = 52;
  const padding = 100;
  
  const availableHeight = viewportHeight - toolbarHeight - drawerHeight - padding;
  const pageHeight = Math.min(availableHeight, 560);
  const pageWidth = Math.round(pageHeight * 0.75); // 4:3 aspect ratio
  
  CONFIG.canvasWidth = pageWidth;
  CONFIG.canvasHeight = pageHeight;
  
  // Set page dimensions via CSS
  if (leftPage && rightPage) {
    leftPage.style.width = `${pageWidth}px`;
    leftPage.style.height = `${pageHeight}px`;
    rightPage.style.width = `${pageWidth}px`;
    rightPage.style.height = `${pageHeight}px`;
  }
  
  state.leftCanvas = new fabric.Canvas('canvas-left', {
    width: pageWidth,
    height: pageHeight,
    backgroundColor: 'transparent',
    selection: true,
    preserveObjectStacking: true
  });

  state.rightCanvas = new fabric.Canvas('canvas-right', {
    width: pageWidth,
    height: pageHeight,
    backgroundColor: 'transparent',
    selection: true,
    preserveObjectStacking: true
  });

  state.activeCanvas = state.leftCanvas;

  [state.leftCanvas, state.rightCanvas].forEach(canvas => {
    setupCanvasEvents(canvas);
  });

  initDragAndDrop();
  loadSampleContent();
  
  // Handle window resize
  window.addEventListener('resize', debounce(resizeCanvases, 250));
}

function resizeCanvases() {
  const viewportHeight = window.innerHeight;
  const toolbarHeight = 52;
  const drawerHeight = 52;
  const padding = 100;
  
  const availableHeight = viewportHeight - toolbarHeight - drawerHeight - padding;
  const newPageHeight = Math.min(availableHeight, 560);
  const newPageWidth = Math.round(newPageHeight * 0.75);
  
  if (newPageWidth !== CONFIG.canvasWidth || newPageHeight !== CONFIG.canvasHeight) {
    const scaleX = newPageWidth / CONFIG.canvasWidth;
    const scaleY = newPageHeight / CONFIG.canvasHeight;
    
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    
    if (leftPage && rightPage) {
      leftPage.style.width = `${newPageWidth}px`;
      leftPage.style.height = `${newPageHeight}px`;
      rightPage.style.width = `${newPageWidth}px`;
      rightPage.style.height = `${newPageHeight}px`;
    }
    
    CONFIG.canvasWidth = newPageWidth;
    CONFIG.canvasHeight = newPageHeight;
    
    [state.leftCanvas, state.rightCanvas].forEach(canvas => {
      canvas.getObjects().forEach(obj => {
        obj.scaleX *= scaleX;
        obj.scaleY *= scaleY;
        obj.left *= scaleX;
        obj.top *= scaleY;
        obj.setCoords();
      });
      canvas.setDimensions({ width: newPageWidth, height: newPageHeight });
      canvas.renderAll();
    });
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function setupCanvasEvents(canvas) {
  canvas.on('mouse:down', (e) => {
    state.activeCanvas = canvas;
    hideContextMenu();
    if (e.target) state.selectedObject = e.target;
  });

  canvas.upperCanvasEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (canvas.getActiveObject()) {
      showContextMenu(e.clientX, e.clientY);
    }
  });

  canvas.on('object:modified', () => { saveHistory(); autoSave(); });
  canvas.on('object:added', () => { saveHistory(); autoSave(); });
  canvas.on('text:changed', autoSave);

  canvas.on('selection:created', (e) => { state.selectedObject = e.selected[0]; });
  canvas.on('selection:updated', (e) => { state.selectedObject = e.selected[0]; });
  canvas.on('selection:cleared', () => { state.selectedObject = null; });
  
  // Enable moving objects between pages
  canvas.on('object:moving', (e) => {
    const obj = e.target;
    if (!obj) return;
    
    // Check if object moved past canvas boundary
    const isLeftCanvas = canvas === state.leftCanvas;
    const otherCanvas = isLeftCanvas ? state.rightCanvas : state.leftCanvas;
    
    // If moving right on left canvas or left on right canvas
    if (isLeftCanvas && obj.left > canvas.width - 20) {
      transferObjectToCanvas(obj, canvas, otherCanvas, 'right');
    } else if (!isLeftCanvas && obj.left < 20) {
      transferObjectToCanvas(obj, canvas, otherCanvas, 'left');
    }
  });
}

// Transfer object from one canvas to another
function transferObjectToCanvas(obj, fromCanvas, toCanvas, direction) {
  // Clone the object
  obj.clone((cloned) => {
    // Adjust position for the new canvas
    if (direction === 'right') {
      cloned.set({ left: 30 });
    } else {
      cloned.set({ left: toCanvas.width - 30 - (obj.width * obj.scaleX) });
    }
    
    // Remove from source canvas
    fromCanvas.remove(obj);
    fromCanvas.discardActiveObject();
    
    // Add to destination canvas
    toCanvas.add(cloned);
    toCanvas.setActiveObject(cloned);
    
    // Update active canvas
    state.activeCanvas = toCanvas;
    
    // Render both canvases
    fromCanvas.renderAll();
    toCanvas.renderAll();
    
    // Save history
    saveHistory();
  });
}

// ==========================================
// DRAWER FUNCTIONALITY
// ==========================================
function initDrawer() {
  const drawer = document.getElementById('suppliesDrawer');
  const handle = document.getElementById('drawerHandle');
  const tabs = document.querySelectorAll('.drawer-tab');
  const compartments = document.querySelectorAll('.compartment');

  handle.addEventListener('click', () => {
    state.isDrawerOpen = !state.isDrawerOpen;
    drawer.classList.toggle('expanded', state.isDrawerOpen);
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      compartments.forEach(c => {
        c.classList.toggle('active', c.dataset.category === category);
      });
      if (!state.isDrawerOpen) {
        state.isDrawerOpen = true;
        drawer.classList.add('expanded');
      }
    });
  });

  initPenTools();
  initFrameOptions();
  initTextTools();
  initUploadZone();
}

function initPenTools() {
  const penTools = document.querySelectorAll('.pen-tool');
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const brushSizeInput = document.getElementById('brushSize');
  const brushSizeValue = document.getElementById('brushSizeValue');

  penTools.forEach(tool => {
    tool.addEventListener('click', () => {
      penTools.forEach(t => t.classList.remove('active'));
      tool.classList.add('active');
      state.activeTool = tool.dataset.tool;
      configureDrawingTool(tool.dataset.tool);
    });
  });

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      state.brushColor = swatch.dataset.color;
      updateBrushSettings();
    });
  });

  brushSizeInput.addEventListener('input', (e) => {
    state.brushSize = parseInt(e.target.value);
    brushSizeValue.textContent = `${state.brushSize}px`;
    updateBrushSettings();
  });
}

function configureDrawingTool(toolType) {
  [state.leftCanvas, state.rightCanvas].forEach(canvas => {
    // Remove eraser mode click handler if exists
    canvas.off('mouse:down', eraserHandler);
    
    switch (toolType) {
      case 'marker':
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        canvas.freeDrawingBrush.color = state.brushColor;
        canvas.freeDrawingBrush.width = state.brushSize;
        updateModeIndicator('marker');
        canvas.freeDrawingBrush.strokeLineCap = 'round';
        canvas.freeDrawingBrush.strokeLineJoin = 'round';
        break;
      case 'pencil':
        canvas.isDrawingMode = true;
        // Create a pencil-like brush with texture
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        canvas.freeDrawingBrush.color = state.brushColor;
        canvas.freeDrawingBrush.width = Math.max(1, state.brushSize * 0.5);
        canvas.freeDrawingBrush.strokeLineCap = 'round';
        canvas.freeDrawingBrush.strokeLineJoin = 'round';
        // Add slight opacity variation for pencil texture
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
          blur: 0.5,
          offsetX: 0.5,
          offsetY: 0.5,
          color: 'rgba(0, 0, 0, 0.1)'
        });
        updateModeIndicator('pencil');
        break;
      case 'highlighter':
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        canvas.freeDrawingBrush.color = hexToRgba(state.brushColor, 0.3);
        canvas.freeDrawingBrush.width = state.brushSize * 3;
        canvas.freeDrawingBrush.strokeLineCap = 'square';
        updateModeIndicator('highlighter');
        break;
      case 'eraser':
        // Eraser mode - click objects to delete them
        canvas.isDrawingMode = false;
        canvas.defaultCursor = 'crosshair';
        canvas.hoverCursor = 'pointer';
        canvas.on('mouse:down', eraserHandler);
        updateModeIndicator('eraser');
        break;
      case 'select':
      default:
        // Selection mode - normal cursor for selecting/moving objects
        canvas.isDrawingMode = false;
        canvas.defaultCursor = 'default';
        canvas.hoverCursor = 'move';
        canvas.selection = true;
        state.activeTool = 'select';
        updateModeIndicator('select');
        break;
    }
  });
}

// Eraser handler - removes clicked objects
function eraserHandler(opt) {
  const canvas = opt.target ? opt.target.canvas : this;
  if (opt.target && state.activeTool === 'eraser') {
    canvas.remove(opt.target);
    canvas.discardActiveObject();
    canvas.renderAll();
    saveHistory();
    autoSave();
    showNotification('deleted!');
  }
}

// Exit drawing/eraser mode properly
function exitDrawingMode() {
  [state.leftCanvas, state.rightCanvas].forEach(canvas => {
    canvas.isDrawingMode = false;
    canvas.defaultCursor = 'default';
    canvas.hoverCursor = 'move';
    canvas.selection = true;
    canvas.off('mouse:down', eraserHandler);
  });
  // Reset pen tool active states and highlight select
  document.querySelectorAll('.pen-tool').forEach(t => {
    t.classList.remove('active');
    if (t.dataset.tool === 'select') {
      t.classList.add('active');
    }
  });
  state.activeTool = 'select';
  
  // Update mode indicator
  updateModeIndicator('select');
}

// Show current mode to user
function updateModeIndicator(mode) {
  // Remove existing indicator
  const existing = document.querySelector('.mode-indicator');
  if (existing) existing.remove();
  
  // Only show indicator for drawing modes
  if (mode !== 'select') {
    const indicator = document.createElement('div');
    indicator.className = 'mode-indicator';
    indicator.innerHTML = `<span>${mode} mode</span><button class="exit-mode-btn">× exit</button>`;
    document.body.appendChild(indicator);
    
    indicator.querySelector('.exit-mode-btn').addEventListener('click', () => {
      exitDrawingMode();
    });
  }
}

function updateBrushSettings() {
  [state.leftCanvas, state.rightCanvas].forEach(canvas => {
    if (canvas.freeDrawingBrush) {
      if (state.activeTool === 'highlighter') {
        canvas.freeDrawingBrush.color = hexToRgba(state.brushColor, 0.35);
        canvas.freeDrawingBrush.width = state.brushSize * 3;
      } else if (state.activeTool !== 'eraser') {
        canvas.freeDrawingBrush.color = state.brushColor;
        canvas.freeDrawingBrush.width = state.brushSize;
      }
    }
  });
}

// ==========================================
// FRAME OPTIONS
// ==========================================
function initFrameOptions() {
  const frameOptions = document.querySelectorAll('.frame-option');
  frameOptions.forEach(option => {
    option.addEventListener('click', () => {
      frameOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      state.activeFrame = option.dataset.frame;
    });
  });
}

// ==========================================
// STICKERS
// ==========================================
function initStickers() {
  loadAllStickers();
}

async function loadAllStickers() {
  const grid = document.getElementById('stickerGrid');
  const basePath = CONFIG.stickerBasePath;
  
  // Combine local stickers + online backup stickers
  const localStickers = CONFIG.stickerFiles.map((filename, index) => ({
    src: basePath + filename,
    name: `sticker-${index + 1}`
  }));
  
  const onlineStickers = CONFIG.onlineStickers.map((url, index) => ({
    src: url,
    name: `emoji-${index + 1}`
  }));
  
  // Use online stickers + local stickers
  const allStickers = [...onlineStickers, ...localStickers];
  
  grid.innerHTML = allStickers.map((sticker) => `
    <div class="sticker-item" data-src="${sticker.src}" data-name="${sticker.name}" draggable="true">
      <img src="${sticker.src}" alt="${sticker.name}" loading="lazy" onerror="this.parentElement.style.display='none'" />
    </div>
  `).join('');

  grid.querySelectorAll('.sticker-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('type', 'sticker');
      e.dataTransfer.setData('src', item.dataset.src);
    });
    item.addEventListener('click', () => {
      addStickerToCanvas(item.dataset.src);
    });
  });
}

// Load stickers directly from the main stickers folder
async function loadStickersFromMainFolder() {
  const basePath = CONFIG.stickerBasePath;
  const stickers = [];
  
  // Try numbered files (1.png through 50.png) - both with and without leading zeros
  for (let i = 1; i <= 50; i++) {
    // Try without leading zero: 1.png, 2.png, etc.
    const filename1 = `${i}.png`;
    const exists1 = await checkImageExists(basePath + filename1);
    if (exists1) {
      stickers.push({ src: basePath + filename1, name: `sticker-${i}` });
    }
    
    // Try with leading zero: 01.png, 02.png, etc.
    const filename2 = `${String(i).padStart(2, '0')}.png`;
    if (filename2 !== filename1) {
      const exists2 = await checkImageExists(basePath + filename2);
      if (exists2) {
        stickers.push({ src: basePath + filename2, name: `sticker-${i}` });
      }
    }
  }
  
  // Try common naming patterns
  const patterns = [];
  for (let i = 1; i <= 20; i++) {
    patterns.push(`sticker-${i}`, `sticker${i}`);
  }
  
  for (const pattern of patterns) {
    const filename = `${pattern}.png`;
    const exists = await checkImageExists(basePath + filename);
    if (exists && !stickers.find(s => s.src === basePath + filename)) {
      stickers.push({ src: basePath + filename, name: pattern });
    }
  }
  
  return stickers;
}


// Load stickers from folder - checks for common filenames
async function loadStickersFromFolder(category) {
  const basePath = CONFIG.stickerBasePath + category + '/';
  const stickers = [];
  
  // Try to load numbered stickers (1.png through 20.png)
  for (let i = 1; i <= 20; i++) {
    const filename = `${i}.png`;
    const exists = await checkImageExists(basePath + filename);
    if (exists) {
      stickers.push({ src: basePath + filename, name: `${category}-${i}` });
    }
  }
  
  // Also try common naming patterns
  const patterns = [
    'sticker-1', 'sticker-2', 'sticker-3', 'sticker-4', 'sticker-5',
    'sticker-6', 'sticker-7', 'sticker-8', 'sticker-9', 'sticker-10',
    `${category}-1`, `${category}-2`, `${category}-3`, `${category}-4`,
    `${category}-5`, `${category}-6`, `${category}-7`, `${category}-8`,
  ];
  
  for (const pattern of patterns) {
    const filename = `${pattern}.png`;
    const exists = await checkImageExists(basePath + filename);
    if (exists && !stickers.find(s => s.src === basePath + filename)) {
      stickers.push({ src: basePath + filename, name: pattern });
    }
  }
  
  return stickers;
}

// Check if an image file exists
function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function addStickerToCanvas(src, x = null, y = null, scale = 1) {
  const canvas = state.activeCanvas;
  if (!canvas) {
    console.error('No active canvas');
    return;
  }
  
  // Use crossOrigin only for same-origin images
  const options = src.startsWith('http') ? { crossOrigin: 'anonymous' } : {};
  
  fabric.Image.fromURL(src, (img) => {
    if (!img) {
      console.error('Failed to load image:', src);
      return;
    }
    
    // Scale sticker to reasonable size (max 80px)
    const maxSize = 80 * scale;
    const imgScale = Math.min(maxSize / (img.width || 100), maxSize / (img.height || 100));
    
    const posX = x || canvas.width / 2 + (Math.random() - 0.5) * 100;
    const posY = y || canvas.height / 2 + (Math.random() - 0.5) * 100;
    
    img.set({
      left: posX,
      top: posY,
      scaleX: imgScale,
      scaleY: imgScale,
      originX: 'center',
      originY: 'center',
      angle: (Math.random() - 0.5) * 25
    });
    
    canvas.add(img);
    canvas.setActiveObject(img);
    canvas.renderAll();
    
    // Auto-save after adding sticker
    autoSave();
    
  }, options);
}

// Animate sticker placement
function animateStickerIn(obj, canvas) {
  const startTop = obj.top - 30;
  const endTop = obj.top;
  const startAngle = obj.angle - 20;
  const endAngle = obj.angle;
  const startTime = Date.now();
  const duration = 400;
  
  obj.set({ top: startTop, angle: startAngle });
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutBack(progress);
    
    obj.set({
      opacity: Math.min(eased * 1.5, 1),
      top: startTop + (endTop - startTop) * eased,
      angle: startAngle + (endAngle - startAngle) * eased
    });
    canvas.renderAll();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
}

// ==========================================
// AI STICKER GENERATOR
// ==========================================
// Uses Pollinations.ai - free AI image generation, no API key needed

let generatedStickers = [];

function initAIStickerGenerator() {
  const generateBtn = document.getElementById('generateStickerBtn');
  const promptInput = document.getElementById('aiStickerPrompt');
  const styleButtons = document.querySelectorAll('.ai-style');
  
  // Style selection
  let currentStyle = 'kawaii';
  styleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      styleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStyle = btn.dataset.style;
    });
  });
  
  // Generate button
  generateBtn.addEventListener('click', () => generateAISticker(currentStyle));
  
  // Enter key to generate
  promptInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateAISticker(currentStyle);
  });
  
  // Show initial state
  const container = document.getElementById('aiGeneratedStickers');
  container.innerHTML = `
    <div class="ai-empty-state">
      <p>Describe your sticker and click Generate!</p>
      <p class="ai-hint">e.g., "cute cat with sunglasses"</p>
    </div>
  `;
}

async function generateAISticker(style) {
  const promptInput = document.getElementById('aiStickerPrompt');
  const generateBtn = document.getElementById('generateStickerBtn');
  const resultsContainer = document.getElementById('aiGeneratedStickers');
  const userPrompt = promptInput.value.trim();
  
  if (!userPrompt) {
    promptInput.placeholder = 'please describe your sticker...';
    promptInput.classList.add('shake');
    setTimeout(() => promptInput.classList.remove('shake'), 500);
    return;
  }
  
  // Build sticker-optimized prompts - focus on cute, clean, isolated designs
  const stylePrompts = {
    kawaii: 'adorable kawaii chibi style, pastel colors, big eyes, rounded shapes, super cute',
    vintage: 'cute retro cartoon style, soft muted colors, charming illustration',
    minimal: 'cute simple flat illustration, clean lines, soft colors, adorable',
    retro: 'cute groovy 70s cartoon style, fun colors, playful design'
  };
  
  // Optimized prompt for sticker generation
  const fullPrompt = `cute ${userPrompt}, ${stylePrompts[style] || stylePrompts.kawaii}, die-cut sticker design, isolated on pure white background, no shadows, clean edges, vector art style, single object centered, professional sticker illustration, high quality, trending on dribbble`;
  
  // Negative prompt to avoid bad results
  const negativePrompt = 'background, scenery, multiple objects, text, watermark, signature, blurry, low quality, realistic, photograph, border, frame, shadow';
  
  // Show loading state
  generateBtn.classList.add('loading');
  generateBtn.disabled = true;
  resultsContainer.innerHTML = `
    <div class="ai-loading">
      <div class="ai-spinner"></div>
      <p>creating cute sticker... (may take 30-60s)</p>
    </div>
  `;
  
  try {
    // Use Stable Horde with better model for stickers
    const response = await fetch('https://stablehorde.net/api/v2/generate/async', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': '0000000000' // Anonymous key - free tier
      },
      body: JSON.stringify({
        prompt: fullPrompt,
        params: {
          width: 512,
          height: 512,
          steps: 30,
          cfg_scale: 7.5,
          n: 2,
          sampler_name: 'k_euler_a',
          clip_skip: 2
        },
        nsfw: false,
        models: ['Deliberate', 'stable_diffusion'],
        negative_prompt: negativePrompt
      })
    });
    
    const data = await response.json();
    
    if (data.id) {
      // Poll for results
      const stickers = await pollForResults(data.id, userPrompt);
      
      if (stickers.length > 0) {
        displayGeneratedStickers(stickers);
        generatedStickers.unshift(...stickers);
        if (generatedStickers.length > 20) {
          generatedStickers = generatedStickers.slice(0, 20);
        }
        updateAIHistory();
      } else {
        throw new Error('No images generated');
      }
    } else {
      throw new Error(data.message || 'Failed to start generation');
    }
    
  } catch (error) {
    console.error('AI generation error:', error);
    
    // Try Prodia as primary fallback (better quality)
    try {
      await generateWithProdia(userPrompt, style, resultsContainer);
    } catch (prodiaError) {
      // Try other fallback
      try {
        await generateWithFallback(userPrompt, style, resultsContainer);
      } catch (fallbackError) {
        resultsContainer.innerHTML = `
          <div class="ai-error">
            <p>ai servers are busy</p>
            <p class="ai-hint">try a simpler prompt like "cute cat" or "happy star"</p>
            <button class="retry-btn" onclick="generateAISticker('${style}')">try again</button>
          </div>
        `;
      }
    }
  } finally {
    generateBtn.classList.remove('loading');
    generateBtn.disabled = false;
  }
}

// Generate using Prodia API (free, good quality)
async function generateWithProdia(prompt, style, container) {
  const stylePrompts = {
    kawaii: 'kawaii chibi adorable',
    vintage: 'vintage retro charming',
    minimal: 'simple flat clean',
    retro: 'groovy fun colorful'
  };
  
  const fullPrompt = `((cute sticker)), ${prompt}, ${stylePrompts[style] || 'kawaii'} style, isolated on pure white background, die-cut sticker, no background, centered, single object, vector art, clean edges, professional illustration, high quality`;
  const negPrompt = 'realistic, photo, background, scenery, text, watermark, multiple objects, shadow, border, frame, blurry, low quality';
  
  container.innerHTML = `
    <div class="ai-loading">
      <div class="ai-spinner"></div>
      <p>creating cute sticker...</p>
    </div>
  `;
  
  // Prodia free API
  const response = await fetch('https://api.prodia.com/v1/sd/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'dreamshaper_8.safetensors [879db523]',
      prompt: fullPrompt,
      negative_prompt: negPrompt,
      steps: 25,
      cfg_scale: 7,
      sampler: 'DPM++ 2M Karras',
      width: 512,
      height: 512
    })
  });
  
  if (!response.ok) throw new Error('Prodia API failed');
  
  const data = await response.json();
  
  if (data.job) {
    // Poll for completion
    let attempts = 0;
    while (attempts < 30) {
      await new Promise(r => setTimeout(r, 2000));
      const statusRes = await fetch(`https://api.prodia.com/v1/job/${data.job}`);
      const status = await statusRes.json();
      
      if (status.status === 'succeeded' && status.imageUrl) {
        const stickers = [{ src: status.imageUrl, prompt }];
        displayGeneratedStickers(stickers);
        generatedStickers.unshift(...stickers);
        return;
      } else if (status.status === 'failed') {
        throw new Error('Generation failed');
      }
      attempts++;
    }
  }
  
  throw new Error('Timeout');
}

// Poll Stable Horde for completed images
async function pollForResults(jobId, prompt, maxAttempts = 30) {
  const stickers = [];
  
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    
    const response = await fetch(`https://stablehorde.net/api/v2/generate/check/${jobId}`);
    const status = await response.json();
    
    if (status.done) {
      // Get the generated images
      const resultResponse = await fetch(`https://stablehorde.net/api/v2/generate/status/${jobId}`);
      const result = await resultResponse.json();
      
      if (result.generations && result.generations.length > 0) {
        result.generations.forEach(gen => {
          stickers.push({
            src: gen.img, // Base64 or URL
            prompt: prompt
          });
        });
      }
      break;
    }
    
    // Update loading message with queue position
    const loadingEl = document.querySelector('.ai-loading p');
    if (loadingEl && status.queue_position) {
      loadingEl.textContent = `queue position: ${status.queue_position}...`;
    }
  }
  
  return stickers;
}

// Fallback using Hugging Face free inference
async function generateWithFallback(prompt, style, container) {
  const stylePrompts = {
    kawaii: 'kawaii chibi cute',
    vintage: 'retro vintage cute',
    minimal: 'simple flat cute',
    retro: 'groovy colorful cute'
  };
  
  const fullPrompt = `cute ${prompt}, ${stylePrompts[style] || 'kawaii'} sticker, isolated on white background, die-cut, vector illustration, no background, single object, adorable`;
  
  container.innerHTML = `
    <div class="ai-loading">
      <div class="ai-spinner"></div>
      <p>trying backup service...</p>
    </div>
  `;
  
  try {
    // Try Hugging Face inference API (free, no key needed for some models)
    const response = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: fullPrompt,
        parameters: {
          negative_prompt: 'background, realistic, photo, text, watermark, blurry',
          num_inference_steps: 25
        }
      })
    });
    
    if (response.ok) {
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      const stickers = [{ src: imgUrl, prompt }];
      displayGeneratedStickers(stickers);
      generatedStickers.unshift(...stickers);
      return;
    }
  } catch (e) {
    console.log('HuggingFace fallback failed:', e);
  }
  
  // Final fallback - show helpful message
  container.innerHTML = `
    <div class="ai-error">
      <p>ai servers are busy right now</p>
      <p class="ai-hint">tip: try simpler prompts like "cute cat" or "happy star"</p>
      <button class="retry-btn" onclick="generateAISticker('${style}')">try again</button>
    </div>
  `;
}

function displayGeneratedStickers(stickers) {
  const container = document.getElementById('aiGeneratedStickers');
  
  container.innerHTML = stickers.map((sticker, i) => {
    // Handle both URL and base64 images
    const imgSrc = sticker.src.startsWith('data:') || sticker.src.startsWith('http') 
      ? sticker.src 
      : `data:image/webp;base64,${sticker.src}`;
    
    return `
      <div class="ai-sticker-result" data-src="${imgSrc}" style="animation-delay: ${i * 0.15}s" draggable="true">
        <img src="${imgSrc}" alt="${sticker.prompt}" loading="eager" />
        <div class="ai-sticker-loading">
          <div class="ai-mini-spinner"></div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners and handle image loading
  container.querySelectorAll('.ai-sticker-result').forEach(item => {
    const img = item.querySelector('img');
    const loadingDiv = item.querySelector('.ai-sticker-loading');
    
    img.onload = () => {
      loadingDiv.style.display = 'none';
      item.classList.add('loaded');
    };
    
    img.onerror = () => {
      loadingDiv.innerHTML = '<span style="font-size:10px;color:#ff6b6b;">error</span>';
    };
    
    item.addEventListener('click', () => {
      if (item.classList.contains('loaded')) {
        addAIStickerToCanvas(item.dataset.src);
      }
    });
    
    item.addEventListener('dragstart', (e) => {
      if (item.classList.contains('loaded')) {
        e.dataTransfer.setData('type', 'ai-sticker');
        e.dataTransfer.setData('src', item.dataset.src);
      }
    });
  });
}

function addAIStickerToCanvas(src) {
  const canvas = state.activeCanvas;
  
  fabric.Image.fromURL(src, (img) => {
    // Scale to fit nicely on canvas
    const maxSize = 100;
    const scale = Math.min(maxSize / img.width, maxSize / img.height);
    
    img.set({
      left: canvas.width / 2 + (Math.random() - 0.5) * 100,
      top: canvas.height / 2 + (Math.random() - 0.5) * 100,
      scaleX: scale,
      scaleY: scale,
      originX: 'center',
      originY: 'center',
      angle: (Math.random() - 0.5) * 20
    });
    
    canvas.add(img);
    canvas.setActiveObject(img);
    canvas.renderAll();
  }, { crossOrigin: 'anonymous' });
}

function updateAIHistory() {
  const historyGrid = document.getElementById('aiHistoryGrid');
  if (!historyGrid || generatedStickers.length === 0) return;
  
  historyGrid.innerHTML = generatedStickers.slice(0, 12).map((sticker, i) => `
    <div class="ai-history-item" data-src="${sticker.src}" draggable="true">
      <img src="${sticker.src}" alt="Generated sticker" />
    </div>
  `).join('');
  
  historyGrid.querySelectorAll('.ai-history-item').forEach(item => {
    item.addEventListener('click', () => {
      addAIStickerToCanvas(item.dataset.src);
    });
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('type', 'ai-sticker');
      e.dataTransfer.setData('src', item.dataset.src);
    });
  });
}

// ==========================================
// EPHEMERA
// ==========================================
function initEphemera() {
  populateEphemeraGrid('ticketsGrid', CONFIG.ephemera.tickets);
  populateEphemeraGrid('stampsGrid', CONFIG.ephemera.stamps);
  populateEphemeraGrid('vintageGrid', CONFIG.ephemera.vintage);
}

function populateEphemeraGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = items.map((item, i) => `
    <div class="ephemera-item" data-type="${item.type}" data-label="${item.label}" data-color="${item.color}" draggable="true">
      <span class="ephemera-icon">${getEphemeraIcon(item.type)}</span>
      <span>${item.label}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.ephemera-item').forEach(item => {
    item.addEventListener('click', () => {
      addEphemeraToCanvas(item.dataset.type, item.dataset.label, item.dataset.color);
    });
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('type', 'ephemera');
      e.dataTransfer.setData('ephemera-type', item.dataset.type);
      e.dataTransfer.setData('label', item.dataset.label);
      e.dataTransfer.setData('color', item.dataset.color);
    });
  });
}

function getEphemeraIcon(type) {
  const icons = {
    'ticket': '🎫',
    'boarding': '✈️',
    'receipt': '🧾',
    'stamp': '📮',
    'postmark': '📬',
    'seal': '✅',
    'cassette': '📼',
    'polaroid-empty': '📷',
    'airmail': '✉️',
    'postcard': '🏞️',
    'filmstrip': '🎞️',
    'label': '🏷️'
  };
  return icons[type] || '📄';
}

function addEphemeraToCanvas(type, label, color, x = null, y = null) {
  const canvas = state.activeCanvas;
  let group;

  switch (type) {
    case 'ticket':
      group = createTicket(label, color);
      break;
    case 'stamp':
      group = createStamp(label, color);
      break;
    case 'cassette':
      group = createCassette(label);
      break;
    case 'postmark':
      group = createPostmark();
      break;
    case 'airmail':
      group = createAirmail();
      break;
    default:
      group = createGenericEphemera(label, color);
  }

  group.set({
    left: x || canvas.width / 2,
    top: y || canvas.height / 2,
    originX: 'center',
    originY: 'center',
    angle: (Math.random() - 0.5) * 15
  });

  canvas.add(group);
  canvas.setActiveObject(group);
  canvas.renderAll();
}

function createTicket(label, color) {
  // Vintage muted colors
  const vintageColors = {
    '#E63946': '#A85454',
    '#FFD700': '#C9A840',
    '#4ECDC4': '#6B9E9A',
    '#87CEEB': '#8BA8B5',
    '#1a1a1a': '#2D2A26'
  };
  const vintageColor = vintageColors[color] || color;
  
  const rect = new fabric.Rect({
    width: 110,
    height: 45,
    fill: vintageColor,
    rx: 2,
    ry: 2,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.15)', blur: 4, offsetX: 1, offsetY: 2 })
  });

  const hole = new fabric.Circle({
    radius: 6,
    fill: '#F5ECD7',
    left: -6,
    top: 16
  });

  const text = new fabric.Text(label, {
    fontSize: 10,
    fontFamily: 'Georgia, serif',
    fill: '#F5ECD7',
    left: 15,
    top: 14,
    fontWeight: 'bold'
  });

  const subtext = new fabric.Text('✦ ✦ ✦', {
    fontSize: 7,
    fill: 'rgba(245,236,215,0.4)',
    left: 30,
    top: 29
  });

  return new fabric.Group([rect, hole, text, subtext]);
}

function createStamp(label, color) {
  const outer = new fabric.Rect({
    width: 60,
    height: 72,
    fill: '#FFFFFF'
  });

  const inner = new fabric.Rect({
    width: 50,
    height: 62,
    fill: color,
    left: 5,
    top: 5
  });

  const text = new fabric.Text(label, {
    fontSize: 10,
    fontFamily: 'serif',
    fill: '#FFFFFF',
    left: 10,
    top: 25,
    fontWeight: 'bold'
  });

  const value = new fabric.Text('USA', {
    fontSize: 6,
    fontFamily: 'serif',
    fill: 'rgba(255,255,255,0.7)',
    left: 20,
    top: 50
  });

  return new fabric.Group([outer, inner, text, value]);
}

function createCassette(label) {
  const body = new fabric.Rect({
    width: 100,
    height: 64,
    fill: '#2a2a2a',
    rx: 5,
    ry: 5
  });

  const labelArea = new fabric.Rect({
    width: 80,
    height: 30,
    fill: '#F8F5EC',
    left: 10,
    top: 8,
    rx: 2,
    ry: 2
  });

  const text = new fabric.Text(label, {
    fontSize: 9,
    fontFamily: 'Courier New, monospace',
    fill: '#1a1a1a',
    left: 15,
    top: 16
  });

  const reelLeft = new fabric.Circle({
    radius: 10,
    fill: '#1a1a1a',
    stroke: '#444',
    strokeWidth: 2,
    left: 20,
    top: 42
  });

  const reelRight = new fabric.Circle({
    radius: 10,
    fill: '#1a1a1a',
    stroke: '#444',
    strokeWidth: 2,
    left: 58,
    top: 42
  });

  return new fabric.Group([body, labelArea, text, reelLeft, reelRight]);
}

function createPostmark() {
  const circle = new fabric.Circle({
    radius: 30,
    fill: 'transparent',
    stroke: '#1a1a1a',
    strokeWidth: 2
  });

  const text1 = new fabric.Text('NEW YORK', {
    fontSize: 8,
    fontFamily: 'serif',
    fill: '#1a1a1a',
    left: 5,
    top: 12
  });

  const text2 = new fabric.Text('JAN 2024', {
    fontSize: 7,
    fontFamily: 'serif',
    fill: '#1a1a1a',
    left: 10,
    top: 35
  });

  const lines = new fabric.Line([0, 30, 60, 30], {
    stroke: '#1a1a1a',
    strokeWidth: 1
  });

  return new fabric.Group([circle, text1, text2, lines]);
}

function createAirmail() {
  const envelope = new fabric.Rect({
    width: 140,
    height: 90,
    fill: '#F8F5EC'
  });

  const stripes = [];
  for (let i = 0; i < 14; i++) {
    stripes.push(new fabric.Rect({
      width: 10,
      height: 8,
      fill: i % 2 === 0 ? '#E63946' : '#87CEEB',
      left: i * 10,
      top: 0
    }));
    stripes.push(new fabric.Rect({
      width: 10,
      height: 8,
      fill: i % 2 === 0 ? '#E63946' : '#87CEEB',
      left: i * 10,
      top: 82
    }));
  }

  const text = new fabric.Text('PAR AVION', {
    fontSize: 12,
    fontFamily: 'serif',
    fill: '#87CEEB',
    left: 35,
    top: 38,
    fontWeight: 'bold'
  });

  return new fabric.Group([envelope, ...stripes, text]);
}

function createGenericEphemera(label, color) {
  const rect = new fabric.Rect({
    width: 100,
    height: 60,
    fill: color,
    rx: 3,
    ry: 3,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.15)', blur: 5, offsetX: 2, offsetY: 2 })
  });

  const text = new fabric.Text(label, {
    fontSize: 10,
    fontFamily: 'serif',
    fill: color === '#1a1a1a' ? '#FFFFFF' : '#1a1a1a',
    left: 10,
    top: 22
  });

  return new fabric.Group([rect, text]);
}

// ==========================================
// TAPE
// ==========================================
function initTape() {
  document.querySelectorAll('.tape-strip').forEach(strip => {
    strip.addEventListener('click', () => {
      addTapeToCanvas(strip.dataset.pattern);
    });
    strip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('type', 'tape');
      e.dataTransfer.setData('pattern', strip.dataset.pattern);
    });
  });

  document.querySelectorAll('.fastener').forEach(fastener => {
    fastener.addEventListener('click', () => {
      addFastenerToCanvas(fastener.textContent);
    });
  });
}

function addTapeToCanvas(pattern, x = null, y = null) {
  const canvas = state.activeCanvas;
  const config = CONFIG.tapePatterns[pattern];
  
  let fill = config.colors[0];
  if (config.type === 'stripe') {
    fill = config.colors[0];
  }

  const tape = new fabric.Rect({
    width: 120,
    height: 26,
    fill: fill,
    opacity: pattern === 'clear-tape' ? 0.4 : 0.85,
    left: x || canvas.width / 2,
    top: y || canvas.height / 2,
    originX: 'center',
    originY: 'center',
    angle: (Math.random() - 0.5) * 40,
    rx: 0,
    ry: 0
  });

  canvas.add(tape);
  canvas.setActiveObject(tape);
  canvas.renderAll();
}

function addFastenerToCanvas(type) {
  const canvas = state.activeCanvas;
  let fastener;
  
  switch(type) {
    case 'paperclip':
      // Silver paperclip shape
      fastener = new fabric.Path('M 0 5 L 0 25 A 5 5 0 0 0 10 25 L 10 10 A 3 3 0 0 1 16 10 L 16 30 A 8 8 0 0 1 0 30 L 0 5', {
        fill: 'transparent',
        stroke: '#C0C0C0',
        strokeWidth: 2,
        shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.2)', blur: 2, offsetX: 1, offsetY: 1 })
      });
      break;
    case 'pushpin':
      // Red pushpin circle
      fastener = new fabric.Circle({
        radius: 8,
        fill: '#CD5C5C',
        stroke: '#8B0000',
        strokeWidth: 1,
        shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.3)', blur: 3, offsetX: 1, offsetY: 2 })
      });
      break;
    case 'binder':
      // Binder clip shape
      const clipBody = new fabric.Rect({
        width: 30,
        height: 15,
        fill: '#2F4F4F',
        rx: 2,
        ry: 2
      });
      const clipWing1 = new fabric.Triangle({
        width: 8,
        height: 12,
        fill: '#708090',
        left: 0,
        top: -10,
        angle: 180
      });
      const clipWing2 = new fabric.Triangle({
        width: 8,
        height: 12,
        fill: '#708090',
        left: 22,
        top: -10,
        angle: 180
      });
      fastener = new fabric.Group([clipBody, clipWing1, clipWing2]);
      break;
    case 'staple':
      // Simple staple
      fastener = new fabric.Path('M 0 0 L 0 8 L 20 8 L 20 0', {
        fill: 'transparent',
        stroke: '#A9A9A9',
        strokeWidth: 2
      });
      break;
    case 'corner-black':
      fastener = createPhotoCorner('#1a1a1a');
      break;
    case 'corner-gold':
      fastener = createPhotoCorner('#B8860B');
      break;
    case 'corner-white':
      fastener = createPhotoCorner('#F5F5DC');
      break;
    default:
      fastener = new fabric.Circle({ radius: 6, fill: '#888' });
  }
  
  fastener.set({
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: 'center',
    originY: 'center'
  });
  
  canvas.add(fastener);
  canvas.setActiveObject(fastener);
  canvas.renderAll();
}

function createPhotoCorner(color) {
  return new fabric.Triangle({
    width: 20,
    height: 20,
    fill: color,
    opacity: 0.9,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.15)', blur: 2, offsetX: 1, offsetY: 1 })
  });
}

// ==========================================
// TEXT / RANSOM KEYBOARD
// ==========================================
function initRansomKeyboard() {
  const keyboard = document.getElementById('ransomKeyboard');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  keyboard.innerHTML = letters.split('').map((letter, i) => {
    const style = CONFIG.ransomStyles[i % CONFIG.ransomStyles.length];
    const styleStr = `background:${style.bg};color:${style.color};font-family:${style.font};${style.italic ? 'font-style:italic;' : ''}${style.border ? 'border:1px solid #ccc;' : ''}`;
    return `<div class="ransom-letter" style="${styleStr}" data-letter="${letter}" draggable="true">${letter}</div>`;
  }).join('');

  keyboard.querySelectorAll('.ransom-letter').forEach(letter => {
    letter.addEventListener('click', () => addRansomLetter(letter));
    letter.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('type', 'ransom');
      e.dataTransfer.setData('letter', letter.dataset.letter);
      e.dataTransfer.setData('style', letter.getAttribute('style'));
    });
  });
}

function addRansomLetter(el) {
  const canvas = state.activeCanvas;
  const style = window.getComputedStyle(el);
  
  const text = new fabric.Text(el.dataset.letter, {
    left: canvas.width / 2 + (Math.random() - 0.5) * 150,
    top: canvas.height / 2 + (Math.random() - 0.5) * 150,
    fontSize: 24,
    fontFamily: style.fontFamily,
    fontStyle: style.fontStyle,
    fill: style.color,
    backgroundColor: style.backgroundColor,
    padding: 6,
    angle: (Math.random() - 0.5) * 25,
    originX: 'center',
    originY: 'center'
  });

  canvas.add(text);
  canvas.setActiveObject(text);
  canvas.renderAll();
}

function initTextTools() {
  document.getElementById('addTextBox').addEventListener('click', addTextBox);
  document.getElementById('addStickyNote').addEventListener('click', addStickyNote);
  document.getElementById('addLabel').addEventListener('click', addLabel);

  document.querySelectorAll('.font-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.font-option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      state.activeFont = option.dataset.font;
      
      if (state.selectedObject && state.selectedObject.type === 'textbox') {
        state.selectedObject.set('fontFamily', option.dataset.font);
        state.activeCanvas.renderAll();
      }
    });
  });
}

function addTextBox() {
  const canvas = state.activeCanvas;
  const textbox = new fabric.Textbox('type here...', {
    left: canvas.width / 2,
    top: canvas.height / 2,
    width: 180,
    fontSize: 18,
    fontFamily: state.activeFont,
    fill: '#1a1a1a',
    originX: 'center',
    originY: 'center',
    textAlign: 'center',
    editable: true
  });

  canvas.add(textbox);
  canvas.setActiveObject(textbox);
  textbox.enterEditing();
  textbox.selectAll();
  canvas.renderAll();
  autoSave();
}

function addStickyNote() {
  const canvas = state.activeCanvas;
  const colors = ['#FFFF88', '#FFB5C5', '#87CEEB', '#98FB98', '#DDA0DD', '#FFD700'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Create editable textbox with background color
  const textbox = new fabric.Textbox('click to edit...', {
    left: canvas.width / 2,
    top: canvas.height / 2,
    width: 120,
    fontSize: 14,
    fontFamily: state.activeFont,
    fill: '#333',
    backgroundColor: color,
    padding: 12,
    originX: 'center',
    originY: 'center',
    angle: (Math.random() - 0.5) * 12,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.15)', blur: 8, offsetX: 3, offsetY: 3 }),
    editable: true
  });

  canvas.add(textbox);
  canvas.setActiveObject(textbox);
  // Enter editing mode immediately
  textbox.enterEditing();
  textbox.selectAll();
  canvas.renderAll();
  autoSave();
}

function addLabel() {
  const canvas = state.activeCanvas;
  
  const rect = new fabric.Rect({
    width: 100,
    height: 30,
    fill: '#F5E6C8',
    stroke: '#8B7355',
    strokeWidth: 1,
    rx: 3,
    ry: 3
  });

  const text = new fabric.Textbox('Label', {
    width: 90,
    fontSize: 12,
    fontFamily: 'Special Elite',
    fill: '#1a1a1a',
    left: 5,
    top: 8,
    textAlign: 'center'
  });

  const group = new fabric.Group([rect, text], {
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: 'center',
    originY: 'center'
  });

  canvas.add(group);
  canvas.setActiveObject(group);
  canvas.renderAll();
}

// ==========================================
// PHOTO UPLOAD & FRAMES
// ==========================================
function initUploadZone() {
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');

  uploadZone.addEventListener('click', () => fileInput.click());
  
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
}

function handleFiles(files) {
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => addPhotoToGrid(e.target.result);
      reader.readAsDataURL(file);
    }
  });
}

function addPhotoToGrid(src) {
  const photoGrid = document.getElementById('photoGrid');
  const thumb = document.createElement('div');
  thumb.className = 'photo-thumb';
  thumb.draggable = true;
  thumb.innerHTML = `<img src="${src}" alt="Photo">`;
  
  thumb.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('type', 'photo');
    e.dataTransfer.setData('src', src);
  });

  thumb.addEventListener('click', () => addPhotoToCanvas(src));
  photoGrid.insertBefore(thumb, photoGrid.firstChild);
}

function addPhotoToCanvas(src, x = null, y = null) {
  const canvas = state.activeCanvas;
  const frameType = state.activeFrame;

  fabric.Image.fromURL(src, (img) => {
    const maxSize = 150;
    const scale = Math.min(maxSize / img.width, maxSize / img.height);
    img.scale(scale);

    const frame = CONFIG.frames[frameType];
    let finalObject;

    if (frameType === 'polaroid') {
      const scaledW = img.width * scale;
      const scaledH = img.height * scale;
      
      // Aged polaroid - slightly yellowed
      const polaroid = new fabric.Rect({
        width: scaledW + frame.padding * 2,
        height: scaledH + frame.padding + frame.bottom,
        fill: '#FAF5E8', // Yellowed white
        rx: 1,
        ry: 1,
        shadow: new fabric.Shadow({ color: 'rgba(60,40,20,0.2)', blur: 10, offsetX: 3, offsetY: 4 })
      });

      // Apply vintage filter to image
      img.filters = img.filters || [];
      img.set({ left: frame.padding, top: frame.padding });

      finalObject = new fabric.Group([polaroid, img], {
        left: x || canvas.width / 2,
        top: y || canvas.height / 2,
        originX: 'center',
        originY: 'center',
        angle: (Math.random() - 0.5) * 15
      });
    } else if (frameType === 'film') {
      const scaledW = img.width * scale;
      const scaledH = img.height * scale;
      
      // Vintage film - darker, aged
      const filmBg = new fabric.Rect({
        width: scaledW + frame.sides * 2,
        height: scaledH + frame.padding * 2,
        fill: '#2D2A26',
        rx: 1,
        ry: 1,
        shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.2)', blur: 8, offsetX: 2, offsetY: 3 })
      });

      img.set({ left: frame.sides, top: frame.padding });

      const holes = [];
      for (let i = 0; i < 4; i++) {
        holes.push(new fabric.Rect({
          width: 7,
          height: 10,
          fill: '#F5ECD7',
          left: 5,
          top: 12 + i * 35,
          rx: 1
        }));
        holes.push(new fabric.Rect({
          width: 7,
          height: 10,
          fill: '#F5ECD7',
          left: scaledW + frame.sides + 9,
          top: 12 + i * 35,
          rx: 1
        }));
      }

      finalObject = new fabric.Group([filmBg, ...holes, img], {
        left: x || canvas.width / 2,
        top: y || canvas.height / 2,
        originX: 'center',
        originY: 'center',
        angle: (Math.random() - 0.5) * 8
      });
    } else {
      img.set({
        left: x || canvas.width / 2,
        top: y || canvas.height / 2,
        originX: 'center',
        originY: 'center',
        angle: (Math.random() - 0.5) * 15
      });
      finalObject = img;
    }

    canvas.add(finalObject);
    canvas.setActiveObject(finalObject);
    
    // Polaroid "developing" animation effect
    animatePhotoDeveloping(finalObject, canvas);
    
    // Create sparkles at placement
    const canvasEl = canvas.getElement();
    const rect = canvasEl.getBoundingClientRect();
    const posX = finalObject.left || canvas.width / 2;
    const posY = finalObject.top || canvas.height / 2;
    createSparkles(rect.left + posX, rect.top + posY, 6);
    
  }, { crossOrigin: 'anonymous' });
}

// Animate photo "developing" like a real polaroid
function animatePhotoDeveloping(obj, canvas) {
  const originalOpacity = obj.opacity || 1;
  const originalTop = obj.top;
  
  // Start "faded out" like undeveloped polaroid
  obj.set({
    opacity: 0.3,
    top: originalTop - 20
  });
  
  const startTime = Date.now();
  const duration = 1200; // 1.2 seconds for developing effect
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out curve for smooth reveal
    const eased = 1 - Math.pow(1 - progress, 3);
    
    // Fade in gradually
    obj.set({
      opacity: 0.3 + (originalOpacity - 0.3) * eased,
      top: originalTop - 20 + (20 * eased)
    });
    
    canvas.renderAll();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
}

// ==========================================
// DRAG & DROP TO CANVAS
// ==========================================
function initDragAndDrop() {
  const bookPages = document.querySelectorAll('.book-page');
  
  bookPages.forEach(page => {
    const canvas = page.classList.contains('left-page') ? state.leftCanvas : state.rightCanvas;
    if (!canvas) return;
    
    const canvasEl = canvas.upperCanvasEl;
    
    canvasEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      page.classList.add('drop-target');
    });

    canvasEl.addEventListener('dragleave', () => page.classList.remove('drop-target'));

    canvasEl.addEventListener('drop', (e) => {
      e.preventDefault();
      page.classList.remove('drop-target');
      state.activeCanvas = canvas;
      
      const rect = canvasEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const type = e.dataTransfer.getData('type');

      switch (type) {
        case 'sticker':
          addStickerToCanvas(e.dataTransfer.getData('src'), x, y, 1);
          break;
        case 'ai-sticker':
          addAIStickerToCanvas(e.dataTransfer.getData('src'));
          break;
        case 'photo':
          addPhotoToCanvas(e.dataTransfer.getData('src'), x, y);
          break;
        case 'tape':
          addTapeToCanvas(e.dataTransfer.getData('pattern'), x, y);
          break;
        case 'ephemera':
          addEphemeraToCanvas(
            e.dataTransfer.getData('ephemera-type'),
            e.dataTransfer.getData('label'),
            e.dataTransfer.getData('color'),
            x, y
          );
          break;
        case 'ransom':
          const fakeEl = { dataset: { letter: e.dataTransfer.getData('letter') }, getAttribute: () => e.dataTransfer.getData('style') };
          addRansomLetter(fakeEl);
          break;
      }
    });
  });
}

// ==========================================
// CONTEXT MENU & ACTIONS
// ==========================================
function initEventListeners() {
  const contextMenu = document.getElementById('contextMenu');
  
  document.addEventListener('click', (e) => {
    if (!contextMenu.contains(e.target)) hideContextMenu();
  });

  contextMenu.querySelectorAll('.context-item').forEach(item => {
    item.addEventListener('click', () => {
      handleContextAction(item.dataset.action);
      hideContextMenu();
    });
  });

  document.addEventListener('keydown', handleKeyboard);

  // Page navigation
  document.querySelectorAll('.page-tab:not(.add-page)').forEach(tab => {
    tab.addEventListener('click', () => switchPage(parseInt(tab.dataset.page)));
  });
  document.querySelector('.page-tab.add-page').addEventListener('click', addNewPage);
  document.querySelector('.nav-arrow.prev').addEventListener('click', () => navigatePage(-1));
  document.querySelector('.nav-arrow.next').addEventListener('click', () => navigatePage(1));

  // Undo/Redo buttons
  document.getElementById('undoBtn')?.addEventListener('click', undo);
  document.getElementById('redoBtn')?.addEventListener('click', redo);
}

function showContextMenu(x, y) {
  const menu = document.getElementById('contextMenu');
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.classList.add('visible');
}

function hideContextMenu() {
  document.getElementById('contextMenu').classList.remove('visible');
}

function handleContextAction(action) {
  const canvas = state.activeCanvas;
  const obj = canvas.getActiveObject();
  if (!obj) return;

  switch (action) {
    case 'bringToFront': canvas.bringToFront(obj); break;
    case 'sendToBack': canvas.sendToBack(obj); break;
    case 'duplicate':
      obj.clone((cloned) => {
        cloned.set({ left: obj.left + 15, top: obj.top + 15 });
        canvas.add(cloned);
        canvas.setActiveObject(cloned);
      });
      break;
    case 'flip':
      obj.set('flipX', !obj.flipX);
      break;
    case 'addTape':
      addTapeToCanvas('masking', obj.left, obj.top - 30);
      break;
    case 'delete':
      canvas.remove(obj);
      break;
  }
  canvas.renderAll();
}

function handleKeyboard(e) {
  const canvas = state.activeCanvas;
  if (!canvas) return;
  
  // Delete selected object
  if ((e.key === 'Delete' || e.key === 'Backspace') && !e.target.matches('input, textarea, [contenteditable]')) {
    const obj = canvas.getActiveObject();
    if (obj && !obj.isEditing) {
      e.preventDefault();
      canvas.remove(obj);
      canvas.discardActiveObject();
      canvas.renderAll();
      autoSave();
    }
  }
  
  // Undo/Redo
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'z') { e.preventDefault(); undo(); }
    if (e.key === 'y') { e.preventDefault(); redo(); }
    if (e.key === 's') { e.preventDefault(); saveScrapbook(); } // Cmd+S to save
  }
  
  // Escape to deselect and exit drawing mode
  if (e.key === 'Escape') {
    canvas.discardActiveObject();
    exitDrawingMode();
    canvas.renderAll();
  }
}

// ==========================================
// PAGE MANAGEMENT WITH FLIP ANIMATION
// ==========================================
function switchPage(num) {
  const oldPage = state.currentPage;
  if (oldPage === num) return;
  
  const leftPage = document.getElementById('leftPage');
  const rightPage = document.getElementById('rightPage');
  
  // Determine flip direction
  const flipForward = num > oldPage;
  
  // Trigger flip animation
  if (flipForward) {
    rightPage.classList.add('flipping');
    setTimeout(() => {
      leftPage.classList.add('flip-in');
    }, 400);
  } else {
    leftPage.classList.add('flipping');
    setTimeout(() => {
      rightPage.classList.add('flip-in');
    }, 400);
  }
  
  // Clean up animation classes after completion
  setTimeout(() => {
    leftPage.classList.remove('flipping', 'flip-in');
    rightPage.classList.remove('flipping', 'flip-in');
  }, 900);
  
  state.currentPage = num;
  document.querySelectorAll('.page-tab').forEach(tab => {
    tab.classList.toggle('active', parseInt(tab.dataset.page) === num);
  });
}

function addNewPage() {
  const newNum = state.pages.length + 1;
  state.pages.push({ left: [], right: [] });
  
  const tabs = document.querySelector('.page-tabs');
  const addBtn = tabs.querySelector('.add-page');
  const newTab = document.createElement('button');
  newTab.className = 'page-tab';
  newTab.dataset.page = newNum;
  newTab.innerHTML = `<span class="tab-num">${newNum}</span>`;
  newTab.addEventListener('click', () => switchPage(newNum));
  tabs.insertBefore(newTab, addBtn);
  
  // Animate page flip when adding new page
  const leftPage = document.getElementById('leftPage');
  const rightPage = document.getElementById('rightPage');
  
  rightPage.classList.add('flipping');
  setTimeout(() => {
    leftPage.classList.add('flip-in');
    state.currentPage = newNum;
    document.querySelectorAll('.page-tab').forEach(tab => {
      tab.classList.toggle('active', parseInt(tab.dataset.page) === newNum);
    });
  }, 400);
  
  setTimeout(() => {
    leftPage.classList.remove('flipping', 'flip-in');
    rightPage.classList.remove('flipping', 'flip-in');
  }, 900);
}

function navigatePage(dir) {
  const newPage = state.currentPage + dir;
  if (newPage >= 1 && newPage <= state.pages.length) switchPage(newPage);
}

// ==========================================
// HISTORY
// ==========================================
function saveHistory() {
  const leftJson = state.leftCanvas.toJSON();
  const rightJson = state.rightCanvas.toJSON();
  state.history = state.history.slice(0, state.historyIndex + 1);
  state.history.push({ left: leftJson, right: rightJson });
  state.historyIndex = state.history.length - 1;
  if (state.history.length > 40) { state.history.shift(); state.historyIndex--; }
  
  // Mark that there are unsaved changes
  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn && !saveBtn.classList.contains('save-success')) {
    saveBtn.classList.add('needs-save');
  }
}

function undo() {
  if (state.historyIndex > 0) { state.historyIndex--; restoreHistory(); }
}

function redo() {
  if (state.historyIndex < state.history.length - 1) { state.historyIndex++; restoreHistory(); }
}

function restoreHistory() {
  const h = state.history[state.historyIndex];
  if (h) {
    state.leftCanvas.loadFromJSON(h.left, () => state.leftCanvas.renderAll());
    state.rightCanvas.loadFromJSON(h.right, () => state.rightCanvas.renderAll());
  }
}

// ==========================================
// DEMO CONTENT - Vintage styled
// ==========================================
function loadSampleContent() {
  // Left page - handwritten title
  const title = new fabric.Textbox('memories', {
    left: CONFIG.canvasWidth / 2,
    top: 60,
    width: 280,
    fontSize: 32,
    fontFamily: 'Homemade Apple, cursive',
    fill: '#5C4033',
    textAlign: 'center',
    originX: 'center'
  });
  state.leftCanvas.add(title);

  // Decorative line
  const line = new fabric.Line([80, 100, CONFIG.canvasWidth - 80, 100], {
    stroke: '#8B7355',
    strokeWidth: 1,
    opacity: 0.4
  });
  state.leftCanvas.add(line);

  // Vintage decorations - simple dots instead of emojis
  [0, 1, 2].forEach((i) => {
    const circle = new fabric.Circle({
      radius: 4,
      fill: '#B8860B',
      left: 50 + (i * 100),
      top: 130 + (i % 2) * 20,
      opacity: 0.5
    });
    state.leftCanvas.add(circle);
  });

  // Date in corner
  const dateLabel = new fabric.Textbox('summer \'24', {
    left: CONFIG.canvasWidth - 40,
    top: CONFIG.canvasHeight - 50,
    width: 100,
    fontSize: 14,
    fontFamily: 'Reenie Beanie, cursive',
    fill: '#8B7355',
    textAlign: 'right',
    originX: 'right',
    angle: -3
  });
  state.leftCanvas.add(dateLabel);

  // Right page - aged sticky note
  const noteRect = new fabric.Rect({
    width: 120,
    height: 100,
    fill: '#F5E6B8',
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.12)', blur: 6, offsetX: 2, offsetY: 3 })
  });

  const noteText = new fabric.Textbox('the best\ndays...', {
    width: 100,
    fontSize: 14,
    fontFamily: 'Homemade Apple, cursive',
    fill: '#5C4033',
    left: 10,
    top: 15
  });

  const noteGroup = new fabric.Group([noteRect, noteText], {
    left: CONFIG.canvasWidth / 2,
    top: CONFIG.canvasHeight - 90,
    originX: 'center',
    originY: 'center',
    angle: -5
  });
  state.rightCanvas.add(noteGroup);

  // Small decorative circles instead of hearts
  [0, 1, 2].forEach((i) => {
    const circle = new fabric.Circle({
      radius: 5,
      fill: '#A85454',
      left: 70 + i * 100,
      top: CONFIG.canvasHeight - 170,
      opacity: 0.4
    });
    state.rightCanvas.add(circle);
  });

  state.leftCanvas.renderAll();
  state.rightCanvas.renderAll();
  saveHistory();

  // Load vintage-style sample photos (nature/landscape only)
  const samplePhotos = [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop', // flowers
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop', // mountains
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop'  // ocean
  ];
  samplePhotos.forEach(src => addPhotoToGrid(src));
}

// ==========================================
// UTILITIES
// ==========================================
function hexToRgba(hex, alpha) {
  if (hex.startsWith('rgba')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (!overlay) return;
  
  let hasSkipped = false;
  
  const finishLoading = () => {
    if (hasSkipped) return;
    hasSkipped = true;
    
    // Force hide immediately
    overlay.style.transition = 'opacity 0.5s';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.style.visibility = 'hidden';
      try {
        animateExistingItems();
        createFloatingDecorations();
      } catch(e) {
        console.log('Animation error:', e);
      }
    }, 500);
  };
  
  // Multiple ways to skip - click, touch, keypress
  overlay.style.cursor = 'pointer';
  overlay.onclick = finishLoading;
  document.addEventListener('keydown', finishLoading, { once: true });
  document.addEventListener('touchstart', finishLoading, { once: true });
  
  // Auto-finish after animation (shorter time)
  setTimeout(finishLoading, 2000);
}

// ==========================================
// DELIGHTFUL ANIMATIONS & EFFECTS
// ==========================================

// Animate existing canvas items on load (items "stick" one by one)
function animateExistingItems() {
  const leftItems = state.leftCanvas ? state.leftCanvas.getObjects() : [];
  const rightItems = state.rightCanvas ? state.rightCanvas.getObjects() : [];
  const items = [...leftItems, ...rightItems];
  
  items.forEach((item, index) => {
    // Stagger the animations
    setTimeout(() => {
      const originalOpacity = item.opacity || 1;
      const originalTop = item.top;
      const originalAngle = item.angle || 0;
      
      item.set({ opacity: 0, top: originalTop - 40, angle: originalAngle - 15 });
      item.canvas.renderAll();
      
      // Animate in with bounce
      const startTime = Date.now();
      const duration = 500;
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutBack(progress);
        
        item.set({
          opacity: originalOpacity * Math.min(eased * 1.5, 1),
          top: originalTop - 40 + (40 * eased),
          angle: originalAngle - 15 + (15 * eased)
        });
        item.canvas.renderAll();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Small bounce at end
          item.set({ angle: originalAngle });
          item.canvas.renderAll();
        }
      };
      animate();
    }, index * 200); // 200ms delay between each item
  });
}

// Easing function for bouncy effect
function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

// Create sparkles at position
function createSparkles(x, y, count = 10) {
  let container = document.querySelector('.sparkle-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'sparkle-container';
    document.body.appendChild(container);
  }
  
  const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#FFB6C1', '#DDA0DD'];
  
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x + (Math.random() - 0.5) * 60}px`;
    sparkle.style.top = `${y + (Math.random() - 0.5) * 60}px`;
    sparkle.style.animationDelay = `${Math.random() * 0.3}s`;
    sparkle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, transparent 70%)`;
    sparkle.style.width = `${6 + Math.random() * 8}px`;
    sparkle.style.height = sparkle.style.width;
    container.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1200);
  }
}

// Create confetti celebration
function createConfetti(count = 60) {
  let container = document.querySelector('.confetti-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
  }
  
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8E6CF'];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 0.8}s`;
    confetti.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    
    // Random shapes
    const shape = Math.random();
    if (shape > 0.66) {
      confetti.style.borderRadius = '50%';
    } else if (shape > 0.33) {
      confetti.style.width = '6px';
      confetti.style.height = '14px';
    }
    
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Create floating background decorations
function createFloatingDecorations() {
  const container = document.querySelector('.canvas-container');
  if (!container) return;
  
  // Remove existing
  container.querySelectorAll('.floating-decoration').forEach(d => d.remove());
  
  for (let i = 0; i < 4; i++) {
    const deco = document.createElement('div');
    deco.className = 'floating-decoration';
    deco.innerHTML = ['✿', '❀', '✾', '✤'][i];
    deco.style.left = `${5 + i * 25}%`;
    deco.style.top = `${20 + (i % 2) * 50}%`;
    deco.style.fontSize = `${24 + Math.random() * 16}px`;
    deco.style.animationDelay = `${i * 2}s`;
    deco.style.color = 'var(--sepia)';
    container.appendChild(deco);
  }
}

// Trigger sparkles when adding stickers
function triggerStickerEffect(e) {
  const rect = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : { left: e.clientX, top: e.clientY };
  createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

// Celebration when sharing
function celebrateShare() {
  createConfetti(80);
  showNotification('link copied! share the love!');
}

console.log('collective scrapbook loaded!');
console.log('enjoy creating beautiful memories!');

