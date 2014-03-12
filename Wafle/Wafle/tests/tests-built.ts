requirejs.config({
    paths: {
        "wafle": "./build/output/wafle.dev",
        "wafledata": "./build/output/wafleDataBlob",
        "tests": "tests/tests"
    },
    baseUrl: ".."
});

// A list of all QUnit test Modules.
var testModules = [
    "wafledata",
    "wafle",
    "tests"
];

// Resolve all testModules and then start the Test Runner.
requirejs(testModules, function (w, wd, testModule) {
    testModule.registerTests();
    QUnit.start();
});

