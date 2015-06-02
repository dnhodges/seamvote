(function() {
  'use strict';

  var BASE_URL = "http://drogerspc.pc.factset.com:8000";

  function vote( $q, $http, restaurants ) {
    this.getRestaurants = function() {
      return $q.when( restaurants );
    };

    this.voteFor = function( c ) {
      var res = $q.defer();
      $http.post( BASE_URL + "/vote", { choices: c }, { withCredentials: true } ).success( function( data, status ) {
        res.resolve( data );
      } ).error( function( data, status ) {
        res.reject( "failed with status " + status );
      } );
      return res.promise;
    }
  }

  angular
    .module( 'seamvoteApp' )
    .service( 'vote', vote );
})();
