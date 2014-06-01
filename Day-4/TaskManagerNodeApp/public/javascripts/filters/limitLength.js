taskApp.filter('limitLength',function(){
			return function(taskName, size){
				if (taskName.length > size){
					return taskName.substr(0,size) + "..."
				} else {
					return taskName;
				}
			}
		})