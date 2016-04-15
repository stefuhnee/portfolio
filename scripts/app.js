var projects = [];

function Project (properties) {
  this.title = properties.title;
  this.postDate = properties.postDate;
  this.projectBody = properties.projectBody;
  this.category = properties.category;
  this.location = properties.location;
}

Project.prototype.lightBox = function() {
  $('.article-box a').on('click', function() {
    $('.article-box').hide();
  });
}

Project.prototype.toHTML = function() {
  var template = Handlebars.compile($('#project-template').html());

  this.daysAgo = parseInt((new Date() - new Date(this.postDate))/60/60/24/1000);
  this.publishStatus = this.postDate ? 'Posted ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

Project.prototype.filterCategoriesToHtml = function() {
  var template = Handlebars.compile($('#category-filter-template').html());
  return template(this);
};

portfolioProjects.sort(function(a,b) {
  return (new Date(b.postDate)) - (new Date(a.postDate));
});

portfolioProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHTML());
  $('#category-filter').append(a.filterCategoriesToHtml());
});
