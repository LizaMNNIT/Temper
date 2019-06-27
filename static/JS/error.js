$(function(){
$('#retry').click(function(){
  $('#popUpWindow_ERROR').modal('hide');
    //$('#par').text('UserName and password do not match');
// $('#popUpWindow').modal('show');
});
});

  var retry=function(){
      $('#popUpWindow_ERROR').modal('hide');
  }

  var subscribe=function(){
    $('subscribe_error').modal('hide');
    window.location.replace('/SoSiLi/static/subscribe.html');
  }

  var success=function(){
    $('success').modal('hide');
    window.location.replace('/SoSiLi/static/choice.html');
  }
