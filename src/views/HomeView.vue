<template>
    <div>
        <section class="bg-white w-full">
            <Hero/>
        </section>
        <section class="">
            <Discover/>
        </section>
        <section>
            <RandomNews/>
        </section>
        <section>
            <Search/>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Hero from '../components/home/Hero.vue'
import Discover from '../components/home/Discover.vue'
import RandomNews from '../components/home/RandomNews.vue'
import Search from '../components/home/Search.vue'
import { useHomeStore } from '../stores/homeStore'

const { fetchLatestApod, fetchRandomNews } = useHomeStore()
onMounted(() => {
    fetchLatestApod()
    fetchRandomNews()
})



</script>

<style>

</style>