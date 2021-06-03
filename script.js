$(function () {
    setInterval(() => {
        $(window).scrollTop() > 60 ? $(".navbar").addClass("sticky") : $(".navbar").removeClass("sticky");
    }, 10);
    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


