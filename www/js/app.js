// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',
  'ngCordova',
  'app.locations',
  'app.profile'])
  .config(function( $stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/locations')

  // $stateProvider.state('home', {
  //   url: '/',
  //   template: '<strong>yoooo</strong>'
  // });
})
