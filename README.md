[gs-firefox]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[gs-chrome]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[st-firefox]: https://addons.mozilla.org/en-US/firefox/addon/styl-us/
[st-chrome]: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne/
# UserScripts
A collection of userscripts and styles for websites I often use.

### How to use
1. Find a site in the list.
2. Copy the contents of the user.js file into your favourite userscript extension.  
I use [Greasemonkey][gs-firefox] on Firefox, but you could use [Tampermonkey][gs-chrome] on Chrome.
3. Copy the contents of the user.css file into your favourite styling extension.  
I use Stylus, which you can use on both [Firefox][st-firefox] and [Chrome][st-chrome].

### Sites and Changes
#### Crunchyroll  ([user.js](../../raw/master/crunchyroll.user.js) | [user.css](../../raw/master/crunchyroll.user.css))  
+ Adjusts the colour of the header to black when in focused mode.
+ Adds dark overlay to the rest of the screen, allowing the video to be pride of place within the page.
+ Resizes the video player to 1920x1080 px.

#### Amazon Music UK ([user.js](../../raw/master/aznmusic.user.js))
+ Replaces the amzon music logo (top-left) with the current time.

#### All Sites - Minify ([user.js](../../raw/master/minify.user.js))
+ Closes the current tab and opens a minimal browser window of the page.
+ This may require adjusting a browser flag to allow scripts to close tabs or open new windows.
