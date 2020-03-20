 import Ground from "./ground.js";
import Player from "./player.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
gameloop();
 
 let ground = new Ground();
 let player = new Player();
ground.draw(ctx);
 player.draw(ctx);
 
 var runnumber=0;
 
 function erraseCanvas() {
        ctx.clearRect(0,0,1000,500);
    }
 function gameloop(){
  console.log("hello");
 erraseCanvas();
runnumber++;
  
window.setTimeout(function() {gameLoop();}, 100);
 }
 

} 

window.launch=launch;
