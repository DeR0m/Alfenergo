$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top-50
        }, 500);
    });
});

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.bottom-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
}
    
    ibg();

