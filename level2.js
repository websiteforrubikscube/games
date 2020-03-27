 import Ground from "./ground.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Sky from "./sky.js";
import Screen3 from "./screen3.js";

export default function launch2(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
 
 let ground = new Ground();
 let player = new Player();
 let enemygreen = new Enemygreen();
 let sky = new Sky();
 let screen3 = new Screen3();
 let enemyyellow = new Enemyyellow();
 
 gameloop();
 
 var runnumber=0;
 var runnumber2=0;
 var runnumber3=0;
 
 
 function erraseCanvas() {
        ctx.clearRect(0,0,1000,500);
    }
 function gameloop(){
 erraseCanvas();
runnumber++;
if(window.screen4==(true)){
sky.draw(ctx);
ground.draw(ctx);
  player.draw(ctx);
  player.proccessloop(ctx);
  ground.proccessloop(ctx);
 if(runnumber<2){
 window.screen4load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen1load=(false); }, 34,window);
 }
}
}
