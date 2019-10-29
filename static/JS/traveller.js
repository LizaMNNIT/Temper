$(function(){
         $('#traveller').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');

   var data = {};
   //data.username = $("#name").val();
   data.airline = $("#aname").val();
   data.date = $("#date").val();
   data.time = $("#time").val();
   data.to = $("#to").val();
    data.toCity = $("#toCity").val();
   data.from = $("#from").val();
    data.fromCity = $("#fromCity").val();
   data.ticket=$("#ticket").val();
   data.rate=$("#rate").val();
   data.capacity=$("#capacity").val();


console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/traveller',
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
