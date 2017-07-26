/*
File: index.js
App Name: MEAN Boiler
Purpose: Supply Control to Welcome.ejs
Created By: Hardik Thakor */

welcomeControl.$inject = ['$scope', '$rootScope', '$http', '$timeout', 'restService'];
app.controller('welcomeControl', welcomeControl);

function welcomeControl($scope, $rootScope, $http, $timeout, restService) {
  var toastEle = document.getElementById("toaster"); //for displaying messages in div

  //Config File Initialization
  $rootScope.webTitle = webTitle; //variable with global scope

  // variable declaration
  $scope.logData = [];  //Array Declaration
  $scope.bCallOn = false; //Boolean Declaration
  $scope.toaster_msg = ""; // String Declaration
  $scope.currentIndex = 0; //Integer Declaration
  var bInitFlag = false; //Simple Javascript Variable Declaration

  //Function For Getting Twitter Feeds
  $scope.twitCall = function() {
    toaster("Called For Twitter Feeds.....");
    restService.getTweets().then(function(err,response){
      console.log(response," -- ",err);

      if(response.feeds.errors){
        toaster("Error Occured! Possiblity of missing configuration....");
      }
      else{
        toaster("Tweets Received....");
        $scope.tweets = response.feeds;
      }

    });
  };

  //Function For Getting Facebook Posts
  $scope.fbCall = function() {
    toaster("Called For Facebook Post.....");
    restService.getPosts().then(function(response){
      console.log(response);
      $scope.posts = response.feeds;
      toaster("API Responded.....");
    });
  };

  function toaster(msg) {
    toastEle.className = "show";
    $scope.toaster_msg = msg;
    $timeout(function() {
        toastEle.className = toastEle.className.replace("show", "");
    }, 3000);
  }
}


app.directive('twitCall',function(){
	return {
		template:"<button class='btn btn-primary btn-twitter' ng-click='twitCall()'' title='Click For getting Tweets'><span class='glyphicon glyphicon-th'><span> Fetch Tweets</button>"
	}
});

app.directive('fbCall',function(){
	return {
		template:"<button class='btn btn-primary btn-facebook' ng-click='fbCall()'' title='Click For getting Facebook Post'><span class='glyphicon glyphicon-th'><span> Fetch Posts</button>"
	}
});
