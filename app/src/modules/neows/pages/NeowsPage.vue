<template>
    <div>
        NeoWs page
    </div>
</template>

<script>
import { fetchNasaData } from "../../shared/services/nasaApiService.js";

export default {
   
    methods: {

    },

    created() {
        console.log(fetchNasaData('https://api.nasa.gov/neo/rest/v1/neo/browse'))
    }
}
</script>
<style lang="">
    
</style>