<template>
  <base-navbar></base-navbar>
  <main>
    <router-view></router-view>
  </main>
  <base-footer></base-footer>
</template>

<script setup>
import BaseNavbar from './components/common/BaseNavbar.vue'
import BaseFooter from './components/common/BaseFooter.vue'

</script>

