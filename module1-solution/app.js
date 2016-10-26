(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
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

});


})();
