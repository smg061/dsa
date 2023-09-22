
type Func = (...args: any[]) => Promise<any>;


function withTimeout(func: Func, timeout: number) {
    return async (...args: any[]) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error('Timeout'))
            }, timeout)
            func(...args).then((result) => {
                clearTimeout(timer)
                resolve(result)
            }).catch((err) => {
                clearTimeout(timer)
                reject(err)
            }
            )
        }) 
    }
}