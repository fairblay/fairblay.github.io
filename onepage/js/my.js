var h=document.getElementById('h');
var m=document.getElementById('m');
var s=document.getElementById('s');
tik();
setInterval(tik,1000);

function tik() {
  var d=new Date();
  var gh=23-d.getHours();
  var gm=59-d.getMinutes();
  var gs=59-d.getSeconds();
  if(gh<10)
    gh="0"+gh;
  if(gm<10)
    gm="0"+gm;
  if(gs<10)
    gs="0"+gs;
  h.innerHTML=gh+" :";
  m.innerHTML=gm+" :";
  s.innerHTML=gs;
}
