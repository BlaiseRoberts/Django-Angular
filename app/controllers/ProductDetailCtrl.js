angular.module('BangaClient').controller('ProductDetailCtrl', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory',
  '$routeParams', 
  function($scope, $http, $location, RootFactory, $routeParams) {
    RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            url: `${root.products}${$routeParams.productID}`,
            method: "GET",
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            }
          })
          .then(
            res => {
              $scope.product = res.data
              console.log(res)
            },
            
          )
      );
  }
]);