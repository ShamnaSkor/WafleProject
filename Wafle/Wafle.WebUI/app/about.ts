import app = require('durandal/app');
import ko = require('knockout');
import kop = require('knockout.punches');
//import Wafle = require('../../Wafle/build/output/wafle.d.ts');
//import Wafle = require('../../Wafle/wafle.ts');
import Wafle = require('../../Wafle/wafle');



kop; //todo: remove if TypeScript AMD issue is fixed.

ko.punches.enableAll();

return {
    name: "WAFLE Project",
    author: "Shamna Skor",
    webSite: "https://github.com/ShamnaSkor/WafleProject",
    version: "Pre Alpha",
    wafleVersion: Wafle.Version
};
