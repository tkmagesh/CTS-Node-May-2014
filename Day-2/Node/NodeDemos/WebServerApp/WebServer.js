var http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs");

var server = http.createServer(function(req,res){

	if (req.url === "/favicon.ico"){
		res.status = 404;
		res.end();
	} else {
		var currentDir = __dirname;
		var pathName = url.parse(req.url).pathname;
		var filepath = path.join(currentDir,pathName)
		var fileFound = fs.existsSync(filepath);
		if (fileFound){
			/*var fileContents = fs.readFileSync(filepath,{encoding : "utf8"});
			res.write(fileContents);*/
			//var fileContents = "";
			var readStream = fs.createReadStream(filepath, {encoding : "utf8"});
			/*readStream.on("data",function(data){
				//fileContents += data;
				res.write(data);
			});
			readStream.on("end",function(){
				//res.write(fileContents);
				res.end();
			});*/
			readStream.pipe(res);

		}else{
			res.status = 404;
		}
		//res.end();
	}
});
server.listen(9090);
console.log("Server running on port 9090..");