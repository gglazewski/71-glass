import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import Home from "@/components/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import SzkloNaWymiar from "@/components/SzkloNaWymiar.vue";
import SzklanePanele from "@/components/SzklanePanele.vue";
import P404 from "@/views/P404.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/szklo-na-wymiar', component: SzkloNaWymiar},
        {path: '/szklane-panele', component: SzklanePanele},
        {path: '/:catchAll(.*)*', component: P404},
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
