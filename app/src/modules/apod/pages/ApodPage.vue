<template>
    <div class="relative bg-white min-h-screen">
        <div class="lg:absolute lg:inset-0">
            <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                <div v-if="loading" class="text-center mt-20">
                    <p class="text-gray-500">Loading data...</p>
                </div>
                <img
                    v-else-if="!error"
                    class="h-56 w-full object-cover lg:absolute lg:h-full"
                    loading="lazy"
                    :src="apod.url"
                    :alt="apod.title"
                >
            </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div class="lg:col-start-2 lg:pl-8">
                <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                    <div v-if="error" class="text-center mt-5">
                        <p class="text-red-500">{{ error }}</p>
                    </div>
                    <template v-else-if="!loading">
                        <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide">
                            APOD: Astronomy Picture of the Day
                        </h2>
                        <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                            {{ apod.copyright }} - {{ apod.date }}
                        </h2>
                        <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
                            {{ apod.title }}
                        </h3>
                        <p class="text-base">{{ apod.explanation }}</p>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=rpo5wzh8LQhqRBKBCGx7zykC3ncMqwyaByW2GU7o';

export default {
    data() {
        return {
            loading: true,
            error: null,
            apod: {
                title: null,
                explanation: null,
                url: null,
                copyright: null,
                date: null,
            }
        };
    },
    async mounted() {
        try {
            const { title, explanation, url, copyright, date } = await fetchNasaData(APOD_ENDPOINT);
            this.apod = { title, explanation, url, copyright, date };
        } catch (error) {
            this.error = 'Failed to load APOD data. Please try again later.';
            console.error(error);
        } finally {
            this.loading = false;
        }
    }
};
</script>