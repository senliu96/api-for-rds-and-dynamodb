const AWS = require('aws-sdk')
var operation ={
	insertprofile : function(body,cb)
	{
		 var params = {
		  Item: {
		   "email": {
		     S: body.email
		    }, 
		   "address": {
		     S: body.address
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
	  var params = {
		  ExpressionAttributeNames: {
		   "#X": "address",
		   "#Y": "name",
		   "#Z": "birthday"
		  }, 
		  ExpressionAttributeValues: {
		   ":x": {
		     S: body.address
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
}

module.exports = operation;