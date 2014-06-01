taskApp.controller('taskController', function($scope, taskService){
			
			taskService.getAll().success(function(list){
				$scope.tasks = list;
			});
			$scope.addTask = function(taskName){
				taskService.addNew(taskName);
			};
			$scope.toggleCompletion = function(task){
				task.toggleCompletion();
			};
			$scope.removeCompleted = function(){
				taskService.removeCompleted();

			};

			$scope.filterCompleted = false;
			$scope.shouldShow = function(task){
				if ($scope.filterCompleted){
					return task.isCompleted;
				}
				return true;
			}

		});