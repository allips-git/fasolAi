import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import hicTest from '@/views/hic-test.vue'
import ssccTest from '@/views/sscc-test.vue'
import addTrainingData from '@/views/add-training-data.vue'
import viewTrainingData from '@/views/view-training-data.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),


  routes: [
    {
        path: '/',
        name: 'index',
        component: index
    },

    {
      path: '/hic-test',
      name: 'hic-test',
      component: hicTest
  },

  {
    path: '/sscc-test',
    name: 'sscc-test',
      component: ssccTest
  },

  {
    path: '/add-training-data',
    name: 'add-training-data',
    component: addTrainingData
  },

  {
    path: '/view-training-data',
    name: 'view-training-data',
    component: viewTrainingData
  },
  ]
});



export default router
