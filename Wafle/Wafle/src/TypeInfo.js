define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    var TypeInfo = (function () {
        function TypeInfo(typeId, groupId) {
            this.typeId = typeId;
            if (groupId === undefined) {
                this.FindGroupId();
            } else {
                this.groupId = groupId;
            }
        }
        TypeInfo.prototype.FindGroupId = function () {
            this.groupId = Wafle.Data.TypeToGroupIDMapping[this.typeId.toString()];
        };
        return TypeInfo;
    })();
    
    return TypeInfo;
});
//# sourceMappingURL=TypeInfo.js.map
