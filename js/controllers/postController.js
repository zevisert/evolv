angular.module('ngPostCtrl', ['ui.bootstrap'])
    .controller('postController', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
        "use strict";
        var vm = this;
        vm.post = null;
        vm.showModal = false;

        $http.get('json/posts.json').success(function (data) {
            console.log(data);
            var key = $routeParams.date;
            if (data.posts.hasOwnProperty(key)) {
                vm.title = data.posts[key].title;
                vm.body = data.posts[key].body;
                vm.date = data.posts[key].date;
                vm.posted = new Date(vm.date).toDateString();
                if (data.posts[key].img.length === 0) {
                    vm.img = "";
                    vm.hasImage = false;
                }
                else {
                    vm.img = "/img/photos/" + key + "/" +data.posts[key].img;
                    vm.hasImage = true;
                }
            } else {
                $location.url('/404');
            }
        });
    }]);