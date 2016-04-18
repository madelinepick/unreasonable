$(function(){
  var value = $('.hero').css('height');

  if ($(window).width() > 650) {
    $('.leftcol').css("min-height", value);
    $(".rightcol").css("min-height", value);
  }
  else {
    null;
  }


  $(".story").on('click', function(){
    $('html, body').animate({
        scrollTop: $("#story").offset().top
    }, 2000);
  })
  $(".why").on('click', function(){
    $('html, body').animate({
        scrollTop: $("#why").offset().top
    }, 2000);
  })
  $(".skills").on('click', function(){
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 2000);
  })
  $(".elephant").on('click', function(){
    $('html, body').animate({
        scrollTop: $("#elephant").offset().top
    }, 2000);
  })
  $(".contacts").on('click', function(){
    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
    }, 2000);
  })
});
