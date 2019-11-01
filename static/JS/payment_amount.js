
var pay=function()
{
  var inputTest = localStorage.getItem('objectToPass');
var inputTest1 = localStorage.getItem('userName');
  //console.log(inputTest);
   var s= document.getElementById('amount');
  s.value=inputTest;
  s.readOnly='readOnly';
  var s1= document.getElementById('uname');
 s1.value=inputTest1;
 s1.readOnly='readOnly';
//  localStorage.clear();
}
