
var pay=function()
{
  var inputTest = localStorage.getItem('objectToPass');
  //console.log(inputTest);
   var s= document.getElementById('amount');
  s.value=inputTest;
  s.readOnly='readOnly';
  localStorage.clear();
}
