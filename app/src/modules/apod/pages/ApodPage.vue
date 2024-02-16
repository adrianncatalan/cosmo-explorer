<template lang="">
    <div>
        Apod page
    </div>
</template>
<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
   
    methods: {

    },

    created() {
        console.log(fetchNasaData('https://api.nasa.gov/planetary/apod'))
    }
}
</script>
<style lang="">
    
</style>