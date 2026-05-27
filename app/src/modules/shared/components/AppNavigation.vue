<template>
    <nav class="bg-slate-950">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between">
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4 m-8">
                            <router-link v-for="link in navLinks" :key="link.name"
                                class="text-gray-300 hover:bg-gradient-to-r from-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                :to="{ name: link.name }">
                                {{ link.label }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1 flex justify-center text-center flex-col">
                    <router-link v-for="link in navLinks" :key="link.name"
                        class="text-gray-300 hover:bg-gradient-to-r from-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        :to="{ name: link.name }">
                        {{ link.label }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const navLinks = [
    { name: 'home', label: 'HOME' },
    { name: 'apod', label: 'APOD' },
    { name: 'neows', label: 'NEOWS' },
    { name: 'marsRoverPhotos', label: 'MARS ROVER PHOTOS' },
];
</script>