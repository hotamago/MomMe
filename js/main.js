function checkinViewPlay(object_this) {
  let hasThisClass = $(object_this).hasClass("aniSon");
  let inViewOk =
    $(object_this).inView("topOnly") || $(object_this).inView("bottomOnly");
  let SumStatus = inViewOk && !hasThisClass;
  if (SumStatus) $(object_this).addClass("aniSon");
}
function animationLoaded() {
  $(".son-ani-01").each(function () {
    checkinViewPlay(this);
  });
  $(".auto-image").each(function () {
    checkinViewPlay(this);
  });
  $(".text-box").each(function () {
    checkinViewPlay(this);
  });
  $(".text-box-2").each(function () {
    checkinViewPlay(this);
  });
  $(".btn").each(function () {
    checkinViewPlay(this);
  });
}
window.onload = animationLoaded;
$(window).scroll(function () {
  animationLoaded();
});
