angular.module('rest.service', [])

.factory('Rest', function($http) {
  //var products = [];
  var client = "visitor";
  var verifyCode = "tyson";
  var domain="http://115.29.194.11:8080/";

  return {
    //stub
    getProfile: function() {
      return client;
    },

    login: function(name, password, successHandler, errorHandler,finallyHandler) {
      var id = "";
      var req = {
        method: 'POST',
        url: domain+'ChiefFinancierService/login?username='+
              name + '&password=' + password,
        headers: {
         'Content-Type': 'application/json'
        }
      };
      $http(req).then(function(res){  
          successHandler(res);
      }, function(res){
          errorHandler(res);
      }).finally(function(){
        
        finallyHandler();
      });
    },

    getProducts: function(param, successHandler, errorHandler, finallyHandler) {
      type = param.type
      state  = param.state || 'active';
      offset = param.offset || '0';
      limit  = param.limit || '25'

      var req = {
          method: 'GET',
          url: domain+'ChiefFinancierService/api/common/v1/' +
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
        //products = data.result;
        successHandler(data);

      }).error(function(res, status){
        //console.error('error', status, res);
        errorHandler(res, status);
      }).finally(function(){
        finallyHandler();
      });
    },



    addBooking: function(cid, pid, successHandler, errorHandler, finallyHandler) {
      var req = {
          method: 'POST',
          url: domain+'ChiefFinancierService/api/customer/v1/customers/' + cid + '/bookings?productId=' + pid,
          headers: {
            'Content-Type': 'application/json'
          }
        };
        console.log(cid);
      $http(req).success(function(data){
        successHandler(data);
      }).error(function(res, status){
        errorHandler(res, status);
      }).finally(function(){
        finallyHandler();
      });
    },


    getVerifyCode: function() {
      return verifyCode;
    },
    askVerifyCode: function(phone, cb) {
      var req = {
        method: 'POST',
        url: 'http://115.29.194.11:8080/ChiefFinancierService/api/common/v1/verificationcodes?phone='
               + phone,
        headers: {
         'Content-Type': 'application/json',
         'Pragma': 'verifyCode:true'
        }
      };
      $http(req).then(function(res){  
          //console.log(res);
          //console.log(res.headers('Pragma'));
          pragma = res.headers('Pragma');
          
          verifyCode = pragma;
          console.log(verifyCode);
          cb();
          console.log("tyson ask verify");
          return;
      });
      
    },
    register: function(name, password, code, cb) {
      console.log("register:" + name);
      console.log("register:" + password);
      var req = {
        method: 'POST',
        url: 'http://115.29.194.11:8080/ChiefFinancierService/api/customer/v1/customers?verifyCode='
               + code,
        headers: {
         'Content-Type': 'application/json',
        },

        data: {
          "class": "com.fpsb.chief.financier.persistence.entity.staff.Customer",
          "username": name,
          "password": password,
          "phone": "1234566789"
        }
      };

      $http(req).then(function(res){  
          cb();
          console.log("tyson register");
          return;
      });
    },


    getProduct: function(type, pid) {
    }

    

  }






});
