var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var window_width = width;
var window_height = height;

var xmin = 0;
var xmax = width;
var ymin = 0;
var ymax = height;

var mult = 1;

draw();

canvas2.onmousemove = function(event){
  //document.getElementById('mouse').innerHTML = "<p>(x,y) = (" + event.offsetX + "," + event.offsetY + ")</p>";

  ctx2.clearRect(0,0,width,height);
  drawMandelLine(event.offsetX,event.offsetY);

}

window.addEventListener("click",function( event ) {
  var clickX = event.offsetX ;
  var clickY = event.offsetY ;
  console.log(clickX);
  console.log(clickY);

  window_width *= 0.8;
  window_height *= 0.8;
  var tmp_xmin = clickX - width / 2;
  var tmp_ymin = clickY - height / 2;
  mult *= 0.8;
  xmin = tmp_xmin * mult + xmin;
  ymin = tmp_ymin * mult + ymin;
  draw();
} ) ;

function draw(){
  var imgData=ctx.getImageData(0,0,width,height);
  for (i=0; i<imgData.width*imgData.height*4;i+=4){
    var x = (i/4) % width;
    var y = Math.floor((i/4) / width);
    x *= mult;
    y *= mult;
    x += xmin;
    y += ymin;
    x /= width;
    y /= height;
    x *= 3;
    y *= 2;
    x -= 2 * mult;
    y -= 1 * mult;
    var mand = mandel(x,y);
    imgData.data[i] = mand/2;
    imgData.data[i+1] = mand/2;
    imgData.data[i+2] = mand;
    imgData.data[i+3] = 255;
  }
  ctx.putImageData(imgData,0,0);
}

function drawMandelLine(x,y){
  var x1 = x;
  var y1 = y;
  x1 *= mult;
  y1 *= mult;
  x1 += xmin;
  y1 += ymin;
  x1 /= width;
  y1 /= height;
  x1 *= 3;
  y1 *= 2;
  x1 -= 2 * mult;
  y1 -= 1 * mult;
  var xorig = x1;
  var yorig = y1;
  ctx2.strokeStyle = "red";
  ctx2.beginPath();
  ctx2.moveTo(x,y);
  var x2,y2;
  for(var i = 0; i < 32;i++){
    x2 = x1 * x1 - y1 * y1 + xorig;
    y2 = 2 * x1 * y1 + yorig;
    console.log(x2);
    console.log(y2);
    if(Math.abs(x2 - xorig) > 2){
      ctx2.stroke();
      return;
    }
    ctx2.lineTo(x2 * width / 2 + width / 2,y2 * height / 2 + height / 2);
    x1 = x2;
    y1 = y2;
  }
  ctx2.stroke();
}


function mandel(x,y){
  var x1 = x;
  var y1 = y;
  var x2,y2;
  for(var i = 0; i < 256;i++){
    x2 = x1 * x1 - y1 * y1 + x;
    y2 = 2 * x1 * y1 + y;
    if(Math.abs(x2 * x2 - y2 * y2) > 2){
        return (256 - i);
    }
    x1 = x2;
    y1 = y2;
  }
  return 0;
}
