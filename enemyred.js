import Player from "./player.js";

export default class Redenemy{
constructor(x,y){
this.height=100;
this.width=100;
this.position={x:x, y:y};
this.hit=0;
this.living=(true);
this.visable=(true);
this.colorredenemy=('#ff0000');
this.immune=false;
this.lefthitdetect=false;
this.righthitdetect=false;

}
draw(ctx){
    if(this.visable==(true)){
    ctx.fillStyle=(this.colorredenemy);
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
}
proccess(ctx){
//movement
if((window.PlayerY>249)||(window.touch==(true))){
    if((this.lefthitdetect==false)&&(this.lefthitdetect2==false)){
    if(window.PlayerX+50<this.position.x+50){
        this.position.x=this.position.x-9;
    }
    }
}
if(window.touch2==(true)){
    if(window.PlayerX+50<this.position.x+50){
        if((this.lefthitdetect==false)&&(this.lefthitdetect2==false)){
        this.position.x=this.position.x-9;
        }
    }
}
if((window.PlayerY>249)||(window.touch==(true))){
    if((this.righthitdetect==false)&&(this.righthitdetect2==false)){
    if(window.PlayerX+50>this.position.x+50){
        this.position.x=this.position.x+9;
    }
    }
}
if(window.touch2==(true)){
    if((this.righthitdetect==false)&&(this.righthitdetect2==false)){
    if(window.PlayerX+50>this.position.x+50){
        this.position.x=this.position.x+9;
    }
    }
}
//secondary movement
if(window.PlayerY<250){
    if((window.touch==false)&&(window.touch2==false)){
        if((this.righthitdetect==false)&&(this.righthitdetect2==false)){
        if(window.PlayerX+50<this.position.x+50){
            this.position.x=this.position.x+5;
        }
    }
        if(window.PlayerX+50>this.position.x+50){
            if((this.lefthitdetect==false)&&(this.lefthitdetect2==false)){
            this.position.x=this.position.x-5;
        }
    }
    }
}
if(this.position.x<0){
    this.position.x=0;
}
if(this.position.x>900){
    this.position.x=900;
}
//obstacle hit detection
if((this.position.x<window.obstacle1X+100)&&(this.position.x+50>window.obstacle1X+50)){
    this.lefthitdetect=true;
}else{this.lefthitdetect=false;}
if((this.position.x+100>window.obstacle1X)&&(this.position.x+50<window.obstacle1X+50)){
    this.righthitdetect=true;
}else{this.righthitdetect=false;}
if((this.position.x<window.obstacle2X+100)&&(this.position.x+50>window.obstacle2X+50)){
    this.lefthitdetect2=true;
}else{this.lefthitdetect2=false;}
if((this.position.x+100>window.obstacle2X)&&(this.position.x+50<window.obstacle2X+50)){
    this.righthitdetect2=true;
}else{this.righthitdetect2=false;}
//death
if(window.PlayerX+100>this.position.x){
if(window.PlayerX<this.position.x+100){
if((window.PlayerY+150>this.position.y)&&(window.PlayerY+150<this.position.y+16)){
    if((this.immune==(false))&&(window.screenload==false)){
        this.immune=true;
this.hit++;
window.killjump=true;
if(this.hit<3){
this.colorredenemy=('#ff8a8a');
setTimeout(function(enemy){ enemy.colorredenemy=('#ff0000'); }, 1000,this);
setTimeout(function(enemy){ enemy.immune=(false); }, 1000,this);
}
if(this.hit>2){
    this.colorredenemy=('#ff8a8a');
    setTimeout(function(enemy){ enemy.visable=(false);}, 1000,this);
}
}
}
}
}
//screen loading
if(window.screenload==true){
    this.hit=0;
}

}
//functions
death(){
    if(this.visable==true){
        return false;
    }else{return true;}
}
killplayer(playerx, playery){
if(playerx+100>this.position.x){
    if(playerx<this.position.x+100){
        if(playery+150>this.position.y+17){
            if(this.immune==false){
                return true;
            }else{return false;}
        }else{return false;}
    }else{return false;}
}else{return false;}
}

}