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
var wafleVersion: string;

//Imports Wafle data.
//See: http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
eval(fs.readFileSync(path.join(buildJSPath, '../wafleDataBlob.js')) + '');

console.log("Loading Require...");
var requirejsForBuild = require('requirejs');
var requirejsForVersion = require('requirejs');

requirejsForBuild.config({
    nodeRequire: require,
    enforceDefine: true
});

requirejsForVersion.config({
    nodeRequire: require,
    enforceDefine: true,
    baseUrl: path.join(buildJSPath, 'output')
});


var filesToCompile: string[] = ["wafle",
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


var WafleInitialCompileStep = function () {

    var tsFilesToCompile: string[] = [];

    //fix all of the relative paths...
    for (var i = 0; i < filesToCompile.length; i++) {
        tsFilesToCompile.push('"' + path.join(buildJSPath, "..", filesToCompile[i]) + '.ts"');
    }

    var TSC_BASE_COMMAND_LINE = 'tsc --sourcemap --declaration --module amd --target ES5 ';

    var basicBuildCommandLine = TSC_BASE_COMMAND_LINE + '--outDir "' + path.join(buildJSPath, "output") + '" ' + tsFilesToCompile.join(" ");

    console.log("Compile command line: " + basicBuildCommandLine);

    console.log("Compiling TypeScript files individually...");
    var tscProcess = exec(basicBuildCommandLine, tsCompileComplete);
};


var tsCompileComplete = function (error, stdout, stderr) {
    if (error !== null) {
        console.log("Error compiling Wafle.");
        console.log(error);
        return;
    }

    console.log("Copying data blob to build folder...");
    copyFileSync(path.join(buildJSPath, "../wafleDataBlob.js"), path.join(buildJSPath, "output/wafleDataBlob.js"));

    DetermineWafleVersion();

};

var OptimizeStep = function () {
    var requireOptimizeConfig = {
        baseUrl: path.join(buildJSPath, "output"),
        name: 'wafle',
        out: path.join(buildJSPath, 'output/wafle.dev.js')
    };

    copyDefinitionFilesToBuildSubfolder(filesToCompile, buildJSPath);

    requirejsForBuild.optimize(requireOptimizeConfig, function (buildResponse) {
        console.log("Optimized JS script written to disk: " + requireOptimizeConfig.out);
        UglificationStep();
    }, function (err) {
            console.log("Error calling optimize: " + err);
        });
}

var DetermineWafleVersion = function () {
    requirejsForVersion(['wafle'],
        function (w) {
            console.log(w);
            wafleVersion = w.Wafle.Version;
            console.log("Wafle library version is: " + wafleVersion);
            OptimizeStep();
        }, function (err) {
            console.log("error loading newly compiled Wafle library...");
            console.log(err.requireModules);
            console.log(err.requireType);
        });
};

var UglificationStep = function () {
    var mainUglifyCommand = 'uglifyjs "' + path.join(buildJSPath, 'output/wafle.dev.js') + '" -o ';

    console.log("Uglifying Wafle library (min)...");
    var uglifyWafle = exec(mainUglifyCommand + '"' + path.join(buildJSPath, 'output/wafle.min.js') + '" -m -c unused=false --comments --source-map="' + path.join(buildJSPath, 'output/wafle.min.js.map') + '" --source-map-url="/lib/wafle.min.js.map" ', uglifyWafleCallback);
    console.log("Uglifying Wafle Data file (min)...");
    var uglifyWafleData = exec('uglifyjs "' + path.join(buildJSPath, 'output/wafleDataBlob.js') + '" -m -o "' + path.join(buildJSPath, 'output/wafleData.min.js') + '" --comments', uglifyWafleDataCallback);
};


var copyDefinitionFilesToBuildSubfolder = (filesToCompile: string[], buildJSPath: string): void => {
    console.log("Copying definition files to build folder...");
};


var uglifyWafleCallback = function (error, stdout, stderr) {
    if (error !== null) {
        console.log("Error Uglifying Wafle.");
        console.log(error);
        return;
    }
    copyFileSync(path.join(buildJSPath, "output/wafle.min.js"), path.join(buildJSPath, "output/wafle-" + wafleVersion + ".min.js"));
    wafleDone = true;
    reportAndCheckAllDone("Wafle (min)");
};

var uglifyWafleDataCallback = function (error, stdout, stderr) {
    if (error !== null) {
        console.log("Error Uglifying WafleData.");
        console.log(error);
        return;
    }
    copyFileSync(path.join(buildJSPath, "output/wafleData.min.js"), path.join(buildJSPath, "output/wafleData-" + wafleVersion + ".min.js"));
    wafleDataDone = true;
    reportAndCheckAllDone("Wafle Data");
};

var reportAndCheckAllDone = function (theLibraryName) {
    console.log("Finished uglifying " + theLibraryName);
    if (wafleDone && wafleDataDone) {
        console.log("All done.");
    }
};

var copyFileSync = (srcFile: string, destFile: string) => {
    var content = fs.readFileSync(srcFile);
    fs.writeFileSync(destFile, content);
};

WafleInitialCompileStep();