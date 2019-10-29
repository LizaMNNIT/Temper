var connection = require('./config');
class viewOptions{

  static senderOptions(request_id,client,res)
  {
    //console.log(name);
    //console.log(res);


    client.get("userName",function(err,reply) {
      //var id=reply;

      connection.query("select t.userName as 'UserName_of_traveller',r.name as 'Name_of_Traveller',t.rate as 'rate_per_kg' from traveller t, registration r,sender s where t.toCity=(select destination from sender where SR_id=?) and t.date between (select date_sub((select fromDate from sender where SR_id=?),interval 2 day)) and (select date_add((select fromDate from sender where SR_id=?),interval 2 day)) and t.userName=r.userName and t.userName!=s.userName and t.capacity>s.weight", [request_id,request_id,request_id] , function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'traveller options retrieved'
          })
        }
      });
    });



  }
}
module.exports=viewOptions;
