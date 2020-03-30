export default class Screen4{
constructor(){
this.width=50;
this.height=500;
this.position={x:950, y:0};
 window.screen5=(false);
 this.move=(true)
}
draw(ctx){
ctx.fillStyle=("#87CEEB");
ctx.fillRect(this.position.x,this.position.y, this.width, this.height);
}
 proccessloop(){
  if(window.screen4==(true)){
 if((window.PlayerX+100)>this.position.x){
 window.screen4=(false);
  window.screen5=(true);
  this.move=(false);
 setTimeout(function(){ this.move=(true); }, 34);
 }
  }
  window.move=this.move; 
 }
}
