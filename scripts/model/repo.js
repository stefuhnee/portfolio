(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/stefuhnee/repos' +
        '?per_page=5' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization':'token ' + githubToken},
      success: function(data){
        repos.all = data;
        callback(data);
      }
    });

  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });

  };

  module.repos = repos;
})(window);
