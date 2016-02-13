angular.module('appRouter', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider

	.when('/', {
		templateUrl: 'partials/evolv.html',
	})

	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeController',
		controllerAs: 'home'
	})

	.when('/about', {
		templateUrl: 'partials/about.html',
		controller : 'aboutController',
		controllerAs: 'about'
	})

	.when('/blog', {
		templateUrl: 'partials/blog.html',
		controller: 'blogController',
		controllerAs: 'blog'
	})

	.when('/blog/:date', {
		templateUrl: 'partials/view_post.html',
		controller: 'postController'
	})

	.otherwise({
		templateUrl: "partials/404.html",
	});
}]);