import Level1 from "./level1.js";
import Level2 from "./level2.js";

let level1 = new Level1();
let level2 = new Level2();

window.start=(true);
export default function launch(){
  gameloop();
  function gameloop(){
  if(window.start==(true)){
level1.proccess();
  }
  if(window.screen4==(true)){
    window.start=(false);
level2.proccess();
  }
    window.setTimeout(function() {gameloop();}, 33);
  }
}
window.launch=launch;
