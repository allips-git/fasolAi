<template>
    <div class="flex items-center gap-10 bg-white dark:bg-gray-800 max-w-[1000px] border border-blue-500 self-center w-full *:gap-3 p-8 mt-6 rounded-xl">
        <h1 class="text-xl font-bold text-blue-500">예측 결과</h1>
        <p class="text-xl font-bold text-white px-5 py-1 self-center rounded-md w-auto bg-green-500 ">성공</p>
        <p class="text-xl font-bold text-white px-5 py-1 self-center rounded-md w-auto bg-red-500 ">실패</p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';


</script>