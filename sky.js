class Sky{
constructor(){
this.width=1000;
this.height=400;
this.position={x:0, y:0};
}
draw(ctx){
ctx.fillStyle=('#0000FF');
ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

}
