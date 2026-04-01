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
            <h2 class="modal-title">You'll need a wallet on<br />Solana to continue</h2>

            <!-- Wallet Icon -->
            <div class="wallet-icon-section">
              <div class="wallet-icon-container">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F86f447350d864cafabc33551b38f85a3%2F6aafa3c995fd4cf1bb3ca052913cc551?format=webp&width=800" 
                  alt="Wallet Icon"
                  class="wallet-icon"
                />
              </div>
            </div>

            <!-- Get Started Button -->
            <button class="get-started-btn" @click="handleGetStarted">
              Get started
            </button>

            <!-- Already have wallet section -->
            <div class="already-have-wallet">
              <button class="wallet-options-btn" @click="toggleWalletOptions">
                Already have a wallet? View options
                <span class="dropdown-arrow" :class="{ 'expanded': showWalletOptions }">▼</span>
              </button>
              
              <!-- Wallet Options (expandable) -->
              <transition name="slide-down">
                <div v-if="showWalletOptions" class="wallet-options">
                  <button class="wallet-option" :class="{ 'selected': selectedWallet === 'phantom' }"  @click="selectWalletIndexFunc(1)">
                    <span class="wallet-logo">👻</span>
                    Phantom
                    <span v-if="selectedWallet === 'phantom'" class="check-icon">✓</span>
                  </button>
                  <button class="wallet-option" :class="{ 'selected': selectedWallet === 'solflare' }"  @click="selectWalletIndexFunc(2)">
                    <span class="wallet-logo">🔥</span>
                    Solflare
                    <span v-if="selectedWallet === 'solflare'" class="check-icon">✓</span>
                  </button>
                  <button class="wallet-option" :class="{ 'selected': selectedWallet === 'backpack' }"  @click="selectWalletIndexFunc(3)">
                    <span class="wallet-logo">🎒</span>
                    Backpack
                    <span v-if="selectedWallet === 'backpack'" class="check-icon">✓</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
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
      showWalletOptions: false,
      selectedWallet:null
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
      this.showWalletOptions = false
      this.selectedWallet = null
    },
    handleGetStarted() {
      // Handle get started action - could open wallet installation guide
      console.log('Get started clicked')
      // You can add logic here to guide users to install a Solana wallet
    },
    toggleWalletOptions() {
      this.showWalletOptions = !this.showWalletOptions
    },
    selectWalletIndexFunc(index){
      switch(index){
        case 1:
          this.selectedWallet = 'phantom'
          break
        case 2:
          this.selectedWallet = 'solflare'
          break
        case 3:
          this.selectedWallet = 'backpack'
          break
      }
      console.log('walletIndex',index,this.selectedWallet)
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-content {
  padding: 60px 40px 40px;
  text-align: center;
}

.modal-title {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
  line-height: 1.3;
}

.wallet-icon-section {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.wallet-icon-container {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.wallet-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(1.2);
}

.get-started-btn {
  width: 100%;
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
}

.get-started-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(124, 58, 237, 0.5);
  background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
}

.already-have-wallet {
  margin-top: 20px;
}

.wallet-options-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  cursor: pointer;
  padding: 12px 0;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.wallet-options-btn:hover {
  color: white;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  font-size: 12px;
}

.dropdown-arrow.expanded {
  transform: rotate(180deg);
}

.wallet-options {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wallet-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.wallet-option:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.wallet-option.selected {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  border-color: #a855f7;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}

.wallet-option.selected:hover {
  background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
  transform: translateY(-1px);
}

.wallet-logo {
  font-size: 18px;
}

.check-icon {
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  color: #10b981;
}

/* Modal Animation Styles */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active, .modal-content-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-30px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

/* Slide down animation for wallet options */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
