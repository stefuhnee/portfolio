var projects = [], categories = [];

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

portfolioProjects.sort(function(a,b) {
  return (new Date(b.postDate)) - (new Date(a.postDate));
});

portfolioProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHTML('#project-template'));
  if (categories.indexOf(a.category)) {
    $('.filters ul').append(a.toHTML('#category-filter-template'));
    categories.push(a.category);
  };
});
