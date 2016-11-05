(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var controller = this;

  controller.items = ShoppingListCheckOffService.getToBuyItems();

  controller.moveToAlreadyBoughtItems = function (index) {
    ShoppingListCheckOffService.moveFromToBuyItemsToAlreadyBoughtItems(index);
  }
};



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;

  controller.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
};



function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "Cookies", quantity: 10 },
    { name: "Chips", quantity: 20 },
    { name: "Marshmallows", quantity: 15 },
    { name: "Sugary Drinks", quantity: 5 },
    { name: "Alka Seltzer", quantity: 2 }
  ];

  var alreadyBoughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  service.moveFromToBuyItemsToAlreadyBoughtItems = function (index) {
    var item = toBuyItems.splice(index, 1)[0];
    alreadyBoughtItems.push(item);
  };
}

})();
