var express = require('express');
var router = express.Router();
var operation = require('../models/account');

// router.get('/test', function(req, res, next) {
// 	console.log(123);
//   res.send('123');
// });

router.get('/getdata', function(req, res, next) {
  operation.getdata(function(err,count){
  	if(err){
  		res.json(err);
  	}
  	else
  	{
  		res.send(count);
  	}
  })
});

router.post('/validaccount',function(req, res, next){
	console.log(req.body)
    operation.validaccount(req.body,function(err,count){
        if(err) {
            res.json(err);
        } else {
            res.send(count[0]);
        }
    });

});
router.post('/insertaccount',function(req, res, next){

    operation.insertaccount(req.body,function(err,count){
        if(err) {
            res.json({'insert' : false, 'error' : err});
        } else {
            res.json({'insert' : true});
        }
    });

});
module.exports = router;
