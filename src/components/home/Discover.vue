<template>
  <div class=" px-10 py-5 sm:px-20 sm:py-10 ">
      <div class="text-center font-bold font-montserrat text-3xl text-slate-700">Discover new knowledge about space</div>
      <div class="mt-10 bg-stone-100 p-5 rounded-lg">
        <div class="text-2xl font-montserrat font-bold px-5 text-center text-gray-700">Mars Rover Photos</div>
        <div class="text-lg font-nunito font-sm text-gray-500 mt-3 px-5 text-center" >The rover has seventeen camera "eyes." Some in rover navigation, while others perform science investigations, Each camera has an application-specific set of optics such as Engineering Camera, Science Camera and Descent Imagining Camera</div>
        <div class="flex flex-wrap mt-8 justify-center">
            <div 
              v-for="item in marsCameraList" 
              :key="item.id"
              @click="showDetail()"
              class="hover:bg-gray-700 shadow-xl cursor-pointer bg-gray-800 px-4 py-5 w-72 h-auto rounded-lg m-2"
            >
                <div class="text-lg font-bold text-slate-200 mb-8 mt-3 font-montserrat">{{ item.name }}</div>
                <div class="text-base font-nunito text-slate-400">{{ item.desc }}</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore } from '../../stores/homeStore'
import marsCamera from '../../utils/discovery'

const { fetchLatestApod } = useHomeStore()
const router = useRouter()
const marsCameraList = ref(marsCamera)

const goToDetail = (raw) => {
  console.log(raw)
}

</script>

<style scoped>
.font-montserrat {
    font-family: 'Montserrat';
}

.font-nunito {
    font-family: 'Nunito';
}
</style>