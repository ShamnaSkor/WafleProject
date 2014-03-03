import router = require('plugins/router');

return {
    router: router,
    activate: function () {
        router.map([
            { route: '', title: 'Home', moduleId: 'home', nav: true },
            { route: 'about', title: 'About', moduleId: 'about', nav: true }
        ]).buildNavigationModel();
        return router.activate();
    }
};
