setTimeout(function(){
var $ = function(id) {
  return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'Coming This March.......';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
var t;
$('Terminal').style.display = 'none';
var anim = function() {
  inc++;
  if (inc % 7 === 0 && out < str.length) {
    $('anim').appendChild(document.createTextNode(str[out]));
    out++;
  } else if (out >= str.length) {
    clearInterval(t);    
    $('shuffle').innerHTML = '';  
  }
  $('shuffle').innerHTML =
    chars[Math.floor(Math.random() * chars.length)];
  if (out >= str.length) {
    clearInterval(t);    
    $('shuffle').innerHTML = '';  
  }
};
t = setInterval(anim, 50);
$('shuffle').innerHTML = '';

//Do it again
/*function reload() {
  window.location.href = window.location.href;
}
document.getElementById('btn').onclick = reload;*/
},13000);

