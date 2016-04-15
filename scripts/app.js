var projects = [];

function Project (properties) {
  this.title = properties.title;
  this.postDate = properties.postDate;
  this.projectBody = properties.projectBody;
  this.category = properties.category;
  this.location = properties.location;
}

// Project.prototype.lightBox = function() {
//   $('.article-box a').on('click', function() {
//     $('.article-box').hide();
//   });
// };

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
  $('#category-filter').append(a.toHTML('#category-filter-template'));
});
