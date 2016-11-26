(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['myInfo', 'UserService', 'MenuService'];
function SignUpController(myInfo, UserService, MenuService) {
  var $ctrl = this;
  $ctrl.myInfo = myInfo;

  $ctrl.signUp = function () {
    MenuService.getMenuItem($ctrl.myInfo.favoriteMenuNumber).then(function (data) {
      UserService.setMyInfo($ctrl.myInfo);
      $ctrl.message = 'Your information has been saved.';
    }, function (error) {
      // TODO: should hook into the Angular validation, i.e. set the form invalid to show a red border etc.
      $ctrl.menuNumberMessage = 'No such menu number exists';
      return;
    });
  };

  $ctrl.clearMessage = function () {
    $ctrl.message = '';
  };

  // TODO: should hook into the Angular validation, i.e. set the form invalid to disable the red border etc.
  $ctrl.clearMenuNumberMessage = function () {
    $ctrl.menuNumberMessage = '';
  };
}

})();
