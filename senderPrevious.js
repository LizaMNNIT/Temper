var connection = require('./config');
class senderPrevious{

  static previous(client,res)
  {
    //console.log(name);
    //console.log(res);
//select t.userName,r.name,t.toCity,t.date from traveller t, registration r where t.TR_id in (select TR_id from info where SR_id in(select SR_id from sender where userName='LizaSingla1')) and  t.userName= r.userName ;
    client.get("userName",function(err,reply) {
      var id=reply;
     console.log(id);
      connection.query('select T_name,fromCity,toCity,date,weight from shipment where S_name=?',[id], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'previous orders retreived'
          })
        }
      });
    });



  }
}
module.exports=senderPrevious;
