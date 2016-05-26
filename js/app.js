angular.module('ngZevIsertApp', ['appConfig', 'appRouter', 'ngHomeCtrl', 'ngBlogCtrl', 'ngPostCtrl', 'ngAboutCtrl', 'ngSanitize'])

.controller('mainController', ['$rootScope', 'evolvMode', function($rootScope, evolvMode){
	var vm = this;
	vm.evolvMode = evolvMode;
	if (evolvMode){
		$rootScope.title = "Zev Isert - Evolv";
	} else {
		$rootScope.title = "Zev Isert";
	}
}]);