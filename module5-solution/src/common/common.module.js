(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://wast2006-angular5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
