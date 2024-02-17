<template>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg p-12">
      <div>
        <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide">Asteroids NeoWs: Near Earth Object Web Service</span>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Physiological information
        </h3>
        <p class="mt-0 max-w-2xl text-sm text-gray-500">
          Here you can calculate your body mass index, body fat percentage, body bone mass, total body fat and total body muscle.
        </p>
      </div>
      <div class="mt-5 border-t border-gray-200">
        <dl class="divide-y divide-gray-200">
          <div v-if="loading" class="text-center mt-5">
            <p class="text-gray-500 h-56 w-full bg-gray-200 animate-pulse">Loading data...</p>
          </div>
          <div v-else v-for="asteroid in asteroids" :key="asteroid.id" class="py-4 sm:grid sm:py-5 sm:grid-cols-7 sm:gap-4">
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Name</p>
              <p>{{ asteroid.name }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Estimated Max. Diameter</p>
              <p>{{ asteroid.estimated_diameter.kilometers.estimated_diameter_max }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Estimated Min Diameter</p>
              <p>{{ asteroid.estimated_diameter.kilometers.estimated_diameter_min }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Orbit Class Description</p>
              <p>{{ asteroid.orbital_data.orbit_class_description }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Orbit Class Range</p>
              <p>{{ asteroid.orbital_data.orbit_class.orbit_class_range }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Absolute Magnitude (H)</p>
              <p>{{ asteroid.absolute_magnitude_h }}</p>
            </dt>
            <dt class="text-sm text-gray-500 text-center">
              <p class="font-medium">Potentially Hazardous Asteroid</p>
              <p>{{ asteroid.is_potentially_hazardous_asteroid }}</p>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchNasaData } from "../../shared/services/nasaApiService.js";
  
  export default {
    data() {
      return {
        loading: true,
        asteroids: [],
        neowsEndpoint: 'https://api.nasa.gov/neo/rest/v1/neo/browse'
      }
    },
    methods: {
      async extractingData() {
        try {
          const response = await fetchNasaData(this.neowsEndpoint);
          this.asteroids = response.near_earth_objects;
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
  