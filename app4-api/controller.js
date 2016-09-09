angular.module( 'apiApp' ).controller( 'mainCtrl', function( $scope, apiService ) {
  $scope.rhymes = [];
  $scope.synonyms = [];
  $scope.isHeaderShowing = false;

  $scope.getWords = function( word ) {
    apiService.getWords( word )
      .then( function( results ) {

        results.forEach( function( result ) {
          if ( result.hasOwnProperty( 'rhymes' ) ) {
            $scope.rhymes = result.rhymes;
          }
          $scope.synonyms = result.synonyms;
        } );
      } );

    $scope.isHeaderShowing = true;
  };

} )
