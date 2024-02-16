<template>
  <div class="navigation-shared">
    <NavigationShared />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavigationShared: defineAsyncComponent(() => import('@/modules/shared/components/NavigationShared.vue')),
  }
}
</script>