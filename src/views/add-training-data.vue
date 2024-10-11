<template>
    <main class="p-8 bg-gray-50 dark:bg-gray-900 max-w-[1000px] mx-auto">
        <div class="flex flex-col justify-center">
            <router-link to="/">
                <Button class="flex-auto" icon="pi pi-angle-left" size="small" iconPos="left" label="홈으로 돌아가기" />
            </router-link>
            <h1 class="mx-auto my-0 block text-3xl font-bold mb-2 mt-12">
                <span class="text-blue-500">학습 데이터 추가</span>
            </h1>         
            <div class="bg-white dark:bg-gray-800 max-w-[1000px] self-center w-full p-8 mt-6 rounded-xl">
                <AddSelect />
                <div class="flex flex-col gap-10 mt-10">
                    <div class="flex flex-col gap-2">
                        <h1 class="text-xl font-bold text-blue-500">테스트 유형</h1>
                        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="text-xl font-bold text-blue-500">테스트 데이터</h1>
                        <ul class="grid grid-cols-4 gap-2">
                            <li>
                                <label for="name">H₂S (%)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">CO₂ (%)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">pH</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">CH₃COOH (%)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">CH₃COONa (%)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">NaCl (g)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">증류수 (g)</label>
                                <InputNumber class="w-full" />
                            </li>
                            <li>
                                <label for="">Test (시간)</label>
                                <InputNumber class="w-full" />
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="text-xl font-bold text-blue-500">테스트 결과</h1>
                        <Select v-model="selectTestResult" placeholder="선택하세요" :options="testResult"/>
                        <Button class="w-full mt-8" label="예측하기" size="large"></Button>
                    </div>
                </div>
            </div> 
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import AddSelect from '@/components/AddSelect.vue';
import SelectButton from 'primevue/selectbutton';

const visible = ref(false);

// 테스트 유형
const value = ref('HIC 테스트');
const options = ref(['HIC 테스트', 'SSCC 테스트']);


const selectTestResult = ref();
const testResult = ref(['통과', '실패']);
</script>

<style>
/* 스타일이 필요한 경우 여기에 추가 */
</style>
