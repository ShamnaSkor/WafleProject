import Wafle = require("wafle");

declare module WafleDataBlob {
    export var WAFLE_DATA_BLOB_INVENTORY_TYPES_BY_GROUP: Wafle.IWafleTypeDataBlob;
    export var WAFLE_DATA_BLOB_MARKET_GROUPS: Wafle.IWafleMarketGroupDataBlob;
}

export = WafleDataBlob;