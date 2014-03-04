import app = require('durandal/app');
import ko = require('knockout');
import kop = require('knockout/punches');


ko.punches.enableAll();

return {
    name: "WAFLE Project",
    author: "Shamna Skor",
    webSite: "https://github.com/ShamnaSkor/WafleProject",
    version: "Pre Alpha"
    /*
    router: router,
    activate: function () {
        router.map([
            { route: '', title: 'Home', moduleId: 'home', nav: true },
            { route: 'about', title: 'About', moduleId: 'about', nav: true }
        ]).buildNavigationModel();
        return router.activate();
    }
*/
};
