<template>
  <div class="market-card">
    <!-- Market Header -->
    <div class="market-header">
      <div class="market-info">
        <div class="market-avatar">
          <span class="avatar-emoji">{{ market.avatar }}</span>
        </div>
        <div class="market-details">
          <h3 class="market-title">{{ market.title }}</h3>
          <div class="market-meta">
            <span class="market-author">{{ market.author }}</span>
            <span class="market-percentage">{{ market.percentage }}%</span>
            <span class="market-change" :class="market.changeDirection">
              {{ market.change }}
            </span>
          </div>
        </div>
      </div>
      <div class="market-actions">
        <button class="bookmark-btn">🔖</button>
        <button class="share-btn">📤</button>
      </div>
    </div>

    <!-- Market Stats -->
    <div class="market-stats">
      <div class="volume-info">
        <span class="volume-label">{{ market.volumeLabel }}</span>
        <span class="volume-value">{{ market.volume }}</span>
      </div>
    </div>

    <!-- Trading Buttons -->
    <div class="trading-section">
      <button class="trade-btn buy-yes" :class="{ disabled: market.buyYesDisabled }">
        <span class="btn-label">Buy Yes</span>
        <span class="btn-price">{{ market.buyYesPrice }}</span>
      </button>
      <button class="trade-btn buy-no" :class="{ disabled: market.buyNoDisabled }">
        <span class="btn-label">Buy No</span>
        <span class="btn-price">{{ market.buyNoPrice }}</span>
      </button>
    </div>

    <!-- Additional Info -->
    <div class="additional-info" v-if="market.additionalInfo">
      <span class="info-text">{{ market.additionalInfo }}</span>
    </div>
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
  cursor: pointer;
}

.market-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.market-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.market-info {
  display: flex;
  gap: 12px;
  flex: 1;
}

.market-avatar {
  width: 40px;
  height: 40px;
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
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.market-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.market-author {
  color: #6b7280;
}

.market-percentage {
  font-weight: 600;
  color: #1f2937;
}

.market-change {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}

.market-change.positive {
  background: #dcfce7;
  color: #16a34a;
}

.market-change.negative {
  background: #fee2e2;
  color: #dc2626;
}

.market-actions {
  display: flex;
  gap: 8px;
}

.bookmark-btn, .share-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.bookmark-btn:hover, .share-btn:hover {
  background: #f3f4f6;
}

.market-stats {
  margin-bottom: 12px;
}

.volume-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.volume-label {
  color: #6b7280;
}

.volume-value {
  font-weight: 500;
  color: #1f2937;
}

.trading-section {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.trade-btn {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.buy-yes {
  background: #dcfce7;
  color: #16a34a;
}

.buy-yes:hover:not(.disabled) {
  background: #bbf7d0;
}

.buy-no {
  background: #fee2e2;
  color: #dc2626;
}

.buy-no:hover:not(.disabled) {
  background: #fecaca;
}

.trade-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-label {
  font-size: 11px;
}

.btn-price {
  font-size: 13px;
  font-weight: 700;
}

.additional-info {
  text-align: center;
  margin-top: 8px;
}

.info-text {
  font-size: 11px;
  color: #6b7280;
  background: #f9fafb;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
