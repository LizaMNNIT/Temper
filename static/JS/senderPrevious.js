$(document).ready(function(){


        console.log('select_link clicked');

$.ajax({
type: 'POST',
            crossDomain: true,
          url: 'http://localhost:4010/senderPrevious',
            success: function(data) {
                console.log('success');

                console.log(data);
                var col = [];
                var data1 = data.data;
                if(data1=='')
                {
                  document.getElementById('t3').innerHTML="";
                    document.getElementById('t3').innerHTML="There are no previous requests";
                    document.getElementById('t3').style.color="red";
                }

        for (var i = 0; i < data1.length; i++) {
            for (var key in data1[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.getElementById("t3");





        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data1.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data1[i][col[j]];
            }

        }


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
