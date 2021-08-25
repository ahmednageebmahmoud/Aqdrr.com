$(function(){

    /** Custom Swipper */
    $(".aqdr-partner-next").on("click" , function(){
        $(".aqdr-partners").stop();
        $(".aqdr-partners").animate({
            scrollLeft:$('.aqdr-partners').scrollLeft() - $(".aqdr-partners").outerWidth(true , true)
        } , 1000);
    });
    
    $(".aqdr-partner-prev").on("click" , function(){
        $(".aqdr-partners").stop();
        $(".aqdr-partners").animate({
            scrollLeft:$('.aqdr-partners').scrollLeft() + $(".aqdr-partners").outerWidth(true , true)
        } , 1000);
    });


    $(".aqdr-freelancer-next").on("click" , function(){
        $(".aqdr-freelancers").stop();
        $(".aqdr-freelancers").animate({
            scrollLeft:$('.aqdr-freelancers').scrollLeft() - $(".aqdr-freelancers").outerWidth(true , true)
        } , 1000);
    });
    
    $(".aqdr-freelancer-prev").on("click" , function(){
        $(".aqdr-freelancers").stop();
        $(".aqdr-freelancers").animate({
            scrollLeft:$('.aqdr-freelancers').scrollLeft() + $(".aqdr-freelancers").outerWidth(true , true)
        } , 1000);
    });

    $(".aqdr-drop-down-menu").on("click" , function(){
        let arrow = $(this).find(".aqdr-drop-down-menu-title .fa");
        $(this).find('ul.menu').slideToggle(200 , function(){
            arrow.toggleClass('fa-angle-down fa-angle-up')
        });
    })


    $("#toggle-main-menu").on("click" , function(){
        $(".aqdr-menu-container").slideToggle(400);
    });

    $(window).on("resize" , function(){
        if($(window).width() >= 768){
            $(".aqdr-menu-container").show();
        }else{
            $(".aqdr-menu-container").hide();
        }
    });

    function slideShow(){
  
        //*** Conditional & Variables ***//
        
          //Define the current img
        var current = $('#stage-images-slider-1 .aqdr-stage-images  .aqdr-stage-image.active');
          //If index != 0/false then show next img
        var next = current.next().length ? 
            current.next() :
            // if index == false then show first img
            current.siblings().first();
        
         //*** Swap out the imgs and class ***//
         current.hide().removeClass('active');
         next.fadeIn("slow").addClass('active');

         var currentBullet = $('#stage-images-slider-1 .aqdr-stage-bullts span.active');
        
         var nextBullet = currentBullet.next().length ? 
         currentBullet.next() :
         // if index == false then show first img
         currentBullet.siblings().first();
     
         currentBullet.removeClass('active');
         nextBullet.addClass('active');

        //*** Repeat function every 3 seconds ***//
        setTimeout(slideShow, 3000);
        
      };

      setTimeout(slideShow, 3000)


      function slideShow2(){
  
        //*** Conditional & Variables ***//
        
          //Define the current img
        var current = $('#stage-images-slider-2 .aqdr-stage-images  .aqdr-stage-image.active');
          //If index != 0/false then show next img
        var next = current.next().length ? 
            current.next() :
            // if index == false then show first img
            current.siblings().first();
        
         //*** Swap out the imgs and class ***//
         current.hide().removeClass('active');
         next.fadeIn("slow").addClass('active');

         var currentBullet = $('#stage-images-slider-2 .aqdr-stage-bullts span.active');
        
         var nextBullet = currentBullet.next().length ? 
         currentBullet.next() :
         // if index == false then show first img
         currentBullet.siblings().first();
     
         currentBullet.removeClass('active');
         nextBullet.addClass('active');

        //*** Repeat function every 3 seconds ***//
        setTimeout(slideShow2, 3000);
        
      };

      setTimeout(slideShow2, 3000);

});