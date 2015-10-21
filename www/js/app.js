// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ui.router',
  'ionic',
  'ngCordova',
  'app.locations',
  'app.profile',
  'app.login'])
  .config(function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/login')

  // $stateProvider.state('home', {
  //   url: '/',
  //   template: '<strong>yoooo</strong>'
  // });
})


.service("Login", ['$state', function($state) {
  self = this;
  self.isLoggedIn = false;
 

  self.code = '1234';

  // checks the password field of loginData
  // against the code var.
  // returns bool
  self.checkPassword = function(password){
    return (password === self.code);
  };
  self.tryLogin = function(password, loginPassed, loginFailed){
    // try a login
    if (self.checkPassword(password) === true) {
      self.isLoggedIn = true;
      loginPassed();

    } else {
        self.isLoggedIn = false;
      loginFailed();

    }
  };

  self.ensureLoggedIn = function(){
    // try a login
    if (!self.isLoggedIn) {
      $state.go('login');
    }
  };
  // // login failed
  // self.loginFailed = function(){
  //   alert("failed login");
  // };
  // // login passed
  // self.loginPassed = function(){
  //
  // };
}])
