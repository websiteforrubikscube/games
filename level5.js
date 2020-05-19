import Player from "./player.js";
import Ground from "./ground.js";
import Sky from "./sky.js";
import Boss from "./boss.js";

let player = new Player();
let ground = new Ground();
let sky = new Sky();
let boss = new Boss();

var runnumber15=0;

export default class Level5{
 
    constructor (){ 
      this.ctx=undefined;
      this.respawn = (false);
      }
  
   proccess5(){
    let canv = document.getElementById("Screen");
    this.ctx = canv.getContext('2d');
    
    if (player.visable==false){
      this.respawnmain();
      return;
    }
    this.erraseCanvas();
    this.draw();
 
    runnumber15++;
    if(window.screen13==true){
        player.proccessloop(this.ctx);
        boss.proccessloop(this.ctx);
        if(boss.iskillplayer()==true){
            player.playerdeath3=true;
            setTimeout(function(playerdeath){ playerdeath.playerdeath3=(false); }, 34,player);
        }
     if(runnumber15<2){
         window.screenload=true;
         window.screen13load=true;
         setTimeout(function(load){ load.screenload=(false); }, 34,window);
         setTimeout(function(load){ load.screen13load=(false); }, 34,window);
     }
    }
}
    


respawnmain(){
 runnumber15=0;
 player.living=true;
 player.visable=true;
window.screen13=true;
 window.color1=("#ffad47");
this.respawn=(false);
}

draw(){
 if(window.screen13==(true)){
    sky.draw(this.ctx);
    boss.draw(this.ctx);
    player.draw(this.ctx);
    ground.draw(this.ctx);
 }
}

erraseCanvas() {
 this.ctx.clearRect(0,0,1000,500);
}
}
