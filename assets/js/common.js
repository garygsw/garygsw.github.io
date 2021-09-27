$(document).ready(function() {
    $('a.abstract').click(function() {
        if ( $(this).parent().parent().find(".bibtex.hidden").hasClass('open') ) {
            $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        }
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        if ( $(this).parent().parent().find(".abstract.hidden").hasClass('open') ){
            $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        }
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    $('button.btn').removeClass('waves-effect waves-light');
    init_headroom();
});


// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


function init_headroom() {
    var header = document.querySelector("header");
    var headerHeight = header.offsetHeight;
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(header);
   
    headroom.init();
    if(window.location.hash)
        headroom.unpin();
    $(header).addClass('headroom--transition');

    // offset scroll location for banner on hash change
    // (see: https://github.com/WickyNilliams/headroom.js/issues/38)
    window.addEventListener("hashchange", function(event) {
        window.scrollTo(0, window.pageYOffset - (headerHeight + 25));
    });
}

    // window.headroom_prevent_pin = false;

    // window.document.addEventListener("DOMContentLoaded", function (event) {

    //   // initialize headroom for banner
    //   var header = $('header').get(0);
    //   var headerHeight = header.offsetHeight;
    //   var headroom = new Headroom(header, {
    //     tolerance: 5,
    //     onPin : function() {
    //       if (window.headroom_prevent_pin) {
    //         window.headroom_prevent_pin = false;
    //         headroom.unpin();
    //       }
    //     }
    //   });
    //   headroom.init();
    //   if(window.location.hash)
    //     headroom.unpin();
    //   $(header).addClass('headroom--transition');

    //   // offset scroll location for banner on hash change
    //   // (see: https://github.com/WickyNilliams/headroom.js/issues/38)
    //   window.addEventListener("hashchange", function(event) {
    //     window.scrollTo(0, window.pageYOffset - (headerHeight + 25));
    //   });

    //   // responsive menu
    //   $('.distill-site-header').each(function(i, val) {
    //     var topnav = $(this);
    //     var toggle = topnav.find('.nav-toggle');
    //     toggle.on('click', function() {
    //       topnav.toggleClass('responsive');
    //     });
    //   });

    //   // nav dropdowns
    //   $('.nav-dropbtn').click(function(e) {
    //     $(this).next('.nav-dropdown-content').toggleClass('nav-dropdown-active');
    //     $(this).parent().siblings('.nav-dropdown')
    //        .children('.nav-dropdown-content').removeClass('nav-dropdown-active');
    //   });
    //   $("body").click(function(e){
    //     $('.nav-dropdown-content').removeClass('nav-dropdown-active');
    //   });
    //   $(".nav-dropdown").click(function(e){
    //     e.stopPropagation();
    //   });
    // });
  

