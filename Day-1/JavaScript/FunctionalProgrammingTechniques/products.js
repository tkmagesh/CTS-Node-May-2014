var products = [
	{id:1,name:"pen",cost:10,units:60,category:1},
	{id:6,name:"hen",cost:40,units:40,category:2},
	{id:3,name:"ten",cost:70,units:70,category:2},
	{id:9,name:"len",cost:30,units:10,category:1},
	{id:2,name:"den",cost:20,units:30,category:2},
	{id:7,name:"zen",cost:90,units:20,category:1}
]

function sort(list,attrName){
	for(var i=0;i<=list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		
}

function filter(list,predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]) === true)
			result.push(list[i]);
	return result;
}

function costlyProductCriteria(p){
	return p.cost > 50;
}

var costlyProducts = filter(products,costlyProductCriteria);

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]
/*Create the following functions (generalized)
min
max
average
countBy
sum
groupBy
join
transform

*/

function min(list,selectorFn){
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result) result = value;
	}
	return result;
}

min(products,function(p){ return p.cost;});

function min(list,selectorFn){
	var result = selectorFn(list[0]);
		for(var i=1;i<list.length;i++){
			var value = selectorFn(list[i]);
			if (value > result) result = value;
		}
		return result;	
}

function sum(list,selectorFn){
	var result = 0;
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		result += value;
	}
	return result;
}

function countBy(list,predicate){
	var result = 0;
	for(var i=0;i<list.length;i++)
		if (predicate(list[i])) ++result;
	return result;
}

countBy(products, function(p){ return p.cost > 50; });

function groupBy(list,selectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		if (typeof result[key] === "undefined") result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

function groupBy(list,attrName){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = list[i][attrName];
		if (typeof result[key] === "undefined") result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

function groupBy(list,selector){
	var result = {};
	var selectorFn = selector;
	if (typeof selector === "string") selectorFn = function(p){ return p[selector];}
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		if (typeof result[key] === "undefined") result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

function join(leftList, rightList, leftKeySelector, rightKeySelector, transformer){
	var result=[];
	for(var i=0;i<leftList.length;i++){
		var leftKey = leftKeySelector(leftList[i]);
		for(var j=0;j<rightList.length;j++){
			var rightKey = rightKeySelector(rightList[j]);
			if (leftKey === rightKey)
				result.push(transformer(leftList[i],rightList[j]));
		}
	}
	return result;
}

var productsWithCategoryName = join(products,categories,function(p){ return p.category;}, function(c){ return c.id }, function(p,c){
  return { id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
});
/*productsWithCategory will be an array like the following
[
	{id:1,name:"pen",cost:10,units:60,category:"stationary"},
	{id:6,name:"hen",cost:40,units:40,category:"grocery"},
	{id:3,name:"ten",cost:70,units:70,category:"grocery"},
	{id:9,name:"len",cost:30,units:10,category:"stationary"},
	{id:2,name:"den",cost:20,units:30,category:"grocery"},
	{id:7,name:"zen",cost:90,units:20,category:"stationary"}
]
	
*/