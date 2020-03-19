 

export default function launch(){
  let canv = document.getElementById("Screen");
  let ctx = canv.getContext('2d');
  ctx.fillStyle='#F00';
  ctx.fillRect(0, 0,  100, 50);
}

window.launch=launch;
