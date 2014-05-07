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
	
	


});
	