export default class Obstacle2{
constructor(){
this.height=100;
this.width=100;
this.position={x:600,y:300};
  window.touchX12=(false);
  window.touchX22=(false);
 window.touchY2=(false);
}
draw(ctx){
ctx.fillStyle=("#008000");
ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
proccessloop(){
if((window.PlayerY+151>this.position.y)&&(window.PlayerX+100>this.position.x)){
if((window.PlayerX<this.position.x+100)&&(window.PlayerY+151<this.position.y+16)){
window.touch2=(true);
  window.touchY2=(true);
}else{
window.touchY2=(false);
  window.touch2=(false);
}
}else{
window.touchY2=(false);
  window.touch2=(false);
}
  if((window.PlayerX+100>this.position.x)&&(window.PlayerX+50<this.position.x+50)){
if(window.PlayerY+150>this.position.y+10){
window.touchX12=(true);
}else{window.touchX12=(false);}
  }else{window.touchX12=(false);}
   if((window.PlayerX<this.position.x+100)&&(window.PlayerX+50>this.position.x+50)){
if(window.PlayerY+150>this.position.y+10){
window.touchX22=(true);
}else{window.touchX22=(false);}
  }else{window.touchX22=(false);}
  if((window.enemy2X+150>this.position.x)&&(enemy2X+75<this.position.x+50)){
  if(window.enemy2Y+50>this.position.y){
  window.enemy2Xtouch12=(true);
  }else{ window.enemy2Xtouch12=(false);}
  }else{ window.enemy2Xtouch12=(false);}
  if((window.enemy2X<this.position.x+100)&&(window.enemy2X+75>this.position.x+50)){
  if(window.enemy2Y+50>this.position.y){
window.enemy2Xtouch22=(true);
  }else{ window.enemy2Xtouch22=(false);}
  }else{ window.enemy2Xtouch22=(false);}
  window.obstacle2Y=this.position.y;
  window.obstacle2X=this.position.x;
}

}
