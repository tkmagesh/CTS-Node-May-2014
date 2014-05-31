var express = require('express');
var router = express.Router();

var taskRepository = [];

router.get("/",function(req,res){
	res.render("tasks/index", { list : taskRepository });
});

router.post("/add", function(req,res){
	var newId = taskRepository.reduce(function(seedId, t){
		return seedId > t.id ? seedId : t.id;
	},0) + 1;
	var newTask = {
		id : newId,
		name : req.body.taskName,
		isCompleted : false
	}; 
	taskRepository.push(newTask);
	res.render("tasks/index",{ list : taskRepository });
});

router.get("/toggle", function(req,res){
	var taskId = parseInt(req.query.id,10);
	var task = taskRepository.filter(function(t){ return t.id === taskId})[0];
	if (task)
		task.isCompleted = !task.isCompleted;
	console.log(taskId, task.id, task.name, task.isCompleted);
	res.render("tasks/index",{ list : taskRepository });
});
module.exports = router;