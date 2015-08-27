angular.module('starter.controllers', [])


.controller('customersCtrl', function($scope, $ionicSideMenuDelegate,$timeout) {
  
  //$scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
     //console.log('Opened!')

    // $ionicSideMenuDelegate.toggleRight();
  //})
  //$timeout(function (){
   
  //});
})


.controller('examCtrl', function($scope) {
  $scope.win = {
    result: false
  }
})
.controller('examCustomerCtrl', function($scope) {
  $scope.showResult = function() {
    $scope.win.result = true;
  }
})

.controller('mainCtrl', function($scope, Main) {
  /*
  console.log(Storage.getObject('info'));
  Storage.getObject('info', {
    name: 'Thoughts',
    text: 'Today was a good day'
  });*/

  $scope.data = {
    person: {},
    popup: '',
    toolbox:'index'
  }
  $scope.data.person.role="customer";
  if($scope.data.person.id) {
    console.log('aa');
  }else {
    console.log('bb');
  }

  Main.login('customer','password1');
  /*
  var login = Storage.getObject('login');
  if(login) {
    Rest.login(login.username, login.password, function(){
      var profile = Rest.getProfile();
      Storage.setObject('profile', );
      Storage.setObject('login', login)
    });
  }
  */


  $scope.showProduct = function() {
    $scope.data.popup = 'privateFund';
  }
  $scope.closeProduct = function() {
    $scope.data.popup = '';
  }
  
})







.controller('mainIndexCtrl', function($scope, Rest, $ionicModal) {
  //Rest.getProducts({type:'privatefunds'});
  //Rest.login('customer','password');

})
.controller('mainCategoriesCtrl', function($scope,$ionicPopover,$stateParams) {
  $scope.categoryNames = ["", "公募基金", "私募基金", "信托产品", "组合产品", "服务类产品"]
  $scope.categoryID = $stateParams.categoryID;
  $scope.selectedCategory = $scope.categoryID;
         
})

.controller('mainProductsCtrl', function($scope,$ionicPopover,$stateParams, Membership,$http,$state, $ionicModal) {
  $scope.categoryNames = ["", "公募基金", "私募基金", "信托产品", "组合产品", "服务类产品"]
  $scope.categoryID = $stateParams.categoryID;

  /*
  $ionicModal.fromTemplateUrl('templates/modal/login.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: true
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.booking = function(product) {

      if(Membership.state() == 'guest') {
        
        $state.go('common.login');
      } else {
        console.log("aaa");
        var book = {
          method: 'POST',
          url: 'http://115.29.194.11:8080/ChiefFinancierService/api/customer/v1/customers/402881e54f1a699d014f1a69bba60002/bookings?productId='+product,
          
          headers: {
            'Content-Type': 'application/json'
          }
        };
        $http(book).then(function(res){
            console.log(res.data.successful);
            if(res.data.successful) {
              $state.go('main.index');
            }
            //console.log(res.data.result);
            
            //console.log(products);
            //return products;
        });
      }
    }*/


  //Membership.getProducts();
  $scope.products=[];
  console.log("tyson");
  Membership.getProducts();
  

  setTimeout(function(){
     $scope.products = Membership.getMyProducts();       
  }, 300);


  
})


.controller('mainMenuCtrl', function($scope, $state, MultipleViewsManager){
  $scope.selectItem = function( item) {
      MultipleViewsManager.updateView('main-my-toolbox', {msg: item});
  }
})


.controller('mainToolBoxCtrl', function($scope, $state, $ionicModal, $timeout, MultipleViewsManager, Rest) {


  MultipleViewsManager.updated(function(params) {
    $scope.data.toolbox = params.msg;
  });



  $scope.doRefresh = function() {
    console.log('tyson');
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.loadMore = function() {
    console.log('load more');
    //$scope.$broadcast('scroll.infiniteScrollComplete');
  }



  $scope.data.win='';
  
  //$scope.data.win='toolbox';

  $scope.verifyCode = "";
  $scope.user = {
    verifyWords : '发送验证码',
    username: '',
    password: '',
    verifyCode: '',
    notify: '',
    statusVeiryCode: false
  };


  if (Rest.getProfile() == 'visitor') {
    console.log('visitor');
  } else {
  }

  $scope.backLogin = function() {
    $scope.data.win = 'login'
  }
  $scope.login = function(user) {
    $scope.win.stub = true;
    Rest.login(user.username, user.password, function(){
      //todo
      console.log("login callback");
      $scope.data.win='toolbox';
    });
  }


  $scope.register_1 = function() {
    $scope.user.verifyWords = "发送验证码";
    $scope.win.stub = true;
    $scope.win.login = false;
    $scope.win.register_1 = true;
  }

  $scope.askVerifyCode = function(phone) {
    $scope.user.statusVeiryCode = true;
    $scope.win.disable = true;
    console.log("ask");
    /*
    promise = $timeout(function(cnt){
      $timeout(
      $scope.user.verifyWords = cnt;
      cnt = cnt-1;
    }, 1000);*/

    
    //timeout
    var loopVerifyWords = function(cnt) 
    {
      promise = $timeout(function () { loopVerifyWords(cnt); }, 1000); 
      console.log("timeout "+cnt);
      $scope.user.verifyWords = cnt;
      if (cnt == 0) {
        $scope.user.statusVeiryCode = false;
        $scope.win.disable = false;
        $scope.user.verifyWords = "发送验证码";
        $timeout.cancel(promise);
      }     
      cnt = cnt-1;
      $scope.$on('$ionicView.leave',function(){
        $scope.win.disable = false;
        $timeout.cancel(promise);
      }); 
    }; 

    loopVerifyWords(30);

  
    Rest.askVerifyCode(phone, function(){
      $scope.verifyCode = Rest.getVerifyCode();
      console.log("tyson"+$scope.verifyCode);
    });
  }

  $scope.register_2 = function(code) {
    if ($scope.verifyCode == code && code != "") {
      $scope.win.register_1 = false;
      $scope.win.register_2 = true;

    } else {
      console.log("not fit");
      $scope.win.notify = true;
    }
  }
  $scope.register_3 = function(name,password,code){
    //todo Rest Register
    Rest.register(name,password,code,function(){
      $scope.win.register_1 = false;
      $scope.win.register_2 = false;
      $scope.win.stub = false;
      $scope.win.main = true;
    });
   
  }

  
  console.log('toolbox');
  //var myElement= document.getElementById('main1');
  //angular.element(myElement).triggerHandler('click');
     //angular.element(myElement).triggerHandler('hide');
  //console.log("11");
  //Membership.login();
  
  /*$scope.$on('$ionicView.enter', function() {
  

     var myElement= document.getElementById('main1');
     angular.element(myElement).triggerHandler('click');
     angular.element(myElement).triggerHandler('hide');
     console.log("11");

  });*/
})

.controller('commonLoginCtrl', function($scope, $state, Membership) {
    $scope.signIn = function(user){
      Membership.login(user);

      setTimeout(function(){
        if(Membership.state() != 'guest') {
          console.log("aaaa");
          $state.go('main.toolbox');
        }
      }, 1000);
    }
})

.controller('productDetailCtrl', function($scope,$ionicHistory,$stateParams) {
  var productID = $stateParams.productID;
  $scope.detail = {
    id: productID,
    name: '盈泰磐海对接新泽量化',
    detail: '作为国内首只港股分级基金，添富恒生进一步拓宽了内地与香港市场的通道，有助于内地投资者更加高效地进行海外资产配置。据了解，添富恒生所跟踪的恒生指数香港市场的核心指数，反映优质的香港龙头上市公司表现。恒生指数成分股中有近60%的权重来自汇丰控股、长江实业、新鸿基地产、香港交易所等本地的龙头企业，还有35%左右的权重来自腾讯控股等优质中国企业。其中，成分股中包含的博彩、交易所等商业模式恰是内地稀缺的新经济的代表。1月26日消息，据香港文汇报报道，内地与香港两地基金互认随时推出，投资港股的基金公司有望抢占先机。据路透报导，汇添富基金管理公司昨开始正式销售内地首只QDII版的港股杠杆基金-汇添富恒生指数(25275.641, 192.89, 0.77%)分级证券基金，为内地股民提供多一种恒生指数的投资方式。',
    start: '100.00 万元',
    cost: '1%',
    last: '30天'
    };

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('ordersAllCtrl', function($scope) {
  $scope.orders = [{
    id: 'TY2015AIUS5029',
    customer: 'Ben Sparrow',
    product: '盈泰磐海对接新泽量化',
    status: '通过审核，等待支付',
    face: 'img/profile1.png'
  }, {
    id: 'TY2015AXXEX029',
    customer: 'Perry Governor',
    product: '盈泰磐海对接新泽量化',
    status: '已完成支付，等待上传资料',
    face: 'img/profile2.png'
  }, {
    id: 'TY2015BCVEX056',
    customer: 'Perry Governor',
    product: '盈泰磐海对接新泽量化',
    status: '交易完成',
    face: 'img/profile3.png'
  }];
})



.controller('customersServeCtrl', function($scope) {
  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/profile1.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/profile2.png'
  }];
})

.controller('customersAppointmentCtrl', function($scope, $ionicSideMenuDelegate) {

  $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
     console.log('Opened!')

     $ionicSideMenuDelegate.toggleLeft(true);
  })


  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/profile3.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/profile4.png'
  }];
})


.controller('customersAllCtrl', function($scope) {
  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/profile1.png',
    status: '预约中'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/profile2.png',
    status: ''
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/profile3.png',
    status: ''
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/profile4.png',
    status: '预约中'
  }];
})

//预约列表
.controller('bookingsUnAssignedCtrl', function($scope, $ionicHistory, $state, $http, $ionicSideMenuDelegate) {

  $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
     console.log('Opened!')

     $ionicSideMenuDelegate.toggleLeft(true);

     var bookings = {
      method: 'GET',
      url: 'http://115.29.194.11:8080/ChiefFinancierService/api/customer/v1/customers/402881e54f1a699d014f1a69bba60002/bookings',       
      headers: {
        'Content-Type': 'application/json'
      }
    };
    $http(bookings).then(function(res){
      //console.log(res);
      if(res.data.successful) {
        $scope.bookings = res.data.result;
        console.log($scope.bookings);
      }
    });
  });
})
.controller('bookingsAssignedCtrl', function($scope, $ionicHistory, $state, $http) {
  $scope.$on('$ionicView.enter', function() {
    var bookings = {
      method: 'GET',
      url: 'http://115.29.194.11:8080/ChiefFinancierService/api/customer/v1/customers/402881e54f1a699d014f1a69bba60002/bookings?state=assigned',      
      headers: {
        'Content-Type': 'application/json'
      }
    };
    $http(bookings).then(function(res){
      //console.log(res);
      if(res.data.successful) {
        $scope.bookings = res.data.result;
        console.log($scope.bookings);
      }
    });
  });
})

.controller('bookingDetailCtrl', function($scope, $ionicHistory,$state) {
  $scope.booking = {
    product: {
      name: '盈泰磐海对接新泽量化',
      start: '100.00 万元',
      cost: '1%',
      last: '30天'
    },
    customer: {
      name: 'Ben Sparrow',
      mobile: '18766662222',
      address: "上海市长宁区23号",
      level: "非常有理财观念的大师"
    }
  };

  $scope.myGoBack = function() {
    $state.go('customers.appointment');
  };

});




