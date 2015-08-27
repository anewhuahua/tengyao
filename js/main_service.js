angular.module('main.service',[])
.factory('Main', function(Rest, Storage) {
  var id = null;

  return {
    login: function(username,password) {
      if (!username && !password){    // if no one appear
        var login = Storage.getObject('login');
        if(login) {
          username = login.username;
          password = login.password; 
        }
      }
      console.log('username:'+username+';password:'+password); 
      if (username  && password) {  // if both two appear
        Rest.login(username, password, function(res){
          pragma = res.headers('Pragma');
          pragma = pragma.replace("Id:","");
          id = pragma;
          Storage.setObject('login', {'username': username, 'password': password});
          console.log('main.service login success:' + id);
        }, function(res){
          console.log('main.service login error:'+res.statusText);
        });
      }
    },

    logout: function(){
      id = null;
      Storage.setObject('login', {'username': null, 'password': null});
      
    } 

  }


});