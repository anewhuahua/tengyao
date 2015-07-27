// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
/*
  $stateProvider
  .state('product', {
    url: '/product',
    views: {
      'product-detail': {
         templateUrl: 'templates/product.html',
         controller: 'productDetailCtrl'
      }
    }
  });*/

  $stateProvider
  
  // setup an abstract state for the tabs directive
  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html'
  })

  .state('main.index', {
    url: '/index',
    views: {
        'main-index': {
        templateUrl: 'templates/main/index.html',
        controller: 'mainIndexCtrl'
      }
    }
  })

  .state('main.products', {
    url: '/products/categories/:categoryID',
    views: {
      'main-products': {
         templateUrl: 'templates/main/products.html',
         controller: 'mainProductsCtrl'
      }
    }
  })


  .state('main.toolbox', {
    url: '/toolbox',
    views: {
      'main-toolbox': {
         templateUrl: 'templates/main/toolbox.html',
         controller: 'mainToolBoxCtrl'
      }
    }
  })
  

  // product
  .state('product', {
    url: '/product',
    abstract: true,
    templateUrl: 'templates/product.html'
  })
  

  .state('product.detail', {
    url: '/detail/:productID',
    views: {
      'product-detail': {
         templateUrl: 'templates/product/detail.html',
         controller: 'productDetailCtrl'
      }
    }
  })

  // customers
  .state('customers', {
    url: '/customers',
    abstract: true,
    templateUrl: 'templates/customers.html',
  })


  .state('customers.appointment', {
    url: '/appointment',
    views: {
      'customers-all': {
        templateUrl: 'templates/customers/appointment.html',
        controller: 'customersAppointmentCtrl'
      }
    }
  })
  .state('customers.serve', {
    url: '/serve',
    views: {
      'customers-all': {
        templateUrl: 'templates/customers/serve.html',
        controller: 'customersServeCtrl'
      }
    }
  })
  .state('customers.all', {
    url: '/all',
    views: {
      'customers-all': {
        templateUrl: 'templates/customers/all.html',
        controller: 'customersAllCtrl'
      }
    }
  })

  // money
  .state('money', {
    url: '/money',
    abstract: true,
    templateUrl: 'templates/money.html'
  })
  .state('money.history', {
    url: '/history',
    views: {
      'money-history': {
        templateUrl: 'templates/money/history.html'
      }
    }
  })
  .state('money.paid', {
    url: '/paid',
    views: {
      'money-history': {
        templateUrl: 'templates/money/paid.html'
      }
    }
  })
  .state('money.unpaid', {
    url: '/unpaid',
    views: {
      'money-history': {
        templateUrl: 'templates/money/unpaid.html'
      }
    }
  })


  // order
  .state('orders', {
    url: '/orders',
    abstract: true,
    templateUrl: 'templates/orders.html'
  })
  .state('orders.all', {
    url: '/all',
    views: {
      'orders-all': {
        templateUrl: 'templates/orders/all.html',
        controller: 'ordersAllCtrl'
      }
    }
  })
  .state('orders.waiting', {
    url: '/waiting',
    views: {
      'orders-all': {
        templateUrl: 'templates/orders/waiting.html',
        controller: 'ordersAllCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/main/index');
  //$urlRouterProvider.otherwise('/detail');

  /*
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });*/


});

