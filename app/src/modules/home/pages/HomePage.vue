<template>
    <div class="bg-white overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
            <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                    <h3
                        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
                        The Stellar Space Exploration Platform
                    </h3>
                </div>
            </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:row-start-1 lg:col-start-2">
                    <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                        <figure>
                            <div class="aspect-w-12 aspect-h-7 lg:aspect-none relative overflow-hidden rounded-lg shadow-lg"
                                style="height: 400px;">
                                <transition name="fade">
                                    <img v-if="currentImage" :key="currentImage.url" :src="currentImage.url"
                                        :alt="currentImage.title"
                                        class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
                                        :class="{ 'opacity-0': !imageReady }" @load="imageReady = true">
                                    <div v-else class="absolute inset-0 w-full h-full bg-gray-200 animate-pulse" />
                                </transition>
                                <div v-if="currentImage && !imageReady"
                                    class="absolute inset-0 bg-gray-200 animate-pulse" />
                            </div>
                            <figcaption class="mt-3 flex text-sm text-gray-500 min-h-5">
                                <span v-if="currentImage && imageReady" class="ml-2">
                                    {{ currentImage.title }} — <a href="https://images.nasa.gov/" target="_blank"
                                        class="hover:text-gray-400 underline">NASA Image Library</a>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div
                        class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <h2 class="text-base text-indigo-600 font-semibold tracking-wide">
                            Welcome to the website! Here, you'll find access to a wide range of information about space
                            exploration, all sourced directly from the NASA API.
                        </h2>
                        <br>
                        <p>
                            The website fetches data from various endpoints offered by the NASA API to provide
                            up-to-date information about space phenomena, celestial bodies, and astronomical events.
                            Images displayed on this page are sourced from the
                            <a href="https://images.nasa.gov/" target="_blank"
                                class="text-indigo-600 hover:text-indigo-500 underline">
                                NASA Image and Video Library
                            </a>.
                        </p>
                        <br>
                        <p>
                            Explore the platform to discover captivating content about the cosmos. Join the journey
                            through the cosmos as we delve into the mysteries of space together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

const NASA_IMAGES_ENDPOINT = 'https://images-api.nasa.gov/search?q=space&media_type=image&page_size=20';

const images = ref([]);
const currentImage = ref(null);
const currentIndex = ref(0);
const imageReady = ref(false);
let interval = null;

function nextImage() {
    if (images.value.length === 0) return;
    imageReady.value = false;
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    currentImage.value = images.value[currentIndex.value];
}

onMounted(async () => {
    try {
        const data = await fetchNasaData(NASA_IMAGES_ENDPOINT);
        images.value = data.collection.items
            .map(item => {
                const preview = item.links?.find(l => l.rel === 'alternate' && l.href.includes('medium'))
                    || item.links?.find(l => l.rel === 'preview');
                if (!preview) return null;
                return {
                    url: preview.href,
                    title: item.data[0].title,
                };
            })
            .filter(Boolean);

        if (images.value.length > 0) {
            currentImage.value = images.value[0];
            interval = setInterval(nextImage, 5000);
        }
    } catch (error) {
        console.error('Failed to load NASA images:', error);
    }
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    position: absolute;
}
</style>