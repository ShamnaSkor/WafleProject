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
        console.log('z');
        if ($) {
            console.log('jquery found');
        }
    }
};