$(document).ready(function(){


        console.log('select_link clicked');

$.ajax({
type: 'POST',
            crossDomain: true,
          url: 'http://localhost:4010/traveller_request',
            success: function(data) {
                console.log('success');

                console.log(data);
                var col = [];
                var data1 = data.data;
                console.log(data1);
                if(data1=='')
                {
                  document.getElementById('t4').innerHTML="";
                    document.getElementById('t4').innerHTML="There are no current trips";
                    document.getElementById('t4').style.color="red";
                }
else{
        for (var i = 0; i < data1.length; i++) {
            for (var key in data1[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.getElementById("t4");





        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data1.length; i++) {

            tr = table.insertRow(-1);
          var s='<button type="button" class="btn btn-primary"  id="';
            for (var j = 0; j < col.length+1; j++) {
              var tabCell = tr.insertCell(-1);
              if(j==0)
              {
              var t=data1[i][col[j]];
                tabCell.innerHTML = data1[i][col[j]].substr(0,5);
            }
            else {
              tabCell.innerHTML = data1[i][col[j]];
            }

            }
            s=s+t+'" >View requests</button>'
      tabCell.innerHTML=s;
//onclick="View(this.id)"

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

  $(document).on("click","button",function(){
   var btn=this.id;

     localStorage.setItem( 'object1', btn );
      window.location.replace('/Temper/static/travellercurrent.html');
 });
