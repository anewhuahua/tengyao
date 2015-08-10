angular.module('starter.services', [])

.factory('Membership', function($http,$state) {

  var client = "guest";

  return {
    state: function() {
      return client;
    },


    login: function(user) {

      ok = false;
      var req = {
        method: 'POST',
        url: 'http://115.29.178.80:8080/ChiefFinancierService/login?username='+
              user.username + '&password=' + user.password,
        headers: {
         'Content-Type': 'application/json'
        }
      };
      $http(req).then(function(res){  
          console.log('login success!');
          client = "member";
          ok = true;
          return ok;
      });
     
      /*
      setTimeout(function(){
        //do what you need here
         var req = {
            method: 'POST',
            url: 'http://115.29.178.80:8080/ChiefFinancierService/api/customer/v1/customers/',
            
            data: {
                  'class': 'com.fpsb.chief.financier.persistence.entity.staff.Customer',
                  'username':'tyson1213dsfsgdsaf',
                  'password':'tyson122434dsfgsdfa'
            }
          };

          console.log("tyson1");
          $http(req).then(function(res){
            console.log("register success");
            console.log(res);
          });
      }, 1000);
      */
      
    }
  }

});
