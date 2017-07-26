/*
File: appConfig.js
App Name: MEAN Boiler
Purpose: Configuration Part for Server and Database
Created By: Hardik Thakor */

'use strict'
module.exports ={
  "db" :{           //Database Configuration
          "port"		: 27017,
          "dbName"	: 'social-feed',
          "authDb"	: 'admin',
          "url"		  : 'mongodb://localhost:27017/social-feed',
          "host"		: 'localhost',
          "user"		: "admin",
          "passkey"	: "$3cRE@t",
        },
  "server": {       //Server Configuration
          "name":"Social Feed Fetcher",
          "port":4000
        },
  "authTwitter" :{
          'consumer_key'        : 'XXX',          //Key from App that you created using developers account of Twitter
          'consumer_secret'     : 'XXXXXXXXXXX',  //consumer Secret from App that you created using developers account of Twitter
          'access_token'        : 'XXXXXXXXXXX',  //Acess token from App that you created using developers account of Twitter
          'access_token_secret' : 'XXXXXXXXXXX',  //Acess token Secret from App that you created using developers account of Twitter
        },
  "authFacebook"   :{
            "client_id"     : 'XXXXXXXXXXX',          //Client Id from App that you created using developers account of Facebook
            "client_secret" : 'XXXXXXXXXXX',          //Client Secret from App that you created using developers account of Facebook
            "grant_type"    : 'client_credentials',
            "pageid"        : 'XXXXXXXXXXX'           //Page Id whoes Post you want to get from Facebook
        },
  "twitterParams"   :{
            "q"     : 'fifa', //Tweets with Hashtags
            "count" : 100     //No. of Feeds to be fetched
          }

}
