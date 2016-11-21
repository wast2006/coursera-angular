(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/components/home/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/components/categories/categories.template.html',
    controller: 'CategoriesController as categoriesController',
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/components/items/items.template.html',
    controller: 'ItemsController as itemsController'/*,
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
    */
  });
}

})();
