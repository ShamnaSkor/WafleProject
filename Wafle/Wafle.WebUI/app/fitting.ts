import app = require('durandal/app');
import jquery = require('jquery');
import ko = require('knockout');
import Wafle = require('wafle');


class FittingTreeNodeViewModel {
    public self:any = this;
    public n = ko.observable<string>();
    public mgid = ko.observable<number>();
    public pgid = ko.observable<number>();
    public children = ko.observableArray<FittingTreeNodeViewModel>();

    constructor(public data: Wafle.IWafleMarketGroupDataItem) {
        this.n(data.n);
        this.mgid(data.mgid);
        this.pgid(data.pgid);
        this.children(ko.utils.arrayMap(data.children, function (c) {
            return new FittingTreeNodeViewModel(c);
        }));
    }
    
    public toggleTwistyCollapse = function (data, event) {
        console.log($(event.target.parentNode).html());
        $(event.target.parentNode).children("ul").children().toggleClass("twistyCollapse");
    }
}

function WafleMarketGroupItemRoot() {
    var rootFittingGroup: Wafle.IWafleMarketGroupDataItem = {
        n: "Fitting",
        mgid: 0,
        children: Wafle.Data.WafleRootMarketGroups()
    };
    
    return new FittingTreeNodeViewModel(rootFittingGroup);
}

return {
    wafleMarketGroupItemRoot: WafleMarketGroupItemRoot()  
};