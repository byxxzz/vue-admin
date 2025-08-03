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

      <!-- Navigation Menu -->
      <nav class="nav-section">
        <a href="#" class="nav-link">🔥 Trending</a>
        <a href="#" class="nav-link">New</a>
        <a href="#" class="nav-link">Politics</a>
        <a href="#" class="nav-link">Middle East</a>
        <a href="#" class="nav-link">Sports</a>
        <a href="#" class="nav-link">Crypto</a>
        <a href="#" class="nav-link">Tech</a>
        <a href="#" class="nav-link">Culture</a>
        <a href="#" class="nav-link">World</a>
        <a href="#" class="nav-link">Economy</a>
        <a href="#" class="nav-link more-menu">More ▼</a>
      </nav>

      <!-- User Actions -->
      <div class="user-section">
        <button class="help-btn">❓ How it works</button>
        <button class="login-btn">Log in</button>
        <button class="signup-btn">Sign Up</button>
        <button class="menu-btn">☰</button>
      </div>
    </div>

    <!-- Secondary Navigation -->
    <div class="secondary-nav">
      <div class="nav-container">
        <button class="filter-btn active">All</button>
        <button class="filter-btn">Breaking News</button>
        <button class="filter-btn">Israel</button>
        <button class="filter-btn">Trade War</button>
        <button class="filter-btn">Epstein</button>
        <button class="filter-btn">Trump Presidency</button>
        <button class="filter-btn">Earn 4%</button>
        <button class="filter-btn">Jerome Powell</button>
        <button class="filter-btn">Ghislaine Maxwell</button>
        <button class="filter-btn">AI</button>
        <button class="nav-arrow">→</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PolymarketHeader',
  data() {
    return {
      searchQuery: ''
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
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 8px 0;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
}

.filter-btn {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: #e5e7eb;
}

.filter-btn.active {
  background: #dbeafe;
  color: #1d4ed8;
}

.nav-arrow {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}
</style>
