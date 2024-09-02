let s = 'Gabriel'
let n = s.length

function reverseString(s, n) {
    if (n == 0) {
        return ''
    
    } else {
        return s[n - 1] + reverseString(s, n - 1)
    }
}

if (reverseString(s, n) == s){
    console.log('Yes')

} else {
    console.log('No')
}