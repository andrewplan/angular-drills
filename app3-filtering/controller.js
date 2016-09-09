angular.module( 'filterApp' ).controller( 'mainCtrl', function( $scope, filterService ) {

  $scope.getData = function() {
    $scope.datas = filterService.getData();
  };

  ( function init() {
    $scope.getData();
  } )();

} )
