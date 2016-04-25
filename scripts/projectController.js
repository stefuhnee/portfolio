(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').empty();
    Project.fetchAll(projectView.initIndexPage);
    $('main > section').hide();
    $('.filters').show();
    $('#main-header h1').show();
    $('#main-header').height('auto');
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
