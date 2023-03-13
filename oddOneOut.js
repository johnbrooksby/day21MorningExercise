let oddCount = 0
let evenCount = 0
let doesntBelong = 0

function oddOneOut (str) {
    for (let i = 0; i < str.length; i++){
        if (str[i] % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }
    if (evenCount > oddCount) {
        for (let i = 0; i < str.length; i++){
            if (str[i] % 2 !== 0){
                doesntBelong = str[i]
            }
        }
    }
    if (oddCount > evenCount){
        for (let i = 0; i < str.length; i++){
            if (str[i] % 2 === 0){
                doesntBelong = str[i]
            }
        }
    }

    // Noah's solution
    // if (evenCount > oddCount) {
    //     return str.filter(e => (e % 2) !== 0)
    // } else {
    //     return str.filter(e => (e % 2) === 0)
    // }

    return doesntBelong
}

console.log(oddOneOut([160, 3, 1719, 19, 11, 13, -21]))