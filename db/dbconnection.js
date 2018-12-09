var mysql=require('mysql');
var connection=mysql.createPool({
 

 
});
// var connection=mysql.createPool({
 
//  host:'localhost',
//  port:'3306',
//  user:'root',
//  password:'daxieAai889',
//  database:'micro'
 
// });
 module.exports=connection;
