window.addEventListener("DOMContentLoaded",function(){
	test("Should be able to add two numbers",function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});

	test("Should be able to add numbers in string format",function(){
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		var result = add(number1,number2);

		return result === expectedResult;
	});

	test("Should be able to treat non-numeric strings as zero",function(){
		var number1 = "10",
			number2 = "abc",
			expectedResult = 10;

		var result = add(number1,number2);

		return result === expectedResult;
	});
	
	test("Should be able to add functions returning numbers",function(){
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;

		var result = add(f1,f2);

		return result === expectedResult;
	});
	
	test("Should be able to add functions returning numbers in string format",function(){
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;

		var result = add(f1,f2);

		return result === expectedResult;
	});
	
	test("Should be able to add functions returning function returning numbers in string format",function(){
		var f1 = function(){ return function(){ return "10";}},
			f2 = function(){ return function(){ return "20";}},
			expectedResult = 30;

		var result = add(f1,f2);

		return result === expectedResult;
	});

	test("Should be able to add variable length arguments",function(){
		var expectedResult = 100;

		var result = add(10,20,30,40);

		return result === expectedResult;
	});


});
	