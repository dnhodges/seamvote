(function() {
  'use strict';

  function ChoiceCtrl( $scope ) {
    var vm = this;
  }

  angular.module( 'seamvoteApp' )
    .controller( 'ChoiceCtrl', [ '$scope', ChoiceCtrl ] );
})();
