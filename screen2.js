export default Screen2{
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
if(window.PlayerX+100>950){
window.screen2=(false);
  window.screen3=(true);
  window.move=(false);
 setTimeout(function(w){ w.move=(true); }, 34,window);
}
  }
}
}
