
export default class Player{
  constructor(runnumber){
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:250};
    this.keys = {};
    window.onkeyup = function(e) { this.keys[e.keyCode] = false; }
    window.onkeydown = function(e) { this.keys[e.keyCode] = true; }   
  }
  draw(ctx){
    ctx.fillStyle='#FFA500';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
  
  proccessloop(runnumber){
  console.log(this.keys);
  }
}

