
angular.module('Aphrodite')

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Home!!';
}])
