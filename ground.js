

export default class Ground{
  constructor(){
    this.width = 1000;
    this.height = 50;
    this.position ={x:0, y:400};
  }
  draw(ctx){
    ctx.fillStyle='#008000';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
