var express = require('express');
var appInsights = require("applicationinsights");
var config = require('./config');

appInsights.setup(config.appInsightsKey).start();

var expressPort = config.port;

// Create a new Express application.
var app = express();

app.listen(expressPort);