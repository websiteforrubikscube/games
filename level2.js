 import Ground from "./ground.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Enemyyellow2 from "./enemyyellow2.js";
import Sky from "./sky.js";
import Screen3 from "./screen3.js";
import Screen4 from "./screen4.js";

 let ground = new Ground();
 let player = new Player();
 let enemygreen = new Enemygreen();
 let sky = new Sky();
 let screen3 = new Screen3();
let screen4 = new Screen4();
 let enemyyellow = new Enemyyellow();
let enemyyellow2 = new Enemyyellow2();
 
var runnumber=0;
 var runnumber2=0;
 var runnumber3=0;

export default class Level2{
 proccess(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
 

 
 
 function erraseCanvas() {
        ctx.clearRect(0,0,1000,500);
    }

 erraseCanvas();
runnumber++;
if(window.screen4==(true)){
 screen4.draw(ctx);
sky.draw(ctx);
ground.draw(ctx);
  player.draw(ctx);
 enemyyellow2.draw(ctx);
 enemyyellow.draw(ctx);
  player.proccessloop(ctx);
 enemygreen.proccessloop(ctx);
 enemyyellow.proccessloop(ctx);
 enemyyellow2.proccessloop(ctx);
 screen4.proccessloop();
 if(runnumber<2){
 window.screen4load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen4load=(false); }, 34,window);
 }
}
  if(window.screen5==(true)){
   runnumber2++;
sky.draw(ctx);
ground.draw(ctx);
  player.draw(ctx);
  player.proccessloop(ctx);
 enemygreen.proccessloop(ctx);
 enemyyellow.proccessloop(ctx);
 enemyyellow2.proccessloop(ctx);
 if(runnumber2<2){
 window.screen5load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen5load=(false); }, 34,window);
 }
}
}
}
