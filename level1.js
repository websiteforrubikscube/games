 import Ground from "./ground.js";
import Player from "./player.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
 
 let ground = new Ground();
 let player = new Player();
 
 gameloop();
 
 var runnumber=0;
 
 function erraseCanvas() {
        ctx.clearRect(0,0,1000,500);
    }
 function gameloop(){
 erraseCanvas();
runnumber++;
  ground.draw(ctx);
 player.draw(ctx);
  player.proccessloop(runnumber);
  
window.setTimeout(function() {gameloop();}, 1000);
 }
 

} 

window.launch=launch;
