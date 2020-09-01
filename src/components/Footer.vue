<template>
  <footer class="footer-container pv-xl">
    <div class="text-contents flex-container fja-center">
      <a href="https://github.com/zigelzi/"
        ><v-icon :iconName="'github'" :iconSize="'m'"
      /></a>
      <a href="https://www.linkedin.com/in/miikasavela/"
        ><v-icon :iconName="'linkedin'" :iconSize="'m'"
      /></a>
    </div>
  </footer>
</template>
<script>
import Icon from '@/components/Icon'
export default {
  components: {
    'v-icon': Icon,
  },
}
</script>
<style lang="scss">
.footer-container {
  background: var(--gray-100);
}
</style>
