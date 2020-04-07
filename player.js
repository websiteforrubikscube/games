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
    this.respawn=(false);
     this.respawn2=(false);
     this.respawn3=(false);
     this.respawnload=(false);
     this.respawnload2=(false);
     this.respawnload3=(false); 
    this.respawnload4=(false);
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
           this.living=(false);
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
          }else{this.respawn=(false);}
         }else{this.respawn=(false);}
    }else{this.respawn=(false);}
  }else{this.respawn=(false);}
  }else{this.respawn=(false);}
  }else{this.respawn=(false);}
  
 if((this.position.y+150)>(window.enemy2Y+33)){
  if((this.position.x+100)>(window.enemy2X)){
    if((this.position.x)<(window.enemy2X+150)){
         if((window.visable1==true)&&(window.invisabledamage1==(false))){
            if(window.screenload==(false)){
              this.respawn2=(true);
           this.living=(false);
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
         }else{this.respawn2=(false);}
    }else{this.respawn2=(false);}
  }else{this.respawn2=(false);}
  }else{this.respawn2=(false);}
 }else{this.respawn2=(false);}
  
  if((this.position.y+150)>(window.enemy2Y2+33)){
  if((this.position.x+100)>(window.enemy2X2)){
    if((this.position.x)<(window.enemy2X2+150)){
         if((window.visable2==true)&&(window.invisabledamage2==(false))){
            if(window.screenload==(false)){
              this.respawn3=(true);
           this.living=(false);
    window.color1=("#ffd5a1");
           keys[37]=(false);
            keys[38]=(false);
            keys[39]=(false);
            keys[40]=(false);
              setTimeout(function(player){ player.visable=(false); }, 1000,this);
         }else{this.respawn3=(false);}
    }else{this.respawn3=(false);}
  }else{this.respawn3=(false);}
  }else{this.respawn3=(false);}
  }else{this.respawn3=(false);}
  
   //respawn
  
  if((this.respawn==(true))||(this.respawn2==(true))){
    if(window.start==(true)){
        setTimeout(function(player){ player.respawnload=(true); }, 4000,this);
      if(this.respawnload==(true)){
     this.position.x=0;
   this.position.y=250;
      window.color1=("#ffad47");
      this.living=true;
       this.visable=true;
    window.screen1=(true);
       window.screen2=(false);
       window.screen3=(false);
      window.screenload1=(true);
       setTimeout(function(player){ player.screenload1=(false); }, 34,window);
        this.respawnload=(false);
      }
    }
     if(window.start2==(true)){
        setTimeout(function(player){ player.respawnload2=(true); }, 4000,this);
      if(this.respawnload2==(true)){
       this.position.x=0;
   this.position.y=250;
        window.color1=("#ffad47");
       this.living=true;
       this.visable=true;
    window.screen4=(true);
        window.screen5=(false);
        window.screen6=(false);
         window.screenload1=(true);
       setTimeout(function(player){ player.screenload4=(false); }, 34,window);
         this.respawnload2=(false);
    }
  }
  }
  
    if(this.respawn3==(true)){
    if(window.start==(true)){
        setTimeout(function(player){ player.respawnload3=(true); }, 4000,this);
      if(this.respawnload3==(true)){
      this.position.x=0;
   this.position.y=250;
       window.color1=("#ffad47");
      this.living=true;
       this.visable=true;
    window.screen1=(true);
       window.screen2=(false);
       window.screen3=(false);
        window.screenload1=(true);
       setTimeout(function(player){ player.screenload1=(false); }, 34,window);
         this.respawnload3=(false);
    }
    }
     if(window.start2==(true)){
         setTimeout(function(player){ player.respawnload4=(true); }, 4000,this);
      if(this.respawnload4==(true)){
       this.position.x=0;
   this.position.y=250;
        window.color1=("#ffad47");
       this.living=true;
       this.visable=true;
    window.screen4=(true);
        window.screen5=(false);
        window.screen6=(false);
         window.screenload1=(true);
       setTimeout(function(player){ player.screenload4=(false); }, 34,window);
         this.respawnload4=(false);
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

