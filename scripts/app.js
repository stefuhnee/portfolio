(function(module){

  var categories = [];

  function Project (projects) {
    for (key in projects) {
      this[key] = projects[key];
    };
  };

  Project.prototype.toHTML = function(template) {
    var template = Handlebars.compile($(template).html());

    this.daysAgo = parseInt((new Date() - new Date(this.postDate))/60/60/24/1000);
    this.publishStatus = this.postDate ? 'Posted ' + this.daysAgo + ' days ago' : '(draft)';
    return template(this);
  };

  Project.loadAll = function(data) {
    data.sort(function(a,b) {
      return (new Date(b.postDate)) - (new Date(a.postDate));
    });
    Project.all = data.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(page) {
    if (localStorage.projects) {
      $.ajax( {
        type: 'HEAD',
        url: 'data/projects.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Project.getAll();
          } else {
            Project.loadAll(JSON.parse(localStorage.projects));
            page();
          }
        }
      });
    } else {
      Project.getAll();
    }
  };

  Project.getAll = function() {
    $.getJSON('data/projects.json', function(data){
      Project.loadAll(data);
      localStorage.projects = JSON.stringify(Project.all);
      projectView.initIndexPage();
    });
  };

  module.Project = Project;
})(window);
