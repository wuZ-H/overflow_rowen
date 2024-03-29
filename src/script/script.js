var counter_rowen=0;
var timer_drop_rowen;
var array_rowen=[0];
array_rowen[0]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[1]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[2]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[3]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[4]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[5]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[6]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[7]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[8]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[9]=[0,0,0,0,0,0,0,0,0,0];
array_rowen[10]=[0,0,0,0,0,0,0,0,0,0];

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
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      while(array_rowen[][]){
      }
      create_rowen(i*10+j,j,0);
      drop_rowen(10*i+j);
    }
  }
}

function create_rowen(id,x,y){
  counter_rowen++;
  var rowen=document.createElement("div");
  rowen.setAttribute("class","rowen");
  rowen.setAttribute("id","rowen"+counter_rowen);
  document.body.appendChild(rowen);
  array_rowen[x][y]="rowen"+id;
  set_size("rowen"+counter_rowen,"8vh","6vh");
}

function delete_rowen(id){
  var rowen=document.getElementById("rowen"+id);
  document.body.removeChild(rowen);
  counter_rowen--;
}

function drop_rowen(id){
  var rowen=document.getElementById("rowen"+id);
  var x=0;
  var x_=0;
  var y=0;
  for(var i=0; i<10; i++){
    x=array_rowen[i].indexOf("rowen"+id);
    if(x != -1){
      y=i;
      x_=x;
    }
  }
  x=x_;
  drop_rowen_timer(id,x,y);
}

function drop_rowen_timer(id,x,y){
  clearTimeout(timer_drop_rowen);
  timer_drop_rowen=null;
  if(array_rowen[y+1][x] == 0){
    array_rowen[y][x]=0;
    array_rowen[y+1][x]="rowen"+id;
    set_posi("rowen"+counter_rowen,"calc(10vh + 8vh * "+y+")","calc(50vw - 30vh + 6vh * " + x + ")");
    y++;
    timer_drop_rowen=setTimeout(function(){drop_rowen_timer(id,x,y)},500);
  }
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