<template>
  <header class="header">
    <div class="logo-container">
      <g-link to="/">
        <img
          class="logo-m logo-bg-clip"
          src="/viiru_logo_band_head_opt.svg"
          alt="Logo of Viiru Digital"
        />
      </g-link>
    </div>
    <slot />
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
</style>
