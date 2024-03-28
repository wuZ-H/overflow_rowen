var counter_rowen=0;

var btn=document.getElementById("PLAY");
btn.setAttribute("onclick","play_click()");

function play_click(){
  var p=document.getElementById("title");
  document.body.removeChild(p);
  var btn=document.getElementById("PLAY");
  document.body.removeChild(btn);
  create_div("box");
  set_size("box","80vh","60vh");
  set_posi("box","10vh","calc(50vw - 30vh)");
  create_div("bar_top");
  set_size("bar_top","10vh","100vw");
  set_posi("bar_top","0","0");
  create_rowen();
}

function create_rowen(){
  counter_rowen++;
  var rowen=document.createElement("div");
  rowen.setAttribute("class","rowen");
  rowen.setAttribute("id","rowen"+counter_rowen);
  document.body.appendChild(rowen);
}

function delete_rowen(id){
  var rowen=document.getElementById(id);
  document.body.removeChild(rowen);
  counter_rowen--;
}

function create_div(id){
  var div=document.createElement("div");
  div.setAttribute("id",id);
  document.body.appendChild(div);
}
function set_size(i,h,w){
  document.getElementById(i).style.height=h;
  document.getElementById(i).style.width=w;
}
function set_posi(i,t,l){
  document.getElementById(i).style.top=t;
  document.getElementById(i).style.left=l;
}