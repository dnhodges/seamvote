(function() {
  'use strict';

  function searchByName() {

    return {
      bindToController: true,
      controller: 'SearchByNameCtrl',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        nameQuery: '='
      },
      templateUrl: 'app/components/seamvote/search/name/search-by-name.html'
    }
  }

  angular
    .module( 'seamvoteApp' )
    .directive( 'searchByName', searchByName );
})();
