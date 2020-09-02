<template>
  <div class="">
    <header><v-nav /></header>
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
