//Wafle build script
//usage on Windows is: node build\build.js
//todo: fix for non-Windows platforms.

var buildJSPath = __dirname;
console.log("Loading compilation dependencies...");
var fs = require("fs");
var exec = require("child_process").exec;
var spawn = require("child_process").spawn;
var wafleVersion = "";

console.log("Compiling Wafle TypeScript files...");

var tscProcess = exec('tsc --sourcemap -t ES5 --outDir build "' + buildJSPath + '\wafleInterfaces.ts" "' + buildJSPath + '\wafleCore.ts" "' + buildJSPath + '\wafleData.ts" "' + buildJSPath + '\wafleCuratedData.ts"',tsCompileComplete);

var wafleDone = false, wafleDataDone = false;

function tsCompileComplete(error,stdout,stderr)
{
    
    console.log("Identifying Wafle library version...");
    //Imports Wafle.
    //This works in our case since the file is not in a CommonJS module format.  See: http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
    eval(fs.readFileSync(buildJSPath + '//wafleCore.js') + '');
    wafleVersion = Wafle.Version;

    console.log("Wafle version is: " + wafleVersion);

    console.log("Uglifying Wafle library...");
    var uglifyWafle = exec('uglifyjs "' + buildJSPath + '//wafleCore.js" "' + buildJSPath + '//wafleCuratedData.js" -o "' + buildJSPath + '//wafle.min.js" -m -c unused=false --comments', uglifyWafleCallback);
    console.log("Uglifying Wafle Data file...");
    var uglifyWafleData = exec('uglifyjs "' + buildJSPath + '//wafleData.js" -o "' + buildJSPath + '//wafleData.min.js" --comments', uglifyWafleDataCallback);
}

function uglifyWafleCallback(error, stdout, stderr) {
    copyFileSync(buildJSPath + "//wafle.min.js", buildJSPath + "//wafle-" + wafleVersion + ".min.js");
    wafleDone = true;
    checkAllDone();
}

function uglifyWafleDataCallback(error, stdout, stderr) {
    copyFileSync(buildJSPath + "//wafleData.min.js", buildJSPath + "//wafleData-" + wafleVersion + ".min.js");
    wafleDataDone = true;
    checkAllDone();
}

var checkAllDone = function () {
    if (wafleDone && wafleDataDone) {
        console.log("All done.");
    }
}

var copyFileSync = function (srcFile: string, destFile: string) {
    var content = fs.readFileSync(srcFile);
    fs.writeFileSync(destFile, content);
}