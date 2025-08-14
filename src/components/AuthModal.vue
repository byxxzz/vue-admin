<template>
  <transition name="modal" appear>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <transition name="modal-content" appear>
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

            <!-- Solana Wallet Input Section -->
        <div class="wallet-section">
          <div class="wallet-input-container">
            <div class="wallet-icon">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F86f447350d864cafabc33551b38f85a3%2F1bf282e7412e4cb2baae4baa4cbe90da?format=webp&width=800" alt="Solana" class="solana-icon" />
            </div>
            <input
              type="text"
              placeholder="Enter Solana Wallet Address"
              class="wallet-input"
              v-model="walletAddress"
            />
          </div>
          <button class="connect-btn" :disabled="!walletAddress">
            Connect Wallet
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
      </transition>
    </div>
  </transition>

  <!-- MetaMask Modal -->
  <MetaMaskModal :isVisible="isMetaMaskModalVisible" @close="hideMetaMaskModal" />
</template>

<script>
import MetaMaskModal from './MetaMaskModal.vue'

export default {
  name: 'AuthModal',
  components: {
    MetaMaskModal
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      walletAddress: '',
      isMetaMaskModalVisible: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
      this.walletAddress = ''
    },
    showMetaMaskModal() {
      this.isMetaMaskModalVisible = true
    },
    hideMetaMaskModal() {
      this.isMetaMaskModalVisible = false
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

.wallet-section {
  margin-bottom: 32px;
}

.wallet-input-container {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: border-color 0.2s;
}

.wallet-input-container:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.wallet-icon {
  padding: 12px 0 12px 16px;
  display: flex;
  align-items: center;
}

.solana-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.wallet-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
}

.wallet-input::placeholder {
  color: #9ca3af;
}

.connect-btn {
  width: 100%;
  background: linear-gradient(135deg, #9945ff 0%, #14f195 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.connect-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(153, 69, 255, 0.3);
}

.connect-btn:disabled {
  background: #d1d5db;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
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

/* Modal Animation Styles */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active, .modal-content-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-30px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
</style>
