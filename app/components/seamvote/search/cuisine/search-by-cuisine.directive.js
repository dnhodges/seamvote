(function() {
  'use strict';

  function searchByCuisine() {

    return {
      bindToController: true,
      controller: 'SearchByCuisineCtrl',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/seamvote/search/cuisine/search-by-cuisine.html'
    }
  }

  angular
    .module( 'seamvoteApp' )
    .directive( 'searchByCuisine', searchByCuisine );
})();
