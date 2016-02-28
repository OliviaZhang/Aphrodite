angular.module('Aphrodite')

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Home!!';
}])

.controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Register!!';
}])

.controller('LoginCtrl', ['$scope', 'AuthService', '$state', function($scope, AuthService, $state) {
    $scope.test = 'Hello Login!!';
    $scope.user = {
        name: '',
        password: ''
    };

    $scope.login = function() {
        console.log(AuthService);
        AuthService.login($scope.user).then(function(msg) {
            $state.go('inside');
        }, function(errMsg) {
            alert("Failed!");
        });
    }
}])

.controller('InsideCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Member!!';
}])
