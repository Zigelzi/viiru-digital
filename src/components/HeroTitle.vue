<template>
  <div class="hero-text-content">
    <h2 class="hero-text-s hero-text">
      <transition name="fade-slow" mode="out-in">
        <div
          :key="currentHobby"
          class="text-normal text-capitalized hero-hobby"
        >
          {{ currentHobby }}
        </div>
      </transition>
      <div>on harrastukseni</div>
    </h2>
    <h1 class="hero-text-l hero-text mt-l">
      <span class="text-normal text-pink">Digitaaliset palvelut</span>
      intohimoni
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentHobby: 'pelaaminen',
      hobbies: [
        'pelaaminen',
        'valokuvaaminen',
        'pelikehittäminen',
        'kuntosali',
        'juokseminen',
        'kokkaaminen',
      ],
      intervalId: null,
    }
  },
  methods: {
    rotateHobbies() {
      let currentHobbyIndex = 0
      this.intervalId = setInterval(() => {
        const numberOfHobbies = this.hobbies.length
        this.currentHobby = this.hobbies[currentHobbyIndex]
        currentHobbyIndex += 1
        if (currentHobbyIndex >= numberOfHobbies) {
          currentHobbyIndex = 0
        }
      }, 2500)
    },
  },
  mounted() {
    this.rotateHobbies()
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
}
</script>
<style lang="scss">
.hero-text-s {
  font-size: var(--text-20);
  font-weight: 300;
  font-family: var(--body-font);
}

.hero-text-l {
  font-size: var(--text-48);
}

.hero-hobby {
  display: inline-block;
  min-width: 145px;
}

.fade-slow-enter-active,
.fade-slow-leave.active {
  transition: opacity 1.2s ease;
}

.fade-slow-enter,
.fade-slow-leave-to {
  opacity: 0;
}
</style>
