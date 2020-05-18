export default class Screen12 {
    constructor() {
        this.width = 50;
        this.height = 500;
        this.position = { x: 950, y: 0 };
        window.screen13 = (false);
        this.move = (true);
    }
    draw(ctx) {
        ctx.fillStyle = ("#90EE90");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    proccessloop() {
        if (window.screen12 == (true)) {
            if ((window.PlayerX + 100) > this.position.x) {
                    if (window.screenload == false) {
                        window.screen12 = (false);
                        window.screen13 = (true);
                        this.move = (false);
                        setTimeout(function (load2) { load2.move = (true); }, 34, this);
                }
            }
        }
        window.move = this.move;
    }
}