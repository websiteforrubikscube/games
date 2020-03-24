import Enemygreen from "./enemygreen.js";

var keys={};

export default class Player{
  constructor(runnumber){
    window.PlayerX = 0;
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:250};
    this.visable = (true);
    window.color1 = ("#ffad47");
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
    if(this.visable == (true)){
    ctx.fillStyle=(window.color1);
    ctx.fillRect(this.position.x, this.position.y,
      this.width, this.height);
    }
  }
  
proccessloop(ctx){

    if ((keys[39]==true)&&(this.position.x<900)){
      if(window.nodamage1==(false){
      this.position.x = this.position.x + 10;
         }
    }
        if ((keys[37]==true)&&(this.position.x>0)){
        if(window.nodamage1==(false){
      this.position.x = this.position.x - 10;
           }
    }
   if ((keys[38]==true)&&(window.nodamage1==(false)){
      this.position.y = this.position.y - 5;
    }
  if ((keys[40]==true)&&(window.nodamage1==(false)){
      this.position.y = this.position.y + 5;
    }
  if(this.position.y > 250){
  this.position.y = 250;
  }
  if((this.position.y+150)>(window.enemy1c-40)){
  if((this.position.x+100)>(window.enemy1c2-100)){
    if((this.position.x)<(window.enemy1c2+100)){
         if((window.visable==true)&&(window.nodamage1==(false))){
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
         }
    }
  }
  }
  
  
   window.PlayerX = this.position.x;
  window.PlayerY = this.position.y;
  }

}

