/* 防抖 */
import {ref} from "vue";

export const myDebounce = (fn: () => void, delay: number | undefined) => {
    let timer: NodeJS.Timeout;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay || 2000)
    }
};

export function debounce(fn, time) {
    let timer
    return function (...argu: any) {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn(...argu)
            clearTimeout(timer)
            timer = null
        }, time || 2000)
    }
}

/* 节流 */
export const myThrottle = (fn: () => void, delay: number | undefined) => {
    const isThtottle = ref(true)
    return () => {
        if (!isThtottle.value) return
        isThtottle.value = false
        setTimeout(() => {
            fn()
            isThtottle.value = true
        }, delay || 2000)
    }
};
