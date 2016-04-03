angular.module('ngPassLockModalCtrl', ['ui.bootstrap', 'ngCookies'])

.controller('modalController', ['$scope', '$uibModal', '$cookies', function ($scope, $uibModal, $cookies) {

    var solution = '26548';

    $scope.$on('showModal', function(event) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/passLockModal.html',
            backdrop: 'static',
            keyboard: false
        });

        modalInstance.rendered.then(function () {
            $scope.lock = new PatternLock('#patternContainer', {
                enableSetPattern : true,
                onDraw:function(pattern){
                    $scope.lock.checkForPattern(solution,function(){
                        // Callback for the correct pattern
                        var expiry = new Date();
                        expiry.setHours(expiry.getHours() + 1);
                        $cookies.put('passlock-verified', 'true', {expires: expiry});
                        $scope.$broadcast('loadPosts');
                        modalInstance.close();
                    },function(){
                        // Callback for wrong patterns
                    });
                }
            });
            $scope.lock.setPattern(solution);

        }, function(){
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