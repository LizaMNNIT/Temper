var connection = require('./config');
var uuid = require('uuid/v1');
class sender{

  static senderUser(loc,dest,date,weight,type,client,res)
  {
    //console.log(name);
    //console.log(res);
  const p=uuid();

    client.get("userName",function(err,reply) {
      var senders={
         "SR_id":p,
          "userName":reply,
          "location":loc,
          "destination":dest,
          "fromDate":date,
          "weight":weight,
          "type":type
      }

      console.log(JSON.stringify(senders));
      connection.query('INSERT INTO sender SET ?',senders, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'sender request registered sucessfully'
          })
        }
      });
    });



  }
}
module.exports=sender;
