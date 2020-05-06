import Level1 from "./level1.js";
import Level2 from "./level2.js";
import Level3 from "./level3.js";
import Level4 from "./level4.js";

let level1 = new Level1();
let level2 = new Level2();
let level3 = new Level3();
let level4 = new Level4();

window.start=(true);
window.start2=(false);
window.start3=(false);
window.start4=(false);
window.killjump=(false);
window.touch=(false);
window.touchY=(false);
window.touchX1=(false);
window.touchX2=(false);
window.enemy2Xtouch1=(false);
window.enemy2Xtouch2=(false);
window.enemy3Xtouch1=(false);
window.enemy3Xtouch2=(false);
window.touch2=(false);
window.touchY2=(false);
window.touchX12=(false);
window.touchX22=(false);
window.enemy2Xtouch12=(false);
window.enemy2Xtouch22=(false);
window.enemy3Xtouch12=(false);
window.enemy3Xtouch22=(false);
export default function launch(){

  gameloop();
  function gameloop(){
  if(window.start==(true)){
level1.proccess();
  }
    if(window.screen4==(true)){
    window.start2=true;
    }
    if(window.start2==true){
    window.start=(false);
level2.proccess2();
  }
  if(window.screen7==(true)){
    window.start3=true;
    }
    if(window.start3==true){
      window.start2=(false);
  level3.proccess3();
    }
    if(window.screen10==true){
      window.start4=true;
      window.start3=false;
    }
    if(window.start4==true){
level4.proccess4();
    }
    window.setTimeout(function() {gameloop();}, 33);
  }
}
window.launch=launch;
