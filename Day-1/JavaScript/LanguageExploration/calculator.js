function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}