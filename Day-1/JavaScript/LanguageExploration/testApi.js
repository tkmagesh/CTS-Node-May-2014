function test(title,testFn){
	var ele = document.createElement("li");
	ele.innerHTML = title;
	var result = testFn();
	ele.classList.add(result ? "pass" : "fail");
	document.getElementById("ulTestList").appendChild(ele);
}
