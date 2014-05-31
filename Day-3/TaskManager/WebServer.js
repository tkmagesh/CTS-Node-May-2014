var http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs"),
	query = require("querystring"),
	staticServer = require("./serveStatic");

String.prototype.endsWith = function(searchTerm){
   return this.indexOf(searchTerm, this.length - searchTerm.length) !== -1;
}

var taskRespository = [];

var server = http.createServer(function(req,res){
	var currentDir = __dirname;
	var urlObj = url.parse(req.url, true);
	var pathName = urlObj.pathname;
	var filePath = path.join(currentDir,pathName)
	if (!staticServer.serve(filePath,res)){
		console.log(filePath, pathName);
		if (pathName === "/tasks"){
			var reqData = "";
			req.on("data",function(data){
				reqData += data;
			});
			req.on("end",function(){
				var queryObj = query.parse(reqData);
				var taskName = queryObj.taskName;

				taskRespository.push(taskName)	
				res.write("task is saved - [" + taskName + "] <br/>");
				res.write(taskRespository.length.toString() + " tasks are there..");
				res.end();	
			});
			
		}
	}
	
});


server.listen(9090);
console.log("Server running on port 9090..");