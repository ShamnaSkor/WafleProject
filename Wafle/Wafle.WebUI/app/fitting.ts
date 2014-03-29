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
    public childrenLoaded = ko.observable<boolean>();

    constructor(public data: Wafle.IWafleMarketGroupOrTypeDataItem) {
        this.n(data.n);
        this.mgid(data.mgid);
        this.pgid(data.pgid);
        this.childrenLoaded(data.childrenLoaded);
        this.children(ko.utils.arrayMap(data.children, function (c) {
            return new FittingTreeNodeViewModel(c);
        }));
    }
    
    public toggleTwistyCollapse = function (d, event) {
        if (this.data && this.children) {
            for (var i = 0; i < this.children().length; i++) {
                if (this.children()[i].childrenLoaded() === false) {
                    var childItems = (<any>(Wafle.Data.LoadChildMarketGroupsOrTypes(this.children()[i], 0))).children();
                    for (var childItemIndex = 0; childItemIndex < childItems.length; childItemIndex++) {
                        this.children()[i].children().push(new FittingTreeNodeViewModel(childItems[childItemIndex]));
                    }
                    this.children()[i].childrenLoaded(true);
                }
            }
        }
        $(event.target.parentNode).children("ul").children().toggleClass("twistyCollapse");
    }
}

function WafleMarketGroupItemRoot() {
    var rootFittingGroup: Wafle.IWafleMarketGroupOrTypeDataItem = {
        n: "Fitting",
        mgid: 0,
        children: Wafle.Data.WafleRootMarketGroups(),
        type: "",
        childrenLoaded: true
    };
    
    return new FittingTreeNodeViewModel(rootFittingGroup);
}

return {
    wafleMarketGroupItemRoot: WafleMarketGroupItemRoot()  
};