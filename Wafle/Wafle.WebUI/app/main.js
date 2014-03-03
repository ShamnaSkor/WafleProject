define(["require", "exports", 'durandal/system', 'durandal/app'], function(require, exports, system, app) {
    system.debug(true);

    app.title = 'Durandal Starter Kit';
    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        app.setRoot('shell');
    });
});
//# sourceMappingURL=main.js.map
