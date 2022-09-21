<template>
    <footer class="bg-gray-800 px-10 py-5 w-full">
        <div class="grid grid-cols-4 align-middle">
            <div>
                <div class="flex-shrink-0 flex items-center">
                    <img class="block mx-3 h-14 w-auto" :src="imageUrl" alt="Workflow">
                    <div class="text-2xl text-white font-light">DAILY ASTRO</div>
                </div>
                <div class="text-lg mt-2 text-gray-400 font-medium">Get in touch with space</div>
            </div>
            <div class="flex flex-col">
                <router-link class="text-md text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Home</router-link>
                <router-link class="text-md text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/discovery">Discovery</router-link>
                <router-link class="text-md text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/gallery">Gallery</router-link>
                <router-link class="text-md text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">About</router-link>
            </div>
            <div class="col-span-2 bg-slate-300">
                
            </div>
        </div>
    </footer>
</template>

<script setup>
const imageUrl = new URL('../../assets/logo2.svg', import.meta.url).href

</script>
