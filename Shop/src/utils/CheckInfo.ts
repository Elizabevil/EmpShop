import axios from "axios";
// executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void)
export const CkStrIsNotEmpty = (str: String) => {
    return new Promise((resolve, reject) => {
            //去除所有空格
            str = str.replace(/\s/g, "");
            if (str !== "") {
                resolve(str)
            } else {
                reject(str)
            }
        }
    )
}

export function IsNotEmpty(value): boolean {
    let val = JSON.parse(JSON.stringify(value));
    if (typeof val === 'boolean' && val) {
        return true;
    }
    if (typeof val === 'number' && val != 0) {
        return true;
    }
    if (val instanceof Array) {
        if (val.length !== 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) !== '{}') return true;
    } else {
        if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') {
            return false;
        } else {
            return true;
        }
    }
    return false;
}
