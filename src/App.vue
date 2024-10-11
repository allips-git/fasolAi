<template>
  <TopHeader/>
  <div class="min-h-[calc(100vh-120px)]">
    <RouterView />
  </div>
  <div class="h-[60px] w-full bg-white dark:bg-gray-950 flex  items-center justify-center">
<p class=" text-gray-400">© 2023 Fasol AI Predictor. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import SideHeader from '@/components/layout/SideHeader.vue'// 사이드바
import TopHeader from '@/components/layout/TopHeader.vue'; // 탑해더
import 'primeicons/primeicons.css';


</script>

<style lang="scss" scoped >

</style>
