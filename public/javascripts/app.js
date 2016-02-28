angular.module('Aphrodite', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){


      $stateProvider
          .state('home',{
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: '/views/home.ejs'
          })
          .state('register',{
                url: '/register',
                templateUrl: '/views/register.ejs',
                controller: 'RegisterCtrl'
          })
          .state('login',{
                url: '/login',
                templateUrl: '/views/login.ejs',
                controller: 'LoginCtrl'
          })
          .state('inside',{
                url: '/inside',
                templateUrl: '/views/inside.ejs',
                controller: 'InsideCtrl'
          });

    $urlRouterProvider.otherwise('home');


}])

.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    if (!AuthService.isAuthenticated() && !window.localStorage.getItem('yourTokenKey')) {
      console.log(next.name);

      if (next.name !== 'login' && next.name !== 'register') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
});
