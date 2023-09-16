type CacheItem= {
    value: number
    timer: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
    private cache: Map<number, CacheItem>

    constructor() {
        this.cache = new Map()
    }

    set(key: number, value: number, duration: number): boolean {
        const item = this.cache.get(key)
        if (item) {
            clearTimeout(item.timer)
        }

        const timer = setTimeout(() => {
            this.cache.delete(key)
        }, duration)

        this.cache.set(key, { value, timer })

        return true
    }

    get(key: number): number {
        const item = this.cache.get(key)
        if (item) {
            return item.value
        }

        return -1
    }

	count(): number {
        return this.cache.size
    }

}


