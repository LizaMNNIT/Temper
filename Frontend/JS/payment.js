

$(function(){
         $('#pay').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');
     var today = new Date();
     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var data = {};

   data.userName = $("#uname").val();
   data.amount = $("#amount").val();
   data.subs_date=date;
   data.subs_time=time;

console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/payment',
               success: function(data) {
                   console.log('success');
                   console.log(data);
                   if(data.status==false)
                   {
                  // $('#popUpWindow2').modal('hide');
                     $('#par1').text(data.message);
                  $('#popUpWindow_ERROR').modal('show');
                }
              else
                {
                  $('#par3').text(data.message);
               $('#success').modal('show');
                }
               },
               error: function( jqXHR, textStatus, errorThrown) {

             $('#par1').text('Internal server error');
          $('#popUpWindow_ERROR').modal('show');
           console.log('error');
         }

             });
           });
       });

    
