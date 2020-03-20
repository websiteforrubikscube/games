
export default class Player{
  constructor(runnumber){
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:250};
  }
  draw(ctx){
    ctx.fillStyle='#FFA500';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
  
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        alert('hi.')
    }
})
}
