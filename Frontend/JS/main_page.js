$(function(){
         $('#logout').click(function(e){
             e.preventDefault();
             console.log('select_link clicked');
             $.ajax({
             type: 'POST',
                         crossDomain: true,
                       url: 'http://localhost:4010/logout',
                         success: function(data) {
                             console.log('success');
                             console.log(data);
                  window.location.replace('/Temper/static/home.html');
                         },
                         error: function( jqXHR, textStatus, errorThrown) {

                     console.log('error');
                   }

                     });
           });

       });

       var fetchName=function(){
         console.log('select_link clicked');
         $.ajax({
         type: 'POST',
                     crossDomain: true,
                   url: 'http://localhost:4010/userName',
                     success: function(data) {
                         console.log('success');
                         console.log(data);
            document.getElementById('fetch').innerHTML=data.name;
                     },
                     error: function( jqXHR, textStatus, errorThrown) {

                 console.log('error');
               }

                 });
       }
