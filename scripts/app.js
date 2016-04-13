var projects = [];

function Project (properties) {
  this.title = properties.title;
  this.postDate = properties.postDate;
  this.projectBody = properties.projectBody;
}

Project.prototype.toHTML = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h1').text(this.title);
  $newProject.find('.project-body').html(this.projectBody);
  $newProject.find('time[postDate]').attr('title', this.postDate);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.postDate))/60/60/24/1000) + ' days ago');

  $newProject.removeClass('template');
  return $newProject;
};

portfolioProjects.sort(function(a,b) {
  return (new Date(b.postDate)) - (new Date(a.postDate));
});

portfolioProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHTML());
});
