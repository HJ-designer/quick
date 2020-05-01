$(document).ready(function(){

    $('.header .btn-menu').click(function(){
        menuOpen();
        dimMaker();
        bodyHidden();
    });

    $('.menu-wrap .menu-head .btn-close').click(function(){
        menuClose();
        dimRemove();
        bodyAuto();
    });


});

function menuOpen(){
    $('.menu-wrap').addClass('active');
}

function menuClose() {
    $('.menu-wrap').removeClass('active');
}

// dim 생성
function dimMaker() {
    $('body').append('<div class="dim"></div>');
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', 'auto')
}

function popOpen(id){
    var id;

    $("#" + id).addClass('on');
}

function popClose(id) {
    var id;

    $("#" + id).removeClass('on');
}
