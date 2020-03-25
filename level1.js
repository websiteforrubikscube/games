 import Ground from "./ground.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Sky from "./sky.js";
import Screen1 from "./screen1.js";
import Screen2 from "./screen2.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
 
 let ground = new Ground();
 let player = new Player();
 let enemygreen = new Enemygreen();
 let sky = new Sky();
 let screen1 = new Screen1();
 let enemyyellow = new Enemyyellow();
 
 gameloop();
 
 var runnumber=0;
 
 function erraseCanvas() {
        ctx.clearRect(0,0,1000,500);
    }
 function gameloop(){
 erraseCanvas();
runnumber++;
if(window.screen1==(true)){
  screen1.draw(ctx);
  sky.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
  enemygreen.draw(ctx);
  player.proccessloop(ctx);
  enemygreen.proccessloop(ctx);
 screen1.proccessloop();
 window.screen1load=(true);
 setTimeout(function(load){ load.screen1load=(false); }, 34,window);
}
  if(window.screen2==(true)){
   window.invisabledamage=(true);
  sky.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
   enemyyellow.draw(ctx);
  player.proccessloop(ctx);
   enemyyellow.proccessloop(ctx);
    window.screen2load=(true);
 setTimeout(function(load){ load.screen2load=(false); }, 34,window);
  }
  
  if(window.screen3==(true)){
  sky.draw(ctx);
  ground.draw(ctx);
 player.draw(ctx);
   enemygreen.draw(ctx);
   enemyyellow.draw(ctx);
  player.proccessloop(ctx);
   enemygreen.proccessloop(ctx);
   enemyyellow.proccessloop(ctx);
    window.screen3load=(true);
 setTimeout(function(load){ load.screen3load=(false); }, 34,window);
  }
window.setTimeout(function() {gameloop();}, 33);
 }
 

} 

window.launch=launch;
