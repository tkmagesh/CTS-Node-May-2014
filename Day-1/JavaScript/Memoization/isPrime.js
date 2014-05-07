function isPrime(n){
	if (n <= 3) return true;
	if (typeof isPrime[n] !== "undefined"){
		console.log("from cache...");
		return isPrime[n];	
	} 
	isPrime[n] = true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0) {
			isPrime[n] = false;
			break;
		}
	console.log("freshly brewed....");
	return isPrime[n];
}