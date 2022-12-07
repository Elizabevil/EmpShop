// 该文件专门用于创建整个应用的路由器

import {createRouter, createWebHashHistory} from "vue-router";
import {Token} from "../utils/Constant";

const indexChildren = [{
    path: "about",
    component: () => import('../pages/IndexPage.vue'),
}]
const goodsChildren = [{
    path: "details",
    component: () => import('../components/goods/GoodDetails.vue'),
}]

const routes = [{
    path: "/",
    redirect: "/login"
}, {
    path: "/login",
    name: "login",
    meta: {
        title: "登录",
        isShow: true,
        noCache: true // 不会被 <keep-alive> 缓存
    },
    component: () => import('../pages/Login.vue')
}, {
    path: "/index",
    name: "index",
    meta: {
        title: "主页",
        isShow: true,
        noCache: true // 不会被 <keep-alive> 缓存
    },
    component: () => import('../pages/IndexPage.vue'),
    children: [...indexChildren]
}, {
    path: "/goods",
    name: "goods",
    meta: {
        title: "goods",
        isShow: true,
        noCache: true // 不会被 <keep-alive> 缓存
    },
    component: () => import('../components/goods/GoodDetails.vue'),
    children: [...goodsChildren]
},

]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
// router.beforeEach((to, from, next) => {
//         const token = localStorage.getItem(Token)
//         console.log("isToken!!!!!!!!::" + token)
//         // 有token就只允许到登录页面
//         if (token != null && token !== '') {
//             if (to.path === '/login') {//带有token访问登录页面自动跳转至主页
//                 next()
//             } else {
//                 // 带有token访问其他页面允许跳转
//                 next()
//             }
//         } else {//没有token
//             if (to.path === '/login') {
//                 next()
//             } else {
//                 // 没有token访问其他页面跳转至登录页面
//                 next({
//                     path: '/login',
//                     query: {redirect: to.fullPath}
//                 })
//             }
//         }
//     }
// )
//

export const RouteTable = routes
export default router