import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '@/page/home/index'

/**
 * 所有人都可以访问的路由地址
 */
export const constantRouters = [
    {
        path: '/login',
        component: () => import('@/page/login/login')
    },
    {
        path: '/404',
        component: () => import('@/page/error/404')
    },
    {
        path: '/',
        component: HomePage,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/page/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }

        }]
    },
    {
        path: '*',
        redirect: '/404',
    }
]
/**
 * 需要判断用户角色的路由地址
 */
export const asyncRoutes = [
    
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouters
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router