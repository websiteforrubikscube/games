
export default class Player{
  constructor(){
    this.width = 100;
    this.height = 150;
    this.position ={x:runnumber * 10, y:250};
  }
  draw(ctx){
    ctx.fillStyle='#FFA500';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
