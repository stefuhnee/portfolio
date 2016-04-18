var categories = [];

function Project (projects) {
  for (key in projects) {
    this[key] = projects[key];
  };
  Project.all = [];
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
  data.forEach(function(ele) {
    Article.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  localStorage.eTag = JSON.stringify(0);
  if (localStorage.projects) {
    $.ajax( {
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag !== localStorage.eTag) {
          $.getJSON('data/projects.json', function(data) {
            Article.loadAll(data);
            localStorage.projects = JSON.stringify(Project.all);
            localStorage.eTag = JSON.stringify(eTag);
            projectView.initIndexPage();
          });
        } else {
          Article.loadAll(JSON.parse(localStorage.projects));
          projectView.initIndexPage();
        }
      }
    });
  } else {
    $.ajax( {
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        localStorage.eTag = JSON.stringify(eTag);
      }
    });
    $.getJSON('data/projects.json', function(data){
      Article.loadAll(data);
      localStorage.projects = JSON.stringify(Project.all);
      projectView.initIndexPage();
    });
  }
};
