
setTimeout(function(){
var $ = function(id) {
  return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'Coming This Spring.......@23^ - 25* march\'17';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
var t;
$('Terminal').style.opacity=0;
var anim = function() {
  inc++;
  if (inc % 7 === 0 && out < str.length) {
    if(str[out]=='@')
    {
     // var lbreak  = document.createElement("BR");
      
     // $('anim').appendChild(lbreak);

    }
    else if(str[out]=='^')
    {
      var sup1  = document.createElement("SUP");
      sup1.appendChild(document.createTextNode("rd"));
      $('anim').appendChild(sup1);
    }
    else if(str[out]=='*')
    {
      var sup2  = document.createElement("SUP");
      sup2.appendChild(document.createTextNode("th"));
      $('anim').appendChild(sup2);
    }
    else
    $('anim').appendChild(document.createTextNode(str[out]));
    out++;
  }
   else if (out >= str.length) {
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
