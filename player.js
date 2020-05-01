import Enemyyellow from "./enemyyellow.js";
import Enemygreen from "./enemygreen.js";
import Screen1 from "./screen1.js";
import Redenemy from "./enemyred.js";

var keys = {};

export default class Player {
  constructor() {
    window.PlayerX = 0;
    this.width = 100;
    this.height = 150;
    this.position = { x: 0, y: 250 };
    this.speed = 0;
    this.visable = (true);
    this.living = (true);
    this.playerdeath = false;
    this.playerdeath2 = false;
    this.killjumpifskip=false;
    window.color1 = ("#ffad47");

    keys = {};
    keys[37] = false;
    keys[38] = false;
    keys[39] = false;
    keys[40] = false;
    keys[114] = false;
    window.onkeyup = function (e) {
      keys[e.keyCode] = false;
    }
    window.onkeydown = function (e) {
      keys[e.keyCode] = true;

    }
  }
  draw(ctx) {
    if (this.visable == (true)) {
      ctx.fillStyle = (window.color1);
      ctx.fillRect(this.position.x, this.position.y,
        this.width, this.height);
    }
  }


  proccessloop(ctx) {
    this.resetPlayer();
    if (this.living == false) {
      return;
    }

    if (this.visable == false) {
      return;
    }
    //movement
    if ((window.touch2 == (true)) || (window.touch == (true))) {
      this.speed = 0;
    }

    if (keys[114] == true) {
      window.start = false;
      window.start3 = true;
      window.screen1 = false;
      window.screen7 = true;
      window.nodamage1 = true;
      keys[114] = false;
    }

    if ((keys[39] == true) && (this.position.x < 900)) {
      if ((this.living == true) && (window.touchX1 == false)) {
        if ((this.position.y > 249) && (window.touchX12 == false)) {
          this.position.x = this.position.x + 10;
        }
        if ((this.position.y < 250) && (window.touchX12 == false)) {
          this.position.x = this.position.x + 15;
        }
      }
    }
    if ((keys[37] == true) && (this.position.x > 0)) {
      if ((this.living == (true)) && (window.touchX2 == (false))) {
        if ((this.position.y > 249) && (window.touchX22 == (false))) {
          this.position.x = this.position.x - 10;
        }
        if ((this.position.y < 250) && (window.touchX22 == (false))) {
          this.position.x = this.position.x - 15;
        }
      }
    }
    if ((keys[38] == true) && (this.living == true)) {
      if ((this.position.y > 249) || (window.touch == true)) {
        this.position.y = this.position.y - 10;
        this.speed = -20;

      }
    }
    if ((keys[38] == true) && (this.living == true)) {
      if (window.touch2 == (true)) {
        this.position.y = this.position.y - 10;
        this.speed = -20;

      }
    }
    if (this.position.y < 250) {
      this.speed = this.speed + 1;
      this.position.y = this.position.y + this.speed;
    }
    if (this.position.y > 250) {
      this.position.y = 250;
    }
    if ((window.touchY == true) && (keys[38] == false)) {
      this.position.y = window.obstacle1Y - 149;
    }
    if ((window.touchY2 == true) && (keys[38] == false)) {
      this.position.y = window.obstacle2Y - 149;
    }
    if (this.speed > 15) {
      this.speed = 15;
    }



    if (window.killjump == true) {
      if (this.speed > 0) {
        if(this.killjumpifskip==false){
        this.speed = this.speed * -0.75;
        window.killjump = false;
        this.killjumpifskip=true;
      }
    }
      if ((window.touchY == (true)) || (window.touchY2 == (true))) {
         if(this.killjumpifskip==false){
        this.speed = -10;
        this.position.y = this.position.y - 6;
        window.killjump = false;
        this.killjumpifskip=true;
      }
    }
      if (this.speed < 0) {
        if(this.killjumpifskip==false){
        this.speed = this.speed * 1.5
        window.killjump = false;
        this.killjumpifskip=true;
      }
    }
    }
    else{ if(this.killjumpifskip==true){setTimeout(function (player) { player.killjumpifskip = (false); }, 1000, this});}

    //death
    if ((this.position.y + 150) > (window.enemy1c - 33)) {
      if ((this.position.x + 100) > (window.enemy1c2 - 100)) {
        if ((this.position.x) < (window.enemy1c2 + 100)) {
          if ((window.visable == true) && (window.nodamage1 == (false))) {
            if (window.screenload == (false)) {

              this.living = (false);
              window.color1 = ("#ffd5a1");
              keys[37] = (false);
              keys[38] = (false);
              keys[39] = (false);
              keys[40] = (false);

              setTimeout(function (player) { player.visable = (false); }, 1000, this);

            }
          }
        }
      }
    }

    if ((this.position.y + 150) > (window.enemy2Y + 33)) {
      if ((this.position.x + 100) > (window.enemy2X)) {
        if ((this.position.x) < (window.enemy2X + 150)) {
          if ((window.visable1 == true) && (window.invisabledamage1 == (false))) {
            if (window.screenload == (false)) {

              this.living = (false);

              window.color1 = ("#ffd5a1");
              keys[37] = (false);
              keys[38] = (false);
              keys[39] = (false);
              keys[40] = (false);

              setTimeout(function (player) { player.visable = (false); }, 1000, this);
            }
          }
        }
      }
    }

    if ((this.position.y + 150) > (window.enemy2Y2 + 33)) {
      if ((this.position.x + 100) > (window.enemy2X2)) {
        if ((this.position.x) < (window.enemy2X2 + 150)) {
          if ((window.visable2 == true) && (window.invisabledamage2 == (false))) {
            if (window.screenload == (false)) {

              this.living = (false);
              window.color1 = ("#ffd5a1");
              keys[37] = (false);
              keys[38] = (false);
              keys[39] = (false);
              keys[40] = (false);

              setTimeout(function (player) { player.visable = (false); }, 1000, this);
            }
          }
        }
      }
    }




    if (window.start3 == true) {
      if ((this.playerdeath == true) || (this.playerdeath2 == true)) {
        this.living = (false);
        window.color1 = ("#ffd5a1");
        keys[37] = (false);
        keys[38] = (false);
        keys[39] = (false);
        keys[40] = (false);

        setTimeout(function (player) { player.visable = (false); }, 1000, this);
      }
    }

    window.PlayerX = this.position.x;
    window.PlayerY = this.position.y;
  }

  resetPlayer() {
    //screen movement
    if (window.screenload == (true)) {
      this.position.x = 0;
      this.position.y = 250;
    }
  }


}

