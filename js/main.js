/**
 * Created by qiukaiqiang on 2018/8/10.
 */
document.body.onload=game;
var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var canvasWidth;
var canvasHeigth;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];
var momEye = [];
var momTail = [];
var momBodyOra = [];
var momBodyBlue = [];
var data;
var wave;
var halo;
var dust;
var dustPic = [];
function game() {
    init()
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init() {
    //获得canvas context
    can1=document.getElementById('canvas1')
    ctx1=can1.getContext('2d')
    can2=document.getElementById('canvas2')
    ctx2=can2.getContext('2d')
    bgPic.src='./src/background.jpg'
    canvasWidth=can1.width;
    canvasHeigth=can1.height;

    //初始化海葵
    ane=new aneObj();
    ane.init();

    //初始化果实
    fruit = new fruitObj();
    fruit.init()

    //初始化大鱼
    mom = new momObj();
    mom.init()

    //添加鼠标响应事件
    //鼠标移动事件addEventListener(函数名，动作名，false)
    can1.addEventListener('mousemove', onMousemove, false);
    mx = canvasWidth * 0.5;
    my = canvasHeigth * 0.5;

    //初始化小鱼
    baby = new babyObj();
    baby.init()

    //初始化小鱼的尾巴
    for(var i = 0; i < 8; i++ )
    {
        babyTail[i] = new Image();
        babyTail[i].src = './src/babyTail' + i + '.png';
    }

    for(var i = 0; i < 2; i++)
    {
      babyEye[i] = new Image();
      babyEye[i].src = './src/babyEye' + i + '.png';
    }

    for(var i = 0; i < 20; i++)
    {
        babyBody[i] =new Image();
        babyBody[i].src = './src/babyFade' + i +'.png'
    }

    //init mom Eye,tail,body
    for(var i = 0; i < 2; i++)
    {
        momEye[i] = new Image();
        momEye[i].src = './src/bigEye' + i + '.png'
    }
    for(var i = 0; i < 8; i++)
    {
        momTail[i] = new Image();
        momTail[i].src = './src/bigTail' + i + '.png'
    }
    for(var i = 0; i < 8; i++)
    {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = './src/bigSwim' + i + '.png';
        momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
    }


    data = new dataObj();
    wave = new waveObj();
    wave.init();
    halo = new haloObj();
    halo.init();

    for(var i = 0; i < 7; i++)
    {
        dustPic[i] = new Image();
        dustPic[i].src = './src/dust' + i + '.png';
    }
    dust = new dustObj();
    dust.init();
}
function gameloop() {
    window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    if(deltaTime > 40)
    {
        deltaTime = 40;
    }
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canvasWidth,canvasHeigth);
    mom.draw();
    momFruitsCollsion();
    momBabyCollision();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
function onMousemove(e) {
    if(!data.gameOver)
    {
      if(e.offsetX || e.layerX)
    {
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    }
}