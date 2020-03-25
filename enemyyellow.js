import Player from "./player.js";

export default class Enemyyellow{
constructor(){
this.width=150;
this.height=100;
this.position={x:425,y:300};
}
draw(ctx){
ctx.fillStyle=("#ffed26");
ctx.fillRect(this.position.x, this.position.y,this.width,this.height)
}
  proccessloop(ctx){
/*if((window.PlayerX>this.position.x+25)&&(window.PlayerY>249)){
this.position.x=this.position.x+10;
}
    if((window.PlayerX<this.position.x+25)&&(window.PlayerY>249)){
this.position.x=this.position.x-10;
}*/
    
    if(window.PlayerX-this.position.x+75<0){
    //this.position.x=this.position.x+5;
    }
      if(window.PlayerX-this.position.x+75>0){
    //this.position.x=this.position.x-5;
         console.log("hello");
    }
    
    if((window.PlayerX>this.position.x-100)&&(window.PlayerX<this.position.x+150)){
    if((window.PlayerY>this.position.y-151)&&(window.PlayerY<this.position.y+11)){
    console.log("hello");
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
