$(document).ready(function(){

    $('.rating-wrap p').click(function(){
        $(this).parent().children('p').removeClass('on');
        $(this).addClass('on').prevAll('p').addClass('on');
        return false;
    });

    $('.list-faq .list-wrap').click(function(){
        $(this).closest('li').children('.faq-cont').toggleClass('on');
        $(this).closest('li').siblings().children('.faq-cont').removeClass('on');
    });
});