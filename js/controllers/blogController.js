angular.module('ngBlogCtrl', ['ui.bootstrap'])

	.controller('blogController', [ '$http', function($http){
		var vm = this;
		vm.posts = null;
		vm.showModal = false;

		String.prototype.trunc = function(n) {
			var tooLong = this.length > n,
				s_ = tooLong ? this.substr(0,n-1) : this;
			s_ = tooLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
			return tooLong ? s_ + '...' : s_;
		};

		$http.get('json/posts.json', {cache: true}).success(function (data, status, headers, config){
			vm.posts = data.posts;
		});
	}]);

