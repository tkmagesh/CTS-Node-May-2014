taskApp.factory('taskService', function(Task,$http){
			function getAllTasks(){
				return $http({method : "get", url : "/tasks"})
			}
			function addNewTask(taskName){
				var newTask = new Task(taskName);
				tasks.push(newTask);
			}
			function removeCompletedTasks(){
				for(var i=tasks.length-1;i>=0;i--){
					var task = tasks[i];
					if (task.isCompleted)
						tasks.splice(i,1);
				}
			}
			return {
				getAll : getAllTasks,
				//list : tasks,
				addNew : addNewTask,
				removeCompleted : removeCompletedTasks
			};
		})