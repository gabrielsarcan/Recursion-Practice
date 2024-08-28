function sumAll (n){
    if (n == 1){
        return n

    } else { 
        return n + sumAll(n - 1) 
    }
}

console.log(sumAll(3))