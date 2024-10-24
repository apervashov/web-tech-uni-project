import { createRouter, createWebHistory } from 'vue-router';
import CakeSection from "./components/SekciaZmena.vue"
import SekciaZmena from '../src/components/SekciaZmena.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: CakeSection,
  },
  {
    path: '/zmeny',
    name: 'zmeny',
    component: SekciaZmena,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
