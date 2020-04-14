import Screen1 from "./screen1.js";

export default class Screen2{
constructor(){
this.width=50;
this.height=500;
this.position={x:950,y:0};
}
draw(ctx){
ctx.fillStyle=("#87ceeb");
ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
proccessloop(){
  if(window.screen2==(true)){
if(window.PlayerX+100>this.position.x){
  if(window.invisabledamage1load==(true)){
window.screen2=(false);
  window.screen3=(true);
  window.move=(false);
 setTimeout(function(w){ w.move=(true); }, 34,window);
}
}
  }
}
}
