import { createWebHistory, createRouter } from 'vue-router';
import app from '../App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: app
        }
    ]
})
export default router   