<template>
    <header class="bg-white h-[60px] border-b border-gray-100 shadow-sm flex justify-center relative dark:bg-gray-950 dark:border-zinc-700">
        <div class="flex justify-between items-center px-8 max-w-[1200px] w-full">
            <div class="flex gap-2 items-center text-blue-500">
                <router-link to="/">
                    <p class="text-2xl font-black">Fasol AI Predictor</p>
                </router-link>
            </div>
            <ul class="flex  text-base gap-5 font-bold">
                <li>
                    <router-link class="hover:text-blue-500" to="/hic-test">HIC Test</router-link>
                </li>
                <li>
                    <router-link class="hover:text-blue-500" to="/sscc-test">SSCC Test</router-link>
                </li>
                <li>
                    <router-link class="hover:text-blue-500" to="/add-training-data">Add Data</router-link>
                </li>
                <li>
                    <router-link class="hover:text-blue-500" to="/view-training-data">View Data</router-link>
                </li>
            </ul>
            <Button 
                :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'" 
                severity="secondary" 
                outlined 
                size="small" 
                @click="toggleDarkMode()"
            />   
        </div>
    </header>
    </template>
    
    <script setup lang="ts">
    import 'primeicons/primeicons.css';
    import Button from 'primevue/button';
    import { ref } from 'vue';
    
    const isDarkMode = ref(false);
    
    function toggleDarkMode() {
        const element = document.querySelector('html');
        element.classList.toggle('dark');
        isDarkMode.value = !isDarkMode.value; // 다크 모드 상태 토글
    }
    </script>
    
    <style>
    /* 필요시 추가 스타일 */
    </style>
    