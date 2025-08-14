<template>
  <div v-if="isVisible" class="metamask-overlay" @click="closeModal">
    <div class="metamask-container" @click.stop>
      <!-- Header -->
      <div class="metamask-header">
        <button class="back-btn" @click="closeModal">
          ←
        </button>
        <h2 class="metamask-title">Connect with MetaMask</h2>
        <button class="close-btn" @click="closeModal">
          ✕
        </button>
      </div>

      <!-- MetaMask Logo -->
      <div class="metamask-logo-section">
        <div class="metamask-logo">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F86f447350d864cafabc33551b38f85a3%2F597fa9d523334bc28c79c43d9df65e9b?format=webp&width=800" 
            alt="MetaMask"
            class="metamask-icon"
          />
        </div>
      </div>

      <!-- QR Code Section -->
      <div class="qr-section">
        <div class="qr-code">
          <svg class="qr-code-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <!-- QR Code Pattern - Simplified representation -->
            <!-- Corner squares -->
            <rect x="10" y="10" width="40" height="40" fill="#000"/>
            <rect x="150" y="10" width="40" height="40" fill="#000"/>
            <rect x="10" y="150" width="40" height="40" fill="#000"/>
            
            <!-- Inner corner squares -->
            <rect x="18" y="18" width="24" height="24" fill="#fff"/>
            <rect x="158" y="18" width="24" height="24" fill="#fff"/>
            <rect x="18" y="158" width="24" height="24" fill="#fff"/>
            
            <!-- Center squares -->
            <rect x="26" y="26" width="8" height="8" fill="#000"/>
            <rect x="166" y="26" width="8" height="8" fill="#000"/>
            <rect x="26" y="166" width="8" height="8" fill="#000"/>
            
            <!-- Random pattern blocks -->
            <rect x="70" y="20" width="8" height="8" fill="#000"/>
            <rect x="90" y="20" width="8" height="8" fill="#000"/>
            <rect x="110" y="20" width="8" height="8" fill="#000"/>
            <rect x="130" y="20" width="8" height="8" fill="#000"/>
            
            <rect x="20" y="70" width="8" height="8" fill="#000"/>
            <rect x="20" y="90" width="8" height="8" fill="#000"/>
            <rect x="20" y="110" width="8" height="8" fill="#000"/>
            <rect x="20" y="130" width="8" height="8" fill="#000"/>
            
            <!-- Center alignment pattern -->
            <rect x="90" y="90" width="20" height="20" fill="#000"/>
            <rect x="94" y="94" width="12" height="12" fill="#fff"/>
            <rect x="98" y="98" width="4" height="4" fill="#000"/>
            
            <!-- More random blocks -->
            <rect x="70" y="70" width="8" height="8" fill="#000"/>
            <rect x="130" y="70" width="8" height="8" fill="#000"/>
            <rect x="70" y="130" width="8" height="8" fill="#000"/>
            <rect x="130" y="130" width="8" height="8" fill="#000"/>
            
            <rect x="60" y="170" width="8" height="8" fill="#000"/>
            <rect x="80" y="170" width="8" height="8" fill="#000"/>
            <rect x="120" y="170" width="8" height="8" fill="#000"/>
            <rect x="140" y="170" width="8" height="8" fill="#000"/>
            
            <rect x="170" y="60" width="8" height="8" fill="#000"/>
            <rect x="170" y="80" width="8" height="8" fill="#000"/>
            <rect x="170" y="120" width="8" height="8" fill="#000"/>
            <rect x="170" y="140" width="8" height="8" fill="#000"/>
          </svg>
        </div>
        
        <div class="qr-instructions">
          <h3>Scan with MetaMask</h3>
          <p>Open MetaMask on your mobile device and scan this QR code to connect</p>
        </div>
      </div>

      <!-- Alternative Options -->
      <div class="alternative-section">
        <div class="divider">
          <span class="divider-text">OR</span>
        </div>
        
        <button class="extension-btn">
          <span class="extension-icon">🦊</span>
          Open MetaMask Extension
        </button>
        
        <p class="help-text">
          Don't have MetaMask? 
          <a href="https://metamask.io" target="_blank" rel="noopener">Download it here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetaMaskModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  },
  mounted() {
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible) {
        this.closeModal()
      }
    })
  }
}
</script>

<style scoped>
.metamask-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
}

.metamask-container {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.metamask-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid #f3f4f6;
}

.back-btn, .close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-btn:hover, .close-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.metamask-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.metamask-logo-section {
  display: flex;
  justify-content: center;
  padding: 24px;
}

.metamask-logo {
  width: 64px;
  height: 64px;
  background: #f6851b;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(246, 133, 27, 0.3);
}

.metamask-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.qr-section {
  text-align: center;
  padding: 0 24px 24px;
}

.qr-code {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  display: inline-block;
}

.qr-code-svg {
  width: 180px;
  height: 180px;
  display: block;
}

.qr-instructions h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.qr-instructions p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.alternative-section {
  padding: 0 24px 24px;
}

.divider {
  position: relative;
  margin: 24px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e5e7eb;
}

.divider-text {
  background: white;
  color: #9ca3af;
  padding: 0 16px;
  font-size: 14px;
  position: relative;
}

.extension-btn {
  width: 100%;
  background: #f6851b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s;
  margin-bottom: 16px;
}

.extension-btn:hover {
  background: #ea580c;
}

.extension-icon {
  font-size: 16px;
}

.help-text {
  text-align: center;
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.help-text a {
  color: #3b82f6;
  text-decoration: none;
}

.help-text a:hover {
  text-decoration: underline;
}

/* MetaMask Modal Animation Styles */
.metamask-enter-active, .metamask-leave-active {
  transition: opacity 0.3s ease;
}

.metamask-enter-from, .metamask-leave-to {
  opacity: 0;
}

.metamask-content-enter-active, .metamask-content-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.metamask-content-enter-from {
  opacity: 0;
  transform: scale(0.7) translateY(-50px) rotateX(15deg);
}

.metamask-content-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(30px) rotateX(-10deg);
}
</style>
