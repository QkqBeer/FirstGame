/**
 * Created by qiukaiqiang on 2018/8/10.
 */
var fruitObj = function () {
    this.alive = []; //boolean
    this.orange = new Image();
    this.blue = new Image();
    this.x = [];
    this.y = [];
    this.l = [];//果实成长的程度
    this.spd = []; //漂浮的速度
    this.fruitType = []; //水果类型
    this.aneNum = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function ()
{
    for(var i = 0; i < this.num; i++ )
    {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.005 + 0.005;
        this.fruitType[i] = '';
        this.aneNum = [];
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function ()
{
    for(var i = 0; i < this.num; i++)
    {
        //draw
        //find an ane,graw,fly up
        var picSrc = this.orange;
        if(this.fruitType[i] == 'blue'){
            picSrc = this.blue;
        }
        if(this.alive[i])
        {
         if(this.l[i] <= 14) //grow
        {
            this.x[i] = ane.headx[this.aneNum[i]];
            this.y[i] = ane.heady[this.aneNum[i]]
            this.l[i] += this.spd[i] * deltaTime;
        }
        else
        {
            this.y[i] -= 7 * this.spd[i] * deltaTime;
        }
        ctx2.drawImage(picSrc, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        if(this.y[i] < 10)
        {
            this.alive[i] = false;
        }
        }

    }
}
fruitObj.prototype.born = function (i) {
    this.aneNum[i] = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    if(Math.random() < 0.3)
    {
        this.fruitType[i] = 'blue'
    }
    else {
        this.fruitType[i] = 'orange'
    }
}
fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
}
function fruitMonitor() {
    var count = 0;
    for( var i = 0; i < fruit.num; i++)
    {
        if(fruit.alive[i])
        {
           count++;
        }
    }
    if(count < 15)
    {
        sendFruit();
        return;
    }
}
function sendFruit() {
    for(var i = 0; i < fruit.num; i++)
    {
        if(!fruit.alive[i])
        {
           fruit.born(i);
           return;
        }
    }
}
