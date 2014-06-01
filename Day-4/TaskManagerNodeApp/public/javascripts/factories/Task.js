taskApp.factory('Task',function(){
			function Task(name){
				this.name = name;
				this.isCompleted = false;
			}
			Task.prototype.toggleCompletion = function(){
				this.isCompleted = !this.isCompleted;
			};
			return Task;
		})