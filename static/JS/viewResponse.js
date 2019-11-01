$(document).ready(function(){
        console.log('select_link clicked');

var data={};

data.id=localStorage.getItem('object1');

console.log(JSON.stringify(data));

$.ajax({
type: 'POST',
            crossDomain: true,
             data: JSON.stringify(data),
             contentType: 'application/json',
          url: 'http://localhost:4010/viewResponse',
            success: function(data) {
                console.log('success');

                console.log(data);
                var col = [];
                console.log(data.data);
                var data1 = data.data;
                if(data1=='')
                {
                  console.log('hello');
                //  document.getElementById('t2').innerHTML="";
                    document.getElementById('t5').innerHTML="There are no current requests corresponding to your trip";
                    document.getElementById('t5').style.color="red";
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
        var table = document.getElementById("t5");
        var i,j;
        for ( i = 0; i < data1.length; i++) {

            tr = table.insertRow(-1);
          var s='<div id="';
            for ( j = 0; j < col.length; j++) {
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
            var s2=t+t;
            s=s+t+t+'"><button type="button" class="btn btn-primary"  id="'+t+'1" >Accept</button> <button type="button" class="btn btn-danger"  id="'+t+'0" >Decline</button></div>'
      tabCell.innerHTML=s;

        if (data1[i][col[j-1]]=='1')
        {
          console.log('hello');
          console.log(data1[i][col[j-1]]);
          document.getElementById(s2).innerHTML="Accepted";
          document.getElementById(s2).style.color="green";
        }
        if (data1[i][col[j-1]]=='-1')
         {
           console.log('bye');
           console.log(data1[i][col[j-1]]);
           document.getElementById(s2).innerHTML="Declined";
           document.getElementById(s2).style.color="red";
         }
//onclick="View(this.id)"
        }
            }
          },
            error: function( jqXHR, textStatus, errorThrown) {

        console.log('error');
      }

        });

  });


  $( "li.item-a" )
  .closest( "ul" )
  .css( "background-color", "red" );



  $(document).on("click","button",function(){
    console.log('select_link clicked');

var data={};

data.tr_id=localStorage.getItem('object1');

var r=this.id;
data.sr_id=r.substring(0, r.length-1);
if (r.substr(-1)=='1')
{
data.flag="1";
//(s1).empty();
$(this).closest( "div" ).css( "color", "green" );
$(this).closest( "div" ).text( "Accepted" );
//document.getElementById(s1).innerHTML="Request Sent";
//document.getElementById(s1).style.color="blue";
}
else
  {
    data.flag="-1";
    $(this).closest( "div" ).css( "color", "red" );
    $(this).closest( "div" ).text( "Declined" );
  }
//$(s1).html("Request Sent");
//$(s1).style.color="green";
console.log(JSON.stringify(data));

$.ajax({
     type: 'POST',
                 crossDomain: true,
     data: JSON.stringify(data),
         contentType: 'application/json',
               url: 'http://localhost:4010/respond',
                 success: function(data) {
                     console.log('success');
                     console.log(data);


                 },
                 error: function( jqXHR, textStatus, errorThrown) {

             console.log('error');
           }

             });
           });
