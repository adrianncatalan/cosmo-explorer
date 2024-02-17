<template>
    <nav class="bg-slate-950">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between">
                <div class="flex-1 flex items-center justify-center sm:items-stretch
                sm:justify-start">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4 m-8">
                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'info' }">INFO</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'apod' }">APOD</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'neows' }">NEOWS</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'donki' }">DONKI</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'earth' }">EARTH</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'eonet' }">EONET</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'epic' }">EPIC</router-link>

                            <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                            hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium" :to="{ name: 'exoplanet' }">EXOPLANET</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 flex justify-center text-center
            flex-col">
                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'info' }">INFO</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'apod' }">APOD</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'neows' }">NEOWS</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'donki' }">DONKI</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'earth' }">EARTH</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'eonet' }">EONET</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'epic' }">EPIC</router-link>

                <router-link class="text-gray-300 hover:bg-gradient-to-r from-indigo-500
                hover:text-white block
                px-3 py-2 rounded-md text-base font-medium" :to="{ name: 'exoplanet' }">EXOPLANET</router-link>
            </div>
        </div>
    </nav>
</template>
