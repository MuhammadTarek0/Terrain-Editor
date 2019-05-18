function Indicator(x, y) {

    this.x = x;
    this.y = y;
    var that = this;

    this.Draw = function (ctx) {
        ///<param name="ctx" type="CanvasRenderingContext2D"/>
        ctx.beginPath()
        ctx.rect(that.x, that.y, 10, 10);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

}
