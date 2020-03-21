export default class Enemygreen{
constructor(){
this.width=200;
  this.height=100;
  this.position={x:300, y:250};
}
draw(ctx){
ctx.fillStyle=('#90EE90');
  ctx.fillRect(this.position.x, this.position.y, this.width, this.length);
}


}
