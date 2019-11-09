var connection = require('./config');
var uuid = require('uuid/v1');
class payment{

  static paymentUser(userName,amount,subs_date,subs_time,res)
  {
    const p = uuid();
    connection.query('call pay(?,?,?,?,?,@res);select @res "Code"',[userName,p,amount,subs_date,subs_time], function (error, results, fields) {
      if (error) {
        console.log(error);
       res.json({
           status:false,
           code:345,
           message:'there are some errors with query'
       });


      }else{
        if(results[1][0].Code=='101')
          res.json({
            status:false,
            message:'Invalid UserName'
          });
        else if(results[1][0].Code=='102')
            res.json({
              status:false,
              message:'Already subscribed'
            });
                  else
                      res.json({
                        status:true,
                        message:'User subscribed sucessfully'
                      });
              }

        });
  }
}

module.exports=payment;
