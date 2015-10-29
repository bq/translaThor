(function() {
  'use strict';

  angular
    .module('translaThor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
