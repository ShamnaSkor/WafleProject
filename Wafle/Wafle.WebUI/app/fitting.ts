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
        addRootWafleItemsToTwisty();
        $("div.twistyMenu li span").click((eventObject) => {
            var parent = (<Node>(eventObject.target)).parentNode;
            $(parent).find("li").toggleClass("twistyCollapse");
        });
    }
};




function addRootWafleItemsToTwisty() {
    var rootMGs = Wafle.Data.WafleRootMarketGroups();
    var htmlBuffer: string[] = [];
    for (var i = 0; i < rootMGs.length; i++) {
        htmlBuffer.push("<li><span>" + rootMGs[i].n + "</span><ul><li class='twistyCollapse'><span>item</span></li></ul></li>");
    }
    $("div.twistyMenu ul").append(htmlBuffer.join("\n"));
}
