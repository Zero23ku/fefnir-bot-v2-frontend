<template>
  <header>
      <HeaderDashboard/>
  </header>
  <div class="grid grid-cols-6 h-screen">
      <div class="bg-violet-500 h-full">
          <LeftMenuDashboard/>
      </div>
      <div class="col-span-5 bg-indigo-400 h-full p-10">
          <RouterView/>
      </div>
  </div>
  <footer>
      <FooterDashboard/>
  </footer>
</template>
<script setup>
  import FooterDashboard from "./components/FooterDashboard.vue";
  import HeaderDashboard from "./components/HeaderDashboard.vue";
  import LeftMenuDashboard from "./components/LeftMenuDashboard.vue";
  import { RouterView } from 'vue-router'
</script>
<style lang="">
  
</style>