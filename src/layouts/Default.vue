<template>
  <div class="">
    <header>
      <div class="logo-container">
        <g-link to="/">
          <img
            class="logo-m logo-bg-clip"
            src="/viiru_logo_band_head_opt.svg"
            alt="Logo of Viiru Digital"
          />
        </g-link>
      </div>
      <v-nav />
    </header>
    <slot />
    <v-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.test {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  components: {
    'v-nav': Nav,
    'v-footer': Footer,
  },
}
</script>
