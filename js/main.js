// Show more
function showMore(btn, item) {
  $(btn).click(function(e) {
    e.preventDefault();
  
    let inActiveItems = $(item).slice(-8);
    
    $(inActiveItems).slideToggle();
    $(this).text($(this).text() == 'Показать еще' ? 'Скрыть' : 'Показать еще');
  });
};

$('.result__btn').click(showMore('.result__btn', '.result__gallery-item'));
$('.result__btn').click(showMore('.merit__btn', '.merit__gallery-item'));


// Menu
$('.header__burger').click(function(event) {
  $('.header__burger').toggleClass('active');
  $('.header__burger').toggleClass('white');
  $('.menu').toggleClass('active');
});

$('.menu, .menu__nav-link').click(function(event) {
  $('.header__burger').toggleClass('active');
  $('.header__burger').toggleClass('white');
  $('.menu').toggleClass('active');
});

$(".menu__inner").on("click", function(event) {
  event.stopPropagation();
});

// Tabs
$('.review__btn').click(function(e) {

  e.preventDefault();

  if(!$(this).hasClass('active')) {
     $(this).addClass('active');
     $(this).siblings().removeClass('active');
     $('.review__gallery').filter('[id="' + $(this).data('trigger') + '"]').addClass('active');
     $('.review__gallery').filter('[id="' + $(this).data('trigger') + '"]').siblings().removeClass('active');
  }
});