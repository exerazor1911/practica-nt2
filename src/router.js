import Vue from 'vue'
import VueRouter from 'vue-router'

import Pagos from './components/Pagos.vue'
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [
        {path: '/pagos', component: Pagos},
        {path: '/respuestas', component: Respuestas},
    ]
}) 