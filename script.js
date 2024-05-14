function fibonacci(num) {
// your code here
	if (num === 0) return 0;
    if (num === 1) return 1;
	
	let a = 0, b = 1, c;

	for (let i = 2; i <= num; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return b;
	
}

module.exports = fibonacci;