export default class Screen3{
constructor(){
this.width=50;
this.height=400;
this.position={x:950,y:0};
}
draw(ctx){
ctx.fillStyle=("#90EE90");
  ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
  proccessloop(){
   if(window.PlayerX>850){
console.log("hello");
   } 
  }
}
