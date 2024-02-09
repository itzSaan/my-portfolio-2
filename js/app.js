$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    // console.log(e.keyCode)
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


// Mobile Nav button working
$('.nav-menu-btn').click(()=> {  
    $('.nav-menu-btn').html($('.nav-menu-btn').html() == `<i class="ri-close-line"></i>` ? `<i class="ri-menu-line"></i>` : `<i class="ri-close-line"></i>` )
    $('.mobile-navbar-nav').toggleClass('show-nav')      
  })
  
  window.addEventListener('click', event => {
    if(!event.target.matches('.nav-menu-btn')) {
      if($('.mobile-navbar-nav').hasClass('show-nav'))
      $('.nav-menu-btn').html($('.nav-menu-btn').html() == `<i class="ri-close-line"></i>` ? `<i class="ri-menu-line"></i>` : `<i class="ri-close-line"></i>` )
      $('.mobile-navbar-nav').removeClass('show-nav')
    }
  })

  
  
