// Given an object, return a new object with only the keys that have truthy values


type Obj = Record<string, any> | Array<any>;


export const deepEqual = (obj1: Obj, obj2: Obj): boolean => {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== typeof obj2) return false;
    if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) return obj1 === obj2;
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;

}
const compactObject = (obj: Obj): Obj => {
    // do not use copilot
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }
    const newObj: Obj = {};

    for (const key in obj) {
        const val = compactObject(obj[key]);
        if (val) {
            newObj[key] = val;
        }
    }
    return newObj;
}

(()=> {
    const obj = {
        a: 1,
        b: null,
        c: [1, 2, 3],
        d: {
            e: 1,
            f: null,
            g: false
        },
        f: [null, 1, 2, 3, null, 4, 5, 6, null, 7, 8, 9, null]
    }

    const expected = {
        a: 1,
        c: [1, 2, 3],
        d: {
            e: 1,
        },
        f: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    const actual = compactObject(obj);

    for (const key in expected) {
        if (!deepEqual(expected[key], actual[key])) {
            console.log(`expected ${key} to equal ${expected[key]}, but got ${actual[key]}`)
            console.log({
                expected,
                actual
            })
        }
    }

})();

