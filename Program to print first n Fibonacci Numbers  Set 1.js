let n = 3

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

for(let i = 0; i < n; i++){
    console.log(fibonacci(i) + " ")
}