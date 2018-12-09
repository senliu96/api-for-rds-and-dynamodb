var express = require('express');
var router = express.Router();
var operation = require('../models/Profile');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/insertprofile',function(req, res, next){
	console.log(req.body)
    operation.insertprofile(req.body,function(err, data) {
		   if (err) {
		   	res.json({'insert' :false ,'error' :err})
		   }
		   else {
		   		console.log(data);           // successful response
		   		res.json({'insert' : true});
		   }    
		 });

});
router.post('/getprofile',function(req, res, next){
	console.log(req.body)
    operation.getprofile(req.body,function(err, data) {
		   if (err) {
		   	res.json(err)
		   }
		   else {
		   		   	var ori = data.Item
				   	var result = {}
				   	for( var key in ori )
				   	{
				   		result[key] = Object.values(ori[key])[0];
				   	}
				   	console.log(result)
				   	res.json(result)
		   } 
		 });

});
router.post('/updateprofile',function(req, res, next){
	console.log(req.body)
    operation.updateprofile(req.body,function(err, data) {
		   if (err) {
		   	res.json(err)
		   }
		   else {
		   		   	var ori = data.Attributes
				   	var result = {}
				   	for( var key in ori )
				   	{
				   		result[key] = Object.values(ori[key])[0];
				   	}
				   	console.log(result)
				   	res.json(result)
		   } 
		 });

});

module.exports = router;
