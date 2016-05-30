/*$(window).resize(function(){
     console.log("hello");
    resizeCanvas(canvas);
    resizeCanvas(canvas2);
});*/
$(function(){
  $.datepicker.setDefaults(
    $.extend( $.datepicker.regional[ '' ] )
  );
  $( '#datepicker' ).datepicker();
});

$(document).ready(function(){
    console.log("Document Ready!");
    var element = document.getElementById('p');
    var width = $(element).width();
    var height = $(element).height();
    var p = new fabric.Canvas(element, {
        height: height,
        width: width,
    });
    var element = document.getElementById('b');
    var width = $(element).width();
    var height = $(element).height();
    var b = new fabric.Canvas(element, {
        height: height,
        width: width,
    });
    var rect = new fabric.Rect({
        top: 0,
        left: 0,
        width: 40,
        height:30,
        fill: '#f55',
        opacity: 0.7
    });
    p.add(rect);
    b.add(rect);
    
    $(window).resize(function resizeCanvases(){
        console.log('Window Resized');
        var element = document.getElementById('poster-div');
        var width = $(element).width();
        p.setWidth(width);
        p.setHeight(width * (11/8.5));
        var element = document.getElementById('banner-div');
        var width = $(element).width();
        b.setWidth(width);
        b.setHeight(width * (295/784));
    });
    
    //var p = createFabric($(document.getElementById('p')));
    //var b = createFabric($(document.getElementById('b'));
    
    /*var canvas = document.getElementById('p');
    var width = canvas.width;
    var height = canvas.height;
    var p = new fabric.Canvas('p', {
        height: height,
        width: width
    });*/
});

/*function createFabric(element){
    var width = $(element).width();
    var height = $(element).height();
    var canvas = new fabric.Canvas(element, {
        height: height,
        width: width,
        backgroundColor: 'rgb(100,100,200)'
    });
    return canvas;
};*/

/*function resizeCanvas(c){
    var canvas = document.getElementById('p');
    var width = canvas.width;
    var height = canvas.height;
    canvas.setHeight(height);
    canvas.setWidth(width);
}*/

