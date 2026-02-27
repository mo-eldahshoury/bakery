$("nav ul li a").click(function(){
    let id = $(this).attr("href");
    // console.log(id);
    let spaceFromTop = $(id).offset().top;
    // console.log(spaceFromTop);
    $("body , html").animate({scrollTop : spaceFromTop} , 2000)
})

$(window).scroll(function(){
    let spaceScroll = $("#About").offset().top;
    let spaceNav = $("nav").outerHeight();    
    if ($(window).scrollTop() >= spaceScroll - spaceNav) {
        $("nav").css("backgroundColor", "#2c2619ec");
        $(".arrowEnd").fadeIn(1000).css("display" , "flex")
    } 
    else {
        $("nav").css("backgroundColor", "#2c2619ec")
        $(".arrowEnd").fadeOut(1000)
    }
})

$(".arrowEnd").click(function () {
    $("html , body").animate({scrollTop : 0} , 3000)
})