$(document).ready(function(){
    $('#bola1').animate({
        'left': '80px'
    }, 150, null, function(){
        $('#bola2').animate({
            'left': '300px'
        }, 300);
        $('bola1').animate({
            'left': '70px'
        }, 300);
    });
});