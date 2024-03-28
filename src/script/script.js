var counter_rowen=0;



function play_click(){
  create_div(box);
  set_size(box,"80vh","40vh");
  set_posi(box,"10vh","calc(50vw-20vh)");
  create_div(bar_top);
  set_size(bar_top,"10vh","100vw");
  set_posi(bar_top,"0","0");
  create_rowen();
}

function create_rowen(){
  counter_rowen++;
  var rowen=document.createElement("div");
  rowen.setAttribute("class","rowen");
  rowen.setAttribute("id","rowen"+counter_rowen);
  document.body.appendChild(rowen);
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
