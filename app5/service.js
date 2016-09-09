angular.module( 'apiApp' ).service( 'apiService', function( $http, $q ) {

  var baseUrl = 'https://wordsapiv1.p.mashape.com/words/';

  this.getWords = function( word ) {
    var deferred = $q.defer();
    var words = [];
    var rhymesUrl = baseUrl + word + '/rhymes';
    var synonymsUrl = baseUrl + word + '/synonyms';
    var wordsUrlList = [ rhymesUrl, synonymsUrl ];

    wordsUrlList.forEach( function( url ) {
      $http({
          method: 'GET'
        , url: url
        , headers: {
              'X-Mashape-Key': 'lnIIXhMJeZmshiTS9xy8R97Ci86gp1CEHKWjsn6G6iY1AfVDFs'
            , 'Accept': 'application/json'
          }
      })
        .then( function( response ) {

            if( url === rhymesUrl ) {
              words.push( { 'rhymes': response.data.rhymes.all } );
            }
            else if ( url === synonymsUrl ) {
              words.push( { 'synonyms': response.data.synonyms } );
            }

            if ( words.length === wordsUrlList.length ) {
              // console.log( words );
              deferred.resolve( words );
            }
        } )
        .catch( function( err ) {
          console.error( 'Error: ' + err );
          deferred.reject( err );
        } );
    } );
    return deferred.promise;
  };

} )
