
var  canv;
var ctx;


export function launch(){
  canv = document.getElementById("Screen");
  ctx = canv.getContext('2d');
  ctx.fillStyle='#F00';
  ctx.fillRect(0, 0,  100, 50);
}

