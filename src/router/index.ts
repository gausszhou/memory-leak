import { createRouter, createWebHistory } from 'vue-router';  

export const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: () => import('@/views/Home.vue'),
  },
];  

const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  

export default router;