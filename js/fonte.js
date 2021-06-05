$(document).ready(function(){
    var fonte = 12;
    $('#aumenta').click(function(){
        if(fonte<18){
            fonte=fonte+1;
            $('body').css({'font-size': fonte+'pt'});
        }
    });
    $('#diminui').click(function(){
        if(fonte>12){
            fonte=fonte-1;
            $('body').css({'font-size': fonte+'pt'});
        }
    });
});