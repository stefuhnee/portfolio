(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('main > section').hide();
    $('.filters').hide();
    $('#main-header h1').hide();
    // $('#main-header').height('auto');
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
