import Enemygreen from "./enemygreen.js";

var keys={};

export default class Player{
  constructor(runnumber){
    window.PlayerX = 0;
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:250};
    keys = {};
    keys[37]=false;
    keys[38]=false;
    keys[39]=false;
    keys[40]=false;
    window.onkeyup = function(e) { 
      keys[e.keyCode] = false;
       
    }
    window.onkeydown = function(e) { keys[e.keyCode] = true; }   
  }
  draw(ctx){
    ctx.fillStyle='#FFA500';
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
  }
  
proccessloop(runnumber){

    if ((keys[39]==true)&&(this.position.x<900)){
      this.position.x = this.position.x + 10;
    }
        if ((keys[37]==true)&&(this.position.x>0)){
      this.position.x = this.position.x - 10;
    }
   if (keys[38]==true){
      this.position.y = this.position.y - 5;
    }
  if (keys[40]==true){
      this.position.y = this.position.y + 5;
    }
  if(this.position.y > 250){
  this.position.y = 250;
  }
  if(window.enemy1c+this.position.y>189){
  console.log("hello");
  }
   window.PlayerX = this.position.x;
  window.PlayerY = this.position.y;
  }

}

