vn-inception
============

A tool for bootstrapping Volusion Themes with other apps as dependency's.


## Inception

1. beginning; start; commencement.
2. (in science fiction) the act of instilling an idea into someone's mind by entering his or her dreams.
3. 3. (in volusion themes) the act of downloading and injecting pre built apps as dependency' listed in a manifest

# Overview
Themes can use pre compiled apps if they are: 
- available as a single file download 
- injected into the app before the config phase is run

This script is used to read the manifest (siteInfo.json) at site.url/settings/siteInfo.json and parse for the apps array. THe apps array is a list of strings (as moduleName) and url's. It will download the apps and make them avaialbe in the DOM. Then it will defer the theme bootstrap process until it is added to the depenency's array used by $injector in the angular.resumeBootstrap funciton.

