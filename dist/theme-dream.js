(function ($, angular) {
	$.getJSON('settings/themeInfo.json', function (data) {
		window.name = 'NG_DEFER_BOOTSTRAP!';
		var appScripts = [];
		var appModuleNames = [];

		$.each(data.apps, function (index, app) {
			appScripts.push(app.scriptSrc);
			appModuleNames.push(app.appModuleName);
		});

		head.load(appScripts, function () {
			angular.resumeBootstrap(appModuleNames);
		});

	});
})(jQuery, angular);
