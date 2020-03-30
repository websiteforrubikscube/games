export default class Obstacle1{
constructor(){
this.height=100;
this.width=100;
this.position={x:450,y:300};
  window.touchX1=(false);
  window.touchX2=(false);
 window.touchY=(false);
}
draw(ctx){
ctx.fillStyle=("#008000");
ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
proccessloop(){
if((window.PlayerY+151>this.position.y)&&(window.PlayerX+150>this.position.x)){
if(window.PlayerX<550){
window.touch=(true);
  window.touchY=(true);
}else{
window.touchY=(false)
}
}else{
window.touchY=(false)
}
}

}
