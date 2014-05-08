function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary =salary;
  //"this" is implicitly returned
}

/*
Modify the above function to expose accessor functions that enforce the following constraints

1. "id" is readonly
2. "name" will resist assigning an empty string
3. "salary" will not accept a value less than the current salary
*/

function Employee(id,name,salary){
	var _id = id
		,_name = name
		,_salary = salary;

	this.id = function(){
		return _id;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};
	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if(val > _salary) _salary = val;
	}
}

function SalaryCalculator(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
	this.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		this.salary = gross * ((100-this.tax)/100);
	}
}

/*Better version of the above is*/

function SalaryCalculator(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;

}
SalaryCalculator.prototype.calculate = function(){
	var gross = this.basic + this.hra + this.da;
	this.salary = gross * ((100-this.tax)/100);
}