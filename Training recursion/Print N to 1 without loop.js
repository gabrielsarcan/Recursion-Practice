function print(n) {
    if (n == 1){
        console.log(n)
    } 
    else {
        console.log(n)
        return print(n-1)
        
    }
}

print(5)