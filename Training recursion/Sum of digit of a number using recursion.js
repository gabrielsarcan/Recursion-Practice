let n = 45632

function sum (n) {
    if (n == 0){
        return 0

    } else {
        return n % 10 + sum(parseInt(n / 10))

    }
}

console.log(sum(n))