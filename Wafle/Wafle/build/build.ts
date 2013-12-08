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
var wafleDone = false, wafleDataDone = false, wafleDevDone = false;
var wafleVersion = "";

console.log("Compiling Wafle TypeScript files...");
var tscProcess = exec('tsc --sourcemap --module amd --target ES5 --outDir "' + buildJSPath + '" "' + path.join(buildJSPath, '..', "wafleInterfaces.ts") + '" "' + path.join(buildJSPath, '..', "wafleCore.ts") + '" "' + path.join(buildJSPath, '..', "wafleData.ts") + '" "' + path.join(buildJSPath, '..', "wafleCuratedData.ts") + '"',tsCompileComplete);



function tsCompileComplete(error,stdout,stderr)
{
    if (error !== null) {
        console.log("Error compiling Wafle.");
        console.log(error);
        return;
    }
    
    console.log("Identifying Wafle library version...");
    //Imports Wafle.
    //This works in our case since the file is not in a CommonJS module format.  See: http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
    eval(fs.readFileSync(path.join(buildJSPath,'wafleCore.js')) + '');
    wafleVersion = Wafle.Version;

    console.log("Wafle version is: " + wafleVersion);

    var mainUglifyCommand = 'uglifyjs "' + path.join(buildJSPath, 'wafleCore.js') + '" "' + path.join(buildJSPath, 'wafleCuratedData.js') + '" -o ';

    console.log("Uglifying Wafle library (min)...");
    var uglifyWafle = exec(mainUglifyCommand + '"' + path.join(buildJSPath, 'wafle.min.js') + '" -m -c unused=false --comments --source-map="wafle.min.js.map" --source-map-url="/lib/wafle.min.js.map" ', uglifyWafleCallback);
    console.log("Uglifying Wafle library (dev)...");
    var uglifyWafle = exec(mainUglifyCommand + '"' + path.join(buildJSPath, 'wafle.dev.js') + '" -b --comments', uglifyWafleDevCallback);
    console.log("Uglifying Wafle Data file (min)...");
    var uglifyWafleData = exec('uglifyjs "' + path.join(buildJSPath, 'wafleData.js') + '" -o "' + path.join(buildJSPath,'wafleData.min.js') + '" --comments', uglifyWafleDataCallback);
}

function uglifyWafleCallback(error, stdout, stderr) {
    if (error !== null) {
        console.log("Error Uglifying Wafle.");
        console.log(error);
        return;
    }
    copyFileSync(path.join(buildJSPath, "wafle.min.js"), path.join(buildJSPath,"wafle-" + wafleVersion + ".min.js"));
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

var copyFileSync = function (srcFile: string, destFile: string) {
    var content = fs.readFileSync(srcFile);
    fs.writeFileSync(destFile, content);
}