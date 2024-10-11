<template>
    <div class="flex gap-5 w-full  self-center mt-3">
        <Select class="w-full" placeholder="강종 선택" v-model="steel['stCd']" :options="steel['list']" optionLabel="stNm" optionValue="stCd"></Select>
        <Button class="flex-none" icon="pi pi-plus" iconPos="left" label="새 강종 추가" @click="getSteelPop"/>
    </div>
    <Dialog v-model:visible="visible" modal header="새 강종 추가" :style="{ width: '25rem' }">
        
        <div class="flex items-center gap-4 mb-4">
            <InputText id="stNm" v-model="steel['stNm']" class="flex-auto" autocomplete="off" placeholder="새 강종 이름을 입력해주세요." @keyup.enter="getResult"/>
        </div>

        <div class="flex justify-end gap-2">
            <Button type="button" label="취소" :disabled="status" severity="secondary" @click="visible=false"></Button>
            <Button type="button" label="추가" :disabled="status" @click="getResult"></Button>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { ref, onMounted } from 'vue';
import { useSteelStore } from '@/store/modules/steel';
import axios from 'axios';

const steel   = useSteelStore();
const visible = ref(false);
const status  = ref(false);

const getSteelPop = () => {
    visible.value = true;
    steel.getReset();
}

const getList = async () => {
    await steel.getList();
}

const getResult = async () => {
    if(steel['stNm'] === '')
    {
        alert('강종 이름을 입력하세요.');
        return false;
    }

    const params = {
        stNm : steel['stNm']
    }

    status.value = true;

    try
    {
        await axios.put('https://fasolai.allips.kr/steel/insertdata', params);
        await getList();
        alert('강종이 추가되었습니다');
        visible.value = false;
    }
    catch(e)
    {
        console.log(e);
        alert('새 강종 추가에 실패하였습니다. 지속될 경우 관리자에게 문의하세요.');
    }

    status.value = false;
}

onMounted(() => {
    steel.getReset();
    getList();
})
</script>