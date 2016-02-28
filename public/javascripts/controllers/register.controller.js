
angular.module('Aphrodite')
.controller('RegisterCtrl', ['$scope', 'AuthService', '$state', function($scope, AuthService, $state) {
    $scope.test = 'Hello Register!!';
    $scope.user = {
        name: '',
        password: ''
    };

    $scope.signup = function() {
        AuthService.register($scope.user).then(function(msg) {
            $state.go('login');
            alert('Register success!');
        }, function(errMsg) {
            alert('Register failed!');
        });
    };
}])
