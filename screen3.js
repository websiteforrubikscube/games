export default class Screen3{
constructor(){
this.width=50;
this.height=400;
this.position={x:950,y:0};
this.move=(true);
}
draw(ctx){
ctx.fillStyle=("#90EE90");
  ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
  proccessloop(){
   if(window.PlayerX>850){
    if((window.nodamage1load==(true))&&(window.invisabledamage1load==(true))){
window.screen3=(false);
     window.screen4=(true);
     this.move=(false);
 setTimeout(function(){ this.move=(true); }, 34);
   }
  }
   window.move=this.move; 
  }
}
