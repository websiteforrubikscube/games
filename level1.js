 import Ground from "./ground.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
 ctx.fillStyle='#F00';
    ctx.fillRect(0, 0,
      50, 50);
 //let ground = new Ground();
//ground.draw(ctx);
}

window.launch=launch;
