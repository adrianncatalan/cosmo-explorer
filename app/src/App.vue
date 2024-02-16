<template>
  <div>
    <NavigationShared />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavigationShared: defineAsyncComponent(() => import('@/modules/shared/components/NavigationShared.vue'))
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

div {
  display: flex;
}
</style>