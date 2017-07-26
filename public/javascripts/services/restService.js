/*
File: restService.js
App Name: MEAN Boiler
Purpose: Providing Service To Controller
Created By: Hardik Thakor */

restService.$inject = ['$http', '$q'];
app.service('restService', restService);

function restService($http, $q) {
    return {
        getTweets: getTweets,
        getPosts: getPosts,
        addData: addData
    };

    var URL = "";

    // For Getting Data
    function getTweets() {
        var deferred = $q.defer();
        URL = "/getFeeds";
        $http.get(URL).success(function(response) {

          console.log("response succ");
        }).error(function(er) {
          console.log("response err",er);
          deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Getting Data
    function getPosts() {
        var deferred = $q.defer();
        URL = "/getPosts";
        $http.get(URL).success(function(response) {
          deferred.resolve(response);
        }).error(function(er) {
          deferred.reject(er);
        });
        return deferred.promise;
    }

    // For Adding Data
    function addData(locationData) {
        var deferred = $q.defer();
        var url = "";
        $http.post(url, data, {headers:  { 'Authorization': 'Bearer '+localStorage.getItem('id_token')}}).success(function(res) {
            deferred.resolve(res);
        }).error(function(er) {
            deferred.reject(er);
        });
        return deferred.promise;
    }
}
