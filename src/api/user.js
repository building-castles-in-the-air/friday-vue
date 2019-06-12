import request from '@/util/request'

export function login(data) {
    return request({
        url: '/sys/auth/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/sys/auth/info',
        method: 'post',
        token
    })
}

export function logout() {
    return request({
        url: '/sys/auth/logout',
        method: 'post'
    })
}