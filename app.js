'use strict';
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var request = require('request');

dotenv.load();
var root_url = (process.env.ROOT_URL || 'http://localhost');
var port = Number(process.env.PORT || 3000);

/******************************** EXPRESS SETUP *******************************/

var app = express();
app.set('json spaces', 2);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/******************************** EXPRESS ROUTES *******************************/

// Home/Discovery Endpoint
app.get('/', function (req, res) {
  var baseURL = req.protocol + '://' + req.headers.host;
  var routes = {
    docs: {
      endpoint: baseURL + '/docs'
    },
    doc_logs: {
      endpoint: baseURL + '/doc_logs'
    }
  }
  res.json(routes);
});

// Docs Endpoint
app.get('/docs', function (req, res) {
	request.get({
	  url: 'https://docraptor.com/docs.json',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  json: {
	    user_credentials: process.env.DOCRAPTOR_API_KEY
	  }
	}, function(err, response, body) {
	  res.json( response );
	});
});

// Doc Logs Endpoint
app.get('/doc_logs', function (req, res) {
	request.get({
	  url: 'https://docraptor.com/doc_logs.json',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  json: {
	    user_credentials: "dLoXAf2YW0SLIBRAMePC"
	  }
	}, function(err, response, body) {
	  res.json( response );
	});
});

/******************************** SERVER LISTEN *******************************/

// Server Listen
app.listen( Number(process.env.PORT || 3000), function () {
	console.log( '\nApp server is running on ' + root_url +':' + port + '\n' );
});
