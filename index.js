/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell','Hello Sagar. Welcome to iTrack. How can I help');
    },
    'TrackShipment': function () {
        this.emit(':tell','Wait a second while I search for your package');
    },
    
   
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};