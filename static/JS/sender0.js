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

                 },
                 error: function( jqXHR, textStatus, errorThrown) {

             console.log('error');
           }

             });
           });
       });
