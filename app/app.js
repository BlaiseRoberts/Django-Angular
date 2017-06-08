// Create main Angular module
var app = angular.module('BangaClient', ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

angular.module('BangaClient').config(
[
  '$routeProvider',
  function($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        controller: 'AuthController',
        templateUrl: 'partials/login.html'
      })
      .when('/products', {
        controller: 'ProductController',
        templateUrl: 'partials/products.html'
      })
      .when('/products/:productID',{
        templateUrl: 'partials/productdetail.html',
        controller: "ProductDetailCtrl",
      })
      .when('/search',{
        templateUrl: 'partials/search.html',
        controller: "SearchCtrl",
      })
      .when('/order/:orderID',{
        templateUrl: 'partials/order.html',
        controller: "OrderCtrl",
      })
      .when('/types', {
        controller: 'ProductTypesController',
        templateUrl: 'partials/producttypes.html'
      });
  }
]);

angular.module('BangaClient').factory('RootFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    let secure_token = null;

    return {
      getApiRoot () {
        return $http({
          url: apiUrl,
          headers: {
            'Authorization': "Token " + secure_token
          }
        }).then(res => res.data)
      },
      setToken (token) {
        secure_token = token
      },
      getToken () {
        return secure_token;
      }
    }
  }
]);