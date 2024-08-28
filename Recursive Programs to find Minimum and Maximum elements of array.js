const arr = [1, 4, 45, 6, 10, -8]
let n = arr.length

function findMin(arr, n) {
    if(n == 1){
        return arr[0]

    } else {
        return Math.min(arr[n - 1], findMin(arr, n - 1)) 
    }
        
}

function findMax(arr, n) {
    if (n == 1) {
        return arr[0]

    } else {
        return Math.max(arr[n-1], findMax(arr, n-1))
    }
}
console.log('min =',findMin(arr, n))