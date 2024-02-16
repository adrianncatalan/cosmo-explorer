<template>
  <div class="navigation-shared">
    <NavigationShared />
    <router-view></router-view>
    <FooterShared />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import FooterShared from './modules/shared/components/FooterShared.vue';

export default {
  components: {
    NavigationShared: defineAsyncComponent(() => import('@/modules/shared/components/NavigationShared.vue')),
    FooterShared
  }
}
</script>
