var connection = require('./config');

class senderStatus{

  static status(sr_id,tr_id,client,res)
  {
    //console.log(name);
    //console.log(res);


    client.get("userName",function(err,reply) {
      var status={
         "SR_id":sr_id,
        "TR_id":tr_id,
        "status":"0"
      }

      //console.log(JSON.stringify(senders));
      connection.query('INSERT INTO info SET ?',status, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'information entered sucessfully'
          })
        }
      });
    });



  }
}
module.exports=senderStatus;
