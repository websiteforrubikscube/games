import Player from "./player.js";

export default class Enemyyellow{
constructor(){
this.width=150;
this.height=100;
this.position={x:425,y:300};
  this.visable=(true);
  window.invisabledamage1=(false);
}
draw(ctx){
  if(this.visable==(true)){
ctx.fillStyle=("#ffed26");
ctx.fillRect(this.position.x, this.position.y,this.width,this.height);
  }
}
  proccessloop(ctx){
if((window.PlayerX>this.position.x+25)&&(window.PlayerY>249)){
this.position.x=this.position.x+10;
}
    if((window.PlayerX<this.position.x+25)&&(window.PlayerY>249)){
this.position.x=this.position.x-10;
}
    if(window.PlayerY<249){
    if(window.PlayerX-this.position.x-25<0){
    this.position.x=this.position.x+5;
    }
      if(window.PlayerX-this.position.x-25>0){
    this.position.x=this.position.x-5;
    }
    }
    
    if((window.PlayerX>this.position.x-100)&&(window.PlayerX<this.position.x+150)){
    if((window.PlayerY>this.position.y-151)&&(window.PlayerY+150<this.position.y+11)){
   ctx.fillStyle=("#fff58a");
      window.invisabledamage1=(true);
       setTimeout(function(enemy){ enemy.visable=(false); }, 1000,this);
    }
    }
  if(this.position.x<0){
  this.position.x=0;
  }
  if(this.position.x>850){
  this.position.x=850;
  }
  }

}
