var connection = require('./config');

class respond{

  static response(sr_id,tr_id,flag,client,res)
  {
    //console.log(name);
    //console.log(res);


    client.get("userName",function(err,reply) {
      var flag1=flag;
      var SR_id=sr_id;
      var TR_id=tr_id;
      var st="0";
      console.log(sr_id);
      console.log(tr_id);
      //console.log(JSON.stringify(senders));
      if(flag==="1")
      {
        console.log('happy');
      connection.query('update info set status=? where SR_id=? and TR_id=?;update traveller set capacity=capacity-(select weight from sender where SR_id=?) where TR_id=?;insert into shipment values((select userName from sender where SR_id=?),(select userName from traveller where TR_id=?),(select location from sender where SR_id=?),(select destination from sender where SR_id=?),(select date from traveller where TR_id=?),(select weight from sender where SR_id=?),?) ',[flag1,sr_id,tr_id,sr_id,tr_id,sr_id,tr_id,sr_id,sr_id,tr_id,sr_id,st], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'database updated sucessfully'
          })
        }
      });
    }
    else if(flag=="-1")
    {
      console.log('sad');
      connection.query('update info set status=? where SR_id=? and TR_id=?',[flag1,sr_id,tr_id], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:error.sqlMessage
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'database updated sucessfully'
          })
        }
      });
    }


    });



  }
}
module.exports=respond;
