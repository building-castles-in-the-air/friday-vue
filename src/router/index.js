import Vue from 'vue'
import router from 'vue-router'
import {login,home} from '@/page/'

Vue.use(router)

export default new router({
    routes:[
        {
            path:'/',
            name: 'home',
            component: home
        },
        {
            path:'/login',
            name: 'login',
            component: login
        }
    ]
})