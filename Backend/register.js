var connection = require('./config');

class register{

static registeruser(name,email,userName, password,contact,aadhar,expiryDate,res)
{
  connection.query('call register(?,?,?,?,?,?,?,@res);select @res "Code"',[name,email,userName,password,contact,aadhar,expiryDate], function (error, results, fields) {
    if (error) {
      console.log(error);
      res.json({
          status:false,
          code:345,
          message:'Internal server error'
      });
    }else{
      if(results[1][0].Code=='101')
        res.json({
          status:false,
          message:'Username already taken'
        });

      else if(results[1][0].Code=='102')
          res.json({
            status:false,
            message:'Email already registered'
          });
        else if(results[1][0].Code=='103')
            res.json({
              status:false,
              message:'Contact already registered'
            });

            else if(results[1][0].Code=='104')
                res.json({
                  status:false,
                  message:'Person with this Aadhar card number already registered'
                });
                else
                    res.json({
                      status:true,
                      message:'user registered sucessfully'
                    });
            }

      });
}
}

module.exports = register;
