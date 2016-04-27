(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').empty();
    $('#projects').show().siblings().hide();
    Project.fetchAll(projectView.initIndexPage);
    $('.filters ul').empty();
    $('.filters').show();
    $('#main-header h1').show();
    $('nav.social').show();
    $('#main-header').height('auto');
  };

  module.projectController = projectController;
})(window);
