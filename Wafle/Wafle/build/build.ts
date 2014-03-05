//Wafle build script
//usage on Windows is: node build\build.js
//todo: fix for non-Windows platforms.
//For help setting up your environment, visit https://github.com/ShamnaSkor/WafleProject/wiki/Setting-up-a-development-environment-on-windows



var buildJSPath = __dirname;
console.log("Loading compilation dependencies...");
var fs = require("fs");
var exec = require("child_process").exec;
var spawn = require("child_process").spawn;
var path = require("path");

//Imports Wafle data.
//See: http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
eval(fs.readFileSync(path.join(buildJSPath, '../wafleDataBlob.js')) + '');

console.log("Loading Require...");
var requirejsForBuild = require('requirejs');


requirejsForBuild.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejsForBuild(['../wafle'],
    function (wafle) {

        var wafleDone = false, wafleDataDone = false, wafleDevDone = false;

        var wafleVersion: string = wafle.Version;

        console.log("Identifying Wafle library version...");

        console.log("Wafle version is: " + wafleVersion);

        console.log("Compiling Wafle TypeScript files...");

        var filesToCompile : string[] = ["wafle",
            "/src/BaseShipData",
            "/src/CpuFormulas",
            "/src/CuratedData",
            "/src/FittingSlot",
            "/src/InventoryTypeAttributes",
            "/src/Pilot",
            "/src/PowergridFormulas",
            "/src/Resistance",
            "/src/ResistSet",
            "/src/Ship",
            "/src/Skills",
            "/src/TypeInfo",
        ];

        var tsFilesToCompile : string[] = [];

        //fix all of the relative paths...
        for (var i = 0; i < filesToCompile.length; i++) {
            tsFilesToCompile.push('"' + path.join(buildJSPath, "..", filesToCompile[i]) + '.ts"');
        }


        var tscCompileCommandLine = 'tsc --sourcemap --module amd --target ES5 --outDir "' + buildJSPath + '" ' + tsFilesToCompile.join(" ");
        console.log("Compile command line: " + tscCompileCommandLine);

        var tscProcess = exec(tscCompileCommandLine, tsCompileComplete);

        function tsCompileComplete(error, stdout, stderr) {
            if (error !== null) {
                console.log("Error compiling Wafle.");
                console.log(error);
                return;
            }

            var jsFilesToUglify: string[] = [];

            //fix all of the relative paths...
            for (var i = 0; i < filesToCompile.length; i++) {
                jsFilesToUglify.push('"' + path.join(buildJSPath, filesToCompile[i]) + '.js"');
            }

            var config = {
                baseUrl: buildJSPath,
                name: 'wafle',
                out: path.join(buildJSPath,'wafle.dev.js')
            };

            requirejsForBuild.optimize(config, function (buildResponse) {
                //buildResponse is just a text output of the modules
                //included. Load the built file for the contents.
                //Use config.out to get the optimized file contents.
                console.log("optimize succeeded.");
                var contents = fs.readFileSync(config.out, 'utf8');
            }, function (err) {
                //optimization err callback
                console.log("error calling optimize: " + err);
            });

            //var mainUglifyCommand = 'uglifyjs ' + jsFilesToUglify.join(" ") + ' -o ';

            //console.log("Uglifying Wafle library (min)...");
            //var uglifyWafle = exec(mainUglifyCommand + '"' + path.join(buildJSPath, 'wafle.min.js') + '" -m -c unused=false --comments --source-map="wafle.min.js.map" --source-map-url="/lib/wafle.min.js.map" ', uglifyWafleCallback);
            //console.log("Uglifying Wafle library (dev)...");
            //var uglifyWafle = exec(mainUglifyCommand + '"' + path.join(buildJSPath, 'wafle.dev.js') + '" -b --comments', uglifyWafleDevCallback);
            //console.log("Uglifying Wafle Data file (min)...");
            //var uglifyWafleData = exec('uglifyjs "' + path.join(buildJSPath, '../wafleDataBlob.js') + '" -o "' + path.join(buildJSPath, 'wafleData.min.js') + '" --comments', uglifyWafleDataCallback);

        }

        function uglifyWafleCallback(error, stdout, stderr) {
            if (error !== null) {
                console.log("Error Uglifying Wafle.");
                console.log(error);
                return;
            }
            copyFileSync(path.join(buildJSPath, "wafle.min.js"), path.join(buildJSPath, "wafle-" + wafleVersion + ".min.js"));
            wafleDone = true;
            reportAndCheckAllDone("Wafle (min)");
        }


        function uglifyWafleDevCallback(error, stdout, stderr) {
            if (error !== null) {
                console.log("Error Uglifying Wafle Dev.");
                console.log(error);
                return;
            }
            copyFileSync(path.join(buildJSPath, "wafle.dev.js"), path.join(buildJSPath, "wafle-" + wafleVersion + ".js"));
            wafleDevDone = true;
            reportAndCheckAllDone("Wafle (dev)");
        }

        function uglifyWafleDataCallback(error, stdout, stderr) {
            if (error !== null) {
                console.log("Error Uglifying WafleData.");
                console.log(error);
                return;
            }
            copyFileSync(path.join(buildJSPath, "wafleData.min.js"), path.join(buildJSPath, "wafleData-" + wafleVersion + ".min.js"));
            wafleDataDone = true;
            reportAndCheckAllDone("Wafle Data");
        }

        var reportAndCheckAllDone = function (theLibraryName) {
            console.log("Finished uglifying " + theLibraryName);
            if (wafleDone && wafleDataDone && wafleDevDone) {
                console.log("All done.");
            }
        }

    });


var copyFileSync = function (srcFile: string, destFile: string) {
    var content = fs.readFileSync(srcFile);
    fs.writeFileSync(destFile, content);
}