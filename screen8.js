export default class Screen8 {
    constructor() {
        this.width = 50;
        this.height = 500;
        this.position = { x: 950, y: 0 };
        window.screen8 = (false);
        this.move = (true);
        this.redenemy1dead = false;
    }
    draw(ctx) {
        ctx.fillStyle = ("#87CEEB");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    proccessloop() {
        if (window.screen8 == (true)) {
            if ((window.PlayerX + 100) > this.position.x) {
                if ((this.redenemy1dead == true) && (this.redenemy2dead == true)) {
                    if (window.screenload == false) {
                        window.screen8 = (false);
                        window.screen9 = (true);
                        this.move = (false);
                        setTimeout(function (load2) { load2.move = (true); }, 34, this);
                    }
                }
            }
        }
        window.move = this.move;
    }
}