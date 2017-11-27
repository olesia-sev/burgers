//menu
$(function() {
  $(".burger-icon").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("menu-on");

    $("#burger-menu").toggleClass("burger-menu__visible");
  });
});

//team-acco
$(function() {
  $(".team-list__name").on("click", function(e) {
    e.preventDefault();

    var $targetListItem = $(this).parent(),
      $listItems = $(".team-list__item");

    $listItems.not($targetListItem).removeClass("team-list__item--active");

    $targetListItem.toggleClass("team-list__item--active");
  });
});

//review-popup
$(function() {
  $("[data-fancybox]").fancybox({
    transitionEffect: "fade",
    transitionDuration: 2000
  });

  $(".close-fancy").on("click", e => {
    e.preventDefault();

    $.fancybox.close();
  });
});

//result-popup
$(function() {
  $("[data-fancybox]").fancybox({
    transitionEffect: "fade",
    transitionDuration: 2000
  });

  $(".close-fancy").on("click", e => {
    e.preventDefault();

    $.fancybox.close();
  });

  $(".result__close-button").on("click", e => {
    e.preventDefault();

    $.fancybox.close();
  });
});

//ingredients popup
$(function() {
  $(".small-burger").on("click", function(e) {
    e.preventDefault();

    $(".ingredients").toggleClass("visible");
  });
});

//slider
$(function() {
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      center: true,
      items: 1,
      margin: 80,
      touchDrug: true,
      mouseDrug: true,
      dots: false,
      smartSpeed: 1000
    });
  });

  $(".button__arrow--right").on("click", () => {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  $(".button__arrow--left").on("click", () => {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});

//onePage-scroll
$(function() {
  var $onePageScroll = $(".maincontent");

  $onePageScroll.onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: true,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
  });

  $(".header__menu-link, .header__button, .burgers__order-button").on(
    "click",
    function(event) {
      event.preventDefault();

      $onePageScroll.moveTo($(this).data("index"));
    }
  );

  $(".burger-menu__link").on("click", function(event) {
    event.preventDefault();

    $onePageScroll.moveTo($(this).data("index"));

    $(".burger-icon").removeClass("menu-on");

    $("#burger-menu").removeClass("burger-menu__visible");
  });
});

//map
$(function() {
  ymaps.ready(init);

  var placemarks = [
      {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургерная" style="width: 35px;">',
          "Самые вкусные бургеры у нас! <br>Заходите по адресу: ул. Литераторов, д.19",
          "</div>"
        ]
      },
      {
        latitude: 59.945396,
        longitude: 30.387796,
        hintContent: '<div class="map__hint">Суворовский проспект, д 60</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургерная" style="width: 35px;">',
          "Самые вкусные бургеры у нас! <br>Заходите по адресу: Суворовский проспект, д 60",
          "</div>"
        ]
      },
      {
        latitude: 59.9,
        longitude: 30.32,
        hintContent: '<div class="map__hint">Московский проспект, д 98</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургерная" style="width: 35px;">',
          "Самые вкусные бургеры у нас! <br>Заходите по адресу: Московский проспект, д 98",
          "</div>"
        ]
      },
      {
        latitude: 59.916424,
        longitude: 30.475472,
        hintContent: '<div class="map__hint">Проспект Большевиков, д 6</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургерная" style="width: 35px;">',
          "Самые вкусные бургеры у нас! <br>Заходите по адресу: Проспект Большевиков, д 6",
          "</div>"
        ]
      }
    ],
    geoObjects = [];

  function init() {
    var map = new ymaps.Map("map", {
      center: [59.94, 30.35],
      zoom: 11,
      controls: ["zoomControl"],
      behaviors: ["drag"]
    });

    for (var i = 0; i < placemarks.length; i++) {
      geoObjects[i] = new ymaps.Placemark(
        [placemarks[i].latitude, placemarks[i].longitude],
        {
          hintContent: placemarks[i].hintContent,
          balloonContent: placemarks[i].balloonContent.join("")
        },
        {
          iconLayout: "default#image",
          iconImageHref: "icons/map-marker.svg",
          iconImageSize: [46, 57]
        }
      );

      map.geoObjects.add(geoObjects[i]);
    }
  }
});

//horizontal acco,menu
$(function() {
  //export default () => {
  const calculateWidth = () => {
    const wWidth = $(window).width();
    const titles = $(".menu__item-elem");
    const titleWidth = titles.width();
    const reqWidth = wWidth - titleWidth * titles.length;

    return reqWidth > 550 ? 550 : reqWidth;
  };

  const openItem = item => {
    const container = $(".menu__list");
    const items = $(".menu__item", container);
    const accoText = $(".menu__desc", container);
    const activeItem = items.filter(".active");
    const activeContent = activeItem.find(".menu-acco__content");
    const content = item.find(".menu-acco__content");
    const reqWidth = calculateWidth();

    items.removeClass("active");
    item.addClass("active");

    accoText.hide();
    activeContent.animate({ width: "0px" });

    content.animate(
      {
        width: reqWidth + "px"
      },
      () => {
        accoText.fadeIn();
      }
    );
  };

  const closeItem = item => {
    item.removeClass("active");

    item
      .closest(".menu__list")
      .find(".menu__desc")
      .stop(true, true)
      .fadeOut(() => {
        item.find(".menu-acco__content").animate({ width: "0px" });
      });
  };

  $(".menu__item-elem").on("click", e => {
    e.preventDefault();

    const $this = $(e.target);
    const item = $this.closest(".menu__item");

    item.hasClass("active") ? closeItem(item) : openItem(item);
  });

  // клик вне аккордеона
  $(document).on("click", e => {
    const $this = $(e.target);

    if (!$this.closest(".menu__list").length) {
      closeItem($(".menu__item"));
    }
  });
  // }
});

//form
$(document).ready(function() {
  var $form = $("#form"),
    $phone = $("#form_phone"),
    $address = $("#form_address"),
    $error = $("#error"),
    $success = $("#success"),
    $errorText = $("#popup_error_text"),
    $successText = $("#popup_success_text"),
    data = "";

  $form.on("submit", function(event) {
    event.preventDefault();

    if ($phone.val() === "" || $phone.val() === undefined) {
      $errorText.html("Заполните телефон");
      $.fancybox.open($error);

      return false;
    }

    if ($address.val() === "" || $address.val() === undefined) {
      $errorText.html("Заполните адрес");
      $.fancybox.open($error);

      return false;
    }

    data = $form.serialize();

    $.ajax({
      method: "POST",
      url: "/server.php",
      data: data,
      success: function(stringData, textStatus, jqXHR) {
        var data = JSON.parse(stringData);

        if (data.status === "ERROR") {
          $errorText.html(data.text);
          $.fancybox.open($error);
        } else if (data.status === "OK") {
          $successText.html("Сообщение отправлено");
          $.fancybox.open($success);

          $form.trigger("reset");
        } else {
          $errorText.html("Что-то пошло не так");
          $.fancybox.open($error);
        }

        console.log({
          data: data,
          textStatus: textStatus,
          jqXHR: jqXHR
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $errorText.html("Что-то пошло не так");
        $.fancybox.open($error);

        console.log({
          jqXHR: jqXHR,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });

    return true;
  });
});
