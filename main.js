var yyy = document.getElementById('xxx');

xxxx()

window.onresize = function(){
    xxxx()
}
function xxxx(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    yyy.width = pageWidth
    yyy.height = pageHeight
}

var context = yyy.getContext('2d');

var using = false
var lastPoint = {
    x: undefined, 
    y: undefined
}
yyy.onmousedown = function(aaa){
    var x = aaa.clientX
    var y = aaa.clientY
    if (eraserEnabled){
        using = true
        context.clearRect(x-5, y-5, 10, 10)
    }else{
        using = true
        lastPoint = {
            "x":x,
            "y":y
        }
    }
    
}
yyy.onmousemove = function(aaa){
        var x = aaa.clientX
        var y = aaa.clientY
        if (eraserEnabled) {
            if (using) {
                context.clearRect(x-5, y-5, 10, 10)
            }
        }
            else {
                if (using) {
                var newPoint = {
                    "x":x, 
                    "y":y
            }
            drawLine(
                lastPoint.x, lastPoint.y,
                 newPoint.x, newPoint.y)
            lastPoint = newPoint
        }
       
        }
        
    }
    yyy.onmouseup = function(aaa){
        using = false
   }

function drawCircle(x, y, radius){
    context.beginPath()
    context.fillStyle = "black"
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill()
}

function drawLine(x1, y1, x2, y2){
    context.beginPath()
    context.strokeStyle = 'black'
    context.moveTo(x1, y1) //起点
    context.lineWidth = 5
    context.lineTo(x2, y2) //终点
    context.stroke()
    context.closePath()
}

var eraserEnabled = false
eraser.onclick = function(){
    eraserEnabled = !eraserEnabled
}