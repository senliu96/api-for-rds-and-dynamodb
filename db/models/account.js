var db = require('../dbconnection');

var operation = {
    validaccount: function( account , callback )
    {
         db.query('select count(*) as count from account where email = ? and password = ?' ,[account.email,account.password] ,callback);
    },
    insertaccount : function( account , callback )
    {
         db.query('insert into account ( email , password ) values ( ? ,?)', [account.email , account.password],callback);
    },
    getdata : function(callback )
    {
         db.query('select * from account',callback)
    }

};

module.exports = operation;