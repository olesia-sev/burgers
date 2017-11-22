//burger menu
  //burger-icon, cross
$(function() {
$('.burger-icon').on('click', function(e) {
  $(this).toggleClass('menu-on');
})
})
  //menu
$(function() {
  $('.burger-icon').on('click', function(e) {
    e.preventDefault();
    $('#burger-menu').toggleClass('burger-menu__visible')
  })

  $('#burger-menu').on('keydown', function(e) {
    if (e.keyCode == 27) {
      $('#burger-menu').removeClass('burger-menu__visible');
    }
  });
})

//team-acco
$(function() {
  $('.team-list__name').on('click', function(e) {
    e.preventDefault()

    const $this = $(e.currentTarget);
    const container = $this.closest('.team-list');
    const item = $this.closest('.team-list__item');
    const items = ('.team-list__item', container);
    const content = $('.team__about', item);
    const otherContent = $('.team__about', container);
    const textBlock = $('.team-list__text', item);
    const reqHeight = textBlock.outerHeight();

    if (!item.hasClass('team-list__item--active')) {
      items.removeClass('team-list__item--active')      
      item.addClass('team-list__item--active')
      
          otherContent.css({
            'height': 0
          })
      
          content.css({
            'height': reqHeight
          })      
    } else {
      item.removeClass('team-list__item--active')
      content.css({
        'height': 0
      })
    }
  })
  })

//review-popup
$(function() {

  $("[data-fancybox]").fancybox({
    transitionEffect : "fade",
    transitionDuration : 2000,
  });
  
  $('.close-fancy').on('click', e => {
    e.preventDefault()
    
    $.fancybox.close();
  })
})

//result-popup
$(function() {
  
    $("[data-fancybox]").fancybox({
      transitionEffect : "fade",
      transitionDuration : 2000,
    });
    
    $('.close-fancy').on('click', e => {
      e.preventDefault()
      
      $.fancybox.close();
    })

    $('.result__close-button').on('click', e => {
      e.preventDefault()
      
      $.fancybox.close();
    })
})

$(function() {

  $('.small-burger').on('click', function(e) {
    e.preventDefault()

    $('.ingredients').toggleClass('visible')
      
    //const ingredients = ('.ingredients');



  })
})
