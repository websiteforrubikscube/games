import Enemyyellow from "./enemyyellow.js"; 
import Enemygreen from "./enemygreen.js";
import Screen1 from "./screen1.js";

var keys={};

export default class Player{
  constructor(runnumber){
    window.PlayerX = 0;
    this.width = 100;
    this.height = 150;
    this.position ={x:0, y:250};
    this.speed=0; 
    this.visable = (true);
   this.living=(true);
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
  //movement
   if((this.position.y>249)||(window.touch==(true))){
   this.speed=0;
  }
  
    if ((keys[39]==true)&&(this.position.x<900)){
      if((this.living==true)&&(window.touchX1==false)){
        if(this.position.y>249){
      this.position.x = this.position.x + 10;
        }
        if(this.position.y<250){
        this.position.x=this.position.x+15;
        }
         }
    }
        if ((keys[37]==true)&&(this.position.x>0)){
       if((this.living==(true))&&(window.touchX2==(false))){
        if(this.position.y>249){
      this.position.x = this.position.x - 10;
        }
        if(this.position.y<250){
        this.position.x=this.position.x - 15;
        }
         }
    }
   if ((keys[38]==true)&&(this.living==true)){
     if((this.position.y>249)||(window.touch==true)){
      this.position.y=this.position.y-1;
      this.speed=-20;
       
     }
    }
  if(this.position.y<250){
    this.speed=this.speed+1;
      this.position.y = this.position.y + this.speed;
  }
  if(this.position.y>250){
   this.position.y=250; 
  }
  if((window.touchY==true)&&(keys[38]==false)){
  this.position.y=window.obstacle1X-251;
  }
  if(this.speed>15){
  this.speed=15;
  }
  //death
  if((this.position.y+150)>(window.enemy1c-40)){
  if((this.position.x+100)>(window.enemy1c2-100)){
    if((this.position.x)<(window.enemy1c2+100)){
         if((window.visable==true)&&(window.nodamage1==(false))){
          if(window.invisabledamage==(false)){
           this.living=(false);
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
  }
 if((this.position.y+150)>(window.enemy2Y+40)){
  if((this.position.x+100)>(window.enemy2X)){
    if((this.position.x)<(window.enemy2X+150)){
         if((window.visable1==true)&&(window.invisabledamage1==(false))){
           this.living=(false);
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
  if((this.position.y+150)>(window.enemy2Y2+40)){
  if((this.position.x+100)>(window.enemy2X2)){
    if((this.position.x)<(window.enemy2X2+150)){
         if((window.visable2==true)&&(window.invisabledamage2==(false))){
           this.living=(false);
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
  //screen movement
  if(window.screen2==(true)){
   if(window.move == (false)){
    if(this.living == (true)){
  this.position.x=0;
   this.position.y=250;
    }
   }
  }
  if(window.screen3==(true)){
   if(window.move==(false)){
    if(this.living==(true)){
  this.position.x=0;
   this.position.y=250;
    }
   }
  }
   if(window.screen4==(true)){
   if(window.move == (false)){
    if(this.living == (true)){
  this.position.x=0;
   this.position.y=250;
    }
   }
  }
   if(window.screen5==(true)){
   if(window.move == (false)){
    if(this.living == (true)){
  this.position.x=0;
   this.position.y=250;
    }
   }
  }
   if(window.screen6==(true)){
   if(window.move == (false)){
    if(this.living == (true)){
  this.position.x=0;
   this.position.y=250;
    }
   }
  }
  
   window.PlayerX = this.position.x;
  window.PlayerY = this.position.y;
  }

}

