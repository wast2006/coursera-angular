(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/pages/categories/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
