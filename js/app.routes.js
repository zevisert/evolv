angular.module('appRouter', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider

	.when('/', {
		if (evolvMode){
			templateUrl: 'partials/evolv.html'
		}
		else {
			templateUrl: 'partials/home.html'
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