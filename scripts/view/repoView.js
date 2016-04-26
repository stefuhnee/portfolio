(function(module) {

  var repoView = {};

  var ui = function() {
    var $repo = $('.repo');
    $repo.find('ul').empty();
    $repo.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();
    $('.repo ul').append(
      repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
