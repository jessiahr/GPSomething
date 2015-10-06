angular.module('app.profile', ['ionic', 'app.models', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state( 'profile', {
    url: '/profile',
    controller: 'ProfileController',
    controllerAs: 'profileCtrl',
    templateUrl: 'profile/profile.html'
  })

})

.controller('ProfileController', function( Locations,  $scope, $state){


  $scope.backToOther = function(){
    // $state.go("locations");


  }
  $scope.locationsList = Locations.list;
  console.log(window.localStorage['locationList'] )
  $scope.locationData = {};

  $scope.resetData = function(){
    Locations.deleteAll();
    


  };
});
