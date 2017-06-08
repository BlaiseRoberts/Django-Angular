"use strict";

app.controller("NavbarCtrl", function($scope, $http, $location, RootFactory, apiUrl){
///////////////////
///Initialize
///////////////////
  $(document).ready(function(){
  	$(".button-collapse").sideNav({
	      menuWidth: 300, // Default is 300
	      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	      draggable: true // Choose whether you can drag to open on touch screens
	    }
	);
    $('.modal').modal({dismissible: false});
  });

  $scope.isLoggedIn = false;

  $scope.register = function() {
      $http({
        url: `${apiUrl}/register`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name
        }
      }).then(
        res => {
          $scope.isLoggedIn = true;
          RootFactory.setToken(res.data.token);
          if (res.data.token !== "") {
            $location.path('/products');
          }
        },
        console.error
      );
  };


  $scope.login = function() {
      $http({
        url: `${apiUrl}/api-token-auth/`,
        method: "POST",
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          $scope.isLoggedIn = true;
          RootFactory.setToken(res.data.token);
          if (res.data.token !== "") {
            $location.path('/products');
          }
        },
        console.error
      );
  };

  $scope.user = {
    username: "blaiser",
    password: "1"
  }

  $scope.login()


 });