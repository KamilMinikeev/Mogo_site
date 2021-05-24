$(function() {
    
        /*Fixed Header*/
    let header = $("#header");
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    checkScroll(scrollPos,introH);
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        let scrollPos = $(window).scrollTop();
        
        checkScroll(scrollPos,introH);
    });
    function checkScroll(scrollPos,introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
    
    
    
    let nav = $("#nav");
    let navTog = $("#navToggle");
    
    
        /*Smoth Scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let blockId = $(this).data('scroll');
        let elementOffSet = $(blockId).offset().top;
        
        $("html,body").animate({
            scrollTop: elementOffSet - 60
        },700);
        
        nav.removeClass("active");
        navTog.removeClass("active");
    });
    
         /*ActiveClick*/
    let aboutClick = $("#aboutClick");
    let serviceClick = $("#serviceClick");
    let workClick = $("#workClick");
    let blogClick = $("#blogClick");
    let contactClick = $("#ContactClick");
    
    $(aboutClick).on("click", function(event) {
        $(this).addClass("active");
        serviceClick.removeClass("active");
        $(workClick).removeClass("active");
        $(blogClick).removeClass("active");
        $(contactClick).removeClass("active");
    })
    
    $(serviceClick).on("click", function(event) {
        $(this).addClass("active");
        $(aboutClick).removeClass("active");
        $(workClick).removeClass("active");
        $(blogClick).removeClass("active");
        $(contactClick).removeClass("active");
    })
    
    $(workClick).on("click", function(event) {
        $(this).addClass("active");
        $(serviceClick).removeClass("active");
        $(aboutClick).removeClass("active");
        $(blogClick).removeClass("active");
        $(contactClick).removeClass("active");
    })
    
    $(blogClick).on("click", function(event) {
        $(this).addClass("active");
        $(serviceClick).removeClass("active");
        $(workClick).removeClass("active");
        $(aboutClick).removeClass("active");
        $(contactClick).removeClass("active");
    })
    
    $(contactClick).on("click", function(event) {
        $(this).addClass("active");
        $(serviceClick).removeClass("active");
        $(workClick).removeClass("active");
        $(blogClick).removeClass("active");
        $(aboutClick).removeClass("active");
    })
    
          /*ActiveScroll*/
    let about = $("#about");
    let service = $("#service");
    let work = $("#work");
    let blog = $("#blog");
    let contact = $("#contact");
    
    $(window).on("scroll resize", function() {
        let scrollPos = $(window).scrollTop();
        
        let aboutOffSet = $(about).offset().top;
        let serviceOffSet = $(service).offset().top;
        let workOffSet = $(work).offset().top;
        let blogOffSet = $(blog).offset().top;
        let contactOffSet = $(contact).offset().top;
        
        let aboutH = about.innerHeight();
        let serviceH = service.innerHeight();
        let workH = work.innerHeight();
        let blogH = blog.innerHeight();
        let contactH = contact.innerHeight();
        
        
        
        if (scrollPos > aboutOffSet - 450 && scrollPos < aboutOffSet - 100 + aboutH) {
            aboutClick.addClass("active");
        }
        else {
            aboutClick.removeClass("active");
        }
        
        if (scrollPos > serviceOffSet - 450 && scrollPos < serviceOffSet - 100 + serviceH) {
            serviceClick.addClass("active");
        }
        else {
            serviceClick.removeClass("active");
        }
        
        if (scrollPos > workOffSet - 200 && scrollPos < workOffSet - 100 + workH +300 ) {
            workClick.addClass("active");
        }
        else {
            workClick.removeClass("active");
        }
        
        if (scrollPos > blogOffSet - 450 && scrollPos < blogOffSet - 100 + blogH - 100) {
            blogClick.addClass("active");
        }
        else {
            blogClick.removeClass("active");
        }
        
        if (scrollPos > contactOffSet - 450 && scrollPos < contactOffSet - 100 + contactH) {
            contactClick.addClass("active");
        }
        else {
            contactClick.removeClass("active");
        }
        
    
    })
   
    
    
    
    
          /*Nav Toggle */
    navTog.on("click", function(event) {
        event.preventDefault();
        
        navTog.toggleClass("active");
        nav.toggleClass("active");
        
    })
    
    
         /*Collapse*/
    
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        
        let blockId = $(this).data('collapse');
        $(blockId).slideToggle();
        
        let blockIdCoup = $(this).data('coup');
        $(blockIdCoup).toggleClass("active");
        
        
    })
    
         /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
})









