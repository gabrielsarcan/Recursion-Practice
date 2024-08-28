let a = [2, 55, 1, 7]
let n = a.length

function sumArray(a, n, acc = 0) {
    if (n == 0) {
        return acc

    } else {
        return sumArray(a , n - 1, a[n - 1] + acc)  
    }
}

console.log(sumArray(a, n))