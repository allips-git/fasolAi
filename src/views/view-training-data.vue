<template>
    <main class="p-8 max-w-[1920px] mx-auto flex flex-col justify-center items-center">
        
        <div class="flex flex-col justify-center max-w-[1000px] w-full">
            <router-link to="/">
                <Button class="flex-auto" icon="pi pi-angle-left" size="small" iconPos="left" label="홈으로 돌아가기" />
            </router-link>
            <h1 class="mx-auto my-0 block text-3xl font-bold mb-2 mt-12"><span class="text-blue-500">학습 데이터 조회</span></h1>
        </div>
        <div class="bg-white dark:bg-gray-800 max-w-[1920px] self-center w-full *:gap-3 p-4 mt-6 rounded-xl pt-0">
            <div class="my-4 flex justify-between items-center w-full">
                <div class="flex flex-col gap-2">
                    <SelectButton v-model="learning['search']['leGb']" :options="options" aria-labelledby="basic" optionLabel="name" optionValue="value"/>
                </div>
                <div class="w-96">
                    <AddSelect/>
                </div>
            </div>
            <DataTable :value="learning['list']" tableStyle="min-width: 50rem">
                <Column class="min-w-min whitespace-nowrap" field="stNm" header="강종"></Column>
                <Column class="min-w-min whitespace-nowrap" field="leGb" header="테스트유형"></Column>
                <Column class="min-w-min whitespace-nowrap" field="h2s" header="H₂S (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="co2" header="CO₂ (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="ph" header="pH"></Column>
                <Column class="min-w-min whitespace-nowrap" field="cooh" header="CH₃COOH (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="coona" header="CH₃COONa (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="nacl" header="NaCl (g)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="water" header="증류수 (g)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="time" header="Test (시간)"></Column>
                <Column field="result" header="결과" class="min-w-min whitespace-nowrap"></Column>
                <Column field="delete" header="삭제">
                    <template #body="{ data }">
                        <div class="flex items-center min-w-min ">
                            <Button class="flex-none" label="삭제" @click="getDelete(data.leCd)"></Button>
                        </div>
                    </template>
                </Column>
                <template #empty> 
                    <p class="w-full text-center py-20">데이터가 없습니다.</p>
                </template>
            </DataTable>
            <div ref="scrollContainer"></div>
        </div>
    </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import AddSelect from '@/components/AddSelect.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useLearningStore } from '@/store/modules/learning';
import { useInfiniteScroll } from '@vueuse/core';
import axios from 'axios';

const options           = ref([{ name : 'HIC 테스트', value : 'H'}, { name : 'SSCC 테스트', value : 'S' }]);
const learning          = useLearningStore();
const isLoading         = ref(false);
const scrollContainer   = ref(null);

const getList = async () => {
    isLoading.value = true;
    const result = await learning.getList();

    if(result === 'more')
    {
        isLoading.value = false;
    }
}

const getDelete = async (leCd: string) => {
    const confirm = window.confirm('삭제하시겠습니까?');

    if(confirm)
    {
        const params = {
            leCd : leCd
        };

        try
        {
            await axios.delete('https://fasolai.allips.kr/learning/deleteData', params);
            await learning.getReset();
            await getList();
            alert('삭제되었습니다.');
        }
        catch(e)
        {
            console.log(e);
            alert('학습 데이터 삭제에 실패하였습니다. 지속될 경우 관리자에게 문의하세요.');
        }
    }
}

onMounted(async () => {
    await learning.getReset();
    await getList();
});

useInfiniteScroll(scrollContainer, async () => {
    if (!isLoading.value) 
    {
        await learning.getAddNum();
        await getList();
    }
});

</script>

<style>
.p-datatable-header-cell{
    background:var(--p-blue-500);
    color: var(--p-stone-50);
}
</style>