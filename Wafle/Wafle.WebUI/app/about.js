define(["require", "exports", 'knockout', 'knockout.punches', 'wafle'], function(require, exports, ko, kop, Wafle) {
    kop; //todo: remove if TypeScript AMD issue is fixed.

    ko.punches.enableAll();

    return {
        name: Wafle.ProjectName,
        author: Wafle.AuthorName,
        webSite: Wafle.SourceWebSite,
        version: Wafle.VersionDescription,
        wafleVersion: Wafle.Version
    };
});
//# sourceMappingURL=about.js.map
