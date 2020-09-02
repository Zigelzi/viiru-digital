<template>
  <nav id="nav" class="nav">
    <transition name="fade">
      <div class="nav-overlay bg-white" v-if="navOpen">
        <div>
          <g-link @click.native="toggleNav" to="/" class="nav-logo">
            <img
              class="logo-m pv-l ph-s"
              src="/viiru_logo_band_head_opt.svg"
              alt="Logo of Viiru Digital"
            />
          </g-link>
        </div>

        <div class="flex-container fja-center">
          <div class="nav-links flex-container">
            <g-link @click.native="toggleNav" class="nav-item" to="/about/"
              >Esittely</g-link
            >
          </div>
        </div>
      </div>
    </transition>
    <v-menu-icon
      class="nav-icon"
      @menuIconClicked="toggleNav"
      :navOpen="navOpen"
    />
  </nav>
</template>
<script>
import MenuIcon from '@/components/MenuIcon'
export default {
  components: {
    'v-menu-icon': MenuIcon,
  },
  data() {
    return {
      navOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
  },
}
</script>
<style lang="scss">
.nav-item {
  font-size: var(--text-30);
  color: var(--black);
  padding: var(--p-m);
  &:hover {
    color: tomato;
  }
}

.nav-logo {
  height: 100%;
  display: inline-block;
}
.nav-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
.nav-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.nav-links {
  height: 100%;
  flex-direction: column;
  padding: var(--p-xl);
}
</style>
