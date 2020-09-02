<template>
  <div
    class="menu-container"
    @click="test"
    :class="{ 'hamburger-menu__open': navOpen }"
  >
    <div class="hamburger-menu"></div>
  </div>
</template>

<script>
export default {
  props: {
    navOpen: Boolean,
  },
  methods: {
    test() {
      console.log(`navOpen is ${this.navOpen}`)
      this.$emit('menuIconClicked')
    },
  },
  computed: {
    classObject() {
      return {
        //eslint-disable-next-line
        'hamburger-menu__open': this.navOpen,
      }
    },
  },
}
</script>

<style lang="scss">
.hamburger-menu {
  // Middle bar
  height: 6px; // Height of bars
  width: 50px; // Width of bars
  background: var(--white);
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px 2px rgba(14, 14, 14, 0.3);
  &::after,
  &::before {
    // Top and bottom bar
    content: '';
    display: block;
    position: absolute;
    height: 6px;
    width: 50px;
    background: var(--white);
    box-shadow: 0 0 4px 2px rgba(14, 14, 14, 0.3);
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  &::before {
    // Move TOP bar up
    transform: translateY(-16px);
  }
  &::after {
    // Move BOTTOM bar down
    transform: translateY(16px);
  }
}

.hamburger-menu__open {
  .hamburger-menu {
    // Fade out middle bar
    height: 0;
    width: 0;
    background: transparent;
    box-shadow: none;

    &::before,
    &::after {
      box-shadow: none;
    }

    &::before {
      // Turn top bar
      background: var(--black);
      transform: rotate(45deg) translate(-16px, 16px);
    }
    &::after {
      // Turn bottom bar
      background: var(--black);
      transform: rotate(-45deg) translate(-16px, -16px);
    }
  }
}

.menu-container {
  // Conainter
  display: inline-block;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
