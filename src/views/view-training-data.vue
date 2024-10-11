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
                    <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
                </div>
                <div class="w-96">
                    <AddSelect/>
                </div>
            </div>
            <DataTable :value="products" paginator :rows="5" tableStyle="min-width: 50rem">
            <Column class="min-w-min whitespace-nowrap" field="em" header="강종"></Column>
                <Column class="min-w-min whitespace-nowrap" field="testType" header="테스트유형"></Column>
                <Column class="min-w-min whitespace-nowrap" field="h2s" header="H₂S (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="co2" header="CO₂ (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="ph" header="pH"></Column>
                <Column class="min-w-min whitespace-nowrap" field="ch3h" header="CH₃COOH (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="ch3na" header="CH₃COONa (%)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="nacl" header="NaCl (g)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="g" header="증류수 (g)"></Column>
                <Column class="min-w-min whitespace-nowrap" field="time" header="Test (시간)"></Column>
                <Column field="result" header="결과" class="min-w-min whitespace-nowrap"></Column>
                <Column field="" header="">
                    <template #body="{ data }">
                    <div class="flex items-center min-w-min ">
                        <Button class="flex-none" label="삭제" ></Button>
                    </div>
                </template>
                
                </Column>
            </DataTable>
        </div>
        
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import AddSelect from '@/components/AddSelect.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref<Product[]>([]);
// 테스트 유형
const value = ref('HIC 테스트');
const options = ref(['HIC 테스트', 'SSCC 테스트']);

const ProductService = {
    getProductsData(): Product[] {
        return [
            {
                em: '11',
                testType: 'HIC',
                h2s: '11',
                co2: '11',
                ph: '11',
                ch3h: '11',
                ch3na: '11',
                nacl: '11',
                g: '11',
                time: '1',
                result: '성공',
            },          
        ];
    },
    getProductsMini(): Promise<Product[]> {
        return Promise.resolve(this.getProductsData().slice(0, 50));
    },
};

onMounted(() => {
    
    ProductService.getProductsMini().then((data) => {
        products.value = data;
  
    })
});

</script>

<style>
.p-datatable-header-cell{
    background:var(--p-blue-500);
    color: var(--p-stone-50);
}
</style>