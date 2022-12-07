import {RouteRecordName, RouteRecordRaw, useRouter} from 'vue-router'

const router = useRouter()
let param = {name: 'ddd', age: 'cc'}


// resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数

export class PromiseTest {
    static AddRoute = (parent: RouteRecordName, current: RouteRecordRaw) => {
        router.addRoute(parent, current)
        return new Promise<any>((resolve, reject) => {
            reject()
        })
    }
    static PromiseTest = () => {
        return new Promise<any>((resolve, reject) => {
            resolve("success")
            reject()
        })
    }


}

// <script src="//res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
//     <script src="//s3.music.126.net/static/mob/ntes.id.js"></script>
//     <script src="//s5.music.126.net/static_public/5cdd11024e4a3f3e479d1930/music-jssdk-2.0.18.js"></script>
