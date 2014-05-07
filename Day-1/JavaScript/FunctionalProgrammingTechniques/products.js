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

function filter(list,criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]) === true)
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

function join(list1, list2,.....){

}

var productsWithCategory = join(products,categories,.....);
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