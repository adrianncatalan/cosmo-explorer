<template>
  <div class="navigaton-shared">
    <NavigationShared />
    <div class="navigaton-shared-views-footer">
      <router-view></router-view>
      <FooterShared />
    </div>
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

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navigaton-shared {
  display: flex;

  &-views-footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>