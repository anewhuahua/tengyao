angular.module('common.services', [])

.factory('Rest', function($http) {
  //var products = [];
  //var client = "guest";

  return {

    getPrivateFunds: function(params) {
      state  = params['state'] || 'active';
      offset = params['offset'] || '0';
      limit  = params['limit'] || '25'

      var req = {
          method: 'GET',
          url: 'http://115.29.194.11:8080/ChiefFinancierService/api/common/v1/privatefunds?' +
                'state=' + state + '&' +
                'offset=' + offset + '&' +
                'limit='limit;
          headers: {
            'Content-Type': 'application/json'
          }
        };

      $http(req).success(function(res){
        console.log(res);
        products = res.data.result;
        return products;
      }).error(function(res, status)) {
        console.error('error', status, res);
      } .finally(function(){
      });
    }

  }


});
