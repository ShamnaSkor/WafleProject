import app = require('durandal/app');
import jquery = require('jquery');
import ko = require('knockout');
import kop = require('knockout.punches');
import Wafle = require('wafle');


kop; //todo: remove if TypeScript AMD issue is fixed.

ko.punches.enableAll();

return {
    activate: function () {
        var that = this;
    },
    attached: function () {
        $("div.twistyMenu li span").click((eventObject) => {
            var parent = (<Node>(eventObject.target)).parentNode;
            $(parent).find("li").toggleClass("twistyCollapse");
        });
    }
};