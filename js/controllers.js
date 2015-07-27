angular.module('starter.controllers', [])

.controller('mainIndexCtrl', function($scope) {})

.controller('mainProductsCtrl', function($scope,$ionicPopover,$stateParams) {
  $scope.categoryNames = ["", "私募基金", "公募基金", "信托", "组合产品"]
  $scope.categoryID = $stateParams.categoryID;

  $ionicPopover.fromTemplateUrl('templates/main/products/categories.html', {
    scope: $scope
  })
  .then(function(popover){
    $scope.popover = popover;
  });

  $scope.products = [{
    id: 0,
    name: '盈泰磐海对接新泽量化',
    detail: 'You on your way?',
    category: '1'
  }, {
    id: 1,
    name: '盈泰磐海对接新泽量化',
    detail: 'Hey, it\'s me',
    category: '1'
  }, {
    id: 2,
    name: '盈泰磐海对接新泽量化',
    detail: 'I should buy a boat',
    category: '1'
  }, {
    id: 4,
    name: '盈泰磐海对接新泽量化',
    detail: 'I should buy a boat',
    category: '1'
  }, {
    id: 5,
    name: '盈泰磐海对接新泽量化',
    detail: 'I should buy a boat',
    category: '2'
  },  {
    id: 6,
    name: '盈泰磐海对接新泽量化',
    detail: 'I should buy a boat',
    category: '3'
  }];

})



.controller('mainToolBoxCtrl', function($scope) {})

.controller('productDetailCtrl', function($scope,$ionicHistory,$stateParams) {
  var productID = $stateParams.productID;
  $scope.detail = {
    id: productID,
    name: '盈泰磐海对接新泽量化',
    detail: '作为国内首只港股分级基金，添富恒生进一步拓宽了内地与香港市场的通道，有助于内地投资者更加高效地进行海外资产配置。据了解，添富恒生所跟踪的恒生指数香港市场的核心指数，反映优质的香港龙头上市公司表现。恒生指数成分股中有近60%的权重来自汇丰控股、长江实业、新鸿基地产、香港交易所等本地的龙头企业，还有35%左右的权重来自腾讯控股等优质中国企业。其中，成分股中包含的博彩、交易所等商业模式恰是内地稀缺的新经济的代表。1月26日消息，据香港文汇报报道，内地与香港两地基金互认随时推出，投资港股的基金公司有望抢占先机。据路透报导，汇添富基金管理公司昨开始正式销售内地首只QDII版的港股杠杆基金-汇添富恒生指数(25275.641, 192.89, 0.77%)分级证券基金，为内地股民提供多一种恒生指数的投资方式。'
  };

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('customersServeCtrl', function($scope) {
  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'http://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'http://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];
})

.controller('customersAppointmentCtrl', function($scope) {
  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'http://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'http://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }];
})

.controller('customersAllCtrl', function($scope) {
  $scope.customers = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'http://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'http://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'http://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'http://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }];
});

  /*
  $scope.detail = {
      id: '1201',
      name: '盈泰磐海对接新泽量化',
      detail: '作为国内首只港股分级基金，添富恒生进一步拓宽了内地与香港市场的通道，有助于内地投资者更加高效地进行海外资产配置。据了解，添富恒生所跟踪的恒生指数香港市场的核心指数，反映优质的香港龙头上市公司表现。恒生指数成分股中有近60%的权重来自汇丰控股、长江实业、新鸿基地产、香港交易所等本地的龙头企业，还有35%左右的权重来自腾讯控股等优质中国企业。其中，成分股中包含的博彩、交易所等商业模式恰是内地稀缺的新经济的代表。1月26日消息，据香港文汇报报道，内地与香港两地基金互认随时推出，投资港股的基金公司有望抢占先机。据路透报导，汇添富基金管理公司昨开始正式销售内地首只QDII版的港股杠杆基金-汇添富恒生指数(25275.641, 192.89, 0.77%)分级证券基金，为内地股民提供多一种恒生指数的投资方式。'
    };
});*/

