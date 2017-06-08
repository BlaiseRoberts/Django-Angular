angular.module('BangaClient').controller('SearchCtrl', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory',
  '$routeParams', 
  function($scope, $http, $location, RootFactory, $routeParams) {
    $scope.searchText = ""

    $scope.search = function(){
      console.log($scope.searchText)
      RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            url: `${root.products}`,
            method: "GET",
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            },
            params: {
              'search': $scope.searchText
            }
          })
          .then(
            res => {
              $scope.products = res.data.results
              console.log(res)
            },
            
          )
      );
    }


    
  }
]);