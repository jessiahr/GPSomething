angular.module('app.profile', ['ionic', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state( 'profile', {
    url: '/profile',
    controller: 'ProfileController',
    controllerAs: 'profileCtrl',
    templateUrl: 'profile/profile.html'
  })

})

.controller('ProfileController', function(  $scope, $state){
  $scope.welcome = "Welcome21231!";
  $scope.backToOther = function(){
    $state.go("locations");

  }

});
