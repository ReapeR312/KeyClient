$(".slider-syncing").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-syncing-nav",
});
$(".slider-syncing-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".slider-syncing",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  arrows: false,
});
var currentValue = parseInt($("#value").text());
$("#minus").on("click", () => {
  if (currentValue > 1) {
    currentValue = currentValue - 1;
    $("#value").text(currentValue);
  }
  return;
});
$("#plus").on("click", () => {
  if (currentValue < 99) {
    currentValue = currentValue + 1;
    $("#value").text(currentValue);
  }
});
$(".params__buy-fast").on("click", () => {
  $("body,html").addClass("modal-open");
  $(".modal").css("display", "flex");
});

$(".modal__close").on("click", () => {
  $("body,html").removeClass("modal-open");
  $(".modal").css("display", "none");
});
$(".nav__m-menu-btn").on("click", () => {
  $(".m-menu").css("display", "flex");
});

$(".m-menu__close").on("click", () => {
  $(".m-menu").css("display", "none");
});
