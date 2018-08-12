var haloObj = function ()
{
   this.x = [];
   this.y = [];
   this.alive = [];
   this.r = []
}
haloObj.prototype.num = 5;
haloObj.prototype.init = function ()
{
    for(var i = 0; i < this.num; i++)
    {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
    }
}
haloObj.prototype.draw = function ()
{
    for(var i = 0; i < this.num; i++)
    {
        if(this.alive[i])
        {
            //draw
            this.r[i] += deltaTime * 0.04;
            if(this.r[i] > 100)
            {
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 100

            //draw circle api
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
            ctx1.closePath();
            ctx1.strokeStyle = 'rgba(255, 102, 0, '+ alpha +')';
            ctx1.stroke();
            //draw
        }
    }
}
haloObj.prototype.born = function () {
    for(var i = 0; i < this.num; i++)
    {
        if(!this.alive[i])
        {
            //bron
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = baby.x;
            this.y[i] = baby.y;
            // 找到一个，就跳出循环
            return;
        }
    }
}