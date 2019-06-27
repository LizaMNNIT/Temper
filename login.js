var connection = require('./config');

class login{

static loginUser(userName,pass,client,res)
{
  var today = new Date();
    var username=userName;
    var password=pass;
    connection.query('SELECT * FROM registration WHERE userName = ?',[username], function (error, results, fields) {
    //  console.log(today);
      if (error) {
        console.log(error);
          res.json({
            status:false,
            code:401
            })
      }else{
        if(results.length >0){
            if(password==results[0].password && results[0].expiryDate>=today){
            //  console.log("hello");
            client.set('userName',username);
                res.json({
                    status:true,
                    code:200

                })
            }else{
              if(password!=results[0].password)
              {
                res.json({
                  status:false,
                  message:'UserName and password do not match',
                  code:201
                 });
            }
            if(results[0].expiryDate<today)
            {
              res.json({
                status:false,
                message:'Subscribe first',
                code:202
              });
            }
}
        }
        else{
          res.json({
              status:false,
              message:'Register first',
            code:301
          });
        }
      }
    });
}

}


module.exports=login;
