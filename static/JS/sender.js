$(function(){
         $('#sender').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');

   var data = {};
   //data.username = $("#name").val();
   data.loc = $("#loc").val();
   data.dest = $("#dest").val();
   data.date = $("#date").val();
   data.weight = $("#weight").val();
   data.type = $("#type").val();



console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/sender',
                 success: function(data) {
                     console.log('success');
                     console.log(data.message);
                    /* if(data.status==false)
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

                  }*/
                 },
                 error: function( jqXHR, textStatus, errorThrown) {
             //if body is empty we end up here
            /* $('#popUpWindow2').modal('hide');
               $('#par').text('Internal server error');
            $('#popUpWindow_ERROR').modal('show');*/
             console.log('error');
           }

             });
           });
       });
