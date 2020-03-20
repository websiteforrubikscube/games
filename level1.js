 import Ground from "./ground.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');

 let ground = new Ground();
ground.draw(ctx);
 
  ctx.fillStyle='#F00';
    ctx.fillRect(0, 0,
      50, 50);
}

window.launch=launch;
