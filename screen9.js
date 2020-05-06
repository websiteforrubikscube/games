export default class Screen9 {
    constructor() {
        this.width = 50;
        this.height = 500;
        this.position = { x: 950, y: 0 };
        window.screen10 = (false);
        this.move = (true);
        this.redenemy1dead = false;
        this.redenemy2dead = false;
    }
    draw(ctx) {
        ctx.fillStyle = ("#90EE90");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    proccessloop() {
        if (window.screen9 == (true)) {
            if ((window.PlayerX + 100) > this.position.x) {
                if ((this.redenemy1dead == true) && (this.redenemy2dead == true)) {
                    if (window.screenload == false) {
                        window.screen9 = (false);
                        window.screen10 = (true);
                        this.move = (false);
                        setTimeout(function (load2) { load2.move = (true); }, 34, this);
                    }
                }
            }
        }
        window.move = this.move;
    }
}