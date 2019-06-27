var connection = require('./config');

class sender{

  static senderUser(username,loc,dest,begdate,enddate,weight,res)
  {
    var senders={
        "userName":username,
        "location":loc,
        "destination":dest,
        "fromDate":begdate,
        "toDate":enddate,
        "weight":weight
    }
    connection.query('INSERT INTO sender SET ?',senders, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'sender request registered sucessfully'
        })
      }
    });
  }
}
module.exports=sender;
