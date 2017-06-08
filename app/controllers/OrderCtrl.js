angular.module('BangaClient').controller('OrderCtrl', [
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
            url: `${root.order}${$routeParams.orderID}`,
            method: "GET",
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            },
          })
          .then(
            res => {
              $scope.order = res.data
              console.log(res)
            },
            
          )
      );
  }
]);