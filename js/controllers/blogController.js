var blogController = angular.module('ngBlogCtrl', ['ui.bootstrap', 'ngPassLockModalCtrl', 'ngCookies']);

blogController.controller('blogController', ['$http', '$uibModal', '$cookies', '$scope', function ($http, $uibModal, $cookies, $scope) {
    "use strict";
    var vm = this;
    vm.posts = null;
    vm.showModal = false;

    String.prototype.trunc = function (n) {
        var tooLong = this.length > n, s_ = tooLong ? this.substr(0, n - 1) : this;
        s_ = tooLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
        return tooLong ? s_ + '...' : s_;
    };

    vm.loadPosts = function () {
        var config = {
            params: {"token": $cookies.get('passlock-token')},
            cache : true
        };

        $http.get('http://zevisert.herokuapp.com/serve/posts', config)
            .success(function (data, status, headers, config) {
                vm.posts = data;
        });
    }

    angular.element(document).ready(function () {
        var localCookies = $cookies.getAll();

        if (Object.keys(localCookies).length === 0) {
            $scope.$emit('showModal');
        }
        else if ($cookies.get("passlock-verified") != 'true') {
            $scope.$emit('showModal');
        }
        else if ($cookies.get("passlock-verified") === "true") {
            vm.loadPosts();
        }
    });

    $scope.$on('loadPosts', function (event) {
        vm.loadPosts();
    });
}]);
