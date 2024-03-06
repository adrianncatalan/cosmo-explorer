<template>
    <div class="m-6">
        <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight 
                    bg-gradient-to-r from-indigo-500 sm:text-4xl">Mars Rover Snapshots: Exploring the Red Planet</h3>
        <h3 class="text-lg m-4 text-center leading-6 font-medium text-indigo-600 ">Discover Mars through the lens of our
            Mars
            Rover Snapshots collection.</h3>
        <div v-if="loading" class="text-center mt-5">
            <p class="text-gray-500 ">Loading data...</p>
        </div>
        <ul v-else role="list"
            class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="(photo, index) in photos.slice(0, 4)" :key="index" class="relative">
                <div
                    class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <a target="_blank" :href="photo.imgSrc" class="inline-block">
                        <img :src="photo.imgSrc" alt="Mars Rover Photo"
                            class="object-cover pointer-events-none group-hover:opacity-75">
                    </a>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.cameraFullName }}</p>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.roverName
        }}</p>
            </li>
        </ul>

        <ul role="list"
            class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="(photo, index) in photos.slice(842, 846)" :key="index" class="relative">
                <div
                    class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <a target="_blank" :href="photo.imgSrc" class="inline-block">
                        <img :src="photo.imgSrc" alt="Mars Rover Photo"
                            class="object-cover pointer-events-none group-hover:opacity-75">
                    </a>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.cameraFullName }}</p>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.roverName
        }}</p>
            </li>
        </ul>

        <ul role="list"
            class="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="(photo, index) in photos.slice(266, 286)" :key="index" class="relative">
                <div
                    class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <a target="_blank" :href="photo.imgSrc" class="inline-block">
                        <img :src="photo.imgSrc" alt="Mars Rover Photo"
                            class="object-cover pointer-events-none group-hover:opacity-75">
                    </a>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.cameraFullName }}</p>
                <p class="mt-2 block text-sm font-medium text-gray-900 pointer-events-none text-center">{{
            photo.roverName
                    }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
    data() {
        return {
            loading: true,
            photos: [], // Array to store fetched photos
            marsRoverPhotosEndpoint: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HgEXFJrEfmZo214o40xweiVBUEaedd96afUouznH',
        }
    },
    methods: {
        async extractingData() {
            try {
                const response = await fetchNasaData(this.marsRoverPhotosEndpoint);
                this.photos = response.photos.map(photo => ({
                    cameraFullName: photo.camera.full_name,
                    roverName: photo.rover.name,
                    imgSrc: photo.img_src
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.loading = false;
            }
        }
    },
    async mounted() {
        await this.extractingData();
    }
}
</script>
