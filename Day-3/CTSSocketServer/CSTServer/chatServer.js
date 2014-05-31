var nodeSocket = require("nodejs-websocket");
var server = nodeSocket.createServer(function(con){
	console.log("A new connection is established");
	con.on("text",function(data){
		console.log("message from client -",data );
		server.connections.forEach(function(c){
			c.sendText(data);
		});
	});
});
server.listen(9090);
console.log("Chat server running on port 9090");