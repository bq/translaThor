(function() {

  'use strict';

  angular.module('translaThorApp')
    .controller('MainController', function($scope, $log) {
      $log.log('scope', $scope);
    });
})();