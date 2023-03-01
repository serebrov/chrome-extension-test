Chrome extensions based on tutorial: https://developer.chrome.com/docs/extensions/mv3/getstarted/.

The reading time extension enhancements:
* Extended manifest to work on chrome dev tools and workbox pages
  * Basically, reduced the match pattern to `https://developer.chrome.com/docs/*` from `/docs/extensions/*`
* Added one more content script to add reading time to openai blog (https://openai.com/blog/)
  * Extracted the logic into separate function (and separate helper content script)
  * Added rendering delay - openai blog updates HTML after it was shown initially (maybe due to server-side rendering / hydration process). If reading time is added on page render, it disappears, so I added 1 second delay before inserting it.
