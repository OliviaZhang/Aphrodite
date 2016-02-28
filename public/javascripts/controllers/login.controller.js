
angular.module('Aphrodite')
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
