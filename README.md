# js-redirect
Javascript phased rolled out and redirection script

## Purpose
jsRedirect is designed as a drop in, standalone, and pure javascript based solution to phased and incremental rollout of a new website. The main purpose is redirecting a percentage of visitors to a new or alternate website. The script will set a cookie so that users not redirected won't be redirected in the middle of normal browsing and also that users already redirected will stay redirected should they again visit the original url.

## Usage
Simply include the jsRedirect.js file into your site's head section. The script should be placed as close to the top as possible so that it runs before any other scripts or content are loaded for the site.
```html
<script src="jsRedirect.js"></script>
```
