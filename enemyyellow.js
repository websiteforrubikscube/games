import Player from "./player.js";

export default class Enemyyellow{
constructor(){
this.width=150;
this.height=100;
this.position={x:425,y:300};
  this.visable=(true);
  window.invisabledamage1=(false);
  window.color2=("#fce700");
  this.hit=0;
  this.immune=(false);
  this.living=(true);
  this.active1=(false);
  this.active2=(false);
  this.active3=(false);
  this.active4=(false);
}
draw(ctx){
  if(this.visable==(true)){
ctx.fillStyle=(window.color2);
ctx.fillRect(this.position.x, this.position.y,this.width,this.height);
  }
}
  proccessloop(ctx){
    //movement
    if(this.active1==(false)){
if((window.PlayerX>this.position.x+25)){
    if((window.touch==true)||(window.PlayerY>249)){
    if((window.enemy2Xtouch1==(false))&&(window.enemy2Xtouch12==(false))){
this.position.x=this.position.x+10;
      this.active1=(true);
    }else{this.active1=(false);}
}else{this.active1=(false);}
}else{this.active1=(false);}
    }else{this.active1=(false);}
    
 if(this.active1==(false)){
    if((window.PlayerX>this.position.x+25)){
    if((window.touch2==true)||(window.PlayerY>249)){
    if((window.enemy2Xtouch1==(false))&&(window.enemy2Xtouch12==(false))){
this.position.x=this.position.x+10;
       this.active1=(true);
    }else{this.active1=(false);}
}else{this.active1=(false);}
}else{this.active1=(false);}
 }else{this.active1=(false);}
    
     if(this.active2==(false)){
    if(window.PlayerX<this.position.x+25){
      if((window.touch==true)||(window.PlayerY>249)){
   if((window.enemy2Xtouch2==(false))&&(window.enemy2Xtouch22==(false))){
this.position.x=this.position.x-10;
     this.active2=(true);
   }else{this.active2=(false);}
}else{this.active2=(false);}
    }else{this.active2=(false);}
  }else{this.active2=(false);}
    
     if(this.active2==(false)){
     if(window.PlayerX<this.position.x+25){
      if((window.touch2==true)||(window.PlayerY>249)){
   if((window.enemy2Xtouch2==(false))&&(window.enemy2Xtouch22==(false))){
this.position.x=this.position.x-10;
     this.active2=(true);
  }else{this.active2=(false);}
}else{this.active2=(false);}
    }else{this.active2=(false);}
  }else{this.active2=(false);}

      if(this.active3==(false)){
    if((window.PlayerY<249)&&(window.touch==(false))){
    if(window.PlayerX-this.position.x-25<0){
        if((window.enemy2Xtouch1==(false))&&(window.enemy2Xtouch12==(false))){
    this.position.x=this.position.x+5;
      this.active3=(true);
  }else{this.active3=(false);}
}else{this.active3=(false);}
    }else{this.active3=(false);}
  }else{this.active3=(false);}

      if(this.active3==(false)){
       if((window.PlayerY<249)&&(window.touch2==(false))){
    if(window.PlayerX-this.position.x-25<0){
        if((window.enemy2Xtouch1==(false))&&(window.enemy2Xtouch12==(false))){
    this.position.x=this.position.x+5;
      this.active3=(true);
  }else{this.active3=(false);}
}else{this.active3=(false);}
    }else{this.active3=(false);}
  }else{this.active3=(false);}

     if(this.active4==(false)){
         if((window.PlayerY<249)&&(window.touch==(false))){
      if(window.PlayerX-this.position.x-25>0){
          if((window.enemy2Xtouch2==(false))&&(window.enemy2Xtouch22==(false))){
    this.position.x=this.position.x-5;
          this.active4=(true);
  }else{this.active4=(false);}
}else{this.active4=(false);}
    }else{this.active4=(false);}
  }else{this.active4=(false);}

    if(this.active4==(false)){
           if((window.PlayerY<249)&&(window.touch2==(false))){
      if(window.PlayerX-this.position.x-25>0){
          if((window.enemy2Xtouch2==(false))&&(window.enemy2Xtouch22==(false))){
    this.position.x=this.position.x-5;
        this.active4=(true);
  }else{this.active4=(false);}
}else{this.active4=(false);}
    }else{this.active4=(false);}
  }else{this.active4=(false);}

    //death
    if((window.PlayerX>this.position.x-100)&&(window.PlayerX<this.position.x+150)){
    if((window.PlayerY>this.position.y-151)&&(window.PlayerY+150<this.position.y+11)){
      if(window.screenload==(false)){
      if(this.immune==(false)){
      this.hit=this.hit+1;
      if(this.hit>1){
        this.living=(false);
       window.color2=("#fdff9e");
        window.invisabledamage1=(true);
        setTimeout(function(enemy){ enemy.visable=(false); }, 1000,this);
      }
        if(this.hit<2){
         this.immune = (true);
   window.color2=("#fdff9e");
      window.invisabledamage1=(true);
      setTimeout(function(enemy){ enemy.immune=(false); }, 1000,this);
      setTimeout(function(enemy){ enemy.invisabledamage1=(false); }, 1000,window);
      setTimeout(function(enemy){ enemy.color2=("#fce700"); }, 1000,window);
        }
        }
    }
    }
    }
    if(this.hit==0){
    this.living=(true);
    }
    if(this.living==(true)){
    this.visable=(true);
    }
  if(this.position.x<0){
  this.position.x=0;
  }
  if(this.position.x>850){
  this.position.x=850;
  }
    //screen movement
    if(window.screen2load==(true)){
    this.position.x=425;
      this.position.y=300;
    }
    if(window.screen3load==(true)){
      this.living=(true);
      this.immune=(false);
      this.hit=0;
      this.visable=(true);
      window.invisabledamage1=(false);
     window.color2=("#fce700");
  this.position.x=375;
    this.position.y=300;
  }
    if(window.screen4load==(true)){
      this.living=(true);
    window.invisabledamage1=(false);
      this.visable=(true);
      this.hit=0;
      this.immune=(false);
        window.color2=("#fce700");
      this.position.x=550;
    }
    if(window.screen5load==(true)){
      this.living=(true);
    window.invisabledamage1=(false);
      this.visable=(true);
      this.hit=0;
      this.immune=(false);
         window.color2=("#fce700");
      this.position.x=775;
    }

     if(window.screen6load==(true)){
      this.living=(true);
    window.invisabledamage1=(false);
      this.visable=(true);
      this.hit=0;
      this.immune=(false);
         window.color2=("#fce700");
      this.position.x=375;
    }window.enemy2X=this.position.x;
    window.enemy2Y=this.position.y;
    window.visable1=this.visable;
  }

}

