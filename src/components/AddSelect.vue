<template>
    <div class="flex gap-5 w-full  self-center mt-3">
        <Select class="w-full" placeholder="강종 선택"></Select>
        <Button class="flex-none" icon="pi pi-plus" iconPos="left" label="새 강종 추가" @click="visible = true"/>
    </div>

<Dialog v-model:visible="visible" modal header="새 강종 추가" :style="{ width: '25rem' }">
    
    <div class="flex items-center gap-4 mb-4">
        <InputText id="username" class="flex-auto" autocomplete="off" placeholder="새 강종 이름을 입력해주세요." />
    </div>

    <div class="flex justify-end gap-2">
        <Button type="button" label="취소" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="추가" @click="visible = false"></Button>
    </div>
</Dialog>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

const visible = ref(false)

</script>