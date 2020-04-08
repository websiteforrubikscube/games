
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
 erraseCanvas() {
         ctx.clearRect(0,0,1000,500);
     }


 proccess(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
  
 if(window.resetlevel1==(true)){
 runnumber=0;
 runnumber2=0;
 runnumber3=0;
 }
   
 Levl1.erraseCanvas();

if(window.screen1==(true)){
  runnumber++;
 ctx.fillStyle=("#000");
 ctx.fillText("Level 1",100,100);
  screen1.draw(ctx);
  sky.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
  enemygreen.draw(ctx);
  player.proccessloop(ctx);
  enemygreen.proccessloop(ctx);
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
  screen2.draw(ctx);
   sky.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
   enemyyellow.draw(ctx);
  player.proccessloop(ctx);
   enemyyellow.proccessloop(ctx);
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
  sky.draw(ctx);
   screen3.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
   enemygreen.draw(ctx);
   enemyyellow.draw(ctx);
  player.proccessloop(ctx);
   enemygreen.proccessloop(ctx);
   enemyyellow.proccessloop(ctx);
   screen3.proccessloop();
      if(runnumber3<5){
    window.screen3load=(true);
       window.screenload=(true);
        setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen3load=(false); }, 34,window);
   }
  }
}
}
