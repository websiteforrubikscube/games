 import Ground from "./ground.js";

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');

 let ground = new Ground();
ground.draw(ctx);
}

window.launch=launch;
