angular.module( 'arrayApp' ).controller( 'arrayController', function( $scope, arrayService ) {

  $scope.getData = function() {
    $scope.datas = arrayService.getData();
  };

  $scope.getData();

} )
