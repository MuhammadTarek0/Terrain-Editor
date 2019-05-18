function Line(Left_Point, Right_Point) {

    this.Left_Point = Left_Point;
    this.Right_Point = Right_Point;

    var that = this;

    this.Draw = function (ctx) {
        ///<param name="ctx" type="CanvasRenderingContext2D"/>
        ctx.beginPath();
        ctx.moveTo(that.Left_Point.x, that.Left_Point.y);
        ctx.lineTo(that.Right_Point.x, that.Right_Point.y);
        ctx.stroke();
        ctx.closePath();

    }


}