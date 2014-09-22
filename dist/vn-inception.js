(function (angular) {
	angular.element(document).ready(function () {
		window.name = 'NG_DEFER_BOOTSTRAP!';
		var appResources = [],
			appModuleNames = [];

		angular.injector(['ng']).invoke(function ($http) {
			$http.get('settings/themeInfo.json').then(function (response) {
				angular.forEach(response.data.apps, function (app) {
					appResources.push(app.scriptSrc);
					appResources.push(app.styleSrc);
					appModuleNames.push(app.appModuleName);
				});

				head.load(appResources, function () {
					angular.resumeBootstrap(appModuleNames);
				});

			});
		});
	});
})(angular);
