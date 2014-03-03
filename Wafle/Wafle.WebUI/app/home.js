define(["require", "exports", 'durandal/app', 'knockout'], function(require, exports, app, ko) {
    return {
        name: ko.observable(),
        sayHello: function () {
            app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
        }
    };
});
//# sourceMappingURL=home.js.map
