<template>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg p-12">
        <div>
            <h3 class="my-8 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 sm:text-4xl">
                Asteroids NeoWs: Near Earth Object Web Service
            </h3>
            <h3 class="text-lg mt-2 text-center leading-6 font-medium text-indigo-600">
                Earth orbiting asteroid information
            </h3>
        </div>
        <div class="mt-5 border-t border-gray-200">
            <div v-if="loading" class="text-center mt-5">
                <p class="text-gray-500">Loading data...</p>
            </div>
            <div v-else-if="error" class="text-center mt-5">
                <p class="text-red-500">{{ error }}</p>
            </div>
            <dl v-else class="divide-y divide-gray-200">
                <div
                    v-for="asteroid in asteroids"
                    :key="asteroid.id"
                    class="py-4 sm:grid sm:py-5 sm:grid-cols-7 sm:gap-4"
                >
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Name</p>
                        <p>{{ asteroid.name }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Estimated Max. Diameter (km)</p>
                        <p>{{ asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(4) }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Estimated Min. Diameter (km)</p>
                        <p>{{ asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(4) }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Orbit Class Description</p>
                        <p>{{ asteroid.orbital_data?.orbit_class.orbit_class_description }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Orbit Class Range</p>
                        <p>{{ asteroid.orbital_data?.orbit_class.orbit_class_range }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Absolute Magnitude (H)</p>
                        <p>{{ asteroid.absolute_magnitude_h }}</p>
                    </dt>
                    <dt class="text-sm text-gray-500 text-center">
                        <p class="font-medium">Potentially Hazardous</p>
                        <p>{{ asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No' }}</p>
                    </dt>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

const NEOWS_ENDPOINT = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=rpo5wzh8LQhqRBKBCGx7zykC3ncMqwyaByW2GU7o';

export default {
    data() {
        return {
            loading: true,
            error: null,
            asteroids: []
        };
    },
    async mounted() {
        try {
            const response = await fetchNasaData(NEOWS_ENDPOINT);
            this.asteroids = response.near_earth_objects;
        } catch (error) {
            this.error = 'Failed to load asteroid data. Please try again later.';
            console.error(error);
        } finally {
            this.loading = false;
        }
    }
};
</script>