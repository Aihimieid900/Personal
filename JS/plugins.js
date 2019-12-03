
//this is loading animation before page appear
$(window).on("load",function () {
    'use strict';
    $("body").css("overflow-y", "auto");
    $(".loading").fadeOut(2000);
});
$(function () {
    $(".nav-link").click(function(e){
        e.preventDefault();
        $(".nav-item").addClass("active").siblings().removeClass("active");
        $("html, body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top - 120
        },2000, 'swing')
    });
    /* this is to change style navbar on scroll*/
    $(window).on("scroll",function(){
        if (scrollY >= 20) {
            $(".navbar").css({
                "box-shadow": "0 1px 50px #777777",
                "transition": "all 1.45s"
            });
        } else {
            $(".navbar").css({
                "box-shadow": "none",
            });
        }
        // this is  function to make number from 0 to current number in div  
        function counter(el) {
            //elemTop to get value top of counter 
            var elemTop = el.getBoundingClientRect().top;
            //elemBottom to get value bottom of counter 
            var elemBottom = el.getBoundingClientRect().bottom;
            //isVisible to get value equal true 
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            return isVisible;
        }
        if (counter(document.getElementById('number-counter'))) {
            $('.number-counter').each(function () {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter.toFixed(2)));
                    }
                });
            });

            // Unbind scroll event
            $(window).off('scroll');
        }
    });
    // this is special to add class text muted to lead in offered
    $(".offered .offered-row .lead").addClass("text-muted");
    // this is special to add class text dark to offered-service in offered
    $(".offered .offered-row .offered-service").addClass("text-dark");
    // this is toadd class text capitlaize for h4 in offered-service
    $(".offered .offered-row .offered-service .h4").addClass("text-capitalize");
    // this is to aff class text-uppercase , text-dark for li in gallery 
    $("#gallery .list-group-item").addClass("text-uppercase , text-dark");
    // to center text in div has class inage
    $(".image").addClass("text-center");

    //this is function to (zoom in ) in image on click 
    $(".preview-image").click(function () {
        $(".preview-images").fadeIn(700, 'swing');
        $(".preview-images .preview-images-change").attr('src', $(this).parents(".container-image-preview").children("img").attr('src'));
    });
    // this is to close (zoom in) image when click on mark x or click in empty area
    $(".exit , .preview-images").click(function(){
        $(".preview-images").fadeOut(400, 'swing');
    });
    // this is to stop previous function when click image 
    $(".preview-images .preview-images-change").click(function(e){
            e.stopPropagation();
        });
    // this is to close (zoom in) image when person press on esc key in keyboard
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $(".preview-images").fadeOut(400, 'swing')
        }
    });
    // this is function to switch type photo to show it 
    $("#gallery .list-group li").click(function () {
        // to make item clicked to change color 
        $(this).addClass("active").siblings().removeClass("active");
        // let data = to grt value data attribute in html to equal it with image class to show type of click 
        let data = $(this).data("image");
        $(".image").fadeOut(400, 'swing');
        $(".image").filter(data).fadeIn(
            1000, 'swing'
        );
    });
    $('.carousel').carousel();
    $(".list-group-flush li").addClass("lead");
});