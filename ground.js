

export default class Ground{
  constructor(){
    this.width = 1000;
    this.height = 50;
    this.position ={x:50, y:50};
  }
  draw(ctx){
    ctx.fillStyle='#F00';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
