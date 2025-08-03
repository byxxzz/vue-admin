<template>
  <div class="market-card">
    <!-- Binary Format (Yes/No) -->
    <template v-if="market.type === 'binary'">
      <!-- Market Header -->
      <div class="market-header">
        <div class="market-info">
          <img
            v-if="market.profileImage"
            :src="market.profileImage"
            :alt="market.person"
            class="profile-image"
          />
          <div class="market-avatar" v-else>
            <span class="avatar-emoji">{{ market.avatar }}</span>
          </div>
          <div class="market-details">
            <h3 class="market-title">{{ market.title }}</h3>
          </div>
        </div>
        <div class="market-chance">
          <span class="percentage">{{ market.percentage }}%</span>
          <span class="chance-label">chance</span>
        </div>
      </div>

      <!-- Trading Buttons -->
      <div class="trading-section">
        <button class="trade-btn buy-yes">
          Buy Yes ↗
        </button>
        <button class="trade-btn buy-no">
          Buy No ↓
        </button>
      </div>

      <!-- Market Footer -->
      <div class="market-footer">
        <div class="volume-info">
          <span class="volume-text">{{ market.volume }}</span>
        </div>
        <div class="action-icons">
          <button class="icon-btn">🎁</button>
          <button class="icon-btn">🔖</button>
        </div>
      </div>
    </template>

    <!-- Multi-candidate Format -->
    <template v-else>
      <!-- Market Header -->
      <div class="market-header-multi">
        <div class="market-info">
          <div class="market-avatar">
            <span class="avatar-emoji">{{ market.avatar }}</span>
          </div>
          <h3 class="market-title">{{ market.title }}</h3>
        </div>
      </div>

      <!-- Candidates List -->
      <div class="candidates-section">
        <div
          v-for="candidate in market.candidates"
          :key="candidate.id"
          class="candidate-row"
        >
          <div class="candidate-info">
            <span class="candidate-name">{{ candidate.name }}</span>
            <span class="candidate-percentage">{{ candidate.percentage }}%</span>
          </div>
          <div class="candidate-actions">
            <button class="trade-btn-small yes-btn">Yes</button>
            <button class="trade-btn-small no-btn">No</button>
          </div>
        </div>
      </div>

      <!-- Market Footer -->
      <div class="market-footer">
        <div class="volume-info">
          <span class="volume-text">{{ market.volume }}</span>
        </div>
        <div class="action-icons">
          <button class="icon-btn">👥</button>
          <button class="icon-btn">🎁</button>
          <button class="icon-btn">🔖</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MarketCard',
  props: {
    market: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.market-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.market-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.market-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.market-info {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.profile-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.market-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-emoji {
  font-size: 20px;
}

.market-details {
  flex: 1;
  min-width: 0;
}

.market-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
}

.market-chance {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.percentage {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
}

.chance-label {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
}

.trading-section {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.trade-btn {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.buy-yes {
  background: #dcfce7;
  color: #16a34a;
}

.buy-yes:hover {
  background: #bbf7d0;
}

.buy-no {
  background: #fee2e2;
  color: #dc2626;
}

.buy-no:hover {
  background: #fecaca;
}

.market-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.volume-info {
  font-size: 12px;
  color: #6b7280;
}

.volume-text {
  font-weight: 500;
}

.action-icons {
  display: flex;
  gap: 8px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: background-color 0.2s;
  font-size: 16px;
  color: #9ca3af;
}

.icon-btn:hover {
  background: #f3f4f6;
  color: #6b7280;
}

/* Multi-candidate format styles */
.market-header-multi {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.market-header-multi .market-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.market-header-multi .market-avatar {
  width: 32px;
  height: 32px;
}

.market-header-multi .avatar-emoji {
  font-size: 16px;
}

.candidates-section {
  margin-bottom: 16px;
}

.candidate-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f9fafb;
}

.candidate-row:last-child {
  border-bottom: none;
}

.candidate-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.candidate-name {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
}

.candidate-percentage {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin-left: auto;
  margin-right: 16px;
}

.candidate-actions {
  display: flex;
  gap: 8px;
}

.trade-btn-small {
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 32px;
}

.yes-btn {
  background: #dcfce7;
  color: #16a34a;
}

.yes-btn:hover {
  background: #bbf7d0;
}

.no-btn {
  background: #fee2e2;
  color: #dc2626;
}

.no-btn:hover {
  background: #fecaca;
}
</style>
