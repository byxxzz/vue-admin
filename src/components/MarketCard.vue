<template>
  <div class="market-card">
    <!-- Market Header -->
    <div class="market-header">
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
          <button class="trade-btn yes-btn">Yes</button>
          <button class="trade-btn no-btn">No</button>
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
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.market-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.market-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-emoji {
  font-size: 16px;
}

.market-title {
  font-size: 15px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
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

.trade-btn {
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

.market-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
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
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
  font-size: 14px;
  color: #6b7280;
}

.icon-btn:hover {
  background: #f3f4f6;
}
</style>
