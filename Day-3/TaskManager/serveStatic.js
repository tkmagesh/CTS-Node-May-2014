var url = require("url"),
	path = require("path"),
	fs = require("fs");
var staticResourceExtensions = [".html",".css",".js",".ico",".jpg"];
function serveStatic(filePath,res){
	
	var isStaticResource = staticResourceExtensions.some(function(ext){
		return filePath.endsWith(ext);
	});
	if (isStaticResource){
		var fileFound = fs.existsSync(filePath);
		if (fileFound){
			var readStream = fs.createReadStream(filePath, {encoding : "utf8"});
			readStream.pipe(res);
		}else{
			res.statusCode = 404;
			res.end();
		}
		return true;
	} else {
		return false;
	}
}

function getExtensions(){
	return staticResourceExtensions;
}
function addExtenstion(extension){
	staticResourceExtensions.push(extension);
}

module.exports = {
	serve : serveStatic,
	getExtensions: getExtensions,
	addExtension : addExtenstion
};
