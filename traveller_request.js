var connection = require('./config');
class traveller_request{

  static travellerRequest(client,res)
  {
    //console.log(name);
    //console.log(res);

    client.get("userName",function(err,reply) {
      var id=reply;

      connection.query('SELECT TR_id , date, fromAirport ,toAirport,Ticket_No,capacity  from traveller where userName=?',[id], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'traveller trips retrieved'
          })
        }
      });
    });



  }
}
module.exports=traveller_request;
