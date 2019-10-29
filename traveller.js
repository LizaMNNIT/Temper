var connection=require('./config');
var uuid = require('uuid/v1');
class traveller{

  static travellerUser(flight,date,time,dest,toCity,loc,fromCity,ticket,rate,capacity,client,res)
  {


    client.get("userName",function(err,reply){

       const p = uuid();

      var travellers={
        "TR_id":p,
          "userName":reply,
          "flightName":flight,
          "date":date,
          "time":time,
          "fromAirport":loc,
          "fromCity":fromCity,
          "toAirport":dest,
          "toCity":toCity,
          "Ticket_No":ticket,
          "rate":rate,
          "capacity":capacity
      }

      connection.query('INSERT INTO traveller SET?',travellers,function(err,rows,field){
          if(err)
          {
              console.log(err);
              res.json({
                  status:false,
                  message:'there is some error in the query'
              })
          }
          else{
              res.json({
                  status:true,
                  data:rows,
                  message:'You are sucessfully registered as traveller'
              })
          }
      });

    });


  }
}
module.exports=traveller;
