<template >
    <footer id="footer" class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                <div class="px-5 py-2">
                    <a :href="nasaApiDocLink" target="_blank" class="text-base text-gray-500 hover:text-gray-900">
                        NASA API Documentation
                    </a>
                </div>
            </nav>

            <p class="mt-8 text-center text-base text-gray-400">
                &copy; All copyrights and intellectual property rights belong to NASA. This site is not affiliated with or
                endorsed by NASA.
            </p>
            <p class="mt-8 text-center text-base text-gray-400">
                {{ year }} Adrián Catalán | Web Development & Graphic Design
            </p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'FooterShared',
    data() {
        return {
            year: null,
            nasaApiDocLink: 'https://api.nasa.gov/'
        }
    },
    methods: {
        getYear() {
            this.year = new Date().getFullYear()
        }
    },
    mounted() {
        this.getYear()
    }

}
</script>
