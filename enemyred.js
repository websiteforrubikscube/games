export default class Redenemy{
constructor(x,y){
this.height=100;
this.width=100;
this.position={x:x, y:y};
this.hit=0;
this.living=(true);
this.visable=(true);
this.colorredenemy=('#ff0000');
}
draw(ctx){
    if(this.visable==(true))
    ctx.fillStyle=(this.colorredenemy);
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}
proccess(ctx){
//movement
if((window.PlayerY>249)||(window.touch==(true))){
    if(window.PlayerX+50<this.position.x+50){
        this.position.x=this.position.x-15;
    }
}
if((window.PlayerY>249)||(window.touch2==(true))){
    if(window.PlayerX+50<this.position.x+50){
        this.position.x=this.position.x-15;
    }
}
if((window.PlayerY>249)||(window.touch==(true))){
    if(window.PlayerX+50>this.position.x+50){
        this.position.x=this.position.x+15;
    }
}
if((window.PlayerY>249)||(window.touch2==(true))){
    if(window.PlayerX+50>this.position.x+50){
        this.position.x=this.position.x+15;
    }
}
//death
if(window.PlayerX+100>this.position.x){
if(window.PlayerX<this.position.x+100){
if(window.PlayerY+150<this.position.y+10){
this.hit++;
window.killjump=true;
if(this.hit<3){
this.colorredenemy=('#ff8a8a');
setTimeout(function(enemy){ enemy.colorredenemy=('#ff0000'); }, 1000,this);
}
if(this.hit>2){
    this.colorredenemy=('#ff8a8a');
    setTimeout(function(enemy){ enemy.visable=(false); }, 1000,this);
}
setTimeout(function(enemy){ enemy.killjump=(false); }, 34,window);
}

}
}
}
}