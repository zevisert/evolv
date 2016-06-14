var postController = angular.module('ngPostCtrl', ['ui.bootstrap']);

postController.controller('postController', ['$http', '$routeParams', '$location', '$cookies', function ($http, $routeParams, $location, $cookies) {
    "use strict";
    var vm = this;
    vm.post = null;
    vm.showModal = false;

    var config = {
        params: { "token": $cookies.get('passlock-token') },
        cache: true
    };

    $http.get('http://zevisert.herokuapp.com/serve/post/' + $routeParams.date, config)
        .success(function (data, status, headers, config) {
            if (status === 200) {
                vm.date = data.post.date;
                vm.title = data.post.title;
                vm.body = data.post.body;

                if (typeof vm.date === "string") {
                    vm.date = Number(data.post.date);
                }

                vm.posted = new Date(vm.date).toDateString();

                if (data.post.img.length === 0) {
                    vm.img = "";
                    vm.hasImage = false;
                }
                else {
                    vm.img = "/img/photos/" + key + "/" + data.post.img;
                    vm.hasImage = true;
                }
            }
            else {
                $location.url('/404');
            }
    });
}]);