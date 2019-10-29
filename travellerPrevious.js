var connection = require('./config');
class travellerPrevious{

  static previous(client,res)
  {
    //console.log(name);
    //console.log(res);
//select t.userName,r.name,t.toCity,t.date from traveller t, registration r where t.TR_id in (select TR_id from info where SR_id in(select SR_id from sender where userName='LizaSingla1')) and  t.userName= r.userName ;
    client.get("userName",function(err,reply) {
      var id=reply;

      connection.query('select s.userName,r.name,s.destination,t.date from sender s, registration r,traveller t where s.SR_id in (select SR_id from info where TR_id in(select TR_id from traveller where userName=?)) and  s.userName= r.userName',[id], function (error, results, fields) {
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
