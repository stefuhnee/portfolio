var projects = [], categories = [];

function Project (properties) {
  for (key in properties) {
    this[key] = properties[key];
  };
};

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
  if (categories.indexOf(a.category)) {
    $('#category-filter').append(a.toHTML('#category-filter-template'));
    categories.push(a.category);
  };
});
