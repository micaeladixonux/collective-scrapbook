/**
 * Supabase Real-time Collaboration Module
 * ========================================
 * 
 * This module handles real-time synchronization between users
 * using Supabase Realtime channels.
 * 
 * To use this module:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Replace SUPABASE_URL and SUPABASE_ANON_KEY below
 * 3. Uncomment the Supabase script in index.html
 */

// ==========================================
// CONFIGURATION
// ==========================================

// Replace these with your Supabase project credentials
const SUPABASE_URL = 'https://tldzfantgnihfxljdxsb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZHpmYW50Z25paGZ4bGpkeHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NDAzNzEsImV4cCI6MjA4MzUxNjM3MX0.qR-N0rU3kviTOBjLx8tRxMCq_wt_xTimviuCY8wlyP4';

// Room/document ID (could be from URL params in production)
const ROOM_ID = 'scrapbook-' + (new URLSearchParams(window.location.search).get('room') || 'default');

// Current user info
const currentUser = {
  id: 'user-' + Math.random().toString(36).substr(2, 9),
  name: 'Guest ' + Math.floor(Math.random() * 1000),
  color: `hsl(${Math.random() * 360}, 70%, 60%)`
};

// ==========================================
// SUPABASE CLIENT
// ==========================================

let supabase = null;
let channel = null;

/**
 * Initialize Supabase client and connect to room
 */
async function initSupabase() {
  // Check if Supabase SDK is loaded
  if (typeof window.supabase === 'undefined') {
    console.log('ℹ️ Supabase SDK not loaded. Running in offline mode.');
    console.log('To enable collaboration, add the Supabase script to index.html');
    return false;
  }

  if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
    console.log('ℹ️ Supabase not configured. Running in offline mode.');
    return false;
  }

  try {
    // Initialize client
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Join the room channel
    channel = supabase.channel(ROOM_ID, {
      config: {
        presence: { key: currentUser.id },
        broadcast: { self: false }
      }
    });

    // Setup event handlers
    setupPresence();
    setupBroadcast();
    
    // Subscribe to channel
    await channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('✅ Connected to collaboration room:', ROOM_ID);
        // Track our presence
        channel.track({
          user: currentUser,
          online_at: new Date().toISOString()
        });
      }
    });

    return true;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    return false;
  }
}

// ==========================================
// PRESENCE (User tracking)
// ==========================================

function setupPresence() {
  channel.on('presence', { event: 'sync' }, () => {
    const presenceState = channel.presenceState();
    updateCollaboratorsList(presenceState);
  });

  channel.on('presence', { event: 'join' }, ({ key, newPresences }) => {
    const user = newPresences[0]?.user;
    if (user && user.id !== currentUser.id) {
      showNotification(`${user.name} joined the scrapbook`);
      addRemoteCursor(user);
    }
  });

  channel.on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
    const user = leftPresences[0]?.user;
    if (user) {
      showNotification(`${user.name} left`);
      removeRemoteCursor(user.id);
    }
  });
}

function updateCollaboratorsList(presenceState) {
  const users = Object.values(presenceState).flat().map(p => p.user);
  const avatarStack = document.querySelector('.avatar-stack');
  const collabCount = document.querySelector('.collab-count');
  
  if (!avatarStack) return;

  // Clear existing avatars (except the add button)
  avatarStack.querySelectorAll('.avatar:not(.add-collab)').forEach(el => el.remove());
  
  // Add avatars for each user
  users.forEach((user, index) => {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.style.background = user.color;
    avatar.setAttribute('data-name', user.name);
    avatar.textContent = user.name.charAt(0).toUpperCase();
    avatar.title = user.name;
    
    avatarStack.insertBefore(avatar, avatarStack.querySelector('.add-collab'));
  });

  // Update count
  if (collabCount) {
    collabCount.textContent = `${users.length} editing`;
  }
}

// ==========================================
// BROADCAST (Canvas changes)
// ==========================================

function setupBroadcast() {
  // Listen for canvas updates
  channel.on('broadcast', { event: 'canvas-update' }, ({ payload }) => {
    handleRemoteCanvasUpdate(payload);
  });

  // Listen for cursor movements
  channel.on('broadcast', { event: 'cursor-move' }, ({ payload }) => {
    updateRemoteCursor(payload.userId, payload.x, payload.y, payload.color, payload.name);
  });

  // Listen for object changes
  channel.on('broadcast', { event: 'object-add' }, ({ payload }) => {
    handleRemoteObjectAdd(payload);
  });

  channel.on('broadcast', { event: 'object-modify' }, ({ payload }) => {
    handleRemoteObjectModify(payload);
  });

  channel.on('broadcast', { event: 'object-remove' }, ({ payload }) => {
    handleRemoteObjectRemove(payload);
  });
}

// ==========================================
// BROADCAST FUNCTIONS (Send to others)
// ==========================================

/**
 * Broadcast cursor position
 */
function broadcastCursorMove(x, y) {
  if (!channel) return;
  
  channel.send({
    type: 'broadcast',
    event: 'cursor-move',
    payload: {
      userId: currentUser.id,
      name: currentUser.name,
      color: currentUser.color,
      x,
      y
    }
  });
}

/**
 * Broadcast when an object is added
 */
function broadcastObjectAdd(canvas, object) {
  if (!channel) return;

  const objectData = object.toJSON(['id']);
  const canvasId = canvas === state.leftCanvas ? 'left' : 'right';
  
  channel.send({
    type: 'broadcast',
    event: 'object-add',
    payload: {
      canvasId,
      object: objectData,
      userId: currentUser.id
    }
  });
}

/**
 * Broadcast when an object is modified
 */
function broadcastObjectModify(canvas, object) {
  if (!channel) return;

  const objectData = object.toJSON(['id']);
  const canvasId = canvas === state.leftCanvas ? 'left' : 'right';
  
  channel.send({
    type: 'broadcast',
    event: 'object-modify',
    payload: {
      canvasId,
      objectId: object.id,
      object: objectData,
      userId: currentUser.id
    }
  });
}

/**
 * Broadcast when an object is removed
 */
function broadcastObjectRemove(canvas, objectId) {
  if (!channel) return;

  const canvasId = canvas === state.leftCanvas ? 'left' : 'right';
  
  channel.send({
    type: 'broadcast',
    event: 'object-remove',
    payload: {
      canvasId,
      objectId,
      userId: currentUser.id
    }
  });
}

/**
 * Broadcast full canvas state (for syncing new users)
 */
function broadcastCanvasState() {
  if (!channel) return;

  channel.send({
    type: 'broadcast',
    event: 'canvas-update',
    payload: {
      left: state.leftCanvas.toJSON(),
      right: state.rightCanvas.toJSON(),
      userId: currentUser.id
    }
  });
}

// ==========================================
// HANDLE REMOTE UPDATES
// ==========================================

function handleRemoteCanvasUpdate(payload) {
  if (payload.userId === currentUser.id) return;
  
  // Load the remote canvas state
  if (payload.left) {
    state.leftCanvas.loadFromJSON(payload.left, () => {
      state.leftCanvas.renderAll();
    });
  }
  if (payload.right) {
    state.rightCanvas.loadFromJSON(payload.right, () => {
      state.rightCanvas.renderAll();
    });
  }
}

function handleRemoteObjectAdd(payload) {
  if (payload.userId === currentUser.id) return;
  
  const canvas = payload.canvasId === 'left' ? state.leftCanvas : state.rightCanvas;
  
  fabric.util.enlivenObjects([payload.object], (objects) => {
    objects.forEach(obj => {
      canvas.add(obj);
    });
    canvas.renderAll();
  });
}

function handleRemoteObjectModify(payload) {
  if (payload.userId === currentUser.id) return;
  
  const canvas = payload.canvasId === 'left' ? state.leftCanvas : state.rightCanvas;
  const objects = canvas.getObjects();
  const obj = objects.find(o => o.id === payload.objectId);
  
  if (obj) {
    obj.set(payload.object);
    canvas.renderAll();
  }
}

function handleRemoteObjectRemove(payload) {
  if (payload.userId === currentUser.id) return;
  
  const canvas = payload.canvasId === 'left' ? state.leftCanvas : state.rightCanvas;
  const objects = canvas.getObjects();
  const obj = objects.find(o => o.id === payload.objectId);
  
  if (obj) {
    canvas.remove(obj);
    canvas.renderAll();
  }
}

// ==========================================
// REMOTE CURSORS
// ==========================================

function addRemoteCursor(user) {
  const container = document.getElementById('remoteCursors');
  if (!container) return;

  let cursor = document.getElementById(`cursor-${user.id}`);
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = `cursor-${user.id}`;
    cursor.className = 'remote-cursor';
    cursor.style.color = user.color;
    cursor.innerHTML = `
      <div class="cursor-pointer"></div>
      <span class="cursor-name">${user.name}</span>
    `;
    container.appendChild(cursor);
  }
}

function updateRemoteCursor(userId, x, y, color, name) {
  let cursor = document.getElementById(`cursor-${userId}`);
  
  if (!cursor) {
    addRemoteCursor({ id: userId, color, name });
    cursor = document.getElementById(`cursor-${userId}`);
  }
  
  if (cursor) {
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
}

function removeRemoteCursor(userId) {
  const cursor = document.getElementById(`cursor-${userId}`);
  if (cursor) {
    cursor.remove();
  }
}

// ==========================================
// UI HELPERS
// ==========================================

function showNotification(message) {
  console.log('📢', message);
  // Could add a toast notification here
}

// ==========================================
// PERSISTENCE (Database)
// ==========================================

/**
 * Save scrapbook to database
 */
async function saveToDatabase() {
  if (!supabase) {
    console.log('💾 Saving locally (Supabase not configured)');
    localStorage.setItem('scrapbook-' + ROOM_ID, JSON.stringify({
      left: state.leftCanvas.toJSON(),
      right: state.rightCanvas.toJSON(),
      pages: state.pages,
      savedAt: new Date().toISOString()
    }));
    return;
  }

  try {
    const { data, error } = await supabase
      .from('scrapbooks')
      .upsert({
        room_id: ROOM_ID,
        canvas_left: state.leftCanvas.toJSON(),
        canvas_right: state.rightCanvas.toJSON(),
        pages: state.pages,
        updated_at: new Date().toISOString()
      });

    if (error) throw error;
    console.log('✅ Saved to database');
  } catch (error) {
    console.error('Failed to save:', error);
  }
}

/**
 * Load scrapbook from database
 */
async function loadFromDatabase() {
  if (!supabase) {
    console.log('📂 Loading from local storage');
    const saved = localStorage.getItem('scrapbook-' + ROOM_ID);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.left) {
        state.leftCanvas.loadFromJSON(data.left, () => state.leftCanvas.renderAll());
      }
      if (data.right) {
        state.rightCanvas.loadFromJSON(data.right, () => state.rightCanvas.renderAll());
      }
    }
    return;
  }

  try {
    const { data, error } = await supabase
      .from('scrapbooks')
      .select('*')
      .eq('room_id', ROOM_ID)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    
    if (data) {
      if (data.canvas_left) {
        state.leftCanvas.loadFromJSON(data.canvas_left, () => state.leftCanvas.renderAll());
      }
      if (data.canvas_right) {
        state.rightCanvas.loadFromJSON(data.canvas_right, () => state.rightCanvas.renderAll());
      }
      console.log('✅ Loaded from database');
    }
  } catch (error) {
    console.error('Failed to load:', error);
  }
}

// ==========================================
// INITIALIZE
// ==========================================

// Auto-save every 30 seconds
setInterval(saveToDatabase, 30000);

// Track mouse for cursor broadcasting
document.addEventListener('mousemove', (e) => {
  // Throttle to ~20fps
  if (!document._lastCursorBroadcast || Date.now() - document._lastCursorBroadcast > 50) {
    broadcastCursorMove(e.clientX, e.clientY);
    document._lastCursorBroadcast = Date.now();
  }
});

// Export for use in main app
window.CollaborationModule = {
  init: initSupabase,
  save: saveToDatabase,
  load: loadFromDatabase,
  broadcastObjectAdd,
  broadcastObjectModify,
  broadcastObjectRemove,
  currentUser
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSupabase().then(connected => {
    if (connected) {
      loadFromDatabase();
    }
  });
});

console.log('🔗 Collaboration module loaded');
console.log('Room ID:', ROOM_ID);
console.log('User:', currentUser.name);

