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
                vm.date = data.date;
                vm.title = data.title;
                vm.body = data.body;

                if (typeof vm.date === "string") {
                    vm.date = Number(data.date);
                }

                vm.posted = new Date(vm.date).toDateString();

                if (data.img.length === 0) {
                    vm.img = "";
                    vm.hasImage = false;
                }
                else {
                    vm.img = "/img/photos/" + key + "/" + data.img;
                    vm.hasImage = true;
                }
            }
            else {
                $location.url('/404');
            }
    });
}]);