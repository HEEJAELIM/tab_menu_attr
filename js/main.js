$(function () {
  var tabAnchor = $(".tabs-nav li a"),
    tabPanel = $(".tabs-panel");

  // 링크를 클릭하면 할 일
  tabAnchor.click(function (e) {
    e.preventDefault();
    tabAnchor.removeClass("active");
    $(this).addClass("active");

    tabPanel.hide();
    var $target = $(this).attr("href");
    console.log($target);
    $($target).show();
  });
});
