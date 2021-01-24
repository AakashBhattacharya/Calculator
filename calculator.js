function getinput(val){
document.getElementById('result').value+=val;
}
function solve(){
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
}
function clearScreen(){
  document.getElementById('result').value = "";
}
var body = document.getElementById('bd')
var btn1 = document.getElementById('dark');
var btn2 = document.getElementById('light');
var buttons = document.getElementsByClassName('btn');
var clear = document.getElementById('clc');
btn1.addEventListener('click', function(){
 body.style.backgroundColor = "#060930";
 btn1.style.boxShadow = "none";
 btn2.style.boxShadow = "none";
 var len1 = buttons.length;
 for(var i = 0;i<len1;i++){
 buttons[i].style.boxShadow = "none";
}
});
btn2.addEventListener('click', function(){
  body.style.backgroundColor = "#16c79a";
  btn1.style.boxShadow = "2px 2px grey";
  btn2.style.boxShadow = "2px 2px grey";
  var len2 = buttons.length;
  for(var j = 0;j<len2;j++){
  buttons[j].style.boxShadow = "2px 2px grey";
}
});
