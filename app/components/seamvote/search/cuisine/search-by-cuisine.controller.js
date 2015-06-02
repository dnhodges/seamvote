(function() {
  'use strict';

  function SearchByCuisineCtrl( $scope ) {
    var vm = this;

    $scope.$watch( function() {
      return vm.cuisine;
    }, function( newValue ) {
      console.log( newValue );
    } );

  }

  angular.module( 'seamvoteApp' )
    .controller( 'SearchByCuisineCtrl', [ '$scope', SearchByCuisineCtrl ] );
})();
