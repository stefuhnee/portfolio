(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/stefuhnee/repos' +
        '?per_page=5' +
        '&sort=updated')
      .done(function(data){
        repos.all = data;
        callback(data);
      });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });

  };

  module.repos = repos;
})(window);
