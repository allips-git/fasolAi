<template>
    <main class="p-8 bg-gray-50 dark:bg-gray-900 flex justify-center ic">
        <div class="p-8 flex flex-col justify-center max-w-[800px]">
            <h1 class="mx-auto my-0 block text-6xl font-bold mb-2 mt-12"><span class="text-blue-500">Fasol AI</span> Predictor</h1>
            <p class="mt-4 text-center text-lg text-gray-500 mb-5">정확하고 효율적인 HIC/SSCC 테스트 결과 예측으로 시간과 비용을 절약하세요.</p>
                <!-- 강종 추가 -->
                <AddSelect/>
            <ul class="grid grid-cols-2 *:flex *:flex-col *:items-center gap-5 w-[800px] *:rounded-lg self-center my-10">
                <li class="bg-white dark:bg-gray-800 shadow-md">
                    <router-link class="p-8 w-full h-full justify-center items-center flex flex-col" to="/hic-test">
                    <div class="rounded-full bg-blue-50 dark:bg-slate-900 h-20 w-20 flex justify-center items-center">
                        <span class="pi pi-chart-line text-blue-500 h-10 w-10 font-bold" style="font-size: 2.5rem"></span>
                    </div>
                    <p class="mt-3 text-lg font-semibold">HIC 테스트 예측</p>
                    </router-link>
                </li>

                <li class="bg-white dark:bg-gray-800 shadow-md">
                    <router-link class="p-8 w-full h-full justify-center items-center flex flex-col" to="/sscc-test">
                        <div class="rounded-full bg-blue-50 dark:bg-slate-900 h-20 w-20 flex justify-center items-center">
                            <span class="pi pi-sitemap text-blue-500 h-10 w-10 font-bold" style="font-size: 2.5rem"></span>
                        </div>
                        <p class="mt-3 text-lg font-semibold">SSCC 테스트 예측</p>
                    </router-link>
                </li>

                <li class="bg-white dark:bg-gray-800 shadow-md">
                    <router-link class="p-8 w-full h-full justify-center items-center flex flex-col" to="/add-training-data">
                        <div class="rounded-full bg-blue-50 dark:bg-slate-900 h-20 w-20 flex justify-center items-center">
                            <span class="pi pi-database text-blue-500 h-10 w-10 font-bold" style="font-size: 2.5rem"></span>
                        </div>
                        <p class="mt-3 text-lg font-semibold">학습 데이터 추가</p>
                    </router-link>
                </li> 

                <li class="bg-white dark:bg-gray-800 shadow-md">
                    <router-link class="p-8 w-full h-full justify-center items-center flex flex-col" to="/view-training-data">
                        <div class="rounded-full bg-blue-50 dark:bg-slate-900 h-20 w-20 flex justify-center items-center">
                            <span class="pi pi-search text-blue-500 h-10 w-10 !font-bold " style="font-size: 2.5rem"></span>
                        </div>
                        <p class="mt-3 text-lg font-semibold">학습 데이터 조회</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup lang="ts">
import AddSelect from '@/components/AddSelect.vue'
</script>