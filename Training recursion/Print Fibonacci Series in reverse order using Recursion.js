let n = 3


function fibonacci(n, s = 0) {
    if (s == n) {
        return n;
    }
    else {
        return fibonacci(n + 2, s + 1) + fibonacci(n + 1, s + 1);
    }
}

for(let i = 0; i < n; i++){
    console.log(fibonacci(i) + " ")
}