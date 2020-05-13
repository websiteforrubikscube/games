export default class Screen10 {
    constructor() {
        this.width = 50;
        this.height = 500;
        this.position = { x: 950, y: 0 };
        window.screen11 = (false);
        this.move = (true);
    }
    draw(ctx) {
        ctx.fillStyle = ("#90EE90");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    proccessloop() {
        if (window.screen10 == (true)) {
            if ((window.PlayerX + 100) > this.position.x) {
                    if (window.screenload == false) {
                        window.screen10 = (false);
                        window.screen11 = (true);
                        this.move = (false);
                        setTimeout(function (load2) { load2.move = (true); }, 34, this);
                }
            }
        }
        window.move = this.move;
    }
}