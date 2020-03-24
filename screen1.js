import Player from "./player.js";

export default class Screen1{
constructor(){
this.width=50;
this.height=500;
this.position={x:950, y:0};
}
draw(ctx){
ctx.fillStyle=("#000");
ctx.fillRect(this.position.x,this.position.y, this.width, this.height);
}
}
