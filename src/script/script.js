var counter_rowen=0;
var timer_born_rowen;
var timer_resborn_rowen;
var array_color=["red","orange","yellow","green","blue","purple"];
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
var array_rowen_c=array_rowen;

var btn=document.getElementById("PLAY");
btn.setAttribute("onclick","play_click()");

function play_click(){
  var p=document.getElementById("title");
  document.body.removeChild(p);
  var btn=document.getElementById("PLAY");
  document.body.removeChild(btn);
  document.body.addEventListener("mousedown",function(event){mousedown_body(event.pageX,event.pageY); return false;});
  document.body.addEventListener("mouseup",function(event){mouseup_body(); return false;});

  create_div("box");
  set_size("box","80vh","60vh");
  set_posi("box","10vh","calc(50vw - 30vh)");

  create_div("bar_top");
  set_size("bar_top","10vh","100vw");
  set_posi("bar_top","0","0");

  born_rowen();
}

function born_rowen(){
  clearTimeout(timer_born_rowen);
  timer_born_rowen=null;
  if(counter_rowen<100){
    create_rowen("rowen"+counter_rowen,counter_rowen % 10,10);
    drop_rowen();
    timer_born_rowen=setTimeout(born_rowen,50);
  }
  else{
    /*for(var j=0; j<10; j++){
      for(var i=0; i<10; i++){
        var id="rowen"+ Number(i*10+j);
        document.getElementById(id).addEventListener("mousedown",function(event){mousedown_rowen(id); return false;});
      }
    }*/
  }
}

function resborn_rowen(){
  clearTimeout(timer_resborn_rowen);
  timer_born_rowen=null;
  if(counter_rowen<100){
    
  }
  else{
    
  }
}

function mousedown_body(x,y){
  var rowen=document.getElementById(array_rowen[0][0]);
  var l=1;
  var r=1;
  var t=1;
  var b=1;
  for(var j=0; j<10; j++){
    for(var i=0; i<10; i++){
      rowen=document.getElementById(array_rowen[i][j]);
      l=rowen.style.left;
      r=rowen.style.right;
      t=rowen.style.top;
      b=rowen.style.bottom;
      if(l<x<r && t<y<b){
        document.body.addEventListener("mousemove",function(event){mousemove_body(event.pageX,event.pageY,l,r,t,b,i,j); return false;});
      }
    }
  }
}

function mousemove_body(x,y,l,r,t,b,i,j){
  var rowen=document.getElementById(array_rowen[i][j]);
  var id=array_rowen[i][j];
  var i_=i;
  var j_=j;
  if(x<l){
    j_=j-1;
    array_rowen[i][j]=array_rowen[i_][j_];
    array_rowen[i_][j_]=id;
    set_posi(array_rowen[i][j],"calc(82vh - 8vh * "+ i +")","calc(50vw - 30vh + 6vh * " + j + ")");
    set_posi(array_rowen[i_][j_],"calc(82vh - 8vh * "+ i_ +")","calc(50vw - 30vh + 6vh * " + j_ + ")");
    document.body.removeEventListener("mousemove");
  }
  else if(x>r){
    j_=j+1;
    array_rowen[i][j]=array_rowen[i_][j_];
    array_rowen[i_][j_]=id;
    set_posi(array_rowen[i][j],"calc(82vh - 8vh * "+ i +")","calc(50vw - 30vh + 6vh * " + j + ")");
    set_posi(array_rowen[i_][j_],"calc(82vh - 8vh * "+ i_ +")","calc(50vw - 30vh + 6vh * " + j_ + ")");
    document.body.removeEventListener("mousemove");
  }
  else if(y<t){
    i_=i+1;
    array_rowen[i][j]=array_rowen[i_][j_];
    array_rowen[i_][j_]=id;
    set_posi(array_rowen[i][j],"calc(82vh - 8vh * "+ i +")","calc(50vw - 30vh + 6vh * " + j + ")");
    set_posi(array_rowen[i_][j_],"calc(82vh - 8vh * "+ i_ +")","calc(50vw - 30vh + 6vh * " + j_ + ")");
    document.body.removeEventListener("mousemove");
  }
  else if(y>b){
    i_=i-1;
    array_rowen[i][j]=array_rowen[i_][j_];
    array_rowen[i_][j_]=id;
    set_posi(array_rowen[i][j],"calc(82vh - 8vh * "+ i +")","calc(50vw - 30vh + 6vh * " + j + ")");
    set_posi(array_rowen[i_][j_],"calc(82vh - 8vh * "+ i_ +")","calc(50vw - 30vh + 6vh * " + j_ + ")");
    document.body.removeEventListener("mousemove");
  }
}

function mouseup_body(){
  try{
    document.body.removeEventListener("mousemove");
  }catch(e){}
}

/*function mousedown_rowen(id){
  var rowen=document.getElementById(id);
  var y=0;
  var x=array_rowen[y].indexOf(id);
  while(x==-1){
    y++;
    x=array_rowen[y].indexOf(id);
  }
  try{
    rowen=document.getElementById(array_rowen[y-1][x]);
    rowen.addEventListener("mouseenter",function(){mouseenter_rowen(y-1,x,y,x)});
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y+1][x]);
    rowen.addEventListener("mouseenter",function(){mouseenter_rowen(y+1,x,y,x)});
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y][x-1]);
    rowen.addEventListener("mouseenter",function(){mouseenter_rowen(y,x-1,y,x)});
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y][x+1]);
    rowen.addEventListener("mouseenter",function(){mouseenter_rowen(y,x+1,y,x)});
  }catch(e){}
}*/

/*function mouseenter_rowen(y_,x_,y,x){
  var rowen=document.getElementById(array_rowen[y_][x_]);
  var id=array_rowen[y][x];
  array_rowen[y][x]=array_rowen[y_][x_];
  array_rowen[y_][x_]=id;
  
  set_posi(array_rowen[y][x],"calc(82vh - 8vh * "+ y +")","calc(50vw - 30vh + 6vh * " + x + ")");
  set_posi(array_rowen[y_][x_],"calc(82vh - 8vh * "+ y_ +")","calc(50vw - 30vh + 6vh * " + x_ + ")");
  
  try{
    rowen=document.getElementById(array_rowen[y][x]);
    rowen.removeEventListener("mouseenter");
  }catch(e){}  
  try{
    rowen=document.getElementById(array_rowen[y-1][x]);
    rowen.removeEventListener("mouseenter");
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y+1][x]);
    rowen.removeEventListener("mouseenter");
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y][x-1]);
    rowen.removeEventListener("mouseenter");
  }catch(e){}
  try{
    rowen=document.getElementById(array_rowen[y][x+1]);
    rowen.removeEventListener("mouseenter");
  }catch(e){}
}*/

function check_rowen(){
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      var id=array_rowen[i][j];
      var rowen=document.getElementById(id);
      var color=rowen.class;
      var rowen_=n;
      var color_=n;
      switch(1){
        case 1:
          try{
            var rowen_=document.getElementById(array_rowen[i-1][j]);
            var color_=rowen_.class;
          }catch(e){}
          if(color == color_){
            try{
              var rowen_=document.getElementById(array_rowen[i-2][j]);
              var color_=rowen_.class;
            }catch(e){}
            if(color == color_){clash_rowen(i,j,"i-")}
          }
        case 2:
          try{
            var rowen_=document.getElementById(array_rowen[i+1][j]);
            var color_=rowen_.class;
          }catch(e){}
          if(color == color_){
            try{
              var rowen_=document.getElementById(array_rowen[i+2][j]);
              var color_=rowen_.class;
            }catch(e){}
            if(color == color_){clash_rowen(i,j,"i+")}
          }
        case 3:
          try{
            var rowen_=document.getElementById(array_rowen[i][j-1]);
            var color_=rowen_.class;
          }catch(e){}
          if(color == color_){
            try{
              var rowen_=document.getElementById(array_rowen[i][j-2]);
              var color_=rowen_.class;
            }catch(e){}
            if(color == color_){clash_rowen(i,j,"j-")}
          }
        case 4:
          try{
            var rowen_=document.getElementById(array_rowen[i][j+1]);
            var color_=rowen_.class;
          }catch(e){}
          if(color == color_){
            try{
              var rowen_=document.getElementById(array_rowen[i][j+2]);
              var color_=rowen_.class;
            }catch(e){}
            if(color == color_){clash_rowen(i,j,"j+")}
          }
      }
    }
  }
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      if(array_rowen_c[i][j] == 1){delete_rowen(array_rowen[i][j]); array_rowen_c[i][j] =0;}
    }
  }
}

function clash_rowen(i,j,houkou){
  array_rowen_c[i][j]=1;
  switch(houkou){
    case "i-":
      array_rowen_c[i-1][j]=1;
      array_rowen_c[i-2][j]=1;
      break;
    case "i+":
      array_rowen_c[i+1][j]=1;
      array_rowen_c[i+2][j]=1;
      break;
    case "j-":
      array_rowen_c[i][j-1]=1;
      array_rowen_c[i][j-2]=1;
      break;
    case "j+":
      array_rowen_c[i][j+1]=1;
      array_rowen_c[i][j+2]=1;
      break;
  }
}

function drop_rowen(){
  var y=0;
  var first_hole=[0,0,0,0,0,0,0,0,0,0];
  for(var i=0; i<10; i++){
    y=0;
    first_hole[i]=0;
    while(array_rowen[y][i] != 0){
      y++;
      first_hole[i]=y;
    }
  }
  for(var i=0; i<10; i++){
    if(first_hole[i] < 10){
      for(var j=first_hole[i]; j<10; j++){
        array_rowen[j][i]=array_rowen[j+1][i];
        array_rowen[j+1][i]=0;
        if(array_rowen[j][i]){
          set_posi(array_rowen[j][i],"calc(82vh - 8vh * "+ j +")",
                   "calc(50vw - 30vh + 6vh * " + i + ")");
        }
      }
    }
  }
}

function create_rowen(id,x,y){
  counter_rowen++;

  var rowen=document.createElement("div");
  rowen.setAttribute("class","rowen "+array_color[Math.floor(Math.random() * 6)]);
  rowen.setAttribute("id",id);
  document.body.appendChild(rowen);

  array_rowen[y][x]=id;

  set_size(id,"8vh","6vh");
  set_posi(id,"calc(82vh - 8vh * "+y+")","calc(50vw - 30vh + 6vh * " + x + ")");
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
