<template>
    <div class="m-6">
        <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
            EPIC: Earth Polychromatic Imaging Camera
        </h3>
        <h3 class="text-lg m-4 text-center leading-6 font-medium text-indigo-600">
            Daily full disc imagery of the Earth from the DSCOVR satellite.
        </h3>
        <p v-if="isFallback" class="text-center text-sm text-amber-500 mb-6">
            Showing archive imagery from 2019-05-30 — live data temporarily unavailable.
        </p>

        <div v-if="loading"
            class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="n in 12" :key="n" class="relative">
                <div class="w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 animate-pulse" />
                <div class="mt-2 h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto" />
                <div class="mt-2 h-3 bg-gray-200 rounded animate-pulse w-1/2 mx-auto" />
            </div>
        </div>
        <div v-else-if="error" class="text-center mt-5">
            <p class="text-red-500">{{ error }}</p>
        </div>
        <template v-else>
            <ul role="list"
                class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li v-for="(image, index) in visibleImages" :key="index" class="relative">
                    <div
                        class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                        <img :src="image.url" :alt="image.caption"
                            class="object-cover pointer-events-none group-hover:opacity-75 transition-opacity duration-500"
                            :class="{ 'opacity-0': !loadedImages.has(index) }" loading="lazy"
                            @load="loadedImages.add(index)">
                    </div>
                    <p class="mt-2 block text-sm font-medium text-gray-900 text-center">{{ image.date }}</p>
                    <p class="mt-2 block text-xs text-indigo-600 text-center">{{ image.caption }}</p>
                </li>
            </ul>

            <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mb-12">
                <button :disabled="currentPage === 1"
                    class="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500"
                    @click="currentPage--; loadedImages.clear()">
                    Previous
                </button>
                <span class="text-gray-600">Page {{ currentPage }} of {{ totalPages }}</span>
                <button :disabled="currentPage === totalPages"
                    class="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500"
                    @click="currentPage++; loadedImages.clear()">
                    Next
                </button>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const EPIC_LATEST = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`;
const EPIC_FALLBACK = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${API_KEY}`;
const PAGE_SIZE = 12;

const images = ref([]);
const currentPage = ref(1);
const loading = ref(true);
const error = ref(null);
const isFallback = ref(false);
const loadedImages = reactive(new Set());

const totalPages = computed(() => Math.ceil(images.value.length / PAGE_SIZE));
const visibleImages = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE;
    return images.value.slice(start, start + PAGE_SIZE);
});

function buildImageUrl(image) {
    const date = image.date.split(' ')[0].replaceAll('-', '/');
    return `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${image.image}.png?api_key=${API_KEY}`;
}

function mapAndDeduplicate(data) {
    const seen = new Set();
    return data
        .filter(image => {
            if (seen.has(image.image)) return false;
            seen.add(image.image);
            return true;
        })
        .map(image => ({
            url: buildImageUrl(image),
            caption: image.caption,
            date: image.date.split(' ')[0],
        }));
}

onMounted(async () => {
    try {
        const data = await fetchNasaData(EPIC_LATEST);
        if (data && data.length > 0) {
            images.value = mapAndDeduplicate(data);
        } else {
            isFallback.value = true;
            const fallbackData = await fetchNasaData(EPIC_FALLBACK);
            images.value = mapAndDeduplicate(fallbackData);
        }
    } catch {
        try {
            isFallback.value = true;
            const fallbackData = await fetchNasaData(EPIC_FALLBACK);
            images.value = mapAndDeduplicate(fallbackData);
        } catch (err) {
            error.value = 'Failed to load EPIC imagery. Please try again later.';
            console.error(err);
        }
    } finally {
        loading.value = false;
    }
});
</script>