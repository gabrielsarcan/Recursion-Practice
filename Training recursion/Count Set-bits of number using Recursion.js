let n = 21

function setBits (n) {
    if (n == 0) {
        return 0
    }
    else if ((n & 1) == 1){
        return 1 + setBits(n >> 1)

    } else {
       return setBits(n >> 1)
    }
}

console.log(setBits(n))