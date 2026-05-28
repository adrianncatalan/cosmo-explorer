<template>
    <div class="relative bg-white min-h-screen">
        <div class="lg:absolute lg:inset-0">
            <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                <div v-if="loading" class="h-full w-full bg-gray-200 animate-pulse min-h-64" />
                <div v-else-if="error" class="text-center mt-20">
                    <p class="text-red-500">{{ error }}</p>
                </div>
                <template v-else>
                    <div v-show="!imageLoaded" class="h-full w-full bg-gray-200 animate-pulse min-h-64" />
                    <img v-show="imageLoaded"
                        class="h-56 w-full object-cover lg:absolute lg:h-full transition-opacity duration-500"
                        :src="apod.url" :alt="apod.title" @load="imageLoaded = true">
                </template>
            </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div class="lg:col-start-2 lg:pl-8">
                <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                    <div v-if="loading" class="space-y-4 animate-pulse pt-12">
                        <div class="h-4 bg-gray-200 rounded w-3/4" />
                        <div class="h-4 bg-gray-200 rounded w-1/2" />
                        <div class="h-8 bg-gray-200 rounded w-full mt-8" />
                        <div class="h-4 bg-gray-200 rounded w-full" />
                        <div class="h-4 bg-gray-200 rounded w-full" />
                        <div class="h-4 bg-gray-200 rounded w-5/6" />
                    </div>
                    <div v-else-if="error" class="text-center mt-5">
                        <p class="text-red-500">{{ error }}</p>
                    </div>
                    <template v-else-if="!loading">
                        <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide">
                            APOD: Astronomy Picture of the Day
                        </h2>
                        <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                            {{ apod.copyright }} - {{ apod.date }}
                        </h2>
                        <h3
                            class="my-8 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
                            {{ apod.title }}
                        </h3>
                        <p class="text-base">{{ apod.explanation }}</p>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNasaData } from '@/modules/shared/composables/useNasaData.js';

const APOD_ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`;

const apod = ref({ title: null, explanation: null, url: null, copyright: null, date: null });
const imageLoaded = ref(false);
const { loading, error, fetchData } = useNasaData();

onMounted(async () => {
    await fetchData(APOD_ENDPOINT, (data) => {
        const { title, explanation, url, copyright, date } = data;
        apod.value = { title, explanation, url, copyright, date };
    });
});
</script>