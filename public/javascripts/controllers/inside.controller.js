
angular.module('Aphrodite')
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
}]);
