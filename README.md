# js-redirect
Javascript phased rolled out and redirection script

## Purpose
jsRedirect is designed as a drop in, standalone, and pure javascript based solution to phased and incremental rollout of a new website. The main purpose is redirecting a percentage of visitors to a new or alternate website. The script will set a cookie so that users not redirected won't be redirected in the middle of normal browsing and also that users already redirected will stay redirected should they again visit the original url.

## Usage
Simply include the jsRedirect.js file into your site's head section. The script should be placed as close to the top as possible so that it runs before any other scripts or content are loaded for the site.
```html
<script src="jsRedirect.js"></script>
```

One may wish to programatically engage the redirection check instead of having it run automatically. This can be accomplished by commenting out or removing the last line in jsRedirect.js.

```js
//jsRedirect.checkCookie();
```

Then add the call to your own function or code.

```js
function yourFunction() {
  jsRedirect.checkCookie();
}
```

## Options
The options below are configured directly in jsRedirect.js.

####haystack `number`
Number in percents of 100 amount of users to redirect.

####cname: `string`
Name of the cookie to store the redirected or excluded state.

####url: `string`
Destination URL to where the script should redirect the user.

####appendUrlPath: `boolean`
Whether or not to append the requested path of the old URL to the new URL.

####paramForceRedirect `string`
Check for flag in incoming URL to force redirection to the new URL and set the cookie.

####paramForceExclude `string`
Check for flag in incoming URL to force exclusion of redirect and set the cookie.

####daysToRedirect `number`
Days until the redirect cookie will expire.

####daysToExclude `number`
Days until the exclusion cookie will expire.

##Testing
Testing can be performed by commenting out the jsRedirect checkCookie() method and adding the unitTest() method to your body tags onload attribute. The test.html file included in this repository provides an example of this.

```html
<body onload="xoRedirect.unitTest()">
```

Once redirected you may find it difficult to return back to the original URL in which case you can add the value defined in the paramForceExclude to your URL to override the redirection. http://yourdomain.tld/?xoForceExclude for example. Likewise you can use the value defined for paramForceRedirect to test the redirection without having to hit the haystack or clear your cookies each reload.
