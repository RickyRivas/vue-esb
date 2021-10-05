import { createWebHistory, createRouter } from 'vue-router';
import HomeVue from '../components/pages/home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeVue
        }
    ]
})
export default router   