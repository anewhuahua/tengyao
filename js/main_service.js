angular.module('main.service',[])
.factory('Main', function(Rest, Storage) {
  var id = null;
  var categories = [
    {id: 1, name: "公募基金",  key:'publicfunds', image:'teImg/lbanr1img1.png', page:0, products:[]},
    {id: 2, name: "私募基金",  key:'privatefunds',image:'teImg/lbanr1img2.png', page:0, products:[]},
    {id: 3, name: "信托产品",  key:'trusts',      image:'teImg/lbanr1img3.png', page:0, products:[]},
    {id: 4, name: "保险产品",  key:'insurances',  image:'teImg/lbanr1img4.png', page:0, products:[]}
  ];

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
      
    },

    getProducts: function(param, successHandler, errorHandler, finallyHandler){
      var key = "";
      var tmp = null;
      var step = 10;
      cid = param.cid;    // category id
      page = param.page || 1;
      if(cid) {
        for (idx in categories) {
          if(categories[idx].id == cid) {
            key = categories[idx].key;
            tmp = categories[idx];
            console.log(key);
            break;
          }
        }

        Rest.getProducts({type:key, 
                          state:param.state, 
                          offset:(page-1) * step, 
                          limit:step},
                          function(data){
                            if(page == tmp.page+1) {    //底部分页刷新
                              if(data.result.length==0) {
                                successHandler(null);
                                return;
                              }
                              tmp.products  = tmp.products.concat(data.result);
                              tmp.page = page;
                              console.log('main.service getProducts success for page:'+page);
                              Storage.setObject(key, tmp);
                              successHandler(tmp);
                            } 
                            else if(page == 1){         //顶部下拉刷新
                              tmp.products = data.result;
                              tmp.page = 1;
                              console.log('main.service getProducts success for page:'+page);
                              Storage.setObject(key, tmp);
                              successHandler(tmp);
                            } else {
                                // todo !important: 就是那种length 不等于step的时候如何存储
                            }
                          }, 
                          function(res, status){
                            console.error('main.service getProducts error', 
                                           status, res);
                            errorHandler(status);
                          }, 
                          finallyHandler);
      } else {
        console.error('main.service getProducts error: no cid '+cid);
      }
    },
    getCategories: function(){
      return categories;
    },
    getCategory: function(cid) {
      for (idx in categories) {
        if(categories[idx].id == cid) {
          return categories[idx]
        }
      }
    }


  }


});