import Player from "./player.js";

export default class Enemygreen{
constructor(){
this.width=200;
  this.height=100;
  this.position={x:400, y:300};
}
draw(ctx){
ctx.fillStyle=('#90EE90');
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
proccessloop(){
  console.log(window.PlayerX);
if(window.PlayerX>this.position.x){
this.position.x= this.position.x + 10;
}
  if(window.PlayerX<this.position.x){
this.position.x= this.position.x - 10;
}
}
}
