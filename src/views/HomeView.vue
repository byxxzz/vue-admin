<template>
  <div class="polymarket-home">
    <PolymarketHeader />
    <main class="main-content">
      <div class="markets-grid">
        <MarketCard
          v-for="market in markets"
          :key="market.id"
          :market="market"
        />
      </div>
    </main>
  </div>
</template>

<script>
import PolymarketHeader from '@/components/PolymarketHeader.vue'
import MarketCard from '@/components/MarketCard.vue'

export default {
  name: 'HomeView',
  components: {
    PolymarketHeader,
    MarketCard
  },
  data() {
    return {
      markets: [
        {
          id: 1,
          avatar: '🏛️',
          title: 'Presidential Election Winner 2028',
          volume: '$5m Vol.',
          candidates: [
            { id: 1, name: 'JD Vance', percentage: 28 },
            { id: 2, name: 'Gavin Newsom', percentage: 14 },
            { id: 3, name: 'Alexandria Ocasio-Cortez', percentage: 8 }
          ]
        },
        {
          id: 2,
          avatar: '⚖️',
          title: 'Fed decision in September?',
          volume: '$148k Vol.',
          candidates: [
            { id: 1, name: 'Rate Cut 0.25%', percentage: 45 },
            { id: 2, name: 'Rate Cut 0.5%', percentage: 32 },
            { id: 3, name: 'No Change', percentage: 23 }
          ]
        },
        {
          id: 3,
          avatar: '🗽',
          title: 'New York City Mayoral Election',
          volume: '$41m Vol.',
          candidates: [
            { id: 1, name: 'Eric Adams', percentage: 62 },
            { id: 2, name: 'Curtis Sliwa', percentage: 28 },
            { id: 3, name: 'Maya Wiley', percentage: 10 }
          ]
        },
        {
          id: 4,
          avatar: '🏆',
          title: 'World Series Champion 2025',
          volume: '$2.3m Vol.',
          candidates: [
            { id: 1, name: 'Los Angeles Dodgers', percentage: 28 },
            { id: 2, name: 'New York Yankees', percentage: 24 },
            { id: 3, name: 'Atlanta Braves', percentage: 18 }
          ]
        },
        {
          id: 5,
          avatar: '₿',
          title: 'Bitcoin Price End of 2024',
          volume: '$1.8m Vol.',
          candidates: [
            { id: 1, name: 'Above $100k', percentage: 42 },
            { id: 2, name: '$75k - $100k', percentage: 38 },
            { id: 3, name: 'Below $75k', percentage: 20 }
          ]
        },
        {
          id: 6,
          avatar: '🏛️',
          title: 'Supreme Court Justice Retirement 2024',
          volume: '$890k Vol.',
          candidates: [
            { id: 1, name: 'No Retirement', percentage: 65 },
            { id: 2, name: 'Clarence Thomas', percentage: 22 },
            { id: 3, name: 'Samuel Alito', percentage: 13 }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.polymarket-home {
  min-height: 100vh;
  background: #f9fafb;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.markets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px;
  }

  .markets-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
