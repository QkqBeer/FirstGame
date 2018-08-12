var dustObj = function ()
{
    this.x = [];
    this.y = [];
    this.amp = [];
    this.nu = [];
    this.alpha;
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function ()
{
   for(var i = 0; i < this.num; i++)
   {
       this.x[i] = Math.random() * canvasWidth;
       this.y[i] = Math.random() * canvasHeigth;
       this.amp[i] = 20 + Math.random() * 15;
       this.nu[i] = Math.floor(Math.random() * 7);
   }
   this.alpha = 0;
}
dustObj.prototype.draw = function ()
{
   this.alpha += deltaTime * 0.001;
   var l = Math.sin(this.alpha)
   for(var i = 0; i < this.num; i++)
   {
       var no =  this.nu[i];
       ctx1.drawImage(dustPic[no], this.x[i] + l * this.amp[i], this.y[i]);

   }
}