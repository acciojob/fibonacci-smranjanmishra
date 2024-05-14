function fibonacci(num) {
// your code here
	if (num === 0) 
		return 0;
    if (num === 1) 
		return 1;
	
	let a = 0, b = 1, c;

	for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
	
}
module.exports = fibonacci;