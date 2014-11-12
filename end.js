(function() {
	'use strict';

	// Get a handle on the global object
	var local;
	if (typeof global !== 'undefined') local = global;
	else if (typeof window !== 'undefined' && window.document) local = window;
	else local = self;

	// Polyfill (verb)
	var endSupport = "end" in local.Promise.prototype;
	if (!endSupport) local.Promise.prototype.end = endPolyfill;

	// Polyfill (noun)
	function endPolyfill() {
		return this.catch(function(err) {
			setTimeout(function() { throw err; }, 0);
		});
	}
}());
