requirejs.config({
    paths: {
        "wafle": "wafle",
        "tests": "tests/tests"
    },
    baseUrl: ".."
});

// A list of all QUnit test Modules.
var testModules = [
    "wafle",
    "tests"
];

// Resolve all testModules and then start the Test Runner.
requirejs(testModules, function (w, testModule) {
    testModule.registerTests();
    QUnit.start();
});

