let coins = [1, 2, 3]
let n = 4
let l = coins.length

function count(n, coins, l) {
    if (n == 0){
        return 1

    } else if (l == 0) {
        return 0

    } else {
     return count(coins[l - 1], )   
    }
}