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
          profileImage: 'https://cdn.builder.io/api/v1/image/assets%2F86f447350d864cafabc33551b38f85a3%2F851e58e80402472481621e7fdaaf1397?format=webp&width=800',
          person: 'Ghislaine Maxwell',
          title: 'Will Ghislaine Maxwell testify before Congress...',
          percentage: 17,
          volume: '$168k Vol.'
        },
        {
          id: 2,
          avatar: '🗳️',
          title: 'Presidential Election Winner 2028',
          percentage: 28,
          volume: '$5m Vol.'
        },
        {
          id: 3,
          avatar: '⚖️',
          title: 'Fed decision in September?',
          percentage: 64,
          volume: '$148k Vol.'
        },
        {
          id: 4,
          avatar: '🗽',
          title: 'New York City Mayoral Election',
          percentage: 82,
          volume: '$41m Vol.'
        },
        {
          id: 5,
          avatar: '🏆',
          title: 'World Series Champion 2025',
          percentage: 28,
          volume: '$2.3m Vol.'
        },
        {
          id: 6,
          avatar: '₿',
          title: 'Bitcoin above $100k by end of 2024?',
          percentage: 42,
          volume: '$1.8m Vol.'
        },
        {
          id: 7,
          avatar: '🏛️',
          title: 'Supreme Court Justice retirement in 2024?',
          percentage: 35,
          volume: '$890k Vol.'
        },
        {
          id: 8,
          avatar: '🇮🇱',
          title: 'Israel x Hamas ceasefire by August 15?',
          percentage: 6,
          volume: '$4m Vol.'
        },
        {
          id: 9,
          avatar: '🔥',
          title: 'Will Trump pardon Jonathan Pollard by Jan?',
          percentage: 22,
          volume: '$3m Vol.'
        },
        {
          id: 10,
          avatar: '💊',
          title: 'GLP-1 released by major pharma in 2024?',
          percentage: 78,
          volume: '$974k Vol.'
        },
        {
          id: 11,
          avatar: '🏛️',
          title: 'Will Polymarket US go live in 2025?',
          percentage: 65,
          volume: '$413k Vol.'
        },
        {
          id: 12,
          avatar: '📈',
          title: 'US congress stock trading ban in 2025?',
          percentage: 8,
          volume: '$24k Vol.'
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
