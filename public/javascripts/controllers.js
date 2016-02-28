angular.module('Aphrodite')

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Home!!';
}])

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

.controller('InsideCtrl', ['$scope', 'AuthService', '$state', '$http', 'API_ENDPOINT', function($scope, AuthService, $state, $http, API_ENDPOINT) {
    $scope.test = 'Hello Member!!';
    $scope.destroySession = function() {
        AuthService.logout();
    };

    $scope.getInfo = function() {
        $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
            $scope.memberinfo = result.data.msg;
        });
    };

    $scope.logout = function() {
        AuthService.logout();
        $state.go('login');
    };
}])
