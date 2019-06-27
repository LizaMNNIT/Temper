$(function(){
         $('#register').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');

   var data = {};
   data.name = $("#name").val();
   data.email = $("#email").val();
   data.userName = $("#userName").val();
   data.password = $("#password").val();
   data.contact = $("#contact").val();
   data.aadhar = $("#aadhaar").val();
   data.expiryDate="0000-00-00";


console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/register',
                 success: function(data) {
                     console.log('success');
                     console.log(data);
                     if(data.status==false)
                     {
                     $('#popUpWindow2').modal('hide');
                       $('#par').text(data.message);
                    $('#popUpWindow_ERROR').modal('show');
                  }
                 else
                  {
                     $('#popUpWindow2').modal('hide');
                     $('#ersucc').text('Success');
                       $('#par2').text('User registered Successfully');
                    $('#subscribe_error').modal('show');

                  }
                 },
                 error: function( jqXHR, textStatus, errorThrown) {
             //if body is empty we end up here
             $('#popUpWindow2').modal('hide');
               $('#par').text('Internal server error');
            $('#popUpWindow_ERROR').modal('show');
             console.log('error');
           }

             });
           });
       });
