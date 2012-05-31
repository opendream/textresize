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
  var textSize = function(e, percent) {
    $("#main-content, #content-bottom").css("font-size", percent + '%');
    e.preventDefault();
  }
  $("#textSize100").click(function(e) { textSize(e, '100'); });
  $("#textSize110").click(function(e) { textSize(e, '110'); });
  $("#textSize120").click(function(e) { textSize(e, '120'); });
  $("#textSize130").click(function(e) { textSize(e, '130'); });
});
