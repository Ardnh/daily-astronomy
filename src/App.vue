<template>
  <base-navbar></base-navbar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import BaseNavbar from './components/common/BaseNavbar.vue'

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
