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
if((window.PlayerY+151>this.position.y)&&(window.PlayerX+100>this.position.x)){
if((window.PlayerX<this.position.x+100)&&(window.PlayerY+151<this.position.y+3)){
  console.log("hello");
window.touch=(true);
  window.touchY=(true);
}else{
window.touchY=(false);
  window.touch=(false);
}
}else{
window.touchY=(false);
  window.touch=(false);
}
  if((window.PlayerX+100>this.position.x)&&(window.PlayerX+50<this.position.x+50)){
if(window.PlayerY+151>this.position.y+3){
window.touchX1=(true);
}
  }
  window.obstacle1Y=this.position.y;
  window.obstacle1X=this.position.x;
}

}
