/*
 *  JavaScript Cookie Based Redirection Script
 *  Version 1.0 Created By: Travis Brown
 */

var jsRedirect = {
	haystack: 50, // Number in percents of 100
	cname: 'jsRedirect', // Name of the cookie
	url: 'http://www.xodustech.com/', // Url to redirect
	appendUrlPath: true, // Url add requested path
	paramForceRedirect: 'xoForceRedirect', // Url search to force redirection
	paramForceExclude: 'xoForceExclude', // Url search to force exclusion
	daysToRedirect: 365, // Days until automatic redirect cookie expires
	daysToExclude: 0, // Days until exclusion redirect cookie expires

	checkCookie: function () {
		// Force redirection with special URL
		if ((this.paramForceRedirect) && (location.search.indexOf(this.paramForceRedirect) != -1)) {
			this.setCookie('redirected', this.daysToRedirect);
		}

		if ((this.paramForceExclude) && (location.search.indexOf(this.paramForceExclude) != -1)) {
			this.setCookie('excluded', this.daysToExclude);
		} else {
			// Check and set cookie
			var cookie = this.getCookie();
			if (cookie == 'excluded') return;
			if (cookie != 'redirected') {
				var isRedirect = this.checkRedirect();
				this.setCookie(((isRedirect) ? 'redirected' : 'excluded'), ((isRedirect) ? this.daysToRedirect : this.daysToExclude));
				if (!isRedirect) return;
			}

			// Redirect to new site
			window.location = this.getNewLocation();
		}
	},

	setCookie: function (cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		document.cookie = this.cname + '=' + cvalue + '; expires=' + d.toUTCString();
	},

	getCookie: function () {
		var name = this.cname + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return '';
	},

	checkRedirect: function () {
		return ((Math.random() * 100) < this.haystack);
	},

	getNewLocation: function() {
		return this.url + ((this.appendUrlPath) ? window.location.pathname : '');
	},

	// Begin testing functions
	testRedirect: function () {
		this.logToBody('Redirect Test', true);
		var cookie = this.getCookie();
		this.logToBody('cookie value => ' + ((cookie) ? cookie : 'not set'));
		this.logToBody('would be redirected => ' + ((this.checkRedirect()) ? 'true' : 'false'));
		this.logToBody('would be redirected to => ' + this.getNewLocation());
	},

	checkRandomness: function (haystack) {
		var iter = 100000;
		var wasTrue = 0;

		for (var i = 0; i < iter; i++) {
			wasTrue += (((Math.random() * 100) < haystack) ? 1 : 0);
		}
		this.logToBody('set at => ' + haystack + '% was true => ' + this.round((wasTrue / iter) * 100) + '%');
	},

	testRandomness: function () {
		this.logToBody('Randomness Test', true);
		var tests = [0.01, 0.1, 1, 5, 10, 25, 33, 50, 66, 75, 100];
		for (var i = 0; i < tests.length; i++) {
			this.checkRandomness(tests[i]);
		}
	},

	unitTest: function () {
		this.testRedirect();
		this.testRandomness();
		console.log(this);
	},

	logToBody: function (text, isHeading) {
		var elm = document.createElement(((isHeading) ? 'h2' : 'p'));
		elm.innerText = text;
		document.getElementsByTagName('body')[0].appendChild(elm);
	},

	round: function (num) {
		return +(Math.round(num + 'e+5') + 'e-5');
	}
};

//jsRedirect.checkCookie();
