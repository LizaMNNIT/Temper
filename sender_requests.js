var connection = require('./config');
class sender_request{

  static senderRequest(client,res)
  {
    //console.log(name);
    //console.log(res);

    client.get("userName",function(err,reply) {
      var id=reply;

      connection.query('SELECT  SR_id, fromDate ,location , destination ,weight,type  from sender where userName=?',[id], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'sender requests retrieved'
          })
        }
      });
    });



  }
}
module.exports=sender_request;
