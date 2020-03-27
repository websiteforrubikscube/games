import Level1 from "./level1.js";
import Level2 from "./level2.js";

let level1 = new Level1();
let level2 = new Level2();

export default function launch(){
level1.proccess();
level2.proccess();
}
window.launch=launch;
