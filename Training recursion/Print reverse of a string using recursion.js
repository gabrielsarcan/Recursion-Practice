let s = 'testando'
let l = s.length

function reverse (s, l){
    if (l == 0){
        return ''

    } else {
        return s[l - 1] + reverse(s, l - 1)
    }
}

console.log(reverse(s, l))