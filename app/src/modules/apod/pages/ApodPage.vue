<template>
    <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0">
            <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                <div v-if="loading" class="text-center mt-20">
                    <p class="text-gray-500 ">Loading data...</p>
                </div>
                <img v-else class="h-56 w-full object-cover lg:absolute lg:h-full" loading="lazy" :src="url"
                    :alt="title">
            </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl
    lg:mx-auto lg:grid lg:grid-cols-2">
            <div class="lg:col-start-2 lg:pl-8">
                <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                    <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide">{{ apod }}</h2>
                    <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide
          uppercase">{{ copyright }} - {{ date }}</h2>
                    <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight
                    bg-gradient-to-r from-indigo-500 sm:text-4xl">{{ title }}</h3>
                    <p class="text-base">{{ explanation }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
    data() {
        return {
            loading: true,
            apod: 'APOD: Astronomy Picture of the Day',
            title: null,
            explanation: null,
            url: null,
            copyright: null,
            date: null,
            apodEndpoint: 'https://api.nasa.gov/planetary/apod?api_key=rpo5wzh8LQhqRBKBCGx7zykC3ncMqwyaByW2GU7o'
        }
    },
    methods: {
        async extractingData() {
            try {
                this.loading = true;
                const { title, explanation, url, copyright, date } = await fetchNasaData(this.apodEndpoint)
                this.title = title
                this.explanation = explanation
                this.url = url
                this.copyright = copyright
                this.date = date
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.loading = false;
            }
        }
    },

    async mounted() {
        await this.extractingData()
    }
}
</script>
