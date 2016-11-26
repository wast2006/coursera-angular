(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;

  // for quicker testing
  /*
  service.myInfo = {
     firstName: 'Hans', 
     lastName: 'Meier', 
     emailAddress: 'hans@meier.de', 
     phoneNumber: '111-222-3333',
     favoriteMenuNumber: 'C10'
  };
  */

  service.getMyInfo = function () {
    return service.myInfo;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };

}


})();
