$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight()+450;
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var time = $(this).attr("time");
        var time2;
        time2 = 1000;
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(time2,1);}
        } 
      });
    }).scroll(); //invoke scroll-handler on page-load
  });