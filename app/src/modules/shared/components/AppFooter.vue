<template>
    <footer class="bg-slate-950">
        <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
                <div class="px-5 py-2">
                    <a :href="nasaApiDocLink" target="_blank" class="text-base text-gray-500 hover:text-gray-400">
                        NASA API Documentation
                    </a>
                </div>
            </nav>
            <p class="mt-8 text-center text-base text-gray-500">
                &copy; {{ copyrights }}
            </p>
            <p class="mt-8 text-center text-base text-gray-500">
                &copy; {{ currentYear }} {{ authorWebSite }}
            </p>
        </div>
    </footer>
</template>

<script setup>
const nasaApiDocLink = 'https://api.nasa.gov/';
const copyrights = 'All copyrights and intellectual property rights belong to NASA. This site is not affiliated with or endorsed by NASA.';
const authorWebSite = 'Adrián Catalán | Graphic Designer · Web Developer · Software Engineer';
const currentYear = new Date().getFullYear();
</script>