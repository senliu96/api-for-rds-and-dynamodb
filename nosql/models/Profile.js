const AWS = require('aws-sdk')

var SmartyStreets = require('smartystreets-api');
var smartyStreets = SmartyStreets('da6c0874-4aed-0247-3b22-59d704d2cd16', 'cw3S1IeswuBvBy95uaeA');


var operation ={
	insertprofile : function(body,cb)
	{
		var input_addr ={};
        input_addr["prefix"] = body["street"];
        input_addr["cityFilter"] = body["city"];
        input_addr["stateFilter"] = body["state"];
        console.log(input_addr)
         smartyStreets.suggest(input_addr, function (err, data, raw) {
         	console.log(data)
            if (err)
            {
                console.log(err);
                cb(err,null);
            }
            else if('suggestions' in data)
            {
                cb('Address isn\'t valid, please input again' ,null);
            }
            else {
                var address = data[0]["streetLine"] + ' , ' + data[0]["city"] + ' , ' + data[0]["state"];
	             console.log(address)
	             var params = {
				  Item: {
				   "email": {
				     S: body.email
				    }, 
				   "address": {
				     S: address
				    }, 
				   "birthday": {
				     S: body.birthday
				    },
				    "name":{
				    S : body.name
					}
				  }, 
				  ReturnConsumedCapacity: "TOTAL", 
				  TableName: "profile"
				 };
				 dynamodb.putItem(params, cb);
	            }
        	});
		
	},

	getprofile : function(body,cb)
	{
		 var params = {
		  Key: {
		   "email": {
		     S: body.email
		    }
			},
		  TableName: "profile"
		 };
		 dynamodb.getItem( params, cb);
	},
	updateprofile : function(body,cb)
	{
		var input_addr ={};
        input_addr["prefix"] = body["street"];
        input_addr["cityFilter"] = body["city"];
        input_addr["stateFilter"] = body["state"];
        console.log(input_addr)
         smartyStreets.suggest(input_addr, function (err, data, raw) {
         	console.log(data)
            if (err)
            {
                console.log(err);
                cb(err,null);
            }
            else if('suggestions' in data)
            {
                cb('Address isn\'t valid, please input again' ,null);
            }
            else {
                var address = data[0]["streetLine"] + ' , ' + data[0]["city"] + ' , ' + data[0]["state"];
	             console.log(address)
				var params = {
					  ExpressionAttributeNames: {
					   "#X": "address",
					   "#Y": "name",
					   "#Z": "birthday"
					  }, 
					  ExpressionAttributeValues: {
					   ":x": {
					     S: address
					    }, 
					   ":y": {
					     S: body.name
					    },
					   ":z": {
					     S: body.birthday
					    }
					  }, 
					  Key: {
					   "email": {
					     S: body.email
					    }
					  }, 
					  ReturnValues: "ALL_NEW", 
					  TableName: "profile", 
					  UpdateExpression: "SET #X = :x, #Y = :y , #Z = :z "
					 };
					 dynamodb.updateItem(params, cb);
	            }
        	});
	}
}

module.exports = operation;