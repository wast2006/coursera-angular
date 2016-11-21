(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController (items) {
  var controller = this;

  controller.category = items.data.category.name;
  controller.items = items.data.menu_items;
}

})();
