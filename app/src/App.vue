<template>
    <div class="min-h-screen flex flex-col">
        <NavigationShared />
        <main class="flex-grow">
            <router-view />
        </main>
        <FooterShared />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import FooterShared from '@/modules/shared/components/FooterShared.vue';

const NavigationShared = defineAsyncComponent(() =>
    import('@/modules/shared/components/NavigationShared.vue')
);
</script>