(function(module) {
  var repoController = {};

  repoController.index = function() {
    $('.repo').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.repoController = repoController;
})(window);
