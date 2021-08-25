/** New Design main.js */
$(function () {

    /** Custom Swipper */
    $(".aqdr-partner-next").on("click", function () {
        $(".aqdr-partners").stop();
        $(".aqdr-partners").animate({
            scrollLeft: $('.aqdr-partners').scrollLeft() - $(".aqdr-partners").outerWidth(true, true)
        }, 1000);
    });

    $(".aqdr-partner-prev").on("click", function () {
        $(".aqdr-partners").stop();
        $(".aqdr-partners").animate({
            scrollLeft: $('.aqdr-partners').scrollLeft() + $(".aqdr-partners").outerWidth(true, true)
        }, 1000);
    });


    $(".aqdr-freelancer-next").on("click", function () {
        $(".aqdr-freelancers").stop();
        $(".aqdr-freelancers").animate({
            scrollLeft: $('.aqdr-freelancers').scrollLeft() - $(".aqdr-freelancers").outerWidth(true, true)
        }, 1000);
    });

    $(".aqdr-freelancer-prev").on("click", function () {
        $(".aqdr-freelancers").stop();
        $(".aqdr-freelancers").animate({
            scrollLeft: $('.aqdr-freelancers').scrollLeft() + $(".aqdr-freelancers").outerWidth(true, true)
        }, 1000);
    });

    // $(".aqdr-drop-down-menu").on("click", function () {
    //     let arrow = $(this).find(".aqdr-drop-down-menu-title .fa");
    //     $(this).find('ul.menu').slideToggle(200, function () {
    //         arrow.toggleClass('fa-angle-down fa-angle-up')
    //     });
    // })


    $("#toggle-main-menu").on("click", function () {
        $(".aqdr-menu-container").slideToggle(400);
    });

    $(window).on("resize", function () {
        if ($(window).width() >= 768) {
            $(".aqdr-menu-container").show();
        } else {
            $(".aqdr-menu-container").hide();
        }
    });


    function slideShow() {

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


    function slideShow2() {

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



    alertify.defaults = {
        // dialogs defaults
        autoReset: true,
        basic: false,
        closable: true,
        closableByDimmer: false,
        invokeOnCloseOff: false,
        frameless: false,
        defaultFocusOff: false,
        maintainFocus: true, // <== global default not per instance, applies to all dialogs
        maximizable: true,
        modal: false,
        movable: true,
        moveBounded: true,
        overflow: true,
        padding: false,
        pinnable: false,
        pinned: true,
        preventBodyShift: false, // <== global default not per instance, applies to all dialogs
        resizable: true,
        startMaximized: false,
        // transition:'pulse',
        reverseButtons: true,
        transitionOff: false,
        tabbable: 'button:not(:disabled):not(.ajs-reset),[href]:not(:disabled):not(.ajs-reset),input:not(:disabled):not(.ajs-reset),select:not(:disabled):not(.ajs-reset),textarea:not(:disabled):not(.ajs-reset),[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)',  // <== global default not per instance, applies to all dialogs

        // // notifier defaults
        notifier: {
            // auto-dismiss wait time (in seconds)  
            delay: 5,
            // default position
            position: 'bottom-right',
            // adds a close button to notifier messages
            closeButton: false,
            // provides the ability to rename notifier classes
            classes: {
                base: 'alertify-notifier',
                prefix: 'ajs-',
                message: 'ajs-message',
                top: 'ajs-top',
                right: 'ajs-right',
                bottom: 'ajs-bottom',
                left: 'ajs-left',
                center: 'ajs-center',
                visible: 'ajs-visible',
                hidden: 'ajs-hidden',
                close: 'ajs-close'
            }
        },


        // language resources 
        glossary: {
            // dialogs default title
            title: 'AlertifyJS',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel',
        },

        // theme settings
        theme: {
            // class name attached to prompt dialog input textbox.
            // input:'ajs-input',
            // class name attached to ok button
            ok: 'ajs-button btn-info',
            // class name attached to cancel button 
            cancel: 'ajs-button ajs-cancel'
        },


        // global hooks
        hooks: {
            // invoked before initializing any dialog
            preinit: function (instance) { },
            // invoked after initializing any dialog
            postinit: function (instance) { },
        },
    };
});


function toggleClassNav(elemntId ) {
    //If Clicked On Menu
    let elm=$('#'+elemntId)
         let arrow = elm.find(".aqdr-drop-down-menu-title .fa");
         elm.find('ul.menu').slideToggle(200, function () {
            arrow.toggleClass('fa-angle-down fa-angle-up')
        });
    
}