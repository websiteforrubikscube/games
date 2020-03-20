

export default class Ground{
  constructor(){
    this.width = 50;
    this.length = 100;
    this.position ={x:50, y:50};
  }
  draw(ctx){
  console.log("hello");
    ctx.fillStyle='#F00';
     ctx.fillRect(0, 0,
     50, 50);
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
