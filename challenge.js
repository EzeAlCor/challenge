let challenge2 = (array) => {
    let newArray = []
    array.forEach(num => {
        num = num < 0? num * -1 : num
        newArray.push(num * num)
    });
    return newArray
}
// console.log(challenge2([1, -2, -4, 0, 36, 64, 81]))

let challenge1 = (array) => {
    array.sort((a,b) => a -b)
    let max = 0
    // el gap que me decias seria que el elemento actual sea mayor que el maximo + 1
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max + 1)
            return max + 1
        max += array[i] 
    }
    return max + 1
}
console.log(challenge1([5, 7, 1, 1, 2, 3, 22]))