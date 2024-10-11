<template>
    <main class="p-8 bg-gray-50 dark:bg-gray-900 max-w-[1000px] mx-auto">
        
        <div class="flex flex-col justify-center">
            <router-link to="/">
                <Button class="flex-auto" icon="pi pi-angle-left" size="small" iconPos="left" label="홈으로 돌아가기" />
            </router-link>
            <h1 class="mx-auto my-0 block text-3xl font-bold mb-2 mt-12"><span class="text-blue-500">HIC 테스트 예측</span></h1>
            
            <div class="bg-white dark:bg-gray-800 max-w-[1000px] self-center w-full *:gap-3 p-8 mt-6 rounded-xl">
                <ul class="grid grid-cols-3 gap-2 *:flex *:flex-col *:gap-2">
                    <li>
                        <label for="">H₂S (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">CO₂ (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">pH</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">CH₃COOH (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">CH₃COONa (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">NaCl (g)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">증류수 (g)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <li>
                        <label for="">Test (시간)</label>
                        <InputNumber class="*:w-full"/>
                    </li>
                </ul>
                <Button class="w-full mt-8" label="예측하기" size="large"></Button>
            </div>
        </div>
        <PredictionResult/>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import { RouterLink } from 'vue-router';
import PredictionResult from '@/components/PredictionResult.vue';

const visible = ref()

</script>