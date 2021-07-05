// home section slider

$(window).on("load", function(){

    $(".preloader").fadeOut(600);

    // nav toggler start
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })
    // nav toggler end


    // home section slide show start
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000)
    }

    slideShow();
    // home section slide show end

    // music start
    $(".fa-music").click(function(){
        if($(this).hasClass("pause")){
            $("#myAudio")[0].play();
        }
        else{
            $("#myAudio")[0].pause();
        }
        $(this).toggleClass("pause");
    })
    // music end
})

// home section slider end

$(document).ready(function(){

    // scroll it start
    $.scrollIt({
        scrollTime: 600,
        topOffset: -50 
    });
    // scroll it end

    // fixed header on scroll start
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".header").addClass("fixed")
        }
        else{
            $(".header").removeClass("fixed")
        }
    });
    // fixed header on scroll end

    // people filter tab start
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        
        if(!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"))
        }
    })
    function peopleFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category = '"+target+"']").fadeIn();
    }
    // people filter tab end

    // gallery popup start
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    
    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })

    $(".gp-controls .next").click(function(){
        if(itemIndex === totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex  = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
        $(".gp-counter").text((itemIndex+1) + "/" + totalGalleryItems);
    }
    // close gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })
    // gallery popup end
})
