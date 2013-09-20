///<reference path="Scripts/typings/node/node.d.ts"/>
///<reference path="../Wafle/wafle.ts"/>

class StringBuilder {
    //StringBuilder code converted to TypeScript using code from http://www.codeproject.com/Articles/12375/JavaScript-StringBuilder

    public strings = new Array("");
    constructor(value?: string) {
        this.append(value);
    }
    public append(value: string) {
        if (value) {
            this.strings.push(value);
        }
    }
    public clear() {
        this.strings.length = 1;
    }
    public toString() {
        return this.strings.join("");
    }
}

var currentScriptPath = __dirname;

var fs = require('fs');
try {
    var sql = require('msnodesql');
}
catch (ex) {
    console.log(ex);
    console.log("Error: Unable to initialize msnodesql library.");
    console.log("Run WafleProject\\utils\\FetchMsNodeSql.ps1 from the GitHub Shell (PowerShell)");
    console.log("   prompt to obtain the bits.");
    process.exit(1);
}


var MarketGroupIDs = [25, 46, 38, 52, 53, 55, 59, 60, 62, 65, 68, 71, 74, 77, 83, 85, 86, 98, 205,
    302, 325, 329, 339, 367, 372, 373, 374, 375, 376, 377, 379, 384, 385, 387, 395, 507, 509, 510,
    511, 648, 653, 654, 655, 763, 771, 772, 773, 774, 782];


if (process.argv.length !== 4 ) {
    console.log("Usage: node WafleDataExtract SQLServerAndInstance DBName");
    console.log("Example: node WafleDataExtract (local)\\SQLExpress Odyssey11");
    process.exit(1);
}


var outputCodeFile = currentScriptPath + '\\..\\Wafle\\wafleData.ts'
var connectionString = "Driver={SQL Server Native Client 11.0};Server={" + process.argv[2] + "};Database={" + process.argv[3] + "};Trusted_Connection={Yes};";

var buffer = new StringBuilder();

buffer.append("/*@license\n\n");
buffer.append('  This data was extracted from the EVE Community Toolkit: http://community.eveonline.com/community/fansites/toolkit/\n\n');
buffer.append('  Extracted data is (c) 2013 CCP hf.  All rights reserved. "EVE", "EVE Online", "CCP", and all related logos and images are trademarks or registered trademarks of CCP hf.\n\n');
buffer.append('  All uses of this software must comply with the EVE EULA: http://community.eveonline.com/support/policies/eve-eula/\n\n');
buffer.append('*/\n\n');
buffer.append("///<reference path=\"wafle.ts\"/>\n\n");
buffer.append("module Wafle.Data {\n");
buffer.append('    export var Types: Wafle.IEveInventoryGroupMap = { \n');

console.log("Connecting to SQL Server...");
sql.open(connectionString, function (err, conn) {

    //Dear future code reviewer: this SQL statement is a great example of the type of code that is only OK to write
    // when you are developing a data extract script that runs from time to time off a development server.
    var sqlQuery = "With BaseShipEquipData (typeId, groupId, name, marketGroupId, parentMarketGroupId, raceId, description)  AS \n" +
        "	(SELECT it.typeID, it.groupID, it.typeName, it.marketGroupID, parentGroupID, it.raceID, it.description \n" +
        "		FROM dbo.invTypes it \n" +
        "		INNER JOIN dbo.invMarketGroups mg ON mg.marketGroupID = it.marketGroupID \n" +
        "		WHERE it.groupID IN (" + MarketGroupIDs.join(',') + ") and it.published = 1) \n" +
        "SELECT bse.typeId, bse.groupId, bse.name, bse.marketGroupId, bse.parentMarketGroupId, bse.raceId, bse.description, \n" +
        "	ISNULL(cpu.valueFloat,cpu.valueInt) as [cpu], \n" +
        "	ISNULL(pg.valueFloat,pg.valueInt) as [powergrid], \n" +
        "	ISNULL(pginc.valueFloat,pginc.valueInt) as [powergridIncrease], \n" +
        "	COALESCE(mta.valueFloat,mta.valueInt,0) as [metalevel], \n" +
        "	COALESCE(opt.valueFloat,opt.valueInt,edr.valueFloat,edr.valueInt,ptrr.valueFloat,ptrr.valueInt) as [optimal], \n" +
        "	ISNULL(acc.valueFloat,acc.valueInt) as [accuracyFalloff], \n" +
        "	ISNULL(rof.valueFloat,rof.valueInt) as [rateOfFire], \n" +
        "	ISNULL(rofm.valueFloat,rofm.valueInt) as [rateOfFireMultiplier], \n" +
        "	ISNULL(trk.valueFloat,trk.valueInt) as [trackingSpeed], \n" +
        "	ISNULL(dmg.valueFloat,dmg.valueInt) as [damageModifier], \n" +
        "	ISNULL(spd.valueFloat,spd.valueInt) as [speedFactor], \n" +
        "	ISNULL(srb.valueFloat,srb.valueInt) as [signatureRadiusBonus], \n" +
        "	ISNULL(sra.valueFloat,sra.valueInt) as [signatureRadiusIncreaseAmount], \n" +
        "	ISNULL(ahp.valueFloat,ahp.valueInt) as [armorHPBonusAdd], \n" +
        "	ISNULL(shp.valueFloat,shp.valueInt) as [shieldHPBonusAdd], \n" +
        "	ISNULL(capn.valueFloat,capn.valueInt) as [capacitorNeed], \n" +
        "	ISNULL(tl.valueFloat,tl.valueInt) as [techLevel], \n" +
        "	ISNULL(aemr.valueFloat,aemr.valueInt) as [armorEmDamageResonance], \n" +
        "	ISNULL(aexr.valueFloat,aexr.valueInt) as [armorExplosiveDamageResonance], \n" +
        "	ISNULL(akir.valueFloat,akir.valueInt) as [armorKineticDamageResonance], \n" +
        "	ISNULL(athr.valueFloat,athr.valueInt) as [armorThermalDamageResonance], \n" +
        "	ISNULL(semr.valueFloat,semr.valueInt) as [shieldEmDamageResonance], \n" +
        "	ISNULL(sexr.valueFloat,sexr.valueInt) as [shieldExplosiveDamageResonance], \n" +
        "	ISNULL(skir.valueFloat,skir.valueInt) as [shieldKineticDamageResonance], \n" +
        "	ISNULL(sthr.valueFloat,sthr.valueInt) as [shieldThermalDamageResonance], \n" +
        "	COALESCE(hemr2.valueFloat,hemr2.valueInt,hemr.valueFloat,hemr.valueInt) as [hullEmDamageResonance], \n" +
        "	COALESCE(hexr2.valueFloat,hexr2.valueInt,hexr.valueFloat,hexr.valueInt) as [hullExplosiveDamageResonance], \n" +
        "	COALESCE(hkir2.valueFloat,hkir2.valueInt,hkir.valueFloat,hkir.valueInt) as [hullKineticDamageResonance], \n" +
        "	COALESCE(hthr2.valueFloat,hthr2.valueInt,hthr.valueFloat,hthr.valueInt) as [hullThermalDamageResonance], \n" +
        "	ISNULL(pgo.valueFloat,pgo.valueInt) as [powerGridOutput], \n" +
        "	ISNULL(cpuo.valueFloat,cpuo.valueInt) as [cpuOutput], \n" +
        "	ISNULL(shhp.valueFloat,shhp.valueInt) as [shipHullHP], \n" +
        "	ISNULL(sshp.valueFloat,sshp.valueInt) as [shipShieldHP], \n" +
        "	ISNULL(sahp.valueFloat,sahp.valueInt) as [shipArmorHP], \n" +
        "	ISNULL(lsc.valueFloat,lsc.valueInt) as [lowSlotCount], \n" +
        "	ISNULL(msc.valueFloat,msc.valueInt) as [midSlotCount], \n" +
        "	ISNULL(hsc.valueFloat,hsc.valueInt) as [highSlotCount], \n" +
        "	ISNULL(rsc.valueFloat,rsc.valueInt) as [rigSlotCount], \n" +
        "	ISNULL(rgsz.valueFloat,rgsz.valueInt) as [rigSize], \n" +
        "	ISNULL(calb.valueFloat,calb.valueInt) as [calibration], \n" +
        "	ISNULL(lasc.valueFloat,lasc.valueInt) as [launcherSlotCount], \n" +
        "	ISNULL(tusc.valueFloat,tusc.valueInt) as [turretSlotCount], \n" +
        "	ISNULL(sshpm.valueFloat,sshpm.valueInt) as [shipHullHPMultiplier], \n" +
        "	ISNULL(agim.valueFloat,agim.valueInt) as [agilityMultiplier], \n" +
        "	ISNULL(velm.valueFloat,velm.valueInt) as [velocityMultiplier], \n" +
        "	ISNULL(vel.valueFloat,vel.valueInt) as [maxVelocity], \n" +
        "	COALESCE(ahpbp.valueFloat,ahpbp.valueInt, (ahpbm.valueFloat-1.0)*100.0, (ahpbm.valueInt-1.0)*100.0)  as [armorHpBonusPercent], \n" +
        "	ISNULL(emdrb.valueFloat,emdrb.valueInt) as [emDamageResistanceBonus], \n" +
        "	ISNULL(exdrb.valueFloat,exdrb.valueInt) as [explosiveDamageResistanceBonus], \n" +
        "	ISNULL(kidrb.valueFloat,kidrb.valueInt) as [kineticDamageResistanceBonus], \n" +
        "	ISNULL(thdrb.valueFloat,thdrb.valueInt) as [thermalDamageResistanceBonus], \n" +
        "	ISNULL(calbc.valueFloat,calbc.valueInt) as [calibrationCost], \n" +
        "	ISNULL(drwbk.valueFloat,drwbk.valueInt) as [drawback], \n" +
        "	ISNULL(ad.valueFloat,ad.valueInt) as [activationDuration], \n" +
        "	ISNULL(ahpr.valueFloat,ahpr.valueInt) as [armorHPRepaired], \n" +
        "	ISNULL(emd.valueFloat,emd.valueInt) as [emDamage], \n" +
        "	ISNULL(exd.valueFloat,exd.valueInt) as [explosiveDamage], \n" +
        "	ISNULL(kid.valueFloat,kid.valueInt) as [kineticDamage], \n" +
        "	ISNULL(thd.valueFloat,thd.valueInt) as [thermalDamage], \n" +
        "	ISNULL(wrm.valueFloat,wrm.valueInt) as [weaponRangeMultiplier], \n" +
        "	ISNULL(midm.valueFloat,midm.valueInt) as [missileDamageMultiplier], \n" +
        "	ISNULL(cs.valueFloat,cs.valueInt) as [chargeSize], \n" +
        "	ISNULL(lg.valueFloat,lg.valueInt) as [launcherGroup], \n" +
        "	ISNULL(tsm.valueFloat,tsm.valueInt) as [trackingSpeedMultiplier], \n" +
        "	ISNULL(fom.valueFloat,fom.valueInt) as [falloffMultiplier], \n" +
        "	ISNULL(eda.valueFloat,eda.valueInt) as [energyDestabilizationAmount], \n" +
        "	ISNULL(pta.valueFloat,pta.valueInt) as [powerTransferAmount] \n" +
        "FROM BaseShipEquipData bse \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes cpu ON cpu.typeID = bse.typeId AND cpu.attributeID = 50 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes pg ON pg.typeID = bse.typeId AND pg.attributeID = 30 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes mta ON mta.typeID = bse.typeId AND mta.attributeID = 633 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes opt ON opt.typeID = bse.typeId AND opt.attributeID = 54 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes acc ON acc.typeID = bse.typeId AND acc.attributeID = 158 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes rof ON rof.typeID = bse.typeId AND rof.attributeID = 51 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes trk ON trk.typeID = bse.typeId AND trk.attributeID = 160 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes dmg ON dmg.typeID = bse.typeId AND dmg.attributeID = 64 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes spd ON spd.typeID = bse.typeId AND spd.attributeID = 20 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes srb ON srb.typeID = bse.typeId AND srb.attributeID = 554 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ahp ON ahp.typeID = bse.typeId AND ahp.attributeID = 1159 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes capn ON capn.typeID = bse.typeId AND capn.attributeID = 6 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes tl ON tl.typeID = bse.typeId AND tl.attributeID = 422 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes aemr ON aemr.typeID = bse.typeId AND aemr.attributeID = 267 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes aexr ON aexr.typeID = bse.typeId AND aexr.attributeID = 268 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes akir ON akir.typeID = bse.typeId AND akir.attributeID = 269 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes athr ON athr.typeID = bse.typeId AND athr.attributeID = 270 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes semr ON semr.typeID = bse.typeId AND semr.attributeID = 271 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sexr ON sexr.typeID = bse.typeId AND sexr.attributeID = 272 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes skir ON skir.typeID = bse.typeId AND skir.attributeID = 273 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sthr ON sthr.typeID = bse.typeId AND sthr.attributeID = 274 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hemr ON hemr.typeID = bse.typeId AND hemr.attributeID = 974 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hexr ON hexr.typeID = bse.typeId AND hexr.attributeID = 975 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hkir ON hkir.typeID = bse.typeId AND hkir.attributeID = 976 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hthr ON hthr.typeID = bse.typeId AND hthr.attributeID = 977 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hemr2 ON hemr2.typeID = bse.typeId AND hemr2.attributeID = 113 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hexr2 ON hexr2.typeID = bse.typeId AND hexr2.attributeID = 111 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hkir2 ON hkir2.typeID = bse.typeId AND hkir2.attributeID = 109 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hthr2 ON hthr2.typeID = bse.typeId AND hthr2.attributeID = 110 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes pgo ON pgo.typeID = bse.typeId AND pgo.attributeID = 11 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes cpuo ON cpuo.typeID = bse.typeId AND cpuo.attributeID = 48 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes shhp ON shhp.typeID = bse.typeId AND shhp.attributeID = 9 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sshp ON sshp.typeID = bse.typeId AND sshp.attributeID = 263 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sahp ON sahp.typeID = bse.typeId AND sahp.attributeID = 265 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes lsc ON lsc.typeID = bse.typeId AND lsc.attributeID = 12 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes msc ON msc.typeID = bse.typeId AND msc.attributeID = 13 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes hsc ON hsc.typeID = bse.typeId AND hsc.attributeID = 14 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes rsc ON rsc.typeID = bse.typeId AND rsc.attributeID = 1137 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes rgsz ON rgsz.typeID = bse.typeId AND rgsz.attributeID = 1547 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes calb ON calb.typeID = bse.typeId AND calb.attributeID = 1132 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes lasc ON lasc.typeID = bse.typeId AND lasc.attributeID = 101 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes tusc ON tusc.typeID = bse.typeId AND tusc.attributeID = 102 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sshpm ON sshpm.typeID = bse.typeId AND sshpm.attributeID = 150 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes agim ON agim.typeID = bse.typeId AND agim.attributeID = 169 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes velm ON velm.typeID = bse.typeId AND velm.attributeID = 1076 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes vel ON vel.typeID = bse.typeId AND vel.attributeID = 37 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ahpbp ON ahpbp.typeID = bse.typeId AND ahpbp.attributeID = 335 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ahpbm ON ahpbm.typeID = bse.typeId AND ahpbm.attributeID = 148 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes emdrb ON emdrb.typeID = bse.typeId AND emdrb.attributeID = 984 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes exdrb ON exdrb.typeID = bse.typeId AND exdrb.attributeID = 985 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes kidrb ON kidrb.typeID = bse.typeId AND kidrb.attributeID = 986 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes thdrb ON thdrb.typeID = bse.typeId AND thdrb.attributeID = 987 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes calbc ON calbc.typeID = bse.typeId AND calbc.attributeID = 1153 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes drwbk ON drwbk.typeID = bse.typeId AND drwbk.attributeID = 1138 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ad ON ad.typeID = bse.typeId AND ad.attributeID = 73 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ahpr ON ahpr.typeID = bse.typeId AND ahpr.attributeID = 84 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes emd ON emd.typeID = bse.typeId AND emd.attributeID = 114 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes exd ON exd.typeID = bse.typeId AND exd.attributeID = 116 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes kid ON kid.typeID = bse.typeId AND kid.attributeID = 117 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes thd ON thd.typeID = bse.typeId AND thd.attributeID = 118 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes wrm ON wrm.typeID = bse.typeId AND wrm.attributeID = 120 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes cs ON cs.typeID = bse.typeId AND cs.attributeID = 128 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes lg ON lg.typeID = bse.typeId AND lg.attributeID = 137 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes tsm ON tsm.typeID = bse.typeId AND tsm.attributeID = 244 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes fom ON fom.typeID = bse.typeId AND fom.attributeID = 517 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes eda ON eda.typeID = bse.typeId AND eda.attributeID = 97 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes pta ON pta.typeID = bse.typeId AND pta.attributeID = 90 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes edr ON edr.typeID = bse.typeId AND edr.attributeID = 98 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes ptrr ON ptrr.typeID = bse.typeId AND ptrr.attributeID = 91 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes sra ON sra.typeID = bse.typeId AND sra.attributeID = 983 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes shp ON shp.typeID = bse.typeId AND shp.attributeID = 72 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes rofm ON rofm.typeID = bse.typeId AND rofm.attributeID = 204 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes midm ON midm.typeID = bse.typeId AND midm.attributeID = 213 \n" +
        "	LEFT OUTER JOIN dbo.dgmTypeAttributes pginc ON pginc.typeID = bse.typeId AND pginc.attributeID = 549 \n" +
        "ORDER BY bse.groupId, bse.typeId;";

    console.log("Querying (may take a few seconds)...");
    conn.query(sqlQuery, function (err, results) {
        if (!results) {
            console.warn("error on query: " + err);
            return;
        }
        var previousGroupID = '';
        console.log("Processing results...");
        for (var i = 0; i < results.length; i++) {
            if (previousGroupID !== results[i].groupId) {
                if (previousGroupID !== '') {
                    buffer.append('    },\n');
                }
                buffer.append('    "' + results[i].groupId + '": {\n');
                previousGroupID = results[i].groupId;
            }
            buffer.append('      "' + results[i].typeId + '": { n: "' + results[i].name + '", mg: ' + results[i].marketGroupId + ', pmg: ' + results[i].parentMarketGroupId + ', mta: ' + results[i].metalevel + ', d: "' + fixupStringForJSON(results[i].description) + '"');

            buffer.append(aliasedPropertyValueOrBlank(results[i], "cpu", "cpu"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "powergrid", "pg"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "powergridIncrease", "pginc"));
            
            buffer.append(aliasedPropertyValueOrBlank(results[i], "optimal", "opt"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "accuracyFalloff", "acc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "rateOfFire", "rof"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "rateOfFireMultiplier", "rofm"));
            
            buffer.append(aliasedPropertyValueOrBlank(results[i], "trackingSpeed", "trk"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "damageModifier", "dmg"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "speedFactor", "spd"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "signatureRadiusBonus", "srb"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorHPBonusAdd", "ahp"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shieldHPBonusAdd", "shp"));
            
            buffer.append(aliasedPropertyValueOrBlank(results[i], "capacitorNeed", "capn"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "techLevel", "tl"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorEmDamageResonance", "aemr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorExplosiveDamageResonance", "aexr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorKineticDamageResonance", "akir"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorThermalDamageResonance", "athr"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "shieldEmDamageResonance", "semr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shieldExplosiveDamageResonance", "sexr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shieldKineticDamageResonance", "skir"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shieldThermalDamageResonance", "sthr"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "hullEmDamageResonance", "hemr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "hullExplosiveDamageResonance", "hexr"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "hullKineticDamageResonance", "hkir"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "hullThermalDamageResonance", "hthr"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "raceId", "r"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "powerGridOutput", "pgo"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "cpuOutput", "cpuo"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shipHullHP", "shhp"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shipShieldHP", "sshp"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "shipArmorHP", "sahp"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "lowSlotCount", "lsc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "midSlotCount", "msc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "highSlotCount", "hsc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "launcherSlotCount", "lasc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "turretSlotCount", "tusc"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "rigSlotCount", "rsc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "rigSize", "rgsz"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "calibration", "calb"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "shipHullHPMultiplier", "sshpm"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "agilityMultiplier", "agim"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "velocityMultiplier", "velm"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "maxVelocity", "vel"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorHpBonusPercent", "ahpbp"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "emDamageResistanceBonus", "emdrb"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "explosiveDamageResistanceBonus", "exdrb"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "kineticDamageResistanceBonus", "kidrb"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "thermalDamageResistanceBonus", "thdrb"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "calibrationCost", "calbc"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "drawback", "drwbk"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "activationDuration", "ad"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "armorHPRepaired", "ahpr"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "emDamage", "emd"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "explosiveDamage", "exd"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "kineticDamage", "kid"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "thermalDamage", "thd"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "weaponRangeMultiplier", "wrm"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "chargeSize", "cs"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "launcherGroup", "lg"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "trackingSpeedMultiplier", "tsm"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "falloffMultiplier", "fom"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "energyDestabilizationAmount", "eda"));
            buffer.append(aliasedPropertyValueOrBlank(results[i], "powerTransferAmount", "pta"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "signatureRadiusIncreaseAmount", "sra"));

            buffer.append(aliasedPropertyValueOrBlank(results[i], "missileDamageMultiplier", "midm"));

          
            buffer.append('}');
            if (i + 1 !== results.length && results[i + 1].groupId === results[i].groupId) {
                buffer.append(',');
            }
            buffer.append('\n');
        }
        buffer.append('    }\n');
        buffer.append('  };\n');
        buffer.append('  export var TypeToGroupIDMapping = {\n');

        conn.query("select typeID, groupID from dbo.invTypes where groupID IN (" + MarketGroupIDs.join(',') + ")", function (err, typeLookupResults) {
            for (i = 0; i < typeLookupResults.length; i++) {
                buffer.append('    "' + typeLookupResults[i].typeID + '": ' + typeLookupResults[i].groupID);
                if (i + 1 !== typeLookupResults.length) {
                    buffer.append(',');
                }
                buffer.append('\n');
            }
            buffer.append('  };\n');
            buffer.append('}\n');



            fs.writeFile(outputCodeFile, buffer.toString(), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("\n\nWafleData.ts updated successfully.");
                    console.log("Don't forget to run the Wafle build script to compile and minify the data!");
                }
            });
        });
    });

});

function fixupStringForJSON(theString: string) {
    return theString.replace(/\r/g, '').replace(/\n/g, '\\n\\\n').replace(/"/g, '\\"');
}

function aliasedPropertyValueOrBlank(theRow: any, theFieldName: string, theJSONPropertyAlias: string, includeLeadingComma?: boolean) {
    if (theRow[theFieldName] !== null) {
        return ((includeLeadingComma === false) ? "" : ", ") + theJSONPropertyAlias + ": " + theRow[theFieldName]
    }
}