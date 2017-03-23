Package.describe({
	name: 'djk:toastr',
	version: '2.1.3',
	summary: 'Load toastr.js into your Meteor project.',
	git: 'https://github.com/djkmiles/meteor-toastr.git',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.4')
	api.use('ui', 'client')
	api.use('less')
    api.addFiles(['toastr.js', 'toastr.less'], 'client')
});
