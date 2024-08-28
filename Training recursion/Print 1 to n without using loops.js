function print(n) {
    if (n > 0){
        print(n - 1)
        console.log(n)
    } 
    return
}

print(5)