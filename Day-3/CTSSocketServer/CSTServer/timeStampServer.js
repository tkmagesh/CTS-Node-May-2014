var nodejsSocket = require("nodejs-websocket");
var server = nodejsSocket.createServer(function(con){
	console.log("A new connection is established");
	var timer = undefined;
	con.on("text",function(data){
		if (data === "start"){
			timer = setInterval(function(){
				con.sendText(new Date().toString());
			},5000);
			return;
		} 
		if (data === "stop"){
			clearInterval(timer);
		} else {
			console.log("Unknown message received ", data);
		}

	});
});
server.listen(9090);
console.log("Socket server is listening on port 9090...");