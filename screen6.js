export default class Screen6{
    constructor(){
    this.width=50;
    this.height=500;
    this.position={x:950, y:0};
     window.screen6=(false);
     this.move=(true)
    }
    draw(ctx){
    ctx.fillStyle=("#87CEEB");
    ctx.fillRect(this.position.x,this.position.y, this.width, this.height);
    }
     proccessloop(){
      if(window.screen6==(true)){
     if((window.PlayerX+100)>this.position.x){
        if((window.invisabledamage2load==(true))&&(window.invisabledamage1load==(true))){
     window.screen6=(false);
      window.screen7=(true);
      this.move=(false);
     setTimeout(function(load3){ load3.move=(true); }, 34, this);
     }
      }
    }
      window.move=this.move; 
     }
    }
    