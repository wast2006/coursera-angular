(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo', 'MenuService', 'ApiPath'];
function MyInfoController(myInfo, MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.myInfo = myInfo;

  // load the details of a registered user's favorite menu item
  if( $ctrl.myInfo ) {
    MenuService.getMenuItem($ctrl.myInfo.favoriteMenuNumber).then( function(data) {
      $ctrl.menuItem = data;
    });
  }
}

})();
