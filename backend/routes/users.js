var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createPool({
		host: "localhost",
		user: "root",
		password: "123456",
		database: "datail"
	})
	/* GET users listing. */
router.post('/insert', function(req, res, next) {
	var a = req.body.a;
	var b = req.body.b;
	res.header('Access-Control-Allow-Origin', "*")
	con.query(`INSERT INTO work (title,content) VALUES ('${a}','${b}')`, function(err, rows, fields) {
		res.send(rows)
	})
});
router.get('/select', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*")
	con.query(`SELECT * FROM work`, function(err, rows, fields) {
		res.send(rows)
	})
});

module.exports = router;