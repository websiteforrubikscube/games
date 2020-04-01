export default class Obstacle1{
constructor(){
this.height=100;
this.width=100;
this.position={x:450,y:300};
  window.touchX1=(false);
  window.touchX2=(false);
 window.touchY=(false);
}
draw(ctx){
ctx.fillStyle=("#008000");
ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
proccessloop(){
if((window.PlayerY+151>this.position.y)&&(window.PlayerX+100>this.position.x)){
if((window.PlayerX<this.position.x+100)&&(window.PlayerY+151<this.position.y+3)){
window.touch=(true);
  window.touchY=(true);
}else{
window.touchY=(false);
  window.touch=(false);
}
}else{
window.touchY=(false);
  window.touch=(false);
}
  if((window.PlayerX+100>this.position.x)&&(window.PlayerX+50<this.position.x+50)){
if(window.PlayerY+150>this.position.y+15){
window.touchX1=(true);
}else{window.touchX1=(false);}
  }else{window.touchX1=(false);}
   if((window.PlayerX<this.position.x+100)&&(window.PlayerX+50>this.position.x+50)){
if(window.PlayerY+150>this.position.y+15){
window.touchX2=(true);
}else{window.touchX2=(false);}
  }else{window.touchX2=(false);}
  if((window.enemy2X+150>this.position.x)&&(enemy2X+75<this.position.x+50)){
  if(window.enemy2Y+50>this.position.y){
  window.enemy2Xtouch1=(true);
  }else{ window.enemy2Xtouch1=(false);}
  }else{ window.enemy2Xtouch1=(false);}
  if((window.enemy2X<this.position.x+100)&&(window.enemy2X+75>this.position.x+50)){
  if(window.enemy2Y+50>this.position.y){
window.enemy2Xtouch2=(true);
  }else{ window.enemy2Xtouch2=(false);}
  }else{ window.enemy2Xtouch2=(false);}
  window.obstacle1Y=this.position.y;
  window.obstacle1X=this.position.x;
}

}
