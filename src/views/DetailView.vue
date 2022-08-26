<template>
  <div class="flex flex-col justify-center w-full px-10 sm:px-28 md:px-56 py-24">

    <div class="bg-white">
      <el-image
          v-if="latestApod.media_type === 'image'"
          class="rounded-lg h-96 w-full object-cover"
          :src="latestApod.url"
          :preview-src-list="[latestApod.url]"
          fit="cover"
        />
      <!-- <img class="rounded-lg h-96 w-full object-cover" v-if="latestApod.media_type === 'image'" :src="latestApod.url"> -->
      <iframe v-else class="w-full rounded-lg" height="500" :src="latestApod.url" frameborder="0"></iframe>
    </div>

    <div class="text-sm text-gray-500 mt-10 font-medium font-montserrat">{{ latestApod.date }}</div>

    <div class="text-3xl my-3 text-gray-700 font-bold font-montserrat">
      {{ latestApod.title }}
    </div>

    <div class="text-lg text-justify text-gray-800 font-medium font-montserrat">
      {{ latestApod.explanation }}
    </div>

  </div>

</template>

<script setup>
import { onBeforeMount} from 'vue'
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../stores/homeStore'

const { latestApod } = storeToRefs(useHomeStore())
const { fetchLatestApod } = useHomeStore()


onBeforeMount(() => 
  Object.keys(latestApod.value).length === 0 ? fetchLatestApod() : ''
)


</script>

<style scoped>
.font-montserrat {
    font-family: 'Montserrat';
}
</style>