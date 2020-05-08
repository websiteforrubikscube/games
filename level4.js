import Ground from "./ground.js";
import Player from "./player.js";
import Sky from "./sky.js";
import Bees from "./bees.js";


let ground = new Ground();
let player = new Player();
 let sky = new Sky();
let bees = new Bees();

var runnumber14=0;
var runnumber24=0;
var runnumber34=0;

export default class Level4{
 
    constructor (){
      this.ctx=undefined;
      this.respawn = (false);
      window.touch=false;
      window.touch2=false;
      }
  
   proccess4(){
    let canv = document.getElementById("Screen");
    this.ctx = canv.getContext('2d');
    
    if (player.visable==false){
      this.respawnmain();
      return;
    }
    this.erraseCanvas();
    this.draw();
 
    runnumber14++;
    if(window.screen10==true){
     player.proccessloop(this.ctx);
     bees.proccess();
     if(bees.iskillplayer()==true){
player.playerdeath3=true;
     }else{player.playerdeath3=false;}
     
     if(runnumber14<2){
         window.screenload=true;
         window.screen10load=true;
         setTimeout(function(load){ load.screenload=(false); }, 34,window);
         setTimeout(function(load){ load.screen10load=(false); }, 34,window);
     }
    }
}


respawnmain(){
 runnumber14=0;
 runnumber24=0;
 runnumber34=0;
 player.living=true;
 player.visable=true;
window.screen10=true;
 window.color1=("#ffad47");
this.respawn=(false);
}

draw(){
 if(window.screen10==(true)){
 sky.draw(this.ctx);
 ground.draw(this.ctx);
   player.draw(this.ctx);
   bees.draw(this.ctx);
}
}

erraseCanvas() {
 this.ctx.clearRect(0,0,1000,500);
}
}