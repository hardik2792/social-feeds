/*
File: index.js
App Name: MEAN Boiler
Purpose: Routing For API Call
Created By: Hardik Thakor */

const socials = require('../controllers/controller');

module.exports=function(app) {

  app.get("/getFeeds", socials.getFeeds);
  app.get("/getPosts", socials.getPosts);

  //FOR Index PAGE
	app.get("/",function(req,res){
		res.render('index.ejs');
	});

  // FOR Logger
  app.get("/welcome",function(req,res){
      res.render('welcome.ejs');
  });

};
