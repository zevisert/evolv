angular.module('ngZevIsertApp', ['appRouter', 'ngHomeCtrl', 'ngBlogCtrl', 'ngPostCtrl', 'ngAboutCtrl', 'ngSanitize'])

.factory('evolvModeService', [function () {
	return {
		mode: true
	};
}])

.controller('mainController', function($scope, evolvModeService){
	var vm = this;
	var evolvMode = evolvModeService.mode;
});