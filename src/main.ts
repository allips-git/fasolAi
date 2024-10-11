import './assets/main.css';
import './assets/primevue_custom.scss'
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';  // optional
import Row from 'primevue/row';                 // optional

const app = createApp(App);

const MyPreset = definePreset(Aura, {

    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
    },
   
    
});



app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark', // 다크 모드 선택기
        }
    }
});
;

app.use(router);
app.mount('#app');

// 페이지가 로드될 때 다크 모드 클래스를 제거하여 항상 라이트 모드로 유지
document.querySelector('html').classList.remove('dark');

