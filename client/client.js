var app = angular.module('thisApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.tweet = function(){
    var adjectives, nouns;
    $http.get('/adjectives').then(function(responseAdj){
      adjectives = responseAdj.data.adjectives;
      //console.log(adjectives);
      $http.get('/nouns').then(function(responseNoun){
        nouns = responseNoun.data.nouns;
        //console.log(nouns);
        $scope.twitterHandles = handleArray(adjectives, nouns);
        //console.log($scope.twitterHandles);
      });
    });
  }
  $scope.tweet();
}]);

function handleArray(adjectives, nouns){
  var minLength = (adjectives.length < nouns.length) ? adjectives.length : nouns.length;
  var shuffleAdj = shuffleArray(adjectives);
  var shuffleNouns = shuffleArray(nouns);
  var twitterHandles = [];

  for (var i = 0; i < minLength; i++){
    //twitterHandles.push({shuffleAdj[i] + " " + shuffleNouns[i], buildHandle(shuffleAdj[i], shuffleNouns[i])});
    twitterHandles.push(buildHandle(shuffleAdj[i], shuffleNouns[i]));

  }
  return twitterHandles;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function buildHandle(adjective, noun){
  var handle = adjective + noun;
  return 'http://www.twitter.com/' + handle;
}
