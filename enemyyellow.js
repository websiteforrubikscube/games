import Player from "./player.js";

export default class Enemyyellow{
constructor(){
this.width=150;
this.height=100;
this.position={x:425,y:300};
}
draw(ctx){
ctx.fillStyle=("#ffed26");
ctx.fillRect(this.position.x, this.position.y,this.width,this.height)
}


}
