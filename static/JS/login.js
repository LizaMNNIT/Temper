$(function(){
         $('#login1').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');
 var data = {};

   data.username1 = $("#usname1").val();
   data.password = $("#pass").val();


console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/login',
                 success: function(data) {
                  console.log(data.code);
               if(data.code==201)
                 {
                   $('#popUpWindow').modal('hide');
                     $('#par').text('UserName and password do not match');
                  $('#popUpWindow_ERROR').modal('show');
                }
              else if(data.code==301)
                  {
                    $('#popUpWindow').modal('hide');
                      $('#par').text('Register First');
                   $('#popUpWindow_ERROR').modal('show');
                 }
                 else if(data.code==202)
                 {
                   $('#popUpWindow').modal('hide');
                   $('#ersucc').text('Error!');
                     $('#par2').text('Subscribe first');
                  $('#subscribe_error').modal('show');
                  // $('#popUpWindow_ERROR').modal('hide');
                   //window.location.replace('/SoSiLi/static/subscribe.html');
                 }
                 else if(data.code==200)
                 {
                   window.location.replace('/SoSiLi/static/choice.html');
                 }




                     console.log('success');
                     console.log(data);
                     //console.log(JSON.stringify(data));
                     //alert(JSON.stringify(data));
                   //	$("#answer").text(JSON.stringify(data.message));
                 },
              error: function( jqXHR, textStatus, errorThrown) {
          //if body is empty we end up here
          $('#popUpWindow').modal('hide');
            $('#par').text('Internal server error');
         $('#popUpWindow_ERROR').modal('show');
          console.log('error');
        }


             });
           });
       });
