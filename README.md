Wafle Project
=============
Web Accessible Fitting Library for EVE

##About the project
Wafle is a library that performs calculations needed to properly fit [Internet Spaceships](http://www.eveonline.com/universe/spaceships/) for the game [EVE Online](http://www.eveonline.com).

Wafle:
* is written in [TypeScript](https://typescript.codeplex.com/), a typed superset of JavaScript that compiles to readable, standards-based JavaScript.  Wafle works with any modern browser on any device, or with non-browser JavaScript environments such as [node.js](http://nodejs.org/).
* has no active server-side components.  Therefore, Wafle can be used with any web server by simply copying the .js files to an accessible path.
* is covered by [qUnit](http://qunitjs.com/) tests.
* produces "regular" js files in addition to minified js files via [UglifyJS 2](https://github.com/mishoo/UglifyJS2).
* does not currently have a UI.  Pull requests welcome!
* is licensed under the [MIT license](http://opensource.org/licenses/MIT) with the exception of the Wafle.Data.ts, Wafle.Data.js, Wafle.Data.min.js and Wafle.Data-{version}.min.js files.
* contains data in JSON format extracted from the [EVE Community Toolkit](http://community.eveonline.com/community/fansites/toolkit/) which is (c) 2013 CCP hf. (See the LICENSE file for specific details.)

###Current state of the project
Wafle is currently in very early alpha - pre 0.1.0 release...  It is currently capable of performing many but not all of the calculations relevant for fitting "fighting" frigates.

####What is needed?
* Wafle needs one or more UIs.
* Wafle needs support for more module types, ship classes, and things like drones.
* The Wafle Project needs help from a Mac or Linux user to help streamline development of Wafle on those platforms.

###Guiding Principles
* Wafle will be distributed for free and will use free (as in beer) tools for development.
* Wafle will be developed using TypeScript to gain the productivity advantages of strong typing at develop-time and the broad compatibility and flexibility of JavaScript at run-time.
* Wafle will take advantage of modern client-side technologies:
 * It will not require any active server-side functionality to perform its basic role as a fitting tool.
 * It will be designed to work with modern browsers (Recent versions of Firefox, Webkit-based browsers, IE 10+, and similar)
* The Wafle project will strive to make it easy for new contributors to join in.
* The Wafle project will use [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html).
* The Wafle Data module will remain separate from the Wafle library to ensure that CCP's intellectual property is respected.


##How to contribute
1. Get your development environment set up.  Instructions below for Windows.  All software required to contribute to Wafle is available at no charge.
2. A good starting point to see how Wafle works is to analyze the [Wafle/Wafle/tests/tests.ts](https://github.com/ShamnaSkor/WafleProject/blob/master/Wafle/Wafle/tests/tests.ts) file.  That file contains tests for all of the currently supported use cases for Wafle.  Then look at the "What is needed?" section above and dive in, or else come up with your own contribution idea.
3. If you've been able to develop something, please submit your changes as a pull request.
4. If you've just got an idea or are running into a bug, submit it in the [issues](https://github.com/ShamnaSkor/WafleProject/issues) section.

###Setting up a Wafle development environment on Windows
[See the Wiki article here](https://github.com/ShamnaSkor/WafleProject/wiki/Setting-up-a-development-environment-on-windows)

###Extracting data from the EVE Community Toolkit
[See the Wiki article here](https://github.com/ShamnaSkor/WafleProject/wiki/How-to-extract-data-from-the-EVE-Community-Toolkit)
