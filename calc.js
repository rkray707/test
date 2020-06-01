var numfield1 = 
document.getElementById('numfield1');
var numfield2 = 
document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield');
var form = 
document.getElementById('percentage');

form.addEventListener('submit', function(event) {
  if(!numfield1.value || !numfield2.value){
    alert("please enter value");
  } else{
    var x= parseFloat(numfield1.value);
    var y= parseFloat(numfield2.value);
    var z = x/y;
    var per = z*100;
    
    resultfield.innerText = "Result:" + per + "%";
    event.preventDefault();
  } 
});