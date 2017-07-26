/*
File: controller.js
App Name: MEAN Boiler
Purpose: Provides Function/Control For API Call
Created By: Hardik Thakor */

'use strict';
const chalk = require('chalk');                           //For Displaying Logs in different Colors
const mongodb = require('mongodb');                       //For DB Communication
const MongoClient = mongodb.MongoClient;
const appConfig = require('../config/appConfig');         //App Configs
const feeds = require('twit');                            // For Twitter Feeds
const objTweet = new feeds(appConfig.authTwitter);        //Object for twitter
const params = appConfig.twitterParams;                   //Parameters for Fetching Tweets

const FB = require('fb');
const fb = new FB.Facebook(appConfig.authFacebook);

// For getting Feeds from twitter
exports.getFeeds = function(req, res) {
    console.log(chalk.bold("Requested Twitter For Tweets..."));
    objTweet.get('search/tweets', params,searchedData);

    function searchedData(err, data, response) {
      console.log("data",data);
      if(data.errors || err){
        console.log("If");
        res.status(500).json({"msg":"Error Receiving feeds From Twitter","feeds":data});
      }
      else{
        console.log("elses");
        res.status(200).json({"msg":"received","feeds":data.statuses});
      }
    }
};


//For Getting Page Posts from Facebook
exports.getPosts = function(req, res) {
    FB.api(
        "/v2.10/"+appConfig.authFacebook.pageid+"/feed?fields=attachments,message",
        {access_token: '302642623492507|xyLv_rh0Okl0tr3iI3mzN_VL_08'},
        function (response) {
          console.log(chalk.blue.bold("Responded from Facebook..."),response);
          if (response && !response.error) {
            res.status(200).json({"msg":"Posts Received","feeds":response.data});
          }
          else{
            res.status(500).json({"msg":"Error Receiving Post From Facebook","feeds":response.error});
          }
        }
    );
};
