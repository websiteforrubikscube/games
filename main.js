import Level1 from "./level1.js";
import Level2 from "./level2.js";

let level1 = new Level1();
let level2 = new Level2();

window.screen1=(true);
export default function launch(){
  screencheck();
  function screencheck(){
  if(window.screen1==(true)){
level1.proccess();
  }
  if(window.screen4==(true)){
level2.proccess();
  }
  window.setTimeout(function() {screencheck();}, 33);
   }
}
window.launch=launch;
