angular.module('ngModalCtrl', ['ui.bootstrap'])

    .controller('modalController', function ($scope, $uibModal, $log) {

        $scope.body = "Begin";
        console.log($scope.body);

        $scope.open = function () {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './passLockModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    body: function () {
                        return $scope.body;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        angular.element(document).ready(function() {
            $scope.open();
        });
    })

    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, body) {

        $scope.body = body;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

    });