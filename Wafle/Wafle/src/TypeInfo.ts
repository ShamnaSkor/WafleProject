import Wafle = require("../wafle");

class TypeInfo implements Wafle.ITypeInfo {
    public typeId: number;
    public groupId: number;
    constructor(typeId: number, groupId?: number) {
        this.typeId = typeId;
        if (groupId === undefined) {
            this.FindGroupId();
        } else {
            this.groupId = groupId;
        }
    }
    public FindGroupId(): void {
        this.groupId = Wafle.Data.TypeToGroupIDMapping[this.typeId.toString()];
    }
}
export = TypeInfo;