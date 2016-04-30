page('/', projectController.index);
page('/about', aboutController.index);
page('/category/:categoryName', projectController.loadByCategory);
page();
