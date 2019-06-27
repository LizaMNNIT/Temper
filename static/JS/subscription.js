
/*  $("#yearly").click(function(e){
    //$("#amount").value="2499";
    localStorage.setItem( 'objectToPass', "2499" );
  //  $("#amount").DISABLE="disable";
  });
  $('#monthly').click(function(){
  //  $("#amount").value="499";

  //  $("#amount").DISABLE="disable";
  });
*/
var year = function(){
    localStorage.setItem( 'objectToPass', "2499" );
    window.location.replace('/Sosili/static/payment.html');
}

var monthly = function(){
  localStorage.setItem( 'objectToPass', "499" );
  window.location.replace('/Sosili/static/payment.html');
}
