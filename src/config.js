var config = {}

config.port = process.env.PORT || 80;

//Telemitry
config.appInsightsKey = process.env.APP_INSIGHTS_KEY || 'XXXXXXXXXXXXXXXXXXXXXXXX';

module.exports = config;