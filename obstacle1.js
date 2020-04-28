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
if((window.PlayerX<this.position.x+100)&&(window.PlayerY+151<this.position.y+16)){
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
if(window.PlayerY+150>this.position.y+10){
window.touchX1=(true);
}else{window.touchX1=(false);}
  }else{window.touchX1=(false);}
   if((window.PlayerX<this.position.x+100)&&(window.PlayerX+50>this.position.x+50)){
if(window.PlayerY+150>this.position.y+10){
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
  
   if((window.enemy2X2+150>this.position.x)&&(enemy2X2+75<this.position.x+50)){
  if(window.enemy2Y2+50>this.position.y){
  window.enemy3Xtouch1=(true);
  }else{ window.enemy3Xtouch1=(false);}
  }else{ window.enemy3Xtouch1=(false);}
  if((window.enemy2X2<this.position.x+100)&&(window.enemy2X2+75>this.position.x+50)){
  if(window.enemy2Y2+50>this.position.y){
window.enemy3Xtouch2=(true);
  }else{ window.enemy3Xtouch2=(false);}
  }else{ window.enemy3Xtouch2=(false);}
  
  if(window.screen4==true){
    this.position.x=2000;
     }


  if(window.screen5==true){
    this.position.x=450;
     }

  if(window.screen6==true){
 this.position.x=200;
  }

  if(window.screen7==true){
    this.position.x=450;
     }
     if(window.screen8==true){
      this.position.x=450;
       }
     if(window.screen9==true){
      this.position.x=2000;
       }
  window.obstacle1Y=this.position.y;
  window.obstacle1X=this.position.x;
}

}
