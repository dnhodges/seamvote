(function() {
  'use strict';

  function SeamvoteCtrl( vote ) {
    var vm = this;
    var names = [];

    vote.getRestaurants().then(function(restaurants) {
      restaurants.forEach( function (restaurant) {
        names.push(restaurant.restaurant);
      });

      vm.restaurantNames = names;
    });
  }

  angular.module( 'seamvoteApp' )
    .controller( 'SeamvoteCtrl', [ 'vote', SeamvoteCtrl ] );
})();
