
// the data store stores data as key value pairs and allows to register callbacks for when data is set, changed or deleted

type DataStoreEventTypes = 'set' | 'get' | 'change' | 'delete';

type DataStoreEvent = `${DataStoreEventTypes}:${string}`;

type DataStoreCallback<T extends any> = (event: DataStoreEvent, key: string, value: T) => void;

type DataStoreCallbackMap<T extends any> = Map<DataStoreEvent, DataStoreCallback<T>[]>;

interface DataStoreInterface {
    set<T extends any>(key: string, value: T): void;
    get<T extends any>(key: string): T | undefined;
    on<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>): void;
    off<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>): void;
    once<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>): void;
}


class DataStore implements DataStoreInterface {

    private data: Map<string, any> = new Map();
    private callbacks: DataStoreCallbackMap<any> = new Map();


    private getCallbacks(event: DataStoreEvent): DataStoreCallback<any>[]{
        return this.callbacks.get(event) || [];
    }


    private callCallbacks(event: DataStoreEvent, key: string, value: any){
        this.getCallbacks(event).forEach(callback => callback(event, key, value));
    }


    public set<T extends any>(key: string, value: T){
        const oldValue = this.data.get(key);
        this.data.set(key, value);
        this.callCallbacks(`set:${key}`, key, value);
        if (oldValue !== undefined) this.callCallbacks(`change:${key}`, key, value);
    }

    public get<T extends any>(key: string): T | undefined{
        this.callCallbacks(`get:${key}`, key, this.data.get(key));
        return this.data.get(key);
    }

    public on<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const callbacks = this.getCallbacks(event);
        callbacks.push(callback);
        this.callbacks.set(event, callbacks);
    }
    public off<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const callbacks = this.getCallbacks(event).filter(cb => cb !== callback);
        this.callbacks.set(event, callbacks);
    }
    public once<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const wrappedCallback: DataStoreCallback<T> = (event, key, value) => {
            callback(event, key, value);
            this.off(event, wrappedCallback);
        }
        this.on(event, wrappedCallback);
    }
}

class DataStoreProxy implements DataStoreInterface {
    private data = new Map<string, any>();

    private callbacks: DataStoreCallbackMap<any> = new Map();

    private proxy: Map<string, any>;

    constructor(){
        this.proxy = new Proxy(this.data, {
            get: (target, key) => {
                key = String(key);
                this.callCallbacks(`get:${key}`, key, target[key]);
                return Reflect.get(target, key);
            },
            set: (target, key, value) => {
                key = String(key);
                const oldValue = Reflect.get(target, key);
                Reflect.set(target, key, value);
                // this.callCallbacks(`set:${key}`, key, value);
                if (oldValue !== undefined) this.callCallbacks(`change:${key}`, key, value);
                else this.callCallbacks(`set:${key}`, key, value);
                return true;
            }
        })  
    }
    private getCallbacks(event: DataStoreEvent): DataStoreCallback<any>[]{
        return this.callbacks.get(event) || [];
    }

    private callCallbacks(event: DataStoreEvent, key: string, value: any){
        this.getCallbacks(event).forEach(callback => callback(event, key, value));
    }

    public set<T extends any>(key: string, value: T){
        Reflect.set(this.proxy, key, value);
    }

    public get<T extends any>(key: string): T | undefined{
        return Reflect.get(this.proxy, key);
    }

    public on<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const callbacks = this.getCallbacks(event);
        callbacks.push(callback);
        this.callbacks.set(event, callbacks);
    }

    public off<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const callbacks = this.getCallbacks(event).filter(cb => cb !== callback);
        this.callbacks.set(event, callbacks);
    }

    public once<T extends any>(event: DataStoreEvent, callback: DataStoreCallback<T>){
        const wrappedCallback: DataStoreCallback<T> = (event, key, value) => {
            callback(event, key, value);
            this.off(event, wrappedCallback);
        }
        this.on(event, wrappedCallback);
    }
}


const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

(()=> {
    const store = new DataStoreProxy();

    store.on('set:foo', (event, key, value) => {
        console.log(`set:foo event fired with value ${value}`);
    }); 

    store.on('change:foo', (event, key, value) => {
        console.log(`change:foo event fired with value ${value}`);
    });
    
    store.on('get:foo', (event, key, value) => {
        console.log(`first get:foo event fired with value ${value}`);
    });
    store.on('get:foo', (event, key, value) => {
        console.log(`second get:foo event fired with value ${value}`)
    });

    // register some async callbacks

    store.on('set:foo', async (event, key, value) => {
        await wait(1000);
        console.log(`async set:foo event fired with value ${value}`);
    });
    store.on('get:bar',  (event, key, value) => {
        console.log(`get:bar event fired with value`, value);
    })
    store.on('change:foo', async (event, key, value) => {
        await wait(1000);
        // fetch some file from the internet
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => {
            store.set('bar', json);
            store.get('bar');
        });

    })

    store.set('foo', 'bar');

    store.set('foo', 'baz');

    store.set('foo', 'asdf');

    const s = store.get('foo');

    let x = store.get('bar');

    console.log(s, x);

    let v = store.get('foo');


})()