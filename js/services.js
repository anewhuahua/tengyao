angular.module('starter.services', [])

.factory('Membership', function() {

  var client = "guest";

  return {
    state: function() {
      return client;
    }
  };

});
