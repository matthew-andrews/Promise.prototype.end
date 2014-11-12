var assert = require('assert');

require('es6-promise').polyfill();
require('../end');


describe("Promise.end", function() {
	it("promotes unhandled exceptions", function(done) {

		// Some hacks to stop Mocha's uncaught exception handlers from being clever
		var previousListeners = process.listeners('uncaughtException');
		process.removeAllListeners('uncaughtException');
		// End hack

		process.on('uncaughtException', function(err) {
			err.uncaught = false;
			assert.equal('UndefinedFunction is not defined', err.message);

			// Some hacks to stop Mocha's uncaught exception handlers from being clever
			previousListeners.forEach(function(listener) {
				process.on('uncaughtException', listener);
			});
			// End hack

			done();
		});

		var promiseToFail = function() {
			return new Promise(function(resolve, reject) {
				return new UndefinedFunction();
			});
		};
		promiseToFail().end();
	});
});
