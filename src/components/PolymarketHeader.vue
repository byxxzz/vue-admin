<template>
  <header class="polymarket-header">
    <div class="header-container">
      <!-- Logo and Brand -->
      <div class="brand-section">
        <div class="logo">
          <span class="logo-icon">📊</span>
          <span class="brand-name">Polymarket</span>
          <span class="country-flag">🇺🇸</span>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-section">
        <div class="search-container">
          <input 
            type="text" 
            placeholder="Search markets" 
            class="search-input"
            v-model="searchQuery"
          />
          <button class="search-filters">
            <span>⚙️</span>
          </button>
        </div>
      </div>



      <!-- User Actions -->
      <div class="user-section">
        <button class="help-btn">❓ How it works</button>
        <button class="login-btn" @click="showAuthModal">Log in1<br /></button>
        <button class="signup-btn" @click="showAuthModal">Sign Up</button>
        <button class="menu-btn">☰</button>
      </div>
    </div>

    <!-- Secondary Navigation -->
    <div class="secondary-nav">
      <div class="nav-container">
        <button class="nav-item trending">🔥 Trending</button>
        <button class="nav-item">New</button>
        <button class="nav-item">Politics</button>
        <button class="nav-item">Middle East</button>
        <button class="nav-item">Sports</button>
        <button class="nav-item">Crypto</button>
        <button class="nav-item">Tech</button>
        <button class="nav-item">Culture</button>
        <button class="nav-item">World</button>
        <button class="nav-item">Economy</button>
        <button class="nav-item">Trump</button>
        <button class="nav-item">Elections</button>
        <button class="nav-item">Mentions</button>
        <button class="nav-item more-dropdown">More ▼</button>
      </div>
    </div>

    <!-- Auth Modal -->
    <AuthModal :isVisible="isAuthModalVisible" @close="hideAuthModal" />
  </header>
</template>

<script>
import AuthModal from './AuthModal.vue'

export default {
  name: 'PolymarketHeader',
  components: {
    AuthModal
  },
  data() {
    return {
      searchQuery: '',
      isAuthModalVisible: false
    }
  },
  methods: {
    showAuthModal() {
      this.isAuthModalVisible = true
    },
    hideAuthModal() {
      this.isAuthModalVisible = false
    }
  }
}
</script>

<style scoped>
.polymarket-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-section {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
}

.logo-icon {
  font-size: 20px;
}

.brand-name {
  color: #1f2937;
}

.country-flag {
  font-size: 16px;
}

.search-section {
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
}

.search-container {
  display: flex;
  align-items: center;
  background: #f9fafb;
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
}

.search-input {
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
}

.search-filters {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #1f2937;
}

.more-menu {
  color: #374151;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.help-btn, .login-btn {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.help-btn:hover, .login-btn:hover {
  background: #f3f4f6;
}

.signup-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.signup-btn:hover {
  background: #2563eb;
}

.menu-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
}

.secondary-nav {
  background: white;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
}

.nav-item {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 13px;
  font-weight: 500;
  padding: 12px 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

.nav-item:hover {
  color: #374151;
  background: #f9fafb;
}

.nav-item.trending {
  color: #1f2937;
  border-bottom-color: #3b82f6;
}

.nav-item.more-dropdown {
  color: #374151;
}
</style>
