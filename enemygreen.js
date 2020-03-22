import Player from "./player.js";

export default class Enemygreen{
constructor(){
this.width=200;
  this.height=100;
  this.position={x:400, y:300};
   window.color  =('#90EE90');
  this.visable=(true);
}
draw(ctx){
  if(visable==true){
ctx.fillStyle=(window.color);
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  }
proccessloop(ctx){
if((window.PlayerX-50>this.position.x)&&(window.PlayerY>249)){
this.position.x= this.position.x + 5;
}
  if((window.PlayerX-50<this.position.x)&&(window.PlayerY>249)){
this.position.x= this.position.x - 5;
}
  if((window.PlayerX>this.position.x-100)&&(window.PlayerX<this.position.x+200)){
    if(window.PlayerY>151){
 window.color =("#a6ffad");
      this.visable=(false);
    }else{
  window.color  =('#90EE90');
  }
  }else{
  window.color  =('#90EE90');
  }
  if(this.position.x<0){
  this.position.x=0;
  }
  if(this.position.x>800){
  this.position.x=800;
  }
}
}
