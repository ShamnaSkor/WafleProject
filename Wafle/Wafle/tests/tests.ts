///<reference path="../lib/typings/qunit/qunit.d.ts"/>
///<reference path="../wafleCore.ts"/>

QUnit.module("Ship tests");
    test("New Ship has null pilot.", function () {
        var ship = new Wafle.Ship("Rifter");
        strictEqual(ship.pilot, null, "Pilot will be null until set.");
        strictEqual(ship.isPiloted(), false, "Ship is not piloted until a pilot is set.");
    });

    test("Ship is piloted once pilot is assigned.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ok(ship.isPiloted());
    });

    test("Unpiloted powergrid same as base powergrid.", function () {
        var ship = new Wafle.Ship("Rifter");
        strictEqual(ship.cpu(), ship.baseShipData.cpuOutput, "Without a pilot, the base CPU amount on the ship should match the calculated CPU amount.");
        ok((ship.cpu() > 0), "Without a pilot, the base CPU amount on the ship should be greater than zero.");
    });

QUnit.module("Skill tests");
    test("Pilot with Engineering I gives 5% PG bonus.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = ship.baseShipData.powergridOutput * 1.05;
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Engineering = 1;
        strictEqual(ship.powergrid(), expected);
    });

    test("Pilot with Engineering V gives 25% PG bonus.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = ship.baseShipData.powergridOutput * 1.25;
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Engineering = 5;
        strictEqual(ship.powergrid(), expected);
    });

    test("Pilot with Electronics I gives 5% CPU bonus.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = ship.baseShipData.cpuOutput * 1.05;
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Electronics = 1;
        strictEqual(ship.cpu(), expected);
    });

    test("Pilot with Electronics V gives 25% CPU bonus.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = ship.baseShipData.cpuOutput * 1.25;
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Electronics = 5;
        strictEqual(ship.cpu(), expected);
    });

    test("Pilot with Shield Management I gives 5% Shield HP bonus (rounded to whole HP).", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.shieldHP * 1.05,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.ShieldManagement = 1;
        strictEqual(ship.shieldHP(), expected);
    });

    test("Pilot with Shield Management V gives 25% Shield HP bonus (rounded to whole HP).", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.shieldHP * 1.25,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.ShieldManagement = 5;
        strictEqual(ship.shieldHP(), expected);
    });

    test("Pilot with Hull Upgrades I gives 5% Armor HP bonus (rounded to whole HP) for base ship and ship with armor plate.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.armorHP * 1.05,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.HullUpgrades = 1;
        strictEqual(ship.armorHP(), expected);
        ship.fittingSlots[7].SetModule(11295, 329);
        strictEqual(ship.armorHP(), 866);
    });

    test("Pilot with Hull Upgrades V gives 25% Armor HP bonus (rounded to whole HP) for base ship and ship with armor plate.", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.armorHP * 1.25,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.HullUpgrades = 5;
        strictEqual(ship.armorHP(), expected);
        ship.fittingSlots[7].SetModule(11295, 329);
        strictEqual(ship.armorHP(), 1031);
    });

    test("Pilot with Mechanics I gives 5% Structure HP bonus (rounded to whole HP).", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.structureHP * 1.05,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Mechanics = 1;
        strictEqual(ship.structureHP(), expected);
    });

    test("Pilot with Mechanics V gives 25% Structure HP bonus (rounded to whole HP).", function () {
        var ship = new Wafle.Ship("Rifter");
        var expected = Wafle.Round(ship.baseShipData.structureHP * 1.25,0);
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.Mechanics = 5;
        strictEqual(ship.structureHP(), expected);
    });

QUnit.module("Slot Tests");
    test("Adding a projectile turret to mid, low, and rig slot throws errors.  High slots give undefined.", function () {
        var ship = new Wafle.Ship("Rifter");

        var validTurretTypeId = 484;
        var validGroupID = 55;

        for (var i = 0; i <= 3; i++) {
            ok(ship.fittingSlots[i].SetModule(validTurretTypeId, validGroupID) === undefined);
        }

        for (var i = 4; i <= 12; i++) {
            throws(
                function () {
                    ship.fittingSlots[i].SetModule(validTurretTypeId, validGroupID);
                },
                /Module 125mm Gatling AutoCannon I only fits in a High slot./,
                "Fitting a gun in a " + Wafle.FittingSlotType[ship.fittingSlots[i].slotType]
                );
        }

    });

    test("Adding a rocket to a rocket launcher works", function () {
        var ship = new Wafle.Ship("Rifter");
        var rocketLauncherTypeID = 10629;
        var rocketType = new Wafle.TypeInfo(266, 387);
        ship.fittingSlots[0].SetModule(rocketLauncherTypeID);
        ok(ship.fittingSlots[0].LoadCharge(rocketType) === undefined);
        strictEqual(ship.fittingSlots[0].LoadedCharge().name, "Scourge Rocket");
    });

    test("Adding a rocket to a missile launcher throws the correct exception", function () {
        var ship = new Wafle.Ship("Rifter");
        var missileLauncherTypeID = 499;
        var rocketType = new Wafle.TypeInfo(266, 387);
        var mwdType = new Wafle.TypeInfo(434, 46);
        ship.fittingSlots[0].SetModule(missileLauncherTypeID);
        throws(
            function () {
                ship.fittingSlots[0].LoadCharge(rocketType);
            },
            /Type 266 is not compatible with a launcher of type Light Missile Launcher I./,
            "Fitting a rocket in a missile launcher"
            );
        throws(
            function () {
                ship.fittingSlots[0].LoadCharge(mwdType);
            },
            /Type 434 in group 46 is not a loadable charge./,
            "Fitting a mwd in a missile launcher"
            );
    });

QUnit.module("Fitting Tests");
    test("Rifter fit with 125 autocannon shows correct CPU for pilot with no CPU reducing skills.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.fittingSlots[0].SetModule(484,55);
        strictEqual(ship.fittingSlots[0].cpuUsage(), 3);
    });

    test("Rifter fit with 125 autocannon shows correct CPU for pilot with Weapon Upgrades I.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.WeaponUpgrades = 1;
        ship.fittingSlots[0].SetModule(484,55);
        strictEqual(ship.fittingSlots[0].cpuUsage(), 2.85);
    });

    test("Rifter fit with 125 autocannon shows correct CPU for pilot with Weapon Upgrades V.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.WeaponUpgrades = 5;
        ship.fittingSlots[0].SetModule(484,55);
        strictEqual(ship.fittingSlots[0].cpuUsage(), 2.25);
    });

    test("Rifter fit with single 125 autocannon shows correct weapon in first slot.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.fittingSlots[0].SetModule(484,55);
        strictEqual(ship.fittingSlots[0].baseShipEquipmentData.name, "125mm Gatling AutoCannon I");
    });

    test("Rifter fit with many separate modules shows correct name in all slots.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.fittingSlots[0].SetModule(484,55);
        ship.fittingSlots[1].SetModule(485,55);
        ship.fittingSlots[2].SetModule(486, 55);
        ship.fittingSlots[3].SetModule(10629, 507);
        ship.fittingSlots[4].SetModule(526, 65);
        ship.fittingSlots[5].SetModule(434, 46);
        ship.fittingSlots[6].SetModule(447, 52);
        strictEqual(ship.fittingSlots[0].baseShipEquipmentData.name, "125mm Gatling AutoCannon I", "slot 0");
        strictEqual(ship.fittingSlots[1].baseShipEquipmentData.name, "150mm Light AutoCannon I", "slot 1");
        strictEqual(ship.fittingSlots[2].baseShipEquipmentData.name, "200mm AutoCannon I", "slot 2");
        strictEqual(ship.fittingSlots[3].baseShipEquipmentData.name, "Rocket Launcher I", "slot 3");
        strictEqual(ship.fittingSlots[4].baseShipEquipmentData.name, "Stasis Webifier I", "slot 4");
        strictEqual(ship.fittingSlots[5].baseShipEquipmentData.name, "1MN Microwarpdrive I", "slot 5");
        strictEqual(ship.fittingSlots[6].baseShipEquipmentData.name, "Warp Scrambler I", "slot 6");
    });

    test("Rifter fit with 125 autocannon x3 shows correct CPU & powergrid remaining for pilot with no skills.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.fittingSlots[0].SetModule(484,55);
        ship.fittingSlots[1].SetModule(484,55);
        ship.fittingSlots[2].SetModule(484,55);
        strictEqual(ship.remainingCpu(), 116);
        strictEqual(ship.remainingPowergrid(), 35);
    });

    test("Rifter fit with 125 autocannon x3 shows correct CPU & powergrid remaining for pilot with Weapon Upgrades V only.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.WeaponUpgrades = 5;
        ship.fittingSlots[0].SetModule(484,55);
        ship.fittingSlots[1].SetModule(484,55);
        ship.fittingSlots[2].SetModule(484,55);
        strictEqual(ship.remainingCpu(), 118.25);
        strictEqual(ship.remainingPowergrid(), 35);
    });

    test("Rifter fit with 125 autocannon x3 shows correct CPU & powergrid remaining for pilot with Advanced Weapon Upgrades V only.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.AdvancedWeaponUpgrades = 5;
        ship.fittingSlots[0].SetModule(484,55);
        ship.fittingSlots[1].SetModule(484,55);
        ship.fittingSlots[2].SetModule(484,55);
        strictEqual(ship.remainingCpu(), 116);
        equal(ship.remainingPowergrid(), Wafle.Round(35.3,-2));
    });

QUnit.module("Search Tests");
    test("Atron is found and is loaded by name.", function () {
        var type = Wafle.FindTypeByName("Atron")
        strictEqual(type.groupId, 25, "group id");
        strictEqual(type.typeId, 608, "type id");
        var ship = new Wafle.BaseShipData(type);
        strictEqual(ship.hullName, "Atron", "Loaded ship name");
    });

    test("Executioner is found and is loaded by name.", function () {
        var type = Wafle.FindTypeByName("Executioner")
        strictEqual(type.groupId, 25, "group id");
        strictEqual(type.typeId, 589, "type id");
        var ship = new Wafle.BaseShipData(type);
        strictEqual(ship.hullName, "Executioner", "Loaded ship name");
    });

    test("Slasher is found and is loaded by name.", function () {
        var type = Wafle.FindTypeByName("Slasher")
        strictEqual(type.groupId, 25, "group id");
        strictEqual(type.typeId, 585, "type id");
        var ship = new Wafle.BaseShipData(type);
        strictEqual(ship.hullName, "Slasher", "Loaded ship name");
    });

    test("Merlin is found and is loaded by name.", function () {
        var type = Wafle.FindTypeByName("Merlin")
        strictEqual(type.groupId, 25, "group id");
        strictEqual(type.typeId, 603, "type id");
        var ship = new Wafle.BaseShipData(type);
        strictEqual(ship.hullName, "Merlin", "Loaded ship name");
    });
    
    test("Non-existent ship is NOT found and throws exception.", function () {
        var type = Wafle.FindTypeByName("NonExistentShipName")
        strictEqual(type, null, "type is null.");
        var ship: any;
        throws(
            function () {
                ship = new Wafle.BaseShipData(type);
            },
            /BaseShipData does not accept a null parameter./,
            "Can't pass a null."
            );
        throws(
            function () {
                ship = new Wafle.BaseShipData("NonExistentShipName");
            },
            /Could not find ship with name "NonExistentShipName"./,
            "Can't pass a bad ship name."
            );
    });
        
    test("125mm Gatling AutoCannon I is found by name.", function () {
        var type = Wafle.FindTypeByName("125mm Gatling AutoCannon I")
        strictEqual(type.groupId, 55, "group id");
        strictEqual(type.typeId, 484, "type id");
    });

    test("NonExistentModule is NOT found by name (should return null).", function () {
        var type = Wafle.FindTypeByName("Non Existent module")
        strictEqual(type, null, "should be null");
    });




QUnit.module("Damage Resistance Tests");
    test("Unpiloted Rifter with Damage Control I has correct resists.", function () {
        var ship = new Wafle.Ship("Rifter");
        strictEqual(ship.ShieldEMDamageReduction(), 0.0, "Shield em base");
        strictEqual(ship.ShieldExplosiveDamageReduction(), 0.5, "Shield ex base");
        strictEqual(ship.ShieldKineticDamageReduction(), 0.4, "Shield ki base");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.2, -3), "shield th base");
        strictEqual(ship.ArmorEMDamageReduction(), 0.6, "Armor em base");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(),-3), Wafle.Round(0.1,-3), "Armor ex base");
        strictEqual(ship.ArmorKineticDamageReduction(), 0.25, "Armor ki base");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.35, -3), "Armor th base");
        strictEqual(ship.HullEMDamageReduction(), 0.0, "Hull em base");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.0, "Hull ex base");
        strictEqual(ship.HullKineticDamageReduction(), 0.0, "Hull ki base");
        strictEqual(ship.HullThermalDamageReduction(), 0.0, "Hull th base");
        ship.fittingSlots[7].SetModule(2046);
        strictEqual(Wafle.Round(ship.ShieldEMDamageReduction(), -3), Wafle.Round(0.075, -3), "shield em with DC I");
        strictEqual(Wafle.Round(ship.ShieldExplosiveDamageReduction(), -3), Wafle.Round(0.538, -3), "shield ex with DC I");
        strictEqual(Wafle.Round(ship.ShieldKineticDamageReduction(), -3), Wafle.Round(0.445, -3), "shield ki with DC I");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.26, -3), "shield th with DC I");
        strictEqual(Wafle.Round(ship.ArmorEMDamageReduction(),-3), 0.64, "Armor em with DC I");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(),-3), 0.19, "Armor ex with DC I");
        strictEqual(Wafle.Round(ship.ArmorKineticDamageReduction(),-3), 0.325, "Armor ki with DC I");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.415, -3), "Armor th with DC I");
        strictEqual(ship.HullEMDamageReduction(), 0.5, "Hull em with DC I");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.5, "Hull ex with DC I");
        strictEqual(ship.HullKineticDamageReduction(), 0.5, "Hull ki with DC I");
        strictEqual(ship.HullThermalDamageReduction(), 0.5, "Hull th with DC I");
    });

QUnit.module("Diminishing Returns Tests");
    test("Base diminishing returns formulas reality check.", function () {
        strictEqual(Wafle.dimEffRatio(0), 1, "first module");
        strictEqual(Wafle.dimEffRatio(1), 0.8691200638732976, "second module");
        strictEqual(Wafle.dimEffRatio(2), 0.5705833616622737, "third module");
        strictEqual(Wafle.dimEffRatio(3), 0.2829553974341052, "fourth module");
        strictEqual(Wafle.dimEffRatio(4), 0.10599281183996713, "fifth module");
        strictEqual(Wafle.dimEffRatio(5), 0.029991238199336235, "sixth module");
        strictEqual(Wafle.dimEffRatio(6), 0.006410205174881814, "seventh module");
        strictEqual(Wafle.dimEffRatio(7), 0.0010349253297878672, "eighth module");
    });

QUnit.module("Inventory Tests");
    test("SetModule is able to find a valid projectile turret module by typeId only.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.fittingSlots[0].SetModule(484);
        strictEqual(ship.fittingSlots[0].baseShipEquipmentData.name, "125mm Gatling AutoCannon I", "valid name for item.");
        ok(ship.fittingSlots[0].baseShipEquipmentData.description.indexOf("multi-barrel autocannon") > 0, "valid description for item."); 
    });

    test("SetModule throws an exception when given an invalid projectile turret module by typeId only.", function () {
        var ship = new Wafle.Ship("Rifter");

        var invalidTurretTypeId = 483;
        var validGroupID = 55;
    
        throws(
            function () {
                ship.fittingSlots[0].SetModule(invalidTurretTypeId, validGroupID);
            },
            /typeId 483 in groupId 55 is not known./,
            "This typeId doesn't exist in this group."
        );

        throws(
            function () {
                ship.fittingSlots[0].SetModule(invalidTurretTypeId);
            },
            /typeId 483 is not a member of a known inventory group./,
            "This typeId doesn't exist in any group."
            );

    });

    test("Valid typeId with valid groupId that does not contain the specified typeId results in error.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");

        var projectileTurretTypeId = 484;
        var energyTurretGroupId = 53;

        throws(
            function () {
                ship.fittingSlots[0].SetModule(projectileTurretTypeId, energyTurretGroupId);
            },
            /typeId 484 in groupId 53 is not known./,
            "This typeId doesn't exist in this group."
            );
        
    });

    test("Valid typeId with invalid groupId results in error.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");

        var projectileTurretTypeId = 484;
        var invalidGroupID = 9999999;

        throws(
            function () {
                ship.fittingSlots[0].SetModule(projectileTurretTypeId, invalidGroupID);
            },
            /groupId 9999999 is not known./,
            "This group is not known."
            );
    });

QUnit.module("Specific module tests");
    test("Trimark armor pump HP bonus stacks with no diminishing returns.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.ArmorRigging = 5;
        var HP = ship.armorHP();
        ship.fittingSlots[10].SetModule(30987);
        var trimarkBonus = 1 + ship.fittingSlots[10].baseShipEquipmentData.armorHPBonusPercent / 100;
        strictEqual(ship.armorHP(), Wafle.Round(HP * trimarkBonus, 0), "one rig.");
        ship.fittingSlots[11].SetModule(30987);
        strictEqual(ship.armorHP(), Wafle.Round(HP * trimarkBonus * trimarkBonus, 0), "two rigs.");
        ship.fittingSlots[12].SetModule(30987);
        strictEqual(ship.armorHP(), Wafle.Round(HP * trimarkBonus * trimarkBonus * trimarkBonus, 0), "three rigs.");
    });
    test("Trimark armor pump velocity penalty stacks with diminishing returns.", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        var vel = ship.MaxVelocity();
        ship.fittingSlots[10].SetModule(30987);

        var trimarkPenalty = 1 + ship.fittingSlots[10].baseShipEquipmentData.baseVelocityMultiplier / 100;

        strictEqual(ship.MaxVelocity(), Wafle.Round(vel * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(0))), -2), "one rig.");
        strictEqual(ship.MaxVelocity(), Wafle.Round(319.5, -2), "one rig (absolute).");
        ship.fittingSlots[11].SetModule(30987);
        strictEqual(ship.MaxVelocity(), Wafle.Round(vel * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(0)))
                                                        * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(1))), -2), "two rigs.");
        strictEqual(ship.MaxVelocity(), Wafle.Round(291.73, -2), "two rigs (absolute).");
        ship.fittingSlots[12].SetModule(30987);
        strictEqual(ship.MaxVelocity(), Wafle.Round(vel * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(0)))
                                                        * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(1)))
                                                        * (1 - ((1 - trimarkPenalty) * Wafle.dimEffRatio(2))), -2), "three rigs.");
        strictEqual(ship.MaxVelocity(), Wafle.Round(275.09,-2), "three rigs (absolute).");

    });

QUnit.module("Reality Checks");

    //Note: all fits in this section are terrible because Shamna Skor is bad at EVE.
    // However, these do exercise various elements of the system and therefore are good tests.

    test("Not quite 5 pilot in Rifter with DCII and tech I steel plate", function () {
        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("NQ5");
        ship.pilot.skills.Mechanics = 5;
        ship.pilot.skills.HullUpgrades = 5;
        ship.pilot.skills.ShieldManagement = 5;
        ship.pilot.skills.Electronics = 5;
        ship.pilot.skills.Engineering = 5;
        ship.pilot.skills.AdvancedWeaponUpgrades = 5;
        ship.pilot.skills.WeaponUpgrades = 5;
        ship.pilot.skills.Navigation = 5;
        ship.pilot.skills.ArmorRigging = 3;
        ship.fittingSlots[7].SetModule(11295, 329);  //200mm plate
        ship.fittingSlots[8].SetModule(2048, 60); //DCU II
        ship.fittingSlots[10].SetModule(30987); //trimark rig
        ship.fittingSlots[11].SetModule(30987); //trimark rig
        ship.fittingSlots[12].SetModule(31009); //anti ex rig

        strictEqual(ship.structureHP(), 438, "structure HP");
        strictEqual(ship.shieldHP(), 563, "shield HP");
        strictEqual(ship.armorHP(), 1364, "armor HP");
        strictEqual(ship.cpu(), 156.25, "CPU");
        strictEqual(ship.powergrid(), 47.50, "Powergrid");
        strictEqual(ship.remainingCpu(), 111.25, "Remaining CPU" );
        strictEqual(Wafle.Round(ship.MaxVelocity(), -2), 372.1, "Max Velocity (no AB/MWD)");
        strictEqual(Wafle.Round(ship.remainingPowergrid(), -2), Wafle.Round(36.5, -2), "Remaining Powergrid");
        strictEqual(Wafle.Round(ship.ShieldEMDamageReduction(), -3), Wafle.Round(0.125, -3), "shield em with DC II");
        strictEqual(Wafle.Round(ship.ShieldExplosiveDamageReduction(), -3), Wafle.Round(0.563, -3), "shield ex with DC II");
        strictEqual(Wafle.Round(ship.ShieldKineticDamageReduction(), -3), Wafle.Round(0.475, -3), "shield ki with DC II");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.3, -3), "shield th with DC II");
        strictEqual(Wafle.Round(ship.ArmorEMDamageReduction(), -3), 0.66, "Armor em with DC II");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(),-3), 0.464 /* 47% verified in-game */, "Armor ex with DC II + anti-ex rig");  
        strictEqual(Wafle.Round(ship.ArmorKineticDamageReduction(), -3), 0.363, "Armor ki with DC II");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.448, -3), "Armor th with DC II");
        strictEqual(ship.HullEMDamageReduction(), 0.6, "Hull em with DC II");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.6, "Hull ex with DC II");
        strictEqual(ship.HullKineticDamageReduction(), 0.6, "Hull ki with DC II");
        strictEqual(ship.HullThermalDamageReduction(), 0.6, "Hull th with DC II");
    });

test("T1 Armor Fleet Buffer Tackle Rifter with all V skills.", function () {

        var ship = new Wafle.Ship("Rifter");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.SetAllSkills(5);
    var empS = new Wafle.TypeInfo(185, 83);
    var scourgeRocket = new Wafle.TypeInfo(266, 387);

        ship.fittingSlots[0].SetModule(484, 55); //125mm
        ship.fittingSlots[0].LoadCharge(empS);
        ship.fittingSlots[1].SetModule(484, 55); //125mm
        ship.fittingSlots[1].LoadCharge(empS);
        ship.fittingSlots[2].SetModule(484, 55); //125mm
        ship.fittingSlots[2].LoadCharge(empS);
        ship.fittingSlots[3].SetModule(10629, 507); //rocket
        ship.fittingSlots[3].LoadCharge(scourgeRocket);
        ship.fittingSlots[4].SetModule(526, 65);  //web
        ship.fittingSlots[5].SetModule(434, 46); //mwd
        ship.fittingSlots[6].SetModule(447, 52); //scram
        ship.fittingSlots[7].SetModule(11295, 329);  //200mm plate
        ship.fittingSlots[8].SetModule(2046, 60); //DCU
        ship.fittingSlots[9].SetModule(2603, 763);  //Nano
        ship.fittingSlots[10].SetModule(30987); //trimark rig
        ship.fittingSlots[11].SetModule(30987); //trimark rig
        ship.fittingSlots[12].SetModule(31009); //anti ex rig
        
        strictEqual(ship.structureHP() , 438, "structure HP" );
        strictEqual(ship.shieldHP(), 563, "shield HP");
        strictEqual(ship.armorHP(), 1364, "armor HP");
        strictEqual(ship.cpu(), 156.25, "CPU");
        strictEqual(ship.powergrid(), 47.50, "Powergrid");
        strictEqual(ship.remainingCpu(), 18.25, "Remaining CPU");
        strictEqual(Wafle.Round(ship.MaxVelocity(), -2), Wafle.Round(422.49,-2 ) , "Max Velocity (no AB/MWD)");
        strictEqual(Wafle.Round(ship.remainingPowergrid(), -2), Wafle.Round(13.2, -2), "Remaining Powergrid");
        strictEqual(Wafle.Round(ship.ShieldEMDamageReduction(), -3), Wafle.Round(0.075, -3), "shield em");
        strictEqual(Wafle.Round(ship.ShieldExplosiveDamageReduction(), -3), Wafle.Round(0.538, -3), "shield ex");
        strictEqual(Wafle.Round(ship.ShieldKineticDamageReduction(), -3), Wafle.Round(0.445, -3), "shield ki");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.26, -3), "shield th");
        strictEqual(Wafle.Round(ship.ArmorEMDamageReduction(), -3), 0.64, "Armor em");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(), -3), 0.433, "Armor ex");
        strictEqual(Wafle.Round(ship.ArmorKineticDamageReduction(), -3), 0.325, "Armor ki");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.415, -3), "Armor th");
        strictEqual(ship.HullEMDamageReduction(), 0.5, "Hull em");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.5, "Hull ex");
        strictEqual(ship.HullKineticDamageReduction(), 0.5, "Hull ki");
        strictEqual(ship.HullThermalDamageReduction(), 0.5, "Hull th");
        strictEqual(Wafle.Round(ship.fittingSlots[0].totalAlphaDamage(),-2) , Wafle.Round(44.47,-2), "alpha damage from single gun");
        strictEqual(Wafle.Round(ship.fittingSlots[0].totalAlphaDamage() + ship.fittingSlots[1].totalAlphaDamage() + ship.fittingSlots[2].totalAlphaDamage(),-2), Wafle.Round(133.42,-2), "alpha damage from guns");
        strictEqual(Wafle.Round(ship.fittingSlots[3].totalAlphaDamage(), -2), Wafle.Round(45.38, -2), "alpha damage from single rocket");
    });

    test("Armor Fleet Buffer Executioner with all V skills.", function () {
        var ship = new Wafle.Ship("Executioner");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.SetAllSkills(5);

        ship.fittingSlots[0].SetModule(3001, 53); //Dual Light Pulse Laser II
        ship.fittingSlots[1].SetModule(3001, 53); //Dual Light Pulse Laser II
        ship.fittingSlots[2].SetModule(3001, 53); //Dual Light Pulse Laser II
        //Empty high slot
        ship.fittingSlots[4].SetModule(3244);  //Warp Disruptor II
        ship.fittingSlots[5].SetModule(527); //Stasis Webifier II
        ship.fittingSlots[6].SetModule(5973); //Limited 1MN MicroWarpdrive I
        ship.fittingSlots[7].SetModule(20347);  //200mm Reinforced Steel Plates II
        ship.fittingSlots[8].SetModule(1306); //Adaptive Nano Plating II
        ship.fittingSlots[9].SetModule(2048);  //Damage Control II
        ship.fittingSlots[10].SetModule(30987); //Small Trimark Armor Pump I
        ship.fittingSlots[11].SetModule(30987); //Small Trimark Armor Pump I
        ship.fittingSlots[12].SetModule(31009); //Small Anti-Explosive Pump I


        strictEqual(ship.structureHP(), 438, "structure HP");
        strictEqual(ship.shieldHP(), 313, "shield HP");
        strictEqual(ship.armorHP(), 1736, "armor HP");
        strictEqual(ship.cpu(), 175, "CPU");
        strictEqual(ship.powergrid(), 56.25, "Powergrid");
        strictEqual(ship.remainingCpu(), 13, "Remaining CPU");
        strictEqual(Wafle.Round(ship.remainingPowergrid(), -2), Wafle.Round(6.35, -2), "Remaining Powergrid");
        strictEqual(Wafle.Round(ship.MaxVelocity(), -2), Wafle.Round(452.43, -2), "Max Velocity (no AB/MWD)");
        strictEqual(Wafle.Round(ship.ShieldEMDamageReduction(), -3), Wafle.Round(0.125, -3), "shield em");
        strictEqual(Wafle.Round(ship.ShieldExplosiveDamageReduction(), -3), Wafle.Round(0.563, -3), "shield ex");
        strictEqual(Wafle.Round(ship.ShieldKineticDamageReduction(), -3), Wafle.Round(0.475, -3), "shield ki");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.3, -3), "shield th");
        strictEqual(Wafle.Round(ship.ArmorEMDamageReduction(), -3), Wafle.Round(0.575,-3), "Armor em");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(), -3), 0.524, "Armor ex");
        strictEqual(Wafle.Round(ship.ArmorKineticDamageReduction(), -3), 0.363, "Armor ki ");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.448, -3), "Armor th ");
        strictEqual(ship.HullEMDamageReduction(), 0.6, "Hull em ");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.6, "Hull ex ");
        strictEqual(ship.HullKineticDamageReduction(), 0.6, "Hull ki ");
        strictEqual(ship.HullThermalDamageReduction(), 0.6, "Hull th ");
    });

    test("Shield Buffer Kestrel Sniper with all V skills.", function () {
        var ship = new Wafle.Ship("Kestrel");
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.SetAllSkills(5);

        ship.fittingSlots[0].SetModule(2404); //light missile launcher
        ship.fittingSlots[0].LoadCharge(new Wafle.TypeInfo(27361)); //caldari navy scourge light missile
        ship.fittingSlots[1].SetModule(2404);
        ship.fittingSlots[1].LoadCharge(new Wafle.TypeInfo(27361));
        ship.fittingSlots[2].SetModule(2404);
        ship.fittingSlots[2].LoadCharge(new Wafle.TypeInfo(27361));
        ship.fittingSlots[3].SetModule(2404);
        ship.fittingSlots[3].LoadCharge(new Wafle.TypeInfo(27361));
        ship.fittingSlots[4].SetModule(5973); //limited 1mn mwd
        ship.fittingSlots[5].SetModule(8433); //Medium meta Shield Ext
        ship.fittingSlots[6].SetModule(5399);  //meta warp disruptor
        ship.fittingSlots[7].SetModule(19814); //PWNAGE
        ship.fittingSlots[8].SetModule(11563); //Micro Aux Power Core I
        ship.fittingSlots[9].SetModule(22291); //BCS II
        ship.fittingSlots[10].SetModule(31177); //Polycarbon
        ship.fittingSlots[11].SetModule(31177); //Polycarbon
        ship.fittingSlots[12].SetModule(31716); //Anti-EM Screen
        
        strictEqual(ship.structureHP(), 438, "structure HP");
        strictEqual(ship.shieldHP(), 313, "shield HP");
        strictEqual(ship.armorHP(), 1736, "armor HP");
        strictEqual(ship.cpu(), 175, "CPU");
        strictEqual(ship.powergrid(), 56.25, "Powergrid");
        strictEqual(ship.remainingCpu(), 13, "Remaining CPU");
        strictEqual(Wafle.Round(ship.remainingPowergrid(), -2), Wafle.Round(6.35, -2), "Remaining Powergrid");
        strictEqual(Wafle.Round(ship.MaxVelocity(), -2), Wafle.Round(452.43, -2), "Max Velocity (no AB/MWD)");
        strictEqual(Wafle.Round(ship.ShieldEMDamageReduction(), -3), Wafle.Round(0.125, -3), "shield em");
        strictEqual(Wafle.Round(ship.ShieldExplosiveDamageReduction(), -3), Wafle.Round(0.563, -3), "shield ex");
        strictEqual(Wafle.Round(ship.ShieldKineticDamageReduction(), -3), Wafle.Round(0.475, -3), "shield ki");
        strictEqual(Wafle.Round(ship.ShieldThermalDamageReduction(), -3), Wafle.Round(0.3, -3), "shield th");
        strictEqual(Wafle.Round(ship.ArmorEMDamageReduction(), -3), Wafle.Round(0.575, -3), "Armor em");
        strictEqual(Wafle.Round(ship.ArmorExplosiveDamageReduction(), -3), 0.524, "Armor ex");
        strictEqual(Wafle.Round(ship.ArmorKineticDamageReduction(), -3), 0.363, "Armor ki ");
        strictEqual(Wafle.Round(ship.ArmorThermalDamageReduction(), -3), Wafle.Round(0.448, -3), "Armor th ");
        strictEqual(ship.HullEMDamageReduction(), 0.6, "Hull em ");
        strictEqual(ship.HullExplosiveDamageReduction(), 0.6, "Hull ex ");
        strictEqual(ship.HullKineticDamageReduction(), 0.6, "Hull ki ");
        strictEqual(ship.HullThermalDamageReduction(), 0.6, "Hull th ");
        strictEqual(Wafle.Round(ship.fittingSlots[0].totalAlphaDamage() + ship.fittingSlots[1].totalAlphaDamage() + ship.fittingSlots[2].totalAlphaDamage() + ship.fittingSlots[3].totalAlphaDamage(), -2), Wafle.Round(45.38, -2), "alpha damage from all missiles");
    });