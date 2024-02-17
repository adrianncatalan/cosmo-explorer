<template>
donki shit
</template>

<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
  data() {
    return {
      loading: true,
      asteroids: [],
      earthEndpoint: 'https://api.nasa.gov/planetary/earth/imagery'
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