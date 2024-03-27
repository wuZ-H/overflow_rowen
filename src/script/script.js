var counter_rowen=0;

function play_click(){
  create_div(box);
  create_div(bar_top);
  create_rowen();
}

function create_rowen(){
  counter_rowen++;
  var rowen=document.createElement("div");
  cell.setAttribute("class","rowen");
  cell.setAttribute("id","rowen"+counter_rowen);
  document.body.appendChild(rowen);
}

function create_div(id){
  var div=document.createElement("div");
  cell.setAttribute("id",id);
  document.body.appendChild(id);
}
function set_size(i,h,w){
  document.getElementById(i).style.height="calc("+h+")";
  document.getElementById(i).style.width="calc("+w+")";
}
function set_posi(i,t,l){
  document.getElementById(i).style.top="calc("+t+")";
  document.getElementById(i).style.left="calc("+l+")";
}
