$(function (){

    //Adjust Header Height
    $(".main-header").height($(window).height());

    //Navbar

    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        if (scroll >= 50){
            $(".change").css("background", "rgba(20, 2, 0, 0.8)");
        }else{
            $(".change").css("background", "transparent");
        }
    });

    //Smooth Scroll
    $(".nav-link[href*='#']").click(function (){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 50
        }, 1000)
    });

    // Counter
	$('.count h5').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
				duration: 10000,
				easing: 'swing',
				step: function() {
					$(this).text(Math.ceil(this.Counter));
				}
			});
	});
});