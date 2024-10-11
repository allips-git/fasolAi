<template>
    <header class="w-full border-b border-gray-100 bg-white flex items-start pt-4 px-5 relative z-0 dark:border-zinc-700 dark:bg-zinc-900">
        <div v-if="showTitle" class="flex items-center">
            <h1 class="font-bold">{{ title }}</h1>
            <div class="w-px h-3 bg-gray-200  mx-4"></div>
        </div>
    <ul class="flex gap-4 h-full  text-900 surface-ground">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{ 'border-b-2 border-indigo-600 text-indigo-600 font-bold dark:text-indigo-400 dark:border-indigo-400': isActiveTab(tab.path) }" 
      >
        <router-link 
          :to="tab.path" 
          @click.native="setActiveTab(tab.path)"
          class="block pb-5 w-full h-full" 
        >
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
    </header>
</template>

<script setup lang="ts">

import { ref, computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  showTitle: {
    type: Boolean,
    default: true, // 기본값은 true로 설정
  },

});

const route = useRoute();
const activeTab = ref(route.path);

const setActiveTab = (path: string) => {
  activeTab.value = path;
};

const isActiveTab = (path: string) => {
  return activeTab.value === path || route.path === path;
};

// 탭 클릭 시 활성화된 탭을 부모 컴포넌트에 업데이트
const handleTabClick = (path: string) => {
  emit('update:activeTab', path);
};

</script>