import { ref } from 'vue';
import { fetchNasaData } from '@/modules/shared/services/nasaApiService.js';

export function useNasaData() {
    const loading = ref(true);
    const error = ref(null);

    async function fetchData(url, onSuccess) {
        try {
            const data = await fetchNasaData(url);
            onSuccess(data);
        } catch (err) {
            error.value = 'Failed to load data. Please try again later.';
            console.error(err);
        } finally {
            loading.value = false;
        }
    }

    return { loading, error, fetchData };
}