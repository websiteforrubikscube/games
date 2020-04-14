import Player from "./player.js";

export default class Enemygreen{
constructor(){
this.width=200;
  this.height=100;
  this.position={x:400, y:300};
   window.color  =('#90EE90');
  this.visable=(true);
  window.nodamage1 = (false);
  window.invisabledamage=(false);
  window.killjump=(false);
}
draw(ctx){
  if(this.visable==true){
ctx.fillStyle=(window.color);
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  }
proccessloop(ctx){
  //movement
if((window.PlayerX-50>this.position.x)&&(window.PlayerY>249)){
this.position.x= this.position.x + 5;
}
  if((window.PlayerX-50<this.position.x)&&(window.PlayerY>249)){
this.position.x= this.position.x - 5;
}
  //death
  if((window.PlayerX>this.position.x-100)&&(window.PlayerX<this.position.x+200)){
    if((window.PlayerY>149)&&(window.PlayerY<159)){
      if(window.screenload==(false)){
      window.killjump=(true);
 window.color =("#a6ffad");
      window.nodamage1 = (true);
            setTimeout(function(enemy){ enemy.visable=(false); }, 1000,this);
    }else{window.killjump=(false);}
  }else{window.killjump=(false);}
}else{window.killjump=(false);}
  
  if(this.visable==(false)){
  window.killjump=false;
  }
  
  if(this.position.x<0){
  this.position.x=0;
  }
  if(this.position.x>800){
  this.position.x=800;
  }
  //screen movement

   if(window.screen1load==(true)){
      this.visable=(true);
      window.nodamage1=(false);
      window.invisabledamage=(false);
       window.color=('#90EE90');
  this.position.x=400;
    this.position.y=300;
  }
  if(window.screen2==(true)){
    this.visable=(false);
    window.nodamage1=(true);
}
  
    if(window.screen3load==(true)){
      this.visable=(true);
      window.nodamage1=(false);
      window.invisabledamage=(false);
       window.color=('#90EE90');
  this.position.x=575;
    this.position.y=300;
  }
  if(window.screen4load==(true)){
  this.visable=(false);
    window.nodamage1=(true);
  }
   if(window.screen5load==(true)){
  this.visable=(false);
    window.nodamage1=(true);
  }
  window.enemy1c = this.position.y+50;
  window.enemy1c2= this.position.x+100;
  window.visable = this.visable;
}
}
