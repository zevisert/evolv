var passLock = angular.module('ngPassLockModalCtrl', ['ui.bootstrap', 'ngCookies']);

passLock.controller('modalController', ['$scope', '$uibModal', '$cookies', '$http', function ($scope, $uibModal, $cookies, $http) {

    var solution = '26548';

    $scope.$on('showModal', function (event) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/passLockModal.html',
            backdrop: 'static',
            keyboard: false
        });

        modalInstance.rendered.then(function () {
            $scope.lock = new PatternLock('#patternContainer', {
                enableSetPattern: true,
                onDraw: function (pattern) {
                    $scope.lock.checkForPattern(solution, function () {
                        // Callback for the correct pattern
                        $http.post('http://zevisert.herokuapp.com/serve/authenticate', {}).success(function (data) {
                            if (data.success)
                            {
                                var expiry = new Date();
                                expiry.setHours(expiry.getHours() + 1);
                                $cookies.put('passlock-verified', 'true', { expires: expiry });
                                $cookies.put('passlock-token', data.token, { expires: expiry });
                                $scope.$broadcast('loadPosts');
                            }
                            modalInstance.close();
                        });
                    }, function () {
                        // Callback for wrong patterns
                    });
                }
            });
            $scope.lock.setPattern(solution);

        }, function () {
            // The modal failed to open
        });

        modalInstance.result.then(function () {
            // What to do when modal closes on ok
        }, function () {
            // What to do when modal closed on cancel
            console.log('Modal dismissed at: ' + new Date());
        });
    });
}]);