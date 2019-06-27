
var check=function()
{
  $.ajax({
    type:'POST',
    crossDomain:true,
    contentType:'application/json',
    url:'http://localhost:4010/',
    success:function(data)
    {
      console.log('root page');
      if(data.code==101)
      window.location.replace('./choice.html');
      else if(data.code==102)
      window.location.replace('./home.html');
    }
  })
}
