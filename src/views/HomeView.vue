<template>
    <div>
        <section class="bg-white w-full">
            <Hero/>
        </section>
        <section class="">
            <Discover/>
        </section>
    </div>
</template>

<script setup>
import Hero from '../components/home/Hero.vue'
import Discover from '../components/home/Discover.vue'
import { useHomeStore } from '../stores/homeStore'

const { fetchLatestApod } = useHomeStore()
fetchLatestApod()
</script>

<style>

</style>