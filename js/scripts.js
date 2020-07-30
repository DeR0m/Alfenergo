$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.bottom-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});