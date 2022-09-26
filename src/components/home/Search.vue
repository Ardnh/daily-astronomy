<template>
    <div>
        <div class="text-center font-nunito font-bold text-2xl">Search Something About Space</div>
        <div class=" flex justify-center">
            <form @submit.prevent="search" class="my-10 px-16 py-7 bg-gray-300 rounded-xl" >
                <input v-model="searchInput" type="text" class="rounded-xl bg-white border-0" style="width: 300px;" placeholder="ex: Jupiter">
                <button type="submit" :class="searchInput.length === 0 ? '' : 'hover:bg-gray-800'" :disabled="searchInput.length === 0 ? true : false" class="ml-5 bg-gray-700 px-5 py-2 text-white rounded-lg">Search</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useHomeStore } from '../../stores/homeStore'

const { searchSpace } = useHomeStore()
const searchInput =  ref('')
const isActive = ref(true)

const search = () => {
    searchSpace(searchInput)
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