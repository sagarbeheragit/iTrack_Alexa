// This test case is for testing skill only locally
// It uses alexa-skill-test-framework with mocha


// include the testing framework
const alexaTest = require('alexa-skill-test-framework');
//const alexaTest = require('../../index');

// initialize the testing framework
alexaTest.initialize(
	require('../index.js'),
	"amzn1.ask.skill.00000000-0000-0000-0000-000000000000",
	"amzn1.ask.account.VOID");

describe("iTrack Skill Launch test", function () {
	// tests the behavior of the skill's LaunchRequest
	describe("LaunchRequest", function () {
		alexaTest.test([
			{
				request: alexaTest.getLaunchRequest(),
				says: "Hello Sagar. Welcome to iTrack. How can I help", repromptsNothing: true, shouldEndSession: true
			}
		]);
	});

	// tests the behavior of the skill's HelloWorldIntent
	describe("TrackShipment", function () {
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest("TrackShipment"),
				says: "Wait a second while I search for your package", repromptsNothing: true, shouldEndSession: true,				
			}
		]);
	});

	// tests the behavior of the skill's HelloWorldIntent with like operator
	describe("TrackShipment like", function () {
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest("TrackShipment"),
				saysLike: "package", repromptsNothing: true, shouldEndSession: true
			}
		]);
	});
});