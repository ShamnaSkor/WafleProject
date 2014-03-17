import app = require('durandal/app');
import ko = require('knockout');
import kop = require('knockout.punches');
import Wafle = require('wafle');


kop; //todo: remove if TypeScript AMD issue is fixed.

ko.punches.enableAll();

return {
    name: Wafle.ProjectName,
    author: Wafle.AuthorName,
    webSite: Wafle.SourceWebSite,
    version: Wafle.VersionDescription,
    wafleVersion: Wafle.Version
};
