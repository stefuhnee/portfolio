(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();
    $('.filters').hide();
    $('#main-header h1').hide();
    $('nav.social').hide();
  };
  module.aboutController = aboutController;
})(window);
