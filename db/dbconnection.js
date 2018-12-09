var mysql=require('mysql');
var connection=mysql.createPool({
 
 host:'micro-db-person.c2xzhqwfk1v3.us-east-1.rds.amazonaws.com',
 port:'3306',
 user:'admin',
 password:'password',
 database:'micro'
 
});
// var connection=mysql.createPool({
 
//  host:'localhost',
//  port:'3306',
//  user:'root',
//  password:'daxieAai889',
//  database:'micro'
 
// });
 module.exports=connection;
