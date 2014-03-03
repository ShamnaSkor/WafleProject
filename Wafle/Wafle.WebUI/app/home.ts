import app = require('durandal/app');
import ko = require('knockout');

return {
    name: ko.observable(),
    sayHello: function () {
        app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
    }
};
