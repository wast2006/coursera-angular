(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoryList'];
function CategoriesController (categoryList) {
//CategoriesController.$inject = ['MenuDataService'];
//function CategoriesController (MenuDataService) {
  var controller = this;
  controller.categories = categoryList;
  console.log(categoryList);

  /*
  controller.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      controller.categories = result.data;
    });
  };
  */
}

})();
