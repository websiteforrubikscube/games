

export default class Ground{
  constructor(){
    this.width = 1000;
    this.height = 50;
    this.position ={x:400, y:0};
  }
  draw(ctx){
    ctx.fillStyle='#00800';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
