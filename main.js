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
            height: $(this.element).height(),
            width: $(this.element).width()
    });
    this.resizeCanvas = function(){
        this.canvas.setWidth($(this.div).width());
        this.canvas.setHeight($(this.div).width()*(this.hRatio/this.wRatio));
    };
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
    var p = new fCanvas('poster-div', 'p', 8.5, 11);
    var b = new fCanvas('banner-div', 'b', 784, 295);
    
    var rect = new fabric.Rect({
        top: 0,
        left: 0,
        width: 40,
        height: 30,
        fill: '#f55',
        opacity: 0.7
    });
    
    p.canvas.add(rect);
    b.canvas.add(rect);
    
    fabric.Image.fromURL('sauga.png', function(oImg) {
        p.canvas.add(oImg.set({
            width: 200,
            height: 97
        }));
        b.canvas.add(oImg.set({
            width: 200,
            height: 97
        }));
    }, {
        crossOrigin: 'Anonymous'
    });
    
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