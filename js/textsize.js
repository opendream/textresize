// fuction used to change text sizes in open document template
$.fn.equalHeights = function(px) {
  $(this).each(function() {
    var currentTallest = 0;
    $(this).children().each(function(i) {
      if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
    });
    // for ie6, set height since min-height isn't supported
    if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
    $(this).children().css({'min-height': currentTallest}); 
  });
  return this;
};

$(document).ready(function() {
  $('ul#text-size li a').click(function(e) {
    $('body')
      .removeClass('textsize-normal')
      .removeClass('textsize-bigger')
      .removeClass('textsize-biggest')
      .addClass(this.id);
    e.preventDefault();
  })
});
