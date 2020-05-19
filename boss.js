export default class Boss{
constructor(){
    this.position={x:600,y:200}
    this.spikes=false;
    this.timer=false;
    this.hit=0;
    this.visable=true;
}
draw(ctx){
    if(this.visable==true){
    if(this.spikes==false){
    ctx.drawImage(getElementById("bossnospikes"), this.position.x, this.position.y);
    }
    if(this.spikes==true){
        ctx.drawImage(getElementById("bossspikes"), this.position.x, this.position.y);
        }
}
}
proccessloop(){
    //movement
    if(this.spikes==false){
    if(window.PlayerX+50>this.position.x+150){
        this.position.x=this.position.x+10;
    }
    if(window.PlayerX+50<this.position.x+150){
        this.position.x=this.position.x-10;
    }
    }
    //death
if(this.spikes==false){
    if((window.PlayerY+150>this.position.y)&&(window.PlayerY<this.position.y+20)){
        if((window.PlayerX+100>this.position.x)&&(window.PlayerX<this.position.x+300)){
            this.hit++;
       if(this.hit>9){
           this.visable=false;
       }         
       if(this.hit<10){
        setTimeout(function (boss) { boss.spikes = (true); }, 500, this);
        setTimeout(function (boss) { boss.spikes = (false); }, 3000, this);
       }
        }
    }
}

}
iskillplayer(){
    if(window.PlayerY+150>this.position.y){
     if(window.PlayerX+100>this.position.x){
         if(window.PlayerX<this.position.x+300){
             return true;
         }
     }
    }
    return false;
}
}
