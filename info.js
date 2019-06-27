var connection=require('./config');

class info{

  static infoUser(S_id,T_id,amount,res)
  {
    var list={
        "Sid":S_id,
        "Tid":T_id,
        "amount":amount
    }

    connection.query('INSERT INTO info SET?',list,function(err,result,fields){
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
                data:result,
                message:'You are sucessfully registered as traveller'
            })
        }
    });
  }
}
module.exports=info;
