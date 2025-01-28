const fibonacci = function(n) {
    let num;
    if (typeof n === 'string') {
        num = parseInt(n)
    } else {
        num = n
    }    
      
    if (n < 0) return 'OOPS'
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // Initialize the first two numbers of the sequence
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
