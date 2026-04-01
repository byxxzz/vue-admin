<template>
  <div class="circular-progress">
    <svg class="progress-ring" :width="size" :height="size">
      <!-- Background circle -->
      <circle
        class="progress-ring-background"
        :stroke="backgroundColor"
        stroke-width="6"
        fill="transparent"
        :r="radius"
        :cx="center"
        :cy="center"
      />
      <!-- Progress circle -->
      <circle
        class="progress-ring-circle"
        :stroke="progressColor"
        stroke-width="6"
        fill="transparent"
        :r="radius"
        :cx="center"
        :cy="center"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        stroke-linecap="round"
      />
    </svg>
    
    <!-- Center content -->
    <div class="progress-content">
      <span class="percentage-value">{{ percentage }}%</span>
      <span class="chance-label">chance</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircularProgress',
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 0
    },
    size: {
      type: Number,
      default: 80
    },
    progressColor: {
      type: String,
      default: '#f97316'
    },
    backgroundColor: {
      type: String,
      default: '#e5e7eb'
    }
  },
  computed: {
    radius() {
      return (this.size - 12) / 2 // Account for stroke width
    },
    center() {
      return this.size / 2
    },
    circumference() {
      return 2 * Math.PI * this.radius
    },
    strokeDashoffset() {
      const progress = Math.min(Math.max(this.percentage, 0), 100)
      return this.circumference - (progress / 100) * this.circumference
    }
  }
}
</script>

<style scoped>
.circular-progress {
  position: relative;
  display: inline-block;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-background {
  opacity: 0.3;
}

.progress-ring-circle {
  transition: stroke-dashoffset 0.6s ease-in-out;
}

.progress-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.percentage-value {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
}

.chance-label {
  font-size: 10px;
  color: #9ca3af;
  margin-top: 2px;
  line-height: 1;
}
</style>
