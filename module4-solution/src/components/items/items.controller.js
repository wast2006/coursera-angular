(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items']; //['MenuDataService'];
function ItemsController (items) {
  var controller = this;

  controller.category = '';
  controller.items = items;
  console.log(items);

  /*
  var shortName = 'CM';

  controller.$onInit = function () {
    MenuDataService.getItemsForCategory(shortName)
    .then(function (result) {
      controller.category = result.data.category.name;
      controller.items = result.data.menu_items;
    });
  };
  */
}

})();
