// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])
.controller('LocationController', function($scope, $cordovaGeolocation){
  $scope.welcome = "Welcome!";
  $scope.coords = {};
  $scope.lat = {};
  $scope.long = {};
  $scope.boobs = function(){
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
    }, function(err) {
      console.log(err);
      // error
    });
  }

})
