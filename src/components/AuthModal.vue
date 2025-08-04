<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <!-- Close Button -->
      <button class="close-btn" @click="closeModal">
        ✕
      </button>

      <!-- Modal Content -->
      <div class="modal-content">
        <h2 class="modal-title">Welcome to Polymarket</h2>

        <!-- Google Login Button -->
        <button class="google-btn">
          <span class="google-icon">G</span>
          Continue with Google
        </button>

        <!-- Divider -->
        <div class="divider">
          <span class="divider-text">OR</span>
        </div>

        <!-- Email Input Section -->
        <div class="email-section">
          <input
            type="email"
            placeholder="Enter Email"
            class="email-input"
            v-model="email"
          />
          <button class="continue-btn" :disabled="!email">
            Continue
          </button>
        </div>

        <!-- Social Login Icons -->
        <div class="social-icons">
          <button class="social-icon metamask" @click="showMetaMaskModal">
            🦊
          </button>
          <button class="social-icon coinbase">
            <span class="coinbase-logo">C</span>
          </button>
          <button class="social-icon discord">
            💬
          </button>
          <button class="social-icon wallet">
            ~
          </button>
        </div>

        <!-- Footer Links -->
        <div class="footer-links">
          <a href="#" class="footer-link">Terms</a>
          <span class="separator">•</span>
          <a href="#" class="footer-link">Privacy</a>
        </div>
      </div>
    </div>

    <!-- MetaMask Modal -->
    <MetaMaskModal :isVisible="isMetaMaskModalVisible" @close="hideMetaMaskModal" />
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
      this.email = ''
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 440px;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 18px;
  color: #9ca3af;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.modal-content {
  padding: 40px 32px 32px;
  text-align: center;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 32px;
}

.google-btn {
  width: 100%;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: background-color 0.2s;
  margin-bottom: 24px;
}

.google-btn:hover {
  background: #3367d6;
}

.google-icon {
  font-weight: bold;
  font-size: 18px;
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

.email-section {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.email-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.email-input:focus {
  border-color: #3b82f6;
}

.email-input::placeholder {
  color: #9ca3af;
}

.continue-btn {
  background: #1f2937;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.continue-btn:hover:not(:disabled) {
  background: #374151;
}

.continue-btn:disabled {
  background: #d1d5db;
  cursor: not-allowed;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}

.social-icon {
  width: 48px;
  height: 48px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.2s;
}

.social-icon:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.social-icon.metamask {
  background: #f6851b;
  border-color: #f6851b;
  color: white;
}

.social-icon.coinbase {
  background: #0052ff;
  border-color: #0052ff;
  color: white;
}

.coinbase-logo {
  font-weight: bold;
  font-size: 18px;
}

.social-icon.discord {
  background: #5865f2;
  border-color: #5865f2;
  color: white;
}

.social-icon.wallet {
  background: #1db584;
  border-color: #1db584;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #6b7280;
}

.separator {
  color: #d1d5db;
  font-size: 14px;
}
</style>
