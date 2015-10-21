angular.module('app.locations', ['ionic', 'app.models', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state('locations', {
    url: '/locations',
      cache: false,
    controller: 'LocationsController',
    controllerAs: 'locationsCtrl',
    templateUrl: 'locations/locations.html'
  })

})

.controller('LocationsController', function(Locations ,$cordovaGeolocation, $scope, $http, $state, $ionicSideMenuDelegate, Login){
  Login.ensureLoggedIn();
  $scope.locationData = {};
  $scope.loadLocation = function(){
    var posOptions = {
      timeout: 10000,
      enableHighAccuracy: false
    };
    console.log($scope);

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      console.log(position.coords);
      $scope.locationData.latitude  = position.coords.latitude;
      $scope.locationData.longitude = position.coords.longitude;
      Locations.addLocation(  $scope.locationData);
      console.log(  $scope.locationData);
      // $scope.locationsList.push(angular.copy($scope.locationData));
      // window.localStorage['locationList'] = JSON.stringify( $scope.locationsList);

    }, function(err) {
      console.log(err);
      // error
    });
  }
});
