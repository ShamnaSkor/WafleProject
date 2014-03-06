requirejs.config({
    paths: {
        //"qunit": "lib/qunit/qunit-1.14.0",
        "wafle": "wafle",
        "wafledata": "wafleDataBlob",
        "tests": "tests/tests"
    },
    baseUrl: ".."
});

// A list of all QUnit test Modules.
var testModules = [
    //"qunit",
    "wafledata",
    "wafle",
    "tests"
];

// Resolve all testModules and then start the Test Runner.
//requirejs(["qunit"], function () {
//    QUnit.config.autostart = false;
//    QUnit.begin(() => {
//        console.log("beginning test now.");
//    })
//});

// Resolve all testModules and then start the Test Runner.
requirejs(testModules, function (w, wd, testModule) {
    //QUnit.reset();
    testModule.registerTests();
    QUnit.start();
});

