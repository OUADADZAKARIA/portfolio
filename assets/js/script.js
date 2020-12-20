$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $('#headerNav').addClass("header-style3-afterScroll").removeClass("bg-transparent border-none shadow-none");
        }else{
            $('#headerNav').addClass("bg-transparent shadow-none border-none").removeClass("header-style3-afterScroll");
        }
    });
});

$(document).ready(function(){
    if($(window).width() <= 991){
        $('#headerNav').addClass("shadow-none");
    }
});







 // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //

  $(document).ready(function(){
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
});
