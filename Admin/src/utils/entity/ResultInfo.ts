interface IResultInfo<T> {
    statusCode: number,
    msg: string,
    data: T
}

export class ResultInfo<T> implements IResultInfo<T> {
    data: T;
    msg: string;
    statusCode: number;

    // 方法
    setMsg(msgs: string): ResultInfo<T> {
        this.msg = msgs
        return this
    }

    setCode(code: number): ResultInfo<T> {
        this.statusCode = code
        return this
    }

    setData(data: T): ResultInfo<T> {
        this.data = data
        return this
    }

    toJsonString(): string {
        return JSON.stringify(this)
    }
}


