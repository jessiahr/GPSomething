angular.module('app.login', ['ionic', 'app.models', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state( 'login', {
    url: '/login',
    controller: 'loginController',
    controllerAs: 'loginCtrl',
    templateUrl: 'login/login.html'
  })

})



  .controller('loginController', function($cordovaGeolocation, $scope, $http, $state, $ionicSideMenuDelegate, Login){
    $scope.loginData = {};
    // $scope.code = '1234';
    //
    // // checks the password field of loginData
    // // against the code var.
    // // returns bool
    // $scope.checkPassword = function(){
    //   return ($scope.loginData.password === $scope.code);
    // };
    $scope.tryLogin = function(){
      Login.tryLogin($scope.loginData.password, function(){
        $state.go('locations');
      }, function(){
        // alert('failed');
      })
    };
    // // login failed
    // $scope.loginFailed = function(){
    //   alert("failed login");
    // };
    // // login passed
    // $scope.loginPassed = function(){
    //
    // };
  });
