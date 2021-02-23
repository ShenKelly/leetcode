var sum = function(){
    var numbers = [65, 44, 12, 4];
    let data = numbers.reduce((item,index)=>{
        return item+index;
    })
    return data;
}

// console.log(sum());

const fn1 = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            console.log('fn1')
            resolve(1)
        }, 2000)
    })
}
    
const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn2')
            resolve(2)
        }, 1000)
    })
}

const arr = [fn1, fn2]

const excPromiseInOrder = (array, value) => {
    array.reduce(
        (prePromise, curPromise) => prePromise.then(curPromise)
        // Promise.resolve(value)
    )
}

excPromiseInOrder(arr, 'init')