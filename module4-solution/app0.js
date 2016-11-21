(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);



function FoundItems() {
  var ddo = {
    templateUrl: 'found-items.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.searchTerm = '';
  // leave controller.found undef in the beginning to avoid the "Nothing found message" for an empty array

  controller.search = function () {
    // an empty search term gives an empty result
    if(controller.searchTerm==='') {
      controller.found = [];
    } else {
      // the model will be updated once the promise returns
      MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function (result) {
        controller.found = result;
      });
    }
  }

  controller.removeItem = function (index) {
    controller.found.splice(index, 1);
  }
};



MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var searchTermLowerCase = searchTerm.toLowerCase();

    
    return $http({ url: 'https://davids-restaurant.herokuapp.com/menu_items.json' }).then(function (result) {
      var foundItems = [];

      for(var i=0; i<result.data.menu_items.length; i++) {
	var item = result.data.menu_items[i];
        if (item.name.toLowerCase().indexOf(searchTermLowerCase) !== -1) {
          foundItems.push(item);
	}
      }

      return foundItems;
    });
  };
}

})();
