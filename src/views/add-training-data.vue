<template>
    <main class="p-8 bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto">
        <div class="flex flex-col justify-center">
            <router-link to="/">
                <Button class="flex-auto" icon="pi pi-angle-left" size="small" iconPos="left" label="홈으로 돌아가기" />
            </router-link>
            <h1 class="mx-auto my-0 block text-3xl font-bold mb-2 mt-12">
                <span class="text-blue-500">학습 데이터 추가</span>
            </h1>         
            <div class="bg-white dark:bg-gray-800 max-w-[1080px] self-center w-full p-8 mt-6 rounded-xl">
                <AddSelect />
                <div class="flex flex-col gap-10 mt-10">
                    <!-- <div class="flex flex-col gap-2">
                        <h1 class="text-xl font-bold text-blue-500">테스트 유형</h1>
                        <SelectButton v-model="learning['info']['leGb']" :options="options" aria-labelledby="basic" optionLabel="name" optionValue="value"/>
                    </div> -->
                    <div class="flex flex-col gap-3">
                        <h1 class="text-xl font-bold text-blue-500">테스트 데이터</h1>
                        <ul class="grid grid-cols-2 gap-4">
                            <li>
                                <label>H₂S (%)</label>
                                <InputNumber v-model="learning['info']['h2s']" class="w-full" />
                            </li>
                            <!-- <li>
                                <label>CO₂ (%)</label>
                                <InputNumber v-model="learning['info']['co2']" class="w-full" />
                            </li> -->
                            <li>
                                <label>pH</label>
                                <InputNumber v-model="learning['info']['ph']" class="w-full" />
                            </li>
                            <!-- <li>
                                <label>CH₃COOH (%)</label>
                                <InputNumber v-model="learning['info']['cooh']" class="w-full" />
                            </li>
                            <li>
                                <label>CH₃COONa (%)</label>
                                <InputNumber v-model="learning['info']['coona']" class="w-full" />
                            </li>
                            <li>
                                <label>NaCl (g)</label>
                                <InputNumber v-model="learning['info']['naci']" class="w-full" />
                            </li>
                            <li>
                                <label>증류수 (g)</label>
                                <InputNumber v-model="learning['info']['water']" class="w-full" />
                            </li>
                            <li>
                                <label>Test (시간)</label>
                                <InputNumber v-model="learning['info']['time']" class="w-full" />
                            </li> -->
                        </ul>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h1 class="text-xl font-bold text-blue-500">조성값</h1>
                        <ul class="grid grid-cols-7 gap-4">
                            <li class="*:py-1">
                                <label>C</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Si</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Mn</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>P</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>S</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>AI</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Nb</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Ti</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>V</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Cr</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Mo</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>Ca</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>B</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                            <li class="*:py-1">
                                <label>N</label>
                                <InputNumber v-model="em" class="*:w-full" />
                            </li>
                        </ul>
                    </div>
 
                    <div class="flex flex-col gap-2">
                        <!-- <h1 class="text-xl font-bold text-blue-500">테스트 결과</h1>
                        <Select v-model="learning['info']['result']" placeholder="선택하세요" :options="result" optionLabel="name" optionValue="value"/> -->
                        <Button class="w-full mt-8" :disabled="status" label="저장하기" size="large" @click="getResult"></Button>
                    </div>
                </div>
            </div> 
        </div>
    </main>
</template>

<script setup lang="ts">
import Select from 'primevue/select';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import AddSelect from '@/components/AddSelect.vue';
import SelectButton from 'primevue/selectbutton';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useLearningStore } from '@/store/modules/learning';
import { useSteelStore } from '@/store/modules/steel';
import axios from 'axios';

const options  = ref([{ name : 'HIC 테스트', value : 'H'}, { name : 'SSCC 테스트', value : 'S' }]);
const result   = ref([{ name : '통과', value : 'Y' }, { name : '실패', value : 'N' }]);
const status   = ref(false);

const learning = useLearningStore();
const steel    = useSteelStore();

const getResult = async () => {
    if(steel['stCd'] === '')
    {
        alert('강종을 선택해주세요. 강종이 없을 시 새 강종을 추가해주세요.');
        return false;
    }
    
    const params = {
        stCd   : steel['stCd'],
        leGb   : learning['info']['leGb'],
        h2s    : learning['info']['h2s'] ? learning['info']['h2s'] : 0,
        co2    : learning['info']['co2'] ? learning['info']['co2'] : 0,
        ph     : learning['info']['ph'] ? learning['info']['ph'] : 0,
        cooh   : learning['info']['cooh'] ? learning['info']['cooh'] : 0,
        coona  : learning['info']['coona'] ? learning['info']['coona'] : 0,
        naci   : learning['info']['naci'] ? learning['info']['naci'] : 0,
        water  : learning['info']['water'] ? learning['info']['water'] : 0,
        time   : learning['info']['time'] ? learning['info']['time'] : 0,
        result : learning['info']['result']
    }

    status.value = true;

    try
    {
        await axios.put('https://fasolai.allips.kr/learning/insertdata', params);
        await learning.getReset();
        alert('학습 데이터가 추가되었습니다');
        visible.value = false;
    }
    catch(e)
    {
        console.log(e);
        alert('학습 데이터 추가에 실패하였습니다. 지속될 경우 관리자에게 문의하세요.');
    }

    status.value = false;
}

onMounted(() => {
    learning.getReset();
})
</script>

<style>
/* 스타일이 필요한 경우 여기에 추가 */
</style>
