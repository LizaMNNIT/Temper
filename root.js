var connection=require('./config');

class root{

static rootUser(client,res){
  if(client.get('userName'))
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
}

}

module.exports=root;
