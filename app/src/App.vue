<template>
    <div class="min-h-screen flex flex-col">
        <NavigationShared />
        <main class="flex-grow">
            <router-view />
        </main>
        <FooterShared />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import FooterShared from '@/modules/shared/components/FooterShared.vue';

export default {
    components: {
        NavigationShared: defineAsyncComponent(() => import('@/modules/shared/components/NavigationShared.vue')),
        FooterShared
    }
};
</script>