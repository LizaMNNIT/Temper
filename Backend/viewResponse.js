var connection = require('./config');
class viewResponse{

  static travellerOptions(request_id,client,res)
  {
    
    client.get("userName",function(err,reply) {
      //var id=reply;

      connection.query("select distinct s.SR_id,s.userName,r.name,s.weight,s.type,i.status from sender s, registration r,info i where s.SR_id in (select SR_id from info where TR_id=? and r.userName=s.userName) and i.TR_id=? and i.SR_id=s.SR_id", [request_id,request_id,request_id,request_id] , function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'Responses retrieved'
          })
        }
      });
    });



  }
}
module.exports=viewResponse;
