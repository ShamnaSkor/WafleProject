/// <reference path="..\..\Wafle\wafle.ts" />
define(["require", "exports", 'knockout', 'knockout.punches', 'wafle'], function(require, exports, ko, kop, Wafle) {
    kop; //todo: remove if TypeScript AMD issue is fixed.

    ko.punches.enableAll();

    return {
        name: "WAFLE Project",
        author: "Shamna Skor",
        webSite: "https://github.com/ShamnaSkor/WafleProject",
        version: "Pre Alpha",
        wafleVersion: Wafle.Version
    };
});
//# sourceMappingURL=about.js.map
