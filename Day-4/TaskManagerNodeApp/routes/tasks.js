var express = require('express');
var router = express.Router();

var tasks = [
	{name : "Node Task - 1"},{name : "Node Task - 2"}
];
router.get('/', function(req, res) {
  res.write(JSON.stringify(tasks));
  res.end();
});

module.exports = router;
