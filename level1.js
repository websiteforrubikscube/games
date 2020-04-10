
import Ground from "./ground.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Sky from "./sky.js";
import Screen1 from "./screen1.js";
import Screen2 from "./screen2.js";
import Screen3 from "./screen3.js";

 let ground = new Ground();
 let player = new Player();
 let enemygreen = new Enemygreen();
 let sky = new Sky();
 let screen1 = new Screen1();
 let screen2 = new Screen2();
 let screen3 = new Screen3();
 let enemyyellow = new Enemyyellow();

var runnumber=0;
 var runnumber2=0;
 var runnumber3=0;
  
window.screen4load=(false);
window.screen5load=(false);
window.screen6load=(false);
export default class Level1{
 
  constructor (){
  this.ctx=undefined;
  this.respawn = (false);
  }
 proccess(){
  let canv = document.getElementById("Screen");
   this.ctx = canv.getContext('2d');
  
   if (player.visable==false){
    setTimeout(function(load){ load.respawn=(true); }, 1000,this);
    if(this.respawn==(true)){
     this.respawnmain();
    }
   }

   
 if(runnumber>2){
 this.erraseCanvas();
 }

if(window.screen1==(true)){
  runnumber++;
 this.ctx.fillStyle=("#000");
 this.ctx.fillText("Level 1",100,100);
  screen1.draw(this.ctx);
  sky.draw(this.ctx);
  ground.draw(this.ctx);
 player.draw(this.ctx);
  enemygreen.draw(this.ctx);
  player.proccessloop(this.ctx);
  enemygreen.proccessloop(this.ctx);
 screen1.proccessloop();
 if(runnumber<2){
 window.screen1load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen1load=(false); }, 34,window);
 }
}
  if(window.screen2==(true)){
  runnumber2++;
   window.invisabledamage=(true);
  screen2.draw(this.ctx);
   sky.draw(this.ctx);
  ground.draw(this.ctx);
 player.draw(this.ctx);
   enemyyellow.draw(this.ctx);
  player.proccessloop(this.ctx);
   enemyyellow.proccessloop(this.ctx);
    screen2.proccessloop();
   if(runnumber2<2){
    window.screen2load=(true);
    window.screenload=(true);
     setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen2load=(false); }, 34,window);
   }
  }
  
  if(window.screen3==(true)){
      runnumber3++;
   window.invisabledamage=(false);
  sky.draw(this.ctx);
   screen3.draw(this.ctx);
  ground.draw(this.ctx);
 player.draw(this.ctx);
   enemygreen.draw(this.ctx);
   enemyyellow.draw(this.ctx);
  player.proccessloop(this.ctx);
   enemygreen.proccessloop(this.ctx);
   enemyyellow.proccessloop(this.ctx);
   screen3.proccessloop();
      if(runnumber3<5){
    window.screen3load=(true);
       window.screenload=(true);
        setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen3load=(false); }, 34,window);
   }
  }
}

respawnmain(){
  runnumber=0;
  runnumber2=0;
  runnumber3=0;
  player.living=true;
  player.visable=true;
  window.screen1=(true);
  window.screen2=(false);
  window.screen3=(false);
  window.color1=("#ffad47");
this.respawn=(false);
}

erraseCanvas() {
  this.ctx.clearRect(0,0,1000,500);
}
}
