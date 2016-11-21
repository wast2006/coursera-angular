(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/pages/items/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
