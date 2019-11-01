
  $(document).ready(function(e){
    console.log(sessionStorage.getItem("isfalse"));
     if(sessionStorage.getItem("isfalse")=="true")
     return false;
    console.log('select_link');

  $.ajax({
    type:'POST',
    crossDomain:true,
    url:'http://localhost:4010/',
    success:function(data)
    {
      console.log('root page');
      if(data.code==101)
      {
        sessionStorage.setItem("isfalse", "false");
      location.assign('./main_page.html');
      }
      else if(data.code==102)
      {
      sessionStorage.setItem("isfalse", "true");
      location.assign('./home.html');
      }
    },
    error: function( jqXHR, textStatus, errorThrown) {
      //if body is empty we end up here

      console.log('error');
    }
  });
});
