$(".span").click(function () {
  $(".bar").fadeToggle(100);
});
$(`.about .skills .skills-items .progress .progress-in`).each(function () {
  $(this).animate(
    {
      width: $(this).attr(`data-width`),
    },
    5000
  );
});
