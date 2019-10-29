var connection=require('./config');

class root{

static rootUser(client,res){
  client.get("userName",function(err,reply) {
    console.log(reply);
    if(reply!=null)
    {
      res.json({
        status:true,
        code:101
      });
    }
    else{
      res.json({
        status:true,
        code:102
      });
    }
  });
 
}

}

module.exports=root;
