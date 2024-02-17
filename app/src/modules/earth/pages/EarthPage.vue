<template>
    Earth page
</template>
    
<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
    data() {
        return {
            loading: true,
            asteroids: [],
            earthEndpoint: 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01'
        }
    },
    methods: {
        async extractingData() {
            try {
                const response = await fetchNasaData(this.earthEndpoint);
                console.log(response)
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