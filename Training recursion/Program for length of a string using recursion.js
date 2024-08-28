let str = 'abcdefgh'
let n = 0 

function size(str, n) {
    if (str[n] == undefined){
        return 0

    } else {
        return 1 + size(str, n + 1)
    } 
}

console.log(size(str, n))