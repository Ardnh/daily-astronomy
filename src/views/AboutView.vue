<template>
  <div class="mx-10 my-20">
    <div class="w-fit mx-auto">
      <div class="font-nunito text-gray-800 ml-4 font-bold text-xl text-center">Technology used in this application</div>
      <div class="flex flex-wrap justify-center my-10 w-fit mx-auto">
        <div v-for="item in techList" :key="item.id" @click="openUrl(item.url)" class="flex justify-center cursor-pointer hover:bg-gray-300 rounded-lg mx-4 my-4 px-5 py-3 items-center bg-gray-200">
          <img class="w-16 h-16" :src="item.image">
          <div class="ml-3 font-montserrat text-lg font-bold text-gray-800">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="w-fit mx-auto">
      <div class="font-nunito text-center text-gray-800 ml-4 font-bold text-xl">API Powered By</div>
      <div class="flex justify-center my-10 w-fit mx-auto">
        <div @click="openUrl(apiProvider.url)" class="flex justify-center cursor-pointer hover:bg-gray-300 rounded-lg mx-4 px-5 py-3 items-center bg-gray-200">
          <img class="w-16 h-16" :src="apiProvider.image">
          <div class="ml-3 font-montserrat text-lg font-bold text-gray-800">{{ apiProvider.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"


const vueLogo = new URL('../../../public/vue.svg', import.meta.url).href
const viteLogo = new URL('../../../public/vite.svg', import.meta.url).href
const piniaLogo =  new URL('../../../public/pinia.svg', import.meta.url).href
const nasaLogo = new URL('../../../public/nasa.svg', import.meta.url).href

const techList= ref([
  {
    id: '1',
    image: vueLogo,
    text: 'Vue Js',
    url: 'https://vuejs.org/'
  },
  {
    id: '2',
    image: vueLogo,
    text: 'Vue Router',
    url: 'https://router.vuejs.org/'
  },
  {
    id: '3',
    image: viteLogo,
    text: 'Vite Js',
    url: 'https://vitejs.dev/'
  },
  {
    id: '4',
    image: piniaLogo,
    text: 'Pinia',
    url: 'https://pinia.vuejs.org/'
  }
])

const apiProvider =  reactive({
  image: nasaLogo,
  text: 'Nasa',
  url: 'https://api.nasa.gov/'
})

const openUrl = (url) => {
  window.open(url)
}

</script>

<style setup>
.font-montserrat {
    font-family: 'Montserrat';
}
.font-nunito {
    font-family: 'Nunito';
}
</style>