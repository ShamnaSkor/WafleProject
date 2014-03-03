import system = require('durandal/system');
import app = require('durandal/app');

system.debug(true);

app.title = 'Durandal Starter Kit';
app.configurePlugins({
    router: true,
    dialog: true
})

app.start().then(() => {
    app.setRoot('shell');
});
