 

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
  ctx.fillStyle='#F00';
 ground.draw(ctx);
}

window.launch=launch;
