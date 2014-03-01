///<reference path="Scripts/typings/node/node.d.ts"/>

var currentScriptPath = __dirname;

var fs = require('fs');
var AdmZip = require('adm-zip');

if (process.argv.length !== 3) {
    console.log("Usage: node ExtractTypes FilePathToTypesZip");
    console.log("Example: node ExtractTypes c:\\downloads\\Rubicon_1.1_Types.zip");
    process.exit(1);
}

console.log("This process may take a few minutes...");
var zip = new AdmZip(process.argv[2]);
console.log("Processing the archive " + process.argv[2]);
var zipEntries = zip.getEntries();
console.log("Unzipping...");
var outputLocation = currentScriptPath + '\\..\\Wafle.WebUI';
zip.extractAllTo(outputLocation, true); 
