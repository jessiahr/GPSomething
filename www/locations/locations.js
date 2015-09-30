angular.module('app.locations', ['ionic', 'ui.router'])
.config(function(  $stateProvider, $urlRouterProvider) {


  $stateProvider.state('locations', {
    url: '/locations',
    controller: 'LocationsController',
    controllerAs: 'locationsCtrl',
    templateUrl: 'locations/locations.html'
  })

})

.controller('LocationsController', function( $cordovaGeolocation, $scope, $http, $state, $ionicSideMenuDelegate, $ionicGesture){
  $scope.welcome = "Welcome!";
  $scope.coords = {};

  $scope.locationsList = JSON.parse(window.localStorage['locationList'] || '[]');
  console.log(window.localStorage['locationList'] )
  $scope.locationData = {};

  $scope.resetData = function(){
      window.localStorage['locationList'] = "[]"
      $scope.locationsList = [];
      confirm()



  };
  $scope.loadLocation = function(){
    var posOptions = {
      timeout: 10000,
      enableHighAccuracy: false
    };

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.coords = position.coords;
      $scope.locationData.lat  = position.coords.latitude;
      $scope.locationData.long = position.coords.longitude;
      console.log($scope.locationData);
      $scope.locationsList.push(angular.copy($scope.locationData));
      window.localStorage['locationList'] = JSON.stringify( $scope.locationsList);

    }, function(err) {
      console.log(err);
      // error
    });
  }
});
