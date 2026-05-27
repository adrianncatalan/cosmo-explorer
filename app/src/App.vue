<template>
    <div class="min-h-screen flex flex-col">
        <AppNavigation />
        <main class="flex-grow">
            <router-view />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import AppFooter from '@/modules/shared/components/AppFooter.vue';

const AppNavigation = defineAsyncComponent(() =>
    import('@/modules/shared/components/AppNavigation.vue')
);
</script>