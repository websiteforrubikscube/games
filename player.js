
export default class Player{
  constructor(){
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:350};
  }
  draw(ctx){
    ctx.fillStyle='#FFA500';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
}
