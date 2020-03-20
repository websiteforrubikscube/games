 import Ground from "./ground.js";
import Player from "./player.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');

 let ground = new Ground();
 let player = new Player();
ground.draw(ctx);
 player.draw(ctx);
 

}

window.launch=launch;
