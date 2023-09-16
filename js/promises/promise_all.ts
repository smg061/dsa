
function promiseAll(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    let count = promises.length
    const results = new Array(count)
    promises.forEach((promise, index) => {
        console.log(`executing promise: ${promise}, index: ${index}`)
      promise.then((result) => {
        results[index] = result
        count -= 1
        if (count === 0) {
          resolve(results)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  })
}
type PromiseResult<T> = {
    status: 'fulfilled' | 'rejected',
    value: T | null,
}

const promiseAllSettled = (promises: Promise<any>[]) => {
    const results: PromiseResult<any>[] = [];
    return new Promise((resolve, reject) => {
        let count = promises.length;
        promises.forEach((promise, index) => {
            promise.then((val)=> {
                results[index] = {status: 'fulfilled', value: val};
                count -= 1;
                if (count === 0) {
                    resolve(results);
                }
            }).catch((err) => {
                results[index] = {status: 'rejected', value: err};
                count -= 1;
                if (count === 0) {
                    resolve(results);
                }
            }
            );
        });
    });
}


(() => {
    const promises = [
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('first');
            }, 1000);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('second');
            }, 500);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('third');
            }, 250);
        }),
    ];

    promiseAll(promises).then((results) => {
        console.log(results);
    });
    promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('fourth'));
        }, 100);
    }
    ));
    promiseAllSettled(promises).then((results) => {
        console.log(results);
    });

})()

                                
