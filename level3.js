import Ground from "./ground.js";
import Obstacle1 from "./obstacle1.js";
import Obstacle2 from "./obstacle2.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Enemyyellow2 from "./enemyyellow2.js";
import Enemyred from "./enemyred.js";
import Sky from "./sky.js";
import Screen6 from "./screen6.js";


let ground = new Ground();
let obstacle1 = new Obstacle1();
let obstacle2 = new Obstacle2();
 let enemygreen = new Enemygreen();
let player = new Player();
 let sky = new Sky();
let screen6 = new Screen6();
 let enemyyellow = new Enemyyellow();
let enemyyellow2 = new Enemyyellow2();


var runnumber13=0;
var runnumber23=0;
var runnumber33=0;

export default class Level3{
 
    constructor (){
      this.ctx=undefined;
      this.respawn = (false);
      this.redenemy1=new Enemyred(725,300);
      }
  
   proccess3(){
    let canv = document.getElementById("Screen");
    this.ctx = canv.getContext('2d');
    
    if (player.visable==false){
      this.respawnmain();
      return;
    }
  
   this.erraseCanvas();
   this.draw();

   runnumber13++;
    if(window.screen7==(true)){
        player.proccessloop(this.ctx);
        enemyyellow.proccessloop(this.ctx);
        enemyyellow2.proccessloop(this.ctx);
        this.redenemy1.proccess(this.ctx);
        obstacle1.proccessloop();
    obstacle2.proccessloop();
      if(runnumber13<2){ 
        this.redenemy1=new Enemyred(725,300);
      window.screen7load=(true);
      window.screenload=(true);
      setTimeout(function(load){ load.screenload=(false); }, 34,window);
    setTimeout(function(load){ load.screen7load=(false); }, 34,window);
    }
  
   }
 }//prcess3


respawnmain(){
  runnumber13=0;
  runnumber23=0;
  runnumber33=0;
  player.living=true;
  player.visable=true;
  window.screen4=(true);
  window.screen5=(false);
  window.screen6=(false);
  window.color1=("#ffad47");
this.respawn=(false);
}

draw(){
  if(window.screen7==(true)){
  sky.draw(this.ctx);
  ground.draw(this.ctx);
    player.draw(this.ctx);
    this.redenemy1.draw(this.ctx);
  }
}

erraseCanvas() {
  this.ctx.clearRect(0,0,1000,500);
}
}
