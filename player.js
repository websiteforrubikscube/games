import Enemyyellow from "./enemyyellow.js"; 
import Enemygreen from "./enemygreen.js";
import Screen1 from "./screen1.js";
import ResetLevel1 from "./level1.js";
import ResetLevel2 from "./level2.js";

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
    this.respawn=(false);
     this.respawnload=(false);
     this.respawnload2=(false);
     this.respawnload3=(false); 
    this.respawnload4=(false);
    this.respawnaction=(false);
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
    if(window.touch2==(true)){
   this.speed=0;
  }
   if((this.position.y>249)||(window.touch==(true))){
   this.speed=0;
  }
  
    if ((keys[39]==true)&&(this.position.x<900)){
      if((this.living==true)&&(window.touchX1==false)){
        if((this.position.y>249)&&(window.touchX12==false)){
      this.position.x = this.position.x + 10;
        }
        if((this.position.y<250)&&(window.touchX12==false)){
        this.position.x=this.position.x+15;
        }
      }
    }
         if((keys[37]==true)&&(this.position.x>0)){
       if((this.living==(true))&&(window.touchX2==(false))){
        if((this.position.y>249)&&(window.touchX22==(false))){
      this.position.x = this.position.x - 10;
        }
        if((this.position.y<250)&&(window.touchX22==(false))){
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
   if ((keys[38]==true)&&(this.living==true)){
     if(window.touch2==(true)){
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
  this.position.y=window.obstacle1Y-149;
  }
  if((window.touchY2==true)&&(keys[38]==false)){
  this.position.y=window.obstacle2Y-149;
  }
  if(this.speed>15){
  this.speed=15;
  }
  
   if(window.killjump3==true){
  if(this.speed>0){
  this.speed=this.speed*-0.75;
  }
     if((window.touchY==(true))||(window.touchY2==(true))){
     this.speed=-10;
       this.position.y=this.position.y-6;
     }
    if(this.speed<0){
    this.speed=this.speed*1.5
    }
  }
  
  if((window.killjump==true)||(window.killjump2==true)){
  if(this.speed>0){
  this.speed=this.speed*-0.75;
  }
      if((window.touchY==(true))||(window.touchY2==(true))){
     this.speed=-10;
       this.position.y=this.position.y-6;
     }
    if(this.speed<0){
    this.speed=this.speed*1.5
    }
  }
 
  //death
  if((this.position.y+150)>(window.enemy1c-33)){
  if((this.position.x+100)>(window.enemy1c2-100)){
    if((this.position.x)<(window.enemy1c2+100)){
         if((window.visable==true)&&(window.nodamage1==(false))){
          if(window.invisabledamage==(false)){
            if(window.screenload==(false)){
              this.respawn=(true);
              console.log('135');
           this.living=(false);
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
               setTimeout(function(player){ player.respawn=(false); }, 3034,this);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
          }
         }
    }
  }
  }
  }
  
 if((this.position.y+150)>(window.enemy2Y+33)){
  if((this.position.x+100)>(window.enemy2X)){
    if((this.position.x)<(window.enemy2X+150)){
         if((window.visable1==true)&&(window.invisabledamage1==(false))){
            if(window.screenload==(false)){
              this.respawn=(true);
           this.living=(false);
              console.log('158');
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
               setTimeout(function(player){ player.respawn=(false); }, 3034,this);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
         }
    }
  }
  }
 }
  
  if((this.position.y+150)>(window.enemy2Y2+33)){
  if((this.position.x+100)>(window.enemy2X2)){
    if((this.position.x)<(window.enemy2X2+150)){
         if((window.visable2==true)&&(window.invisabledamage2==(false))){
            if(window.screenload==(false)){
              this.respawn=(true);
           this.living=(false);
              console.log('179');
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
                 setTimeout(function(player){ player.respawn=(false); }, 3034,this);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
         }
    }
  }
  }
  }
  
   //respawn
  
  if((window.start==(true))||(window.start2==(true))){
     if(this.respawn==(true)){
      setTimeout(function(player){ player.respawnaction=(true); }, 3000,this);
    if(this.respawnaction=(true)){
       setTimeout(function(player){ player.respawnaction=(false); }, 34,this);
    if(window.start==(true)){
    window.screen1=(true);
      ResetLevel1();
    }
      if(window.start2==(true)){
      window.screen4=(true);
        ResetLevel2();
      }
  window.start=(false);
    window.start2=(false);
      setTimeout(function(player){ player.start=(true); }, 34,window);
    setTimeout(function(player){ player.start2=(true); }, 34,window);
  }
     }
}
  //screen movement
    if(window.screen1load==(true)){
  this.position.x=0;
   this.position.y=250;
   }
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

