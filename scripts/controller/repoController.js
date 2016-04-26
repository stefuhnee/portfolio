(function(module) {
  var repoController = {};

  repoController.index = function() {
    $('.repo').show().siblings().hide();
    $('.filters').hide();
    $('#main-header h1').hide();
    $('nav.social').hide();
    repos.requestRepos(repoView.index);
  };

  module.repoController = repoController;
})(window);
