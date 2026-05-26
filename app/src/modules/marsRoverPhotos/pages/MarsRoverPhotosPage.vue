<template>
    <div class="m-6">
        <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
            Mars Rover Snapshots: Exploring the Red Planet
        </h3>
        <h3 class="text-lg m-4 text-center leading-6 font-medium text-indigo-600">
            Discover Mars through the lens of our Mars Rover Snapshots collection.
        </h3>

        <div v-if="loading" class="text-center mt-5">
            <p class="text-gray-500">Loading data...</p>
        </div>
        <div v-else-if="error" class="text-center mt-5">
            <p class="text-red-500">{{ error }}</p>
        </div>
        <template v-else>
            <ul role="list" class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li v-for="(photo, index) in visiblePhotos" :key="index" class="relative">
                    <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                        <a target="_blank" :href="photo.imgSrc" class="inline-block">
                            <img :src="photo.imgSrc" alt="Mars Rover Photo" class="object-cover pointer-events-none group-hover:opacity-75" loading="lazy">
                        </a>
                    </div>
                    <p class="mt-2 block text-sm font-medium text-gray-900 text-center">{{ photo.cameraFullName }}</p>
                    <p class="mt-2 block text-sm font-medium text-gray-900 text-center">{{ photo.roverName }}</p>
                </li>
            </ul>

            <div class="flex justify-center items-center gap-4 mb-12">
                <button
                    :disabled="currentPage === 1"
                    class="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500"
                    @click="currentPage--"
                >
                    Previous
                </button>
                <span class="text-gray-600">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                    :disabled="currentPage === totalPages"
                    class="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500"
                    @click="currentPage++"
                >
                    Next
                </button>
            </div>
        </template>
    </div>
</template>

<script>
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

const MARS_ENDPOINT = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
const PAGE_SIZE = 12;

export default {
    data() {
        return {
            loading: true,
            error: null,
            photos: [],
            currentPage: 1,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.photos.length / PAGE_SIZE);
        },
        visiblePhotos() {
            const start = (this.currentPage - 1) * PAGE_SIZE;
            return this.photos.slice(start, start + PAGE_SIZE);
        }
    },
    async mounted() {
        try {
            const response = await fetchNasaData(MARS_ENDPOINT);
            this.photos = response.photos.map(photo => ({
                cameraFullName: photo.camera.full_name,
                roverName: photo.rover.name,
                imgSrc: photo.img_src
            }));
        } catch (error) {
            this.error = 'Failed to load Mars Rover photos.';
            console.error(error);
        } finally {
            this.loading = false;
        }
    }
};
</script>