angular.module('ngPostCtrl', ['ui.bootstrap'])

    .controller('postController', [ '$http', '$routeParams', function($http, $routeParams) {
        var vm = this;
        vm.post = null;
        vm.showModal = false;
        vm.hasImage = false;


        $http.get('json/posts.json').success(function (data){
            var i = 0;
            for (var i = 0; i < data.posts.length; ++i)
            {
                if (data.posts[i].date = $routeParams.date)
                {
                    vm.title  = data.posts[i].title;
                    vm.body   = data.posts[i].body;
                    vm.date   = data.posts[i].date;
                    vm.posted = new Date(1439874590334).toDateString();
                    break;
                }
            }
        });

        $http.head('img/photos/' + vm.date + '/title.jpg',
            function() { vm.hasImage = true; },
            function() { vm.hasImage = false;}
        );
    }]);