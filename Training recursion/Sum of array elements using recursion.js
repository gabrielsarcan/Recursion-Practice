let a = [1, 2 ,3]
let n = a.length

function sumArray (a, n){
    if(n == 0){
        return 0 

    } else { 
        return (sumArray(a , n - 1) + a[n - 1])
    }
}

console.log(sumArray(a, n))