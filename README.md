Wafle Project
=============
Web Accessible Fitting Library for EVE

##About the project
Wafle is a library that performs calculations needed to properly fit [Internet Spaceships](http://www.eveonline.com/universe/spaceships/) for the game [EVE Online](http://www.eveonline.com).

Wafle:
* is written in [TypeScript](https://typescript.codeplex.com/), a typed superset of JavaScript that compiles to readable, standards-based JavaScript.  Wafle works with any modern browser on any device, or with other JavaScript environments such as [node.js](http://nodejs.org/).
* has no server-side components.  Therefore, Wafle can be used with any web server by simply copying the .js files to an accessible path.
* is covered by [qUnit](http://qunitjs.com/) tests.
* produces "regular" js files in addition to minified js files via [UglifyJS 2](https://github.com/mishoo/UglifyJS2).
* does not currently have a UI.  Pull requests welcome!
* is licensed under the [MIT license](http://opensource.org/licenses/MIT) with the exception of the Wafle.Data.ts, Wafle.Data.js, Wafle.Data.min.js and Wafle.Data-{version}.min.js files.
* contains data in JSON format extracted from the [EVE Community Toolkit](http://community.eveonline.com/community/fansites/toolkit/) which is (c) 2013 CCP hf. (See the LICENSE file for specific details.)

###Current state of the project
Wafle is currently in early alpha.  It does not yet have a user interface.  It is currently capable of performing many but not all of the calculations relevant for fitting frigates.

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
All software required to contribute to Wafle is available at no charge.

###Setting up a Wafle development environment on Windows
Follow the below instructions which should work for Windows 7 or 8/8.1.  Note that if you have the paid versions of the below tools (such as Visual Studio 2012 Professional or SQL Server 2012 Developer Edition), then you don't need to download or install the Express version.
####Software required on Windows to develop the Wafle library
* Download the [Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx) and run it.
 * Inside the Web Platform Installer, click the "Products" link at the top and select and install Visual Studio Express 2012 for Web (Latest) with its dependencies.  You have to register the software with Microsoft, but there is no charge.
* Download the latest [TypeScript plugin for Visual Studio](http://www.typescriptlang.org/) and install it.
* Download [GitHub for Windows](https://help.github.com/articles/set-up-git#platform-windows) and install it.  If you are not familiar with Git, the install page links to lots of great information for new users.
 * **Important:** _If you do not wish for your email address to be public in your commits, follow GitHub's instructions for [keeping your email address private](https://help.github.com/articles/keeping-your-email-address-private)._
* Download [Node.js](http://nodejs.org/) and install it.



####Software required on Windows to develop the Wafle.Data extract
* tbw
