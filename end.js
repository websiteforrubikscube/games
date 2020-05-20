export default class End {
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
        if (window.screen13 == (true)) {
            if(window.bossdeath==true){
                    if (window.screenload == false) {
                        window.screen13 = (false);
                        window.endgame=(true);
                }
            }
        }
        window.move = this.move;
    }
}