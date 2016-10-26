(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menuItems = "";
  $scope.message = "";

  $scope.check = function () {
    if ( $scope.menuItems == "" ) {
      $scope.message = "Please enter data first!";
      return;
    } 

    var numItems = countItems($scope.menuItems);
    if ( numItems <= 3 ) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  $scope.clear = function () {
    $scope.message = "";
  };

  function countItems(string) {
    var arrayOfStrings = string.split(',');
    return arrayOfStrings.length;
  }

};


})();


//!function(){"use strict";function e(e){function n(e){var n=e.split(",");return n.length}e.menuItems="",e.message="",e.check=function(){if(""==e.menuItems)return void(e.message="Please enter data first!");var t=n(e.menuItems);3>=t?e.message="Enjoy!":e.message="Too much!"},e.clear=function(){e.message=""}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
