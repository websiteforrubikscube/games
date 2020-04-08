 import Ground from "./ground.js";
import Obstacle1 from "./obstacle1.js";
import Obstacle2 from "./obstacle2.js";
import Player from "./player.js";
import Enemygreen from "./enemygreen.js";
import Enemyyellow from "./enemyyellow.js";
import Enemyyellow2 from "./enemyyellow2.js";
import Sky from "./sky.js";
import Screen3 from "./screen3.js";
import Screen4 from "./screen4.js";
import Screen5 from "./screen5.js";

 let ground = new Ground();
let obstacle1 = new Obstacle1();
let obstacle2 = new Obstacle2();
 let enemygreen = new Enemygreen();
let player = new Player();
 let sky = new Sky();
 let screen3 = new Screen3();
let screen4 = new Screen4();
let screen5 = new Screen5();
 let enemyyellow = new Enemyyellow();
let enemyyellow2 = new Enemyyellow2();

var runnumber12=0;
 var runnumber22=0;
 var runnumber32=0;

export default class Level2{
 
  constructor (){
    this.ctx=undefined;
    }

 proccess2(){
  let canv = document.getElementById("Screen");
  this.ctx = canv.getContext('2d');
  
if(window.resetlevel2==(true)){
 runnumber12=0;
 runnumber22=0;
 runnumber32=0;
 }

 this.erraseCanvas();
 runnumber12++;
if(window.screen4==(true)){
 screen4.draw(this.ctx);
sky.draw(this.ctx);
ground.draw(this.ctx);
  player.draw(this.ctx);
 enemyyellow2.draw(this.ctx);
 enemyyellow.draw(this.ctx);
  player.proccessloop(this.ctx);
 enemygreen.proccessloop(this.ctx);
 enemyyellow.proccessloop(this.ctx);
 enemyyellow2.proccessloop(this.ctx);
 screen4.proccessloop();
 if(runnumber12<2){
 window.screen4load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen4load=(false); }, 34,window);
 }
}
  if(window.screen5==(true)){
   runnumber22++;
sky.draw(this.ctx);
   screen5.draw(this.ctx);
ground.draw(this.ctx);
   obstacle1.draw(this.ctx);
  player.draw(this.ctx);
   enemyyellow.draw(this.ctx);
  player.proccessloop(this.ctx);
 enemygreen.proccessloop(this.ctx);
 enemyyellow.proccessloop(this.ctx);
 enemyyellow2.proccessloop(this.ctx);
   obstacle1.proccessloop();
   screen5.proccessloop();
 if(runnumber22<2){
 window.screen5load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen5load=(false); }, 34,window);
 }
}
  if(window.screen6==(true)){
   runnumber32++;
sky.draw(this.ctx);
   obstacle1.draw(this.ctx);
   obstacle2.draw(this.ctx);
ground.draw(this.ctx);
  player.draw(this.ctx);
   enemyyellow.draw(this.ctx);
   enemyyellow2.draw(this.ctx);
  player.proccessloop(this.ctx);
 enemygreen.proccessloop(this.ctx);
 enemyyellow.proccessloop(this.ctx);
 enemyyellow2.proccessloop(this.ctx);
   obstacle1.proccessloop();
   obstacle2.proccessloop();
 if(runnumber32<2){
 window.screen6load=(true);
  window.screenload=(true);
  setTimeout(function(load){ load.screenload=(false); }, 34,window);
 setTimeout(function(load){ load.screen6load=(false); }, 34,window);
 }
}
}
erraseCanvas() {
  this.ctx.clearRect(0,0,1000,500);
}
}
