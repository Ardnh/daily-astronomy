<template>
  <div class="mx-20 my-5">
    <div class="flex flex-wrap py-4 items-center">
      <div class="mx-4 font-nunito text-2xl font-bold">News about space</div>
      <div class="flex flex-wrap items-center bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400 cursor-pointer">
        <img :src="refreshIcon" class="w-5 h-5">
        <div class="ml-3 font-nunito font-bold text-sm">refresh</div>
      </div>
    </div>
    <div class="my-7 flex flex-wrap">
      <div v-for="(item, i) in randomNews" :key="i" class="w-60 h-80 object-cover m-2" :style="`background-image: url( ${ item.url } ); border-radius:10px;`">
        <div class="w-full h-full" style="background: rgba(15, 23, 42, .8); border-radius: 10px">
          <div class="px-5 mb-3 pt-48 text-lg text-gray-200">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../../stores/homeStore'

const refreshIcon = new URL('../../assets/refresh.svg', import.meta.url).href
const { randomNews } = storeToRefs(useHomeStore())

</script>

<style scope>
.font-montserrat {
    font-family: 'Montserrat';
}
.font-nunito {
    font-family: 'Nunito';
}
</style>