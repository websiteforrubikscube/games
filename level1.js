 import Ground from "./ground.js";
import Player from "./player.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');

 let ground = new Ground();
 let player = new Player();
ground.draw(ctx);
 player.draw(ctx);
 
 
 function erraseCanvas() {
        context.clearRect(0,0,canv.width,canv.height);
    }
 function gameloop(){
 erraseCanvas();
runNumber++;
console.log(runNumber);
context.fillStyle='#F00';
context.fillRect(runNumber,0,50,60);
  
window.setTimeout(function() {gameLoop();}, 300);
 }
 

}

window.launch=launch;
