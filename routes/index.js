var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
//var sequelize = new Sequelize('pbb', 'root', 'merdeka123')
var sequelize = new Sequelize('pbb', 'root', 'merdeka123', {
		host: "localhost",
	})
	/* GET home page. */
console.log(sequelize);
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.post('/', function (req, res, next) {
	// ///SELECT * FROM Customers
	// WHERE Country = 'Mexico';
	sequelize.query("SELECT * FROM `dat_login` WHERE nm_login=\"ADMIN\" and password = \"ADMIN\"", {
			type: sequelize.QueryTypes.SELECT
		})
		.then(function (users) {
			console.log(users);
			// We don't need spread here, since only the results will be returned for select queries
		})
});

module.exports = router;
