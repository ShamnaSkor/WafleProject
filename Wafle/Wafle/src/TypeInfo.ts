import Wafle = require("../wafle");

declare var WAFLE_DATA_BLOB_INVENTORY_TYPES_BY_GROUP;

class TypeInfo implements Wafle.ITypeInfo {
    public typeId: number;
    public groupId: number;
    constructor(typeId: number, groupId?: number) {
        this.typeId = typeId;
        if (groupId === undefined) {
            this.FindOwnGroupId();
        } else {
            this.groupId = groupId;
        }
    }

    public FindOwnGroupId(): void {
        if (this.groupId && this.groupId > 0) {
            return;
        }
        this.groupId = TypeInfo.TypeInfoByTypeId(this.typeId).groupId;
    }

    /** returns a new TypeInfo object based on the name of the type */
    public static TypeInfoByTypeId(typeId: number): TypeInfo {
        var t = Wafle.Data.Types;
        for (var groupIndex = 0; groupIndex < t.length; groupIndex++) {
            var g = t[groupIndex], groupTypes = g.gts;
            for (var typeIndex = 0; typeIndex < groupTypes.length; typeIndex++) {
                if (groupTypes[typeIndex].id === typeId) {
                    return new TypeInfo(groupTypes[typeIndex].id, t[groupIndex].gid);
                }
            }
        }
        return null;
    }

    /** returns a new TypeInfo object based on the name of the type */
    public static TypeInfoByName(name: string): TypeInfo {
        var t = Wafle.Data.Types;
        for (var groupIndex = 0; groupIndex < t.length; groupIndex++) {
            var g = t[groupIndex], groupTypes = g.gts;
            for (var typeIndex = 0; typeIndex < groupTypes.length; typeIndex++) {
                if (groupTypes[typeIndex].n === name) {
                    return new TypeInfo(groupTypes[typeIndex].id, t[groupIndex].gid);
                }
            }
        }
        return null;
    }

    /** returns a new type attribute property bag based on the passed parameters */
    public static GetTypeAttributes(typeId: number, groupId: number): Wafle.IEveInventoryTypeAttributes {
        var t = Wafle.Data.Types;
        for (var groupIndex = 0; groupIndex < t.length; groupIndex++) {
            if (t[groupIndex].gid === groupId) {
                var g = t[groupIndex], groupTypes = g.gts;
                for (var typeIndex = 0; typeIndex < groupTypes.length; typeIndex++) {
                    if (groupTypes[typeIndex].id === typeId) {
                        return groupTypes[typeIndex];
                    }
                }
            }
        }
        return null;
    }

    /** Returns the index of the groupId in the array or -1 if the groupId is not found. */
    public static groupIndex(groupId: number): number {
        var t = Wafle.Data.Types;
        for (var groupIndex = 0; groupIndex < t.length; groupIndex++) {
            if (t[groupIndex].gid === groupId) {
                return groupIndex;
            }
        }
        return -1;
    }

}
export = TypeInfo;