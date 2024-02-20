import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/views/HelloWorld'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', name: 'HelloWorld', component: HelloWorld }
    ]
})

createApp(App).use(router).mount('#app')
import "bootstrap"
