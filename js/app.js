// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionicMultipleViews','starter.controllers', 'starter.services', 
                           'rest.service', 'storage.service', 'main.service'])


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

    ionic.Platform.fullScreen();
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
  
  // main
  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
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
      },

      'main-categories': {
         templateUrl: 'templates/main/categories.html',
         controller: 'mainCategoriesCtrl'
         
      }
    }
  })


  .state('main.my', {
    url: '/my',
    views: {
      'main-my-menu': {
         templateUrl: 'templates/main/my_menu.html',
         controller: 'mainMenuCtrl'
      },

      'main-my-toolbox': {
         templateUrl: 'templates/main/my_toolbox.html',
         controller: 'mainToolBoxCtrl'
      }
    }
  })

  .state('main.toolbox', {
    url: '/toolbox',
    views: {
      'main-consultant-menu': {
         templateUrl: 'templates/main/consultant_menu.html',
      },

      'main-consultant-toolbox': {
         templateUrl: 'templates/main/consultant_toolbox.html',
         controller: 'mainToolBoxCtrl'
      }
    }
  })

  // exam
  .state('exam', {
    url: '/exam',
    abstract: true,
    templateUrl: 'templates/exam.html',
    controller: 'examCtrl'
  })

  .state('exam.customer', {
    url: '/customer',
    views: {
      'exam-menu': {
         templateUrl: 'templates/exam/exam_menu.html'
      },
      'exam-customer': {
         templateUrl: 'templates/exam/exam_customer.html',
         controller: 'examCustomerCtrl'
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
    controller: 'customersCtrl'
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

  // booking
  .state('booking', {
    url: '/booking',
    abstract: true,
    templateUrl: 'templates/booking.html'
  })
  .state('booking.detail', {
    url: '/detail',
    views: {
      'booking-detail': {
        templateUrl: 'templates/booking/detail.html',
        controller: 'bookingDetailCtrl'
      }
    }
  })

  // 查看预约状况
  .state('bookings', {
    url: '/bookings',
    abstract: true,
    templateUrl: 'templates/bookings.html'
  })
  .state('bookings.unassigned', {
    url: '/unassigned',
    views: {
      'bookings': {
        templateUrl: 'templates/bookings/unassigned.html',
        controller: 'bookingsUnAssignedCtrl'
      }
    }
  })
  .state('bookings.assigned', {
    url: '/assigned',
    views: {
      'bookings': {
        templateUrl: 'templates/bookings/assigned.html',
        controller: 'bookingsAssignedCtrl'
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


  .state('common', {
    url: '/common',
    abstract: true,
    templateUrl: 'templates/common.html'
  })
  .state('common.person', {
    url: '/person',
    views: {
      'common-person': {
        templateUrl: 'templates/common/person.html'
        
      }
    }
  })

 .state('common.register', {
    url: '/register',
    views: {
      'common-login': {
        templateUrl: 'templates/common/register.html',
        controller: "commonRegisterCtrl"
      }
    }
  });


  $urlRouterProvider.otherwise('/main/index');
  //$urlRouterProvider.otherwise('/common/register');

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

