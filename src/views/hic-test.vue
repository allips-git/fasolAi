<template>
    <main class="p-8 bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto">
        
        <div class="flex flex-col justify-center">
            <router-link to="/">
                <Button class="flex-auto" icon="pi pi-angle-left" size="small" iconPos="left" label="홈으로 돌아가기" />
            </router-link>
            <h1 class="mx-auto my-0 block text-3xl font-bold mb-2 mt-12"><span class="text-blue-500">HIC 테스트 예측</span></h1>
            <div class="bg-white dark:bg-gray-800 max-w-[1080px] self-center w-full flex flex-col gap-10 *:gap-3 p-8 mt-6 rounded-xl">
                <div class="max-w-[500px]">
                    <AddSelect/>
                </div>
                <ul class="grid grid-cols-2 gap-2 *:flex *:flex-col *:gap-2">
                    <li>
                        <label for="">H₂S (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <!-- <li>
                        <label for="">CO₂ (%)</label>
                        <InputNumber class="*:w-full"/>
                    </li> -->

                    <li>
                        <label for="">pH</label>
                        <InputNumber class="*:w-full"/>
                    </li>

                    <!-- <li>
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
                    </li> -->
                </ul>
                <div class="flex flex-col gap-3">
                    <h1 class="text-xl font-bold text-blue-500">조성 값</h1>
                    <!-- *:border *:border-blue-500 *:rounded-md *:text-center -->
                        <ul class="grid grid-cols-[repeat(14,minmax(0,1fr))] rounded-lg *:border-[0.5px] *:border-gray-700 text-sm text-center">
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">C</p>
                                <p>0.1206</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Si</p>
                                <p>0.211</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Mn</p>
                                <p>1.213</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">P</p>
                                <p>0.0065</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">S</p>
                                <p>0.0007</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">AI</p>
                                <p>0.030</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Nb</p>
                                <p>0.052</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Ti</p>
                                <p>0.036</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">V</p>
                                <p>0.004</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Cr</p>
                                <p>0.37</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Mo</p>
                                <p>0.21</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">Ca</p>
                                <p>0.0014</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">B</p>
                                <p>0.0002</p>
                            </li>
                            <li class="*:py-1">
                                <p class="border-b border-gray-900 bg-gray-100 dark:bg-gray-900">N</p>
                                <p>0.0042</p>
                            </li>
                        </ul>
                    </div>
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
import AddSelect from '@/components/AddSelect.vue';

const visible = ref()

</script>