angular.module('rest.services', [])

.factory('Rest', function($http) {
  //var products = [];
  var client = "visitor";

  return {
    getProfile: function() {
      return client;
    },

    login: function(name, password, cb) {
      var req = {
        method: 'POST',
        url: 'http://115.29.194.11:8080/ChiefFinancierService/login?username='+
              name + '&password=' + password,
        headers: {
         'Content-Type': 'application/json'
        }
      };
      /*
      $http(req).success(function(data){
        console.log(data);
        client = "data.id"
        return;
      }).error(function(res, status){
        console.error('error', status, res);
      }).finally(function(){
        console.log("login");
      });*/
      $http(req).then(function(res){  
          console.log(res);
          cb();
          console.log("tyson login");
          return;
      });
    },



    getProduct: function(type, pid) {
    },

    getProducts: function(param) {
      type = param.type
      state  = param.state || 'active';
      offset = param.offset || '0';
      limit  = param.limit || '25'

      var req = {
          method: 'GET',
          url: 'http://115.29.194.11:8080/ChiefFinancierService/api/common/v1/' +
                type + '?' +
                'state=' + state + '&' +
                'offset=' + offset + '&' +
                'limit=' + limit,
          headers: {
            'Content-Type': 'application/json'
          }
        };

      $http(req).success(function(data){
        //console.log(data);
        products = data.result;
        return products;
      }).error(function(res, status){
        console.error('error', status, res);
      }).finally(function(){
        console.log("getPrivateFunds");
      });
    }

  }






});
