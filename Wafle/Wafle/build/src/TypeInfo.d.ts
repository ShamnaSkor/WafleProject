import Wafle = require("../wafle");
declare class TypeInfo implements Wafle.ITypeInfo {
    public typeId: number;
    public groupId: number;
    constructor(typeId: number, groupId?: number);
    public FindOwnGroupId(): void;
    /** Give a second shot to see if the data variable has loaded. */
    private static AllWafleTypeInventoryData();
    /** returns a new TypeInfo object based on the name of the type */
    static TypeInfoByTypeId(typeId: number): Wafle.TypeInfo;
    /** returns a new TypeInfo object based on the name of the type */
    static TypeInfoByName(name: string): Wafle.TypeInfo;
    /** returns a new type attribute property bag based on the passed parameters */
    static GetTypeAttributes(typeId: number, groupId: number): Wafle.IEveInventoryTypeAttributes;
    /** Returns the index of the groupId in the array or -1 if the groupId is not found. */
    static groupIndex(groupId: number): number;
    static FindNamedTypesByGroup(theGroupId: number): Wafle.INamedType[];
}
export = TypeInfo;
