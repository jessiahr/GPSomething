angular.module('app.locations', ['ionic', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state('locations', {
    url: '/locations',
    controller: 'LocationsController',
    controllerAs: 'locationsCtrl',
    templateUrl: 'locations/locations.html'
  })

})

.controller('LocationsController', function( $cordovaGeolocation, $scope, $http, $state, $ionicSideMenuDelegate){
  $scope.welcome = "Welcome!";
  $scope.coords = {};
  $scope.lat = {};
  $scope.long = {};
  $scope.locationsList =[];


  $scope.loadLocation = function(){
    var posOptions = {
      timeout: 10000,
      enableHighAccuracy: false
    };

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.coords = position.coords;
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;
      $scope.locationsList.push(position.coords);

    }, function(err) {
      console.log(err);
      // error
    });
  }
});
