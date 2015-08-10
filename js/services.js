angular.module('starter.services', [])

.factory('Membership', function() {

  var client = "guest";

  return {
    state: function() {
      return client;
    },


    login: function(username, passwd) {
      var req = {
        method: 'POST',
        url: 'http://115.29.178.80:8443/',
        headers: {
         'Content-Type': 'application/json'
        },
        data: { username: 'looey',
        }
      }
      $http(req).then(function(res){
        console.log(res);
      });
    }
  };

});
