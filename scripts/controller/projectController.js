(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').empty();
    $('#projects').show().siblings().hide();
    $('footer').show();
    Project.fetchAll(projectView.initIndexPage);
    $('.filters ul').empty();
    $('.filters').show();
    $('#main-header h1').show();
    $('nav.social').show();
    $('#main-header').height('auto');
  };

  projectController.loadByCategory = function(ctx) {
    projectView.displayCategories(ctx.params.categoryName.replace('+', '-'));
  };

  module.projectController = projectController;
})(window);
