import Ground from "./ground.js";
import Obstacle1 from "./obstacle1.js";
import Obstacle2 from "./obstacle2.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Enemyyellow2 from "./enemyyellow2.js";
import Redenemy from "./enemyred.js";
import Sky from "./sky.js";
import Screen6 from "./screen6.js";
import Screen7 from "./screen7.js";
import Screen8 from "./screen8.js";


let ground = new Ground();
let obstacle1 = new Obstacle1();
let obstacle2 = new Obstacle2();
 let enemygreen = new Enemygreen();
let player = new Player();
 let sky = new Sky();
let screen6 = new Screen6();
let screen7 = new Screen7();
let screen8 = new Screen8();
 let enemyyellow = new Enemyyellow();
let enemyyellow2 = new Enemyyellow2();


var runnumber13=0;
var runnumber23=0;
var runnumber33=0;

export default class Level3{
 
    constructor (){
      this.ctx=undefined;
      this.respawn = (false);
      this.redenemy1=new Redenemy(725,300);
      this.redenemy2=new Redenemy(725,300);
      window.touch=false;
      window.touch2=false;
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
        if(this.redenemy1.death()==true){
        screen7.redenemy1dead=true;
      }else{screen7.redenemy1dead=false;}
      if(this.redenemy1.killplayer(player.position.x, player.position.y)){
        player.playerdeath=true;
        }else{
          player.playerdeath=false;
        }
      screen7.proccessloop();
        player.proccessloop(this.ctx);
        enemyyellow.proccessloop(this.ctx);
        enemyyellow2.proccessloop(this.ctx);
        this.redenemy1.proccess(this.ctx);
        obstacle1.proccessloop();
    obstacle2.proccessloop();
      if(runnumber13<2){ 
        this.redenemy1=new Redenemy(725,300);
        this.redenemy1.immune=false;
        this.redenemy1.visable=true;
        this.redenemy2.immune=true;
        this.redenemy2.visable=false;
      window.screen7load=(true);
      window.screenload=(true);
      setTimeout(function(load){ load.screenload=(false); }, 34,window);
    setTimeout(function(load){ load.screen7load=(false); }, 34,window);
    }
  
   }
   if(window.screen8==(true)){
    runnumber23++;
    if(this.redenemy1.death()==true){
      screen8.redenemy1dead=true;
    }else{screen8.redenemy1dead=false;}
    if(this.redenemy2.death()==true){
      screen8.redenemy2dead=true;
    }else{screen8.redenemy1dead=false;}
    if(this.redenemy2.killplayer(player.position.x, player.position.y)){
      player.playerdeath2=true;
      }else{
        player.playerdeath2=false;
      }
      if(this.redenemy1.killplayer(player.position.x, player.position.y)){
        player.playerdeath=true;
        }else{
          player.playerdeath=false;
        }
      player.proccessloop(this.ctx);
      enemyyellow.proccessloop(this.ctx);
      enemyyellow2.proccessloop(this.ctx);
      this.redenemy1.proccess(this.ctx);
      this.redenemy2.proccess(this.ctx);
      obstacle1.proccessloop();
  obstacle2.proccessloop();
  if(runnumber33>2){ 
    screen8.proccessloop();
    }
    if(runnumber23<2){ 
      this.redenemy1=new Redenemy(175,300);
      this.redenemy2=new Redenemy(725,300);
      this.redenemy1.immune=false;
        this.redenemy1.visable=true;
        this.redenemy2.immune=false;
        this.redenemy2.visable=true;
        this.redenemy1dead = false;
        this.redenemy2dead = false;
    window.screen8load=(true);
    window.screenload=(true);
    setTimeout(function(load){ load.screenload=(false); }, 34,window);
  setTimeout(function(load){ load.screen7load=(false); }, 34,window);
  }

 }
 if(window.screen9==(true)){
  runnumber33++;
  if(this.redenemy2.killplayer(player.position.x, player.position.y)){
    player.playerdeath2=true;
    }else{
      player.playerdeath2=false;
    }
    if(this.redenemy1.killplayer(player.position.x, player.position.y)){
      player.playerdeath=true;
      }else{
        player.playerdeath=false;
      } 
    player.proccessloop(this.ctx);
    enemyyellow.proccessloop(this.ctx);
    enemyyellow2.proccessloop(this.ctx);
    this.redenemy1.proccess(this.ctx);
    this.redenemy2.proccess(this.ctx);
    obstacle1.proccessloop();
obstacle2.proccessloop();
  if(runnumber33<2){ 
    this.redenemy1=new Redenemy(450,300);
    this.redenemy2=new Redenemy(900,300);
    this.redenemy1.immune=false;
    this.redenemy1.visable=true;
    this.redenemy2.immune=false;
    this.redenemy2.visable=true;
    this.redenemy1dead = false;
        this.redenemy2dead = false;
  window.screen9load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
setTimeout(function(load){ load.screen9load=(false); }, 34,window);
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
    screen7.draw(this.ctx);
  sky.draw(this.ctx);
  ground.draw(this.ctx);
  obstacle1.draw(this.ctx);
    player.draw(this.ctx);
    this.redenemy1.draw(this.ctx);
  }
  if(window.screen8==(true)){
    screen8.draw(this.ctx);
  sky.draw(this.ctx);
  ground.draw(this.ctx);
  obstacle1.draw(this.ctx);
    player.draw(this.ctx);
    this.redenemy1.draw(this.ctx);
    this.redenemy2.draw(this.ctx);
  }
  if(window.screen9==(true)){
  sky.draw(this.ctx);
  ground.draw(this.ctx);
    player.draw(this.ctx);
    this.redenemy1.draw(this.ctx);
    this.redenemy2.draw(this.ctx);
  }
}

erraseCanvas() {
  this.ctx.clearRect(0,0,1000,500);
}
}
