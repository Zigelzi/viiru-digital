<template>
  <div class="">
    <v-header>
      <v-nav />
    </v-header>
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'v-nav': Nav,
    'v-header': Header,
    'v-footer': Footer,
  },
}
</script>
