(function(angular) {
    angular.element(document).ready(function () {
        window.name = 'NG_DEFER_BOOTSTRAP!';
        var appScripts = [];
        var appModuleNames = [];
        angular.injector(['ng']).invoke(function($http) {
            $http.get('settings/themeInfo.json').then(function (response) {
                angular.forEach(response.data.apps, function(app) {
                    appScripts.push(app.scriptSrc);
                    appModuleNames.push(app.appModuleName);

                    head.load(appScripts, function () {
                        angular.resumeBootstrap(appModuleNames);
                    });
                });
            });
        });
    });
})(angular);
