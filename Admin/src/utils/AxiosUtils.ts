import axios, {AxiosRequestConfig} from "axios";


export const TargetServer = "http://192.168.20.5:8081"


// 创建实例时配置默认值
export const Instance = axios.create({
    timeout: 2500,
    baseURL: TargetServer
});

// 创建实例后修改默认值
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 添加请求拦截器
Instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    if (config && config.headers) { // 多一步判断
        config.headers["token"] = token
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
Instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});