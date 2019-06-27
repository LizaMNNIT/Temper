var connection=require('./config');

class traveller{

  static travellerUser(username,flight,airport,date,time,loc,dest,res)
  {
    var travellers={
        "userName":username,
        "flightName":flight,
        "airportName":airport,
        "date":date,
        "time":time,
        "location":loc,
        "destination":dest
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

  }
}
module.exports=traveller;
