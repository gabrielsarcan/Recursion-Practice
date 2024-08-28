let A = [5, 4, 3, 2, 1]; 
let N = A.length; 

  
function mean(A, N){
    if ( N == 1){
        return A[N-1]

    } else {
        return ((mean(A, N - 1) * (N - 1) + A[N - 1]) / N)
    }
}

console.log(mean(A, N))