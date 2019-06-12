import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import { getToken } from '@/util/auth' // get token from cookie
import { getPageTitle } from '@/util/getPageTitle'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 白名单，任何人都可以访问
const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            // determine whether the user has obtained his permission roles through getInfo
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    // get user info
                    // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
                    const { roles } = await store.dispatch('user/getInfo')
                    // generate accessible routes map based on 
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    // dynamically add accessible routes
                    router.addRoutes(accessRoutes)

                    // hack method to ensure that addRoutes is complete
                    // set the replace: true, so the navigation will not leave a history record
                    next({ ...to, replace: true })
                } catch (error) {
                    // 删除token 并跳转登陆页面
                    await store.dispatch('user/resetToken')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        // 如果没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在白名单内，可以直接访问
            next()
        } else {
            // 不在白名单内，重定向到登陆页面
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // 路由结束后，停止进度条
    NProgress.done()
})
