angular.module('appConfig', [])
	.constant('evolvMode', false);

angular.module('appRouter', ['ngRoute', 'appConfig'])

.config(['$routeProvider', '$locationProvider', 'evolvMode', function($routeProvider, $locationProvider, evolvMode) {
	$locationProvider.html5Mode(true);
	console.log('router ' + evolvMode);
	$routeProvider

	.when('/', {
		templateUrl: function () {
			if (evolvMode){
				return 'partials/evolv.html';
			}
			else{
				return 'partials/home.html';
			}
		}
	})

	.when('/home', {
		templateUrl: 'partials/home.html'
	})

	.when('/about', {
		templateUrl: 'partials/about.html'
	})

	.when('/blog', {
		templateUrl: 'partials/blog.html'
	})

	.when('/blog/:date', {
		templateUrl: 'partials/view_post.html'
	})

	.otherwise({
		templateUrl: "partials/404.html"
	});
}]);