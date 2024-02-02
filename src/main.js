import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import Home from "@/views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import SzkloNaWymiar from "@/views/SzkloNaWymiar.vue";
import SzklanePanele from "@/views/SzklanePanele.vue";
import Float from "@/views/szklonawymiar/Float.vue";
import OptiWhite from "@/views/szklonawymiar/OptiWhite.vue";
import P404 from "@/views/P404.vue";
import Lacobel from "@/views/szklonawymiar/Lacobel.vue";


// blue: #0da3d1

const router = createRouter({
    history: createWebHistory('/71-glass'),
    routes: [
        {path: '/', component: Home},
        {path: '/szklo-na-wymiar', component: SzkloNaWymiar},
        {path: '/szklo-na-wymiar/float', component: Float},
        {path: '/szklo-na-wymiar/optiwhite', component: OptiWhite},
        {path: '/szklo-na-wymiar/lacobel', component: Lacobel},
        {path: '/szklane-panele', component: SzklanePanele},
        {path: '/:catchAll(.*)*', component: P404},
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
});

createApp(App)
    .use(router)
    .mount('#app')
