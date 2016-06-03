$(function(){
  $.datepicker.setDefaults(
    $.extend( $.datepicker.regional[ '' ] )
  );
  $( '#datepicker' ).datepicker();
});

var fCanvas = function(div, id, wRatio, hRatio){
    this.div = document.getElementById(div);
    this.element = document.getElementById(id);
    this.wRatio = wRatio;
    this.hRatio = hRatio;
    this.canvas = new fabric.Canvas(this.element, {
            height: $(this.div).width()*(hRatio/wRatio),
            width: $(this.div).width(),
        
    });
    this.ratio = $(this.div).width()/wRatio;
    this.canvas.selection=false;
    this.canvas.enableRetinaScaling=true;
    this.resizeCanvas = function(){
        this.zoom($(this.div).width()/this.canvas.getWidth());
        this.ratio = this.canvas.getWidth()/wRatio;
    };
    this.zoom = function(factor){
        if (factor != 1){
            this.canvas.setHeight(this.canvas.getHeight() * factor);
            this.canvas.setWidth(this.canvas.getWidth() * factor);
            if (this.canvas.backgroundImage) {
                // Need to scale background images as well
                var bi = this.canvas.backgroundImage;
                bi.width = bi.width * factor; bi.height = bi.height * factor;
            }
            var objects = this.canvas.getObjects();
            for (var i in objects) {
                var scaleX = objects[i].scaleX;
                var scaleY = objects[i].scaleY;
                var left = objects[i].left;
                var top = objects[i].top;

                var tempScaleX = scaleX * factor;
                var tempScaleY = scaleY * factor;
                var tempLeft = left * factor;
                var tempTop = top * factor;

                objects[i].scaleX = tempScaleX;
                objects[i].scaleY = tempScaleY;
                objects[i].left = tempLeft;
                objects[i].top = tempTop;

                objects[i].setCoords();
            }
            this.canvas.renderAll();
            this.canvas.calcOffset();
        }
    }
    this.saveImg = function(){
        console.log('Export Image');
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            window.open(this.element.toDataURL('jpg'));
        }
    }
}

$(document).ready(function(){
    console.log("Document Ready!");
    var p = new fCanvas('poster-div', 'p', 2550, 3300);
    var b = new fCanvas('banner-div', 'b', 784, 295);
    fabric.Image.fromURL('assets/Youth Event/b-bg.png', function(oImg) {
        b.canvas.add(oImg.set({
            top: 0,
            left: 0,
            width: 784*b.ratio,
            height: 295*b.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/bg.png', function(oImg) {
        p.canvas.add(oImg.set({
            width: p.canvas.getWidth(),
            height: p.canvas.getHeight(),
            draggable: false,
            opacity: 0.5
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/wave.png', function(oImg) {
        p.canvas.add(oImg.set({
            top: 2655.7/3300*p.canvas.getHeight(),
            left: 0,
            width: 2550*p.ratio,
            height: 647*p.ratio,
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/bubble.png', function(oImg) {
        p.canvas.add(oImg.set({
            top: 225.6/3300*p.canvas.getHeight(),
            left: 117/2550*p.canvas.getWidth(),
            width: 2260*p.ratio,
            height: 1888*p.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/sauga.png', function(oImg) {
        b.canvas.add(oImg.set({
            top: 23/295*b.canvas.getHeight(),
            left: 643.1/784*b.canvas.getWidth(),
            width: (760.9-643.1)*b.ratio,
            height: (81-23)*b.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/sauga.png', function(oImg) {
        p.canvas.add(oImg.set({
            top: 2927.5/3300*p.canvas.getHeight(),
            left: 172.2/2550*p.canvas.getWidth(),
            width: 491*p.ratio,
            height: 239*p.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/rg.png', function(oImg) {
        b.canvas.add(oImg.set({
            top: 220.7/295*b.canvas.getHeight(),
            left: 581.8/784*b.canvas.getWidth(),
            width: (765-585)*b.ratio,
            height: (271.4-220.7)*b.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/rg.png', function(oImg) {
        p.canvas.add(oImg.set({
            top: 2992.3/3300*p.canvas.getHeight(),
            left: 854.2/2550*p.canvas.getWidth(),
            width: 675*p.ratio,
            height: 176*p.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/date.png', function(oImg) {
        p.canvas.add(oImg.set({
            top: 2150.3/3300*p.canvas.getHeight(),
            left: 280.8/2550*p.canvas.getWidth(),
            width: 432*p.ratio,
            height: 432*p.ratio,
            selection: false
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    fabric.Image.fromURL('assets/Youth Event/bubble.png', function(bImg) {
        b.canvas.add(bImg.set({
            top: -32/295*b.canvas.getHeight(),
            left: 26/784*b.canvas.getWidth(),
            width: 484.5*b.ratio,
            height: 440*b.ratio,
        })).render();
    }, {
        crossOrigin: 'Anonymous'
    });
    p.canvas.backgroundColor = "#d15726";
    b.canvas.backgroundColor = "#d15726";
    p.canvas.renderAll();
    b.canvas.renderAll();
    $(window).resize(function resizeCanvases(){
        p.resizeCanvas();
        b.resizeCanvas();
    })
    $(".p-save").on('click', function(){
        p.saveImg();
    })
    $(".b-save").on('click', function(){
        b.saveImg();
    })
});