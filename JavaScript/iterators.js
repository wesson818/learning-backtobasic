function squared(max) {
    return {
        [Symbol.iterator]() {
            let n = 0
            return {
                next() {
                    n++
                    if(n<=max){
                        return {
                            value:n*n,
                            done:false
                        }
                    }
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for(const n of squared(10)){
    console.log(n)
}

const [a,b,c,d,e]=squared(10)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
