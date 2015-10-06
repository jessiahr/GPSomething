angular.module('app.models', ['ionic', 'ui.router'])
.factory("Locations", function($http) {
   return {
     list: JSON.parse(window.localStorage['locationList'] || '[]'),
     addLocation: function(locationHash){
       this.list.push(locationHash);

       window.localStorage['locationList'] = JSON.stringify(this.list);
     },
     deleteAll: function(){
       window.localStorage['locationList'] = "[]"
       this.list.length = 0;
     }
    };
  // // var ListService = {};
  // // var list = [];
  // // ListService.getItem = function(index) { return list[index]; }
  // // ListService.addItem = function(item) { list.push(item); }
  // // ListService.removeItem = function(item) { list.splice(list.indexOf(item), 1) }
  // // ListService.size = function() { return list.length; }
  // // Define the DribbblePlayer function
  // var LocationObject = function(location) {
  //   // Define the initialize function
  //   this.initialize = function() {
  //     // Fetch the player from Dribbble
  //     console.log('init location obj');
  //     var self = this;
  //
  //     // When our $http promise resolves
  //     // Use angular.extend to extend 'this'
  //     // with the properties of the response
  //     // playerData.then(function(response) {
  //     //   angular.extend(self, response.data);
  //     // });
  //   };
  //
  //   // Call the initialize function for every new instance
  //   this.initialize();
  // };
  //
  // // Return a reference to the function
  // return (LocationObject);
})
