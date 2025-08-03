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
          avatar: '🗳️',
          title: 'Presidential Election Winner 2028',
          author: 'JD Vance',
          percentage: 28,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$4m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽',
          buyYesDisabled: false,
          buyNoDisabled: false
        },
        {
          id: 2,
          avatar: '⚖️',
          title: 'Fed decision in September?',
          author: 'Gavin Newsom',
          percentage: 14,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$148k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 3,
          avatar: '🏛️',
          title: 'Jerome Powell out as Fed Chair in 2025?',
          author: 'Alexandria Ocasio-Cortez',
          percentage: 13,
          change: 'No',
          changeDirection: 'negative',
          volumeLabel: '$4m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 4,
          avatar: '🗽',
          title: 'New York City Mayoral Election',
          author: 'Zohran Mamdani',
          percentage: 82,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$41m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 5,
          avatar: '🇮🇱',
          title: 'Israel x Hamas ceasefire by August 15?',
          author: 'Slim Vol.',
          percentage: 6,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$4m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 6,
          avatar: '🔥',
          title: 'Will Trump pardon Jonathan Pollard by Jan?',
          author: 'August 5',
          percentage: 22,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$3m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 7,
          avatar: '💊',
          title: 'GLP-1 released by...?',
          author: 'August 10',
          percentage: 8,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$974k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 8,
          avatar: '🏛️',
          title: 'Who will Trump pardon in 2025?',
          author: 'Changpeng Zhao',
          percentage: 27,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$974k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 9,
          avatar: '👩‍⚖️',
          title: 'Will Ghislaine Maxwell testify before Congress...',
          author: 'Andrew Cuomo',
          percentage: 17,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$168k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 10,
          avatar: '📈',
          title: 'US congress stock trading ban in 2025?',
          author: 'Ghislaine Maxwell',
          percentage: 8,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$24k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 11,
          avatar: '🇨🇳',
          title: 'Xi Jinping out in 2025?',
          author: 'Prince Andrew',
          percentage: 9,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$7m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 12,
          avatar: '👑',
          title: 'Who will be named in newly released Epstein files?',
          author: 'Bill Clinton',
          percentage: 38,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$132k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 13,
          avatar: '🏛️',
          title: 'Will Polymarket US go live in 2025?',
          author: 'Pete Hegseth',
          percentage: 65,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$413k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 14,
          avatar: '🏛️',
          title: 'Who will leave Trump Administration in 2025?',
          author: 'Tulsi Gabbard',
          percentage: 20,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$99k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 15,
          avatar: '🏆',
          title: 'World Series Champion 2025',
          author: 'Los Angeles Dodgers',
          percentage: 28,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$80k Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        },
        {
          id: 16,
          avatar: '🇧🇴',
          title: 'Bolivia Presidential Election',
          author: 'Samuel Doria Medina',
          percentage: 53,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$8m Vol.',
          volume: '',
          buyYesPrice: 'Up △',
          buyNoPrice: 'Down ▽'
        },
        {
          id: 17,
          avatar: '₿',
          title: 'Bitcoin Up or Down on August 3?',
          author: '1 12th',
          percentage: 94,
          change: 'chance',
          changeDirection: 'neutral',
          volumeLabel: '$284k Vol.',
          volume: '',
          buyYesPrice: 'Up △',
          buyNoPrice: 'Down ▽'
        },
        {
          id: 18,
          avatar: '₿',
          title: 'What price will Bitcoin hit in August?',
          author: '1 120k',
          percentage: 38,
          change: 'Yes',
          changeDirection: 'positive',
          volumeLabel: '$4m Vol.',
          volume: '',
          buyYesPrice: '△',
          buyNoPrice: '▽'
        }
      ]
    }
  }
}
</script>
