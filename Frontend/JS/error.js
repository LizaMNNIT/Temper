$(function(){
$('#retry').click(function(){
  $('#popUpWindow_ERROR').modal('hide');
});
});

  var retry=function(){
      $('#popUpWindow_ERROR').modal('hide');
  }

  var subscribe=function(){
    console.log($("#userName1").val());
    localStorage.setItem( 'userName', $("#userName1").val() );
    console.log(localStorage.getItem("userName"));
    $('subscribe_error').modal('hide');
    window.location.replace('/Temper/static/subscribe.html');
  }

  var success=function(){
    $('success').modal('hide');
        console.log('select_link clicked');

       var data = {};
         data.userName = $("#uname").val();
       //data.username = $("#name").val();

       console.log(JSON.stringify(data));

       $.ajax({
       type: 'POST',
            crossDomain: true,
       data: JSON.stringify(data),
       contentType: 'application/json',
          url: 'http://localhost:4010/dashboard',
            success: function(data) {
                console.log('success');
                console.log(data.message);
         window.location.replace('/Temper/static/main_page.html');
            },
            error: function( jqXHR, textStatus, errorThrown) {

        console.log('error');
       }

        });
  }
