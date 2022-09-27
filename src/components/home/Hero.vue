<template>
    <div class="px-20 py-10">
        
        <!-- <div class="flex justify-center p-5 rounded-lg">
            <div class="flex-1 ">
                <img class="shadow-2xl h-96 w-full rounded-xl" src="https://apod.nasa.gov/apod/image/2208/MeteorM31_hemmerich_1948.jpg" >
            </div>
            <div class="flex-1 ml-4 shadow-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-black rounded-lg p-5">
                <div class="text-3xl pt-5 text-blue-400 font-medium font-montserrat">Astronomy Picture of The Day</div>
                <div class="mt-20 text-3xl text-gray-200 font-bold font-montserrat">Meteor before Galaxy</div>
                <div class="text-base text-gray-200 font-light font-montserrat">2022-08-07</div>
            </div>
        </div> -->

        <div class="flex justify-center p-5 rounded-lg">
            <div class="flex-1">
                <!-- <img class="shadow-2xl h-96 w-full rounded-xl" src="https://apod.nasa.gov/apod/image/2208/MeteorM31_hemmerich_1948.jpg" > -->
                <div v-if="getLatestApod.media_type === 'image'" @click="goToDetailView(getLatestApod.title)" :style="`background-image: url(${ getLatestApod.url }); border-radius:0.75rem`">
                    <div class="p-10 w-full cursor-pointer h-full rounded-xl" style="background: rgba(15, 23, 42, .8)">
                        <div>
                            <div class="text-3xl pt-2 text-slate-300 font-medium font-montserrat">Astronomy Picture of The Day</div>
                            <div class="mt-36 text-3xl text-gray-200 font-bold font-montserrat">{{ getLatestApod.title }}</div>
                            <div class="text-base text-gray-200 font-light font-montserrat">{{ getLatestApod.date }}</div>
                        </div>
                    </div>
                </div>
                <div v-else class="flex flex-none md:justify-between rounded-lg content-center">
                    <div>
                        <div class="text-2xl pt-2 text-slate-700 font-medium font-montserrat">Astronomy Video of The Day</div>
                        <div class="mt-20 text-4xl text-gray-600 font-bold font-montserrat">{{ getLatestApod.title }}</div>
                        <div class="text-sm text-gray-500 font-medium font-montserrat">{{ getLatestApod.date }}</div>
                        <button @click="goToDetailView(getLatestApod.title)" class="hover:bg-slate-700 mt-5 font-medium px-4 py-2 bg-slate-800 text-white font montserrat border-none rounded-lg">Learn more</button>
                    </div>
                    <iframe class="w-1/2 h-80 rounded-lg" :src="getLatestApod.url" frameborder="0"></iframe>
                </div>

            </div>
            <!-- <div class="flex-1 ml-4 shadow-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-black rounded-lg p-5">
                <div class="text-3xl pt-5 text-blue-400 font-medium font-montserrat">Astronomy Picture of The Day</div>
                <div class="mt-20 text-3xl text-gray-200 font-bold font-montserrat">Meteor before Galaxy</div>
                <div class="text-base text-gray-200 font-light font-montserrat">2022-08-07</div>
            </div> -->
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useHomeStore } from '../../stores/homeStore'

const router = useRouter()
const store = useHomeStore()
const { getLatestApod } = storeToRefs(useHomeStore())


const goToDetailView = (title) => {
    let titleModification = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    store.goToDetail('latestApod')
    router.push({ name: 'detail', params: { slug: titleModification }})
}

</script>

<style scoped>
.font-montserrat {
    font-family: 'Montserrat';
}
</style>