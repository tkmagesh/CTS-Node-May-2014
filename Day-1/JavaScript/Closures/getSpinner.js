function getSpinner(){
	var counter = 0;
	var obj = {};
	obj.up = function(){
		return ++counter;
	};
	obj.down = function(){
		return --counter;
	}
	return obj;
}

function getSpinner(){
	var counter = 0;
	function upper(){
		return ++counter;
	}
	function downer(){
		return --counter;
	}
	return {
		up : upper,
		down : downer
	};
}
