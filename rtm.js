
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

var setSize = (function(){

    return function(){
        if (window.matchMedia('(min-width: 992px)').matches) // large devices
        { //width >= 768 && width <= 959 ) {
            // code for tablet view
        } 
        else if (window.matchMedia('(min-width: 768px)').matches) // tablets
        { // width >= 480 && width <= 767 ) {
            // code for mobile landscape
        }
        else if (window.matchMedia('(max-width: 600px)').matches) // phones
        { //width <= 479 ) {
            $("div[name=MapeiTable] span[name^=Cell]").css({"padding":"5px 10px"})
        }
    };
})();

$(function() {
    var pause = 100;
   
    $(window).resize(function() {
        delay(function() {
            setSize;            
        }, pause );
    });

    $(window).resize();
});

