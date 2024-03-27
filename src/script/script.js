var counter_rowen=0;

function play_click(){
  
}
function create_rowen(){
  counter_rowen++;
  var rowen=document.createElement("div");
  cell.setAttribute("class","rowen");
  cell.setAttribute("id","rowen"+counter_rowen);
  document.body.appendChild(rowen);
}
