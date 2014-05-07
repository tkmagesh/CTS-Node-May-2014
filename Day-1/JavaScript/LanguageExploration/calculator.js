function add(x,y){
	x = isNaN(x) ? 0 : parseInt(x);
	y = isNaN(y) ? 0 : parseInt(y); 
	return x + y;
}