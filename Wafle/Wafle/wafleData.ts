///<reference path="wafleCore.ts"/>

module Wafle.Data {
  /*

    This data was extracted from the EVE Community Toolkit: http://community.eveonline.com/community/fansites/toolkit/

    Extracted data is (c) 2013 CCP hf.  All rights reserved. "EVE", "EVE Online", "CCP", and all related logos and images are trademarks or registered trademarks of CCP hf.

    All uses of this software must comply with the EVE EULA: http://community.eveonline.com/support/policies/eve-eula/

    @preserve
  */

    export var Types: Wafle.IEveInventoryGroupMap = { 
    "25": {
      "582": { n: "Bantam", mg: 61, pmg: 5, mta: 0, d: "The Bantam is a Support Frigate designed to rapidly repair allied vessels in combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
10% bonus to Shield Transporter boost amount\n\
10% reduction in Shield Transporter capacitor use\n\
<br><b>Role Bonus:</b>\n\
500% bonus to range of Shield Transporters\n\
<br><font size=\"14\"><b>Development</b></font>\n\
In YC114 each major empire faction, having been embroiled in a harrowing, extensive, long-term war, recognized the growing need for support and logistics functionality in their vessels during the kind of protracted interstellar warfare that might otherwise prove exhausting for its participants. In the Caldari State, this led to the redesign and redeployment of the Bantam.\n\
\n\
The Bantam, a strong and sturdy craft, was originally an extremely effective mining frigate. After its redesign, the Bantam's large structure had to give way for logistics systems that ate up some of its interior room but allowed it to focus extensively on shield support for fellow vessels.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 39, cpuo: 215, shhp: 310, sshp: 500, sahp: 225, lsc: 2, msc: 4, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 300},
      "583": { n: "Condor", mg: 61, pmg: 5, mta: 0, d: "The Condor is an Attack Frigate designed for fast aggressive combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
10% bonus to Light Missile and Rocket kinetic damage\n\
<br><b>Role Bonus:</b>\n\
80% reduction in Propulsion Jamming systems activation cost\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Condor is fast and agile. It has limited cargo space so it's not very suitable for trading or mining. It is best used as an assault vessel in a hit-and-run type of operations.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 35, cpuo: 185, shhp: 250, sshp: 400, sahp: 250, lsc: 2, msc: 4, hsc: 4, lasc: 3, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 400},
      "584": { n: "Griffin", mg: 61, pmg: 5, mta: 0, d: "The Griffin is a Frigate designed for disrupting enemy ships using electronic warfare.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
15% bonus to ECM Target Jammer strength\n\
10% bonus to ECM Target Jammers' capacitor need\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Griffin is much used by the Caldari Navy as a support vessel in combat squadrons, using its impressive array of electronic gadgetry to disrupt the operation of target ships, making them easy prey for traditional combat vessels.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 24, cpuo: 240, shhp: 250, sshp: 400, sahp: 250, lsc: 2, msc: 5, hsc: 2, lasc: 2, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 325},
      "585": { n: "Slasher", mg: 64, pmg: 5, mta: 0, d: "The Slasher is an Attack Frigate designed for fast aggressive combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
5% bonus to Small Projectile Turret damage\n\
7.5% bonus to Small Projectile Turret tracking speed\n\
<br><b>Role Bonus:</b>\n\
80% reduction in Propulsion Jamming systems activation cost\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Slasher is cheap, but versatile. It's been manufactured en masse, making it one of the most common vessels in Minmatar space. The Slasher is extremely fast, with decent armaments, and is popular amongst budding pirates and smugglers.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 34, cpuo: 135, shhp: 300, sshp: 350, sahp: 300, lsc: 2, msc: 4, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 430},
      "586": { n: "Probe", mg: 64, pmg: 5, mta: 0, d: "The Probe is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Probe is large compared to most Minmatar frigates and is considered a good scout and cargo-runner.  Uncharacteristically for a Minmatar ship, its hard outer coating makes it difficult to destroy, while the limited weapon hardpoints force it to rely on fighter assistance if engaged in combat.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 25, cpuo: 240, shhp: 225, sshp: 300, sahp: 300, lsc: 3, msc: 4, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 360},
      "587": { n: "Rifter", mg: 64, pmg: 5, mta: 0, d: "The Rifter is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
5% bonus to Small Projectile Turret damage\n\
7.5% bonus to Small Projectile Turret tracking\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Rifter is a very powerful combat frigate and can easily tackle the best frigates out there. It has gone through many radical design phases since its inauguration during the Minmatar Rebellion. The Rifter has a wide variety of offensive capabilities, making it an unpredictable and deadly adversary.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 38, cpuo: 125, shhp: 350, sshp: 450, sahp: 450, lsc: 3, msc: 3, hsc: 4, lasc: 2, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 355},
      "589": { n: "Executioner", mg: 72, pmg: 5, mta: 0, d: "The Executioner is an Attack Frigate designed for fast aggressive combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
10% bonus to Small Energy Turret capacitor use\n\
5% Small Energy Turret damage\n\
<br><b>Role Bonus:</b>\n\
80% reduction in Propulsion Jamming systems activation cost\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Executioner is another newly commissioned ship of the Amarr Imperial Navy. The Executioner was designed specially to counter the small, fast raider frigates of the Minmatar Republic; thus it is different from most Amarr ships in favoring speed over defenses. With the Executioner, the Amarrians have expanded their tactical capabilities on the battlefield.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 45, cpuo: 140, shhp: 350, sshp: 250, sahp: 450, lsc: 3, msc: 3, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 410},
      "590": { n: "Inquisitor", mg: 72, pmg: 5, mta: 0, d: "The Inquisitor is a Support Frigate designed to rapidly repair allied vessels in combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
10% bonus to Remote Armor Repair System repair amount\n\
10% reduction in Remote Armor Repair System capacitor use\n\
<br><b>Role Bonus:</b>\n\
500% bonus to range of remote armor repair systems\n\
<br><font size=\"14\"><b>Development</b></font>\n\
In YC114 each major empire faction, having been embroiled in a harrowing, extensive, long-term war, recognized the growing need for support and logistics functionality in their vessels during the kind of protracted interstellar warfare that might otherwise prove exhausting for its participants. In the Amarr Empire, this led to the redesign and redeployment of the Inquisitor.\n\
\n\
The Inquisitor was originally an example of how the Amarr Imperial Navy modeled their design to counter specific tactics employed by the other empires. After its redesign, it was exclusively devoted to the role of a support frigate, and its formerly renowned missile capabilities gave way to a focus on remote armor repair.\n\
", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 51, cpuo: 135, shhp: 330, sshp: 225, sahp: 500, lsc: 4, msc: 2, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 310},
      "591": { n: "Tormentor", mg: 72, pmg: 5, mta: 0, d: "The Tormentor is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
10% bonus to Small Energy Turret capacitor use\n\
5% bonus to Small Energy Turret damage\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Tormentor has been in service for many decades. For most of that time it saw service as a mining ship, its size barring it from making any kind of impact on the battlefield. As with most Amarr ships, however, its strong defenses always made it a tough opponent to crack, and with recent advances in turret capacitor use and damage output, its lasers have now stopped digging into dead ore and are instead focused on boring through the hulls of hapless vessels in combat.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 50, cpuo: 130, shhp: 400, sshp: 350, sahp: 500, lsc: 4, msc: 3, hsc: 3, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 335},
      "592": { n: "Navitas", mg: 77, pmg: 5, mta: 0, d: "The Navitas is a Support Frigate designed to rapidly repair allied vessels in combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
10% bonus to Remote Armor Repair System repair amount\n\
10% reduction in Remote Armor Repair System capacitor use\n\
<br><b>Role Bonus:</b>\n\
500% bonus to range of remote armor repair systems\n\
<br><font size=\"14\"><b>Development</b></font>\n\
In YC114 each major empire faction, having been embroiled in a harrowing, extensive, long-term war, recognized the growing need for support and logistics functionality in their vessels during the kind of protracted interstellar warfare that might otherwise prove exhausting for its participants. In the Gallente Federation, this led to the redesign and redeployment of the Navitas.\n\
\n\
The Navitas had been a solid mining vessel that had seen wide use by independent excavators, along with being one of the best ships available for budding traders and even for much-maligned scavengers. After its redesign, its long-range scanners and sturdy outer shell gave way entirely for remote repairing capabilities, moving the Navitas away from the calming buzz of mining lasers and into the roar of battle.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 49, cpuo: 145, shhp: 335, sshp: 250, sahp: 400, lsc: 3, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 330},
      "593": { n: "Tristan", mg: 77, pmg: 5, mta: 0, d: "The Tristan is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Small Hybrid Turret tracking speed\n\
10% bonus to Drone tracking and hitpoints\n\
<br><font size=\"14\"><b>Development</b></font>\n\
Often nicknamed The Fat Man this nimble little frigate is mainly used by the Federation in escort duties or on short-range patrols. The Tristan has been very popular throughout Gallente space for years because of its versatility. It is rather expensive, but buyers will definitely get their money's worth, as the Tristan is one of the more powerful frigates available on the market.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 35, cpuo: 130, shhp: 650, sshp: 350, sahp: 450, lsc: 3, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 325},
      "594": { n: "Incursus", mg: 77, pmg: 5, mta: 0, d: "The Incursus is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Armor Repairer effectiveness\n\
5% bonus to Small Hybrid Turret damage\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Incursus may be found both spearheading and bulwarking Gallente military operations. Its speed makes it excellent for skirmishing duties, while its resilience helps it outlast its opponents on the battlefield. Incursus-class ships move together in groups and can quickly and effectively gang up on ships many times their size and overwhelm them. In recent years the Incursus has increasingly found its way into the hands of pirates, who love its aggressive appearance. ", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 45, cpuo: 135, shhp: 500, sshp: 400, sahp: 450, lsc: 4, msc: 3, hsc: 3, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 340},
      "597": { n: "Punisher", mg: 72, pmg: 5, mta: 0, d: "The Punisher is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
5% Bonus to Small Energy Turret damage\n\
4% bonus to armor resistances\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Punisher is considered by many to be one of the best Amarr frigates in existence. As evidenced by its heavy armaments, the Punisher is mainly intended for large-scale military operations, acting in coordination with larger military vessels. With its damage output, however, it is also perfectly capable of punching its way right through unwary opponents.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 55, cpuo: 124, shhp: 450, sshp: 350, sahp: 500, lsc: 4, msc: 2, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 330},
      "598": { n: "Breacher", mg: 64, pmg: 5, mta: 0, d: "The Breacher is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
5% bonus to Light Missile and Rocket damage\n\
7.5% bonus to Shield Boost amount\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Breacher's structure is little more than a fragile scrapheap, but the ship's missile launcher hardpoints and superior sensors have placed it among the most valued Minmatar frigates when it comes to long range combat.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 35, cpuo: 180, shhp: 350, sshp: 500, sahp: 350, lsc: 3, msc: 4, hsc: 3, lasc: 3, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 350},
      "599": { n: "Burst", mg: 64, pmg: 5, mta: 0, d: "The Burst is a Support Frigate designed to rapidly repair allied vessels in combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
10% bonus to Shield Transporter boost amount\n\
10% reduction in Shield Transporter capacitor use\n\
<br><b>Role Bonus:</b>\n\
500% bonus to range of Shield Transporters\n\
<br><font size=\"14\"><b>Development</b></font>\n\
In YC114 each major empire faction, having been embroiled in a harrowing, extensive, long-term war, recognized the growing need for support and logistics functionality in their vessels during the kind of protracted interstellar warfare that might otherwise prove exhausting for its participants. In the Minmatar Republic, this led to the redesign and redeployment of the Burst.\n\
\n\
The Burst had been a small and fast cargo vessel. This all changed after the redesign, when the Burst found its small-time mining capabilities curtailed in lieu of logistics systems that moved its focus to shield support for friendly vessels.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 40, cpuo: 205, shhp: 290, sshp: 400, sahp: 250, lsc: 3, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 335},
      "602": { n: "Kestrel", mg: 61, pmg: 5, mta: 0, d: "The Kestrel is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
5% bonus to Light Missile and Rocket damage\n\
10% bonus to Missile velocity\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Kestrel is a heavy missile boat with one of the most sophisticated sensor arrays around. Interestingly enough, it has been used by both the Caldari Navy and several wealthy trade corporations as a cargo-hauling vessel. It is one of few trading vessels with good punching power, making it ideal for solo trade-runs in dangerous areas. The Kestrel was designed so that it could take up to four missile launchers but as a result it can not be equipped with turret weapons nor with mining lasers.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 45, cpuo: 180, shhp: 400, sshp: 500, sahp: 350, lsc: 2, msc: 4, hsc: 4, lasc: 4, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 320},
      "603": { n: "Merlin", mg: 61, pmg: 5, mta: 0, d: "The Merlin is a Combat Frigate designed for frontline fighting.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
4% bonus to shield resistances\n\
5% bonus to Small Hybrid Turret damage\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Merlin is the most powerful combat frigate of the Caldari. Its role has evolved through the years, and while its defenses have always remained exceptionally strong for a Caldari vessel, its offensive capabilities have evolved from versatile, jack-of-all-trades attack patterns into focused and deadly gunfire tactics. The Merlin's primary aim is to have its turrets punch holes in opponents' hulls.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 40, cpuo: 180, shhp: 400, sshp: 500, sahp: 350, lsc: 3, msc: 4, hsc: 3, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 310},
      "605": { n: "Heron", mg: 61, pmg: 5, mta: 0, d: "The Heron is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Heron has good computer and electronic systems, giving it the option of participating in electronic warfare. But it has relatively poor defenses and limited weaponry, so it's more commonly used for scouting and exploration.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 24, cpuo: 260, shhp: 200, sshp: 400, sahp: 200, lsc: 2, msc: 5, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 340},
      "607": { n: "Imicus", mg: 77, pmg: 5, mta: 0, d: "The Imicus is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Imicus is a slow but hard-shelled frigate, ideal for any type of scouting activity. Used by merchant, miner and combat groups, the Imicus is usually relied upon as the operation's eyes and ears when traversing low security sectors.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 21, cpuo: 250, shhp: 275, sshp: 275, sahp: 325, lsc: 3, msc: 4, hsc: 3, lasc: 0, tusc: 1, rsc: 3, rgsz: 1, calb: 400, vel: 330},
      "608": { n: "Atron", mg: 77, pmg: 5, mta: 0, d: "The Atron is an Attack Frigate designed for fast aggressive combat.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
10% bonus to Small Hybrid Turret falloff\n\
5% bonus to Small Hybrid Turret damage\n\
<br><b>Role Bonus:</b>\n\
80% reduction in Propulsion Jamming systems activation cost\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Atron is a hard nugget with an advanced power conduit system, but little space for cargo. Although it is a good harvester when it comes to mining, its main ability is as a combat vessel.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 37, cpuo: 147, shhp: 400, sshp: 300, sahp: 350, lsc: 3, msc: 3, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 420},
      "609": { n: "Maulus", mg: 77, pmg: 5, mta: 0, d: "The Maulus is a Frigate designed for disrupting enemy ships using electronic warfare.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Remote Sensor Dampener effectiveness\n\
10% reduction to Remote Sensor Dampeners' capacitor need\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Maulus is a high-tech vessel, specialized for electronic warfare. It is particularly valued in fleet warfare due to its optimization for sensor dampening technology.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 28, cpuo: 230, shhp: 400, sshp: 300, sahp: 350, lsc: 3, msc: 4, hsc: 2, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 375},
      "2161": { n: "Crucifier", mg: 72, pmg: 5, mta: 0, d: "The Crucifier is a Frigate designed for disrupting enemy ships using electronic warfare.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Tracking Disruptor effectiveness\n\
10% bonus to Tracking Disruptor optimal range\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Crucifier was first designed as an explorer/scout, but the current version employs the electronic equipment originally intended for scientific studies for more offensive purposes. The Crucifier's electronic and computer systems take up a large portion of the internal space leaving limited room for cargo or traditional weaponry.  ", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 27, cpuo: 235, shhp: 350, sshp: 250, sahp: 400, lsc: 3, msc: 4, hsc: 2, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 350},
      "3532": { n: "Echelon", mg: 1619, pmg: 1612, mta: 6, d: "A limited run of these ships was released to capsuleers at the end of YC 112, as a platform to utilize an influx of <url=showinfo:3581>Purloined Sansha Data Analyzers</url> that CONCORD had acquired. CONCORD's hope was that capsuleers could find a way to use the hardware against Sansha forces as they began mounting organized incursions into territories across the cluster.<br><br>The specialized nature of the hardware in Sansha Data Analyzer technology makes it incompatible with standard data buses, but this ship's unique hull design has an adaptive synchronization suite that allows it to interface with a wide range of non-standard hardware. CONCORD has remained silent on the origin of this design, but a number of amateur analysts maintain that ships of very similar configuration, carrying SCC and DED transponders, have been observed covertly on multiple prior occasions.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 0, cpuo: 0, shhp: 274, sshp: 235, sahp: 305, lsc: 0, msc: 1, hsc: 0, lasc: 0, tusc: 0, rsc: 0, rgsz: 1, calb: 0, vel: 404},
      "3766": { n: "Vigil", mg: 64, pmg: 5, mta: 0, d: "The Vigil is a Frigate designed for disrupting enemy ships using electronic warfare.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Target Painter effectiveness\n\
10% bonus to Target Painter optimal range\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Vigil is an unusual Minmatar ship, serving both as a long range scout as well as an electronic warfare platform. It is fast and agile, allowing it to keep the distance needed to avoid enemy fire while making use of jammers or other electronic gadgets.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 26, cpuo: 225, shhp: 300, sshp: 350, sahp: 300, lsc: 2, msc: 5, hsc: 2, lasc: 2, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 410},
      "11940": { n: "Gold Magnate", mg: 1619, pmg: 1612, mta: 9, d: "This ship is a masterly designed frigate as well as an exquisite piece of art. The Magnate class has been the pet project of a small, elite group of royal ship engineers for over a decade. When the Gold Magnate was offered as a prize in the Amarr Championships in YC105,  the long years of expensive research were paid off with the deployment of this beautiful ship.\n\
\n\
Amarr Frigate Skill Bonus: 5% bonus to Small Energy Turret capacitor use and Small Energy Turret damage per skill level.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 65, cpuo: 225, shhp: 781, sshp: 704, sahp: 976, lsc: 5, msc: 4, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 296},
      "11942": { n: "Silver Magnate", mg: 1619, pmg: 1612, mta: 9, d: "This decoratively designed ship is a luxury in its own class. The Magnate frigate has been the pet project of a small, elite group of royal ship engineers for a decade. Over the long years of expensive research, the design process has gone through several stages, and each stage has set a new standard in frigate design. The Silver Magnate, offered as a reward in the Amarr Championships in YC105, is one of the most recent iterations in this line of masterworks. \n\
\n\
Amarr Frigate Skill Bonus: 5% bonus to Small Energy Turret capacitor use and Small Energy Turret damage per skill level.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 60, cpuo: 200, shhp: 664, sshp: 508, sahp: 704, lsc: 4, msc: 4, hsc: 4, lasc: 0, tusc: 3, rsc: 3, rgsz: 1, calb: 400, vel: 296},
      "17619": { n: "Caldari Navy Hookbill", mg: 1366, pmg: 1362, mta: 7, d: "The Caldari Navy Hookbill is an advanced Combat Frigate produced for the forces of the Caldari State. \n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
20% bonus to Kinetic missile damage, 10% bonus to EM, Explosive, and Thermal missile damage\n\
10% bonus to Missile velocity\n\
<br><font size=\"14\"><b>Development</b></font>\n\
Long struggling with a reputation for being the ugly duckling of the Caldari ship repertoire, the Hookbill recently got a new lease on life, being upgraded from a routine patrol vessel into a fleet-standard frigate. With the advancements brought on by the upgrade, the time is nigh for this little slugger to prove itself on battlefields throughout Caldari space and beyond.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 37, cpuo: 165, shhp: 600, sshp: 725, sahp: 550, lsc: 2, msc: 5, hsc: 3, lasc: 3, tusc: 0, rsc: 3, rgsz: 1, calb: 400, vel: 360},
      "17703": { n: "Imperial Navy Slicer", mg: 1366, pmg: 1362, mta: 7, d: "The Imperial Navy Slicer is an advanced Combat Frigate produced for the forces of the Amarr Empire.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
10% bonus to Small Energy Turret optimal range\n\
25% bonus to Small Energy Turret damage\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Slicer is the Imperial Navy's pride and joy, and one of its biggest weapons in the continual fight against Matari insurgents.  Boasting tremendous range and versatility in equipment fittings, a great deal of armor strength and a powerful capacitor, the skilled Slicer pilot is able to take out most frigates with ease.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 50, cpuo: 125, shhp: 600, sshp: 550, sahp: 725, lsc: 5, msc: 2, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 350},
      "17812": { n: "Republic Fleet Firetail", mg: 1366, pmg: 1362, mta: 7, d: "The Republic Fleet Firetail is an advanced Combat Frigate produced for the forces of the Minmatar Republic.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
25% bonus to Small Projectile Turret damage\n\
7.5% bonus to Small Projectile Turret tracking\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Firetail is modeled off a fighter frigate known as the Shamrock, a design used by a small, now-extinct pirate faction known as Lazari Dromitus.  The blueprint found its way into the hands of Matari military forces after a raid on Lazari Dromitus's headquarters succeeded in killing its leader, thus beheading the organization and scattering its remnants to the four winds.  It has since been improved upon and upgraded, and the Firetail is now a mainstay in most Republic Fleet patrols.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 40, cpuo: 150, shhp: 525, sshp: 675, sahp: 675, lsc: 3, msc: 4, hsc: 3, lasc: 1, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 410},
      "17841": { n: "Federation Navy Comet", mg: 1366, pmg: 1362, mta: 7, d: "The Federation Navy Comet is an advanced Combat Frigate produced for the forces of the Gallente Federation. \n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% bonus to Small Hybrid Turret tracking speed\n\
20% bonus to Small Hybrid Turret damage\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Comet's design comes from one Arnerore Rylerave, an engineer and researcher of the Roden Shipyards corporation.  Originally created as a standard-issue police patrol vessel, its tremendous maneuverability and great offensive capabilities catapulted it into the Navy's ranks, where it is now a widely-used skirmish vessel.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 40, cpuo: 160, shhp: 750, sshp: 575, sahp: 700, lsc: 4, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 375},
      "17924": { n: "Succubus", mg: 1365, pmg: 1362, mta: 8, d: "The Succubus is one of the most feared frigates ever to harrow the spacelanes and asteroid belts of civilized space, and with good reason: tales abound of its superiority over ships twice or three times its size.  Whether you believe this to be fact or rumor, the Succubus will still strike fear in your heart.\n\
\n\
Special Ability: 100% bonus to Small Energy Turret damage\n\
\n\
Amarr Frigate Skill Bonus: 7.5% bonus to Small Energy Turret tracking per level\n\
Caldari Frigate Skill Bonus: 5% bonus to Small Energy Turret damage per level.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 58, cpuo: 175, shhp: 517, sshp: 609, sahp: 544, lsc: 2, msc: 4, hsc: 4, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 350, vel: 287},
      "17926": { n: "Cruor", mg: 1365, pmg: 1362, mta: 8, d: "Mottled, dark red, and shaped like a leech, the Cruor presents a fitting metaphor for the Blood Raiders' philosophy.  Designed almost solely to engage in their disturbingly effective tactic of energy draining and stasis webbing, this ship is a cornerstone in any effective Blood Raider fleet - and could play an intriguing role in more standard ones.\n\
\n\
Special Ability: 100% bonus to Small Energy Turret damage\n\
\n\
Amarr Frigate Skill Bonus: 15% bonus to Energy Vampire and Energy Neutralizer drain amount per level\n\
Minmatar Frigate Skill Bonus: 10% bonus to the velocity factor of stasis webifiers per level", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 57, cpuo: 137, shhp: 582, sshp: 583, sahp: 657, lsc: 3, msc: 3, hsc: 4, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 350, vel: 308},
      "17928": { n: "Daredevil", mg: 1365, pmg: 1362, mta: 8, d: "Little hard data is to be had on the Daredevil's exact origin, but it is believed that Guardian Angel engineers created it to serve as a defensive complement to the Cartel's Dramiel frigate.  In both flair and utility it closely resembles its counterpart, but it eschews offensive capabilities in favor of greater defensive potential and stronger armor plating.  A tough nut to crack.\n\
\n\
Special Ability: 200% bonus to Small Hybrid Turret damage\n\
\n\
Gallente Frigate Skill Bonus: 10% bonus to Small Hybrid Turret falloff per level\n\
Minmatar Frigate Skill Bonus: 10% bonus to the velocity factor of stasis webifiers per level", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 35, cpuo: 145, shhp: 657, sshp: 537, sahp: 582, lsc: 4, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 350, vel: 384},
      "17930": { n: "Worm", mg: 1365, pmg: 1362, mta: 8, d: "Korako 'The Rabbit' Kosakami, Gurista leader, has a particular love for stealing the Caldari's ship designs, souping them up, and turning them on their creators.  With the Worm, he has taken the Merlin design so familiar to Caldari pilots and turned it into a defensive powerhouse with increased electronic warfare capabilities.\n\
\n\
Special Ability: 50% bonus to Rocket and Light Missile velocity\n\
\n\
Caldari Frigate Skill Bonus: 4% shield resistance per level\n\
Gallente Frigate Skill Bonus: 5m3 Drone Bay Capacity per level", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 35, cpuo: 160, shhp: 623, sshp: 797, sahp: 582, lsc: 3, msc: 4, hsc: 3, lasc: 2, tusc: 0, rsc: 3, rgsz: 1, calb: 350, vel: 287},
      "17932": { n: "Dramiel", mg: 1365, pmg: 1362, mta: 8, d: "The Dramiel is the most long-standing and often-used ship design in the Angel Cartel's vast repertoire of vessels.  A frigate workhorse if ever there was one, this sharp-tusked, dangerous beauty can sting unimaginably hard if one is not prepared for its assault.\n\
\n\
Special Ability: 100% bonus to Small Projectile Turret damage\n\
Minmatar Frigate Skill Bonus: 10% bonus to Small Projectile Turret falloff per level\n\
Gallente Frigate Skill Bonus: 7.5% bonus to Small Projectile Turret tracking speed per level", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 37, cpuo: 133, shhp: 517, sshp: 583, sahp: 582, lsc: 3, msc: 4, hsc: 3, lasc: 1, tusc: 2, rsc: 3, rgsz: 1, calb: 350, vel: 460},
      "29248": { n: "Magnate", mg: 72, pmg: 5, mta: 0, d: "The Magnate is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
This Magnate-class frigate is one of the most decoratively designed ship classes in the Amarr Empire,  considered to be a pet project for a small, elite group of royal ship engineers for over a decade. The frigate's design has gone through several stages over the past decade, and new models of the Magnate appear every few years. The most recent versions of this ship – the Silver Magnate and the Gold Magnate – debuted as rewards in the Amarr Championships in YC105, though the original Magnate design is still a popular choice among Amarr pilots. ", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 26, cpuo: 230, shhp: 250, sshp: 250, sahp: 350, lsc: 4, msc: 3, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 350},
      "32880": { n: "Venture", mg: 1616, pmg: 5, mta: 0, d: "The Venture is a Frigate designed for mining in hostile environments.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:32918>Mining Frigate</a> skill bonus per level:</b>\n\
5% bonus to mining yield\n\
5% reduction to gas cloud harvesting duration per level\n\
<br><b>Role Bonus:</b>\n\
100% bonus to mining yield and gas cloud harvesting\n\
+2 warp core strength\n\
<br><font size=\"14\"><b>Development</b></font>\n\
Recognizing the dire need for a ship capable of fast operation in unsafe territories, ORE created the Venture. It was conceived as a vessel primed and ready for any capsuleer, no matter how new to the dangers of New Eden they might be, who wishes to engage in the respectable trade of mining.\n\
\n\
The Venture has amazing abilities to quickly drill through to the ores and gases it's after, harvesting them at the speed necessary for mining in hostile space, and getting out relatively unscathed.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 128, pgo: 45, cpuo: 240, shhp: 200, sshp: 225, sahp: 175, lsc: 1, msc: 3, hsc: 3, lasc: 0, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 335},
      "32983": { n: "Sukuuvestaa Heron", mg: 1619, pmg: 1612, mta: 0, d: "The Heron is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3330>Caldari Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Heron has good computer and electronic systems, giving it the option of participating in electronic warfare. But it has relatively poor defenses and limited weaponry, so it's more commonly used for scouting and exploration.\n\
\n\
This Heron bears the distinctive appearance of a vessel built for the Sukuuvestaa megacorporation. Known for extremely aggressive business practices, Sukuuvestaa is a powerful megacorporation with dealings in many sectors, most notably real estate and agriculture.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.75, athr: 0.55, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 1, pgo: 24, cpuo: 260, shhp: 200, sshp: 400, sahp: 200, lsc: 2, msc: 5, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 340},
      "32985": { n: "Inner Zone Shipping Imicus", mg: 1619, pmg: 1612, mta: 0, d: "The Imicus is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3328>Gallente Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Imicus is a slow but hard-shelled frigate, ideal for any type of scouting activity. Used by merchant, miner and combat groups, the Imicus is usually relied upon as the operation's eyes and ears when traversing low security sectors.\n\
\n\
This Imicus has served as a forward scout for Inner Zone Shipping's high value courier operations, as indicated by its distinctive corporate coloring.", tl: 1, aemr: 0.5, aexr: 0.9, akir: 0.65, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 8, pgo: 21, cpuo: 250, shhp: 275, sshp: 275, sahp: 325, lsc: 3, msc: 4, hsc: 3, lasc: 0, tusc: 1, rsc: 3, rgsz: 1, calb: 400, vel: 330},
      "32987": { n: "Sarum Magnate", mg: 1619, pmg: 1612, mta: 0, d: "The Magnate is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
This Magnate-class frigate is one of the most decoratively designed ship classes in the Amarr Empire,  considered to be a pet project for a small, elite group of royal ship engineers for over a decade. The frigate's design has gone through several stages over the past decade, and new models of the Magnate appear every few years. The most recent versions of this ship – the Silver Magnate and the Gold Magnate – debuted as rewards in the Amarr Championships in YC105, though the original Magnate design is still a popular choice among Amarr pilots. \n\
\n\
This Magnate is emblazoned with the coloring and insignia of the Sarum royal family. A visible beacon of Amarrian superiority, it was built to serve as a vanguard of the next great Reclaiming.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 26, cpuo: 230, shhp: 250, sshp: 250, sahp: 350, lsc: 4, msc: 3, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 350},
      "32989": { n: "Vherokior Probe", mg: 1619, pmg: 1612, mta: 0, d: "The Probe is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3329>Minmatar Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
The Probe is large compared to most Minmatar frigates and is considered a good scout and cargo-runner.  Uncharacteristically for a Minmatar ship, its hard outer coating makes it difficult to destroy, while the limited weapon hardpoints force it to rely on fighter assistance if engaged in combat.\n\
\n\
This Probe was commissioned by the Vherokior tribal leadership and bears their colors and insignia. The Vherokior have less political influence than many other tribes, but have become an integral part of both the public and private sectors of the Republic economy.", tl: 1, aemr: 0.4, aexr: 0.9, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 2, pgo: 25, cpuo: 240, shhp: 225, sshp: 300, sahp: 300, lsc: 3, msc: 4, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 360},
      "33190": { n: "Tash-Murkon Magnate", mg: 1619, pmg: 1612, mta: 0, d: "The Magnate is a Frigate designed for exploring the depths of space.\n\
<br><font size=\"14\"><b>Traits</b></font>\n\
<b><a href=showinfo:3331>Amarr Frigate</a> skill bonus per level:</b>\n\
7.5% increase to scan strength of probes\n\
5% bonus to Salvager cycle time\n\
<br><b>Role Bonus:</b>\n\
+5 Virus Strength to Relic and Data Analyzers\n\
<br><font size=\"14\"><b>Development</b></font>\n\
This Magnate-class frigate is one of the most decoratively designed ship classes in the Amarr Empire, considered to be a pet project for a small, elite group of royal ship engineers for over a decade. The frigate's design has gone through several stages over the past decade, and new models of the Magnate appear every few years.<br><br>In recent times the royal Amarr Houses have shown increased interest in the design. House Tash-Murkon came to the fore in Amarr politics only after the fall of another, disgraced house, and while they possess great wealth and considerable power, some feel they do not command the respect of the original, highborn royal Houses. This Magnate is a clear statement by house Tash-Murkon that they possess all the grandeur and powerful grace required to stand beside the most pious of Amarr, and despite a few nattering voices claiming they are yet again trying to purchase divinity, most people applaud the vessel as a proper effort to honor the glory of the Almighty.", tl: 1, aemr: 0.5, aexr: 0.8, akir: 0.75, athr: 0.65, semr: 1, sexr: 0.5, skir: 0.6, sthr: 0.8, hemr: 1, hexr: 1, hkir: 1, hthr: 1, r: 4, pgo: 26, cpuo: 230, shhp: 250, sshp: 250, sahp: 350, lsc: 4, msc: 3, hsc: 3, lasc: 2, tusc: 2, rsc: 3, rgsz: 1, calb: 400, vel: 350}
    },
    "46": {
      "434": { n: "1MN Microwarpdrive I", mg: 131, pmg: 52, mta: 0, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 15, spd: 500, srb: 500, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "438": { n: "1MN Afterburner II", mg: 542, pmg: 52, mta: 5, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 11, spd: 135, capn: 22, tl: 2, shhp: 40, ad: 10000},
      "439": { n: "1MN Afterburner I", mg: 542, pmg: 52, mta: 0, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 10, spd: 112.5, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "440": { n: "1MN Microwarpdrive II", mg: 131, pmg: 52, mta: 5, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 17, spd: 500, srb: 500, capn: 50, tl: 2, shhp: 40, ad: 10000},
      "5945": { n: "Prototype 100MN Microwarpdrive I", mg: 131, pmg: 52, mta: 4, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1250, spd: 500, srb: 500, capn: 720, tl: 1, r: 2, shhp: 40, ad: 10000},
      "5955": { n: "Experimental 100MN Afterburner I", mg: 542, pmg: 52, mta: 3, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 625, spd: 126, capn: 320, tl: 1, r: 2, shhp: 40, ad: 10000},
      "5971": { n: "Upgraded 1MN Microwarpdrive I", mg: 131, pmg: 52, mta: 1, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 15, spd: 500, srb: 500, capn: 45, tl: 1, r: 4, shhp: 40, ad: 10000},
      "5973": { n: "Limited 1MN Microwarpdrive I", mg: 131, pmg: 52, mta: 2, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 23, pg: 15, spd: 500, srb: 500, capn: 45, tl: 1, r: 8, shhp: 40, ad: 10000},
      "5975": { n: "Experimental 10MN Microwarpdrive I", mg: 131, pmg: 52, mta: 3, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 150, spd: 500, srb: 500, capn: 180, tl: 1, r: 1, shhp: 40, ad: 10000},
      "6001": { n: "Limited 1MN Afterburner I", mg: 542, pmg: 52, mta: 2, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 10, spd: 121.5, capn: 20, tl: 1, r: 4, shhp: 40, ad: 10000},
      "6003": { n: "Experimental 1MN Afterburner I", mg: 542, pmg: 52, mta: 3, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 10, spd: 126, capn: 20, tl: 1, r: 8, shhp: 40, ad: 10000},
      "6005": { n: "Experimental 10MN Afterburner I", mg: 542, pmg: 52, mta: 3, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 50, spd: 126, capn: 80, tl: 1, r: 1, shhp: 40, ad: 10000},
      "12052": { n: "10MN Microwarpdrive I", mg: 131, pmg: 52, mta: 0, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 150, spd: 500, srb: 500, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "12054": { n: "100MN Microwarpdrive I", mg: 131, pmg: 52, mta: 0, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1250, spd: 500, srb: 500, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "12056": { n: "10MN Afterburner I", mg: 542, pmg: 52, mta: 0, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 50, spd: 112.5, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "12058": { n: "10MN Afterburner II", mg: 542, pmg: 52, mta: 5, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 55, spd: 135, capn: 88, tl: 2, shhp: 40, ad: 10000},
      "12066": { n: "100MN Afterburner I", mg: 542, pmg: 52, mta: 0, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 625, spd: 112.5, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "12068": { n: "100MN Afterburner II", mg: 542, pmg: 52, mta: 5, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 688, spd: 135, capn: 352, tl: 2, shhp: 40, ad: 10000},
      "12076": { n: "10MN Microwarpdrive II", mg: 131, pmg: 52, mta: 5, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced..\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 165, spd: 500, srb: 500, capn: 198, tl: 2, shhp: 40, ad: 10000},
      "12084": { n: "100MN Microwarpdrive II", mg: 131, pmg: 52, mta: 5, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1375, spd: 500, srb: 500, capn: 792, tl: 2, shhp: 40, ad: 10000},
      "14102": { n: "Domination 100MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 688, spd: 144, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "14104": { n: "Shadow Serpentis 100MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 55, pg: 625, spd: 141, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "14106": { n: "Domination 10MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 55, spd: 144, capn: 60, tl: 1, shhp: 40, ad: 10000},
      "14108": { n: "Shadow Serpentis 10MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 28, pg: 50, spd: 141, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "14110": { n: "Domination 1MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boosts to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 11, spd: 144, capn: 15, tl: 1, shhp: 40, ad: 10000},
      "14112": { n: "Shadow Serpentis 1MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 17, pg: 10, spd: 141, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "14114": { n: "Domination 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1375, spd: 500, srb: 467, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "14116": { n: "Shadow Serpentis 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 83, pg: 1250, spd: 500, srb: 489, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "14118": { n: "Domination 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 175, spd: 500, srb: 467, capn: 160, tl: 1, shhp: 40, ad: 10000},
      "14120": { n: "Shadow Serpentis 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 55, pg: 150, spd: 500, srb: 489, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "14122": { n: "Domination 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 17, spd: 500, srb: 467, capn: 40, tl: 1, shhp: 40, ad: 10000},
      "14124": { n: "Shadow Serpentis 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 28, pg: 15, spd: 500, srb: 489, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "14484": { n: "Mizuro's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 153, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "14486": { n: "Hakim's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 156, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "14488": { n: "Gotan's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 159, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "14490": { n: "Tobias' Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 14, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 162, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "14492": { n: "Mizuro's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 444, capn: 567, tl: 1, shhp: 40, ad: 10000},
      "14494": { n: "Hakim's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 433, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "14496": { n: "Gotan's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 422, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "14498": { n: "Tobias' Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 14, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 411, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "14500": { n: "Brynn's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 58, pg: 625, spd: 150, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "14502": { n: "Tuvan's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 61, pg: 625, spd: 153, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "14504": { n: "Setele's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 63, pg: 625, spd: 156, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "14506": { n: "Cormack's Modified 100MN Afterburner", mg: 542, pmg: 52, mta: 14, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 66, pg: 625, spd: 159, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "14508": { n: "Brynn's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 87, pg: 1250, spd: 500, srb: 433, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "14510": { n: "Tuvan's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 91, pg: 1250, spd: 500, srb: 422, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "14512": { n: "Setele's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 95, pg: 1250, spd: 500, srb: 411, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "14514": { n: "Cormack's Modified 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 14, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Note: Battleship class module", cpu: 100, pg: 1250, spd: 500, srb: 400, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "15747": { n: "Republic Fleet 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 17, spd: 500, srb: 467, capn: 40, tl: 1, shhp: 40, ad: 10000},
      "15749": { n: "Republic Fleet 1MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 11, spd: 144, capn: 15, tl: 1, shhp: 40, ad: 10000},
      "15751": { n: "Republic Fleet 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 175, spd: 500, srb: 467, capn: 160, tl: 1, shhp: 40, ad: 10000},
      "15753": { n: "Republic Fleet 10MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 55, spd: 144, capn: 60, tl: 1, shhp: 40, ad: 10000},
      "15755": { n: "Republic Fleet 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 8, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1375, spd: 500, srb: 467, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "15757": { n: "Republic Fleet 100MN Afterburner", mg: 542, pmg: 52, mta: 8, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 688, spd: 144, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "15759": { n: "Federation Navy 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 28, pg: 15, spd: 500, srb: 489, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "15761": { n: "Federation Navy 1MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 17, pg: 10, spd: 141, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "15764": { n: "Federation Navy 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 55, pg: 150, spd: 500, srb: 489, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "15766": { n: "Federation Navy 10MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 28, pg: 50, spd: 141, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "15768": { n: "Federation Navy 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 83, pg: 1250, spd: 500, srb: 489, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "15770": { n: "Federation Navy 100MN Afterburner", mg: 542, pmg: 52, mta: 7, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 55, pg: 625, spd: 141, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "18658": { n: "Gistii C-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 13, spd: 153, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "18660": { n: "Gistum C-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 63, spd: 153, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "18662": { n: "Gist C-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 153, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "18664": { n: "Gistii B-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 13, spd: 156, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "18666": { n: "Gistum B-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 63, spd: 156, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "18668": { n: "Gist B-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 156, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "18670": { n: "Gistii A-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 15, pg: 13, spd: 159, capn: 20, tl: 1, shhp: 40, ad: 10000},
      "18672": { n: "Gistum A-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 25, pg: 63, spd: 159, capn: 80, tl: 1, shhp: 40, ad: 10000},
      "18674": { n: "Gist A-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 159, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "18676": { n: "Gist X-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 14, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 50, pg: 750, spd: 162, capn: 320, tl: 1, shhp: 40, ad: 10000},
      "18680": { n: "Coreli C-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 17, pg: 10, spd: 150, capn: 15, tl: 1, shhp: 40, ad: 10000},
      "18682": { n: "Corelum C-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 29, pg: 50, spd: 150, capn: 60, tl: 1, shhp: 40, ad: 10000},
      "18684": { n: "Core C-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 11, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 58, pg: 625, spd: 150, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "18686": { n: "Coreli B-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 18, pg: 10, spd: 153, capn: 15, tl: 1, shhp: 40, ad: 10000},
      "18688": { n: "Corelum B-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 31, pg: 50, spd: 153, capn: 60, tl: 1, shhp: 40, ad: 10000},
      "18690": { n: "Core B-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 12, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 61, pg: 625, spd: 153, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "18692": { n: "Coreli A-Type 1MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 19, pg: 10, spd: 156, capn: 15, tl: 1, shhp: 40, ad: 10000},
      "18694": { n: "Corelum A-Type 10MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 32, pg: 50, spd: 156, capn: 60, tl: 1, shhp: 40, ad: 10000},
      "18696": { n: "Core A-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 13, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 63, pg: 625, spd: 156, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "18698": { n: "Core X-Type 100MN Afterburner", mg: 542, pmg: 52, mta: 14, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 66, pg: 625, spd: 159, capn: 241, tl: 1, shhp: 40, ad: 10000},
      "19313": { n: "Coreli C-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 29, pg: 15, spd: 500, srb: 433, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "19315": { n: "Corelum C-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 58, pg: 150, spd: 500, srb: 433, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "19317": { n: "Core C-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 87, pg: 1250, spd: 500, srb: 433, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "19319": { n: "Coreli B-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 30, pg: 15, spd: 500, srb: 422, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "19321": { n: "Corelum B-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 61, pg: 150, spd: 500, srb: 422, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "19323": { n: "Core B-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 91, pg: 1250, spd: 500, srb: 422, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "19325": { n: "Coreli A-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 32, pg: 15, spd: 500, srb: 411, capn: 45, tl: 1, shhp: 40, ad: 10000},
      "19327": { n: "Corelum A-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 63, pg: 150, spd: 500, srb: 411, capn: 180, tl: 1, shhp: 40, ad: 10000},
      "19329": { n: "Core A-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 95, pg: 1250, spd: 500, srb: 411, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "19335": { n: "Core X-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 14, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Note: Battleship class module", cpu: 100, pg: 1250, spd: 500, srb: 400, capn: 720, tl: 1, shhp: 40, ad: 10000},
      "19337": { n: "Gistii C-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 18, spd: 500, srb: 444, capn: 38, tl: 1, shhp: 40, ad: 10000},
      "19339": { n: "Gistum C-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 180, spd: 500, srb: 444, capn: 150, tl: 1, shhp: 40, ad: 10000},
      "19341": { n: "Gist C-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 11, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 444, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "19343": { n: "Gistii B-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 18, spd: 500, srb: 433, capn: 38, tl: 1, shhp: 40, ad: 10000},
      "19345": { n: "Gistum B-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 180, spd: 500, srb: 433, capn: 150, tl: 1, shhp: 40, ad: 10000},
      "19347": { n: "Gist B-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 12, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 433, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "19349": { n: "Gistii A-Type 1MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 25, pg: 18, spd: 500, srb: 422, capn: 38, tl: 1, shhp: 40, ad: 10000},
      "19351": { n: "Gistum A-Type 10MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 50, pg: 180, spd: 500, srb: 422, capn: 150, tl: 1, shhp: 40, ad: 10000},
      "19353": { n: "Gist A-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 13, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 422, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "19359": { n: "Gist X-Type 100MN Microwarpdrive", mg: 131, pmg: 52, mta: 14, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Note: Battleship class module", cpu: 75, pg: 1500, spd: 500, srb: 411, capn: 600, tl: 1, shhp: 40, ad: 10000},
      "21470": { n: "1MN Analog Booster Rockets", mg: 542, pmg: 52, mta: 6, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 13, pg: 9, spd: 121.5, capn: 16, tl: 1, shhp: 40, ad: 10000},
      "21472": { n: "10MN Analog Booster Rockets", mg: 542, pmg: 52, mta: 6, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Cruiser class module", cpu: 21, pg: 45, spd: 112.5, capn: 64, tl: 1, shhp: 40, ad: 10000},
      "21474": { n: "100MN Analog Booster Rockets", mg: 542, pmg: 52, mta: 6, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Battleship class module", cpu: 43, pg: 563, spd: 112.5, capn: 256, tl: 1, shhp: 40, ad: 10000},
      "21476": { n: "1MN Digital Booster Rockets", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Frigate class module", cpu: 21, pg: 14, spd: 500, srb: 500, capn: 36, tl: 1, shhp: 40, ad: 10000},
      "21478": { n: "10MN Digital Booster Rockets", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must use part of the capacitor output and the shield just to maintain the integrity of its warp containment field.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Cruiser class module", cpu: 43, pg: 135, spd: 500, srb: 500, capn: 144, tl: 1, shhp: 40, ad: 10000},
      "21480": { n: "100MN Digital Booster Rockets", mg: 131, pmg: 52, mta: 6, d: "Massive boost to speed for a very short time. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module. The sheer amount of energy needed to power this system means that it must permanently reserve a fraction of the capacitor output just to maintain the integrity of its warp containment field, and when activated it substantially increases the ship's EM footprint.\n\
\n\
Penalty: Max capacitor reduced.\n\
\n\
Note: Battleship class module", cpu: 64, pg: 1125, spd: 500, srb: 500, capn: 576, tl: 1, shhp: 40, ad: 10000},
      "21857": { n: "Civilian Afterburner", mg: 760, pmg: 9, mta: 0, d: "Gives a boost to the maximum velocity of the ship when activated. The thrust that boosts the ship, and the corresponding maximum velocity bonus, are limited by the mass of the ship that uses this module.\n\
\n\
Note: Frigate class module", cpu: 2, pg: 1, spd: 32, capn: 5, tl: 1, shhp: 40, ad: 10000}
    },
    "52": {
      "447": { n: "Warp Scrambler I", mg: 682, pmg: 657, mta: 0, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 30, pg: 1, opt: 7500, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "448": { n: "Warp Scrambler II", mg: 682, pmg: 657, mta: 5, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 36, pg: 1, opt: 9000, acc: 0, capn: 5, tl: 2, shhp: 40, ad: 5000},
      "3242": { n: "Warp Disruptor I", mg: 682, pmg: 657, mta: 0, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 20000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "3244": { n: "Warp Disruptor II", mg: 682, pmg: 657, mta: 5, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 44, pg: 1, opt: 24000, acc: 0, capn: 25, tl: 2, shhp: 40, ad: 5000},
      "5399": { n: "J5 Prototype Warp Disruptor I", mg: 682, pmg: 657, mta: 3, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 34, pg: 1, opt: 20000, acc: 0, capn: 23, tl: 1, r: 1, shhp: 40, ad: 5000},
      "5401": { n: "Fleeting Warp Disruptor I", mg: 682, pmg: 657, mta: 2, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 36, pg: 1, opt: 20000, acc: 0, capn: 20, tl: 1, r: 2, shhp: 40, ad: 5000},
      "5403": { n: "Faint Warp Disruptor I", mg: 682, pmg: 657, mta: 4, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 32, pg: 1, opt: 20000, acc: 0, capn: 21, tl: 1, r: 4, shhp: 40, ad: 5000},
      "5405": { n: "Initiated Warp Disruptor I", mg: 682, pmg: 657, mta: 1, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 38, pg: 1, opt: 20000, acc: 0, capn: 24, tl: 1, r: 8, shhp: 40, ad: 5000},
      "5439": { n: "J5b Phased Prototype Warp Scrambler I", mg: 682, pmg: 657, mta: 3, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 27, pg: 1, opt: 8625, acc: 0, capn: 5, tl: 1, r: 1, shhp: 40, ad: 5000},
      "5441": { n: "Fleeting Progressive Warp Scrambler I", mg: 682, pmg: 657, mta: 2, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 29, pg: 1, opt: 8250, acc: 0, capn: 4, tl: 1, r: 2, shhp: 40, ad: 5000},
      "5443": { n: "Faint Epsilon Warp Scrambler I", mg: 682, pmg: 657, mta: 4, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 28, pg: 1, opt: 9000, acc: 0, capn: 4, tl: 1, r: 4, shhp: 40, ad: 5000},
      "5445": { n: "Initiated Harmonic Warp Scrambler I", mg: 682, pmg: 657, mta: 1, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 26, pg: 1, opt: 7875, acc: 0, capn: 5, tl: 1, r: 8, shhp: 40, ad: 5000},
      "14242": { n: "Dark Blood Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 28000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "14244": { n: "Domination Warp Disruptor", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 1, opt: 30000, acc: 0, capn: 28, tl: 1, shhp: 40, ad: 5000},
      "14246": { n: "Dread Guristas Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 24000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "14248": { n: "True Sansha Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 28000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "14250": { n: "Shadow Serpentis Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 26000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "14252": { n: "Dark Blood Warp Scrambler", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 1, opt: 10500, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14254": { n: "Domination Warp Scrambler", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 26, pg: 1, opt: 11250, acc: 0, capn: 6, tl: 1, shhp: 40, ad: 5000},
      "14256": { n: "Dread Guristas Warp Scrambler", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 26, pg: 1, opt: 10500, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14258": { n: "True Sansha Warp Scrambler", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 30, pg: 1, opt: 11250, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14260": { n: "Shadow Serpentis Warp Scrambler", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 30, pg: 1, opt: 10500, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14656": { n: "Mizuro's Modified Warp Disruptor", mg: 682, pmg: 657, mta: 11, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 2500, opt: 25000, acc: 0, capn: 50, tl: 1, shhp: 40, ad: 5000},
      "14658": { n: "Hakim's Modified Warp Disruptor", mg: 682, pmg: 657, mta: 12, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 3000, opt: 30000, acc: 0, capn: 60, tl: 1, shhp: 40, ad: 5000},
      "14660": { n: "Gotan's Modified Warp Disruptor", mg: 682, pmg: 657, mta: 13, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 3500, opt: 35000, acc: 0, capn: 70, tl: 1, shhp: 40, ad: 5000},
      "14662": { n: "Tobias' Modified Warp Disruptor", mg: 682, pmg: 657, mta: 14, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 4000, opt: 40000, acc: 0, capn: 80, tl: 1, shhp: 40, ad: 5000},
      "14664": { n: "Mizuro's Modified Warp Scrambler", mg: 682, pmg: 657, mta: 11, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 2500, opt: 12750, acc: 0, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14666": { n: "Hakim's Modified Warp Scrambler", mg: 682, pmg: 657, mta: 12, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 2650, opt: 13500, acc: 0, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14668": { n: "Gotan's Modified Warp Scrambler", mg: 682, pmg: 657, mta: 13, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 2800, opt: 14250, acc: 0, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14670": { n: "Tobias' Modified Warp Scrambler", mg: 682, pmg: 657, mta: 14, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 3000, opt: 15000, acc: 0, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "15887": { n: "Caldari Navy Warp Scrambler", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 22, pg: 1, opt: 9750, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "15889": { n: "Caldari Navy Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 24000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "15891": { n: "Republic Fleet Warp Disruptor", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 19, pg: 1, opt: 30000, acc: 0, capn: 28, tl: 1, shhp: 40, ad: 5000},
      "15893": { n: "Republic Fleet Warp Scrambler", mg: 682, pmg: 657, mta: 8, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 26, pg: 1, opt: 10500, acc: 0, capn: 6, tl: 1, shhp: 40, ad: 5000},
      "21510": { n: "Process-Interruptive Warp Disruptor", mg: 682, pmg: 657, mta: 6, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 34, pg: 1, opt: 22000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "21512": { n: "'Delineative' Warp Scrambler", mg: 682, pmg: 657, mta: 6, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 18, pg: 1, opt: 9000, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "28516": { n: "Khanid Navy Warp Disruptor", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping.", cpu: 40, pg: 1, opt: 24000, acc: 0, capn: 25, tl: 1, shhp: 40, ad: 5000},
      "28518": { n: "Khanid Navy Warp Scrambler", mg: 682, pmg: 657, mta: 7, d: "Disrupts the target ship's navigation computer which prevents it from warping or using a microwarpdrive.", cpu: 26, pg: 1, opt: 9750, acc: 0, capn: 5, tl: 1, shhp: 40, ad: 5000}
    },
    "53": {
      "450": { n: "Gatling Pulse Laser I", mg: 570, pmg: 558, mta: 0, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 4, pg: 5, opt: 4000, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.5, capn: 1.82, tl: 1, shhp: 40, cs: 1},
      "451": { n: "Dual Light Pulse Laser I", mg: 570, pmg: 558, mta: 0, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 8, pg: 6, opt: 4500, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2, capn: 2.67, tl: 1, shhp: 40, cs: 1},
      "452": { n: "Dual Light Beam Laser I", mg: 567, pmg: 557, mta: 0, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 12, pg: 7, opt: 8750, acc: 3000, rof: 3200, trk: 0.13, dmg: 2, capn: 3.89, tl: 1, shhp: 40, cs: 1},
      "453": { n: "Small Focused Pulse Laser I", mg: 570, pmg: 558, mta: 0, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 10, opt: 5000, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3, capn: 4.44, tl: 1, shhp: 40, cs: 1},
      "454": { n: "Small Focused Beam Laser I", mg: 567, pmg: 557, mta: 0, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 19, pg: 12, opt: 10000, acc: 4000, rof: 4000, trk: 0.1, dmg: 3, capn: 7.22, tl: 1, shhp: 40, cs: 1},
      "455": { n: "Quad Light Beam Laser I", mg: 568, pmg: 557, mta: 0, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 25, pg: 81, opt: 8000, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.5, capn: 5.45, tl: 1, shhp: 40, cs: 2},
      "456": { n: "Focused Medium Pulse Laser I", mg: 572, pmg: 558, mta: 0, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 114, opt: 9000, acc: 3000, rof: 4050, trk: 0.09, dmg: 2, capn: 8, tl: 1, shhp: 40, cs: 2},
      "457": { n: "Focused Medium Beam Laser I", mg: 568, pmg: 557, mta: 0, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 30, pg: 135, opt: 17500, acc: 6000, rof: 4800, trk: 0.042, dmg: 2, capn: 11.67, tl: 1, shhp: 40, cs: 2},
      "458": { n: "Heavy Pulse Laser I", mg: 572, pmg: 558, mta: 0, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 33, pg: 189, opt: 10000, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3, capn: 13.33, tl: 1, shhp: 40, cs: 2},
      "459": { n: "Heavy Beam Laser I", mg: 568, pmg: 557, mta: 0, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 35, pg: 225, opt: 20000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3, capn: 21.67, tl: 1, shhp: 40, cs: 2},
      "460": { n: "Dual Heavy Pulse Laser I", mg: 573, pmg: 558, mta: 0, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 1500, opt: 18000, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2, capn: 22.5, tl: 1, shhp: 40, cs: 3},
      "461": { n: "Dual Heavy Beam Laser I", mg: 569, pmg: 557, mta: 0, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 45, pg: 1575, opt: 35000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2, capn: 28, tl: 1, shhp: 40, cs: 3},
      "462": { n: "Mega Pulse Laser I", mg: 573, pmg: 558, mta: 0, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 50, pg: 2500, opt: 20000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3, capn: 36, tl: 1, shhp: 40, cs: 3},
      "463": { n: "Mega Beam Laser I", mg: 569, pmg: 557, mta: 0, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 55, pg: 2925, opt: 40000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3, capn: 52, tl: 1, shhp: 40, cs: 3},
      "464": { n: "Tachyon Beam Laser I", mg: 569, pmg: 557, mta: 0, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 60, pg: 3375, opt: 44000, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 4.5, capn: 76, tl: 1, shhp: 40, cs: 3},
      "2985": { n: "Dual Heavy Beam Laser II", mg: 569, pmg: 557, mta: 5, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 47, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.4, capn: 28, tl: 2, shhp: 40, cs: 3},
      "2993": { n: "Dual Light Beam Laser II", mg: 567, pmg: 557, mta: 5, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 13, pg: 8, opt: 10500, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.4, capn: 3.89, tl: 2, shhp: 40, cs: 1},
      "3001": { n: "Dual Light Pulse Laser II", mg: 570, pmg: 558, mta: 5, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 8, pg: 7, opt: 5400, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.4, capn: 2.67, tl: 2, shhp: 40, cs: 1},
      "3009": { n: "Focused Medium Beam Laser II", mg: 568, pmg: 557, mta: 5, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 32, pg: 149, opt: 21000, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.4, capn: 11.67, tl: 2, shhp: 40, cs: 2},
      "3017": { n: "Gatling Pulse Laser II", mg: 570, pmg: 558, mta: 5, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 4, pg: 6, opt: 4800, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.8, capn: 1.82, tl: 2, shhp: 40, cs: 1},
      "3025": { n: "Heavy Beam Laser II", mg: 568, pmg: 557, mta: 5, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 37, pg: 248, opt: 24000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.6, capn: 21.67, tl: 2, shhp: 40, cs: 2},
      "3033": { n: "Small Focused Beam Laser II", mg: 567, pmg: 557, mta: 5, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 20, pg: 13, opt: 12000, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.6, capn: 7.22, tl: 2, shhp: 40, cs: 1},
      "3041": { n: "Small Focused Pulse Laser II", mg: 570, pmg: 558, mta: 5, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 16, pg: 11, opt: 6000, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.6, capn: 4.44, tl: 2, shhp: 40, cs: 1},
      "3049": { n: "Mega Beam Laser II", mg: 569, pmg: 557, mta: 5, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 58, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.6, capn: 52, tl: 2, shhp: 40, cs: 3},
      "3057": { n: "Mega Pulse Laser II", mg: 573, pmg: 558, mta: 5, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 53, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.6, capn: 36, tl: 2, shhp: 40, cs: 3},
      "3065": { n: "Tachyon Beam Laser II", mg: 569, pmg: 557, mta: 5, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 63, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.4, capn: 76, tl: 2, shhp: 40, cs: 3},
      "3285": { n: "Quad Light Beam Laser II", mg: 568, pmg: 557, mta: 5, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Aurora, Gleam.", cpu: 26, pg: 89, opt: 9600, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.8, capn: 5.45, tl: 2, shhp: 40, cs: 2},
      "3512": { n: "Focused Medium Pulse Laser II", mg: 572, pmg: 558, mta: 5, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 29, pg: 125, opt: 10800, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.4, capn: 8, tl: 2, shhp: 40, cs: 2},
      "3520": { n: "Heavy Pulse Laser II", mg: 572, pmg: 558, mta: 5, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 35, pg: 208, opt: 12000, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.6, capn: 13.33, tl: 2, shhp: 40, cs: 2},
      "3559": { n: "Dual Modal Giga Pulse Laser I", mg: 774, pmg: 558, mta: 2, d: "One of the largest weapons currently in existence, this massive laser is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 67, pg: 125000, opt: 44000, acc: 10000, rof: 11813, trk: 0.0040512, dmg: 8.8, capn: 288, tl: 1, shhp: 40, cs: 4},
      "3561": { n: "Dual Giga Modal Laser I", mg: 773, pmg: 557, mta: 2, d: "One of the largest weapons currently in existence, this massive laser is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 84, pg: 162500, opt: 88000, acc: 32000, rof: 13500, trk: 0.002296875, dmg: 6.05, capn: 468, tl: 1, shhp: 40, cs: 4},
      "4147": { n: "Dual Heavy Pulse Laser II", mg: 573, pmg: 558, mta: 5, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires either regular or advanced frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray, Conflagration, Scorch.", cpu: 42, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.4, capn: 22.5, tl: 2, shhp: 40, cs: 3},
      "5175": { n: "Gatling Modal Laser I", mg: 570, pmg: 558, mta: 2, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 5, opt: 4400, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.65, capn: 1.638, tl: 1, r: 1, shhp: 40, cs: 1},
      "5177": { n: "Gatling Afocal Maser I", mg: 570, pmg: 558, mta: 1, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 5, opt: 4200, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.575, capn: 1.729, tl: 1, r: 2, shhp: 40, cs: 1},
      "5179": { n: "Gatling Modulated Energy Beam I", mg: 570, pmg: 558, mta: 4, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 5, opt: 4800, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.8, capn: 1.456, tl: 1, r: 4, shhp: 40, cs: 1},
      "5181": { n: "Gatling Anode Particle Stream I", mg: 570, pmg: 558, mta: 3, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 5, opt: 4600, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.725, capn: 1.547, tl: 1, r: 8, shhp: 40, cs: 1},
      "5215": { n: "Dual Modal Pulse Laser I", mg: 570, pmg: 558, mta: 2, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 6, pg: 6, opt: 4950, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.2, capn: 2.403, tl: 1, r: 1, shhp: 40, cs: 1},
      "5217": { n: "Dual Afocal Pulse Maser I", mg: 570, pmg: 558, mta: 1, d: "This light pulse energy weapon uses two separate maser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 7, pg: 6, opt: 4725, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.1, capn: 2.5365, tl: 1, r: 2, shhp: 40, cs: 1},
      "5219": { n: "Dual Modulated Pulse Energy Beam I", mg: 570, pmg: 558, mta: 4, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 6, pg: 6, opt: 5400, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.4, capn: 2.136, tl: 1, r: 4, shhp: 40, cs: 1},
      "5221": { n: "Dual Anode Pulse Particle Stream I", mg: 570, pmg: 558, mta: 3, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 7, pg: 6, opt: 5175, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.3, capn: 2.2695, tl: 1, r: 8, shhp: 40, cs: 1},
      "6631": { n: "Dual Modal Light Laser I", mg: 567, pmg: 557, mta: 2, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 10, pg: 7, opt: 9625, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.2, capn: 3.501, tl: 1, r: 1, shhp: 40, cs: 1},
      "6633": { n: "Dual Afocal Light Maser I", mg: 567, pmg: 557, mta: 1, d: "This light beam energy weapon uses two separate maser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 10, pg: 7, opt: 9188, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.1, capn: 3.6955, tl: 1, r: 2, shhp: 40, cs: 1},
      "6635": { n: "Dual Modulated Light Energy Beam I", mg: 567, pmg: 557, mta: 4, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 9, pg: 7, opt: 10500, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.4, capn: 3.112, tl: 1, r: 4, shhp: 40, cs: 1},
      "6637": { n: "Dual Anode Light Particle Stream I", mg: 567, pmg: 557, mta: 3, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 7, opt: 10063, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.3, capn: 3.3065, tl: 1, r: 8, shhp: 40, cs: 1},
      "6671": { n: "Small Focused Modal Pulse Laser I", mg: 570, pmg: 558, mta: 2, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 12, pg: 10, opt: 5500, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.3, capn: 3.996, tl: 1, r: 1, shhp: 40, cs: 1},
      "6673": { n: "Small Focused Afocal Pulse Maser I", mg: 570, pmg: 558, mta: 1, d: "A high-powered pulse energy weapon. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 13, pg: 10, opt: 5250, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.15, capn: 4.218, tl: 1, r: 2, shhp: 40, cs: 1},
      "6675": { n: "Small Focused Modulated Pulse Energy Beam I", mg: 570, pmg: 558, mta: 4, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 10, opt: 6000, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.6, capn: 3.552, tl: 1, r: 4, shhp: 40, cs: 1},
      "6677": { n: "Small Focused Anode Pulse Particle Stream I", mg: 570, pmg: 558, mta: 3, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 14, pg: 10, opt: 5750, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.45, capn: 3.774, tl: 1, r: 8, shhp: 40, cs: 1},
      "6715": { n: "Small Focused Modal Laser I", mg: 567, pmg: 557, mta: 2, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 16, pg: 12, opt: 11000, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.3, capn: 6.498, tl: 1, r: 1, shhp: 40, cs: 1},
      "6717": { n: "Small Focused Afocal Maser I", mg: 567, pmg: 557, mta: 1, d: "A high-powered beam energy weapon. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 17, pg: 12, opt: 10500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.15, capn: 6.859, tl: 1, r: 2, shhp: 40, cs: 1},
      "6719": { n: "Small Focused Modulated Energy Beam I", mg: 567, pmg: 557, mta: 4, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 12, opt: 12000, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.6, capn: 5.776, tl: 1, r: 4, shhp: 40, cs: 1},
      "6721": { n: "Small Focused Anode Particle Stream I", mg: 567, pmg: 557, mta: 3, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 18, pg: 12, opt: 11500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.45, capn: 6.137, tl: 1, r: 8, shhp: 40, cs: 1},
      "6757": { n: "Quad Modal Light Laser I", mg: 568, pmg: 557, mta: 2, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 21, pg: 81, opt: 8800, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.65, capn: 4.905, tl: 1, r: 1, shhp: 40, cs: 2},
      "6759": { n: "Quad Afocal Light Maser I", mg: 568, pmg: 557, mta: 1, d: "Uses four light maser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 81, opt: 8400, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.575, capn: 5.1775, tl: 1, r: 2, shhp: 40, cs: 2},
      "6761": { n: "Quad Modulated Light Energy Beam I", mg: 568, pmg: 557, mta: 4, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 20, pg: 81, opt: 9600, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.8, capn: 4.36, tl: 1, r: 4, shhp: 40, cs: 2},
      "6763": { n: "Quad Anode Light Particle Stream I", mg: 568, pmg: 557, mta: 3, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 23, pg: 81, opt: 9200, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.725, capn: 4.6325, tl: 1, r: 8, shhp: 40, cs: 2},
      "6805": { n: "Focused Modal Pulse Laser I", mg: 572, pmg: 558, mta: 2, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 23, pg: 114, opt: 9900, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.2, capn: 7.2, tl: 1, r: 1, shhp: 40, cs: 2},
      "6807": { n: "Focused Afocal Pulse Maser I", mg: 572, pmg: 558, mta: 1, d: "A high-powered, concentrated energy weapon designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 25, pg: 114, opt: 9450, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.1, capn: 7.6, tl: 1, r: 2, shhp: 40, cs: 2},
      "6809": { n: "Focused Modulated Pulse Energy Beam I", mg: 572, pmg: 558, mta: 4, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 114, opt: 10800, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.4, capn: 6.4, tl: 1, r: 4, shhp: 40, cs: 2},
      "6811": { n: "Focused Anode Pulse Particle Stream I", mg: 572, pmg: 558, mta: 3, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 114, opt: 10350, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.3, capn: 6.8, tl: 1, r: 8, shhp: 40, cs: 2},
      "6859": { n: "Focused Modal Medium Laser I", mg: 568, pmg: 557, mta: 2, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 25, pg: 135, opt: 19250, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.2, capn: 10.503, tl: 1, r: 1, shhp: 40, cs: 2},
      "6861": { n: "Focused Afocal Medium Maser I", mg: 568, pmg: 557, mta: 1, d: "A high-powered, concentrated energy weapon designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 27, pg: 135, opt: 18375, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.1, capn: 11.0865, tl: 1, r: 2, shhp: 40, cs: 2},
      "6863": { n: "Focused Modulated Medium Energy Beam I", mg: 568, pmg: 557, mta: 4, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 135, opt: 21000, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.4, capn: 9.336, tl: 1, r: 4, shhp: 40, cs: 2},
      "6865": { n: "Focused Anode Medium Particle Stream I", mg: 568, pmg: 557, mta: 3, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 135, opt: 20125, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.3, capn: 9.9195, tl: 1, r: 8, shhp: 40, cs: 2},
      "6919": { n: "Heavy Modal Pulse Laser I", mg: 572, pmg: 558, mta: 2, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 189, opt: 11000, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.3, capn: 11.997, tl: 1, r: 1, shhp: 40, cs: 2},
      "6921": { n: "Heavy Afocal Pulse Maser I", mg: 572, pmg: 558, mta: 1, d: "A heavy energy weapon designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 29, pg: 189, opt: 10500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.15, capn: 12.6635, tl: 1, r: 2, shhp: 40, cs: 2},
      "6923": { n: "Heavy Modulated Pulse Energy Beam I", mg: 572, pmg: 558, mta: 4, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 189, opt: 12000, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.6, capn: 10.664, tl: 1, r: 4, shhp: 40, cs: 2},
      "6925": { n: "Heavy Anode Pulse Particle Stream I", mg: 572, pmg: 558, mta: 3, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 31, pg: 189, opt: 11500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.45, capn: 11.3305, tl: 1, r: 8, shhp: 40, cs: 2},
      "6959": { n: "Heavy Modal Laser I", mg: 568, pmg: 557, mta: 2, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 29, pg: 225, opt: 22000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.3, capn: 19.503, tl: 1, r: 1, shhp: 40, cs: 2},
      "6961": { n: "Heavy Afocal Maser I", mg: 568, pmg: 557, mta: 1, d: "A high-powered heavy energy weapon designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 31, pg: 225, opt: 21000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.15, capn: 20.5865, tl: 1, r: 2, shhp: 40, cs: 2},
      "6963": { n: "Heavy Modulated Energy Beam I", mg: 568, pmg: 557, mta: 4, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 225, opt: 24000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.6, capn: 17.336, tl: 1, r: 4, shhp: 40, cs: 2},
      "6965": { n: "Heavy Anode Particle Stream I", mg: 568, pmg: 557, mta: 3, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 33, pg: 225, opt: 23000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.45, capn: 18.4195, tl: 1, r: 8, shhp: 40, cs: 2},
      "6999": { n: "Dual Heavy Modal Pulse Laser I", mg: 573, pmg: 558, mta: 2, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 34, pg: 1500, opt: 19800, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.2, capn: 20.3, tl: 1, r: 1, shhp: 40, cs: 3},
      "7001": { n: "Dual Heavy Afocal Pulse Maser I", mg: 573, pmg: 558, mta: 1, d: "This heavy pulse energy weapon uses two separate maser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1500, opt: 18900, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.1, capn: 21.4, tl: 1, r: 2, shhp: 40, cs: 3},
      "7003": { n: "Dual Heavy Modulated Pulse Energy Beam I", mg: 573, pmg: 558, mta: 4, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1500, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.4, capn: 18, tl: 1, r: 4, shhp: 40, cs: 3},
      "7005": { n: "Dual Heavy Anode Pulse Particle Stream I", mg: 573, pmg: 558, mta: 3, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 38, pg: 1500, opt: 20700, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.3, capn: 19.1, tl: 1, r: 8, shhp: 40, cs: 3},
      "7043": { n: "Dual Modal Heavy Laser I", mg: 569, pmg: 557, mta: 2, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 38, pg: 1575, opt: 38500, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.2, capn: 25.2, tl: 1, r: 1, shhp: 40, cs: 3},
      "7045": { n: "Dual Afocal Heavy Maser I", mg: 569, pmg: 557, mta: 1, d: "This heavy beam energy weapon uses two separate maser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 1575, opt: 36750, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.1, capn: 26.6, tl: 1, r: 2, shhp: 40, cs: 3},
      "7047": { n: "Dual Modulated Heavy Energy Beam I", mg: 569, pmg: 557, mta: 4, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1575, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.4, capn: 22.4, tl: 1, r: 4, shhp: 40, cs: 3},
      "7049": { n: "Dual Anode Heavy Particle Stream I", mg: 569, pmg: 557, mta: 3, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 42, pg: 1575, opt: 40250, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.3, capn: 23.8, tl: 1, r: 8, shhp: 40, cs: 3},
      "7083": { n: "Mega Modal Pulse Laser I", mg: 573, pmg: 558, mta: 2, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 42, pg: 2500, opt: 22000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.3, capn: 32.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "7085": { n: "Mega Afocal Pulse Maser I", mg: 573, pmg: 558, mta: 1, d: "A super-heavy pulse energy weapon designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 45, pg: 2500, opt: 21000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.15, capn: 34.2, tl: 1, r: 2, shhp: 40, cs: 3},
      "7087": { n: "Mega Modulated Pulse Energy Beam I", mg: 573, pmg: 558, mta: 4, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2500, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.6, capn: 28.8, tl: 1, r: 4, shhp: 40, cs: 3},
      "7089": { n: "Mega Anode Pulse Particle Stream I", mg: 573, pmg: 558, mta: 3, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 47, pg: 2500, opt: 23000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.45, capn: 30.6, tl: 1, r: 8, shhp: 40, cs: 3},
      "7123": { n: "Mega Modal Laser I", mg: 569, pmg: 557, mta: 2, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 46, pg: 2925, opt: 44000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.3, capn: 46.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "7125": { n: "Mega Afocal Maser I", mg: 569, pmg: 557, mta: 1, d: "A super-heavy beam energy weapon designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 49, pg: 2925, opt: 42000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.15, capn: 49.4, tl: 1, r: 2, shhp: 40, cs: 3},
      "7127": { n: "Mega Modulated Energy Beam I", mg: 569, pmg: 557, mta: 4, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 2925, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.6, capn: 41.6, tl: 1, r: 4, shhp: 40, cs: 3},
      "7131": { n: "Mega Anode Particle Stream I", mg: 569, pmg: 557, mta: 3, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 52, pg: 2925, opt: 46000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.45, capn: 44.2, tl: 1, r: 8, shhp: 40, cs: 3},
      "7167": { n: "Tachyon Modal Laser I", mg: 569, pmg: 557, mta: 2, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 51, pg: 3375, opt: 48400, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 4.95, capn: 68.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "7169": { n: "Tachyon Afocal Maser I", mg: 569, pmg: 557, mta: 1, d: "An ultra-heavy beam energy weapon designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 54, pg: 3375, opt: 46200, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 4.725, capn: 72.2, tl: 1, r: 2, shhp: 40, cs: 3},
      "7171": { n: "Tachyon Modulated Energy Beam I", mg: 569, pmg: 557, mta: 4, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3375, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.4, capn: 60.8, tl: 1, r: 4, shhp: 40, cs: 3},
      "7173": { n: "Tachyon Anode Particle Stream I", mg: 569, pmg: 557, mta: 3, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 57, pg: 3375, opt: 50600, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.175, capn: 64.6, tl: 1, r: 8, shhp: 40, cs: 3},
      "13791": { n: "Dark Blood Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.5, capn: 16.9, tl: 1, r: 4, shhp: 40, cs: 3},
      "13793": { n: "Dark Blood Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 8, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.5, capn: 21, tl: 1, r: 4, shhp: 40, cs: 3},
      "13795": { n: "Dark Blood Dual Light Beam Laser", mg: 567, pmg: 557, mta: 8, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 9, pg: 8, opt: 10938, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.5, capn: 2.9175, tl: 1, r: 4, shhp: 40, cs: 1},
      "13797": { n: "Dark Blood Dual Light Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 6, pg: 7, opt: 5625, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.5, capn: 2.0025, tl: 1, r: 4, shhp: 40, cs: 1},
      "13799": { n: "Dark Blood Focused Medium Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 149, opt: 21875, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.5, capn: 8.7525, tl: 1, r: 4, shhp: 40, cs: 2},
      "13801": { n: "Dark Blood Focused Medium Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 125, opt: 11250, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.5, capn: 6, tl: 1, r: 4, shhp: 40, cs: 2},
      "13803": { n: "Dark Blood Gatling Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 6, opt: 5000, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.875, capn: 1.365, tl: 1, r: 4, shhp: 40, cs: 1},
      "13805": { n: "Dark Blood Heavy Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 248, opt: 25000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.75, capn: 16.2525, tl: 1, r: 4, shhp: 40, cs: 2},
      "13807": { n: "Dark Blood Heavy Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 208, opt: 12500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.75, capn: 9.9975, tl: 1, r: 4, shhp: 40, cs: 2},
      "13809": { n: "Dark Blood Small Focused Beam Laser", mg: 567, pmg: 557, mta: 8, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 13, opt: 12500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.75, capn: 5.415, tl: 1, r: 4, shhp: 40, cs: 1},
      "13811": { n: "Dark Blood Small Focused Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 10, opt: 6250, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.75, capn: 3.33, tl: 1, r: 4, shhp: 40, cs: 1},
      "13813": { n: "Dark Blood Mega Beam Laser", mg: 569, pmg: 557, mta: 8, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.75, capn: 39, tl: 1, r: 4, shhp: 40, cs: 3},
      "13815": { n: "Dark Blood Mega Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.75, capn: 27, tl: 1, r: 4, shhp: 40, cs: 3},
      "13817": { n: "Dark Blood Tachyon Beam Laser", mg: 569, pmg: 557, mta: 8, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.625, capn: 57, tl: 1, r: 4, shhp: 40, cs: 3},
      "13819": { n: "Dark Blood Quad Beam Laser", mg: 568, pmg: 557, mta: 8, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 20, pg: 89, opt: 10000, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.875, capn: 4.0875, tl: 1, r: 4, shhp: 40, cs: 2},
      "13820": { n: "True Sansha Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 8, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.5, capn: 21, tl: 1, r: 4, shhp: 40, cs: 3},
      "13821": { n: "True Sansha Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.5, capn: 16.9, tl: 1, r: 4, shhp: 40, cs: 3},
      "13822": { n: "True Sansha Dual Light Beam Laser", mg: 567, pmg: 557, mta: 8, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 9, pg: 8, opt: 10938, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.5, capn: 2.9175, tl: 1, r: 4, shhp: 40, cs: 1},
      "13823": { n: "True Sansha Dual Light Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 6, pg: 7, opt: 5625, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.5, capn: 2.0025, tl: 1, r: 4, shhp: 40, cs: 1},
      "13824": { n: "True Sansha Focused Medium Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 149, opt: 21875, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.5, capn: 8.7525, tl: 1, r: 4, shhp: 40, cs: 2},
      "13825": { n: "True Sansha Focused Medium Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 125, opt: 11250, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.5, capn: 6, tl: 1, r: 4, shhp: 40, cs: 2},
      "13826": { n: "True Sansha Gatling Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 6, opt: 5000, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.875, capn: 1.365, tl: 1, r: 4, shhp: 40, cs: 1},
      "13827": { n: "True Sansha Heavy Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 248, opt: 25000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.75, capn: 16.2525, tl: 1, r: 4, shhp: 40, cs: 2},
      "13828": { n: "True Sansha Heavy Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 208, opt: 12500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.75, capn: 9.9975, tl: 1, r: 4, shhp: 40, cs: 2},
      "13829": { n: "True Sansha Small Focused Beam Laser", mg: 567, pmg: 557, mta: 8, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 13, opt: 12500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.75, capn: 5.415, tl: 1, r: 4, shhp: 40, cs: 1},
      "13830": { n: "True Sansha Small Focused Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 10, opt: 6250, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.75, capn: 3.33, tl: 1, r: 4, shhp: 40, cs: 1},
      "13831": { n: "True Sansha Mega Beam Laser", mg: 569, pmg: 557, mta: 8, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.75, capn: 39, tl: 1, r: 4, shhp: 40, cs: 3},
      "13832": { n: "True Sansha Mega Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.75, capn: 27, tl: 1, r: 4, shhp: 40, cs: 3},
      "13833": { n: "True Sansha Quad Beam Laser", mg: 568, pmg: 557, mta: 8, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 20, pg: 89, opt: 10000, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.875, capn: 4.0875, tl: 1, r: 4, shhp: 40, cs: 2},
      "13834": { n: "True Sansha Tachyon Beam Laser", mg: 569, pmg: 557, mta: 8, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.625, capn: 57, tl: 1, r: 4, shhp: 40, cs: 3},
      "14417": { n: "Selynne's Modified Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 12, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.75, capn: 21, tl: 1, shhp: 40, cs: 3},
      "14419": { n: "Chelm's Modified Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 14, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 3, capn: 22.4, tl: 1, shhp: 40, cs: 3},
      "14421": { n: "Raysere's Modified Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 12, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.75, capn: 21, tl: 1, shhp: 40, cs: 3},
      "14423": { n: "Draclira's Modified Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 14, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 3, capn: 22.4, tl: 1, shhp: 40, cs: 3},
      "14425": { n: "Tairei's Modified Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 12, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.75, capn: 16.9, tl: 1, shhp: 40, cs: 3},
      "14427": { n: "Ahremen's Modified Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 14, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 3, capn: 18, tl: 1, shhp: 40, cs: 3},
      "14429": { n: "Brokara's Modified Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 12, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.75, capn: 16.9, tl: 1, shhp: 40, cs: 3},
      "14431": { n: "Vizan's Modified Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 14, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 3, capn: 18, tl: 1, shhp: 40, cs: 3},
      "14433": { n: "Selynne's Modified Mega Beam Laser", mg: 569, pmg: 557, mta: 12, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 4.125, capn: 39, tl: 1, shhp: 40, cs: 3},
      "14435": { n: "Chelm's Modified Mega Beam Laser", mg: 569, pmg: 557, mta: 14, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 4.5, capn: 41.6, tl: 1, shhp: 40, cs: 3},
      "14437": { n: "Raysere's Modified Mega Beam Laser", mg: 569, pmg: 557, mta: 12, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 4.125, capn: 39, tl: 1, shhp: 40, cs: 3},
      "14439": { n: "Draclira's Modified Mega Beam Laser", mg: 569, pmg: 557, mta: 14, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 4.5, capn: 41.6, tl: 1, shhp: 40, cs: 3},
      "14441": { n: "Tairei's Modified Mega Pulse Laser", mg: 573, pmg: 558, mta: 12, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 4.125, capn: 27, tl: 1, shhp: 40, cs: 3},
      "14443": { n: "Ahremen's Modified Mega Pulse Laser", mg: 573, pmg: 558, mta: 14, d: "A super-heavy pulse laser designed for medium range engagements. \n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 4.5, capn: 28.8, tl: 1, shhp: 40, cs: 3},
      "14445": { n: "Brokara's Modified Mega Pulse Laser", mg: 573, pmg: 558, mta: 12, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 4.125, capn: 27, tl: 1, shhp: 40, cs: 3},
      "14447": { n: "Vizan's Modified Mega Pulse Laser", mg: 573, pmg: 558, mta: 14, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 4.5, capn: 28.8, tl: 1, shhp: 40, cs: 3},
      "14449": { n: "Selynne's Modified Tachyon Beam Laser", mg: 569, pmg: 557, mta: 12, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 6.1875, capn: 57, tl: 1, shhp: 40, cs: 3},
      "14451": { n: "Chelm's Modified Tachyon Beam Laser", mg: 569, pmg: 557, mta: 13, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 6.75, capn: 60.8, tl: 1, shhp: 40, cs: 3},
      "14453": { n: "Raysere's Modified Tachyon Beam Laser", mg: 569, pmg: 557, mta: 12, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 6.1875, capn: 57, tl: 1, shhp: 40, cs: 3},
      "14455": { n: "Draclira's Modified Tachyon Beam Laser", mg: 569, pmg: 557, mta: 13, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 6.75, capn: 60.8, tl: 1, shhp: 40, cs: 3},
      "15845": { n: "Ammatar Navy Tachyon Beam Laser", mg: 569, pmg: 557, mta: 8, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.625, capn: 57, tl: 1, r: 4, shhp: 40, cs: 3},
      "15846": { n: "Ammatar Navy Quad Beam Laser", mg: 568, pmg: 557, mta: 8, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 20, pg: 89, opt: 10000, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.875, capn: 4.0875, tl: 1, r: 4, shhp: 40, cs: 2},
      "15847": { n: "Ammatar Navy Mega Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.75, capn: 27, tl: 1, r: 4, shhp: 40, cs: 3},
      "15848": { n: "Ammatar Navy Mega Beam Laser", mg: 569, pmg: 557, mta: 8, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.75, capn: 39, tl: 1, r: 4, shhp: 40, cs: 3},
      "15849": { n: "Ammatar Navy Small Focused Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 10, opt: 6250, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.75, capn: 3.33, tl: 1, r: 4, shhp: 40, cs: 1},
      "15850": { n: "Ammatar Navy Small Focused Beam Laser", mg: 567, pmg: 557, mta: 8, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 13, opt: 12500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.75, capn: 5.415, tl: 1, r: 4, shhp: 40, cs: 1},
      "15851": { n: "Ammatar Navy Heavy Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 208, opt: 12500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.75, capn: 9.9975, tl: 1, r: 4, shhp: 40, cs: 2},
      "15852": { n: "Ammatar Navy Heavy Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 248, opt: 25000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.75, capn: 16.2525, tl: 1, r: 4, shhp: 40, cs: 2},
      "15853": { n: "Ammatar Navy Gatling Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 6, opt: 5000, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.875, capn: 1.365, tl: 1, r: 4, shhp: 40, cs: 1},
      "15854": { n: "Ammatar Navy Focused Medium Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 125, opt: 11250, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.5, capn: 6, tl: 1, r: 4, shhp: 40, cs: 2},
      "15855": { n: "Ammatar Navy Focused Medium Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 149, opt: 21875, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.5, capn: 8.7525, tl: 1, r: 4, shhp: 40, cs: 2},
      "15856": { n: "Ammatar Navy Dual Light Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. Requires frequency crystal ammo types: gamma, infrared, microwave, multifrequency, radio, standard, ultraviolet, xray.", cpu: 6, pg: 7, opt: 5625, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.5, capn: 2.0025, tl: 1, r: 4, shhp: 40, cs: 1},
      "15857": { n: "Ammatar Navy Dual Light Beam Laser", mg: 567, pmg: 557, mta: 8, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 9, pg: 8, opt: 10938, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.5, capn: 2.9175, tl: 1, r: 4, shhp: 40, cs: 1},
      "15858": { n: "Ammatar Navy Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.5, capn: 16.9, tl: 1, r: 4, shhp: 40, cs: 3},
      "15859": { n: "Ammatar Navy Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 8, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.5, capn: 21, tl: 1, r: 4, shhp: 40, cs: 3},
      "15860": { n: "Imperial Navy Tachyon Beam Laser", mg: 569, pmg: 557, mta: 8, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3712, opt: 52800, acc: 20000, rof: 12500, trk: 0.0139205, dmg: 5.625, capn: 57, tl: 1, r: 4, shhp: 40, cs: 3},
      "15861": { n: "Imperial Navy Quad Beam Laser", mg: 568, pmg: 557, mta: 8, d: "Uses four light laser focusing systems. Low powered, but makes up for it with a fast firing rate. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 20, pg: 89, opt: 10000, acc: 1000, rof: 3150, trk: 0.081, dmg: 1.875, capn: 4.0875, tl: 1, r: 4, shhp: 40, cs: 2},
      "15862": { n: "Imperial Navy Mega Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2750, opt: 24000, acc: 8000, rof: 7875, trk: 0.03375, dmg: 3.75, capn: 27, tl: 1, r: 4, shhp: 40, cs: 3},
      "15863": { n: "Imperial Navy Mega Beam Laser", mg: 569, pmg: 557, mta: 8, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 3217, opt: 48000, acc: 16000, rof: 9000, trk: 0.0153125, dmg: 3.75, capn: 39, tl: 1, r: 4, shhp: 40, cs: 3},
      "15864": { n: "Imperial Navy Small Focused Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 11, pg: 10, opt: 6250, acc: 2000, rof: 3500, trk: 0.24625, dmg: 3.75, capn: 3.33, tl: 1, r: 4, shhp: 40, cs: 1},
      "15865": { n: "Imperial Navy Small Focused Beam Laser", mg: 567, pmg: 557, mta: 8, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 13, opt: 12500, acc: 4000, rof: 4000, trk: 0.1, dmg: 3.75, capn: 5.415, tl: 1, r: 4, shhp: 40, cs: 1},
      "15866": { n: "Imperial Navy Heavy Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 208, opt: 12500, acc: 4000, rof: 5250, trk: 0.08125, dmg: 3.75, capn: 9.9975, tl: 1, r: 4, shhp: 40, cs: 2},
      "15867": { n: "Imperial Navy Heavy Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 248, opt: 25000, acc: 8000, rof: 6000, trk: 0.033, dmg: 3.75, capn: 16.2525, tl: 1, r: 4, shhp: 40, cs: 2},
      "15868": { n: "Imperial Navy Gatling Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "Rapid fire multi-barreled energy weapon that delivers a steady stream of damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 3, pg: 6, opt: 5000, acc: 500, rof: 2100, trk: 0.308125, dmg: 1.875, capn: 1.365, tl: 1, r: 4, shhp: 40, cs: 1},
      "15869": { n: "Imperial Navy Focused Medium Pulse Laser", mg: 572, pmg: 558, mta: 8, d: "A high-energy, concentrated laser designed for short to medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 22, pg: 125, opt: 11250, acc: 3000, rof: 4050, trk: 0.09, dmg: 2.5, capn: 6, tl: 1, r: 4, shhp: 40, cs: 2},
      "15870": { n: "Imperial Navy Focused Medium Beam Laser", mg: 568, pmg: 557, mta: 8, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 149, opt: 21875, acc: 6000, rof: 4800, trk: 0.042, dmg: 2.5, capn: 8.7525, tl: 1, r: 4, shhp: 40, cs: 2},
      "15871": { n: "Imperial Navy Dual Light Pulse Laser", mg: 570, pmg: 558, mta: 8, d: "This light pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. Good skirmish weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 6, pg: 7, opt: 5625, acc: 1500, rof: 2700, trk: 0.27375, dmg: 2.5, capn: 2.0025, tl: 1, r: 4, shhp: 40, cs: 1},
      "15872": { n: "Imperial Navy Dual Light Beam Laser", mg: 567, pmg: 557, mta: 8, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 9, pg: 8, opt: 10938, acc: 3000, rof: 3200, trk: 0.13, dmg: 2.5, capn: 2.9175, tl: 1, r: 4, shhp: 40, cs: 1},
      "15873": { n: "Imperial Navy Dual Heavy Pulse Laser", mg: 573, pmg: 558, mta: 8, d: "This heavy pulse laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 32, pg: 1650, opt: 21600, acc: 6000, rof: 6075, trk: 0.0375, dmg: 2.5, capn: 16.9, tl: 1, r: 4, shhp: 40, cs: 3},
      "15874": { n: "Imperial Navy Dual Heavy Beam Laser", mg: 569, pmg: 557, mta: 8, d: "This heavy beam laser uses two separate laser focusing systems to reduce the cool down period between shots. A great weapon for medium to long range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 36, pg: 1732, opt: 42000, acc: 12000, rof: 7200, trk: 0.0175, dmg: 2.5, capn: 21, tl: 1, r: 4, shhp: 40, cs: 3},
      "20444": { n: "Dual Giga Pulse Laser I", mg: 774, pmg: 558, mta: 0, d: "One of the largest weapons currently in existence, this massive laser is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 80, pg: 125000, opt: 40000, acc: 10000, rof: 11813, trk: 0.0040512, dmg: 8, capn: 320, tl: 1, shhp: 40, cs: 4},
      "20446": { n: "Dual Giga Beam Laser I", mg: 773, pmg: 557, mta: 0, d: "One of the largest weapons currently in existence, this massive laser is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 100, pg: 162500, opt: 80000, acc: 32000, rof: 13500, trk: 0.002296875, dmg: 5.5, capn: 520, tl: 1, shhp: 40, cs: 4},
      "23834": { n: "'Mace' Dual Light Beam Laser I", mg: 567, pmg: 557, mta: 6, d: "This light beam laser uses two separate laser focusing systems to reduce the cool down period between shots. Good short to medium range weapon. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 10, pg: 6, opt: 8750, acc: 3600, rof: 3200, trk: 0.13, dmg: 2.4, capn: 3.89, tl: 1, shhp: 40, cs: 1},
      "23836": { n: "'Longbow' Small Focused Pulse Laser I", mg: 570, pmg: 558, mta: 6, d: "A high-powered pulse laser. Good for short to medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 12, pg: 9, opt: 5000, acc: 2400, rof: 3500, trk: 0.24625, dmg: 3.6, capn: 4.44, tl: 1, shhp: 40, cs: 1},
      "23838": { n: "'Gauntlet' Small Focused Beam Laser I", mg: 567, pmg: 557, mta: 6, d: "A high-powered beam laser. Good for medium range encounters. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 15, pg: 10, opt: 10000, acc: 4800, rof: 4000, trk: 0.1, dmg: 3.6, capn: 7.22, tl: 1, shhp: 40, cs: 1},
      "23840": { n: "'Crossbow' Focused Medium Beam Laser I", mg: 568, pmg: 557, mta: 6, d: "A high-energy, concentrated laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 24, pg: 122, opt: 17500, acc: 7200, rof: 4800, trk: 0.042, dmg: 2.4, capn: 11.67, tl: 1, shhp: 40, cs: 2},
      "23842": { n: "'Joust' Heavy Pulse Laser I", mg: 572, pmg: 558, mta: 6, d: "A heavy laser designed for short to medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 26, pg: 170, opt: 10000, acc: 4800, rof: 5250, trk: 0.08125, dmg: 3.6, capn: 13.33, tl: 1, shhp: 40, cs: 2},
      "23844": { n: "'Arquebus' Heavy Beam Laser I", mg: 568, pmg: 557, mta: 6, d: "A high-energy heavy laser designed for medium range engagements. Delivers powerful damage. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 28, pg: 203, opt: 20000, acc: 9600, rof: 6000, trk: 0.033, dmg: 3.6, capn: 21.67, tl: 1, shhp: 40, cs: 2},
      "23846": { n: "'Halberd' Mega Pulse Laser I", mg: 573, pmg: 558, mta: 0, d: "A super-heavy pulse laser designed for medium range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 40, pg: 2250, opt: 20000, acc: 9600, rof: 7875, trk: 0.03375, dmg: 3.6, capn: 36, tl: 1, shhp: 40, cs: 3},
      "23848": { n: "'Catapult' Mega Beam Laser I", mg: 569, pmg: 557, mta: 6, d: "A super-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 44, pg: 2632, opt: 40000, acc: 19200, rof: 9000, trk: 0.0153125, dmg: 3.6, capn: 52, tl: 1, shhp: 40, cs: 3},
      "23850": { n: "'Ballista' Tachyon Beam Laser I", mg: 569, pmg: 557, mta: 6, d: "An ultra-heavy beam laser designed for medium to long range engagements. \n\
\n\
Requires frequency crystal ammo types: Gamma, Infrared, Microwave, Multifrequency, Radio, Standard, Ultraviolet, Xray.", cpu: 48, pg: 3037, opt: 44000, acc: 24000, rof: 12500, trk: 0.0139205, dmg: 5.4, capn: 76, tl: 1, shhp: 40, cs: 3}
    },
    "55": {
      "484": { n: "125mm Gatling AutoCannon I", mg: 574, pmg: 559, mta: 0, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 3, pg: 1, opt: 800, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.0625, capn: 0, tl: 1, shhp: 40, cs: 1},
      "485": { n: "150mm Light AutoCannon I", mg: 574, pmg: 559, mta: 0, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 6, pg: 2, opt: 900, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.475, capn: 0, tl: 1, shhp: 40, cs: 1},
      "486": { n: "200mm AutoCannon I", mg: 574, pmg: 559, mta: 0, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 9, pg: 4, opt: 1000, acc: 4800, rof: 3750, trk: 0.315, dmg: 2.8875, capn: 0, tl: 1, shhp: 40, cs: 1},
      "487": { n: "250mm Light Artillery Cannon I", mg: 577, pmg: 560, mta: 0, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 12, pg: 8, opt: 8050, acc: 8750, rof: 8500, trk: 0.0825, dmg: 4.62, capn: 0, tl: 1, shhp: 40, cs: 1},
      "488": { n: "280mm Howitzer Artillery I", mg: 577, pmg: 560, mta: 0, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 15, pg: 12, opt: 10000, acc: 8750, rof: 10710, trk: 0.066, dmg: 6.403, capn: 0, tl: 1, shhp: 40, cs: 1},
      "489": { n: "Dual 180mm AutoCannon I", mg: 575, pmg: 559, mta: 0, d: "This dual 180mm autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 18, pg: 80, opt: 1600, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.0625, capn: 0, tl: 1, shhp: 40, cs: 2},
      "490": { n: "220mm Vulcan AutoCannon I", mg: 575, pmg: 559, mta: 0, d: "The 220mm multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 21, pg: 100, opt: 1800, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.31, capn: 0, tl: 1, shhp: 40, cs: 2},
      "491": { n: "425mm AutoCannon I", mg: 575, pmg: 559, mta: 0, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 24, pg: 140, opt: 2000, acc: 9600, rof: 5625, trk: 0.1056, dmg: 2.8875, capn: 0, tl: 1, shhp: 40, cs: 2},
      "492": { n: "650mm Artillery Cannon I", mg: 578, pmg: 560, mta: 0, d: "A powerful long-range cannon. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 27, pg: 180, opt: 16100, acc: 17500, rof: 12750, trk: 0.0275, dmg: 4.62, capn: 0, tl: 1, shhp: 40, cs: 2},
      "493": { n: "720mm Howitzer Artillery I", mg: 578, pmg: 560, mta: 0, d: "This 720mm rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 30, pg: 225, opt: 20000, acc: 17500, rof: 20003, trk: 0.022, dmg: 7.97276025, capn: 0, tl: 1, shhp: 40, cs: 2},
      "494": { n: "Dual 425mm AutoCannon I", mg: 576, pmg: 559, mta: 0, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 33, pg: 1250, opt: 3200, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.0625, capn: 0, tl: 1, shhp: 40, cs: 3},
      "495": { n: "Dual 650mm Repeating Artillery I", mg: 576, pmg: 559, mta: 0, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 36, pg: 1500, opt: 3600, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.444203042, capn: 0, tl: 1, shhp: 40, cs: 3},
      "496": { n: "800mm Repeating Artillery I", mg: 576, pmg: 559, mta: 0, d: "A four-barreled, intermediate-range, powerful cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 39, pg: 2000, opt: 4000, acc: 19200, rof: 7875, trk: 0.0432, dmg: 2.695, capn: 0, tl: 1, shhp: 40, cs: 3},
      "497": { n: "1200mm Artillery Cannon I", mg: 579, pmg: 560, mta: 0, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 42, pg: 2750, opt: 32200, acc: 35000, rof: 21038, trk: 0.01125, dmg: 5.082, capn: 0, tl: 1, shhp: 40, cs: 3},
      "498": { n: "1400mm Howitzer Artillery I", mg: 579, pmg: 560, mta: 0, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 45, pg: 3250, opt: 40000, acc: 35000, rof: 40163, trk: 0.009, dmg: 10.672, capn: 0, tl: 1, shhp: 40, cs: 3},
      "2865": { n: "1200mm Artillery Cannon II", mg: 579, pmg: 560, mta: 5, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 44, pg: 3025, opt: 38640, acc: 35000, rof: 21038, trk: 0.01125, dmg: 6.098, capn: 0, tl: 2, shhp: 40, cs: 3},
      "2873": { n: "125mm Gatling AutoCannon II", mg: 574, pmg: 559, mta: 5, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 3, pg: 1, opt: 960, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.475, capn: 0, tl: 2, shhp: 40, cs: 1},
      "2881": { n: "150mm Light AutoCannon II", mg: 574, pmg: 559, mta: 5, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 6, pg: 2, opt: 1080, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.97, capn: 0, tl: 2, shhp: 40, cs: 1},
      "2889": { n: "200mm AutoCannon II", mg: 574, pmg: 559, mta: 5, d: "The 200mm is a powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 9, pg: 4, opt: 1200, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.465, capn: 0, tl: 2, shhp: 40, cs: 1},
      "2897": { n: "220mm Vulcan AutoCannon II", mg: 575, pmg: 559, mta: 5, d: "The 220mm multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 22, pg: 110, opt: 2160, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.772, capn: 0, tl: 2, shhp: 40, cs: 2},
      "2905": { n: "250mm Light Artillery Cannon II", mg: 577, pmg: 560, mta: 5, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 13, pg: 9, opt: 9660, acc: 8750, rof: 8500, trk: 0.0825, dmg: 5.544, capn: 0, tl: 2, shhp: 40, cs: 1},
      "2913": { n: "425mm AutoCannon II", mg: 575, pmg: 559, mta: 5, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 25, pg: 154, opt: 2400, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.465, capn: 0, tl: 2, shhp: 40, cs: 2},
      "2921": { n: "650mm Artillery Cannon II", mg: 578, pmg: 560, mta: 5, d: "A powerful long-range cannon. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 28, pg: 198, opt: 19320, acc: 17500, rof: 12750, trk: 0.0275, dmg: 5.544, capn: 0, tl: 2, shhp: 40, cs: 2},
      "2929": { n: "800mm Repeating Artillery II", mg: 576, pmg: 559, mta: 5, d: "A four-barreled, intermediate-range, powerful cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 41, pg: 2200, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.234, capn: 0, tl: 2, shhp: 40, cs: 3},
      "2937": { n: "Dual 180mm AutoCannon II", mg: 575, pmg: 559, mta: 5, d: "This dual 180mm autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 19, pg: 88, opt: 1920, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.475, capn: 0, tl: 2, shhp: 40, cs: 2},
      "2945": { n: "Dual 425mm AutoCannon II", mg: 576, pmg: 559, mta: 5, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 35, pg: 1375, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.475, capn: 0, tl: 2, shhp: 40, cs: 3},
      "2953": { n: "Dual 650mm Repeating Artillery II", mg: 576, pmg: 559, mta: 5, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Barrage, Hail.", cpu: 38, pg: 1650, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.93304365, capn: 0, tl: 2, shhp: 40, cs: 3},
      "2961": { n: "1400mm Howitzer Artillery II", mg: 579, pmg: 560, mta: 5, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 47, pg: 3575, opt: 48000, acc: 35000, rof: 40163, trk: 0.009, dmg: 12.807, capn: 0, tl: 2, shhp: 40, cs: 3},
      "2969": { n: "720mm Howitzer Artillery II", mg: 578, pmg: 560, mta: 5, d: "This 720mm rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 32, pg: 248, opt: 24000, acc: 17500, rof: 20003, trk: 0.022, dmg: 9.5673123, capn: 0, tl: 2, shhp: 40, cs: 2},
      "2977": { n: "280mm Howitzer Artillery II", mg: 577, pmg: 560, mta: 5, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following regular and advanced projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, Titanium Sabot, Quake, Tremor.", cpu: 16, pg: 13, opt: 12000, acc: 8750, rof: 10710, trk: 0.066, dmg: 7.684, capn: 0, tl: 2, shhp: 40, cs: 1},
      "3571": { n: "Quad 3500mm Gallium Cannon", mg: 775, pmg: 560, mta: 2, d: "One of the largest weapons currently in existence, this massive artillery cannon is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 65, pg: 162500, opt: 79200, acc: 70000, rof: 35438, trk: 0.0018, dmg: 14.02476106, capn: 0, tl: 1, shhp: 40, cs: 4},
      "3573": { n: "6x2500mm Heavy Gallium Repeating Cannon", mg: 776, pmg: 559, mta: 2, d: "One of the largest weapons currently in existence, this massive autocannon is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 52, pg: 100000, opt: 27500, acc: 28800, rof: 9450, trk: 0.00437, dmg: 6.38, capn: 0, tl: 1, shhp: 40, cs: 4},
      "8759": { n: "125mm Light 'Scout' Autocannon I", mg: 574, pmg: 559, mta: 4, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 2, pg: 1, opt: 960, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.475, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "8785": { n: "125mm Light Carbine Repeating Cannon I", mg: 574, pmg: 559, mta: 1, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 2, pg: 1, opt: 840, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.16645, capn: 0, tl: 1, r: 4, shhp: 40, cs: 1},
      "8787": { n: "125mm Light Gallium Machine Gun", mg: 574, pmg: 559, mta: 2, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 2, pg: 1, opt: 880, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.26875, capn: 0, tl: 1, r: 8, shhp: 40, cs: 1},
      "8789": { n: "125mm Light Prototype Automatic Cannon", mg: 574, pmg: 559, mta: 3, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 2, pg: 1, opt: 920, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.3727, capn: 0, tl: 1, r: 1, shhp: 40, cs: 1},
      "8815": { n: "150mm Light 'Scout' Autocannon I", mg: 574, pmg: 559, mta: 4, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 5, pg: 2, opt: 1080, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.97, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "8817": { n: "150mm Light Carbine Repeating Cannon I", mg: 574, pmg: 559, mta: 1, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 4, pg: 2, opt: 945, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.59875, capn: 0, tl: 1, r: 4, shhp: 40, cs: 1},
      "8819": { n: "150mm Light Gallium Machine Gun", mg: 574, pmg: 559, mta: 2, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 5, pg: 2, opt: 990, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.7225, capn: 0, tl: 1, r: 8, shhp: 40, cs: 1},
      "8821": { n: "150mm Light Prototype Automatic Cannon", mg: 574, pmg: 559, mta: 3, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 5, pg: 2, opt: 1035, acc: 4400, rof: 3375, trk: 0.362, dmg: 2.84625, capn: 0, tl: 1, r: 1, shhp: 40, cs: 1},
      "8863": { n: "200mm Light 'Scout' Autocannon I", mg: 574, pmg: 559, mta: 4, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 8, pg: 4, opt: 1200, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.465, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "8865": { n: "200mm Light Carbine Repeating Cannon I", mg: 574, pmg: 559, mta: 1, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 7, pg: 4, opt: 1050, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.0327, capn: 0, tl: 1, r: 4, shhp: 40, cs: 1},
      "8867": { n: "200mm Light Gallium Machine Gun", mg: 574, pmg: 559, mta: 2, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 8, pg: 4, opt: 1100, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.17625, capn: 0, tl: 1, r: 8, shhp: 40, cs: 1},
      "8869": { n: "200mm Light Prototype Automatic Cannon", mg: 574, pmg: 559, mta: 3, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 7, pg: 4, opt: 1150, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.32145, capn: 0, tl: 1, r: 1, shhp: 40, cs: 1},
      "8903": { n: "250mm Light 'Scout' Artillery I", mg: 577, pmg: 560, mta: 4, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 10, pg: 8, opt: 9660, acc: 8750, rof: 8500, trk: 0.0825, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "8905": { n: "250mm Light Carbine Howitzer I", mg: 577, pmg: 560, mta: 1, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 9, pg: 8, opt: 8453, acc: 8750, rof: 8500, trk: 0.0825, dmg: 4.851, capn: 0, tl: 1, r: 4, shhp: 40, cs: 1},
      "8907": { n: "250mm Light Gallium Cannon", mg: 577, pmg: 560, mta: 2, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 11, pg: 8, opt: 8855, acc: 8750, rof: 8500, trk: 0.0825, dmg: 5.082, capn: 0, tl: 1, r: 8, shhp: 40, cs: 1},
      "8909": { n: "250mm Light Prototype Siege Cannon", mg: 577, pmg: 560, mta: 3, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 10, pg: 8, opt: 9258, acc: 8750, rof: 8500, trk: 0.0825, dmg: 5.313, capn: 0, tl: 1, r: 1, shhp: 40, cs: 1},
      "9071": { n: "Dual 180mm 'Scout' Autocannon I", mg: 575, pmg: 559, mta: 4, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 16, pg: 80, opt: 1920, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.475, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "9073": { n: "Dual 180mm Carbine Repeating Cannon I", mg: 575, pmg: 559, mta: 1, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 14, pg: 80, opt: 1680, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.16645, capn: 0, tl: 1, r: 4, shhp: 40, cs: 2},
      "9091": { n: "Dual 180mm Gallium Machine Gun", mg: 575, pmg: 559, mta: 2, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 17, pg: 80, opt: 1760, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.26875, capn: 0, tl: 1, r: 8, shhp: 40, cs: 2},
      "9093": { n: "Dual 180mm Prototype Automatic Cannon", mg: 575, pmg: 559, mta: 3, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 15, pg: 80, opt: 1840, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.3727, capn: 0, tl: 1, r: 1, shhp: 40, cs: 2},
      "9127": { n: "220mm Medium 'Scout' Autocannon I", mg: 575, pmg: 559, mta: 4, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 18, pg: 100, opt: 2160, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.772, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "9129": { n: "220mm Medium Carbine Repeating Cannon I", mg: 575, pmg: 559, mta: 1, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 16, pg: 100, opt: 1890, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.4255, capn: 0, tl: 1, r: 4, shhp: 40, cs: 2},
      "9131": { n: "220mm Medium Gallium Machine Gun", mg: 575, pmg: 559, mta: 2, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 19, pg: 100, opt: 1980, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.541, capn: 0, tl: 1, r: 8, shhp: 40, cs: 2},
      "9133": { n: "220mm Medium Prototype Automatic Cannon", mg: 575, pmg: 559, mta: 3, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 17, pg: 100, opt: 2070, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.6565, capn: 0, tl: 1, r: 1, shhp: 40, cs: 2},
      "9135": { n: "425mm Medium 'Scout' Autocannon I", mg: 575, pmg: 559, mta: 4, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 21, pg: 140, opt: 2400, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.465, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "9137": { n: "425mm Medium Carbine Repeating Cannon I", mg: 575, pmg: 559, mta: 1, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 19, pg: 140, opt: 2100, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.0327, capn: 0, tl: 1, r: 4, shhp: 40, cs: 2},
      "9139": { n: "425mm Medium Gallium Machine Gun", mg: 575, pmg: 559, mta: 2, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 22, pg: 140, opt: 2200, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.17625, capn: 0, tl: 1, r: 8, shhp: 40, cs: 2},
      "9141": { n: "425mm Medium Prototype Automatic Cannon", mg: 575, pmg: 559, mta: 3, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 20, pg: 140, opt: 2300, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.32145, capn: 0, tl: 1, r: 1, shhp: 40, cs: 2},
      "9207": { n: "650mm Medium 'Scout' Artillery I", mg: 578, pmg: 560, mta: 4, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 24, pg: 180, opt: 19320, acc: 17500, rof: 12750, trk: 0.0275, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "9209": { n: "650mm Medium Carbine Howitzer I", mg: 578, pmg: 560, mta: 1, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 21, pg: 180, opt: 16905, acc: 17500, rof: 12750, trk: 0.0275, dmg: 4.851, capn: 0, tl: 1, r: 4, shhp: 40, cs: 2},
      "9211": { n: "650mm Medium Gallium Cannon", mg: 578, pmg: 560, mta: 2, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 25, pg: 180, opt: 17710, acc: 17500, rof: 12750, trk: 0.0275, dmg: 5.082, capn: 0, tl: 1, r: 8, shhp: 40, cs: 2},
      "9213": { n: "650mm Medium Prototype Siege Cannon", mg: 578, pmg: 560, mta: 3, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 22, pg: 180, opt: 18515, acc: 17500, rof: 12750, trk: 0.0275, dmg: 5.313, capn: 0, tl: 1, r: 1, shhp: 40, cs: 2},
      "9247": { n: "Dual 425mm 'Scout' Autocannon I", mg: 576, pmg: 559, mta: 4, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 29, pg: 1250, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.475, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "9249": { n: "Dual 425mm Carbine Repeating Cannon I", mg: 576, pmg: 559, mta: 1, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 1250, opt: 3360, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.16645, capn: 0, tl: 1, r: 4, shhp: 40, cs: 3},
      "9251": { n: "Dual 425mm Gallium Machine Gun", mg: 576, pmg: 559, mta: 2, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 31, pg: 1250, opt: 3520, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.26875, capn: 0, tl: 1, r: 8, shhp: 40, cs: 3},
      "9253": { n: "Dual 425mm Prototype Automatic Cannon", mg: 576, pmg: 559, mta: 3, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 1250, opt: 3680, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.3727, capn: 0, tl: 1, r: 1, shhp: 40, cs: 3},
      "9287": { n: "Dual 650mm 'Scout' Repeating Artillery I", mg: 576, pmg: 559, mta: 4, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 32, pg: 1500, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.93304365, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "9289": { n: "Dual 650mm Carbine Repeating Howitzer I", mg: 576, pmg: 559, mta: 1, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 1500, opt: 3780, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.566413194, capn: 0, tl: 1, r: 4, shhp: 40, cs: 3},
      "9291": { n: "Dual 650mm Gallium Repeating Cannon", mg: 576, pmg: 559, mta: 2, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 34, pg: 1500, opt: 3960, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.688623346, capn: 0, tl: 1, r: 8, shhp: 40, cs: 3},
      "9293": { n: "Dual 650mm Prototype Repeating Siege Cannon", mg: 576, pmg: 559, mta: 3, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 30, pg: 1500, opt: 4140, acc: 17600, rof: 7500, trk: 0.04968, dmg: 2.810833498, capn: 0, tl: 1, r: 1, shhp: 40, cs: 3},
      "9327": { n: "800mm Heavy 'Scout' Repeating Artillery I", mg: 576, pmg: 559, mta: 4, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 35, pg: 2000, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.234, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "9329": { n: "800mm Heavy Carbine Repeating Howitzer I", mg: 576, pmg: 559, mta: 1, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 31, pg: 2000, opt: 4200, acc: 19200, rof: 7875, trk: 0.0432, dmg: 2.83052, capn: 0, tl: 1, r: 4, shhp: 40, cs: 3},
      "9331": { n: "800mm Heavy Gallium Repeating Cannon", mg: 576, pmg: 559, mta: 2, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 2000, opt: 4400, acc: 19200, rof: 7875, trk: 0.0432, dmg: 2.9645, capn: 0, tl: 1, r: 8, shhp: 40, cs: 3},
      "9333": { n: "800mm Heavy Prototype Repeating Siege Cannon", mg: 576, pmg: 559, mta: 3, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 33, pg: 2000, opt: 4600, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.10002, capn: 0, tl: 1, r: 1, shhp: 40, cs: 3},
      "9367": { n: "1200mm Heavy 'Scout' Artillery I", mg: 579, pmg: 560, mta: 4, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 2750, opt: 38640, acc: 35000, rof: 21038, trk: 0.01125, dmg: 6.098, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "9369": { n: "1200mm Heavy Carbine Howitzer I", mg: 579, pmg: 560, mta: 1, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 33, pg: 2750, opt: 33810, acc: 35000, rof: 21038, trk: 0.01125, dmg: 5.336, capn: 0, tl: 1, r: 4, shhp: 40, cs: 3},
      "9371": { n: "1200mm Heavy Gallium Cannon", mg: 579, pmg: 560, mta: 2, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 39, pg: 2750, opt: 35420, acc: 35000, rof: 21038, trk: 0.01125, dmg: 5.59, capn: 0, tl: 1, r: 8, shhp: 40, cs: 3},
      "9377": { n: "1200mm Heavy Prototype Siege Cannon", mg: 579, pmg: 560, mta: 3, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 35, pg: 2750, opt: 37030, acc: 35000, rof: 21038, trk: 0.01125, dmg: 5.844, capn: 0, r: 1, shhp: 40, cs: 3},
      "9411": { n: "280mm 'Scout' Artillery I", mg: 577, pmg: 560, mta: 4, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 12, opt: 12000, acc: 8750, rof: 10710, trk: 0.066, dmg: 7.684, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "9413": { n: "280mm Carbine Howitzer I", mg: 577, pmg: 560, mta: 1, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 12, pg: 12, opt: 10500, acc: 8750, rof: 10710, trk: 0.066, dmg: 6.724, capn: 0, tl: 1, r: 4, shhp: 40, cs: 1},
      "9415": { n: "280mm Gallium Cannon", mg: 577, pmg: 560, mta: 2, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 14, pg: 12, opt: 11000, acc: 8750, rof: 10710, trk: 0.066, dmg: 7.044, capn: 0, tl: 1, r: 8, shhp: 40, cs: 1},
      "9417": { n: "280mm Prototype Siege Cannon", mg: 577, pmg: 560, mta: 3, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 12, pg: 12, opt: 11500, acc: 8750, rof: 10710, trk: 0.066, dmg: 7.364, capn: 0, tl: 1, r: 1, shhp: 40, cs: 1},
      "9451": { n: "720mm 'Scout' Artillery I", mg: 578, pmg: 560, mta: 4, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 27, pg: 225, opt: 24000, acc: 17500, rof: 20003, trk: 0.022, dmg: 9.5673123, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "9453": { n: "720mm Carbine Howitzer I", mg: 578, pmg: 560, mta: 1, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 24, pg: 225, opt: 21000, acc: 17500, rof: 20003, trk: 0.022, dmg: 8.372091546, capn: 0, tl: 1, r: 4, shhp: 40, cs: 2},
      "9455": { n: "720mm Gallium Cannon", mg: 578, pmg: 560, mta: 2, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 225, opt: 22000, acc: 17500, rof: 20003, trk: 0.022, dmg: 8.770036275, capn: 0, tl: 1, r: 8, shhp: 40, cs: 2},
      "9457": { n: "720mm Prototype Siege Cannon", mg: 578, pmg: 560, mta: 3, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 25, pg: 225, opt: 23000, acc: 17500, rof: 20003, trk: 0.022, dmg: 9.169367571, capn: 0, tl: 1, r: 1, shhp: 40, cs: 2},
      "9491": { n: "1400mm 'Scout' Artillery I", mg: 579, pmg: 560, mta: 4, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 40, pg: 3250, opt: 48000, acc: 35000, rof: 40163, trk: 0.009, dmg: 12.807, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "9493": { n: "1400mm Carbine Howitzer I", mg: 579, pmg: 560, mta: 1, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 36, pg: 3250, opt: 42000, acc: 35000, rof: 40163, trk: 0.009, dmg: 11.207, capn: 0, tl: 1, r: 4, shhp: 40, cs: 3},
      "9495": { n: "1400mm Gallium Cannon", mg: 579, pmg: 560, mta: 2, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 42, pg: 3250, opt: 44000, acc: 35000, rof: 40163, trk: 0.009, dmg: 11.739, capn: 0, tl: 1, r: 8, shhp: 40, cs: 3},
      "9497": { n: "1400mm Prototype Siege Cannon", mg: 579, pmg: 560, mta: 3, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 38, pg: 3250, opt: 46000, acc: 35000, rof: 40163, trk: 0.009, dmg: 12.274, capn: 0, tl: 1, r: 1, shhp: 40, cs: 3},
      "13773": { n: "Domination 125mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 1, pg: 1, opt: 960, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "13774": { n: "Domination 1200mm Artillery", mg: 579, pmg: 560, mta: 6, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 2750, opt: 38640, acc: 35000, rof: 19986, trk: 0.01125, dmg: 6.098, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "13775": { n: "Domination 1400mm Howitzer Artillery", mg: 579, pmg: 560, mta: 7, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 40, pg: 3250, opt: 48000, acc: 35000, rof: 38155, trk: 0.009, dmg: 12.807, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "13776": { n: "Domination 150mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 4, pg: 2, opt: 1080, acc: 4400, rof: 3375, trk: 0.362, dmg: 3.09375, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "13777": { n: "Domination 200mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 6, pg: 4, opt: 1200, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.6102, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "13778": { n: "Domination 220mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 14, pg: 110, opt: 2160, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.8875, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "13779": { n: "Domination 250mm Artillery", mg: 577, pmg: 560, mta: 7, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 10, pg: 9, opt: 9660, acc: 8750, rof: 8075, trk: 0.0825, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "13781": { n: "Domination 280mm Howitzer Artillery", mg: 577, pmg: 560, mta: 7, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 13, opt: 12000, acc: 8750, rof: 10175, trk: 0.066, dmg: 7.684, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "13782": { n: "Domination 425mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 17, pg: 154, opt: 2400, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.6102, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "13783": { n: "Domination 650mm Artillery", mg: 578, pmg: 560, mta: 7, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 24, pg: 180, opt: 19320, acc: 17500, rof: 12113, trk: 0.0275, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "13784": { n: "Domination 720mm Howitzer Artillery", mg: 578, pmg: 560, mta: 7, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 27, pg: 225, opt: 24000, acc: 17500, rof: 19003, trk: 0.022, dmg: 9.5673123, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "13785": { n: "Domination 800mm Repeating Artillery", mg: 576, pmg: 559, mta: 7, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 2200, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.36952, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "13786": { n: "Domination Dual 180mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 88, opt: 1920, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "13787": { n: "Domination Dual 425mm Autocannon", mg: 576, pmg: 559, mta: 7, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 23, pg: 1375, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "13788": { n: "Domination Dual 650mm Repeating Artillery", mg: 576, pmg: 559, mta: 7, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 1650, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 3.055253802, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "14457": { n: "Mizuro's Modified 800mm Repeating Artillery", mg: 576, pmg: 559, mta: 11, d: "A four-barreled, intermediate-range, powerful cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 2310, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.70524, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14459": { n: "Gotan's Modified 800mm Repeating Artillery", mg: 576, pmg: 559, mta: 13, d: "A four-barreled, intermediate-range, powerful cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 2420, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 4.0425, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14461": { n: "Hakim's Modified 1200mm Artillery Cannon", mg: 579, pmg: 560, mta: 7, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 2888, opt: 38640, acc: 35000, rof: 19986, trk: 0.01125, dmg: 6.708, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14463": { n: "Tobias' Modified 1200mm Artillery Cannon", mg: 579, pmg: 560, mta: 7, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 3025, opt: 33600, acc: 35000, rof: 19986, trk: 0.01125, dmg: 7.318, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14465": { n: "Hakim's Modified 1400mm Howitzer Artillery", mg: 579, pmg: 560, mta: 12, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 40, pg: 3413, opt: 48000, acc: 35000, rof: 38155, trk: 0.009, dmg: 14.087, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14467": { n: "Tobias' Modified 1400mm Howitzer Artillery", mg: 579, pmg: 560, mta: 14, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 40, pg: 3575, opt: 48000, acc: 35000, rof: 38155, trk: 0.009, dmg: 15.368, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14469": { n: "Mizuro's Modified Dual 425mm AutoCannon", mg: 576, pmg: 559, mta: 11, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 23, pg: 1444, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.83635, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14471": { n: "Gotan's Modified Dual 425mm AutoCannon", mg: 576, pmg: 559, mta: 13, d: "Combines the damage output of two 425mm intermediate-range autocannons.  \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 23, pg: 1513, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 3.09375, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14473": { n: "Mizuro's Modified Dual 650mm Repeating Artillery", mg: 576, pmg: 559, mta: 11, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 1733, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 3.361593917, capn: 0, tl: 1, shhp: 40, cs: 3},
      "14475": { n: "Gotan's Modified Dual 650mm Repeating Artillery", mg: 576, pmg: 559, mta: 13, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 1815, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 3.666304563, capn: 0, tl: 1, shhp: 40, cs: 3},
      "16046": { n: "Republic Fleet 125mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "This multi-barrel autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 1, pg: 1, opt: 960, acc: 4000, rof: 3000, trk: 0.417, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "16047": { n: "Republic Fleet 1200mm Artillery", mg: 579, pmg: 560, mta: 6, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 37, pg: 2750, opt: 38640, acc: 35000, rof: 19986, trk: 0.01125, dmg: 6.098, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "16048": { n: "Republic Fleet 1400mm Howitzer Artillery", mg: 579, pmg: 560, mta: 7, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 40, pg: 3250, opt: 48000, acc: 35000, rof: 38155, trk: 0.009, dmg: 12.807, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "16049": { n: "Republic Fleet 150mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "A simple but effective close combat autocannon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 4, pg: 2, opt: 1080, acc: 4400, rof: 3375, trk: 0.362, dmg: 3.09375, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "16050": { n: "Republic Fleet 200mm Autocannon", mg: 574, pmg: 559, mta: 7, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 6, pg: 4, opt: 1200, acc: 4800, rof: 3750, trk: 0.315, dmg: 3.6102, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "16051": { n: "Republic Fleet 220mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "This autocannon is designed for skirmish warfare. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 14, pg: 110, opt: 2160, acc: 8800, rof: 4725, trk: 0.12144, dmg: 2.8875, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "16052": { n: "Republic Fleet 250mm Artillery", mg: 577, pmg: 560, mta: 7, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 10, pg: 9, opt: 9660, acc: 8750, rof: 8075, trk: 0.0825, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "16053": { n: "Republic Fleet 280mm Howitzer Artillery", mg: 577, pmg: 560, mta: 7, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 13, opt: 12000, acc: 8750, rof: 10175, trk: 0.066, dmg: 7.684, capn: 0, tl: 1, r: 2, shhp: 40, cs: 1},
      "16054": { n: "Republic Fleet 425mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 17, pg: 154, opt: 2400, acc: 9600, rof: 5625, trk: 0.1056, dmg: 3.6102, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "16055": { n: "Republic Fleet 650mm Artillery", mg: 578, pmg: 560, mta: 7, d: "A powerful long-range artillery. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 24, pg: 180, opt: 19320, acc: 17500, rof: 12113, trk: 0.0275, dmg: 5.544, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "16056": { n: "Republic Fleet 720mm Howitzer Artillery", mg: 578, pmg: 560, mta: 7, d: "This rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 27, pg: 225, opt: 24000, acc: 17500, rof: 19003, trk: 0.022, dmg: 9.5673123, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "16057": { n: "Republic Fleet 800mm Repeating Artillery", mg: 576, pmg: 559, mta: 7, d: "Artillery cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 28, pg: 2200, opt: 4800, acc: 19200, rof: 7875, trk: 0.0432, dmg: 3.36952, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "16058": { n: "Republic Fleet Dual 180mm Autocannon", mg: 575, pmg: 559, mta: 7, d: "This autocannon is a simple but effective close combat weapon. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 88, opt: 1920, acc: 8000, rof: 4500, trk: 0.139656, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 2},
      "16059": { n: "Republic Fleet Dual 425mm Autocannon", mg: 576, pmg: 559, mta: 7, d: "Combines the damage output of two 425mm intermediate-range autocannons. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 23, pg: 1375, opt: 3840, acc: 16000, rof: 6750, trk: 0.057132, dmg: 2.57895, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "16060": { n: "Republic Fleet Dual 650mm Repeating Artillery", mg: 576, pmg: 559, mta: 7, d: "Powerful, intermediate-range repeating artillery cannon with a decent rate of fire. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 1650, opt: 4320, acc: 17600, rof: 7500, trk: 0.04968, dmg: 3.055253802, capn: 0, tl: 1, r: 2, shhp: 40, cs: 3},
      "20452": { n: "6x2500mm Repeating Artillery I", mg: 776, pmg: 559, mta: 0, d: "One of the largest weapons currently in existence, this massive autocannon is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 55, pg: 100000, opt: 25000, acc: 28800, rof: 9450, trk: 0.00437, dmg: 5.8, capn: 0, tl: 1, shhp: 40, cs: 4},
      "20454": { n: "Quad 3500mm Siege Artillery I", mg: 775, pmg: 560, mta: 0, d: "One of the largest weapons currently in existence, this massive artillery cannon is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 70, pg: 162500, opt: 72000, acc: 70000, rof: 35438, trk: 0.0018, dmg: 12.75, capn: 0, tl: 1, shhp: 40, cs: 4},
      "21545": { n: "200mm Light 'Jolt' Autocannon I", mg: 574, pmg: 559, mta: 6, d: "A powerful autocannon that can smash apart most lightly armored frigates with ease. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 8, pg: 4, opt: 1000, acc: 5280, rof: 3750, trk: 0.315, dmg: 3.17625, capn: 0, tl: 1, shhp: 40, cs: 1},
      "21547": { n: "250mm Light 'Jolt' Artillery I", mg: 577, pmg: 560, mta: 6, d: "This artillery is one of the most powerful weapons that can be mounted on a frigate. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 10, pg: 7, opt: 8050, acc: 9625, rof: 8500, trk: 0.0825, dmg: 5.082, capn: 0, tl: 1, shhp: 40, cs: 1},
      "21549": { n: "280mm 'Jolt' Artillery I", mg: 577, pmg: 560, mta: 6, d: "Rocket-assisted artillery projectiles designed for long-range combat. It is the most powerful projectile weapon able to be fitted onto frigates. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 13, pg: 11, opt: 10000, acc: 9625, rof: 10710, trk: 0.066, dmg: 7.044, capn: 0, tl: 1, shhp: 40, cs: 1},
      "21551": { n: "425mm Medium 'Jolt' Autocannon I", mg: 575, pmg: 559, mta: 6, d: "The 425mm is a behemoth that will inflict severe damage on most cruisers and frigates in short-range battles. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 20, pg: 126, opt: 2000, acc: 10560, rof: 5625, trk: 0.1056, dmg: 3.17625, capn: 0, tl: 1, shhp: 40, cs: 2},
      "21553": { n: "650mm Medium 'Jolt' Artillery I", mg: 578, pmg: 560, mta: 6, d: "A powerful long-range cannon. One of the most damaging weapons mountable on a cruiser. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 23, pg: 162, opt: 16100, acc: 19250, rof: 12750, trk: 0.0275, dmg: 5.082, capn: 0, tl: 1, shhp: 40, cs: 2},
      "21555": { n: "720mm 'Jolt' Artillery I", mg: 578, pmg: 560, mta: 6, d: "This 720mm rocket-assisted howitzer is designed for long-range bombardment. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 26, pg: 203, opt: 20000, acc: 19250, rof: 20003, trk: 0.022, dmg: 8.770036275, capn: 0, tl: 1, shhp: 40, cs: 2},
      "21557": { n: "800mm Heavy 'Jolt' Repeating Artillery I", mg: 576, pmg: 559, mta: 6, d: "A four-barreled, intermediate-range, powerful cannon capable of causing tremendous damage. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 33, pg: 1800, opt: 4000, acc: 21120, rof: 7875, trk: 0.0432, dmg: 2.9645, capn: 0, tl: 1, shhp: 40, cs: 3},
      "21559": { n: "1200mm Heavy 'Jolt' Artillery I", mg: 579, pmg: 560, mta: 0, d: "One of the most powerful projectile cannons a battleship can equip. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 36, pg: 2475, opt: 32200, acc: 38500, rof: 21038, trk: 0.01125, dmg: 5.59, capn: 0, tl: 1, shhp: 40, cs: 3},
      "21561": { n: "1400mm 'Jolt' Artillery I", mg: 579, pmg: 560, mta: 6, d: "The ultimate artillery cannon. It hurls death and destruction over incredible distances. \n\
\n\
Must be loaded with any of the following projectile ammo types: Carbonized Lead, Depleted Uranium, EMP, Fusion, Nuclear, Phased Plasma, Proton, or Titanium Sabot.", cpu: 38, pg: 2925, opt: 40000, acc: 38500, rof: 40163, trk: 0.009, dmg: 11.739, capn: 0, tl: 1, shhp: 40, cs: 3}
    },
    "60": {
      "521": { n: "Basic Damage Control", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 25, pg: 1, capn: 1, tl: 1, aemr: 0.925, aexr: 0.925, akir: 0.925, athr: 0.925, semr: 0.95, sexr: 0.95, skir: 0.95, sthr: 0.95, hemr: 0.55, hexr: 0.55, hkir: 0.55, hthr: 0.55, shhp: 40, ad: 30000},
      "2046": { n: "Damage Control I", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 25, pg: 1, capn: 1, tl: 1, aemr: 0.9, aexr: 0.9, akir: 0.9, athr: 0.9, semr: 0.925, sexr: 0.925, skir: 0.925, sthr: 0.925, hemr: 0.5, hexr: 0.5, hkir: 0.5, hthr: 0.5, shhp: 40, ad: 30000},
      "2048": { n: "Damage Control II", mg: 615, pmg: 14, mta: 5, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 30, pg: 1, capn: 1, tl: 2, aemr: 0.85, aexr: 0.85, akir: 0.85, athr: 0.85, semr: 0.875, sexr: 0.875, skir: 0.875, sthr: 0.875, hemr: 0.4, hexr: 0.4, hkir: 0.4, hthr: 0.4, shhp: 40, ad: 30000},
      "5829": { n: "GLFF Containment Field", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 22, pg: 1, capn: 1, tl: 1, aemr: 0.925, aexr: 0.925, akir: 0.925, athr: 0.925, semr: 0.95, sexr: 0.95, skir: 0.95, sthr: 0.95, hemr: 0.55, hexr: 0.55, hkir: 0.55, hthr: 0.55, r: 2, shhp: 40, ad: 30000},
      "5831": { n: "Interior Force Field Array", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 20, pg: 1, capn: 1, tl: 1, aemr: 0.925, aexr: 0.925, akir: 0.925, athr: 0.925, semr: 0.95, sexr: 0.95, skir: 0.95, sthr: 0.95, hemr: 0.55, hexr: 0.55, hkir: 0.55, hthr: 0.55, r: 4, shhp: 40, ad: 30000},
      "5833": { n: "Systematic Damage Control", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 23, pg: 1, capn: 1, tl: 1, aemr: 0.925, aexr: 0.925, akir: 0.925, athr: 0.925, semr: 0.95, sexr: 0.95, skir: 0.95, sthr: 0.95, hemr: 0.55, hexr: 0.55, hkir: 0.55, hthr: 0.55, r: 8, shhp: 40, ad: 30000},
      "5835": { n: "F84 Local Damage System", mg: 615, pmg: 14, mta: 0, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 21, pg: 1, capn: 1, tl: 1, aemr: 0.925, aexr: 0.925, akir: 0.925, athr: 0.925, semr: 0.95, sexr: 0.95, skir: 0.95, sthr: 0.95, hemr: 0.55, hexr: 0.55, hkir: 0.55, hthr: 0.55, r: 1, shhp: 40, ad: 30000},
      "5837": { n: "Pseudoelectron Containment Field I", mg: 615, pmg: 14, mta: 3, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 19, pg: 1, capn: 1, tl: 1, aemr: 0.87, aexr: 0.87, akir: 0.87, athr: 0.87, semr: 0.895, sexr: 0.895, skir: 0.895, sthr: 0.895, hemr: 0.44, hexr: 0.44, hkir: 0.44, hthr: 0.44, r: 2, shhp: 40, ad: 30000},
      "5839": { n: "Internal Force Field Array I", mg: 615, pmg: 14, mta: 4, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 17, pg: 1, capn: 1, tl: 1, aemr: 0.86, aexr: 0.86, akir: 0.86, athr: 0.86, semr: 0.885, sexr: 0.885, skir: 0.885, sthr: 0.885, hemr: 0.42, hexr: 0.42, hkir: 0.42, hthr: 0.42, r: 4, shhp: 40, ad: 30000},
      "5841": { n: "Emergency Damage Control I", mg: 615, pmg: 14, mta: 1, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 23, pg: 1, capn: 1, tl: 1, aemr: 0.89, aexr: 0.89, akir: 0.89, athr: 0.89, semr: 0.915, sexr: 0.915, skir: 0.915, sthr: 0.915, hemr: 0.48, hexr: 0.48, hkir: 0.48, hthr: 0.48, r: 8, shhp: 40, ad: 30000},
      "5843": { n: "F85 Peripheral Damage System I", mg: 615, pmg: 14, mta: 2, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 21, pg: 1, capn: 1, tl: 1, aemr: 0.88, aexr: 0.88, akir: 0.88, athr: 0.88, semr: 0.905, sexr: 0.905, skir: 0.905, sthr: 0.905, hemr: 0.46, hexr: 0.46, hkir: 0.46, hthr: 0.46, r: 1, shhp: 40, ad: 30000},
      "22893": { n: "'Gonzo' Damage Control I", mg: 615, pmg: 14, mta: 6, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 16, pg: 1, capn: 1, tl: 1, aemr: 0.87, aexr: 0.87, akir: 0.87, athr: 0.87, semr: 0.895, sexr: 0.895, skir: 0.895, sthr: 0.895, hemr: 0.44, hexr: 0.44, hkir: 0.44, hthr: 0.44, shhp: 40, ad: 30000},
      "23418": { n: "'Radical' Damage Control I", mg: 615, pmg: 14, mta: 7, d: "Utilizes a combination of containment field emitters and redundancy systems to prevent critical system damage. \n\
\n\
Grants a bonus to resistance for shield, armor and hull.\n\
\n\
Only one Damage Control can be activated at a given time.", cpu: 15, pg: 1, capn: 1, tl: 1, aemr: 0.855, aexr: 0.855, akir: 0.855, athr: 0.855, semr: 0.88, sexr: 0.88, skir: 0.88, sthr: 0.88, hemr: 0.41, hexr: 0.41, hkir: 0.41, hthr: 0.41, shhp: 40, ad: 30000}
    },
    "62": {
      "523": { n: "Small Armor Repairer I", mg: 1049, pmg: 134, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 5, pg: 5, capn: 40, tl: 1, shhp: 40, ad: 6000, ahpr: 60},
      "1183": { n: "Small Armor Repairer II", mg: 1049, pmg: 134, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 6, pg: 6, capn: 40, tl: 2, shhp: 40, ad: 6000, ahpr: 80},
      "3528": { n: "Medium Armor Repairer I", mg: 1050, pmg: 134, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 25, pg: 120, capn: 160, tl: 1, shhp: 40, ad: 12000, ahpr: 240},
      "3530": { n: "Medium Armor Repairer II", mg: 1050, pmg: 134, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 28, pg: 138, capn: 160, tl: 2, shhp: 40, ad: 12000, ahpr: 320},
      "3534": { n: "Capital Inefficient Armor Repair Unit", mg: 1052, pmg: 134, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.\n\
Note: May only be fitted to capital class ships.", cpu: 72, pg: 125000, capn: 2400, tl: 1, shhp: 40, ad: 30000, ahpr: 10560},
      "3538": { n: "Large Armor Repairer I", mg: 1051, pmg: 134, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 50, pg: 1800, capn: 400, tl: 1, shhp: 40, ad: 15000, ahpr: 600},
      "3540": { n: "Large Armor Repairer II", mg: 1051, pmg: 134, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 55, pg: 2070, capn: 400, tl: 2, shhp: 40, ad: 15000, ahpr: 800},
      "4529": { n: "Small I-a Polarized Armor Regenerator", mg: 1049, pmg: 134, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 1, shhp: 40, ad: 6000, ahpr: 63},
      "4531": { n: "Small Inefficient Armor Repair Unit", mg: 1049, pmg: 134, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 2, shhp: 40, ad: 6000, ahpr: 66},
      "4533": { n: "Small 'Accommodation' Vestment Reconstructer I", mg: 1049, pmg: 134, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 72},
      "4535": { n: "Small Automated Carapace Restoration", mg: 1049, pmg: 134, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 8, shhp: 40, ad: 6000, ahpr: 69},
      "4569": { n: "Medium I-a Polarized Armor Regenerator", mg: 1050, pmg: 134, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 22, pg: 120, capn: 160, tl: 1, r: 1, shhp: 40, ad: 12000, ahpr: 252},
      "4571": { n: "Medium Inefficient Armor Repair Unit", mg: 1050, pmg: 134, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 120, capn: 160, tl: 1, r: 2, shhp: 40, ad: 12000, ahpr: 264},
      "4573": { n: "Medium 'Accommodation' Vestment Reconstructer I", mg: 1050, pmg: 134, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 160, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 288},
      "4575": { n: "Medium Automated Carapace Restoration", mg: 1050, pmg: 134, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 20, pg: 120, capn: 160, tl: 1, r: 8, shhp: 40, ad: 12000, ahpr: 276},
      "4609": { n: "Large I-a Polarized Armor Regenerator", mg: 1051, pmg: 134, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 47, pg: 1800, capn: 400, tl: 1, r: 1, shhp: 40, ad: 15000, ahpr: 630},
      "4611": { n: "Large Inefficient Armor Repair Unit", mg: 1051, pmg: 134, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 48, pg: 1800, capn: 400, tl: 1, r: 2, shhp: 40, ad: 15000, ahpr: 660},
      "4613": { n: "Large 'Accommodation' Vestment Reconstructer I", mg: 1051, pmg: 134, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 720},
      "4615": { n: "Large Automated Carapace Restoration", mg: 1051, pmg: 134, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 49, pg: 1800, capn: 400, tl: 1, r: 8, shhp: 40, ad: 15000, ahpr: 690},
      "13955": { n: "Domination Large Armor Repairer", mg: 1051, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 360, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 720},
      "13956": { n: "True Sansha Large Armor Repairer", mg: 1051, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 900},
      "13957": { n: "Dark Blood Large Armor Repairer", mg: 1051, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 900},
      "13958": { n: "Domination Medium Armor Repairer", mg: 1050, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 144, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 288},
      "13959": { n: "True Sansha Medium Armor Repairer", mg: 1050, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 180, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 360},
      "13960": { n: "Dark Blood Medium Armor Repairer", mg: 1050, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 180, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 360},
      "13962": { n: "Domination Small Armor Repairer", mg: 1049, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 36, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 72},
      "13963": { n: "True Sansha Small Armor Repairer", mg: 1049, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 90},
      "13964": { n: "Dark Blood Small Armor Repairer", mg: 1049, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 90},
      "14067": { n: "Shadow Serpentis Large Armor Repairer", mg: 1051, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 800},
      "14068": { n: "Shadow Serpentis Medium Armor Repairer", mg: 1050, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 160, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 320},
      "14069": { n: "Shadow Serpentis Small Armor Repairer", mg: 1049, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 80},
      "14552": { n: "Mizuro's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1890, capn: 360, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 792},
      "14554": { n: "Gotan's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2070, capn: 360, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 936},
      "14848": { n: "Brokara's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 990},
      "14849": { n: "Tairei's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 990},
      "14850": { n: "Selynne's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1080},
      "14851": { n: "Raysere's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1080},
      "14852": { n: "Vizan's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1170},
      "14853": { n: "Ahremen's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1170},
      "14854": { n: "Chelm's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1260},
      "14855": { n: "Draclira's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1260},
      "15160": { n: "Brynn's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 880},
      "15161": { n: "Tuvan's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 960},
      "15162": { n: "Setele's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1040},
      "15163": { n: "Cormack's Modified Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1120},
      "15741": { n: "Ammatar Navy Small Armor Repairer", mg: 1049, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 90},
      "15742": { n: "Ammatar Navy Medium Armor Repairer", mg: 1050, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 180, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 360},
      "15743": { n: "Ammatar Navy Large Armor Repairer", mg: 1051, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 900},
      "15744": { n: "Federation Navy Small Armor Repairer", mg: 1049, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 80},
      "15745": { n: "Federation Navy Medium Armor Repairer", mg: 1050, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 160, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 320},
      "15746": { n: "Federation Navy Large Armor Repairer", mg: 1051, pmg: 134, mta: 8, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 800},
      "17492": { n: "Republic Fleet Large Armor Repairer", mg: 1051, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 360, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 720},
      "17493": { n: "Republic Fleet Medium Armor Repairer", mg: 1050, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 144, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 288},
      "17494": { n: "Republic Fleet Small Armor Repairer", mg: 1049, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 36, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 72},
      "17546": { n: "Imperial Navy Large Armor Repairer", mg: 1051, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 900},
      "17547": { n: "Imperial Navy Medium Armor Repairer", mg: 1050, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 180, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 360},
      "17548": { n: "Imperial Navy Small Armor Repairer", mg: 1049, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 90},
      "18999": { n: "Corpii C-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 99},
      "19001": { n: "Corpii B-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 6, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 108},
      "19003": { n: "Corpii A-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 7, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 117},
      "19005": { n: "Centii C-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 99},
      "19007": { n: "Centii B-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 6, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 108},
      "19009": { n: "Centii A-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 7, capn: 45, tl: 1, shhp: 40, ad: 6000, ahpr: 117},
      "19011": { n: "Coreli C-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, shhp: 40, ad: 6000, ahpr: 88},
      "19013": { n: "Coreli B-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 6, capn: 40, tl: 1, shhp: 40, ad: 6000, ahpr: 96},
      "19015": { n: "Coreli A-Type Small Armor Repairer", mg: 1049, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 7, capn: 40, tl: 1, shhp: 40, ad: 6000, ahpr: 104},
      "19017": { n: "Corpum C-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 132, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 396},
      "19019": { n: "Corpum B-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 144, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 432},
      "19021": { n: "Corpum A-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 156, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 468},
      "19023": { n: "Centum C-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 132, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 396},
      "19025": { n: "Centum B-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 144, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 432},
      "19027": { n: "Centum A-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 156, capn: 180, tl: 1, shhp: 40, ad: 12000, ahpr: 468},
      "19029": { n: "Corelum C-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 132, capn: 160, tl: 1, shhp: 40, ad: 12000, ahpr: 352},
      "19031": { n: "Corelum B-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 144, capn: 160, tl: 1, shhp: 40, ad: 12000, ahpr: 384},
      "19033": { n: "Corelum A-Type Medium Armor Repairer", mg: 1050, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 23, pg: 156, capn: 160, tl: 1, shhp: 40, ad: 12000, ahpr: 416},
      "19035": { n: "Core C-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 880},
      "19036": { n: "Core B-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 960},
      "19037": { n: "Core A-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1040},
      "19038": { n: "Core X-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 400, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1120},
      "19039": { n: "Corpus C-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 990},
      "19040": { n: "Centus C-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1980, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 990},
      "19041": { n: "Corpus B-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1080},
      "19042": { n: "Centus B-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2160, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1080},
      "19043": { n: "Corpus A-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1170},
      "19044": { n: "Centus A-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2340, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1170},
      "19045": { n: "Corpus X-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1260},
      "19046": { n: "Centus X-Type Large Armor Repairer", mg: 1051, pmg: 134, mta: 14, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 2520, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 1260},
      "20701": { n: "Capital Armor Repairer I", mg: 1052, pmg: 134, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.\n\
Note: May only be fitted to capital class ships.", cpu: 75, pg: 125000, capn: 2400, tl: 1, shhp: 40, ad: 30000, ahpr: 9600},
      "21853": { n: "Civilian Armor Repairer", mg: 760, pmg: 9, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 1, pg: 2, capn: 3, tl: 1, shhp: 40, ad: 3000, ahpr: 5},
      "22887": { n: "'Harmony' Small Armor Repairer I", mg: 1049, pmg: 134, mta: 6, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, shhp: 40, ad: 6750, ahpr: 90},
      "22889": { n: "'Meditation' Medium Armor Repairer I", mg: 1050, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 20, pg: 108, capn: 160, tl: 1, shhp: 40, ad: 13500, ahpr: 360},
      "22891": { n: "'Protest' Large Armor Repairer I", mg: 1051, pmg: 134, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 40, pg: 1620, capn: 400, tl: 1, shhp: 40, ad: 16875, ahpr: 900},
      "23795": { n: "'Gorget' Small Armor Repairer I", mg: 1049, pmg: 134, mta: 6, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 40, tl: 1, shhp: 40, ad: 6000, ahpr: 80},
      "23797": { n: "'Greaves' Medium Armor Repairer I", mg: 1050, pmg: 134, mta: 6, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 20, pg: 108, capn: 160, tl: 1, shhp: 40, ad: 12000, ahpr: 320},
      "23799": { n: "'Hauberk' Large Armor Repairer I", mg: 1051, pmg: 134, mta: 6, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 40, pg: 1620, capn: 400, tl: 1, shhp: 40, ad: 15000, ahpr: 800},
      "28544": { n: "Khanid Navy Large Armor Repairer", mg: 1051, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 46, pg: 1800, capn: 450, tl: 1, r: 4, shhp: 40, ad: 15000, ahpr: 900},
      "28549": { n: "Khanid Navy Medium Armor Repairer", mg: 1050, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 21, pg: 120, capn: 180, tl: 1, r: 4, shhp: 40, ad: 12000, ahpr: 360},
      "28556": { n: "Khanid Navy Small Armor Repairer", mg: 1049, pmg: 134, mta: 9, d: "This module uses nano-assemblers to repair damage done to the armor of the ship.", cpu: 4, pg: 5, capn: 45, tl: 1, r: 4, shhp: 40, ad: 6000, ahpr: 90}
    },
    "65": {
      "526": { n: "Stasis Webifier I", mg: 683, pmg: 657, mta: 0, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 1, opt: 10000, acc: 0, spd: -50, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "527": { n: "Stasis Webifier II", mg: 683, pmg: 657, mta: 5, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 30, pg: 1, opt: 10000, acc: 0, spd: -60, capn: 6, tl: 2, shhp: 40, ad: 5000},
      "4025": { n: "X5 Prototype Engine Enervator", mg: 683, pmg: 657, mta: 3, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 21, pg: 1, opt: 10000, acc: 0, spd: -57.5, capn: 4, tl: 1, r: 1, shhp: 40, ad: 5000},
      "4027": { n: "Fleeting Propulsion Inhibitor I", mg: 683, pmg: 657, mta: 4, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 22, pg: 1, opt: 10000, acc: 0, spd: -60, capn: 4, tl: 1, r: 2, shhp: 40, ad: 5000},
      "4029": { n: "'Langour' Drive Disruptor I", mg: 683, pmg: 657, mta: 1, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 20, pg: 1, opt: 10000, acc: 0, spd: -52.5, capn: 5, tl: 1, r: 4, shhp: 40, ad: 5000},
      "4031": { n: "Patterned Stasis Web I", mg: 683, pmg: 657, mta: 2, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 23, pg: 1, opt: 10000, acc: 0, spd: -55, capn: 5, tl: 1, r: 8, shhp: 40, ad: 5000},
      "14262": { n: "Dark Blood Stasis Webifier", mg: 683, pmg: 657, mta: 9, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1, opt: 14000, acc: 0, spd: -55, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14264": { n: "Domination Stasis Webifier", mg: 683, pmg: 657, mta: 9, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1, opt: 15000, acc: 0, spd: -50, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14266": { n: "Dread Guristas Stasis Webifier", mg: 683, pmg: 657, mta: 8, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1, opt: 13000, acc: 0, spd: -50, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14268": { n: "True Sansha Stasis Webifier", mg: 683, pmg: 657, mta: 9, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 1, opt: 15000, acc: 0, spd: -55, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14270": { n: "Shadow Serpentis Stasis Webifier", mg: 683, pmg: 657, mta: 8, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 1, opt: 13000, acc: 0, spd: -55, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "14648": { n: "Mizuro's Modified Stasis Webifier", mg: 683, pmg: 657, mta: 11, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1900, opt: 17000, acc: 0, spd: -55, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14650": { n: "Hakim's Modified Stasis Webifier", mg: 683, pmg: 657, mta: 12, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 2100, opt: 18000, acc: 0, spd: -60, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14652": { n: "Gotan's Modified Stasis Webifier", mg: 683, pmg: 657, mta: 13, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1800, opt: 19000, acc: 0, spd: -57.5, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "14654": { n: "Tobias' Modified Stasis Webifier", mg: 683, pmg: 657, mta: 14, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 2200, opt: 20000, acc: 0, spd: -60, capn: 15, tl: 1, shhp: 40, ad: 5000},
      "17500": { n: "Caldari Navy Stasis Webifier", mg: 683, pmg: 657, mta: 8, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 18, pg: 1, opt: 12000, acc: 0, spd: -55, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "17559": { n: "Federation Navy Stasis Webifier", mg: 683, pmg: 657, mta: 9, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 1, opt: 14000, acc: 0, spd: -60, capn: 5, tl: 1, shhp: 40, ad: 5000},
      "28514": { n: "Khanid Navy Stasis Webifier", mg: 683, pmg: 657, mta: 8, d: "Reduces the maximum speed of a ship by employing micro energy streams which effectively entangle the target temporarily, thereby slowing it down.", cpu: 25, pg: 1, opt: 12000, acc: 0, spd: -60, capn: 5, tl: 1, shhp: 40, ad: 5000}
    },
    "74": {
      "561": { n: "75mm Gatling Rail I", mg: 564, pmg: 555, mta: 0, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 5, pg: 2, opt: 6000, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.65, capn: 1.169, tl: 1, shhp: 40, cs: 1},
      "562": { n: "Light Electron Blaster I", mg: 561, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 8, pg: 4, opt: 1000, acc: 1500, rof: 2000, trk: 0.438, dmg: 1.8375, capn: 0.6566, tl: 1, shhp: 40, cs: 1},
      "563": { n: "Light Ion Blaster I", mg: 561, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 12, pg: 7, opt: 1250, acc: 2000, rof: 3000, trk: 0.4032, dmg: 2.953125, capn: 1.0927, tl: 1, shhp: 40, cs: 1},
      "564": { n: "Light Neutron Blaster I", mg: 561, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 16, pg: 8, opt: 1500, acc: 2500, rof: 3500, trk: 0.3798, dmg: 3.675, capn: 1.4161, tl: 1, shhp: 40, cs: 1},
      "565": { n: "150mm Railgun I", mg: 564, pmg: 555, mta: 0, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 24, pg: 9, opt: 12000, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.025, capn: 2.338, tl: 1, shhp: 40, cs: 1},
      "566": { n: "Heavy Electron Blaster I", mg: 562, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 24, pg: 88, opt: 2000, acc: 3000, rof: 3000, trk: 0.144, dmg: 1.8375, capn: 1.96, tl: 1, shhp: 40, cs: 2},
      "567": { n: "Dual 150mm Railgun I", mg: 565, pmg: 555, mta: 0, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 30, pg: 70, opt: 12000, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.65, capn: 3.5, tl: 1, shhp: 40, cs: 2},
      "568": { n: "Heavy Neutron Blaster I", mg: 562, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 29, pg: 179, opt: 3000, acc: 5000, rof: 5250, trk: 0.12, dmg: 3.675, capn: 4.2483, tl: 1, shhp: 40, cs: 2},
      "569": { n: "Heavy Ion Blaster I", mg: 562, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 28, pg: 132, opt: 2500, acc: 4000, rof: 4500, trk: 0.132, dmg: 2.953125, capn: 3.2683, tl: 1, shhp: 40, cs: 2},
      "570": { n: "250mm Railgun I", mg: 565, pmg: 555, mta: 0, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 38, pg: 198, opt: 24000, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.025, capn: 7, tl: 1, shhp: 40, cs: 2},
      "571": { n: "Electron Blaster Cannon I", mg: 563, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 40, pg: 1100, opt: 4000, acc: 6000, rof: 4500, trk: 0.06, dmg: 1.8375, capn: 5.88, tl: 1, shhp: 40, cs: 3},
      "572": { n: "Dual 250mm Railgun I", mg: 566, pmg: 555, mta: 0, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 52, pg: 1100, opt: 24000, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.65, capn: 10.5, tl: 1, shhp: 40, cs: 3},
      "573": { n: "Neutron Blaster Cannon I", mg: 563, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 52, pg: 1980, opt: 6000, acc: 10000, rof: 7875, trk: 0.05196, dmg: 3.675, capn: 12.74, tl: 1, shhp: 40, cs: 3},
      "574": { n: "425mm Railgun I", mg: 566, pmg: 555, mta: 0, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 67, pg: 2200, opt: 48000, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.025, capn: 21, tl: 1, shhp: 40, cs: 3},
      "575": { n: "Ion Blaster Cannon I", mg: 563, pmg: 556, mta: 0, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1540, opt: 5000, acc: 8000, rof: 6750, trk: 0.0552, dmg: 2.953125, capn: 9.8, tl: 1, shhp: 40, cs: 3},
      "3074": { n: "150mm Railgun II", mg: 564, pmg: 555, mta: 5, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 27, pg: 10, opt: 14400, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.63, capn: 2.338, tl: 2, shhp: 40, cs: 1},
      "3082": { n: "250mm Railgun II", mg: 565, pmg: 555, mta: 5, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 42, pg: 208, opt: 28800, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.63, capn: 7, tl: 2, shhp: 40, cs: 2},
      "3090": { n: "425mm Railgun II", mg: 566, pmg: 555, mta: 5, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 74, pg: 2310, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.63, capn: 21, tl: 2, shhp: 40, cs: 3},
      "3098": { n: "75mm Gatling Rail II", mg: 564, pmg: 555, mta: 5, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 6, pg: 2, opt: 7200, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.98, capn: 1.169, tl: 2, shhp: 40, cs: 1},
      "3106": { n: "Dual 150mm Railgun II", mg: 565, pmg: 555, mta: 5, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 33, pg: 74, opt: 14400, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.98, capn: 3.5, tl: 2, shhp: 40, cs: 2},
      "3114": { n: "Dual 250mm Railgun II", mg: 566, pmg: 555, mta: 5, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 58, pg: 1155, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.98, capn: 10.5, tl: 2, shhp: 40, cs: 3},
      "3122": { n: "Electron Blaster Cannon II", mg: 563, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 44, pg: 1155, opt: 4800, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.205, capn: 5.88, tl: 2, shhp: 40, cs: 3},
      "3130": { n: "Heavy Electron Blaster II", mg: 562, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 26, pg: 92, opt: 2400, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.205, capn: 1.96, tl: 2, shhp: 40, cs: 2},
      "3138": { n: "Heavy Ion Blaster II", mg: 562, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 31, pg: 139, opt: 3000, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.54375, capn: 3.2683, tl: 2, shhp: 40, cs: 2},
      "3146": { n: "Heavy Neutron Blaster II", mg: 562, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 33, pg: 187, opt: 3600, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.41, capn: 4.2483, tl: 2, shhp: 40, cs: 2},
      "3154": { n: "Ion Blaster Cannon II", mg: 563, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 53, pg: 1617, opt: 6000, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.54375, capn: 9.8, tl: 2, shhp: 40, cs: 3},
      "3162": { n: "Light Electron Blaster II", mg: 561, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 8, pg: 4, opt: 1200, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.205, capn: 0.6566, tl: 2, shhp: 40, cs: 1},
      "3170": { n: "Light Ion Blaster II", mg: 561, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 12, pg: 7, opt: 1500, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.54375, capn: 0.931, tl: 2, shhp: 40, cs: 1},
      "3178": { n: "Light Neutron Blaster II", mg: 561, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 18, pg: 9, opt: 1800, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.41, capn: 1.4161, tl: 2, shhp: 40, cs: 1},
      "3186": { n: "Neutron Blaster Cannon II", mg: 563, pmg: 556, mta: 5, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Null, Void.", cpu: 58, pg: 2079, opt: 7200, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.41, capn: 12.74, tl: 2, shhp: 40, cs: 3},
      "3546": { n: "Limited Mega Ion Siege Blaster I", mg: 771, pmg: 556, mta: 2, d: "One of the largest weapons currently in existence, this massive blaster is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 103, pg: 99000, opt: 23000, acc: 25000, rof: 10632, trk: 0.0046, dmg: 8.712, capn: 151.2, tl: 1, shhp: 40, cs: 4},
      "3550": { n: "Dual 1000mm 'Scout' Accelerator Cannon", mg: 772, pmg: 555, mta: 2, d: "One of the largest weapons currently in existence, this massive railgun is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 103, pg: 110000, opt: 105600, acc: 24000, rof: 14345, trk: 0.001925, dmg: 6.38, capn: 171.36, tl: 1, shhp: 40, cs: 4},
      "7247": { n: "75mm Prototype Gauss Gun", mg: 564, pmg: 555, mta: 4, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 4, pg: 2, opt: 7200, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.98, capn: 0.938, tl: 1, r: 1, shhp: 40, cs: 1},
      "7249": { n: "75mm 'Scout' Accelerator Cannon", mg: 564, pmg: 555, mta: 2, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 4, pg: 2, opt: 6600, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.815, capn: 1.05, tl: 1, r: 2, shhp: 40, cs: 1},
      "7251": { n: "75mm Carbide Railgun I", mg: 564, pmg: 555, mta: 1, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 4, pg: 2, opt: 6300, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.7325, capn: 1.113, tl: 1, r: 4, shhp: 40, cs: 1},
      "7253": { n: "75mm Compressed Coil Gun I", mg: 564, pmg: 555, mta: 3, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 4, pg: 2, opt: 6900, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.8975, capn: 0.994, tl: 1, r: 8, shhp: 40, cs: 1},
      "7287": { n: "150mm Prototype Gauss Gun", mg: 564, pmg: 555, mta: 4, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 20, pg: 9, opt: 14400, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.63, capn: 1.869, tl: 1, r: 1, shhp: 40, cs: 1},
      "7289": { n: "150mm 'Scout' Accelerator Cannon", mg: 564, pmg: 555, mta: 2, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 21, pg: 9, opt: 13200, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.3275, capn: 2.1, tl: 1, r: 2, shhp: 40, cs: 1},
      "7291": { n: "150mm Carbide Railgun I", mg: 564, pmg: 555, mta: 1, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 19, pg: 9, opt: 12600, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.17625, capn: 2.219, tl: 1, r: 4, shhp: 40, cs: 1},
      "7293": { n: "150mm Compressed Coil Gun I", mg: 564, pmg: 555, mta: 3, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 22, pg: 9, opt: 13800, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.47875, capn: 1.988, tl: 1, r: 8, shhp: 40, cs: 1},
      "7327": { n: "Dual 150mm Prototype Gauss Gun", mg: 565, pmg: 555, mta: 4, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 25, pg: 70, opt: 14400, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.98, capn: 2.8, tl: 1, r: 1, shhp: 40, cs: 2},
      "7329": { n: "Dual 150mm 'Scout' Accelerator Cannon", mg: 565, pmg: 555, mta: 2, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 70, opt: 13200, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.815, capn: 3.15, tl: 1, r: 2, shhp: 40, cs: 2},
      "7331": { n: "Dual 150mm Carbide Railgun I", mg: 565, pmg: 555, mta: 1, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 23, pg: 70, opt: 12600, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.7325, capn: 3.325, tl: 1, r: 4, shhp: 40, cs: 2},
      "7333": { n: "Dual 150mm Compressed Coil Gun I", mg: 565, pmg: 555, mta: 3, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 28, pg: 70, opt: 13800, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.8975, capn: 2.975, tl: 1, r: 8, shhp: 40, cs: 2},
      "7367": { n: "250mm Prototype Gauss Gun", mg: 565, pmg: 555, mta: 4, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 32, pg: 198, opt: 28800, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.63, capn: 5.6, tl: 1, r: 1, shhp: 40, cs: 2},
      "7369": { n: "250mm 'Scout' Accelerator Cannon", mg: 565, pmg: 555, mta: 2, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 34, pg: 198, opt: 26400, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.3275, capn: 6.3, tl: 1, r: 2, shhp: 40, cs: 2},
      "7371": { n: "250mm Carbide Railgun I", mg: 565, pmg: 555, mta: 1, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 30, pg: 198, opt: 25200, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.17625, capn: 6.65, tl: 1, r: 4, shhp: 40, cs: 2},
      "7373": { n: "250mm Compressed Coil Gun I", mg: 565, pmg: 555, mta: 3, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 36, pg: 198, opt: 27600, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.47875, capn: 5.95, tl: 1, r: 8, shhp: 40, cs: 2},
      "7407": { n: "Dual 250mm Prototype Gauss Gun", mg: 566, pmg: 555, mta: 4, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 43, pg: 1100, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.98, capn: 8.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "7409": { n: "Dual 250mm 'Scout' Accelerator Cannon", mg: 566, pmg: 555, mta: 2, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 46, pg: 1100, opt: 26400, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.815, capn: 9.45, tl: 1, r: 2, shhp: 40, cs: 3},
      "7411": { n: "Dual 250mm Carbide Railgun I", mg: 566, pmg: 555, mta: 1, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 41, pg: 1100, opt: 25200, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.7325, capn: 9.975, tl: 1, r: 4, shhp: 40, cs: 3},
      "7413": { n: "Dual 250mm Compressed Coil Gun I", mg: 566, pmg: 555, mta: 3, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 49, pg: 1100, opt: 27600, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.8975, capn: 8.925, tl: 1, r: 8, shhp: 40, cs: 3},
      "7447": { n: "425mm Prototype Gauss Gun", mg: 566, pmg: 555, mta: 4, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 56, pg: 2200, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.63, capn: 16.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "7449": { n: "425mm 'Scout' Accelerator Cannon", mg: 566, pmg: 555, mta: 2, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 60, pg: 2200, opt: 52800, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.3275, capn: 18.9, tl: 1, r: 2, shhp: 40, cs: 3},
      "7451": { n: "425mm Carbide Railgun I", mg: 566, pmg: 555, mta: 1, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 53, pg: 2200, opt: 50400, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.17625, capn: 19.95, tl: 1, r: 4, shhp: 40, cs: 3},
      "7453": { n: "425mm Compressed Coil Gun I", mg: 566, pmg: 555, mta: 3, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 2200, opt: 55200, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.47875, capn: 17.85, tl: 1, r: 8, shhp: 40, cs: 3},
      "7487": { n: "Modal Light Electron Particle Accelerator I", mg: 561, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 4, opt: 1200, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.205, capn: 0.5243, tl: 1, r: 1, shhp: 40, cs: 1},
      "7489": { n: "Limited Light Electron Blaster I", mg: 561, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 7, pg: 4, opt: 1100, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.02125, capn: 0.588, tl: 1, r: 2, shhp: 40, cs: 1},
      "7491": { n: "Regulated Light Electron Phase Cannon I", mg: 561, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 4, opt: 1050, acc: 1500, rof: 2000, trk: 0.438, dmg: 1.929375, capn: 0.6223, tl: 1, r: 4, shhp: 40, cs: 1},
      "7493": { n: "Anode Light Electron Particle Cannon I", mg: 561, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 7, pg: 4, opt: 1150, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.113125, capn: 0.5586, tl: 1, r: 8, shhp: 40, cs: 1},
      "7535": { n: "Modal Light Ion Particle Accelerator I", mg: 561, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 9, pg: 7, opt: 1500, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.54375, capn: 0.8722, tl: 1, r: 1, shhp: 40, cs: 1},
      "7537": { n: "Limited Light Ion Blaster I", mg: 561, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 10, pg: 7, opt: 1375, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.2484375, capn: 0.98, tl: 1, r: 2, shhp: 40, cs: 1},
      "7539": { n: "Regulated Light Ion Phase Cannon I", mg: 561, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 9, pg: 7, opt: 1312, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.10078125, capn: 1.0339, tl: 1, r: 4, shhp: 40, cs: 1},
      "7541": { n: "Anode Light Ion Particle Cannon I", mg: 561, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 11, pg: 7, opt: 1437, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.39609375, capn: 0.9261, tl: 1, r: 8, shhp: 40, cs: 1},
      "7579": { n: "Modal Light Neutron Particle Accelerator I", mg: 561, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 8, opt: 1800, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.41, capn: 1.1319, tl: 1, r: 1, shhp: 40, cs: 1},
      "7581": { n: "Limited Light Neutron Blaster I", mg: 561, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 14, pg: 8, opt: 1650, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.0425, capn: 1.274, tl: 1, r: 2, shhp: 40, cs: 1},
      "7583": { n: "Regulated Light Neutron Phase Cannon I", mg: 561, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 8, opt: 1575, acc: 2500, rof: 3500, trk: 0.3798, dmg: 3.85875, capn: 1.3426, tl: 1, r: 4, shhp: 40, cs: 1},
      "7585": { n: "Anode Light Neutron Particle Cannon I", mg: 561, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 15, pg: 8, opt: 1725, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.22625, capn: 1.2005, tl: 1, r: 8, shhp: 40, cs: 1},
      "7619": { n: "Modal Electron Particle Accelerator I", mg: 562, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 19, pg: 88, opt: 2400, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.205, capn: 1.568, tl: 1, r: 1, shhp: 40, cs: 2},
      "7621": { n: "Limited Electron Blaster I", mg: 562, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 21, pg: 88, opt: 2200, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.02125, capn: 1.764, tl: 1, r: 2, shhp: 40, cs: 2},
      "7623": { n: "Regulated Electron Phase Cannon I", mg: 562, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 18, pg: 88, opt: 2100, acc: 3000, rof: 3000, trk: 0.144, dmg: 1.929375, capn: 1.862, tl: 1, r: 4, shhp: 40, cs: 2},
      "7625": { n: "Anode Electron Particle Cannon I", mg: 562, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 22, pg: 88, opt: 2300, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.113125, capn: 1.666, tl: 1, r: 8, shhp: 40, cs: 2},
      "7663": { n: "Modal Ion Particle Accelerator I", mg: 562, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 23, pg: 132, opt: 3000, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.54375, capn: 2.6166, tl: 1, r: 1, shhp: 40, cs: 2},
      "7665": { n: "Limited Ion Blaster I", mg: 562, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 24, pg: 132, opt: 2750, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.2484375, capn: 2.94, tl: 1, r: 2, shhp: 40, cs: 2},
      "7667": { n: "Regulated Ion Phase Cannon I", mg: 562, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 22, pg: 132, opt: 2625, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.10078125, capn: 3.1066, tl: 1, r: 4, shhp: 40, cs: 2},
      "7669": { n: "Anode Ion Particle Cannon I", mg: 562, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 132, opt: 2875, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.39609375, capn: 2.7783, tl: 1, r: 8, shhp: 40, cs: 2},
      "7703": { n: "Modal Neutron Particle Accelerator I", mg: 562, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 24, pg: 179, opt: 3600, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.41, capn: 3.3957, tl: 1, r: 1, shhp: 40, cs: 2},
      "7705": { n: "Limited Neutron Blaster I", mg: 562, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 179, opt: 3300, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.0425, capn: 3.822, tl: 1, r: 2, shhp: 40, cs: 2},
      "7707": { n: "Regulated Neutron Phase Cannon I", mg: 562, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 23, pg: 179, opt: 3150, acc: 5000, rof: 5250, trk: 0.12, dmg: 3.85875, capn: 4.0327, tl: 1, r: 4, shhp: 40, cs: 2},
      "7709": { n: "Anode Neutron Particle Cannon I", mg: 562, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 28, pg: 179, opt: 3450, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.22625, capn: 3.6113, tl: 1, r: 8, shhp: 40, cs: 2},
      "7743": { n: "Modal Mega Electron Particle Accelerator I", mg: 563, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 1100, opt: 4800, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.205, capn: 4.704, tl: 1, r: 1, shhp: 40, cs: 3},
      "7745": { n: "Limited Electron Blaster Cannon I", mg: 563, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 35, pg: 1100, opt: 4400, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.02125, capn: 5.292, tl: 1, r: 2, shhp: 40, cs: 3},
      "7747": { n: "Regulated Mega Electron Phase Cannon I", mg: 563, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 31, pg: 1100, opt: 4200, acc: 6000, rof: 4500, trk: 0.06, dmg: 1.929375, capn: 5.586, tl: 1, r: 4, shhp: 40, cs: 3},
      "7749": { n: "Anode Mega Electron Particle Cannon I", mg: 563, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 37, pg: 1100, opt: 4600, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.113125, capn: 4.998, tl: 1, r: 8, shhp: 40, cs: 3},
      "7783": { n: "Modal Mega Neutron Particle Accelerator I", mg: 563, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1980, opt: 7200, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.41, capn: 10.192, tl: 1, r: 1, shhp: 40, cs: 3},
      "7785": { n: "Limited Mega Neutron Blaster I", mg: 563, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 46, pg: 1980, opt: 6600, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.0425, capn: 11.466, tl: 1, r: 2, shhp: 40, cs: 3},
      "7787": { n: "Regulated Mega Neutron Phase Cannon I", mg: 563, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 41, pg: 1980, opt: 6300, acc: 10000, rof: 7875, trk: 0.05196, dmg: 3.85875, capn: 12.103, tl: 1, r: 4, shhp: 40, cs: 3},
      "7789": { n: "Anode Mega Neutron Particle Cannon I", mg: 563, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 49, pg: 1980, opt: 6900, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.22625, capn: 10.829, tl: 1, r: 8, shhp: 40, cs: 3},
      "7827": { n: "Modal Mega Ion Particle Accelerator I", mg: 563, pmg: 556, mta: 4, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 40, pg: 1540, opt: 6000, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.54375, capn: 7.84, tl: 1, r: 1, shhp: 40, cs: 3},
      "7829": { n: "Limited Mega Ion Blaster I", mg: 563, pmg: 556, mta: 2, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 43, pg: 1540, opt: 5500, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.2484375, capn: 8.82, tl: 1, r: 2, shhp: 40, cs: 3},
      "7831": { n: "Regulated Mega Ion Phase Cannon I", mg: 563, pmg: 556, mta: 1, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 38, pg: 1540, opt: 5250, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.10078125, capn: 9.31, tl: 1, r: 4, shhp: 40, cs: 3},
      "7833": { n: "Anode Mega Ion Particle Cannon I", mg: 563, pmg: 556, mta: 3, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 45, pg: 1540, opt: 5750, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.39609375, capn: 8.33, tl: 1, r: 8, shhp: 40, cs: 3},
      "10678": { n: "125mm Railgun I", mg: 564, pmg: 555, mta: 0, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 14, pg: 7, opt: 9000, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.2, capn: 1.505, tl: 1, shhp: 40, cs: 1},
      "10680": { n: "125mm Railgun II", mg: 564, pmg: 555, mta: 5, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 16, pg: 8, opt: 10800, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.64, capn: 1.505, tl: 2, shhp: 40, cs: 1},
      "10688": { n: "125mm 'Scout' Accelerator Cannon", mg: 564, pmg: 555, mta: 2, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 12, pg: 7, opt: 9900, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.42, capn: 1.351, tl: 1, r: 2, shhp: 40, cs: 1},
      "10690": { n: "125mm Carbide Railgun I", mg: 564, pmg: 555, mta: 1, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 11, pg: 7, opt: 9450, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.31, capn: 1.428, tl: 1, r: 4, shhp: 40, cs: 1},
      "10692": { n: "125mm Compressed Coil Gun I", mg: 564, pmg: 555, mta: 3, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 7, opt: 10350, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.53, capn: 1.281, tl: 1, r: 8, shhp: 40, cs: 1},
      "10694": { n: "125mm Prototype Gauss Gun", mg: 564, pmg: 555, mta: 4, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 11, pg: 7, opt: 10800, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.64, capn: 1.204, tl: 1, r: 1, shhp: 40, cs: 1},
      "12344": { n: "200mm Railgun I", mg: 565, pmg: 555, mta: 0, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 158, opt: 18000, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.2, capn: 4.515, tl: 1, shhp: 40, cs: 2},
      "12346": { n: "200mm Railgun II", mg: 565, pmg: 555, mta: 5, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 37, pg: 166, opt: 21600, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.64, capn: 4.515, tl: 2, shhp: 40, cs: 2},
      "12354": { n: "350mm Railgun I", mg: 566, pmg: 555, mta: 0, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 57, pg: 1650, opt: 36000, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.2, capn: 15.4, tl: 1, shhp: 40, cs: 3},
      "12356": { n: "350mm Railgun II", mg: 566, pmg: 555, mta: 5, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires either regular or advanced hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium, Javelin, Spike.", cpu: 63, pg: 1733, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.64, capn: 15.4, tl: 2, shhp: 40, cs: 3},
      "13864": { n: "Shadow Serpentis 125mm Railgun", mg: 564, pmg: 555, mta: 8, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 16, pg: 7, opt: 10800, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.75, capn: 1.204, tl: 1, r: 1, shhp: 40, cs: 1},
      "13865": { n: "Dread Guristas 125mm Railgun", mg: 564, pmg: 555, mta: 8, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 16, pg: 5, opt: 11700, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.64, capn: 1.204, tl: 1, r: 1, shhp: 40, cs: 1},
      "13866": { n: "Shadow Serpentis 150mm Railgun", mg: 564, pmg: 555, mta: 8, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 27, pg: 10, opt: 14400, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.78125, capn: 1.869, tl: 1, r: 1, shhp: 40, cs: 1},
      "13867": { n: "Dread Guristas 150mm Railgun", mg: 564, pmg: 555, mta: 8, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 27, pg: 8, opt: 15600, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.63, capn: 1.869, tl: 1, r: 1, shhp: 40, cs: 1},
      "13868": { n: "Shadow Serpentis 200mm Railgun", mg: 565, pmg: 555, mta: 8, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 37, pg: 158, opt: 18000, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.75, capn: 3.612, tl: 1, shhp: 40, cs: 2},
      "13870": { n: "Dread Guristas 200mm Railgun", mg: 565, pmg: 555, mta: 8, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 37, pg: 143, opt: 23400, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.64, capn: 3.612, tl: 1, shhp: 40, cs: 2},
      "13872": { n: "Shadow Serpentis 250mm Railgun", mg: 565, pmg: 555, mta: 8, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 42, pg: 198, opt: 28800, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.78125, capn: 5.6, tl: 1, r: 1, shhp: 40, cs: 2},
      "13873": { n: "Dread Guristas 250mm Railgun", mg: 565, pmg: 555, mta: 8, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 42, pg: 179, opt: 31200, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.63, capn: 5.6, tl: 1, r: 1, shhp: 40, cs: 2},
      "13874": { n: "Shadow Serpentis 350mm Railgun", mg: 566, pmg: 555, mta: 8, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1650, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.75, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "13876": { n: "Dread Guristas 350mm Railgun", mg: 566, pmg: 555, mta: 8, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1485, opt: 46800, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.64, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "13878": { n: "Shadow Serpentis 425mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 2200, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.78125, capn: 16.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "13879": { n: "Dread Guristas 425mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 1980, opt: 62400, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.63, capn: 16.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "13880": { n: "Shadow Serpentis Dual 150mm Railgun", mg: 565, pmg: 555, mta: 8, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 70, opt: 14400, acc: 6000, rof: 3900, trk: 0.0441, dmg: 2.0625, capn: 2.8, tl: 1, r: 1, shhp: 40, cs: 2},
      "13881": { n: "Dread Guristas Dual 150mm Railgun", mg: 565, pmg: 555, mta: 8, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 63, opt: 15600, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.98, capn: 2.8, tl: 1, r: 1, shhp: 40, cs: 2},
      "13882": { n: "Shadow Serpentis Dual 250mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1100, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.0625, capn: 8.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "13883": { n: "Dread Guristas Dual 250mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 990, opt: 31200, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.98, capn: 8.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "13884": { n: "Shadow Serpentis Heavy Electron Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 88, opt: 2100, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.296875, capn: 1.568, tl: 1, r: 4, shhp: 40, cs: 2},
      "13885": { n: "Shadow Serpentis Heavy Ion Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 31, pg: 132, opt: 2625, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.69140625, capn: 2.6166, tl: 1, r: 4, shhp: 40, cs: 2},
      "13886": { n: "Shadow Serpentis Light Electron Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 8, pg: 4, opt: 1050, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.296875, capn: 0.5243, tl: 1, r: 4, shhp: 40, cs: 1},
      "13887": { n: "Shadow Serpentis Light Ion Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 8, opt: 1312, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.69140625, capn: 0.8722, tl: 1, r: 4, shhp: 40, cs: 1},
      "13888": { n: "Shadow Serpentis Light Neutron Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 18, pg: 8, opt: 1575, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.59375, capn: 1.1319, tl: 1, r: 4, shhp: 40, cs: 1},
      "13889": { n: "Shadow Serpentis Electron Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1100, opt: 4200, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.296875, capn: 4.704, tl: 1, r: 4, shhp: 40, cs: 3},
      "13890": { n: "Shadow Serpentis Ion Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 53, pg: 1540, opt: 5250, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.69140625, capn: 7.84, tl: 1, r: 4, shhp: 40, cs: 3},
      "13891": { n: "Shadow Serpentis Neutron Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1980, opt: 6300, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.59375, capn: 10.192, tl: 1, r: 4, shhp: 40, cs: 3},
      "13892": { n: "Shadow Serpentis Heavy Neutron Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 179, opt: 3150, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.59375, capn: 3.3957, tl: 1, r: 4, shhp: 40, cs: 2},
      "13893": { n: "Dread Guristas 75mm Railgun", mg: 564, pmg: 555, mta: 8, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid ammo types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 2, opt: 7800, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.98, capn: 0.938, tl: 1, r: 1, shhp: 40, cs: 1},
      "13894": { n: "Shadow Serpentis 75mm Railgun", mg: 564, pmg: 555, mta: 8, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 2, opt: 7200, acc: 3000, rof: 2600, trk: 0.1365, dmg: 2.0625, capn: 0.938, tl: 1, r: 1, shhp: 40, cs: 1},
      "14272": { n: "200mm Carbide Railgun I", mg: 565, pmg: 555, mta: 1, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 158, opt: 18900, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.31, capn: 4.291, tl: 1, shhp: 40, cs: 2},
      "14274": { n: "200mm 'Scout' Accelerator Cannon", mg: 565, pmg: 555, mta: 2, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 29, pg: 158, opt: 19800, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.42, capn: 4.067, tl: 1, shhp: 40, cs: 2},
      "14276": { n: "200mm Compressed Coil Gun I", mg: 565, pmg: 555, mta: 3, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 31, pg: 158, opt: 20700, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.53, capn: 3.836, tl: 1, shhp: 40, cs: 2},
      "14278": { n: "200mm Prototype Gauss Gun", mg: 565, pmg: 555, mta: 4, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 28, pg: 158, opt: 21600, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.64, capn: 3.612, tl: 1, shhp: 40, cs: 2},
      "14280": { n: "350mm Carbide Railgun I", mg: 566, pmg: 555, mta: 1, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 45, pg: 1650, opt: 37800, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.31, capn: 14.63, tl: 1, shhp: 40, cs: 3},
      "14282": { n: "350mm 'Scout' Accelerator Cannon", mg: 566, pmg: 555, mta: 2, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 51, pg: 1650, opt: 39600, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.42, capn: 13.86, tl: 1, shhp: 40, cs: 3},
      "14284": { n: "350mm Compressed Coil Gun I", mg: 566, pmg: 555, mta: 3, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 54, pg: 1650, opt: 41400, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.53, capn: 13.09, tl: 1, shhp: 40, cs: 3},
      "14286": { n: "350mm Prototype Gauss Gun", mg: 566, pmg: 555, mta: 4, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 48, pg: 1650, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.64, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "14375": { n: "Tuvan's Modified Electron Blaster Cannon", mg: 563, pmg: 556, mta: 12, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1100, opt: 4200, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.5265625, capn: 4.851, tl: 1, shhp: 40, cs: 3},
      "14377": { n: "Cormack's Modified Electron Blaster Cannon", mg: 563, pmg: 556, mta: 14, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1210, opt: 4200, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.75625, capn: 5.292, tl: 1, shhp: 40, cs: 3},
      "14379": { n: "Cormack's Modified Ion Blaster Cannon", mg: 563, pmg: 556, mta: 14, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 53, pg: 1694, opt: 5250, acc: 8000, rof: 6750, trk: 0.0552, dmg: 4.4296875, capn: 8.82, tl: 1, shhp: 40, cs: 3},
      "14381": { n: "Tuvan's Modified Ion Blaster Cannon", mg: 563, pmg: 556, mta: 12, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 53, pg: 1540, opt: 5250, acc: 8000, rof: 6750, trk: 0.0552, dmg: 4.060546875, capn: 8.085, tl: 1, shhp: 40, cs: 3},
      "14383": { n: "Tuvan's Modified Neutron Blaster Cannon", mg: 563, pmg: 556, mta: 12, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1980, opt: 6300, acc: 10000, rof: 7875, trk: 0.05196, dmg: 5.053125, capn: 10.5105, tl: 1, shhp: 40, cs: 3},
      "14385": { n: "Cormack's Modified Neutron Blaster Cannon", mg: 563, pmg: 556, mta: 14, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 2178, opt: 6300, acc: 10000, rof: 7875, trk: 0.05196, dmg: 5.5125, capn: 11.466, tl: 1, shhp: 40, cs: 3},
      "14387": { n: "Brynn's Modified 350mm Railgun", mg: 566, pmg: 555, mta: 11, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1733, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 3.025, capn: 12.705, tl: 1, shhp: 40, cs: 3},
      "14389": { n: "Setele's Modified 350mm Railgun", mg: 566, pmg: 555, mta: 13, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1815, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 3.3, capn: 13.86, tl: 1, shhp: 40, cs: 3},
      "14391": { n: "Kaikka's Modified 350mm Railgun", mg: 566, pmg: 555, mta: 11, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1485, opt: 46800, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.772, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "14393": { n: "Vepas' Modified 350mm Railgun", mg: 566, pmg: 555, mta: 13, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 1559, opt: 49140, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.904, capn: 13.09, tl: 1, shhp: 40, cs: 3},
      "14395": { n: "Estamel's Modified 350mm Railgun", mg: 566, pmg: 555, mta: 14, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 77, pg: 1634, opt: 51480, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 3.036, capn: 13.86, tl: 1, shhp: 40, cs: 3},
      "14397": { n: "Brynn's Modified 425mm Railgun", mg: 566, pmg: 555, mta: 11, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 2311, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 4.159375, capn: 17.325, tl: 1, shhp: 40, cs: 3},
      "14399": { n: "Setele's Modified 425mm Railgun", mg: 566, pmg: 555, mta: 13, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 2420, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 4.5375, capn: 18.9, tl: 1, shhp: 40, cs: 3},
      "14401": { n: "Kaikka's Modified 425mm Railgun", mg: 566, pmg: 555, mta: 11, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 1980, opt: 62400, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.8115, capn: 16.8, tl: 1, shhp: 40, cs: 3},
      "14403": { n: "Vepas' Modified 425mm Railgun", mg: 566, pmg: 555, mta: 13, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 86, pg: 2079, opt: 65520, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.993, capn: 17.85, tl: 1, shhp: 40, cs: 3},
      "14405": { n: "Estamel's Modified 425mm Railgun", mg: 566, pmg: 555, mta: 14, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 91, pg: 2178, opt: 68640, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 4.1745, capn: 18.9, tl: 1, shhp: 40, cs: 3},
      "14407": { n: "Brynn's Modified Dual 250mm Railgun", mg: 566, pmg: 555, mta: 11, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1155, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.26875, capn: 8.666, tl: 1, shhp: 40, cs: 3},
      "14409": { n: "Setele's Modified Dual 250mm Railgun", mg: 566, pmg: 555, mta: 13, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1210, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.475, capn: 9.45, tl: 1, shhp: 40, cs: 3},
      "14411": { n: "Kaikka's Modified Dual 250mm Railgun", mg: 566, pmg: 555, mta: 11, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 990, opt: 31200, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.079, capn: 8.4, tl: 1, shhp: 40, cs: 3},
      "14413": { n: "Vepas' Modified Dual 250mm Railgun", mg: 566, pmg: 555, mta: 13, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 66, pg: 1039, opt: 32760, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.178, capn: 8.925, tl: 1, shhp: 40, cs: 3},
      "14415": { n: "Estamel's Modified Dual 250mm Railgun", mg: 566, pmg: 555, mta: 14, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 70, pg: 1089, opt: 34320, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.277, capn: 9.45, tl: 1, shhp: 40, cs: 3},
      "15814": { n: "Caldari Navy Dual 250mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 990, opt: 31200, acc: 12000, rof: 5850, trk: 0.018375, dmg: 1.98, capn: 8.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "15815": { n: "Caldari Navy Dual 150mm Railgun", mg: 565, pmg: 555, mta: 8, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 63, opt: 15600, acc: 6000, rof: 3900, trk: 0.0441, dmg: 1.98, capn: 2.8, tl: 1, r: 1, shhp: 40, cs: 2},
      "15816": { n: "Caldari Navy 75mm Railgun", mg: 564, pmg: 555, mta: 8, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 2, opt: 7800, acc: 3000, rof: 2600, trk: 0.1365, dmg: 1.98, capn: 0.826, tl: 1, r: 1, shhp: 40, cs: 1},
      "15817": { n: "Caldari Navy 425mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 1980, opt: 62400, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.63, capn: 16.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "15818": { n: "Caldari Navy 350mm Railgun", mg: 566, pmg: 555, mta: 8, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1485, opt: 46800, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.64, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "15820": { n: "Caldari Navy 250mm Railgun", mg: 565, pmg: 555, mta: 8, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 42, pg: 179, opt: 31200, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.63, capn: 5.6, tl: 1, r: 1, shhp: 40, cs: 2},
      "15821": { n: "Caldari Navy 200mm Railgun", mg: 565, pmg: 555, mta: 8, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 37, pg: 143, opt: 23400, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.64, capn: 3.612, tl: 1, shhp: 40, cs: 2},
      "15823": { n: "Caldari Navy 150mm Railgun", mg: 564, pmg: 555, mta: 8, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 27, pg: 8, opt: 15600, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.63, capn: 1.869, tl: 1, r: 1, shhp: 40, cs: 1},
      "15824": { n: "Caldari Navy 125mm Railgun", mg: 564, pmg: 555, mta: 8, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 16, pg: 5, opt: 11700, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.64, capn: 1.204, tl: 1, r: 1, shhp: 40, cs: 1},
      "15825": { n: "Federation Navy Neutron Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1980, opt: 6300, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.59375, capn: 10.192, tl: 1, r: 4, shhp: 40, cs: 3},
      "15826": { n: "Federation Navy Light Neutron Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 18, pg: 8, opt: 1575, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.59375, capn: 1.1319, tl: 1, r: 4, shhp: 40, cs: 1},
      "15827": { n: "Federation Navy Light Ion Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 8, opt: 1312, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.69140625, capn: 0.8722, tl: 1, r: 4, shhp: 40, cs: 1},
      "15828": { n: "Federation Navy Light Electron Blaster", mg: 561, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 8, pg: 4, opt: 1050, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.296875, capn: 0.5243, tl: 1, r: 4, shhp: 40, cs: 1},
      "15829": { n: "Federation Navy Ion Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 53, pg: 1540, opt: 5250, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.69140625, capn: 7.84, tl: 1, r: 4, shhp: 40, cs: 3},
      "15830": { n: "Federation Navy Heavy Neutron Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 179, opt: 3150, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.59375, capn: 3.3957, tl: 1, r: 4, shhp: 40, cs: 2},
      "15831": { n: "Federation Navy Heavy Ion Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 31, pg: 132, opt: 2625, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.69140625, capn: 2.6166, tl: 1, r: 4, shhp: 40, cs: 2},
      "15832": { n: "Federation Navy Heavy Electron Blaster", mg: 562, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 26, pg: 88, opt: 2100, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.296875, capn: 1.568, tl: 1, r: 4, shhp: 40, cs: 2},
      "15833": { n: "Federation Navy Electron Blaster Cannon", mg: 563, pmg: 556, mta: 8, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 44, pg: 1100, opt: 4200, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.296875, capn: 4.704, tl: 1, r: 4, shhp: 40, cs: 3},
      "15834": { n: "Federation Navy Dual 250mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This battleship-sized weapon is a double-barreled version of the cruiser class 250mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 58, pg: 1100, opt: 28800, acc: 12000, rof: 5850, trk: 0.018375, dmg: 2.0625, capn: 8.4, tl: 1, r: 1, shhp: 40, cs: 3},
      "15835": { n: "Federation Navy Dual 150mm Railgun", mg: 565, pmg: 555, mta: 8, d: "This cruiser-sized weapon is a double-barreled version of the frigate class 150mm railgun. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 33, pg: 70, opt: 14400, acc: 6000, rof: 3900, trk: 0.0441, dmg: 2.0625, capn: 2.8, tl: 1, r: 1, shhp: 40, cs: 2},
      "15836": { n: "Federation Navy 75mm Railgun", mg: 564, pmg: 555, mta: 8, d: "A small multi-barreled railgun for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 2, opt: 7200, acc: 3000, rof: 2600, trk: 0.1365, dmg: 2.0625, capn: 0.938, tl: 1, r: 1, shhp: 40, cs: 1},
      "15837": { n: "Federation Navy 425mm Railgun", mg: 566, pmg: 555, mta: 8, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 74, pg: 2200, opt: 57600, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.78125, capn: 16.8, tl: 1, r: 1, shhp: 40, cs: 3},
      "15838": { n: "Federation Navy 350mm Railgun", mg: 566, pmg: 555, mta: 8, d: "The 350mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 63, pg: 1650, opt: 43200, acc: 20000, rof: 7313, trk: 0.0122535, dmg: 2.75, capn: 12.32, tl: 1, shhp: 40, cs: 3},
      "15840": { n: "Federation Navy 250mm Railgun", mg: 565, pmg: 555, mta: 8, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 42, pg: 198, opt: 28800, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.78125, capn: 5.6, tl: 1, r: 1, shhp: 40, cs: 2},
      "15841": { n: "Federation Navy 200mm Railgun", mg: 565, pmg: 555, mta: 8, d: "The 200mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 37, pg: 158, opt: 18000, acc: 10000, rof: 4875, trk: 0.0294, dmg: 2.75, capn: 3.612, tl: 1, shhp: 40, cs: 2},
      "15843": { n: "Federation Navy 150mm Railgun", mg: 564, pmg: 555, mta: 8, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 27, pg: 10, opt: 14400, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.78125, capn: 1.869, tl: 1, r: 1, shhp: 40, cs: 1},
      "15844": { n: "Federation Navy 125mm Railgun", mg: 564, pmg: 555, mta: 8, d: "The 125mm railgun works much the same as its big brother except that it is considerably faster but also less powerful. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 16, pg: 7, opt: 10800, acc: 5000, rof: 3250, trk: 0.08925, dmg: 2.75, capn: 1.204, tl: 1, r: 1, shhp: 40, cs: 1},
      "20448": { n: "Dual 1000mm Railgun I", mg: 772, pmg: 555, mta: 0, d: "One of the largest weapons currently in existence, this massive railgun is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 115, pg: 110000, opt: 96000, acc: 24000, rof: 14345, trk: 0.001925, dmg: 5.8, capn: 190.4, tl: 1, shhp: 40, cs: 4},
      "20450": { n: "Ion Siege Blaster Cannon I", mg: 771, pmg: 556, mta: 0, d: "One of the largest weapons currently in existence, this massive blaster is designed for extended sieges of stationary installations and other large targets.\n\
Note: May only be fitted to capital class ships.\n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 105, pg: 99000, opt: 20000, acc: 25000, rof: 10632, trk: 0.0046, dmg: 7.92, capn: 168, tl: 1, shhp: 40, cs: 4},
      "20587": { n: "150mm 'Musket' Railgun", mg: 564, pmg: 555, mta: 6, d: "This is a standard long-range railgun designed for frigates. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 20, pg: 8, opt: 12000, acc: 6000, rof: 4250, trk: 0.0735, dmg: 3.3, capn: 2.1, tl: 1, shhp: 40, cs: 1},
      "20589": { n: "250mm 'Flintlock' Railgun", mg: 565, pmg: 555, mta: 6, d: "Cruiser-sized large barrel turret. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 32, pg: 179, opt: 24000, acc: 12000, rof: 6375, trk: 0.02415, dmg: 3.3, capn: 6.3, tl: 1, shhp: 40, cs: 2},
      "20591": { n: "425mm 'Popper' Railgun", mg: 566, pmg: 555, mta: 6, d: "This large battleship-sized weapon packs quite a punch. Railguns use magnetic rails to fire solid chunks of matter at hypersonic speed. The accurate range of railguns is very good, but due to technical limitations it cannot use onboard guidance. This results in a fairly rapid drop in accuracy at extreme ranges. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 57, pg: 1980, opt: 48000, acc: 24000, rof: 9563, trk: 0.01010625, dmg: 3.3, capn: 18.9, tl: 1, shhp: 40, cs: 3},
      "22899": { n: "'Corporate' Light Electron Blaster I", mg: 561, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 6, pg: 4, opt: 1200, acc: 1500, rof: 2000, trk: 0.438, dmg: 2.205, capn: 0.6566, tl: 1, shhp: 40, cs: 1},
      "22901": { n: "'Dealer' Light Ion Blaster I", mg: 561, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 9, pg: 7, opt: 1500, acc: 2000, rof: 3000, trk: 0.4032, dmg: 3.54375, capn: 1.0927, tl: 1, shhp: 40, cs: 1},
      "22903": { n: "'Racket' Light Neutron Blaster I", mg: 561, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 13, pg: 8, opt: 1800, acc: 2500, rof: 3500, trk: 0.3798, dmg: 4.41, capn: 1.4161, tl: 1, shhp: 40, cs: 1},
      "22905": { n: "'Slither' Heavy Electron Blaster I", mg: 562, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 18, pg: 79, opt: 2400, acc: 3000, rof: 3000, trk: 0.144, dmg: 2.205, capn: 1.96, tl: 1, shhp: 40, cs: 2},
      "22907": { n: "'Hooligan' Heavy Ion Blaster I", mg: 562, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 22, pg: 119, opt: 3000, acc: 4000, rof: 4500, trk: 0.132, dmg: 3.54375, capn: 3.2683, tl: 1, shhp: 40, cs: 2},
      "22909": { n: "'Hustler' Heavy Neutron Blaster I", mg: 562, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 24, pg: 161, opt: 3600, acc: 5000, rof: 5250, trk: 0.12, dmg: 4.41, capn: 4.2483, tl: 1, shhp: 40, cs: 2},
      "22911": { n: "'Swindler' Electron Blaster Cannon I", mg: 563, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 31, pg: 990, opt: 4800, acc: 6000, rof: 4500, trk: 0.06, dmg: 2.205, capn: 5.88, tl: 1, shhp: 40, cs: 3},
      "22913": { n: "'Felon' Ion Blaster Cannon I", mg: 563, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 38, pg: 1386, opt: 6000, acc: 8000, rof: 6750, trk: 0.0552, dmg: 3.54375, capn: 9.8, tl: 1, shhp: 40, cs: 3},
      "22915": { n: "'Underhand' Neutron Blaster Cannon I", mg: 563, pmg: 556, mta: 6, d: "Particle blasters operate on a similar principle as the railgun except they fire a magnetically contained ball of subatomic particles. No other turret class can match the sheer destructive power of particle blasters, but due to the rapid dispersion of the containment field, it also has the worst range of all turrets. \n\
\n\
Requires hybrid charge types: Antimatter, Iridium, Iron, Lead, Plutonium, Thorium, Tungsten, Uranium.", cpu: 41, pg: 1782, opt: 7200, acc: 10000, rof: 7875, trk: 0.05196, dmg: 4.41, capn: 12.74, tl: 1, shhp: 40, cs: 3}
    },
    "83": {
      "178": { n: "Carbonized Lead S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem. \n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 1, kid: 4, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "179": { n: "Nuclear S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4, kid: 1, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "180": { n: "Proton S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 3, exd: 0, kid: 2, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "181": { n: "Depleted Uranium S", mg: 113, pmg: 845, mta: 0, d: "Small projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead. \n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 3, kid: 2, thd: 3, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "182": { n: "Titanium Sabot S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 2, kid: 6, thd: 0, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "183": { n: "Fusion S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 10, kid: 2, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "184": { n: "Phased Plasma S", mg: 113, pmg: 845, mta: 0, d: "Small Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 2, thd: 10, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "185": { n: "EMP S", mg: 113, pmg: 845, mta: 0, d: "Small projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 9, exd: 2, kid: 1, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "186": { n: "Carbonized Lead M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 2, kid: 8, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "187": { n: "Nuclear M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 8, kid: 2, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "188": { n: "Proton M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 6, exd: 0, kid: 4, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "189": { n: "Depleted Uranium M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 6, kid: 4, thd: 6, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "190": { n: "Titanium Sabot M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 4, kid: 12, thd: 0, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "191": { n: "Fusion M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 20, kid: 4, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "192": { n: "Phased Plasma M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 4, thd: 20, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "193": { n: "EMP M", mg: 112, pmg: 845, mta: 0, d: "Medium Projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 18, exd: 4, kid: 2, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "194": { n: "Carbonized Lead L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4, kid: 16, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "195": { n: "Nuclear L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 16, kid: 4, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "196": { n: "Proton L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 12, exd: 0, kid: 8, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "197": { n: "Depleted Uranium L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 12, kid: 8, thd: 12, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "198": { n: "Titanium Sabot L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 8, kid: 24, thd: 0, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "199": { n: "Fusion L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 40, kid: 8, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "200": { n: "Phased Plasma L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8, thd: 40, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "201": { n: "EMP L", mg: 109, pmg: 845, mta: 0, d: "Large Projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 36, exd: 8, kid: 4, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "17664": { n: "Carbonized Lead XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 8, kid: 32, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "17666": { n: "Depleted Uranium XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 24, kid: 16, thd: 24, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "17668": { n: "EMP XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 72, exd: 16, kid: 8, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "17670": { n: "Fusion XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 80, kid: 16, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "17672": { n: "Nuclear XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts.  Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 32, kid: 8, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "17674": { n: "Phased Plasma XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 16, thd: 80, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "17676": { n: "Proton XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 24, exd: 0, kid: 16, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "17678": { n: "Titanium Sabot XL", mg: 502, pmg: 845, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation flechettes that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 16, kid: 48, thd: 0, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "19970": { n: "Arch Angel Carbonized Lead S", mg: 989, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 1.1, kid: 4.4, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "19972": { n: "Arch Angel Nuclear S", mg: 989, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.4, kid: 1.1, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "19974": { n: "Arch Angel Proton S", mg: 989, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 3.3, exd: 0, kid: 2.2, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "19976": { n: "Arch Angel Depleted Uranium S", mg: 989, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 3.3, kid: 2.2, thd: 3.3, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "19986": { n: "Arch Angel Titanium Sabot S", mg: 989, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 2.2, kid: 6.6, thd: 0, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "19988": { n: "Arch Angel Fusion S", mg: 989, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 11, kid: 2.2, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "19990": { n: "Arch Angel Phased Plasma S", mg: 989, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range. ", tl: 1, emd: 0, exd: 0, kid: 2.2, thd: 11, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "19992": { n: "Arch Angel EMP S", mg: 989, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 9.9, exd: 2.2, kid: 1.1, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "19994": { n: "Arch Angel Carbonized Lead M", mg: 988, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 2.2, kid: 8.8, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "19996": { n: "Arch Angel Nuclear M", mg: 988, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 8.8, kid: 2.2, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "19998": { n: "Arch Angel Proton M", mg: 988, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 6.6, exd: 0, kid: 4.4, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "20000": { n: "Arch Angel Depleted Uranium M", mg: 988, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 6.6, kid: 4.4, thd: 6.6, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "20002": { n: "Arch Angel Titanium Sabot M", mg: 988, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 4.4, kid: 13.2, thd: 0, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "20004": { n: "Arch Angel Fusion M", mg: 988, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 22, kid: 4.4, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20006": { n: "Arch Angel Phased Plasma M", mg: 988, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 4.4, thd: 22, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20008": { n: "Arch Angel EMP M", mg: 988, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 19.8, exd: 4.4, kid: 2.2, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20721": { n: "Arch Angel Carbonized Lead L", mg: 987, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.4, kid: 17.6, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20723": { n: "Arch Angel Nuclear L", mg: 987, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 17.6, kid: 4.4, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20725": { n: "Arch Angel Proton L", mg: 987, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 13.2, exd: 0, kid: 8.8, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20727": { n: "Arch Angel Depleted Uranium L", mg: 987, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 13.2, kid: 8.8, thd: 13.2, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "20729": { n: "Arch Angel Titanium Sabot L", mg: 987, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 8.8, kid: 26.4, thd: 0, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "20731": { n: "Arch Angel Fusion L", mg: 987, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.\n\
", tl: 1, emd: 0, exd: 44, kid: 8.8, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20733": { n: "Arch Angel Phased Plasma L", mg: 987, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8.8, thd: 44, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20735": { n: "Arch Angel EMP L", mg: 987, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 39.6, exd: 8.8, kid: 4.4, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20737": { n: "Arch Angel Carbonized Lead XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 8.8, kid: 35.2, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20739": { n: "Arch Angel Depleted Uranium XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 26.4, kid: 17.6, thd: 26.4, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "20741": { n: "Arch Angel EMP XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 79.2, exd: 17.6, kid: 8.8, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20743": { n: "Arch Angel Fusion XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 88, kid: 17.6, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20745": { n: "Arch Angel Nuclear XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts.  Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 35.2, kid: 8.8, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20747": { n: "Arch Angel Phased Plasma XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 17.6, thd: 88, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20749": { n: "Arch Angel Proton XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 26.4, exd: 0, kid: 17.6, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20751": { n: "Arch Angel Titanium Sabot XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation flechettes that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 17.6, kid: 52.8, thd: 0, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "20753": { n: "Domination Carbonized Lead S", mg: 989, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 1.2, kid: 4.8, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "20755": { n: "Domination Nuclear S", mg: 989, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.8, kid: 1.2, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "20757": { n: "Domination Proton S", mg: 989, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 3.6, exd: 0, kid: 2.4, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "20759": { n: "Domination Depleted Uranium S", mg: 989, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 3.6, kid: 2.4, thd: 3.6, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "20761": { n: "Domination Titanium Sabot S", mg: 989, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 2.4, kid: 7.2, thd: 0, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "20763": { n: "Domination Fusion S", mg: 989, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 12, kid: 2.4, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "20765": { n: "Domination Phased Plasma S", mg: 989, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range. ", tl: 1, emd: 0, exd: 0, kid: 2.4, thd: 12, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "20767": { n: "Domination EMP S", mg: 989, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 10.8, exd: 2.4, kid: 1.2, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "20769": { n: "Domination Carbonized Lead M", mg: 988, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 2.4, kid: 9.6, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "20771": { n: "Domination Nuclear M", mg: 988, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 9.6, kid: 2.4, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "20773": { n: "Domination Proton M", mg: 988, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 7.2, exd: 0, kid: 4.8, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "20775": { n: "Domination Depleted Uranium M", mg: 988, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 7.2, kid: 4.8, thd: 7.2, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "20777": { n: "Domination Titanium Sabot M", mg: 988, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 4.8, kid: 14.4, thd: 0, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "20779": { n: "Domination Fusion M", mg: 988, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 24, kid: 4.8, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20781": { n: "Domination Phased Plasma M", mg: 988, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range. ", tl: 1, emd: 0, exd: 0, kid: 4.8, thd: 24, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20783": { n: "Domination EMP M", mg: 988, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 21.6, exd: 4.8, kid: 2.4, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "20785": { n: "Domination Carbonized Lead L", mg: 987, pmg: 986, mta: 0, d: "This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.8, kid: 19.2, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20787": { n: "Domination Nuclear L", mg: 987, pmg: 986, mta: 0, d: "Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 19.2, kid: 4.8, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20789": { n: "Domination Proton L", mg: 987, pmg: 986, mta: 0, d: "Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 14.4, exd: 0, kid: 9.6, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "20791": { n: "Domination Depleted Uranium L", mg: 987, pmg: 986, mta: 0, d: "Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 14.4, kid: 9.6, thd: 14.4, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "20793": { n: "Domination Titanium Sabot L", mg: 987, pmg: 986, mta: 0, d: "This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 9.6, kid: 28.8, thd: 0, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "20795": { n: "Domination Fusion L", mg: 987, pmg: 986, mta: 0, d: "The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 48, kid: 9.6, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20797": { n: "Domination Phased Plasma L", mg: 987, pmg: 986, mta: 0, d: "This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 9.6, thd: 48, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20799": { n: "Domination EMP L", mg: 987, pmg: 986, mta: 0, d: "A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 43.2, exd: 9.6, kid: 4.8, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "20801": { n: "Domination Carbonized Lead XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 9.6, kid: 38.4, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20803": { n: "Domination Depleted Uranium XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 28.8, kid: 19.2, thd: 28.8, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "20805": { n: "Domination EMP XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 86.4, exd: 19.2, kid: 9.6, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20807": { n: "Domination Fusion XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 96, kid: 19.2, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20809": { n: "Domination Nuclear XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts.  Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 38.4, kid: 9.6, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20811": { n: "Domination Phased Plasma XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 19.2, thd: 96, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "20813": { n: "Domination Proton XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 28.8, exd: 0, kid: 19.2, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "20815": { n: "Domination Titanium Sabot XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation flechettes that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 19.2, kid: 57.6, thd: 0, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "21894": { n: "Republic Fleet EMP L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 41.4, exd: 9.2, kid: 4.6, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "21896": { n: "Republic Fleet EMP M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 20.7, exd: 4.6, kid: 2.3, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "21898": { n: "Republic Fleet EMP S", mg: 989, pmg: 986, mta: 0, d: "Small projectile Ammo. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 10.35, exd: 2.3, kid: 1.15, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "21900": { n: "Republic Fleet EMP XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. A new technology, this highly advanced ammunition emits a focused EM pulse. Very potent against shields.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 82.8, exd: 18.4, kid: 9.2, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "21902": { n: "Republic Fleet Fusion L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 46, kid: 9.2, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "21904": { n: "Republic Fleet Fusion M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 23, kid: 4.6, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "21906": { n: "Republic Fleet Fusion S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 11.5, kid: 2.3, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "21908": { n: "Republic Fleet Fusion XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. The destructive power of a fusion warhead is superior to most other projectile warheads available, although it has problems penetrating heavy shield systems.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 92, kid: 18.4, thd: 0, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "21910": { n: "Republic Fleet Nuclear L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 18.4, kid: 4.6, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "21912": { n: "Republic Fleet Nuclear M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 9.2, kid: 2.3, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "21914": { n: "Republic Fleet Nuclear S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.6, kid: 1.15, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "21916": { n: "Republic Fleet Nuclear XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts.  Nuclear weapons are considered by most races to be crude and primitive. However, the Minmatar still favor them over more sophisticated weapons due to the abundance of materials for plutonium production in Minmatar space.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 36.8, kid: 9.2, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "21918": { n: "Republic Fleet Phased Plasma L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 9.2, thd: 46, wrm: 0.5, cs: 3, lg: 55, tsm: 1},
      "21920": { n: "Republic Fleet Phased Plasma XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 18.4, thd: 92, wrm: 0.5, cs: 4, lg: 55, tsm: 1},
      "21922": { n: "Republic Fleet Phased Plasma M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 4.6, thd: 23, wrm: 0.5, cs: 2, lg: 55, tsm: 1},
      "21924": { n: "Republic Fleet Phased Plasma S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. This ammo uses a similar plasma containment core as hybrid charges except that it is mounted in a standard cannon shell.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 2.3, thd: 11.5, wrm: 0.5, cs: 1, lg: 55, tsm: 1},
      "21926": { n: "Republic Fleet Proton L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 13.8, exd: 0, kid: 9.2, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "21928": { n: "Republic Fleet Proton M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 6.9, exd: 0, kid: 4.6, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "21931": { n: "Republic Fleet Proton S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 3.45, exd: 0, kid: 2.3, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "21933": { n: "Republic Fleet Proton XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. Emits a focused, high intensity proton burst upon impact. Fairly effective vs. both shields and armor.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 27.6, exd: 0, kid: 18.4, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "21935": { n: "Republic Fleet Titanium Sabot L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 9.2, kid: 27.6, thd: 0, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "21937": { n: "Republic Fleet Titanium Sabot M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 4.6, kid: 13.8, thd: 0, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "21939": { n: "Republic Fleet Titanium Sabot S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation fletchets that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 2.3, kid: 6.9, thd: 0, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "21941": { n: "Republic Fleet Titanium Sabot XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This is among the most feared ammunition around. It has excellent penetration. Once the ship's outer layer is penetrated, the core explodes, spraying the interior with a cloud of fragmentation flechettes that cause considerable damage to the vulnerable interior structure.\n\
\n\
20% increased tracking speed.", tl: 1, emd: 0, exd: 18.4, kid: 55.2, thd: 0, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "28324": { n: "Republic Fleet Carbonized Lead L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 4.6, kid: 18.4, thd: 0, wrm: 1.6, cs: 3, lg: 55, tsm: 1.05},
      "28326": { n: "Republic Fleet Carbonized Lead M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 2.3, kid: 9.2, thd: 0, wrm: 1.6, cs: 2, lg: 55, tsm: 1.05},
      "28328": { n: "Republic Fleet Carbonized Lead S", mg: 989, pmg: 986, mta: 0, d: "Small Projectile Ammo. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem. \n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 1.15, kid: 4.6, thd: 0, wrm: 1.6, cs: 1, lg: 55, tsm: 1.05},
      "28330": { n: "Republic Fleet Carbonized Lead XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. This ammo uses a simple lead slug encased in a hard shell of crystalline carbon. It is fairly cheap and works very well against most armors. Shields, however, are a problem.\n\
\n\
60% increased optimal range.\n\
5% increased tracking speed.", tl: 1, emd: 0, exd: 9.2, kid: 36.8, thd: 0, wrm: 1.6, cs: 4, lg: 55, tsm: 1.05},
      "28332": { n: "Republic Fleet Depleted Uranium L", mg: 987, pmg: 986, mta: 0, d: "Large Projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 13.8, kid: 9.2, thd: 13.8, wrm: 1, cs: 3, lg: 55, tsm: 1.2},
      "28334": { n: "Republic Fleet Depleted Uranium M", mg: 988, pmg: 986, mta: 0, d: "Medium Projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 6.9, kid: 4.6, thd: 6.9, wrm: 1, cs: 2, lg: 55, tsm: 1.2},
      "28336": { n: "Republic Fleet Depleted Uranium S", mg: 989, pmg: 986, mta: 0, d: "Small projectile Ammo. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead. \n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 3.45, kid: 2.3, thd: 3.45, wrm: 1, cs: 1, lg: 55, tsm: 1.2},
      "28338": { n: "Republic Fleet Depleted Uranium XL", mg: 1006, pmg: 986, mta: 0, d: "Extra Large Projectile Ammo. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Very commonly used by Minmatar pilots, this ammo is incendiary and also has great penetration. Just be careful handling it unless you want to wake up with an extra toe on your forehead.\n\
\n\
20% tracking speed bonus.", tl: 1, emd: 0, exd: 27.6, kid: 18.4, thd: 27.6, wrm: 1, cs: 4, lg: 55, tsm: 1.2},
      "32801": { n: "Tactical EMP S", mg: 1598, pmg: 99, mta: 0, d: "This highly specialized space to ground ammunition can penetrate the atmosphere of planets. It is only useful against ground targets and relies on special targeting data provided by ground troops.\n\
\n\
The Electro Magnetic strike has the broadest radius of all small orbital strikes and wipes out the shields of anything unfortunate enough to come in to contact with it. For a team fitted primarily with armor this can provide a significant combat advantage in the heat of battle.", tl: 1, wrm: 0.5, cs: 1, lg: 55, tsm: 1}
    },
    "85": {
      "215": { n: "Iron Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3, thd: 2, wrm: 1.6, cs: 1, lg: 74},
      "216": { n: "Tungsten Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4, thd: 2, wrm: 1.4, cs: 1, lg: 74},
      "217": { n: "Iridium Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4, thd: 3, wrm: 1.2, cs: 1, lg: 74},
      "218": { n: "Lead Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5, thd: 3, wrm: 1, cs: 1, lg: 74},
      "219": { n: "Thorium Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5, thd: 4, wrm: 0.875, cs: 1, lg: 74},
      "220": { n: "Uranium Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 4, wrm: 0.75, cs: 1, lg: 74},
      "221": { n: "Plutonium Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 5, wrm: 0.625, cs: 1, lg: 74},
      "222": { n: "Antimatter Charge S", mg: 107, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 7, thd: 5, wrm: 0.5, cs: 1, lg: 74},
      "223": { n: "Iron Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 4, wrm: 1.6, cs: 2, lg: 74},
      "224": { n: "Tungsten Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8, thd: 4, wrm: 1.4, cs: 2, lg: 74},
      "225": { n: "Iridium Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8, thd: 6, wrm: 1.2, cs: 2, lg: 74},
      "226": { n: "Lead Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 10, thd: 6, wrm: 1, cs: 2, lg: 74},
      "227": { n: "Thorium Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 10, thd: 8, wrm: 0.875, cs: 2, lg: 74},
      "228": { n: "Uranium Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 8, wrm: 0.75, cs: 2, lg: 74},
      "229": { n: "Plutonium Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 10, wrm: 0.625, cs: 2, lg: 74},
      "230": { n: "Antimatter Charge M", mg: 108, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 14, thd: 10, wrm: 0.5, cs: 2, lg: 74},
      "231": { n: "Iron Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 8, wrm: 1.6, cs: 3, lg: 74},
      "232": { n: "Tungsten Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 16, thd: 8, wrm: 1.4, cs: 3, lg: 74},
      "233": { n: "Iridium Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 16, thd: 12, wrm: 1.2, cs: 3, lg: 74},
      "234": { n: "Lead Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 20, thd: 12, wrm: 1, cs: 3, lg: 74},
      "235": { n: "Thorium Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 20, thd: 16, wrm: 0.875, cs: 3, lg: 74},
      "236": { n: "Uranium Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 16, wrm: 0.75, cs: 3, lg: 74},
      "237": { n: "Plutonium Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 20, wrm: 0.625, cs: 3, lg: 74},
      "238": { n: "Antimatter Charge L", mg: 106, pmg: 848, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 28, thd: 20, wrm: 0.5, cs: 3, lg: 74},
      "17648": { n: "Antimatter Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 56, thd: 40, wrm: 0.5, cs: 4, lg: 74},
      "17650": { n: "Iridium Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 32, thd: 24, wrm: 1.2, cs: 4, lg: 74},
      "17652": { n: "Iron Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 16, wrm: 1.6, cs: 4, lg: 74},
      "17654": { n: "Lead Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 40, thd: 24, wrm: 1, cs: 4, lg: 74},
      "17656": { n: "Plutonium Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 40, wrm: 0.625, cs: 4, lg: 74},
      "17658": { n: "Thorium Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 40, thd: 32, wrm: 0.875, cs: 4, lg: 74},
      "17660": { n: "Tungsten Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 32, thd: 16, wrm: 1.4, cs: 4, lg: 74},
      "17662": { n: "Uranium Charge XL", mg: 504, pmg: 848, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 32, wrm: 0.75, cs: 4, lg: 74},
      "19962": { n: "Shadow Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.3, thd: 2.2, wrm: 1.6, cs: 1, lg: 74},
      "19964": { n: "Shadow Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.4, thd: 2.2, wrm: 1.4, cs: 1, lg: 74},
      "19966": { n: "Shadow Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.4, thd: 3.3, wrm: 1.2, cs: 1, lg: 74},
      "19968": { n: "Shadow Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.5, thd: 3.3, wrm: 1, cs: 1, lg: 74},
      "20034": { n: "Shadow Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.5, thd: 4.4, wrm: 0.875, cs: 1, lg: 74},
      "20036": { n: "Shadow Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 4.4, wrm: 0.75, cs: 1, lg: 74},
      "20038": { n: "Shadow Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 5.5, wrm: 0.625, cs: 1, lg: 74},
      "20040": { n: "Shadow Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 7.7, thd: 5.5, wrm: 0.5, cs: 1, lg: 74},
      "20043": { n: "Shadow Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 4.4, wrm: 1.6, cs: 2, lg: 74},
      "20045": { n: "Shadow Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8.8, thd: 4.4, wrm: 1.4, cs: 2, lg: 74},
      "20047": { n: "Shadow Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8.8, thd: 6.6, wrm: 1.2, cs: 2, lg: 74},
      "20049": { n: "Shadow Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11, thd: 6.6, wrm: 1, cs: 2, lg: 74},
      "20051": { n: "Shadow Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11, thd: 8.8, wrm: 0.875, cs: 2, lg: 74},
      "20053": { n: "Shadow Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 8.8, wrm: 0.75, cs: 2, lg: 74},
      "20055": { n: "Shadow Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 11, wrm: 0.625, cs: 2, lg: 74},
      "20057": { n: "Shadow Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 15.4, thd: 11, wrm: 0.5, cs: 2, lg: 74},
      "20913": { n: "Shadow Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 8.8, wrm: 1.6, cs: 3, lg: 74},
      "20915": { n: "Shadow Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 17.6, thd: 8.8, wrm: 1.4, cs: 3, lg: 74},
      "20917": { n: "Shadow Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 17.6, thd: 13.2, wrm: 1.2, cs: 3, lg: 74},
      "20919": { n: "Shadow Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 22, thd: 13.2, wrm: 1, cs: 3, lg: 74},
      "20921": { n: "Shadow Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 22, thd: 17.6, wrm: 0.875, cs: 3, lg: 74},
      "20923": { n: "Shadow Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 17.6, wrm: 0.75, cs: 3, lg: 74},
      "20925": { n: "Shadow Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 22, wrm: 0.625, cs: 3, lg: 74},
      "20927": { n: "Shadow Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 30.8, thd: 22, wrm: 0.5, cs: 3, lg: 74},
      "20929": { n: "Shadow Antimatter Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 61.6, thd: 44, wrm: 0.5, cs: 4, lg: 74},
      "20931": { n: "Shadow Iridium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 35.2, thd: 26.4, wrm: 1.2, cs: 4, lg: 74},
      "20933": { n: "Shadow Iron Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 17.6, wrm: 1.6, cs: 4, lg: 74},
      "20935": { n: "Shadow Lead Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 44, thd: 26.4, wrm: 1, cs: 4, lg: 74},
      "20937": { n: "Shadow Plutonium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 52.8, thd: 44, wrm: 0.625, cs: 4, lg: 74},
      "20939": { n: "Shadow Thorium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 44, thd: 35.2, wrm: 0.875, cs: 4, lg: 74},
      "20941": { n: "Shadow Tungsten Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 35.2, thd: 17.6, wrm: 1.4, cs: 4, lg: 74},
      "20943": { n: "Shadow Uranium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 52.8, thd: 35.2, wrm: 0.75, cs: 4, lg: 74},
      "20945": { n: "Guardian Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.6, thd: 2.4, wrm: 1.6, cs: 1, lg: 74},
      "20947": { n: "Guardian Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.8, thd: 2.4, wrm: 1.4, cs: 1, lg: 74},
      "20949": { n: "Guardian Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.8, thd: 3.6, wrm: 1.2, cs: 1, lg: 74},
      "20951": { n: "Guardian Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 3.6, wrm: 1, cs: 1, lg: 74},
      "20953": { n: "Guardian Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 4.8, wrm: 0.875, cs: 1, lg: 74},
      "20955": { n: "Guardian Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 4.8, wrm: 0.75, cs: 1, lg: 74},
      "20957": { n: "Guardian Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 6, wrm: 0.625, cs: 1, lg: 74},
      "20959": { n: "Guardian Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8.4, thd: 6, wrm: 0.5, cs: 1, lg: 74},
      "20961": { n: "Guardian Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 4.8, wrm: 1.6, cs: 2, lg: 74},
      "20963": { n: "Guardian Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.6, thd: 4.8, wrm: 1.4, cs: 2, lg: 74},
      "20965": { n: "Guardian Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.6, thd: 7.2, wrm: 1.2, cs: 2, lg: 74},
      "20967": { n: "Guardian Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 7.2, wrm: 1, cs: 2, lg: 74},
      "20969": { n: "Guardian Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 9.6, wrm: 0.875, cs: 2, lg: 74},
      "20971": { n: "Guardian Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 9.6, wrm: 0.75, cs: 2, lg: 74},
      "20973": { n: "Guardian Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 12, wrm: 0.625, cs: 2, lg: 74},
      "20975": { n: "Guardian Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 16.8, thd: 12, wrm: 0.5, cs: 2, lg: 74},
      "20977": { n: "Guardian Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 9.6, wrm: 1.6, cs: 3, lg: 74},
      "20979": { n: "Guardian Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 19.2, thd: 9.6, wrm: 1.4, cs: 3, lg: 74},
      "20981": { n: "Guardian Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 19.2, thd: 14.4, wrm: 1.2, cs: 3, lg: 74},
      "20983": { n: "Guardian Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 14.4, wrm: 1, cs: 3, lg: 74},
      "20985": { n: "Guardian Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 19.2, wrm: 0.875, cs: 3, lg: 74},
      "20987": { n: "Guardian Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 19.2, wrm: 0.75, cs: 3, lg: 74},
      "20989": { n: "Guardian Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 24, wrm: 0.625, cs: 3, lg: 74},
      "20991": { n: "Guardian Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 33.6, thd: 24, wrm: 0.5, cs: 3, lg: 74},
      "20993": { n: "Guardian Antimatter Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 67.2, thd: 48, wrm: 0.5, cs: 4, lg: 74},
      "20995": { n: "Guardian Iridium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 38.4, thd: 28.8, wrm: 1.2, cs: 4, lg: 74},
      "20997": { n: "Guardian Iron Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 19.2, wrm: 1.6, cs: 4, lg: 74},
      "20999": { n: "Guardian Lead Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 28.8, wrm: 1, cs: 4, lg: 74},
      "21001": { n: "Guardian Plutonium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 57.6, thd: 48, wrm: 0.625, cs: 4, lg: 74},
      "21003": { n: "Guardian Thorium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 38.4, wrm: 0.875, cs: 4, lg: 74},
      "21005": { n: "Guardian Tungsten Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 38.4, thd: 19.2, wrm: 1.4, cs: 4, lg: 74},
      "21007": { n: "Guardian Uranium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 57.6, thd: 38.4, wrm: 0.75, cs: 4, lg: 74},
      "21320": { n: "Guristas Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.3, thd: 2.2, wrm: 1.6, cs: 1, lg: 74},
      "21322": { n: "Guristas Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.4, thd: 2.2, wrm: 1.4, cs: 1, lg: 74},
      "21324": { n: "Guristas Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.4, thd: 3.3, wrm: 1.2, cs: 1, lg: 74},
      "21326": { n: "Guristas Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.5, thd: 3.3, wrm: 1, cs: 1, lg: 74},
      "21328": { n: "Guristas Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.5, thd: 4.4, wrm: 0.875, cs: 1, lg: 74},
      "21330": { n: "Guristas Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 4.4, wrm: 0.75, cs: 1, lg: 74},
      "21332": { n: "Guristas Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 5.5, wrm: 0.625, cs: 1, lg: 74},
      "21334": { n: "Guristas Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 7.7, thd: 5.5, wrm: 0.5, cs: 1, lg: 74},
      "21336": { n: "Guristas Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.6, thd: 4.4, wrm: 1.6, cs: 2, lg: 74},
      "21338": { n: "Guristas Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8.8, thd: 4.4, wrm: 1.4, cs: 2, lg: 74},
      "21340": { n: "Guristas Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 8.8, thd: 6.6, wrm: 1.2, cs: 2, lg: 74},
      "21342": { n: "Guristas Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11, thd: 6.6, wrm: 1, cs: 2, lg: 74},
      "21344": { n: "Guristas Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11, thd: 8.8, wrm: 0.875, cs: 2, lg: 74},
      "21346": { n: "Guristas Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 8.8, wrm: 0.75, cs: 2, lg: 74},
      "21348": { n: "Guristas Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 11, wrm: 0.625, cs: 2, lg: 74},
      "21350": { n: "Guristas Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 15.4, thd: 11, wrm: 0.5, cs: 2, lg: 74},
      "21352": { n: "Guristas Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.2, thd: 8.8, wrm: 1.6, cs: 3, lg: 74},
      "21354": { n: "Guristas Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 17.6, thd: 8.8, wrm: 1.4, cs: 3, lg: 74},
      "21356": { n: "Guristas Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 17.6, thd: 13.2, wrm: 1.2, cs: 3, lg: 74},
      "21358": { n: "Guristas Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 22, thd: 13.2, wrm: 1, cs: 3, lg: 74},
      "21360": { n: "Guristas Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 22, thd: 17.6, wrm: 0.875, cs: 3, lg: 74},
      "21362": { n: "Guristas Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 17.6, wrm: 0.75, cs: 3, lg: 74},
      "21364": { n: "Guristas Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 22, wrm: 0.625, cs: 3, lg: 74},
      "21366": { n: "Guristas Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 30.8, thd: 22, wrm: 0.5, cs: 3, lg: 74},
      "21368": { n: "Guristas Antimatter Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 61.6, thd: 44, wrm: 0.5, cs: 4, lg: 74},
      "21370": { n: "Guristas Iridium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 35.2, thd: 26.4, wrm: 1.2, cs: 4, lg: 74},
      "21372": { n: "Guristas Iron Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 26.4, thd: 17.6, wrm: 1.6, cs: 4, lg: 74},
      "21374": { n: "Guristas Lead Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 44, thd: 26.4, wrm: 1, cs: 4, lg: 74},
      "21376": { n: "Guristas Plutonium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 52.8, thd: 44, wrm: 0.625, cs: 4, lg: 74},
      "21378": { n: "Guristas Thorium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 44, thd: 35.2, wrm: 0.875, cs: 4, lg: 74},
      "21380": { n: "Guristas Tungsten Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 35.2, thd: 17.6, wrm: 1.4, cs: 4, lg: 74},
      "21382": { n: "Guristas Uranium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 52.8, thd: 35.2, wrm: 0.75, cs: 4, lg: 74},
      "21384": { n: "Dread Guristas Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.6, thd: 2.4, wrm: 1.6, cs: 1, lg: 74},
      "21386": { n: "Dread Guristas Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.8, thd: 2.4, wrm: 1.4, cs: 1, lg: 74},
      "21388": { n: "Dread Guristas Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.8, thd: 3.6, wrm: 1.2, cs: 1, lg: 74},
      "21390": { n: "Dread Guristas Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 3.6, wrm: 1, cs: 1, lg: 74},
      "21392": { n: "Dread Guristas Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6, thd: 4.8, wrm: 0.875, cs: 1, lg: 74},
      "21394": { n: "Dread Guristas Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 4.8, wrm: 0.75, cs: 1, lg: 74},
      "21396": { n: "Dread Guristas Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 6, wrm: 0.625, cs: 1, lg: 74},
      "21398": { n: "Dread Guristas Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8.4, thd: 6, wrm: 0.5, cs: 1, lg: 74},
      "21400": { n: "Dread Guristas Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 7.2, thd: 4.8, wrm: 1.6, cs: 2, lg: 74},
      "21402": { n: "Dread Guristas Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.6, thd: 4.8, wrm: 1.4, cs: 2, lg: 74},
      "21404": { n: "Dread Guristas Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.6, thd: 7.2, wrm: 1.2, cs: 2, lg: 74},
      "21406": { n: "Dread Guristas Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 7.2, wrm: 1, cs: 2, lg: 74},
      "21408": { n: "Dread Guristas Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 12, thd: 9.6, wrm: 0.875, cs: 2, lg: 74},
      "21410": { n: "Dread Guristas Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 9.6, wrm: 0.75, cs: 2, lg: 74},
      "21412": { n: "Dread Guristas Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 12, wrm: 0.625, cs: 2, lg: 74},
      "21414": { n: "Dread Guristas Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 16.8, thd: 12, wrm: 0.5, cs: 2, lg: 74},
      "21416": { n: "Dread Guristas Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 14.4, thd: 9.6, wrm: 1.6, cs: 3, lg: 74},
      "21418": { n: "Dread Guristas Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 19.2, thd: 9.6, wrm: 1.4, cs: 3, lg: 74},
      "21420": { n: "Dread Guristas Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 19.2, thd: 14.4, wrm: 1.2, cs: 3, lg: 74},
      "21422": { n: "Dread Guristas Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 14.4, wrm: 1, cs: 3, lg: 74},
      "21424": { n: "Dread Guristas Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 24, thd: 19.2, wrm: 0.875, cs: 3, lg: 74},
      "21426": { n: "Dread Guristas Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 19.2, wrm: 0.75, cs: 3, lg: 74},
      "21428": { n: "Dread Guristas Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 24, wrm: 0.625, cs: 3, lg: 74},
      "21430": { n: "Dread Guristas Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 33.6, thd: 24, wrm: 0.5, cs: 3, lg: 74},
      "21432": { n: "Dread Guristas Antimatter Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 67.2, thd: 48, wrm: 0.5, cs: 4, lg: 74},
      "21434": { n: "Dread Guristas Iridium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 38.4, thd: 28.8, wrm: 1.2, cs: 4, lg: 74},
      "21436": { n: "Dread Guristas Iron Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of iron atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 28.8, thd: 19.2, wrm: 1.6, cs: 4, lg: 74},
      "21438": { n: "Dread Guristas Lead Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of lead atoms suspended in a plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 28.8, wrm: 1, cs: 4, lg: 74},
      "21440": { n: "Dread Guristas Plutonium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 57.6, thd: 48, wrm: 0.625, cs: 4, lg: 74},
      "21442": { n: "Dread Guristas Thorium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 48, thd: 38.4, wrm: 0.875, cs: 4, lg: 74},
      "21444": { n: "Dread Guristas Tungsten Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 38.4, thd: 19.2, wrm: 1.4, cs: 4, lg: 74},
      "21446": { n: "Dread Guristas Uranium Charge XL", mg: 1004, pmg: 990, mta: 0, d: "Extra Large Hybrid Charge. Can be used only by starbase defense batteries and capital ships like dreadnoughts. Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 57.6, thd: 38.4, wrm: 0.75, cs: 4, lg: 74},
      "21740": { n: "Caldari Navy Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 32.2, thd: 23, wrm: 0.5, cs: 3, lg: 74},
      "22961": { n: "Federation Navy Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8.05, thd: 5.75, wrm: 0.5, cs: 1, lg: 74},
      "22963": { n: "Federation Navy Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 5.75, wrm: 0.625, cs: 1, lg: 74},
      "22965": { n: "Federation Navy Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 4.6, wrm: 0.75, cs: 1, lg: 74},
      "22967": { n: "Federation Navy Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.75, thd: 4.6, wrm: 0.875, cs: 1, lg: 74},
      "22969": { n: "Federation Navy Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.75, thd: 3.45, wrm: 1, cs: 1, lg: 74},
      "22971": { n: "Federation Navy Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.6, thd: 3.45, wrm: 1.2, cs: 1, lg: 74},
      "22973": { n: "Federation Navy Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.6, thd: 2.3, wrm: 1.4, cs: 1, lg: 74},
      "22975": { n: "Federation Navy Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.45, thd: 2.3, wrm: 1.6, cs: 1, lg: 74},
      "22977": { n: "Federation Navy Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 16.1, thd: 11.5, wrm: 0.5, cs: 2, lg: 74},
      "22979": { n: "Federation Navy Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 11.5, wrm: 0.625, cs: 2, lg: 74},
      "22981": { n: "Federation Navy Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 9.2, wrm: 0.75, cs: 2, lg: 74},
      "22983": { n: "Federation Navy Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11.5, thd: 9.2, wrm: 0.875, cs: 2, lg: 74},
      "22985": { n: "Federation Navy Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11.5, thd: 6.9, wrm: 1, cs: 2, lg: 74},
      "22987": { n: "Federation Navy Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.2, thd: 6.9, wrm: 1.2, cs: 2, lg: 74},
      "22989": { n: "Federation Navy Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.2, thd: 4.6, wrm: 1.4, cs: 2, lg: 74},
      "22991": { n: "Federation Navy Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 4.6, wrm: 1.6, cs: 2, lg: 74},
      "22993": { n: "Federation Navy Antimatter Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 32.2, thd: 23, wrm: 0.5, cs: 3, lg: 74},
      "22995": { n: "Federation Navy Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 27.6, thd: 23, wrm: 0.625, cs: 3, lg: 74},
      "22997": { n: "Federation Navy Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 27.6, thd: 18.4, wrm: 0.75, cs: 3, lg: 74},
      "22999": { n: "Federation Navy Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 23, thd: 18.4, wrm: 0.875, cs: 3, lg: 74},
      "23001": { n: "Federation Navy Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 23, thd: 13.8, wrm: 1, cs: 3, lg: 74},
      "23003": { n: "Federation Navy Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 18.4, thd: 13.8, wrm: 1.2, cs: 3, lg: 74},
      "23005": { n: "Federation Navy Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 18.4, thd: 9.2, wrm: 1.4, cs: 3, lg: 74},
      "23007": { n: "Federation Navy Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 9.2, wrm: 1.6, cs: 3, lg: 74},
      "23009": { n: "Caldari Navy Antimatter Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 8.05, thd: 5.75, wrm: 0.5, cs: 1, lg: 74},
      "23011": { n: "Caldari Navy Plutonium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 5.75, wrm: 0.625, cs: 1, lg: 74},
      "23013": { n: "Caldari Navy Uranium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 4.6, wrm: 0.75, cs: 1, lg: 74},
      "23015": { n: "Caldari Navy Thorium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.75, thd: 4.6, wrm: 0.875, cs: 1, lg: 74},
      "23017": { n: "Caldari Navy Lead Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 5.75, thd: 3.45, wrm: 1, cs: 1, lg: 74},
      "23019": { n: "Caldari Navy Iridium Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.6, thd: 3.45, wrm: 1.2, cs: 1, lg: 74},
      "23021": { n: "Caldari Navy Tungsten Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 4.6, thd: 2.3, wrm: 1.4, cs: 1, lg: 74},
      "23023": { n: "Caldari Navy Iron Charge S", mg: 993, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 3.45, thd: 2.3, wrm: 1.6, cs: 1, lg: 74},
      "23025": { n: "Caldari Navy Antimatter Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of antimatter atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced optimal range.", tl: 1, emd: 0, exd: 0, kid: 16.1, thd: 11.5, wrm: 0.5, cs: 2, lg: 74},
      "23027": { n: "Caldari Navy Plutonium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 11.5, wrm: 0.625, cs: 2, lg: 74},
      "23029": { n: "Caldari Navy Uranium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 9.2, wrm: 0.75, cs: 2, lg: 74},
      "23031": { n: "Caldari Navy Thorium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11.5, thd: 9.2, wrm: 0.875, cs: 2, lg: 74},
      "23033": { n: "Caldari Navy Lead Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 11.5, thd: 6.9, wrm: 1, cs: 2, lg: 74},
      "23035": { n: "Caldari Navy Iridium Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.2, thd: 6.9, wrm: 1.2, cs: 2, lg: 74},
      "23037": { n: "Caldari Navy Tungsten Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 9.2, thd: 4.6, wrm: 1.4, cs: 2, lg: 74},
      "23039": { n: "Caldari Navy Iron Charge M", mg: 992, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 6.9, thd: 4.6, wrm: 1.6, cs: 2, lg: 74},
      "23041": { n: "Caldari Navy Plutonium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of plutonium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
37.5% reduced optimal range.\n\
5% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 27.6, thd: 23, wrm: 0.625, cs: 3, lg: 74},
      "23043": { n: "Caldari Navy Uranium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of uranium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
25% reduced optimal range.\n\
8% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 27.6, thd: 18.4, wrm: 0.75, cs: 3, lg: 74},
      "23045": { n: "Caldari Navy Thorium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of thorium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
12.5% reduced optimal range.\n\
40% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 23, thd: 18.4, wrm: 0.875, cs: 3, lg: 74},
      "23047": { n: "Caldari Navy Lead Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of lead atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
50% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 23, thd: 13.8, wrm: 1, cs: 3, lg: 74},
      "23049": { n: "Caldari Navy Iridium Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iridium atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
20% increased optimal range.\n\
24% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 18.4, thd: 13.8, wrm: 1.2, cs: 3, lg: 74},
      "23051": { n: "Caldari Navy Tungsten Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of tungsten atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
40% increased optimal range.\n\
27% reduced capacitor need.", tl: 1, emd: 0, exd: 0, kid: 18.4, thd: 9.2, wrm: 1.4, cs: 3, lg: 74},
      "23053": { n: "Caldari Navy Iron Charge L", mg: 991, pmg: 990, mta: 0, d: "Consists of two components: a shell of titanium and a core of iron atoms suspended in plasma state. Railguns launch the shell directly, while particle blasters pump the plasma into a cyclotron and process the plasma into a bolt that is then fired.\n\
\n\
60% increased optimal range.\n\
30% decreased capacitor need.", tl: 1, emd: 0, exd: 0, kid: 13.8, thd: 9.2, wrm: 1.6, cs: 3, lg: 74},
      "32803": { n: "Tactical Hybrid S", mg: 1600, pmg: 100, mta: 0, d: "This highly specialized space to ground ammunition can penetrate the atmosphere of planets. It is only useful against ground targets and relies on special targeting data provided by ground troops.\n\
\n\
The Hybrid strike has a radius double that of the tactical laser. This enables it to bombard more ground but combined with a slower fire interval than the laser there is a greater chance for targets to escape. ", tl: 1, wrm: 1, cs: 1, lg: 74}
    },
    "86": {
      "239": { n: "Radio S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 5, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "240": { n: "Microwave S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4, exd: 0, kid: 0, thd: 2, wrm: 1.4, cs: 1, lg: 53},
      "241": { n: "Infrared S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 5, exd: 0, kid: 0, thd: 2, wrm: 1.2, cs: 1, lg: 53},
      "242": { n: "Standard S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 5, exd: 0, kid: 0, thd: 3, wrm: 1, cs: 1, lg: 53},
      "243": { n: "Ultraviolet S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 3, wrm: 0.875, cs: 1, lg: 53},
      "244": { n: "Xray S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 4, wrm: 0.75, cs: 1, lg: 53},
      "245": { n: "Gamma S", mg: 102, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 7, exd: 0, kid: 0, thd: 4, wrm: 0.625, cs: 1, lg: 53},
      "246": { n: "Multifrequency S", mg: 102, pmg: 851, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 7, exd: 0, kid: 0, thd: 5, wrm: 0.5, cs: 1, lg: 53},
      "247": { n: "Radio M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 10, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "248": { n: "Microwave M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 8, exd: 0, kid: 0, thd: 4, wrm: 1.4, cs: 2, lg: 53},
      "249": { n: "Infrared M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 10, exd: 0, kid: 0, thd: 4, wrm: 1.2, cs: 2, lg: 53},
      "250": { n: "Standard M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 10, exd: 0, kid: 0, thd: 6, wrm: 1, cs: 2, lg: 53},
      "251": { n: "Ultraviolet M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased damage.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 6, wrm: 0.875, cs: 2, lg: 53},
      "252": { n: "Xray M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased damage.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 8, wrm: 0.75, cs: 2, lg: 53},
      "253": { n: "Gamma M", mg: 103, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased damage.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 14, exd: 0, kid: 0, thd: 8, wrm: 0.625, cs: 2, lg: 53},
      "254": { n: "Multifrequency M", mg: 103, pmg: 851, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 14, exd: 0, kid: 0, thd: 10, wrm: 0.5, cs: 2, lg: 53},
      "255": { n: "Radio L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 20, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "256": { n: "Microwave L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 16, exd: 0, kid: 0, thd: 8, wrm: 1.4, cs: 3, lg: 53},
      "257": { n: "Infrared L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 20, exd: 0, kid: 0, thd: 8, wrm: 1.2, cs: 3, lg: 53},
      "258": { n: "Standard L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 20, exd: 0, kid: 0, thd: 12, wrm: 1, cs: 3, lg: 53},
      "259": { n: "Ultraviolet L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased damage.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 12, wrm: 0.875, cs: 3, lg: 53},
      "260": { n: "Xray L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased damage.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 16, wrm: 0.75, cs: 3, lg: 53},
      "261": { n: "Gamma L", mg: 105, pmg: 851, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased damage.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 28, exd: 0, kid: 0, thd: 16, wrm: 0.625, cs: 3, lg: 53},
      "262": { n: "Multifrequency L", mg: 105, pmg: 851, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 28, exd: 0, kid: 0, thd: 20, wrm: 0.5, cs: 3, lg: 53},
      "17680": { n: "Gamma XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased damage.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 56, exd: 0, kid: 0, thd: 32, wrm: 0.625, cs: 4, lg: 53},
      "17682": { n: "Infrared XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 40, exd: 0, kid: 0, thd: 16, wrm: 1.2, cs: 4, lg: 53},
      "17684": { n: "Microwave XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the microwave frequencies. Improved range. \n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 32, exd: 0, kid: 0, thd: 16, wrm: 1.4, cs: 4, lg: 53},
      "17686": { n: "Multifrequency XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 56, exd: 0, kid: 0, thd: 40, wrm: 0.5, cs: 4, lg: 53},
      "17688": { n: "Radio XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 40, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 4, lg: 53},
      "17690": { n: "Standard XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 40, exd: 0, kid: 0, thd: 24, wrm: 1, cs: 4, lg: 53},
      "17692": { n: "Ultraviolet XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased damage.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 24, wrm: 0.875, cs: 4, lg: 53},
      "17694": { n: "Xray XL", mg: 503, pmg: 851, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased damage.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 32, wrm: 0.75, cs: 4, lg: 53},
      "19978": { n: "Sanshas Radio S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "19980": { n: "Sanshas Microwave S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4.4, exd: 0, kid: 0, thd: 2.2, wrm: 1.4, cs: 1, lg: 53},
      "19982": { n: "Sanshas Infrared S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 2.2, wrm: 1.2, cs: 1, lg: 53},
      "19984": { n: "Sanshas Standard S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 3.3, wrm: 1, cs: 1, lg: 53},
      "20010": { n: "Sanshas Radio M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "20012": { n: "Sanshas Microwave M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 8.8, exd: 0, kid: 0, thd: 4.4, wrm: 1.4, cs: 2, lg: 53},
      "20014": { n: "Sanshas Infrared M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 4.4, wrm: 1.2, cs: 2, lg: 53},
      "20016": { n: "Sanshas Standard M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 6.6, wrm: 1, cs: 2, lg: 53},
      "20018": { n: "Sanshas Radio L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "20020": { n: "Sanshas Microwave L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 17.6, exd: 0, kid: 0, thd: 8.8, wrm: 1.4, cs: 3, lg: 53},
      "20022": { n: "Sanshas Infrared L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 8.8, wrm: 1.2, cs: 3, lg: 53},
      "20024": { n: "Sanshas Standard L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 13.2, wrm: 1, cs: 3, lg: 53},
      "20026": { n: "Sanshas Radio XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 4, lg: 53},
      "20028": { n: "Sanshas Microwave XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 35.2, exd: 0, kid: 0, thd: 17.6, wrm: 1.4, cs: 4, lg: 53},
      "20030": { n: "Sanshas Infrared XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 17.6, wrm: 1.2, cs: 4, lg: 53},
      "20032": { n: "Sanshas Standard XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 26.4, wrm: 1, cs: 4, lg: 53},
      "20817": { n: "Sanshas Ultraviolet S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.6, exd: 0, kid: 0, thd: 3.3, wrm: 0.875, cs: 1, lg: 53},
      "20819": { n: "Sanshas Xray S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.6, exd: 0, kid: 0, thd: 4.4, wrm: 0.75, cs: 1, lg: 53},
      "20821": { n: "Sanshas Gamma S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.7, exd: 0, kid: 0, thd: 4.4, wrm: 0.625, cs: 1, lg: 53},
      "20823": { n: "Sanshas Multifrequency S", mg: 997, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 7.7, exd: 0, kid: 0, thd: 5.5, wrm: 0.5, cs: 1, lg: 53},
      "20825": { n: "Sanshas Ultraviolet M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.2, exd: 0, kid: 0, thd: 6.6, wrm: 0.875, cs: 2, lg: 53},
      "20827": { n: "Sanshas Xray M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.2, exd: 0, kid: 0, thd: 8.8, wrm: 0.75, cs: 2, lg: 53},
      "20829": { n: "Sanshas Gamma M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 15.4, exd: 0, kid: 0, thd: 8.8, wrm: 0.625, cs: 2, lg: 53},
      "20831": { n: "Sanshas Multifrequency M", mg: 996, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 15.4, exd: 0, kid: 0, thd: 11, wrm: 0.5, cs: 2, lg: 53},
      "20833": { n: "Sanshas Ultraviolet L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 26.4, exd: 0, kid: 0, thd: 13.2, wrm: 0.875, cs: 3, lg: 53},
      "20835": { n: "Sanshas Xray L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 26.4, exd: 0, kid: 0, thd: 17.6, wrm: 0.75, cs: 3, lg: 53},
      "20837": { n: "Sanshas Gamma L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 30.8, exd: 0, kid: 0, thd: 17.6, wrm: 0.625, cs: 3, lg: 53},
      "20839": { n: "Sanshas Multifrequency L", mg: 995, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 30.8, exd: 0, kid: 0, thd: 22, wrm: 0.5, cs: 3, lg: 53},
      "20841": { n: "Sanshas Ultraviolet XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 52.8, exd: 0, kid: 0, thd: 26.4, wrm: 0.875, cs: 4, lg: 53},
      "20843": { n: "Sanshas Xray XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 52.8, exd: 0, kid: 0, thd: 35.2, wrm: 0.75, cs: 4, lg: 53},
      "20845": { n: "Sanshas Gamma XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 61.6, exd: 0, kid: 0, thd: 35.2, wrm: 0.625, cs: 4, lg: 53},
      "20847": { n: "Sanshas Multifrequency XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 61.6, exd: 0, kid: 0, thd: 44, wrm: 0.5, cs: 4, lg: 53},
      "20849": { n: "True Sanshas Radio S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "20851": { n: "True Sanshas Microwave S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4.8, exd: 0, kid: 0, thd: 2.4, wrm: 1.4, cs: 1, lg: 53},
      "20853": { n: "True Sanshas Infrared S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 2.4, wrm: 1.2, cs: 1, lg: 53},
      "20855": { n: "True Sanshas Standard S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 3.6, wrm: 1, cs: 1, lg: 53},
      "20857": { n: "True Sanshas Ultraviolet S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.2, exd: 0, kid: 0, thd: 3.6, wrm: 0.875, cs: 1, lg: 53},
      "20859": { n: "True Sanshas Xray S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.2, exd: 0, kid: 0, thd: 4.8, wrm: 0.75, cs: 1, lg: 53},
      "20861": { n: "True Sanshas Gamma S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 8.4, exd: 0, kid: 0, thd: 4.8, wrm: 0.625, cs: 1, lg: 53},
      "20863": { n: "True Sanshas Multifrequency S", mg: 997, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 8.4, exd: 0, kid: 0, thd: 6, wrm: 0.5, cs: 1, lg: 53},
      "20865": { n: "True Sanshas Radio M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "20867": { n: "True Sanshas Microwave M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 9.6, exd: 0, kid: 0, thd: 4.8, wrm: 1.4, cs: 2, lg: 53},
      "20869": { n: "True Sanshas Infrared M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 4.8, wrm: 1.2, cs: 2, lg: 53},
      "20871": { n: "True Sanshas Standard M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 7.2, wrm: 1, cs: 2, lg: 53},
      "20873": { n: "True Sanshas Ultraviolet M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 14.4, exd: 0, kid: 0, thd: 7.2, wrm: 0.875, cs: 2, lg: 53},
      "20875": { n: "True Sanshas Xray M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 14.4, exd: 0, kid: 0, thd: 9.6, wrm: 0.75, cs: 2, lg: 53},
      "20877": { n: "True Sanshas Gamma M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 16.8, exd: 0, kid: 0, thd: 9.6, wrm: 0.625, cs: 2, lg: 53},
      "20879": { n: "True Sanshas Multifrequency M", mg: 996, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 16.8, exd: 0, kid: 0, thd: 12, wrm: 0.5, cs: 2, lg: 53},
      "20881": { n: "True Sanshas Radio L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "20883": { n: "True Sanshas Microwave L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 19.2, exd: 0, kid: 0, thd: 9.6, wrm: 1.4, cs: 3, lg: 53},
      "20885": { n: "True Sanshas Infrared L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 9.6, wrm: 1.2, cs: 3, lg: 53},
      "20887": { n: "True Sanshas Standard L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 14.4, wrm: 1, cs: 3, lg: 53},
      "20889": { n: "True Sanshas Ultraviolet L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 28.8, exd: 0, kid: 0, thd: 14.4, wrm: 0.875, cs: 3, lg: 53},
      "20891": { n: "True Sanshas Xray L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 28.8, exd: 0, kid: 0, thd: 19.2, wrm: 0.75, cs: 3, lg: 53},
      "20893": { n: "True Sanshas Gamma L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 33.6, exd: 0, kid: 0, thd: 19.2, wrm: 0.625, cs: 3, lg: 53},
      "20895": { n: "True Sanshas Multifrequency L", mg: 995, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 33.6, exd: 0, kid: 0, thd: 24, wrm: 0.5, cs: 3, lg: 53},
      "20897": { n: "True Sanshas Radio XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 4, lg: 53},
      "20899": { n: "True Sanshas Microwave XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 38.4, exd: 0, kid: 0, thd: 19.2, wrm: 1.4, cs: 4, lg: 53},
      "20901": { n: "True Sanshas Infrared XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 19.2, wrm: 1.2, cs: 4, lg: 53},
      "20903": { n: "True Sanshas Standard XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 28.8, wrm: 1, cs: 4, lg: 53},
      "20905": { n: "True Sanshas Ultraviolet XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 57.6, exd: 0, kid: 0, thd: 28.8, wrm: 0.875, cs: 4, lg: 53},
      "20907": { n: "True Sanshas Xray XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 57.6, exd: 0, kid: 0, thd: 38.4, wrm: 0.75, cs: 4, lg: 53},
      "20909": { n: "True Sanshas Gamma XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 67.2, exd: 0, kid: 0, thd: 38.4, wrm: 0.625, cs: 4, lg: 53},
      "20911": { n: "True Sanshas Multifrequency XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 67.2, exd: 0, kid: 0, thd: 48, wrm: 0.5, cs: 4, lg: 53},
      "21194": { n: "Blood Radio S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "21196": { n: "Blood Microwave S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4.4, exd: 0, kid: 0, thd: 2.2, wrm: 1.4, cs: 1, lg: 53},
      "21198": { n: "Blood Infrared S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 2.2, wrm: 1.2, cs: 1, lg: 53},
      "21200": { n: "Blood Standard S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.5, exd: 0, kid: 0, thd: 3.3, wrm: 1, cs: 1, lg: 53},
      "21202": { n: "Blood Ultraviolet S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.6, exd: 0, kid: 0, thd: 3.3, wrm: 0.875, cs: 1, lg: 53},
      "21204": { n: "Blood Xray S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.6, exd: 0, kid: 0, thd: 4.4, wrm: 0.75, cs: 1, lg: 53},
      "21206": { n: "Blood Gamma S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.7, exd: 0, kid: 0, thd: 4.4, wrm: 0.625, cs: 1, lg: 53},
      "21208": { n: "Blood Multifrequency S", mg: 997, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 7.7, exd: 0, kid: 0, thd: 5.5, wrm: 0.5, cs: 1, lg: 53},
      "21210": { n: "Blood Microwave M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 8.8, exd: 0, kid: 0, thd: 4.4, wrm: 1.4, cs: 2, lg: 53},
      "21212": { n: "Blood Infrared M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 4.4, wrm: 1.2, cs: 2, lg: 53},
      "21214": { n: "Blood Standard M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 6.6, wrm: 1, cs: 2, lg: 53},
      "21216": { n: "Blood Ultraviolet M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.2, exd: 0, kid: 0, thd: 6.6, wrm: 0.875, cs: 2, lg: 53},
      "21218": { n: "Blood Xray M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.2, exd: 0, kid: 0, thd: 8.8, wrm: 0.75, cs: 2, lg: 53},
      "21220": { n: "Blood Gamma M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 15.4, exd: 0, kid: 0, thd: 8.8, wrm: 0.625, cs: 2, lg: 53},
      "21222": { n: "Blood Multifrequency M", mg: 996, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 15.4, exd: 0, kid: 0, thd: 11, wrm: 0.5, cs: 2, lg: 53},
      "21224": { n: "Blood Radio L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "21226": { n: "Blood Microwave L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 17.6, exd: 0, kid: 0, thd: 8.8, wrm: 1.4, cs: 3, lg: 53},
      "21228": { n: "Blood Infrared L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 8.8, wrm: 1.2, cs: 3, lg: 53},
      "21230": { n: "Blood Standard L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 22, exd: 0, kid: 0, thd: 13.2, wrm: 1, cs: 3, lg: 53},
      "21232": { n: "Blood Ultraviolet L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 26.4, exd: 0, kid: 0, thd: 13.2, wrm: 0.875, cs: 3, lg: 53},
      "21234": { n: "Blood Xray L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 26.4, exd: 0, kid: 0, thd: 17.6, wrm: 0.75, cs: 3, lg: 53},
      "21236": { n: "Blood Gamma L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 30.8, exd: 0, kid: 0, thd: 17.6, wrm: 0.625, cs: 3, lg: 53},
      "21238": { n: "Blood Multifrequency L", mg: 995, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.\n\
", tl: 1, shhp: 1, emd: 30.8, exd: 0, kid: 0, thd: 22, wrm: 0.5, cs: 3, lg: 53},
      "21240": { n: "Blood Radio XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 4, lg: 53},
      "21242": { n: "Blood Microwave XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 35.2, exd: 0, kid: 0, thd: 17.6, wrm: 1.4, cs: 4, lg: 53},
      "21244": { n: "Blood Infrared XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 17.6, wrm: 1.2, cs: 4, lg: 53},
      "21246": { n: "Blood Standard XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 44, exd: 0, kid: 0, thd: 26.4, wrm: 1, cs: 4, lg: 53},
      "21248": { n: "Blood Ultraviolet XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 52.8, exd: 0, kid: 0, thd: 26.4, wrm: 0.875, cs: 4, lg: 53},
      "21250": { n: "Blood Xray XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 52.8, exd: 0, kid: 0, thd: 35.2, wrm: 0.75, cs: 4, lg: 53},
      "21252": { n: "Blood Gamma XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 61.6, exd: 0, kid: 0, thd: 35.2, wrm: 0.625, cs: 4, lg: 53},
      "21254": { n: "Blood Multifrequency XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal. Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 61.6, exd: 0, kid: 0, thd: 44, wrm: 0.5, cs: 4, lg: 53},
      "21256": { n: "Dark Blood Radio S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "21258": { n: "Dark Blood Microwave S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4.8, exd: 0, kid: 0, thd: 2.4, wrm: 1.4, cs: 1, lg: 53},
      "21260": { n: "Dark Blood Infrared S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 2.4, wrm: 1.2, cs: 1, lg: 53},
      "21262": { n: "Dark Blood Standard S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 6, exd: 0, kid: 0, thd: 3.6, wrm: 1, cs: 1, lg: 53},
      "21264": { n: "Dark Blood Ultraviolet S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.2, exd: 0, kid: 0, thd: 3.6, wrm: 0.875, cs: 1, lg: 53},
      "21266": { n: "Dark Blood Xray S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 7.2, exd: 0, kid: 0, thd: 4.8, wrm: 0.75, cs: 1, lg: 53},
      "21268": { n: "Dark Blood Gamma S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 8.4, exd: 0, kid: 0, thd: 4.8, wrm: 0.625, cs: 1, lg: 53},
      "21270": { n: "Dark Blood Multifrequency S", mg: 997, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 8.4, exd: 0, kid: 0, thd: 6, wrm: 0.5, cs: 1, lg: 53},
      "21272": { n: "Dark Blood Radio M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "21274": { n: "Dark Blood Microwave M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 9.6, exd: 0, kid: 0, thd: 4.8, wrm: 1.4, cs: 2, lg: 53},
      "21276": { n: "Dark Blood Infrared M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 4.8, wrm: 1.2, cs: 2, lg: 53},
      "21278": { n: "Dark Blood Standard M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 12, exd: 0, kid: 0, thd: 7.2, wrm: 1, cs: 2, lg: 53},
      "21280": { n: "Dark Blood Ultraviolet M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 14.4, exd: 0, kid: 0, thd: 7.2, wrm: 0.875, cs: 2, lg: 53},
      "21282": { n: "Dark Blood Xray M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 14.4, exd: 0, kid: 0, thd: 9.6, wrm: 0.75, cs: 2, lg: 53},
      "21284": { n: "Dark Blood Gamma M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 16.8, exd: 0, kid: 0, thd: 9.6, wrm: 0.625, cs: 2, lg: 53},
      "21286": { n: "Dark Blood Multifrequency M", mg: 996, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 16.8, exd: 0, kid: 0, thd: 12, wrm: 0.5, cs: 2, lg: 53},
      "21288": { n: "Dark Blood Radio L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "21290": { n: "Dark Blood Microwave L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 19.2, exd: 0, kid: 0, thd: 9.6, wrm: 1.4, cs: 3, lg: 53},
      "21292": { n: "Dark Blood Infrared L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 9.6, wrm: 1.2, cs: 3, lg: 53},
      "21294": { n: "Dark Blood Standard L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 24, exd: 0, kid: 0, thd: 14.4, wrm: 1, cs: 3, lg: 53},
      "21296": { n: "Dark Blood Ultraviolet L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 28.8, exd: 0, kid: 0, thd: 14.4, wrm: 0.875, cs: 3, lg: 53},
      "21298": { n: "Dark Blood Xray L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 28.8, exd: 0, kid: 0, thd: 19.2, wrm: 0.75, cs: 3, lg: 53},
      "21300": { n: "Dark Blood Gamma L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 33.6, exd: 0, kid: 0, thd: 19.2, wrm: 0.625, cs: 3, lg: 53},
      "21302": { n: "Dark Blood Multifrequency L", mg: 995, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 33.6, exd: 0, kid: 0, thd: 24, wrm: 0.5, cs: 3, lg: 53},
      "21304": { n: "Dark Blood Radio XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 4, lg: 53},
      "21306": { n: "Dark Blood Microwave XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 38.4, exd: 0, kid: 0, thd: 19.2, wrm: 1.4, cs: 4, lg: 53},
      "21308": { n: "Dark Blood Infrared XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 19.2, wrm: 1.2, cs: 4, lg: 53},
      "21310": { n: "Dark Blood Standard XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the visible light spectrum.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 48, exd: 0, kid: 0, thd: 28.8, wrm: 1, cs: 4, lg: 53},
      "21312": { n: "Dark Blood Ultraviolet XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 57.6, exd: 0, kid: 0, thd: 28.8, wrm: 0.875, cs: 4, lg: 53},
      "21314": { n: "Dark Blood Xray XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 57.6, exd: 0, kid: 0, thd: 38.4, wrm: 0.75, cs: 4, lg: 53},
      "21316": { n: "Dark Blood Gamma XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 67.2, exd: 0, kid: 0, thd: 38.4, wrm: 0.625, cs: 4, lg: 53},
      "21318": { n: "Dark Blood Multifrequency XL", mg: 1007, pmg: 994, mta: 0, d: "Extra Large Frequency Crystal.  Can be used only by starbase defense batteries and capital ships like dreadnoughts. \n\
\n\
Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 67.2, exd: 0, kid: 0, thd: 48, wrm: 0.5, cs: 4, lg: 53},
      "21450": { n: "Blood Radio M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 11, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "23071": { n: "Imperial Navy Multifrequency S", mg: 997, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 8.05, exd: 0, kid: 0, thd: 5.75, wrm: 0.5, cs: 1, lg: 53},
      "23073": { n: "Imperial Navy Gamma S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 8.05, exd: 0, kid: 0, thd: 4.6, wrm: 0.625, cs: 1, lg: 53},
      "23075": { n: "Imperial Navy Xray S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.9, exd: 0, kid: 0, thd: 4.6, wrm: 0.75, cs: 1, lg: 53},
      "23077": { n: "Imperial Navy Ultraviolet S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 6.9, exd: 0, kid: 0, thd: 3.45, wrm: 0.875, cs: 1, lg: 53},
      "23079": { n: "Imperial Navy Standard S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.75, exd: 0, kid: 0, thd: 3.45, wrm: 1, cs: 1, lg: 53},
      "23081": { n: "Imperial Navy Infrared S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.75, exd: 0, kid: 0, thd: 2.3, wrm: 1.2, cs: 1, lg: 53},
      "23083": { n: "Imperial Navy Microwave S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 4.6, exd: 0, kid: 0, thd: 2.3, wrm: 1.4, cs: 1, lg: 53},
      "23085": { n: "Imperial Navy Radio S", mg: 997, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 5.75, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 1, lg: 53},
      "23089": { n: "Imperial Navy Multifrequency M", mg: 996, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 16.1, exd: 0, kid: 0, thd: 11.5, wrm: 0.5, cs: 2, lg: 53},
      "23091": { n: "Imperial Navy Gamma M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 16.1, exd: 0, kid: 0, thd: 9.2, wrm: 0.625, cs: 2, lg: 53},
      "23093": { n: "Imperial Navy Xray M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.8, exd: 0, kid: 0, thd: 9.2, wrm: 0.75, cs: 2, lg: 53},
      "23095": { n: "Imperial Navy Ultraviolet M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 13.8, exd: 0, kid: 0, thd: 6.9, wrm: 0.875, cs: 2, lg: 53},
      "23097": { n: "Imperial Navy Standard M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 11.5, exd: 0, kid: 0, thd: 6.9, wrm: 1, cs: 2, lg: 53},
      "23099": { n: "Imperial Navy Infrared M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 11.5, exd: 0, kid: 0, thd: 4.6, wrm: 1.2, cs: 2, lg: 53},
      "23101": { n: "Imperial Navy Microwave M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 9.2, exd: 0, kid: 0, thd: 4.6, wrm: 1.4, cs: 2, lg: 53},
      "23103": { n: "Imperial Navy Radio M", mg: 996, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 11.5, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 2, lg: 53},
      "23105": { n: "Imperial Navy Multifrequency L", mg: 995, pmg: 994, mta: 0, d: "Randomly cycles the laser through the entire spectrum. The greatly increased damage comes at the cost of a significant reduction in range.\n\
\n\
With shorter range, Thermal damage increases and the overall damage output is increased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.", tl: 1, shhp: 1, emd: 32.2, exd: 0, kid: 0, thd: 23, wrm: 0.5, cs: 3, lg: 53},
      "23107": { n: "Imperial Navy Gamma L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the gamma frequencies. Greatly reduced range. Greatly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
37.5% reduced optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 32.2, exd: 0, kid: 0, thd: 18.4, wrm: 0.625, cs: 3, lg: 53},
      "23109": { n: "Imperial Navy Xray L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the xray frequencies. Reduced range. Increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
25% reduced optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 27.6, exd: 0, kid: 0, thd: 18.4, wrm: 0.75, cs: 3, lg: 53},
      "23111": { n: "Imperial Navy Ultraviolet L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the ultraviolet frequencies. Slightly reduced range. Slightly increased thermal damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
12.5% reduced optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 27.6, exd: 0, kid: 0, thd: 13.8, wrm: 0.875, cs: 3, lg: 53},
      "23113": { n: "Imperial Navy Standard L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the visible light spectrum. \n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
45% reduced capacitor need.", tl: 1, shhp: 1, emd: 23, exd: 0, kid: 0, thd: 13.8, wrm: 1, cs: 3, lg: 53},
      "23115": { n: "Imperial Navy Infrared L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the infrared frequencies. Slightly improved range. Slightly increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
20% increased optimal range.\n\
35% reduced capacitor need.", tl: 1, shhp: 1, emd: 23, exd: 0, kid: 0, thd: 9.2, wrm: 1.2, cs: 3, lg: 53},
      "23117": { n: "Imperial Navy Microwave L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the microwave frequencies. Improved range. Increased EM damage.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
40% increased optimal range.\n\
25% reduced capacitor need.", tl: 1, shhp: 1, emd: 18.4, exd: 0, kid: 0, thd: 9.2, wrm: 1.4, cs: 3, lg: 53},
      "23119": { n: "Imperial Navy Radio L", mg: 995, pmg: 994, mta: 0, d: "Modulates the beam of a laser weapon into the radio frequencies. Offers greatly improved range but significantly lower damage.\n\
\n\
With longer range, EM damage increases although the overall damage output is decreased.\n\
\n\
The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
60% increased optimal range.\n\
15% reduced capacitor need.", tl: 1, shhp: 1, emd: 23, exd: 0, kid: 0, thd: 0, wrm: 1.6, cs: 3, lg: 53},
      "32799": { n: "Tactical Laser S", mg: 1599, pmg: 101, mta: 0, d: "This highly specialized space to ground ammunition can penetrate the atmosphere of planets. It is only useful against ground targets and relies on special targeting data provided by ground troops.\n\
\n\
The laser strike deals high damage in a tight radius at high speed. The tactical laser is devastating but its precise nature means it does not cover wide areas. ", tl: 1, shhp: 1, wrm: 1, cs: 1, lg: 53}
    },
    "325": {
      "3536": { n: "Capital Coaxial Regenerative Projector", mg: 1056, pmg: 537, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.\n\
Note: May only be fitted to capital class ships.", cpu: 36, pg: 150000, opt: 16500, capn: 1350, tl: 1, shhp: 40, ad: 5000, ahpr: 1650},
      "11355": { n: "Small Remote Armor Repair System I", mg: 1059, pmg: 537, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 6, opt: 4000, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 40},
      "11357": { n: "Medium Remote Armor Repair System I", mg: 1058, pmg: 537, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 20, pg: 120, opt: 5000, capn: 118, tl: 1, shhp: 40, ad: 5000, ahpr: 160},
      "11359": { n: "Large Remote Armor Repair System I", mg: 1057, pmg: 537, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 40, pg: 600, opt: 7000, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 320},
      "16433": { n: "Small I-ax Regenerative Projector", mg: 1059, pmg: 537, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 9, pg: 6, opt: 4200, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 42},
      "16435": { n: "Small Coaxial Regenerative Projector", mg: 1059, pmg: 537, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 9, pg: 6, opt: 4400, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 44},
      "16437": { n: "Small 'Arup' Remote Bulwark Reconstruction", mg: 1059, pmg: 537, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 8, pg: 6, opt: 4600, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 46},
      "16439": { n: "Small 'Solace' Remote Bulwark Reconstruction", mg: 1059, pmg: 537, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 8, pg: 6, opt: 4800, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 48},
      "16441": { n: "Medium I-ax Regenerative Projector", mg: 1058, pmg: 537, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 19, pg: 120, opt: 5250, capn: 118, tl: 1, shhp: 40, ad: 5000, ahpr: 168},
      "16443": { n: "Medium Coaxial Regenerative Projector", mg: 1058, pmg: 537, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 18, pg: 120, opt: 5500, capn: 118, tl: 1, shhp: 40, ad: 5000, ahpr: 176},
      "16445": { n: "Medium 'Arup' Remote Bulwark Reconstruction", mg: 1058, pmg: 537, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 17, pg: 120, opt: 5750, capn: 118, tl: 1, shhp: 40, ad: 5000, ahpr: 184},
      "16447": { n: "Medium 'Solace' Remote Bulwark Reconstruction", mg: 1058, pmg: 537, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 16, pg: 120, opt: 6000, capn: 118, tl: 1, shhp: 40, ad: 5000, ahpr: 192},
      "16449": { n: "Large I-ax Regenerative Projector", mg: 1057, pmg: 537, mta: 1, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 38, pg: 600, opt: 7350, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 336},
      "16451": { n: "Large Coaxial Regenerative Projector", mg: 1057, pmg: 537, mta: 2, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 36, pg: 600, opt: 7700, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 352},
      "16453": { n: "Large 'Arup' Remote Bulwark Reconstruction", mg: 1057, pmg: 537, mta: 3, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 34, pg: 600, opt: 8050, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 368},
      "16455": { n: "Large 'Solace' Remote Bulwark Reconstruction", mg: 1057, pmg: 537, mta: 4, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 32, pg: 600, opt: 8400, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 384},
      "18981": { n: "Coreli C-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 6, opt: 5400, capn: 30, tl: 1, shhp: 40, ad: 2500, ahpr: 59},
      "18983": { n: "Coreli B-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 6, opt: 5600, capn: 30, tl: 1, shhp: 40, ad: 2500, ahpr: 65},
      "18985": { n: "Coreli A-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 6, opt: 5800, capn: 30, tl: 1, shhp: 40, ad: 2500, ahpr: 70},
      "18987": { n: "Corelum C-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 132, opt: 6750, capn: 120, tl: 1, shhp: 40, ad: 5000, ahpr: 236},
      "18989": { n: "Corelum B-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 132, opt: 7000, capn: 120, tl: 1, shhp: 40, ad: 5000, ahpr: 258},
      "18991": { n: "Corelum A-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 132, opt: 7250, capn: 120, tl: 1, shhp: 40, ad: 5000, ahpr: 278},
      "19047": { n: "Centii C-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 8, opt: 5400, capn: 34, tl: 1, shhp: 40, ad: 2500, ahpr: 66},
      "19049": { n: "Centii B-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 9, opt: 5600, capn: 34, tl: 1, shhp: 40, ad: 2500, ahpr: 72},
      "19051": { n: "Centii A-Type Small Remote Armor Repair System", mg: 1059, pmg: 537, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 10, opt: 5800, capn: 34, tl: 1, shhp: 40, ad: 2500, ahpr: 78},
      "19053": { n: "Centum C-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 11, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 181, opt: 6750, capn: 135, tl: 1, shhp: 40, ad: 5000, ahpr: 264},
      "19055": { n: "Centum B-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 12, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 187, opt: 7000, capn: 135, tl: 1, shhp: 40, ad: 5000, ahpr: 288},
      "19057": { n: "Centum A-Type Medium Remote Armor Repair System", mg: 1058, pmg: 537, mta: 13, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 192, opt: 7250, capn: 135, tl: 1, shhp: 40, ad: 5000, ahpr: 312},
      "22947": { n: "'Beatnik' Small Remote Armor Repair System I", mg: 1059, pmg: 537, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 8, pg: 5, opt: 4800, capn: 27, tl: 1, shhp: 40, ad: 2500, ahpr: 48},
      "22949": { n: "'Love' Medium Remote Armor Repair System I", mg: 1058, pmg: 537, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 16, pg: 105, opt: 6000, capn: 108, tl: 1, shhp: 40, ad: 5000, ahpr: 192},
      "22951": { n: "'Pacifier' Large Remote Armor Repair System I", mg: 1057, pmg: 537, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 32, pg: 520, opt: 8400, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 384},
      "23414": { n: "'Brotherhood' Small Remote Armor Repair System I", mg: 1059, pmg: 537, mta: 6, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 10, pg: 6, opt: 4000, capn: 29, tl: 1, shhp: 40, ad: 2500, ahpr: 40},
      "23416": { n: "'Peace' Large Remote Armor Repair System I", mg: 1057, pmg: 537, mta: 7, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 32, pg: 520, opt: 8400, capn: 252, tl: 1, shhp: 40, ad: 5000, ahpr: 384},
      "24569": { n: "Capital Remote Armor Repair System I", mg: 1056, pmg: 537, mta: 0, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.\n\
Note: May only be fitted to capital class ships.", cpu: 40, pg: 150000, opt: 15000, capn: 1350, tl: 1, shhp: 40, ad: 5000, ahpr: 1500},
      "26912": { n: "Small Remote Armor Repair System II", mg: 1059, pmg: 537, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 12, pg: 7, opt: 4800, capn: 27, tl: 2, shhp: 40, ad: 2250, ahpr: 48},
      "26913": { n: "Medium Remote Armor Repair System II", mg: 1058, pmg: 537, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 24, pg: 132, opt: 6000, capn: 108, tl: 2, shhp: 40, ad: 4500, ahpr: 192},
      "26914": { n: "Large Remote Armor Repair System II", mg: 1057, pmg: 537, mta: 5, d: "This module uses nano-assemblers to repair damage done to the armor of the Target ship.", cpu: 48, pg: 660, opt: 8400, capn: 252, tl: 2, shhp: 40, ad: 4500, ahpr: 384}
    },
    "329": {
      "11279": { n: "1600mm Reinforced Steel Plates I", mg: 1676, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 30, pg: 500, ahp: 3000, tl: 1, shhp: 40},
      "11291": { n: "50mm Reinforced Steel Plates I", mg: 1671, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 5, pg: 1, ahp: 94, tl: 1, shhp: 40},
      "11293": { n: "100mm Reinforced Steel Plates I", mg: 1672, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 10, pg: 5, ahp: 188, tl: 1, shhp: 40},
      "11295": { n: "200mm Reinforced Steel Plates I", mg: 1673, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 15, pg: 10, ahp: 375, tl: 1, shhp: 40},
      "11297": { n: "400mm Reinforced Steel Plates I", mg: 1674, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 20, pg: 30, ahp: 750, tl: 1, shhp: 40},
      "11299": { n: "800mm Reinforced Steel Plates I", mg: 1675, pmg: 133, mta: 0, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 25, pg: 200, ahp: 1500, tl: 1, shhp: 40},
      "11307": { n: "400mm Reinforced Titanium Plates I", mg: 1674, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 17, pg: 30, ahp: 900, tl: 1, r: 2, shhp: 40},
      "11309": { n: "400mm Reinforced Rolled Tungsten Plates I", mg: 1674, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 18, pg: 30, ahp: 1050, tl: 1, r: 4, shhp: 40},
      "11311": { n: "400mm Reinforced Crystalline Carbonide Plates I", mg: 1674, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 19, pg: 30, ahp: 975, tl: 1, r: 8, shhp: 40},
      "11313": { n: "400mm Reinforced Nanofiber Plates I", mg: 1674, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 16, pg: 30, ahp: 825, tl: 1, r: 1, shhp: 40},
      "11315": { n: "800mm Reinforced Titanium Plates I", mg: 1675, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 22, pg: 200, ahp: 1800, tl: 1, r: 2, shhp: 40},
      "11317": { n: "800mm Reinforced Rolled Tungsten Plates I", mg: 1675, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 23, pg: 200, ahp: 2100, tl: 1, r: 4, shhp: 40},
      "11319": { n: "800mm Reinforced Crystalline Carbonide Plates I", mg: 1675, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 24, pg: 200, ahp: 1950, tl: 1, r: 8, shhp: 40},
      "11321": { n: "800mm Reinforced Nanofiber Plates I", mg: 1675, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 21, pg: 200, ahp: 1650, tl: 1, r: 1, shhp: 40},
      "11323": { n: "1600mm Reinforced Titanium Plates I", mg: 1676, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 27, pg: 500, ahp: 3600, tl: 1, r: 2, shhp: 40},
      "11325": { n: "1600mm Reinforced Rolled Tungsten Plates I", mg: 1676, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 28, pg: 500, ahp: 4200, tl: 1, r: 4, shhp: 40},
      "11327": { n: "1600mm Reinforced Crystalline Carbonide Plates I", mg: 1676, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 29, pg: 500, ahp: 3900, tl: 1, r: 8, shhp: 40},
      "11329": { n: "1600mm Reinforced Nanofiber Plates I", mg: 1676, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 26, pg: 500, ahp: 3300, tl: 1, r: 1, shhp: 40},
      "11331": { n: "50mm Reinforced Titanium Plates I", mg: 1671, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 2, pg: 1, ahp: 113, tl: 1, r: 2, shhp: 40},
      "11333": { n: "50mm Reinforced Rolled Tungsten Plates I", mg: 1671, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 3, pg: 1, ahp: 131, tl: 1, r: 4, shhp: 40},
      "11335": { n: "50mm Reinforced Crystalline Carbonide Plates I", mg: 1671, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 4, pg: 1, ahp: 123, tl: 1, r: 8, shhp: 40},
      "11337": { n: "50mm Reinforced Nanofiber Plates I", mg: 1671, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 1, pg: 1, ahp: 104, tl: 1, r: 1, shhp: 40},
      "11339": { n: "100mm Reinforced Titanium Plates I", mg: 1672, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 7, pg: 5, ahp: 225, tl: 1, r: 2, shhp: 40},
      "11341": { n: "100mm Reinforced Rolled Tungsten Plates I", mg: 1672, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 8, pg: 5, ahp: 263, tl: 1, r: 4, shhp: 40},
      "11343": { n: "100mm Reinforced Crystalline Carbonide Plates I", mg: 1672, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 9, pg: 5, ahp: 244, tl: 1, r: 8, shhp: 40},
      "11345": { n: "100mm Reinforced Nanofiber Plates I", mg: 1672, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 6, pg: 5, ahp: 206, tl: 1, r: 1, shhp: 40},
      "11347": { n: "200mm Reinforced Titanium Plates I", mg: 1673, pmg: 133, mta: 2, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 12, pg: 10, ahp: 450, tl: 1, r: 2, shhp: 40},
      "11349": { n: "200mm Reinforced Rolled Tungsten Plates I", mg: 1673, pmg: 133, mta: 4, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 13, pg: 10, ahp: 525, tl: 1, r: 4, shhp: 40},
      "11351": { n: "200mm Reinforced Crystalline Carbonide Plates I", mg: 1673, pmg: 133, mta: 3, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 14, pg: 10, ahp: 488, tl: 1, r: 8, shhp: 40},
      "11353": { n: "200mm Reinforced Nanofiber Plates I", mg: 1673, pmg: 133, mta: 1, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 11, pg: 10, ahp: 413, tl: 1, r: 1, shhp: 40},
      "20343": { n: "50mm Reinforced Steel Plates II", mg: 1671, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 6, pg: 1, ahp: 150, tl: 2, shhp: 40},
      "20345": { n: "100mm Reinforced Steel Plates II", mg: 1672, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 11, pg: 6, ahp: 300, tl: 2, shhp: 40},
      "20347": { n: "200mm Reinforced Steel Plates II", mg: 1673, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 17, pg: 12, ahp: 600, tl: 2, shhp: 40},
      "20349": { n: "400mm Reinforced Steel Plates II", mg: 1674, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 23, pg: 35, ahp: 1200, tl: 2, shhp: 40},
      "20351": { n: "800mm Reinforced Steel Plates II", mg: 1675, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 28, pg: 230, ahp: 2400, tl: 2, shhp: 40},
      "20353": { n: "1600mm Reinforced Steel Plates II", mg: 1676, pmg: 133, mta: 5, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 33, pg: 575, ahp: 4800, tl: 2, shhp: 40},
      "23783": { n: "'Abatis' 100mm Reinforced Steel Plates I", mg: 1672, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 8, pg: 5, ahp: 263, tl: 1, shhp: 40},
      "23785": { n: "'Bailey' 1600mm Reinforced Steel Plates I", mg: 1676, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 24, pg: 450, ahp: 4200, tl: 1, shhp: 40},
      "23787": { n: "'Chainmail' 200mm Reinforced Steel Plates I", mg: 1673, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 12, pg: 9, ahp: 528, tl: 1, shhp: 40},
      "23789": { n: "'Bastion' 400mm Reinforced Steel Plates I", mg: 1674, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 16, pg: 27, ahp: 1053, tl: 1, shhp: 40},
      "23791": { n: "'Citadella' 50mm Reinforced Steel Plates I", mg: 1671, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 4, pg: 1, ahp: 131, tl: 1, shhp: 40},
      "23793": { n: "'Barbican' 800mm Reinforced Steel Plates I", mg: 1675, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 20, pg: 180, ahp: 2103, tl: 1, shhp: 40},
      "28778": { n: "Syndicate 100mm Reinforced Steel Plates", mg: 1672, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 11, pg: 6, ahp: 263, tl: 1, shhp: 40},
      "28780": { n: "Syndicate 1600mm Reinforced Steel Plates", mg: 1676, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 33, pg: 575, ahp: 4200, tl: 1, shhp: 40},
      "28782": { n: "Syndicate 200mm Reinforced Steel Plates", mg: 1673, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 17, pg: 12, ahp: 528, tl: 1, shhp: 40},
      "28784": { n: "Syndicate 400mm Reinforced Steel Plates", mg: 1674, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 23, pg: 35, ahp: 1053, tl: 1, shhp: 40},
      "28786": { n: "Syndicate 800mm Reinforced Steel Plates", mg: 1675, pmg: 133, mta: 6, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 28, pg: 230, ahp: 2103, tl: 1, shhp: 40},
      "31896": { n: "Imperial Navy 100mm Reinforced Steel Plates", mg: 1672, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 10, pg: 6, ahp: 263, tl: 1, shhp: 40},
      "31898": { n: "Federation Navy 100mm Reinforced Steel Plates", mg: 1672, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 11, pg: 6, ahp: 263, tl: 1, shhp: 40},
      "31900": { n: "Imperial Navy 1600mm Reinforced Steel Plates", mg: 1676, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 30, pg: 575, ahp: 4200, tl: 1, shhp: 40},
      "31902": { n: "Federation Navy 1600mm Reinforced Steel Plates", mg: 1676, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 33, pg: 575, ahp: 4200, tl: 1, shhp: 40},
      "31904": { n: "Imperial Navy 200mm Reinforced Steel Plates", mg: 1673, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 15, pg: 12, ahp: 528, tl: 1, shhp: 40},
      "31906": { n: "Federation Navy 200mm Reinforced Steel Plates", mg: 1673, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 17, pg: 12, ahp: 528, tl: 1, shhp: 40},
      "31908": { n: "Imperial Navy 400mm Reinforced Steel Plates", mg: 1674, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 21, pg: 35, ahp: 1053, tl: 1, shhp: 40},
      "31910": { n: "Federation Navy 400mm Reinforced Steel Plates", mg: 1674, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 23, pg: 35, ahp: 1053, tl: 1, shhp: 40},
      "31916": { n: "Imperial Navy 800mm Reinforced Steel Plates", mg: 1675, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 25, pg: 230, ahp: 2103, tl: 1, shhp: 40},
      "31918": { n: "Federation Navy 800mm Reinforced Steel Plates", mg: 1675, pmg: 133, mta: 7, d: "Increases the maximum strength of the Armor.\n\
\n\
Penalty:  Adds to your ship's mass, making it less agile and maneuverable in addition to decreasing the factor of thrust gained from speed modules like Afterburners and MicroWarpdrives.", cpu: 28, pg: 230, ahp: 2103, tl: 1, shhp: 40}
    },
    "372": {
      "12608": { n: "Hail S", mg: 859, pmg: 847, mta: 5, d: "Hail is an attempt to combine the penetration of titanium sabot with the versatility of a depleted uranium shell. It has tremendous damage potential, but should not be used at long ranges. Any pilot using this ammunition should be prepared to trade optimal range, falloff range, and tracking speed for a devastating amount of damage.\n\
\n\
25% reduced falloff.\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Autocannons.", tl: 2, emd: 0, exd: 12.1, kid: 3.3, thd: 0, wrm: 0.5, cs: 1, lg: 55, tsm: 0.7, fom: 0.75},
      "12625": { n: "Barrage S", mg: 859, pmg: 847, mta: 5, d: "An advanced version of the standard Nuclear ammo with a Morphite-enriched warhead and a smart tracking system.\n\
 \n\
25% reduced tracking.\n\
50% increased falloff.\n\
\n\
Note: This ammunition can only be used by small tech level II Autocannons.", tl: 2, emd: 0, exd: 6, kid: 5, thd: 0, wrm: 1, cs: 1, lg: 55, tsm: 0.75, fom: 1.5},
      "12773": { n: "Barrage M", mg: 858, pmg: 847, mta: 5, d: "An advanced version of the standard Nuclear ammo with a Morphite-enriched warhead and a smart tracking system. \n\
\n\
25% reduced tracking.\n\
50% increased falloff.\n\
\n\
Note: This ammunition can only be used by medium tech level II Autocannons. ", tl: 2, emd: 0, exd: 12, kid: 10, thd: 0, wrm: 1, cs: 2, lg: 55, tsm: 0.75, fom: 1.5},
      "12775": { n: "Barrage L", mg: 857, pmg: 847, mta: 5, d: "An advanced version of the standard Nuclear ammo with a Morphite-enriched warhead and a smart tracking system. \n\
\n\
25% reduced tracking.\n\
50% increased falloff.\n\
\n\
Note: This ammunition can only be used by large tech level II Autocannons.", tl: 2, emd: 0, exd: 24, kid: 20, thd: 0, wrm: 1, cs: 3, lg: 55, tsm: 0.75, fom: 1.5},
      "12777": { n: "Hail M", mg: 858, pmg: 847, mta: 5, d: "Hail is an attempt to combine the penetration of titanium sabot with the versatility of a depleted uranium shell. It has tremendous damage potential, but should not be used at long ranges. Any pilot using this ammunition should be prepared to trade optimal range, falloff range, and tracking speed for a devastating amount of damage.\n\
\n\
25% reduced falloff.\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Autocannons.", tl: 2, emd: 0, exd: 24.2, kid: 6.6, thd: 0, wrm: 0.5, cs: 2, lg: 55, tsm: 0.7, fom: 0.75},
      "12779": { n: "Hail L", mg: 857, pmg: 847, mta: 5, d: "Hail is an attempt to combine the penetration of titanium sabot with the versatility of a depleted uranium shell. It has tremendous damage potential, but should not be used at long ranges. Any pilot using this ammunition should be prepared to trade optimal range, falloff range, and tracking speed for a devastating amount of damage.\n\
\n\
25% reduced falloff.\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Autocannons.", tl: 2, emd: 0, exd: 48.4, kid: 13.2, thd: 0, wrm: 0.5, cs: 3, lg: 55, tsm: 0.7, fom: 0.75}
    },
    "373": {
      "12618": { n: "Spike S", mg: 865, pmg: 850, mta: 5, d: "The spike munition package is designed to deliver huge damage to targets at extreme distances. It consists of a superdense plutonium sabot mounted on a small rocket unit that provides a substantial boost to the sabots impact velocity.  However the charge is next to useless at close range.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 4, thd: 4, wrm: 1.8, cs: 1, lg: 74, tsm: 0.25},
      "12620": { n: "Javelin S", mg: 865, pmg: 850, mta: 5, d: "The Javelin charge consists of a cluster of Iridium Fletchets with a Graviton Pulse Detonator. This allows for much higher damage than can be achieved by a standard rail system. However, the inherent entropy of graviton pulses means that it is very hard to maintain accuracy at long range.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 6, thd: 8, wrm: 0.25, cs: 1, lg: 74, tsm: 1.25},
      "12801": { n: "Javelin M", mg: 864, pmg: 850, mta: 5, d: "The Javelin charge consists of a cluster of Iridium Fletchets with a Graviton Pulse Detonator. This allows for much higher damage than can be achieved by a standard rail system. However, the inherent entropy of graviton pulses means that it is very hard to maintain accuracy at long range.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 12, thd: 16, wrm: 0.25, cs: 2, lg: 74, tsm: 1.25},
      "12803": { n: "Javelin L", mg: 863, pmg: 850, mta: 5, d: "The Javelin charge consists of a cluster of Iridium Fletchets with a Graviton Pulse Detonator. This allows for much higher damage than can be achieved by a standard rail system. However, the inherent entropy of graviton pulses means that it is very hard to maintain accuracy at long range.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 24, thd: 32, wrm: 0.25, cs: 3, lg: 74, tsm: 1.25},
      "12805": { n: "Spike M", mg: 864, pmg: 850, mta: 5, d: "The spike munition package is designed to deliver huge damage to targets at extreme distances. It consists of a superdense plutonium sabot mounted on a small graviton booster unit that provides a substantial boost to the sabots impact velocity.  However, the charge is next to useless at close range.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 8, thd: 8, wrm: 1.8, cs: 2, lg: 74, tsm: 0.25},
      "12807": { n: "Spike L", mg: 863, pmg: 850, mta: 5, d: "The Spike munition package is designed to deliver huge damage to targets at extreme distances. It consists of a superdense plutonium sabot mounted on a small rocket unit that provides a substantial boost to the sabots impact velocity.  However, the charge is next to useless at close range.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Railguns.", tl: 2, emd: 0, exd: 0, kid: 16, thd: 16, wrm: 1.8, cs: 3, lg: 74, tsm: 0.25}
    },
    "374": {
      "12557": { n: "Gleam S", mg: 868, pmg: 852, mta: 5, d: "The Gleam overdrive crystal has tremendous damage capacity but needs substantially more energy than normal. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Beam Lasers.", tl: 2, shhp: 1, emd: 7, exd: 0, kid: 0, thd: 7, wrm: 0.25, cs: 1, lg: 53, tsm: 1.25},
      "12559": { n: "Aurora S", mg: 868, pmg: 852, mta: 5, d: "A Carthum Conglomerate small Beam Laser Crystal based on an upgraded version of the standard radio Crystal. Huge range and damage boost but far longer cooldown time. It is next to useless at close ranges. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Beam Lasers.\n\
", tl: 2, shhp: 1, emd: 5, exd: 0, kid: 0, thd: 3, wrm: 1.8, cs: 1, lg: 53, tsm: 0.25},
      "12822": { n: "Aurora M", mg: 867, pmg: 852, mta: 5, d: "A Carthum Conglomerate medium Beam Laser Crystal based on an upgraded version of the standard radio Crystal. Huge range and damage boost but also uses way more capacitor power than normal and has a far longer cooldown time. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Beam Lasers.", tl: 2, shhp: 1, emd: 10, exd: 0, kid: 0, thd: 6, wrm: 1.8, cs: 2, lg: 53, tsm: 0.25},
      "12824": { n: "Aurora L", mg: 866, pmg: 852, mta: 5, d: "A Carthum Conglomerate large Beam Laser Crystal based on an upgraded version of the standard radio Crystal. Huge range and damage boost but suffers from much reduced tracking and has a considerably longer cooldown than normal. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Beam Lasers.", tl: 2, shhp: 1, emd: 20, exd: 0, kid: 0, thd: 12, wrm: 1.8, cs: 3, lg: 53, tsm: 0.25},
      "12826": { n: "Gleam M", mg: 867, pmg: 852, mta: 5, d: "The Gleam overdrive crystal has tremendous damage capacity but needs substantially more energy than normal. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Beam Lasers.", tl: 2, shhp: 1, emd: 14, exd: 0, kid: 0, thd: 14, wrm: 0.25, cs: 2, lg: 53, tsm: 1.25},
      "12828": { n: "Gleam L", mg: 866, pmg: 852, mta: 5, d: "The Gleam overdrive crystal has tremendous damage capacity but needs substantially more energy than normal. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Beam Lasers.", tl: 2, shhp: 1, emd: 28, exd: 0, kid: 0, thd: 28, wrm: 0.25, cs: 3, lg: 53, tsm: 1.25}
    },
    "375": {
      "12563": { n: "Scorch S", mg: 871, pmg: 853, mta: 5, d: "The Scorch is a UV crystal designed by Carthum Conglomerate. Utilizing AI microtrackers it gives a good boost to range but has fairly low damage potential, low tracking and is of limited use against heavily armored targets. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% increased optimal range.\n\
25% decreased tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Pulse Lasers. ", tl: 2, shhp: 1, emd: 9, exd: 0, kid: 0, thd: 2, wrm: 1.5, cs: 1, lg: 53, tsm: 0.75},
      "12565": { n: "Conflagration S", mg: 871, pmg: 853, mta: 5, d: "The Conflagration is a supercharged X-Ray crystal created by Carthum Conglomerate for the Imperial Navy. Has much greater damage potential than the standard version, but needs considerably more capacitor, has reduced effective range and negatively affects the weapon's tracking speed. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
25% increased capacitor usage.\n\
\n\
Note: This ammunition can only be used by small tech level II Pulse Lasers.", tl: 2, shhp: 1, emd: 7.7, exd: 0, kid: 0, thd: 7.7, wrm: 0.5, cs: 1, lg: 53, tsm: 0.7},
      "12814": { n: "Conflagration M", mg: 870, pmg: 853, mta: 5, d: "The Conflagration is a supercharged X-Ray crystal created by Carthum Conglomerate for the Imperial Navy. Has much greater damage potential than the standard version, but needs considerably more capacitor, has reduced effective range and negatively affects the weapon's tracking speed. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
25% increased capacitor usage.\n\
\n\
Note: This ammunition can only be used by medium tech level II Pulse Lasers. ", tl: 2, shhp: 1, emd: 15.4, exd: 0, kid: 0, thd: 15.4, wrm: 0.5, cs: 2, lg: 53, tsm: 0.7},
      "12816": { n: "Conflagration L", mg: 869, pmg: 853, mta: 5, d: "The Conflagration is a supercharged X-Ray crystal created by Carthum Conglomerate for the Imperial Navy. Has much greater damage potential than the standard version, but needs considerably more capacitor, has reduced effective range and negatively affects the weapon's tracking speed. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% reduced optimal range.\n\
30% reduced tracking speed.\n\
25% increased capacitor usage.\n\
\n\
Note: This ammunition can only be used by large tech level II Pulse Lasers.\n\
", tl: 2, shhp: 1, emd: 30.8, exd: 0, kid: 0, thd: 30.8, wrm: 0.5, cs: 3, lg: 53, tsm: 0.7},
      "12818": { n: "Scorch M", mg: 870, pmg: 853, mta: 5, d: "The Scorch is a UV crystal designed by Carthum Conglomerate. Utilizing AI microtrackers, it gives a good boost to range but has fairly low damage potential and low tracking and is of limited use against heavily armored targets. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% increased optimal range.\n\
25% decreased tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Pulse Lasers.\n\
", tl: 2, shhp: 1, emd: 18, exd: 0, kid: 0, thd: 4, wrm: 1.5, cs: 2, lg: 53, tsm: 0.75},
      "12820": { n: "Scorch L", mg: 869, pmg: 853, mta: 5, d: "The Scorch is a UV crystal designed by Carthum Conglomerate. Utilizing AI microtrackers it gives a good boost to range but has fairly low damage potential, low tracking and is of limited use against heavily armored targets. The delicate crystalline structures used in the manufacture of this advanced crystal degrade with use, eventually causing it to shatter.\n\
\n\
50% increased optimal range.\n\
25% decreased tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Pulse Lasers.\n\
", tl: 2, shhp: 1, emd: 36, exd: 0, kid: 0, thd: 8, wrm: 1.5, cs: 3, lg: 53, tsm: 0.75}
    },
    "376": {
      "12631": { n: "Quake S", mg: 856, pmg: 846, mta: 5, d: "A titanium sabot shell that delivers a shattering blow to the target. It is however nearly twice as bulky as standard ammunition.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by small tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 9, kid: 5, thd: 0, wrm: 0.25, cs: 1, lg: 55, tsm: 1.25},
      "12633": { n: "Tremor S", mg: 856, pmg: 846, mta: 5, d: "An advanced long range shell designed for extended bombardment, the Tremor has great range but is nearly useless in close combat.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking.\n\
\n\
Note: This ammunition can only be used by small tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 5, kid: 3, thd: 0, wrm: 1.8, cs: 1, lg: 55, tsm: 0.25},
      "12761": { n: "Quake L", mg: 854, pmg: 846, mta: 5, d: "A titanium sabot shell that delivers a shattering blow to the target. It is however nearly twice as bulky as standard ammunition.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by large tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 36, kid: 20, thd: 0, wrm: 0.25, cs: 3, lg: 55, tsm: 1.25},
      "12765": { n: "Tremor L", mg: 854, pmg: 846, mta: 5, d: "An advanced long range shell designed for extended bombardment, the Tremor has great range but is nearly useless in close combat.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking.\n\
\n\
Note: This ammunition can only be used by large tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 20, kid: 12, thd: 0, wrm: 1.8, cs: 3, lg: 55, tsm: 0.25},
      "12767": { n: "Quake M", mg: 855, pmg: 846, mta: 5, d: "A titanium sabot shell that delivers a shattering blow to the target. It is however nearly twice as bulky as standard ammunition.\n\
\n\
75% reduced optimal range.\n\
25% increased tracking speed.\n\
\n\
Note: This ammunition can only be used by medium tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 18, kid: 10, thd: 0, wrm: 0.25, cs: 2, lg: 55, tsm: 1.25},
      "12771": { n: "Tremor M", mg: 855, pmg: 846, mta: 5, d: "An advanced long range shell designed for extended bombardment, the Tremor has great range but is nearly useless in close combat.\n\
\n\
80% increased optimal range.\n\
75% reduced tracking.\n\
\n\
Note: This ammunition can only be used by medium tech level II Artillery Cannons.", tl: 2, emd: 0, exd: 10, kid: 6, thd: 0, wrm: 1.8, cs: 2, lg: 55, tsm: 0.25}
    },
    "377": {
      "12612": { n: "Void S", mg: 862, pmg: 849, mta: 5, d: "The Void Xenon charge is a high-powered blaster charge that delivers an extremely powerful blast of kinetic energy. However, it has several serious drawbacks, most notably the fact that it requires considerably more capacitor energy than any other blaster charge. It also needs to maintain a clean aim for a slightly longer time than normal.\n\
\n\
25% reduced optimal range.\n\
25% reduced tracking speed.\n\
50% reduced falloff range.\n\
\n\
Note: This ammunition can only be used by small tech level II Blasters.", tl: 2, emd: 0, exd: 0, kid: 7.7, thd: 7.7, wrm: 0.75, cs: 1, lg: 74, tsm: 0.75, fom: 0.5},
      "12614": { n: "Null S", mg: 862, pmg: 849, mta: 5, d: "The Null is an improved version of the standard Thorium charge that possesses greatly improved molecular cohesion, resulting in superior range and reduced particle dissipation.\n\
\n\
40% increased optimal range.\n\
25% decreased tracking speed.\n\
40% increased falloff range.\n\
\n\
Note: This ammunition can only be used by small tech level II Blasters.", tl: 2, emd: 0, exd: 0, kid: 5, thd: 6, wrm: 1.4, cs: 1, lg: 74, tsm: 0.75, fom: 1.4},
      "12785": { n: "Null M", mg: 861, pmg: 849, mta: 5, d: "The Null is an improved version of the standard Thorium charge that possesses greatly improved molecular cohesion, resulting in superior range and reduced particle dissipation.\n\
\n\
40% increased optimal range.\n\
25% decreased tracking speed.\n\
40% increased falloff range.\n\
\n\
Note: This ammunition can only be used by medium tech level II Blasters.", tl: 2, emd: 0, exd: 0, kid: 10, thd: 12, wrm: 1.4, cs: 2, lg: 74, tsm: 0.75, fom: 1.4},
      "12787": { n: "Null L", mg: 860, pmg: 849, mta: 5, d: "The Null is an improved version of the standard Thorium charge that possesses greatly improved molecular cohesion, resulting in superior range and reduced particle dissipation.\n\
\n\
40% increased optimal range.\n\
25% decreased tracking speed.\n\
40% increased falloff range.\n\
\n\
Note: This ammunition can only be used by large tech level II Blasters.    ", tl: 2, emd: 0, exd: 0, kid: 20, thd: 24, wrm: 1.4, cs: 3, lg: 74, tsm: 0.75, fom: 1.4},
      "12789": { n: "Void M", mg: 861, pmg: 849, mta: 5, d: "The Void Xenon charge is a high-powered blaster charge that delivers an extremely powerful blast of kinetic energy. However, it has several serious drawbacks, most notably the fact that it requires considerably more capacitor energy than any other blaster charge. It also needs to maintain a clean aim for a slightly longer time than normal.\n\
\n\
25% reduced optimal range.\n\
25% reduced tracking speed.\n\
50% reduced falloff range.\n\
\n\
Note: This ammunition can only be used by medium tech level II Blasters.", tl: 2, emd: 0, exd: 0, kid: 15.4, thd: 15.4, wrm: 0.75, cs: 2, lg: 74, tsm: 0.75, fom: 0.5},
      "12791": { n: "Void L", mg: 860, pmg: 849, mta: 5, d: "The Void Xenon charge is a high-powered blaster charge that delivers an extremely powerful blast of kinetic energy. However, it has several serious drawbacks, most notably the fact that it requires considerably more capacitor energy than any other blaster charge. It also needs to maintain a clean aim for a slightly longer time than normal.\n\
\n\
25% reduced optimal range.\n\
25% reduced tracking speed.\n\
50% reduced falloff range.\n\
\n\
Note: This ammunition can only be used by large tech level II Blasters.", tl: 2, emd: 0, exd: 0, kid: 30.8, thd: 30.8, wrm: 0.75, cs: 3, lg: 74, tsm: 0.75, fom: 0.5}
    },
    "384": {
      "210": { n: "Scourge Light Missile", mg: 920, pmg: 117, mta: 0, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 83, thd: 0, lg: 509},
      "211": { n: "Inferno Light Missile", mg: 920, pmg: 117, mta: 0, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 83, lg: 509},
      "212": { n: "Mjolnir Light Missile", mg: 920, pmg: 117, mta: 0, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.", tl: 1, shhp: 70, vel: 3750, emd: 83, exd: 0, kid: 0, thd: 0, lg: 509},
      "213": { n: "Nova Light Missile", mg: 920, pmg: 117, mta: 0, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 83, kid: 0, thd: 0, lg: 509},
      "27353": { n: "Guristas Scourge Light Missile", mg: 998, pmg: 117, mta: 1, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 90, thd: 0, lg: 509},
      "27361": { n: "Caldari Navy Scourge Light Missile", mg: 998, pmg: 117, mta: 2, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 95, thd: 0, lg: 509},
      "27365": { n: "Dread Guristas Scourge Light Missile", mg: 998, pmg: 117, mta: 3, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 99, thd: 0, lg: 509},
      "27367": { n: "Guristas Inferno Light Missile", mg: 998, pmg: 117, mta: 1, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 90, lg: 509},
      "27369": { n: "Dread Guristas Inferno Light Missile", mg: 998, pmg: 117, mta: 3, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 99, lg: 509},
      "27371": { n: "Caldari Navy Inferno Light Missile", mg: 998, pmg: 117, mta: 2, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 95, lg: 509},
      "27375": { n: "Dread Guristas Nova Light Missile", mg: 998, pmg: 117, mta: 3, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 99, kid: 0, thd: 0, lg: 509},
      "27379": { n: "Guristas Nova Light Missile", mg: 998, pmg: 117, mta: 1, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 90, kid: 0, thd: 0, lg: 509},
      "27381": { n: "Caldari Navy Nova Light Missile", mg: 998, pmg: 117, mta: 2, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.", tl: 1, shhp: 70, vel: 3750, emd: 0, exd: 95, kid: 0, thd: 0, lg: 509},
      "27383": { n: "Guristas Mjolnir Light Missile", mg: 998, pmg: 117, mta: 1, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.", tl: 1, shhp: 70, vel: 3750, emd: 90, exd: 0, kid: 0, thd: 0, lg: 509},
      "27385": { n: "Dread Guristas Mjolnir Light Missile", mg: 998, pmg: 117, mta: 3, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.", tl: 1, shhp: 70, vel: 3750, emd: 99, exd: 0, kid: 0, thd: 0, lg: 509},
      "27387": { n: "Caldari Navy Mjolnir Light Missile", mg: 998, pmg: 117, mta: 2, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.", tl: 1, shhp: 70, vel: 3750, emd: 95, exd: 0, kid: 0, thd: 0, lg: 509}
    },
    "385": {
      "206": { n: "Nova Heavy Missile", mg: 924, pmg: 581, mta: 0, d: "The be-all and end-all of medium-sized missiles, the Nova heavy missile is a must for those who want a guaranteed kill no matter the cost.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 135, kid: 0, thd: 0, lg: 510},
      "207": { n: "Mjolnir Heavy Missile", mg: 924, pmg: 581, mta: 0, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.", tl: 1, shhp: 70, vel: 4300, emd: 135, exd: 0, kid: 0, thd: 0, lg: 510},
      "208": { n: "Inferno Heavy Missile", mg: 924, pmg: 581, mta: 0, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 135, lg: 510},
      "209": { n: "Scourge Heavy Missile", mg: 924, pmg: 581, mta: 0, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 135, thd: 0, lg: 510},
      "27433": { n: "Guristas Mjolnir Heavy Missile", mg: 1002, pmg: 581, mta: 1, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.", tl: 1, shhp: 70, vel: 4300, emd: 149, exd: 0, kid: 0, thd: 0, lg: 510},
      "27435": { n: "Caldari Navy Mjolnir Heavy Missile", mg: 1002, pmg: 581, mta: 2, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.", tl: 1, shhp: 70, vel: 4300, emd: 155, exd: 0, kid: 0, thd: 0, lg: 510},
      "27437": { n: "Dread Guristas Mjolnir Heavy Missile", mg: 1002, pmg: 581, mta: 3, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.", tl: 1, shhp: 70, vel: 4300, emd: 162, exd: 0, kid: 0, thd: 0, lg: 510},
      "27439": { n: "Guristas Scourge Heavy Missile", mg: 1002, pmg: 581, mta: 1, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 149, thd: 0, lg: 510},
      "27441": { n: "Caldari Navy Scourge Heavy Missile", mg: 1002, pmg: 581, mta: 2, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 155, thd: 0, lg: 510},
      "27443": { n: "Dread Guristas Scourge Heavy Missile", mg: 1002, pmg: 581, mta: 3, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 162, thd: 0, lg: 510},
      "27445": { n: "Guristas Inferno Heavy Missile", mg: 1002, pmg: 581, mta: 1, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 149, lg: 510},
      "27447": { n: "Caldari Navy Inferno Heavy Missile", mg: 1002, pmg: 581, mta: 2, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 155, lg: 510},
      "27449": { n: "Dread Guristas Inferno Heavy Missile", mg: 1002, pmg: 581, mta: 3, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 162, lg: 510},
      "27451": { n: "Guristas Nova Heavy Missile", mg: 1002, pmg: 581, mta: 1, d: "The be-all and end-all of medium-sized missiles, the Nova heavy missile is a must for those who want a guaranteed kill no matter the cost.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 149, kid: 0, thd: 0, lg: 510},
      "27453": { n: "Caldari Navy Nova Heavy Missile", mg: 1002, pmg: 581, mta: 2, d: "The be-all and end-all of medium-sized missiles, the Nova heavy missile is a must for those who want a guaranteed kill no matter the cost.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 155, kid: 0, thd: 0, lg: 510},
      "27455": { n: "Dread Guristas Nova Heavy Missile", mg: 1002, pmg: 581, mta: 3, d: "The be-all and end-all of medium-sized missiles, the Nova heavy missile is a must for those who want a guaranteed kill no matter the cost.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 162, kid: 0, thd: 0, lg: 510}
    },
    "387": {
      "266": { n: "Scourge Rocket", mg: 922, pmg: 118, mta: 0, d: "A small rocket with a piercing warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 33, thd: 0, lg: 507},
      "2512": { n: "Mjolnir Rocket", mg: 922, pmg: 118, mta: 0, d: "A small rocket with an EMP warhead. ", tl: 1, shhp: 70, vel: 2250, emd: 33, exd: 0, kid: 0, thd: 0, lg: 507},
      "2514": { n: "Inferno Rocket", mg: 922, pmg: 118, mta: 0, d: "A small rocket with a plasma warhead.  ", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 33, lg: 507},
      "2516": { n: "Nova Rocket", mg: 922, pmg: 118, mta: 0, d: "A small rocket with a nuclear warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 33, kid: 0, thd: 0, lg: 507},
      "27313": { n: "Guristas Inferno Rocket", mg: 999, pmg: 118, mta: 1, d: "A small rocket with a plasma warhead.  ", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 35.6, lg: 507},
      "27315": { n: "Caldari Navy Inferno Rocket", mg: 999, pmg: 118, mta: 2, d: "A small rocket with a plasma warhead.  ", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 37, lg: 507},
      "27317": { n: "Dread Guristas Inferno Rocket", mg: 999, pmg: 118, mta: 3, d: "A small rocket with a plasma warhead.  ", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 39.6, lg: 507},
      "27319": { n: "Guristas Mjolnir Rocket", mg: 999, pmg: 118, mta: 1, d: "A small rocket with an EMP warhead. ", tl: 1, shhp: 70, vel: 2250, emd: 35.6, exd: 0, kid: 0, thd: 0, lg: 507},
      "27321": { n: "Caldari Navy Mjolnir Rocket", mg: 999, pmg: 118, mta: 2, d: "A small rocket with an EMP warhead. ", tl: 1, shhp: 70, vel: 2250, emd: 37, exd: 0, kid: 0, thd: 0, lg: 507},
      "27323": { n: "Dread Guristas Mjolnir Rocket", mg: 999, pmg: 118, mta: 3, d: "A small rocket with an EMP warhead. ", tl: 1, shhp: 70, vel: 2250, emd: 39.6, exd: 0, kid: 0, thd: 0, lg: 507},
      "27325": { n: "Guristas Nova Rocket", mg: 999, pmg: 118, mta: 1, d: "A small rocket with a nuclear warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 35.6, kid: 0, thd: 0, lg: 507},
      "27327": { n: "Caldari Navy Nova Rocket", mg: 999, pmg: 118, mta: 2, d: "A small rocket with a nuclear warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 37, kid: 0, thd: 0, lg: 507},
      "27329": { n: "Dread Guristas Nova Rocket", mg: 999, pmg: 118, mta: 3, d: "A small rocket with a nuclear warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 39.6, kid: 0, thd: 0, lg: 507},
      "27331": { n: "Guristas Scourge Rocket", mg: 999, pmg: 118, mta: 1, d: "A small rocket with a piercing warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 35.6, thd: 0, lg: 507},
      "27333": { n: "Caldari Navy Scourge Rocket", mg: 999, pmg: 118, mta: 2, d: "A small rocket with a piercing warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 37, thd: 0, lg: 507},
      "27335": { n: "Dread Guristas Scourge Rocket", mg: 999, pmg: 118, mta: 3, d: "A small rocket with a piercing warhead.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 39.6, thd: 0, lg: 507}
    },
    "395": {
      "1818": { n: "Scourge Auto-Targeting Heavy Missile I", mg: 914, pmg: 115, mta: 0, d: "A Caldarian heavy missile with a graviton warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 102, thd: 0, lg: 510},
      "1820": { n: "Mjolnir Auto-Targeting Heavy Missile I", mg: 914, pmg: 115, mta: 0, d: "An Amarr heavy missile with an EMP warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 102, exd: 0, kid: 0, thd: 0, lg: 510},
      "1822": { n: "Nova Auto-Targeting Heavy Missile I", mg: 914, pmg: 115, mta: 0, d: "A Minmatar heavy missile with a nuclear warhead and automatic guidance system.", tl: 1, r: 2, shhp: 70, vel: 4300, emd: 0, exd: 102, kid: 0, thd: 0, lg: 510},
      "1824": { n: "Inferno Auto-Targeting Heavy Missile I", mg: 914, pmg: 115, mta: 0, d: "A Gallente heavy missile with a plasma warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 102, lg: 510},
      "27483": { n: "Imperial Navy Mjolnir Auto-Targeting Heavy Missile I", mg: 1192, pmg: 115, mta: 0, d: "An Amarr heavy missile with an EMP warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 116, exd: 0, kid: 0, thd: 0, lg: 510},
      "27489": { n: "Caldari Navy Scourge Auto-Targeting Heavy Missile I", mg: 1192, pmg: 115, mta: 0, d: "A Caldari heavy missile with a graviton warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 116, thd: 0, lg: 510},
      "27495": { n: "Federation Navy Inferno Auto-Targeting Heavy Missile I", mg: 1192, pmg: 115, mta: 0, d: "A Gallente heavy missile with a plasma warhead and automatic guidance system.", tl: 1, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 116, lg: 510},
      "27501": { n: "Republic Fleet Nova Auto-Targeting Heavy Missile I", mg: 1192, pmg: 115, mta: 0, d: "A Minmatar heavy missile with a nuclear warhead and automatic guidance system.", tl: 1, r: 2, shhp: 70, vel: 4300, emd: 0, exd: 116, kid: 0, thd: 0, lg: 510}
    },
    "507": {
      "10629": { n: "Rocket Launcher I", mg: 639, pmg: 140, mta: 0, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 15, pg: 4, rof: 5000, tl: 1, shhp: 40},
      "10631": { n: "Rocket Launcher II", mg: 639, pmg: 140, mta: 5, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 17, pg: 4, rof: 4000, tl: 2, shhp: 40},
      "13931": { n: "Domination Rocket Launcher", mg: 639, pmg: 140, mta: 7, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 12, pg: 4, rof: 3875, tl: 1, shhp: 40},
      "13933": { n: "Dread Guristas Rocket Launcher", mg: 639, pmg: 140, mta: 8, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 17, pg: 3, rof: 3500, tl: 1, shhp: 40},
      "16065": { n: "Caldari Navy Rocket Launcher", mg: 639, pmg: 140, mta: 8, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 17, pg: 3, rof: 3500, tl: 1, shhp: 40},
      "16521": { n: "'Malkuth' Rocket Launcher I", mg: 639, pmg: 140, mta: 1, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 12, pg: 4, rof: 4750, tl: 1, shhp: 40},
      "16523": { n: "'Limos' Rocket Launcher I", mg: 639, pmg: 140, mta: 2, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 14, pg: 4, rof: 4500, tl: 1, shhp: 40},
      "16525": { n: "OE-5200 Rocket Launcher", mg: 639, pmg: 140, mta: 3, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 14, pg: 4, rof: 4250, tl: 1, shhp: 40},
      "16527": { n: "'Arbalest' Rocket Launcher I", mg: 639, pmg: 140, mta: 4, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 13, pg: 4, rof: 4000, tl: 1, shhp: 40},
      "17488": { n: "Republic Fleet Rocket Launcher", mg: 639, pmg: 140, mta: 7, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 12, pg: 4, rof: 3875, tl: 1, shhp: 40},
      "20593": { n: "'Balefire' Rocket Launcher", mg: 639, pmg: 140, mta: 6, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 13, pg: 4, rof: 4500, tl: 1, shhp: 40},
      "21542": { n: "N-1 Neon Type Rocket Bay", mg: 639, pmg: 140, mta: 6, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 13, pg: 4, rof: 4500, tl: 1, shhp: 40},
      "22564": { n: "True Sansha Rocket Launcher", mg: 639, pmg: 140, mta: 7, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 12, pg: 4, rof: 3875, tl: 1, shhp: 40},
      "28511": { n: "Khanid Navy Rocket Launcher", mg: 639, pmg: 140, mta: 8, d: "A tiny launcher that can carry a very limited supply of rockets. Not really intended as a primary weapon but rather as a cheap supplementary weapon system.", cpu: 17, pg: 3, rof: 3500, tl: 1, shhp: 40}
    },
    "509": {
      "499": { n: "Light Missile Launcher I", mg: 640, pmg: 140, mta: 0, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 21, pg: 6, rof: 15000, tl: 1, shhp: 40},
      "2404": { n: "Light Missile Launcher II", mg: 640, pmg: 140, mta: 5, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 24, pg: 7, rof: 12000, tl: 2, shhp: 40},
      "7993": { n: "Experimental TE-2100 Light Missile Launcher", mg: 640, pmg: 140, mta: 3, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 20, pg: 6, rof: 12750, tl: 1, r: 2, shhp: 40},
      "8089": { n: "Upgraded 'Malkuth' Light Missile Launcher", mg: 640, pmg: 140, mta: 1, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 16, pg: 6, rof: 14250, tl: 1, r: 4, shhp: 40},
      "8091": { n: "Limited 'Limos' Light Missile Launcher", mg: 640, pmg: 140, mta: 2, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.", cpu: 19, pg: 6, rof: 13500, tl: 1, r: 8, shhp: 40},
      "8093": { n: "Prototype 'Arbalest' Light Missile Launcher", mg: 640, pmg: 140, mta: 4, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 17, pg: 6, rof: 12000, tl: 1, r: 1, shhp: 40},
      "13925": { n: "Domination Light Missile Launcher", mg: 640, pmg: 140, mta: 7, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 16, pg: 6, rof: 11625, tl: 1, r: 1, shhp: 40},
      "13926": { n: "Dread Guristas Light Missile Launcher", mg: 640, pmg: 140, mta: 8, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 24, pg: 5, rof: 10500, tl: 1, r: 1, shhp: 40},
      "16068": { n: "Caldari Navy Light Missile Launcher", mg: 640, pmg: 140, mta: 8, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.", cpu: 24, pg: 5, rof: 10500, tl: 1, r: 1, shhp: 40},
      "17491": { n: "Republic Fleet Light Missile Launcher", mg: 640, pmg: 140, mta: 7, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 16, pg: 6, rof: 11625, tl: 1, r: 2, shhp: 40},
      "20595": { n: "'Gallows' Light Missile Launcher", mg: 640, pmg: 140, mta: 6, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 17, pg: 5, rof: 13500, tl: 1, shhp: 40},
      "22565": { n: "True Sansha Light Missile Launcher", mg: 640, pmg: 140, mta: 7, d: "Favored by many for its average capacity and firing rate. Useful in both fast attack raids and longer battles.\n\
", cpu: 16, pg: 6, rof: 11625, tl: 1, r: 1, shhp: 40}
    },
    "510": {
      "501": { n: "Heavy Missile Launcher I", mg: 642, pmg: 140, mta: 0, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 50, pg: 100, rof: 15000, tl: 1, shhp: 40},
      "2410": { n: "Heavy Missile Launcher II", mg: 642, pmg: 140, mta: 5, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 55, pg: 105, rof: 12000, tl: 2, shhp: 40},
      "7997": { n: "XR-3200 Heavy Missile Bay", mg: 642, pmg: 140, mta: 3, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 48, pg: 100, rof: 12750, tl: 1, r: 2, shhp: 40},
      "8101": { n: "'Malkuth' Heavy Missile Launcher I", mg: 642, pmg: 140, mta: 1, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 40, pg: 100, rof: 14250, tl: 1, r: 4, shhp: 40},
      "8103": { n: "Advanced 'Limos' Heavy Missile Bay I", mg: 642, pmg: 140, mta: 2, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 45, pg: 100, rof: 13500, tl: 1, r: 8, shhp: 40},
      "8105": { n: "'Arbalest' Heavy Missile Launcher", mg: 642, pmg: 140, mta: 4, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 43, pg: 100, rof: 12000, tl: 1, r: 1, shhp: 40},
      "13921": { n: "Domination Heavy Missile Launcher", mg: 642, pmg: 140, mta: 7, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 40, pg: 100, rof: 11625, tl: 1, r: 1, shhp: 40},
      "13922": { n: "Dread Guristas Heavy Missile Launcher", mg: 642, pmg: 140, mta: 8, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 55, pg: 90, rof: 10500, tl: 1, r: 1, shhp: 40},
      "16064": { n: "Caldari Navy Heavy Missile Launcher", mg: 642, pmg: 140, mta: 8, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 55, pg: 90, rof: 10500, tl: 1, r: 1, shhp: 40},
      "17487": { n: "Republic Fleet Heavy Missile Launcher", mg: 642, pmg: 140, mta: 7, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 40, pg: 100, rof: 11625, tl: 1, r: 2, shhp: 40},
      "20599": { n: "'Undertaker' Heavy Missile Launcher", mg: 642, pmg: 140, mta: 6, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 43, pg: 90, rof: 13500, tl: 1, shhp: 40},
      "22567": { n: "True Sansha Heavy Missile Launcher", mg: 642, pmg: 140, mta: 7, d: "Designed for long engagements between medium sized ships. Slow firing rate, but makes up for it with a large missile capacity.", cpu: 40, pg: 100, rof: 11625, tl: 1, r: 1, shhp: 40}
    },
    "511": {
      "1875": { n: "Rapid Light Missile Launcher I", mg: 641, pmg: 140, mta: 0, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 35, pg: 50, rof: 12000, tl: 1, shhp: 40},
      "1877": { n: "Rapid Light Missile Launcher II", mg: 641, pmg: 140, mta: 5, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular and advanced light missiles.", cpu: 39, pg: 53, rof: 9600, tl: 2, shhp: 40},
      "8007": { n: "Experimental SV-2000 Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 3, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 33, pg: 50, rof: 10200, tl: 1, r: 2, shhp: 40},
      "8023": { n: "Upgraded 'Malkuth' Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 1, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 28, pg: 50, rof: 11400, tl: 1, r: 4, shhp: 40},
      "8025": { n: "Limited 'Limos' Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 2, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 32, pg: 50, rof: 10800, tl: 1, r: 8, shhp: 40},
      "8027": { n: "Prototype 'Arbalest' Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 4, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 30, pg: 50, rof: 9600, tl: 1, r: 1, shhp: 40},
      "13919": { n: "Domination Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 7, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 28, pg: 50, rof: 9300, tl: 1, r: 1, shhp: 40},
      "13920": { n: "Dread Guristas Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 8, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 39, pg: 45, rof: 8400, tl: 1, r: 1, shhp: 40},
      "16061": { n: "Caldari Navy Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 8, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 39, pg: 45, rof: 8400, tl: 1, r: 1, shhp: 40},
      "17484": { n: "Republic Fleet Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 7, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 28, pg: 50, rof: 9300, tl: 1, r: 2, shhp: 40},
      "20597": { n: "'Pickaxe' Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 6, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 30, pg: 45, rof: 11800, tl: 1, shhp: 40},
      "22566": { n: "True Sansha Rapid Light Missile Launcher", mg: 641, pmg: 140, mta: 7, d: "Launcher for cruisers intended to counter fast frigates, can only be fitted with regular light missiles.", cpu: 28, pg: 50, rof: 9300, tl: 1, r: 1, shhp: 40}
    },
    "648": {
      "2817": { n: "Mjolnir Rage Rocket", mg: 930, pmg: 118, mta: 5, d: "A small rocket with an EMP warhead.\n\
\n\
This modified version of the Mjolnir rocket packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 44.6, exd: 0, kid: 0, thd: 0, lg: 507},
      "13119": { n: "Mjolnir Javelin Rocket", mg: 928, pmg: 118, mta: 5, d: "A small rocket with an EMP warhead.\n\
\n\
A modified version of the Mjolnir rocket. It can reach higher velocity than the Mjolnir rocket at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 29.7, exd: 0, kid: 0, thd: 0, lg: 507},
      "24471": { n: "Scourge Rage Rocket", mg: 930, pmg: 118, mta: 5, d: "A small rocket with a piercing warhead.\n\
\n\
This modified version of the Scourge rocket packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 0, kid: 44.6, thd: 0, lg: 507},
      "24473": { n: "Nova Rage Rocket", mg: 930, pmg: 118, mta: 5, d: "A small rocket with a nuclear warhead.\n\
\n\
This modified version of the Nova rocket packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 44.6, kid: 0, thd: 0, lg: 507},
      "24475": { n: "Inferno Rage Rocket", mg: 930, pmg: 118, mta: 5, d: "A small rocket with a plasma warhead.\n\
\n\
This modified version of the Inferno Rocket packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 0, kid: 0, thd: 44.6, lg: 507},
      "24477": { n: "Scourge Javelin Rocket", mg: 928, pmg: 118, mta: 5, d: "A small rocket with a piercing warhead.\n\
\n\
A modified version of the Scourge rocket. It can reach higher velocity than the Scourge rocket at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 0, kid: 29.7, thd: 0, lg: 507},
      "24478": { n: "Nova Javelin Rocket", mg: 928, pmg: 118, mta: 5, d: "A small rocket with a nuclear warhead.\n\
\n\
A modified version of the Nova rocket. It can reach higher velocity than the Nova rocket at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 29.7, kid: 0, thd: 0, lg: 507},
      "24479": { n: "Inferno Javelin Rocket", mg: 928, pmg: 118, mta: 5, d: "A small rocket with a plasma warhead.\n\
\n\
A modified version of the Inferno Rocket. It can reach higher velocity than the Inferno Rocket at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 0, kid: 0, thd: 29.7, lg: 507}
    },
    "653": {
      "2613": { n: "Mjolnir Fury Light Missile", mg: 927, pmg: 117, mta: 5, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.\n\
\n\
A modified version of the Mjolnir light missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 3750, emd: 116, exd: 0, kid: 0, thd: 0, lg: 509},
      "2647": { n: "Inferno Precision Light Missile", mg: 917, pmg: 117, mta: 5, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.\n\
\n\
A modified version of the Inferno light missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 83, lg: 509},
      "24495": { n: "Scourge Fury Light Missile", mg: 927, pmg: 117, mta: 5, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.\n\
\n\
A modified version of the Scourge light missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 116, thd: 0, lg: 509},
      "24497": { n: "Nova Fury Light Missile", mg: 927, pmg: 117, mta: 5, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.\n\
\n\
A modified version of the Nova light missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 116, kid: 0, thd: 0, lg: 509},
      "24499": { n: "Inferno Fury Light Missile", mg: 927, pmg: 117, mta: 5, d: "The explosion the Inferno light missile creates upon impact is stunning enough for any display of fireworks - just ten times more deadly.\n\
\n\
A modified version of the Inferno light missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 0, thd: 116, lg: 509},
      "24501": { n: "Scourge Precision Light Missile", mg: 917, pmg: 117, mta: 5, d: "From its humble beginnings in tiny Minmatar design labs, the Scourge light missile has quickly established itself throughout the star cluster as a premier missile for light launchers.\n\
\n\
A modified version of the Scourge light missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 0, kid: 83, thd: 0, lg: 509},
      "24503": { n: "Nova Precision Light Missile", mg: 917, pmg: 117, mta: 5, d: "The Nova light missile is a tiny nuclear projectile based on a classic Minmatar design that has been in use since the early days of the Minmatar Resistance.\n\
\n\
A modified version of the Nova light missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 3750, emd: 0, exd: 83, kid: 0, thd: 0, lg: 509},
      "24505": { n: "Mjolnir Precision Light Missile", mg: 917, pmg: 117, mta: 5, d: "An advanced missile with a volatile payload of magnetized plasma, the Mjolnir light missile is specifically engineered to take down shield systems.\n\
\n\
A modified version of the Mjolnir light missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 3750, emd: 83, exd: 0, kid: 0, thd: 0, lg: 509}
    },
    "654": {
      "2679": { n: "Scourge Rage Heavy Assault Missile", mg: 973, pmg: 968, mta: 5, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.\n\
\n\
This modified version of the Scourge Heavy Assault Missile packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 0, kid: 135, thd: 0, lg: 771},
      "13856": { n: "Nova Javelin Heavy Assault Missile", mg: 972, pmg: 968, mta: 5, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range. \n\
\n\
A modified version of the Nova Heavy Assault Missile. It can reach higher velocity than the Nova Heavy Assault Missile at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 90, kid: 0, thd: 0, lg: 771},
      "24486": { n: "Inferno Rage Heavy Assault Missile", mg: 973, pmg: 968, mta: 5, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.\n\
\n\
This modified version of the Inferno Heavy Assault Missile packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 0, kid: 0, thd: 135, lg: 771},
      "24488": { n: "Nova Rage Heavy Assault Missile", mg: 973, pmg: 968, mta: 5, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.\n\
\n\
This modified version of the Nova Heavy Assault Missile packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 0, exd: 135, kid: 0, thd: 0, lg: 771},
      "24490": { n: "Mjolnir Rage Heavy Assault Missile", mg: 973, pmg: 968, mta: 5, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.\n\
\n\
This modified version of the Mjolnir Heavy Assault Missile packs a considerably stronger punch, but as a result is heavier and slower. This makes it very effective against larger targets, but markedly less effective against smaller and more agile targets.", tl: 2, shhp: 70, vel: 1875, emd: 135, exd: 0, kid: 0, thd: 0, lg: 771},
      "24492": { n: "Scourge Javelin Heavy Assault Missile", mg: 972, pmg: 968, mta: 5, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range. \n\
\n\
A modified version of the Scourge Heavy Assault Missile. It can reach higher velocity than the Scourge Heavy Assault Missile at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 0, kid: 90, thd: 0, lg: 771},
      "24493": { n: "Mjolnir Javelin Heavy Assault Missile", mg: 972, pmg: 968, mta: 5, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.\n\
\n\
A modified version of the Mjolnir Heavy Assault Missile. It can reach higher velocity than the Mjolnir Heavy Assault Missile at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 90, exd: 0, kid: 0, thd: 0, lg: 771},
      "24494": { n: "Inferno Javelin Heavy Assault Missile", mg: 972, pmg: 968, mta: 5, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range. \n\
\n\
A modified version of the Inferno Heavy Assault Missile. It can reach higher velocity than the Inferno Heavy Assault Missile at the expense of warhead size.", tl: 2, shhp: 70, vel: 3375, emd: 0, exd: 0, kid: 0, thd: 90, lg: 771}
    },
    "655": {
      "2629": { n: "Scourge Fury Heavy Missile", mg: 926, pmg: 581, mta: 5, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.\n\
\n\
A modified version of the Scourge heavy missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 182, thd: 0, lg: 510},
      "2655": { n: "Nova Precision Heavy Missile", mg: 919, pmg: 581, mta: 5, d: "The be-all and end-all of medium-sized missiles, the Nova is a must for those who want a guaranteed kill no matter the cost.\n\
\n\
A modified version of the Nova heavy missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 135, kid: 0, thd: 0, lg: 510},
      "24507": { n: "Nova Fury Heavy Missile", mg: 926, pmg: 581, mta: 5, d: "The be-all and end-all of medium-sized missiles, the Nova heavy missile is a must for those who want a guaranteed kill no matter the cost.\n\
\n\
A modified version of the Nova heavy missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 182, kid: 0, thd: 0, lg: 510},
      "24509": { n: "Mjolnir Fury Heavy Missile", mg: 926, pmg: 581, mta: 5, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.\n\
\n\
A modified version of the Mjolnir heavy missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 4300, emd: 182, exd: 0, kid: 0, thd: 0, lg: 510},
      "24511": { n: "Inferno Fury Heavy Missile", mg: 926, pmg: 581, mta: 5, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.\n\
\n\
A modified version of the Inferno heavy missile. Does more damage than its predecessor but the volatile nature of the warhead, and its powerful containment system, reduce both flight time and precision.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 182, lg: 510},
      "24513": { n: "Scourge Precision Heavy Missile", mg: 919, pmg: 581, mta: 5, d: "The Scourge heavy missile is an old relic from the Caldari-Gallente War that is still in widespread use because of its low price and versatility.\n\
\n\
A modified version of the Scourge heavy missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 135, thd: 0, lg: 510},
      "24515": { n: "Inferno Precision Heavy Missile", mg: 919, pmg: 581, mta: 5, d: "Originally designed as a 'finisher' - the killing blow to a crippled ship - the Inferno heavy missile has since gone through various technological upgrades. The latest version has a lighter payload than the original, but much improved guidance systems.\n\
\n\
A modified version of the Inferno heavy missile. Great for taking down smaller ships, but fuel use by stabilization thrusters reduces maximum flight time.", tl: 2, shhp: 70, vel: 4300, emd: 0, exd: 0, kid: 0, thd: 135, lg: 510},
      "24517": { n: "Mjolnir Precision Heavy Missile", mg: 919, pmg: 581, mta: 5, d: "First introduced by the armaments lab of the Wiyrkomi Corporation, the Mjolnir heavy missile is a solid investment with a large payload and steady performance.\n\
\n\
A modified version of the Mjolnir heavy missile. Great for taking down smaller ships, but velocity has to be curbed to get a better launch.", tl: 2, shhp: 70, vel: 4300, emd: 135, exd: 0, kid: 0, thd: 0, lg: 510}
    },
    "763": {
      "1242": { n: "Basic Nanofiber Internal Structure", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, sshpm: 0.9, agim: -10.4, velm: 5.3},
      "2603": { n: "Nanofiber Internal Structure I", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, sshpm: 0.85, agim: -13.1, velm: 7.85},
      "2605": { n: "Nanofiber Internal Structure II", mg: 1196, pmg: 135, mta: 5, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, sshpm: 0.8, agim: -15.8, velm: 9.4},
      "5559": { n: "Partial Hull Conversion Nanofiber Structure", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 2, shhp: 40, sshpm: 0.9, agim: -12.55, velm: 6.3},
      "5561": { n: "Local Hull Conversion Nanofiber Structure I", mg: 1196, pmg: 135, mta: 4, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 2, shhp: 40, sshpm: 0.85, agim: -15.8, velm: 8.9},
      "5591": { n: "Alpha Hull Mod Nanofiber Structure", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 4, shhp: 40, sshpm: 0.9, agim: -12, velm: 6.05},
      "5593": { n: "Type-E Altered SS Nanofiber Structure", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 8, shhp: 40, sshpm: 0.9, agim: -11.5, velm: 5.75},
      "5595": { n: "Marked Modified SS Nanofiber Structure", mg: 1196, pmg: 135, mta: 0, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 1, shhp: 40, sshpm: 0.9, agim: -10.9, velm: 5.55},
      "5597": { n: "Beta Hull Mod Nanofiber Structure", mg: 1196, pmg: 135, mta: 3, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 4, shhp: 40, sshpm: 0.85, agim: -15.15, velm: 8.6},
      "5599": { n: "Type-D Altered SS Nanofiber Structure", mg: 1196, pmg: 135, mta: 2, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 8, shhp: 40, sshpm: 0.85, agim: -14.4, velm: 8.35},
      "5601": { n: "Mark I Modified SS Nanofiber Structure", mg: 1196, pmg: 135, mta: 1, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 1, shhp: 40, sshpm: 0.85, agim: -14, velm: 8.1},
      "14127": { n: "Domination Nanofiber Structure", mg: 1196, pmg: 135, mta: 8, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 2, shhp: 40, sshpm: 0.85, agim: -15.8, velm: 9.4},
      "15813": { n: "Republic Fleet Nanofiber Structure", mg: 1196, pmg: 135, mta: 8, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, r: 2, shhp: 40, sshpm: 0.85, agim: -15.8, velm: 9.4},
      "21500": { n: "Synthetic Hull Conversion Nanofiber Structure I", mg: 1196, pmg: 135, mta: 6, d: "Replaces some of the heavier structure components with lighter, but more fragile material. Increases ship's velocity and improves maneuverability at the expense of hull strength.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, sshpm: 0.9, agim: -15.8, velm: 8.6}
    },
    "771": {
      "20138": { n: "Heavy Assault Missile Launcher I", mg: 974, pmg: 140, mta: 0, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 45, pg: 108, rof: 8000, tl: 1, shhp: 40},
      "25707": { n: "Prototype 'Arbalest' Heavy Assault Missile Launcher I", mg: 974, pmg: 140, mta: 4, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations.", cpu: 39, pg: 108, rof: 6400, tl: 1, shhp: 40},
      "25709": { n: "Upgraded 'Malkuth' Heavy Assault Missile Launcher I", mg: 974, pmg: 140, mta: 1, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 36, pg: 108, rof: 7600, tl: 1, shhp: 40},
      "25711": { n: "Limited 'Limos' Heavy Assault Missile Launcher I", mg: 974, pmg: 140, mta: 2, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 41, pg: 108, rof: 7200, tl: 1, shhp: 40},
      "25713": { n: "Experimental XT-2800 Heavy Assault Missile Launcher I", mg: 974, pmg: 140, mta: 3, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 43, pg: 108, rof: 6800, tl: 1, shhp: 40},
      "25715": { n: "Heavy Assault Missile Launcher II", mg: 974, pmg: 140, mta: 5, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 50, pg: 113, rof: 6400, tl: 2, shhp: 40},
      "28375": { n: "Republic Fleet Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 7, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 36, pg: 108, rof: 6200, tl: 1, shhp: 40},
      "28377": { n: "Caldari Navy Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 8, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 49, pg: 97, rof: 5600, tl: 1, shhp: 40},
      "28379": { n: "Domination Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 7, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 36, pg: 108, rof: 6200, tl: 1, shhp: 40},
      "28381": { n: "Dread Guristas Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 8, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 49, pg: 97, rof: 5600, tl: 1, shhp: 40},
      "28383": { n: "True Sansha Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 7, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 36, pg: 108, rof: 6200, tl: 1, shhp: 40},
      "28565": { n: "Khanid Navy Heavy Assault Missile Launcher", mg: 974, pmg: 140, mta: 8, d: "A launcher intended for use on cruiser-class spacecraft. While assault launchers do not possess the sheer damage-dealing capability of regular heavy missile launchers, their blend of speed and attack power lends them application across a good range of tactical situations. ", cpu: 42, pg: 113, rof: 5600, tl: 1, shhp: 40}
    },
    "772": {
      "20306": { n: "Mjolnir Heavy Assault Missile", mg: 971, pmg: 968, mta: 0, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 100, exd: 0, kid: 0, thd: 0, lg: 771},
      "20307": { n: "Scourge Heavy Assault Missile", mg: 971, pmg: 968, mta: 0, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 100, thd: 0, lg: 771},
      "20308": { n: "Inferno Heavy Assault Missile", mg: 971, pmg: 968, mta: 0, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 100, lg: 771},
      "21867": { n: "Nova Heavy Assault Missile", mg: 971, pmg: 968, mta: 0, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 100, kid: 0, thd: 0, lg: 771},
      "27393": { n: "Guristas Nova Heavy Assault Missile", mg: 1003, pmg: 968, mta: 1, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 110, kid: 0, thd: 0, lg: 771},
      "27397": { n: "Dread Guristas Nova Heavy Assault Missile", mg: 1003, pmg: 968, mta: 3, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 120, kid: 0, thd: 0, lg: 771},
      "27401": { n: "Caldari Navy Nova Heavy Assault Missile", mg: 1003, pmg: 968, mta: 2, d: "A nuclear warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 115, kid: 0, thd: 0, lg: 771},
      "27403": { n: "Guristas Inferno Heavy Assault Missile", mg: 1003, pmg: 968, mta: 1, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 110, lg: 771},
      "27405": { n: "Caldari Navy Inferno Heavy Assault Missile", mg: 1003, pmg: 968, mta: 2, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 115, lg: 771},
      "27407": { n: "Dread Guristas Inferno Heavy Assault Missile", mg: 1003, pmg: 968, mta: 3, d: "A plasma warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 0, thd: 120, lg: 771},
      "27411": { n: "Guristas Scourge Heavy Assault Missile", mg: 1003, pmg: 968, mta: 1, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 110, thd: 0, lg: 771},
      "27413": { n: "Caldari Navy Scourge Heavy Assault Missile", mg: 1003, pmg: 968, mta: 2, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 115, thd: 0, lg: 771},
      "27415": { n: "Dread Guristas Scourge Heavy Assault Missile", mg: 1003, pmg: 968, mta: 3, d: "A kinetic warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 0, exd: 0, kid: 120, thd: 0, lg: 771},
      "27417": { n: "Guristas Mjolnir Heavy Assault Missile", mg: 1003, pmg: 968, mta: 1, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 110, exd: 0, kid: 0, thd: 0, lg: 771},
      "27419": { n: "Caldari Navy Mjolnir Heavy Assault Missile", mg: 1003, pmg: 968, mta: 2, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 115, exd: 0, kid: 0, thd: 0, lg: 771},
      "27421": { n: "Dread Guristas Mjolnir Heavy Assault Missile", mg: 1003, pmg: 968, mta: 3, d: "An EMP warhead designed for use with heavy assault launchers. Heavy assault missiles can be fired at a greater rate than heavy missiles, at the expense of effective range.", tl: 1, shhp: 70, vel: 2250, emd: 120, exd: 0, kid: 0, thd: 0, lg: 771}
    },
    "773": {
      "25736": { n: "Large Anti-EM Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, emdrb: -30, calbc: 50, drwbk: -10},
      "25888": { n: "Large Anti-Explosive Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, exdrb: -30, calbc: 50, drwbk: -10},
      "25890": { n: "Large Anti-Kinetic Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, kidrb: -30, calbc: 50, drwbk: -10},
      "25892": { n: "Large Anti-Thermic Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, thdrb: -30, calbc: 50, drwbk: -10},
      "25894": { n: "Large Trimark Armor Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 3, ahpbp: 15, calbc: 50, drwbk: -10},
      "25896": { n: "Large Auxiliary Nano Pump I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, calbc: 100, drwbk: 10},
      "25898": { n: "Large Nanobot Accelerator I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, calbc: 100, drwbk: 10},
      "25900": { n: "Large Remote Repair Augmentor I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: -10},
      "25902": { n: "Large Salvage Tackle I", mg: 1208, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: -10},
      "26286": { n: "Large Anti-EM Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, emdrb: -35, calbc: 75, drwbk: -10},
      "26288": { n: "Large Anti-Explosive Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, exdrb: -35, calbc: 75, drwbk: -10},
      "26290": { n: "Large Anti-Kinetic Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, kidrb: -35, calbc: 75, drwbk: -10},
      "26292": { n: "Large Anti-Thermic Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, thdrb: -35, calbc: 75, drwbk: -10},
      "26294": { n: "Large Auxiliary Nano Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, calbc: 150, drwbk: 10},
      "26296": { n: "Large Nanobot Accelerator II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, calbc: 150, drwbk: 10},
      "26298": { n: "Large Remote Repair Augmentor II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.\n\
", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: -10},
      "26300": { n: "Large Salvage Tackle II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: -10},
      "26302": { n: "Large Trimark Armor Pump II", mg: 1208, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 3, ahpbp: 20, calbc: 75, drwbk: -10},
      "27064": { n: "Capital Auxiliary Nano Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, calbc: 100, drwbk: 10},
      "27066": { n: "Capital Nanobot Accelerator II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, calbc: 150, drwbk: 10},
      "27068": { n: "Small Remote Repair Augmentor I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.\n\
", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: -10},
      "30987": { n: "Small Trimark Armor Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 1, ahpbp: 15, calbc: 50, drwbk: -10},
      "30993": { n: "Capital Trimark Armor Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 4, ahpbp: 15, calbc: 50, drwbk: -10},
      "30997": { n: "Small Anti-EM Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, emdrb: -30, calbc: 50, drwbk: -10},
      "30999": { n: "Medium Anti-EM Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, emdrb: -30, calbc: 50, drwbk: -10},
      "31001": { n: "Capital Anti-EM Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: -30, calbc: 50, drwbk: -10},
      "31003": { n: "Small Anti-EM Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, emdrb: -35, calbc: 75, drwbk: -10},
      "31005": { n: "Medium Anti-EM Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, emdrb: -35, calbc: 75, drwbk: -10},
      "31007": { n: "Capital Anti-EM Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor EM resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, emdrb: -35, calbc: 75, drwbk: -10},
      "31009": { n: "Small Anti-Explosive Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, exdrb: -30, calbc: 50, drwbk: -10},
      "31011": { n: "Medium Anti-Explosive Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, exdrb: -30, calbc: 50, drwbk: -10},
      "31013": { n: "Capital Anti-Explosive Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: -30, kidrb: 0, thdrb: 0, calbc: 50, drwbk: -10},
      "31015": { n: "Small Anti-Explosive Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, exdrb: -35, calbc: 75, drwbk: -10},
      "31017": { n: "Medium Anti-Explosive Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, exdrb: -35, calbc: 75, drwbk: -10},
      "31019": { n: "Capital Anti-Explosive Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor explosive resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, exdrb: -35, calbc: 75, drwbk: -10},
      "31021": { n: "Small Anti-Kinetic Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, kidrb: -30, calbc: 50, drwbk: -10},
      "31023": { n: "Medium Anti-Kinetic Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, kidrb: -30, calbc: 50, drwbk: -10},
      "31025": { n: "Capital Anti-Kinetic Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, kidrb: -30, calbc: 50, drwbk: -10},
      "31027": { n: "Small Anti-Kinetic Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, kidrb: -35, calbc: 75, drwbk: -10},
      "31029": { n: "Medium Anti-Kinetic Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, kidrb: -35, calbc: 75, drwbk: -10},
      "31031": { n: "Capital Anti-Kinetic Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor kinetic resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, kidrb: -35, calbc: 75, drwbk: -10},
      "31033": { n: "Small Anti-Thermic Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, thdrb: -30, calbc: 50, drwbk: -10},
      "31035": { n: "Medium Anti-Thermic Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, thdrb: -30, calbc: 50, drwbk: -10},
      "31037": { n: "Capital Anti-Thermic Pump I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, thdrb: -30, calbc: 50, drwbk: -10},
      "31039": { n: "Small Anti-Thermic Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, thdrb: -35, calbc: 75, drwbk: -10},
      "31041": { n: "Medium Anti-Thermic Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, thdrb: -35, calbc: 75, drwbk: -10},
      "31043": { n: "Capital Anti-Thermic Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor thermal resistance at the expense of max velocity.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, thdrb: -35, calbc: 75, drwbk: -10},
      "31045": { n: "Small Auxiliary Nano Pump I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, calbc: 100, drwbk: 10},
      "31047": { n: "Medium Auxiliary Nano Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, calbc: 100, drwbk: 10},
      "31049": { n: "Capital Auxiliary Nano Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, calbc: 150, drwbk: 10},
      "31051": { n: "Small Auxiliary Nano Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, calbc: 150, drwbk: 10},
      "31053": { n: "Medium Auxiliary Nano Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's armor repairer repair amount at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, calbc: 150, drwbk: 10},
      "31055": { n: "Medium Trimark Armor Pump I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 2, ahpbp: 15, calbc: 50, drwbk: -10},
      "31057": { n: "Small Trimark Armor Pump II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 1, ahpbp: 20, calbc: 75, drwbk: -10},
      "31059": { n: "Medium Trimark Armor Pump II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 2, ahpbp: 20, calbc: 75, drwbk: -10},
      "31061": { n: "Capital Trimark Armor Pump II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's total armor hit points at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 4, ahpbp: 20, calbc: 75, drwbk: -10},
      "31063": { n: "Small Nanobot Accelerator I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, calbc: 100, drwbk: 10},
      "31065": { n: "Medium Nanobot Accelerator I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, calbc: 100, drwbk: 10},
      "31067": { n: "Capital Nanobot Accelerator I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, calbc: 100, drwbk: 10},
      "31069": { n: "Small Nanobot Accelerator II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, calbc: 150, drwbk: 10},
      "31071": { n: "Medium Nanobot Accelerator II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to reduce a ship's armor repair cycle duration at the expense of increased power grid need for them.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, calbc: 150, drwbk: 10},
      "31073": { n: "Medium Remote Repair Augmentor I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.\n\
", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: -10},
      "31075": { n: "Capital Remote Repair Augmentor I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 4, calbc: 50, drwbk: -10},
      "31077": { n: "Small Remote Repair Augmentor II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: -10},
      "31079": { n: "Medium Remote Repair Augmentor II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: -10},
      "31081": { n: "Capital Remote Repair Augmentor II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to reduce the capacitor need for a ship's remote armor repair modules at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 4, calbc: 75, drwbk: -10},
      "31083": { n: "Small Salvage Tackle I", mg: 1206, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: -10},
      "31085": { n: "Medium Salvage Tackle I", mg: 1207, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: -10},
      "31087": { n: "Capital Salvage Tackle I", mg: 1730, pmg: 956, mta: 0, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 1, shhp: 40, rgsz: 4, calbc: 50, drwbk: -10},
      "31089": { n: "Small Salvage Tackle II", mg: 1206, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: -10},
      "31091": { n: "Medium Salvage Tackle II", mg: 1207, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: -10},
      "31093": { n: "Capital Salvage Tackle II", mg: 1730, pmg: 956, mta: 5, d: "This ship modification is designed to increase a ship's chance of salvage retrieval at the expense of max velocity.", tl: 2, shhp: 40, rgsz: 4, calbc: 75, drwbk: -10}
    },
    "774": {
      "25906": { n: "Large Core Defense Capacitor Safeguard I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: 10},
      "26076": { n: "Large Anti-EM Screen Reinforcer I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, emdrb: -30, calbc: 50, drwbk: 10},
      "26078": { n: "Large Anti-Explosive Screen Reinforcer I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, exdrb: -30, calbc: 50, drwbk: 10},
      "26080": { n: "Large Anti-Kinetic Screen Reinforcer I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, kidrb: -30, calbc: 50, drwbk: 10},
      "26082": { n: "Large Anti-Thermal Screen Reinforcer I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 3, thdrb: -30, calbc: 50, drwbk: 10},
      "26084": { n: "Large Core Defense Field Purger I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: 10},
      "26086": { n: "Large Core Defense Operational Solidifier I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 3, calbc: 100, drwbk: 10},
      "26088": { n: "Large Core Defense Field Extender I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: 10},
      "26090": { n: "Large Core Defense Charge Economizer I", mg: 1236, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 3, calbc: 50, drwbk: 10},
      "26436": { n: "Large Anti-EM Screen Reinforcer II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, emdrb: -35, calbc: 75, drwbk: 10},
      "26438": { n: "Large Anti-Explosive Screen Reinforcer II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, exdrb: -35, calbc: 75, drwbk: 10},
      "26440": { n: "Large Anti-Kinetic Screen Reinforcer II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, kidrb: -35, calbc: 75, drwbk: 10},
      "26442": { n: "Large Anti-Thermal Screen Reinforcer II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 3, thdrb: -35, calbc: 75, drwbk: 10},
      "26444": { n: "Large Core Defense Capacitor Safeguard II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: 10},
      "26446": { n: "Large Core Defense Charge Economizer II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: 10},
      "26448": { n: "Large Core Defense Field Extender II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: 10},
      "26450": { n: "Large Core Defense Field Purger II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 3, calbc: 75, drwbk: 10},
      "26452": { n: "Large Core Defense Operational Solidifier II", mg: 1236, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 3, calbc: 150, drwbk: 10},
      "31716": { n: "Small Anti-EM Screen Reinforcer I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, emdrb: -30, calbc: 50, drwbk: 10},
      "31718": { n: "Medium Anti-EM Screen Reinforcer I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, emdrb: -30, calbc: 50, drwbk: 10},
      "31720": { n: "Capital Anti-EM Screen Reinforcer I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: -30, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31722": { n: "Small Anti-EM Screen Reinforcer II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, emdrb: -35, calbc: 75, drwbk: 10},
      "31724": { n: "Medium Anti-EM Screen Reinforcer II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, emdrb: -35, calbc: 75, drwbk: 10},
      "31726": { n: "Capital Anti-EM Screen Reinforcer II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to increase the EM resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, emdrb: -35, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31728": { n: "Small Anti-Explosive Screen Reinforcer I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, exdrb: -30, calbc: 50, drwbk: 10},
      "31730": { n: "Medium Anti-Explosive Screen Reinforcer I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, exdrb: -30, calbc: 50, drwbk: 10},
      "31732": { n: "Capital Anti-Explosive Screen Reinforcer I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: -30, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31734": { n: "Small Anti-Explosive Screen Reinforcer II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, exdrb: -35, calbc: 75, drwbk: 10},
      "31736": { n: "Medium Anti-Explosive Screen Reinforcer II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, exdrb: -35, calbc: 75, drwbk: 10},
      "31738": { n: "Capital Anti-Explosive Screen Reinforcer II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to increase the explosive resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: -35, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31740": { n: "Small Anti-Kinetic Screen Reinforcer I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, kidrb: -30, calbc: 50, drwbk: 10},
      "31742": { n: "Medium Anti-Kinetic Screen Reinforcer I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, kidrb: -30, calbc: 50, drwbk: 10},
      "31744": { n: "Capital Anti-Kinetic Screen Reinforcer I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: -30, thdrb: 0, calbc: 50, drwbk: 10},
      "31746": { n: "Small Anti-Kinetic Screen Reinforcer II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, kidrb: -35, calbc: 75, drwbk: 10},
      "31748": { n: "Medium Anti-Kinetic Screen Reinforcer II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, kidrb: -35, calbc: 75, drwbk: 10},
      "31750": { n: "Capital Anti-Kinetic Screen Reinforcer II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to increase the kinetic resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: -35, thdrb: 0, calbc: 75, drwbk: 10},
      "31752": { n: "Small Anti-Thermal Screen Reinforcer I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 1, thdrb: -30, calbc: 50, drwbk: 10},
      "31754": { n: "Medium Anti-Thermal Screen Reinforcer I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 2, thdrb: -30, calbc: 50, drwbk: 10},
      "31756": { n: "Capital Anti-Thermal Screen Reinforcer I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: -30, calbc: 50, drwbk: 10},
      "31758": { n: "Small Anti-Thermal Screen Reinforcer II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 1, thdrb: -35, calbc: 75, drwbk: 10},
      "31760": { n: "Medium Anti-Thermal Screen Reinforcer II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 2, thdrb: -35, calbc: 75, drwbk: 10},
      "31762": { n: "Capital Anti-Thermal Screen Reinforcer II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to increase the thermal resistance of ship shields at the expense of increased signature radius.\n\
\n\
Penalty: Using more than one type of this module or similar modules that affect the same attribute on the ship will be penalized.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: -35, calbc: 75, drwbk: 10},
      "31764": { n: "Small Core Defense Capacitor Safeguard I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: 10},
      "31766": { n: "Medium Core Defense Capacitor Safeguard I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.\n\
", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: 10},
      "31768": { n: "Capital Core Defense Capacitor Safeguard I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31770": { n: "Small Core Defense Capacitor Safeguard II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: 10},
      "31772": { n: "Medium Core Defense Capacitor Safeguard II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: 10},
      "31774": { n: "Capital Core Defense Capacitor Safeguard II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the capacitor need of modules which require shield operation skills at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31776": { n: "Small Core Defense Charge Economizer I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: 10},
      "31778": { n: "Medium Core Defense Charge Economizer I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: 10},
      "31780": { n: "Capital Core Defense Charge Economizer I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31782": { n: "Small Core Defense Charge Economizer II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: 10},
      "31784": { n: "Medium Core Defense Charge Economizer II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: 10},
      "31786": { n: "Capital Core Defense Charge Economizer II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the power need of all shield upgrade modules at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31788": { n: "Small Core Defense Field Extender I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: 10},
      "31790": { n: "Medium Core Defense Field Extender I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: 10},
      "31792": { n: "Capital Core Defense Field Extender I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31794": { n: "Small Core Defense Field Extender II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: 10},
      "31796": { n: "Medium Core Defense Field Extender II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: 10},
      "31798": { n: "Capital Core Defense Field Extender II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to increase shield capacity at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31800": { n: "Small Core Defense Field Purger I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 1, calbc: 50, drwbk: 10},
      "31802": { n: "Medium Core Defense Field Purger I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 2, calbc: 50, drwbk: 10},
      "31804": { n: "Capital Core Defense Field Purger I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 50, drwbk: 10},
      "31810": { n: "Small Core Defense Field Purger II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 1, calbc: 75, drwbk: 10},
      "31812": { n: "Medium Core Defense Field Purger II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 2, calbc: 75, drwbk: 10},
      "31814": { n: "Capital Core Defense Field Purger II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to improve shield recharge rate at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 75, drwbk: 10},
      "31816": { n: "Small Core Defense Operational Solidifier I", mg: 1234, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 1, calbc: 100, drwbk: 10},
      "31818": { n: "Medium Core Defense Operational Solidifier I", mg: 1235, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 2, calbc: 100, drwbk: 10},
      "31820": { n: "Capital Core Defense Operational Solidifier I", mg: 1732, pmg: 965, mta: 0, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 1, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 100, drwbk: 10},
      "31822": { n: "Small Core Defense Operational Solidifier II", mg: 1234, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 1, calbc: 150, drwbk: 10},
      "31824": { n: "Medium Core Defense Operational Solidifier II", mg: 1235, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 2, calbc: 150, drwbk: 10},
      "31826": { n: "Capital Core Defense Operational Solidifier II", mg: 1732, pmg: 965, mta: 5, d: "This ship modification is designed to reduce the duration of shield booster cycles at the expense of increased signature radius.", tl: 2, shhp: 40, rgsz: 4, emdrb: 0, exdrb: 0, kidrb: 0, thdrb: 0, calbc: 150, drwbk: 10}
    }
  };
  export var TypeToGroupIDMapping = {
    "582": 25,
    "583": 25,
    "584": 25,
    "585": 25,
    "586": 25,
    "587": 25,
    "589": 25,
    "590": 25,
    "591": 25,
    "592": 25,
    "593": 25,
    "594": 25,
    "595": 25,
    "597": 25,
    "598": 25,
    "599": 25,
    "600": 25,
    "602": 25,
    "603": 25,
    "605": 25,
    "607": 25,
    "608": 25,
    "609": 25,
    "610": 25,
    "611": 25,
    "613": 25,
    "614": 25,
    "616": 25,
    "618": 25,
    "619": 25,
    "1896": 25,
    "1898": 25,
    "1900": 25,
    "1902": 25,
    "2161": 25,
    "3532": 25,
    "3751": 25,
    "3753": 25,
    "3766": 25,
    "3768": 25,
    "11019": 25,
    "11940": 25,
    "11942": 25,
    "17360": 25,
    "17619": 25,
    "17703": 25,
    "17705": 25,
    "17707": 25,
    "17812": 25,
    "17841": 25,
    "17924": 25,
    "17926": 25,
    "17928": 25,
    "17930": 25,
    "17932": 25,
    "29248": 25,
    "32880": 25,
    "32983": 25,
    "32985": 25,
    "32987": 25,
    "32989": 25,
    "33190": 25,
    "434": 46,
    "438": 46,
    "439": 46,
    "440": 46,
    "5945": 46,
    "5955": 46,
    "5971": 46,
    "5973": 46,
    "5975": 46,
    "6001": 46,
    "6003": 46,
    "6005": 46,
    "12052": 46,
    "12054": 46,
    "12056": 46,
    "12058": 46,
    "12066": 46,
    "12068": 46,
    "12076": 46,
    "12084": 46,
    "14102": 46,
    "14104": 46,
    "14106": 46,
    "14108": 46,
    "14110": 46,
    "14112": 46,
    "14114": 46,
    "14116": 46,
    "14118": 46,
    "14120": 46,
    "14122": 46,
    "14124": 46,
    "14484": 46,
    "14486": 46,
    "14488": 46,
    "14490": 46,
    "14492": 46,
    "14494": 46,
    "14496": 46,
    "14498": 46,
    "14500": 46,
    "14502": 46,
    "14504": 46,
    "14506": 46,
    "14508": 46,
    "14510": 46,
    "14512": 46,
    "14514": 46,
    "15747": 46,
    "15749": 46,
    "15751": 46,
    "15753": 46,
    "15755": 46,
    "15757": 46,
    "15759": 46,
    "15761": 46,
    "15764": 46,
    "15766": 46,
    "15768": 46,
    "15770": 46,
    "18658": 46,
    "18660": 46,
    "18662": 46,
    "18664": 46,
    "18666": 46,
    "18668": 46,
    "18670": 46,
    "18672": 46,
    "18674": 46,
    "18676": 46,
    "18680": 46,
    "18682": 46,
    "18684": 46,
    "18686": 46,
    "18688": 46,
    "18690": 46,
    "18692": 46,
    "18694": 46,
    "18696": 46,
    "18698": 46,
    "19313": 46,
    "19315": 46,
    "19317": 46,
    "19319": 46,
    "19321": 46,
    "19323": 46,
    "19325": 46,
    "19327": 46,
    "19329": 46,
    "19335": 46,
    "19337": 46,
    "19339": 46,
    "19341": 46,
    "19343": 46,
    "19345": 46,
    "19347": 46,
    "19349": 46,
    "19351": 46,
    "19353": 46,
    "19359": 46,
    "19491": 46,
    "21470": 46,
    "21472": 46,
    "21474": 46,
    "21476": 46,
    "21478": 46,
    "21480": 46,
    "21857": 46,
    "447": 52,
    "448": 52,
    "3242": 52,
    "3244": 52,
    "5399": 52,
    "5401": 52,
    "5403": 52,
    "5405": 52,
    "5439": 52,
    "5441": 52,
    "5443": 52,
    "5445": 52,
    "14242": 52,
    "14244": 52,
    "14246": 52,
    "14248": 52,
    "14250": 52,
    "14252": 52,
    "14254": 52,
    "14256": 52,
    "14258": 52,
    "14260": 52,
    "14656": 52,
    "14658": 52,
    "14660": 52,
    "14662": 52,
    "14664": 52,
    "14666": 52,
    "14668": 52,
    "14670": 52,
    "15431": 52,
    "15433": 52,
    "15887": 52,
    "15889": 52,
    "15891": 52,
    "15893": 52,
    "16140": 52,
    "21510": 52,
    "21512": 52,
    "22476": 52,
    "28516": 52,
    "28518": 52,
    "32459": 52,
    "450": 53,
    "451": 53,
    "452": 53,
    "453": 53,
    "454": 53,
    "455": 53,
    "456": 53,
    "457": 53,
    "458": 53,
    "459": 53,
    "460": 53,
    "461": 53,
    "462": 53,
    "463": 53,
    "464": 53,
    "2985": 53,
    "2993": 53,
    "3001": 53,
    "3009": 53,
    "3017": 53,
    "3025": 53,
    "3033": 53,
    "3041": 53,
    "3049": 53,
    "3057": 53,
    "3065": 53,
    "3285": 53,
    "3512": 53,
    "3520": 53,
    "3559": 53,
    "3561": 53,
    "3634": 53,
    "3636": 53,
    "3638": 53,
    "3640": 53,
    "4044": 53,
    "4045": 53,
    "4049": 53,
    "4147": 53,
    "5175": 53,
    "5177": 53,
    "5179": 53,
    "5181": 53,
    "5215": 53,
    "5217": 53,
    "5219": 53,
    "5221": 53,
    "6631": 53,
    "6633": 53,
    "6635": 53,
    "6637": 53,
    "6671": 53,
    "6673": 53,
    "6675": 53,
    "6677": 53,
    "6715": 53,
    "6717": 53,
    "6719": 53,
    "6721": 53,
    "6757": 53,
    "6759": 53,
    "6761": 53,
    "6763": 53,
    "6805": 53,
    "6807": 53,
    "6809": 53,
    "6811": 53,
    "6859": 53,
    "6861": 53,
    "6863": 53,
    "6865": 53,
    "6919": 53,
    "6921": 53,
    "6923": 53,
    "6925": 53,
    "6959": 53,
    "6961": 53,
    "6963": 53,
    "6965": 53,
    "6999": 53,
    "7001": 53,
    "7003": 53,
    "7005": 53,
    "7043": 53,
    "7045": 53,
    "7047": 53,
    "7049": 53,
    "7083": 53,
    "7085": 53,
    "7087": 53,
    "7089": 53,
    "7123": 53,
    "7125": 53,
    "7127": 53,
    "7131": 53,
    "7167": 53,
    "7169": 53,
    "7171": 53,
    "7173": 53,
    "13791": 53,
    "13793": 53,
    "13795": 53,
    "13797": 53,
    "13799": 53,
    "13801": 53,
    "13803": 53,
    "13805": 53,
    "13807": 53,
    "13809": 53,
    "13811": 53,
    "13813": 53,
    "13815": 53,
    "13817": 53,
    "13819": 53,
    "13820": 53,
    "13821": 53,
    "13822": 53,
    "13823": 53,
    "13824": 53,
    "13825": 53,
    "13826": 53,
    "13827": 53,
    "13828": 53,
    "13829": 53,
    "13830": 53,
    "13831": 53,
    "13832": 53,
    "13833": 53,
    "13834": 53,
    "14417": 53,
    "14419": 53,
    "14421": 53,
    "14423": 53,
    "14425": 53,
    "14427": 53,
    "14429": 53,
    "14431": 53,
    "14433": 53,
    "14435": 53,
    "14437": 53,
    "14439": 53,
    "14441": 53,
    "14443": 53,
    "14445": 53,
    "14447": 53,
    "14449": 53,
    "14451": 53,
    "14453": 53,
    "14455": 53,
    "15399": 53,
    "15401": 53,
    "15403": 53,
    "15427": 53,
    "15429": 53,
    "15845": 53,
    "15846": 53,
    "15847": 53,
    "15848": 53,
    "15849": 53,
    "15850": 53,
    "15851": 53,
    "15852": 53,
    "15853": 53,
    "15854": 53,
    "15855": 53,
    "15856": 53,
    "15857": 53,
    "15858": 53,
    "15859": 53,
    "15860": 53,
    "15861": 53,
    "15862": 53,
    "15863": 53,
    "15864": 53,
    "15865": 53,
    "15866": 53,
    "15867": 53,
    "15868": 53,
    "15869": 53,
    "15870": 53,
    "15871": 53,
    "15872": 53,
    "15873": 53,
    "15874": 53,
    "16128": 53,
    "16129": 53,
    "16131": 53,
    "20444": 53,
    "20446": 53,
    "23834": 53,
    "23836": 53,
    "23838": 53,
    "23840": 53,
    "23842": 53,
    "23844": 53,
    "23846": 53,
    "23848": 53,
    "23850": 53,
    "484": 55,
    "485": 55,
    "486": 55,
    "487": 55,
    "488": 55,
    "489": 55,
    "490": 55,
    "491": 55,
    "492": 55,
    "493": 55,
    "494": 55,
    "495": 55,
    "496": 55,
    "497": 55,
    "498": 55,
    "2865": 55,
    "2873": 55,
    "2881": 55,
    "2889": 55,
    "2897": 55,
    "2905": 55,
    "2913": 55,
    "2921": 55,
    "2929": 55,
    "2937": 55,
    "2945": 55,
    "2953": 55,
    "2961": 55,
    "2969": 55,
    "2977": 55,
    "3571": 55,
    "3573": 55,
    "8759": 55,
    "8785": 55,
    "8787": 55,
    "8789": 55,
    "8815": 55,
    "8817": 55,
    "8819": 55,
    "8821": 55,
    "8863": 55,
    "8865": 55,
    "8867": 55,
    "8869": 55,
    "8903": 55,
    "8905": 55,
    "8907": 55,
    "8909": 55,
    "9071": 55,
    "9073": 55,
    "9091": 55,
    "9093": 55,
    "9127": 55,
    "9129": 55,
    "9131": 55,
    "9133": 55,
    "9135": 55,
    "9137": 55,
    "9139": 55,
    "9141": 55,
    "9207": 55,
    "9209": 55,
    "9211": 55,
    "9213": 55,
    "9247": 55,
    "9249": 55,
    "9251": 55,
    "9253": 55,
    "9287": 55,
    "9289": 55,
    "9291": 55,
    "9293": 55,
    "9327": 55,
    "9329": 55,
    "9331": 55,
    "9333": 55,
    "9367": 55,
    "9369": 55,
    "9371": 55,
    "9373": 55,
    "9377": 55,
    "9411": 55,
    "9413": 55,
    "9415": 55,
    "9417": 55,
    "9419": 55,
    "9421": 55,
    "9451": 55,
    "9453": 55,
    "9455": 55,
    "9457": 55,
    "9491": 55,
    "9493": 55,
    "9495": 55,
    "9497": 55,
    "13773": 55,
    "13774": 55,
    "13775": 55,
    "13776": 55,
    "13777": 55,
    "13778": 55,
    "13779": 55,
    "13781": 55,
    "13782": 55,
    "13783": 55,
    "13784": 55,
    "13785": 55,
    "13786": 55,
    "13787": 55,
    "13788": 55,
    "14457": 55,
    "14459": 55,
    "14461": 55,
    "14463": 55,
    "14465": 55,
    "14467": 55,
    "14469": 55,
    "14471": 55,
    "14473": 55,
    "14475": 55,
    "15443": 55,
    "15445": 55,
    "16046": 55,
    "16047": 55,
    "16048": 55,
    "16049": 55,
    "16050": 55,
    "16051": 55,
    "16052": 55,
    "16053": 55,
    "16054": 55,
    "16055": 55,
    "16056": 55,
    "16057": 55,
    "16058": 55,
    "16059": 55,
    "16060": 55,
    "16148": 55,
    "16149": 55,
    "16150": 55,
    "20452": 55,
    "20454": 55,
    "21545": 55,
    "21547": 55,
    "21549": 55,
    "21551": 55,
    "21553": 55,
    "21555": 55,
    "21557": 55,
    "21559": 55,
    "21561": 55,
    "521": 60,
    "2046": 60,
    "2048": 60,
    "5829": 60,
    "5831": 60,
    "5833": 60,
    "5835": 60,
    "5837": 60,
    "5839": 60,
    "5841": 60,
    "5843": 60,
    "22893": 60,
    "23418": 60,
    "30839": 60,
    "523": 62,
    "1183": 62,
    "3528": 62,
    "3530": 62,
    "3534": 62,
    "3538": 62,
    "3540": 62,
    "4529": 62,
    "4531": 62,
    "4533": 62,
    "4535": 62,
    "4569": 62,
    "4571": 62,
    "4573": 62,
    "4575": 62,
    "4579": 62,
    "4609": 62,
    "4611": 62,
    "4613": 62,
    "4615": 62,
    "4621": 62,
    "13955": 62,
    "13956": 62,
    "13957": 62,
    "13958": 62,
    "13959": 62,
    "13960": 62,
    "13962": 62,
    "13963": 62,
    "13964": 62,
    "14067": 62,
    "14068": 62,
    "14069": 62,
    "14552": 62,
    "14554": 62,
    "14848": 62,
    "14849": 62,
    "14850": 62,
    "14851": 62,
    "14852": 62,
    "14853": 62,
    "14854": 62,
    "14855": 62,
    "15160": 62,
    "15161": 62,
    "15162": 62,
    "15163": 62,
    "15741": 62,
    "15742": 62,
    "15743": 62,
    "15744": 62,
    "15745": 62,
    "15746": 62,
    "17492": 62,
    "17493": 62,
    "17494": 62,
    "17546": 62,
    "17547": 62,
    "17548": 62,
    "18999": 62,
    "19001": 62,
    "19003": 62,
    "19005": 62,
    "19007": 62,
    "19009": 62,
    "19011": 62,
    "19013": 62,
    "19015": 62,
    "19017": 62,
    "19019": 62,
    "19021": 62,
    "19023": 62,
    "19025": 62,
    "19027": 62,
    "19029": 62,
    "19031": 62,
    "19033": 62,
    "19035": 62,
    "19036": 62,
    "19037": 62,
    "19038": 62,
    "19039": 62,
    "19040": 62,
    "19041": 62,
    "19042": 62,
    "19043": 62,
    "19044": 62,
    "19045": 62,
    "19046": 62,
    "20701": 62,
    "21853": 62,
    "22887": 62,
    "22889": 62,
    "22891": 62,
    "23795": 62,
    "23797": 62,
    "23799": 62,
    "28544": 62,
    "28549": 62,
    "28556": 62,
    "526": 65,
    "527": 65,
    "4025": 65,
    "4027": 65,
    "4029": 65,
    "4031": 65,
    "14262": 65,
    "14264": 65,
    "14266": 65,
    "14268": 65,
    "14270": 65,
    "14648": 65,
    "14650": 65,
    "14652": 65,
    "14654": 65,
    "15419": 65,
    "17500": 65,
    "17559": 65,
    "28514": 65,
    "30328": 65,
    "561": 74,
    "562": 74,
    "563": 74,
    "564": 74,
    "565": 74,
    "566": 74,
    "567": 74,
    "568": 74,
    "569": 74,
    "570": 74,
    "571": 74,
    "572": 74,
    "573": 74,
    "574": 74,
    "575": 74,
    "3074": 74,
    "3082": 74,
    "3090": 74,
    "3098": 74,
    "3106": 74,
    "3114": 74,
    "3122": 74,
    "3130": 74,
    "3138": 74,
    "3146": 74,
    "3154": 74,
    "3162": 74,
    "3170": 74,
    "3178": 74,
    "3186": 74,
    "3546": 74,
    "3550": 74,
    "7247": 74,
    "7249": 74,
    "7251": 74,
    "7253": 74,
    "7287": 74,
    "7289": 74,
    "7291": 74,
    "7293": 74,
    "7327": 74,
    "7329": 74,
    "7331": 74,
    "7333": 74,
    "7367": 74,
    "7369": 74,
    "7371": 74,
    "7373": 74,
    "7407": 74,
    "7409": 74,
    "7411": 74,
    "7413": 74,
    "7447": 74,
    "7449": 74,
    "7451": 74,
    "7453": 74,
    "7487": 74,
    "7489": 74,
    "7491": 74,
    "7493": 74,
    "7535": 74,
    "7537": 74,
    "7539": 74,
    "7541": 74,
    "7579": 74,
    "7581": 74,
    "7583": 74,
    "7585": 74,
    "7619": 74,
    "7621": 74,
    "7623": 74,
    "7625": 74,
    "7663": 74,
    "7665": 74,
    "7667": 74,
    "7669": 74,
    "7703": 74,
    "7705": 74,
    "7707": 74,
    "7709": 74,
    "7743": 74,
    "7745": 74,
    "7747": 74,
    "7749": 74,
    "7783": 74,
    "7785": 74,
    "7787": 74,
    "7789": 74,
    "7827": 74,
    "7829": 74,
    "7831": 74,
    "7833": 74,
    "10678": 74,
    "10680": 74,
    "10688": 74,
    "10690": 74,
    "10692": 74,
    "10694": 74,
    "12344": 74,
    "12346": 74,
    "12354": 74,
    "12356": 74,
    "13864": 74,
    "13865": 74,
    "13866": 74,
    "13867": 74,
    "13868": 74,
    "13870": 74,
    "13872": 74,
    "13873": 74,
    "13874": 74,
    "13876": 74,
    "13878": 74,
    "13879": 74,
    "13880": 74,
    "13881": 74,
    "13882": 74,
    "13883": 74,
    "13884": 74,
    "13885": 74,
    "13886": 74,
    "13887": 74,
    "13888": 74,
    "13889": 74,
    "13890": 74,
    "13891": 74,
    "13892": 74,
    "13893": 74,
    "13894": 74,
    "14272": 74,
    "14274": 74,
    "14276": 74,
    "14278": 74,
    "14280": 74,
    "14282": 74,
    "14284": 74,
    "14286": 74,
    "14375": 74,
    "14377": 74,
    "14379": 74,
    "14381": 74,
    "14383": 74,
    "14385": 74,
    "14387": 74,
    "14389": 74,
    "14391": 74,
    "14393": 74,
    "14395": 74,
    "14397": 74,
    "14399": 74,
    "14401": 74,
    "14403": 74,
    "14405": 74,
    "14407": 74,
    "14409": 74,
    "14411": 74,
    "14413": 74,
    "14415": 74,
    "15421": 74,
    "15423": 74,
    "15814": 74,
    "15815": 74,
    "15816": 74,
    "15817": 74,
    "15818": 74,
    "15820": 74,
    "15821": 74,
    "15823": 74,
    "15824": 74,
    "15825": 74,
    "15826": 74,
    "15827": 74,
    "15828": 74,
    "15829": 74,
    "15830": 74,
    "15831": 74,
    "15832": 74,
    "15833": 74,
    "15834": 74,
    "15835": 74,
    "15836": 74,
    "15837": 74,
    "15838": 74,
    "15840": 74,
    "15841": 74,
    "15843": 74,
    "15844": 74,
    "16132": 74,
    "16133": 74,
    "16134": 74,
    "20448": 74,
    "20450": 74,
    "20587": 74,
    "20589": 74,
    "20591": 74,
    "22899": 74,
    "22901": 74,
    "22903": 74,
    "22905": 74,
    "22907": 74,
    "22909": 74,
    "22911": 74,
    "22913": 74,
    "22915": 74,
    "178": 83,
    "179": 83,
    "180": 83,
    "181": 83,
    "182": 83,
    "183": 83,
    "184": 83,
    "185": 83,
    "186": 83,
    "187": 83,
    "188": 83,
    "189": 83,
    "190": 83,
    "191": 83,
    "192": 83,
    "193": 83,
    "194": 83,
    "195": 83,
    "196": 83,
    "197": 83,
    "198": 83,
    "199": 83,
    "200": 83,
    "201": 83,
    "17664": 83,
    "17666": 83,
    "17668": 83,
    "17670": 83,
    "17672": 83,
    "17674": 83,
    "17676": 83,
    "17678": 83,
    "19970": 83,
    "19972": 83,
    "19974": 83,
    "19976": 83,
    "19986": 83,
    "19988": 83,
    "19990": 83,
    "19992": 83,
    "19994": 83,
    "19996": 83,
    "19998": 83,
    "20000": 83,
    "20002": 83,
    "20004": 83,
    "20006": 83,
    "20008": 83,
    "20721": 83,
    "20723": 83,
    "20725": 83,
    "20727": 83,
    "20729": 83,
    "20731": 83,
    "20733": 83,
    "20735": 83,
    "20737": 83,
    "20739": 83,
    "20741": 83,
    "20743": 83,
    "20745": 83,
    "20747": 83,
    "20749": 83,
    "20751": 83,
    "20753": 83,
    "20755": 83,
    "20757": 83,
    "20759": 83,
    "20761": 83,
    "20763": 83,
    "20765": 83,
    "20767": 83,
    "20769": 83,
    "20771": 83,
    "20773": 83,
    "20775": 83,
    "20777": 83,
    "20779": 83,
    "20781": 83,
    "20783": 83,
    "20785": 83,
    "20787": 83,
    "20789": 83,
    "20791": 83,
    "20793": 83,
    "20795": 83,
    "20797": 83,
    "20799": 83,
    "20801": 83,
    "20803": 83,
    "20805": 83,
    "20807": 83,
    "20809": 83,
    "20811": 83,
    "20813": 83,
    "20815": 83,
    "21894": 83,
    "21896": 83,
    "21898": 83,
    "21900": 83,
    "21902": 83,
    "21904": 83,
    "21906": 83,
    "21908": 83,
    "21910": 83,
    "21912": 83,
    "21914": 83,
    "21916": 83,
    "21918": 83,
    "21920": 83,
    "21922": 83,
    "21924": 83,
    "21926": 83,
    "21928": 83,
    "21931": 83,
    "21933": 83,
    "21935": 83,
    "21937": 83,
    "21939": 83,
    "21941": 83,
    "28324": 83,
    "28326": 83,
    "28328": 83,
    "28330": 83,
    "28332": 83,
    "28334": 83,
    "28336": 83,
    "28338": 83,
    "32801": 83,
    "215": 85,
    "216": 85,
    "217": 85,
    "218": 85,
    "219": 85,
    "220": 85,
    "221": 85,
    "222": 85,
    "223": 85,
    "224": 85,
    "225": 85,
    "226": 85,
    "227": 85,
    "228": 85,
    "229": 85,
    "230": 85,
    "231": 85,
    "232": 85,
    "233": 85,
    "234": 85,
    "235": 85,
    "236": 85,
    "237": 85,
    "238": 85,
    "17648": 85,
    "17650": 85,
    "17652": 85,
    "17654": 85,
    "17656": 85,
    "17658": 85,
    "17660": 85,
    "17662": 85,
    "19962": 85,
    "19964": 85,
    "19966": 85,
    "19968": 85,
    "20034": 85,
    "20036": 85,
    "20038": 85,
    "20040": 85,
    "20043": 85,
    "20045": 85,
    "20047": 85,
    "20049": 85,
    "20051": 85,
    "20053": 85,
    "20055": 85,
    "20057": 85,
    "20913": 85,
    "20915": 85,
    "20917": 85,
    "20919": 85,
    "20921": 85,
    "20923": 85,
    "20925": 85,
    "20927": 85,
    "20929": 85,
    "20931": 85,
    "20933": 85,
    "20935": 85,
    "20937": 85,
    "20939": 85,
    "20941": 85,
    "20943": 85,
    "20945": 85,
    "20947": 85,
    "20949": 85,
    "20951": 85,
    "20953": 85,
    "20955": 85,
    "20957": 85,
    "20959": 85,
    "20961": 85,
    "20963": 85,
    "20965": 85,
    "20967": 85,
    "20969": 85,
    "20971": 85,
    "20973": 85,
    "20975": 85,
    "20977": 85,
    "20979": 85,
    "20981": 85,
    "20983": 85,
    "20985": 85,
    "20987": 85,
    "20989": 85,
    "20991": 85,
    "20993": 85,
    "20995": 85,
    "20997": 85,
    "20999": 85,
    "21001": 85,
    "21003": 85,
    "21005": 85,
    "21007": 85,
    "21320": 85,
    "21322": 85,
    "21324": 85,
    "21326": 85,
    "21328": 85,
    "21330": 85,
    "21332": 85,
    "21334": 85,
    "21336": 85,
    "21338": 85,
    "21340": 85,
    "21342": 85,
    "21344": 85,
    "21346": 85,
    "21348": 85,
    "21350": 85,
    "21352": 85,
    "21354": 85,
    "21356": 85,
    "21358": 85,
    "21360": 85,
    "21362": 85,
    "21364": 85,
    "21366": 85,
    "21368": 85,
    "21370": 85,
    "21372": 85,
    "21374": 85,
    "21376": 85,
    "21378": 85,
    "21380": 85,
    "21382": 85,
    "21384": 85,
    "21386": 85,
    "21388": 85,
    "21390": 85,
    "21392": 85,
    "21394": 85,
    "21396": 85,
    "21398": 85,
    "21400": 85,
    "21402": 85,
    "21404": 85,
    "21406": 85,
    "21408": 85,
    "21410": 85,
    "21412": 85,
    "21414": 85,
    "21416": 85,
    "21418": 85,
    "21420": 85,
    "21422": 85,
    "21424": 85,
    "21426": 85,
    "21428": 85,
    "21430": 85,
    "21432": 85,
    "21434": 85,
    "21436": 85,
    "21438": 85,
    "21440": 85,
    "21442": 85,
    "21444": 85,
    "21446": 85,
    "21740": 85,
    "22961": 85,
    "22963": 85,
    "22965": 85,
    "22967": 85,
    "22969": 85,
    "22971": 85,
    "22973": 85,
    "22975": 85,
    "22977": 85,
    "22979": 85,
    "22981": 85,
    "22983": 85,
    "22985": 85,
    "22987": 85,
    "22989": 85,
    "22991": 85,
    "22993": 85,
    "22995": 85,
    "22997": 85,
    "22999": 85,
    "23001": 85,
    "23003": 85,
    "23005": 85,
    "23007": 85,
    "23009": 85,
    "23011": 85,
    "23013": 85,
    "23015": 85,
    "23017": 85,
    "23019": 85,
    "23021": 85,
    "23023": 85,
    "23025": 85,
    "23027": 85,
    "23029": 85,
    "23031": 85,
    "23033": 85,
    "23035": 85,
    "23037": 85,
    "23039": 85,
    "23041": 85,
    "23043": 85,
    "23045": 85,
    "23047": 85,
    "23049": 85,
    "23051": 85,
    "23053": 85,
    "32803": 85,
    "239": 86,
    "240": 86,
    "241": 86,
    "242": 86,
    "243": 86,
    "244": 86,
    "245": 86,
    "246": 86,
    "247": 86,
    "248": 86,
    "249": 86,
    "250": 86,
    "251": 86,
    "252": 86,
    "253": 86,
    "254": 86,
    "255": 86,
    "256": 86,
    "257": 86,
    "258": 86,
    "259": 86,
    "260": 86,
    "261": 86,
    "262": 86,
    "17680": 86,
    "17682": 86,
    "17684": 86,
    "17686": 86,
    "17688": 86,
    "17690": 86,
    "17692": 86,
    "17694": 86,
    "19978": 86,
    "19980": 86,
    "19982": 86,
    "19984": 86,
    "20010": 86,
    "20012": 86,
    "20014": 86,
    "20016": 86,
    "20018": 86,
    "20020": 86,
    "20022": 86,
    "20024": 86,
    "20026": 86,
    "20028": 86,
    "20030": 86,
    "20032": 86,
    "20128": 86,
    "20130": 86,
    "20132": 86,
    "20134": 86,
    "20817": 86,
    "20819": 86,
    "20821": 86,
    "20823": 86,
    "20825": 86,
    "20827": 86,
    "20829": 86,
    "20831": 86,
    "20833": 86,
    "20835": 86,
    "20837": 86,
    "20839": 86,
    "20841": 86,
    "20843": 86,
    "20845": 86,
    "20847": 86,
    "20849": 86,
    "20851": 86,
    "20853": 86,
    "20855": 86,
    "20857": 86,
    "20859": 86,
    "20861": 86,
    "20863": 86,
    "20865": 86,
    "20867": 86,
    "20869": 86,
    "20871": 86,
    "20873": 86,
    "20875": 86,
    "20877": 86,
    "20879": 86,
    "20881": 86,
    "20883": 86,
    "20885": 86,
    "20887": 86,
    "20889": 86,
    "20891": 86,
    "20893": 86,
    "20895": 86,
    "20897": 86,
    "20899": 86,
    "20901": 86,
    "20903": 86,
    "20905": 86,
    "20907": 86,
    "20909": 86,
    "20911": 86,
    "21194": 86,
    "21196": 86,
    "21198": 86,
    "21200": 86,
    "21202": 86,
    "21204": 86,
    "21206": 86,
    "21208": 86,
    "21210": 86,
    "21212": 86,
    "21214": 86,
    "21216": 86,
    "21218": 86,
    "21220": 86,
    "21222": 86,
    "21224": 86,
    "21226": 86,
    "21228": 86,
    "21230": 86,
    "21232": 86,
    "21234": 86,
    "21236": 86,
    "21238": 86,
    "21240": 86,
    "21242": 86,
    "21244": 86,
    "21246": 86,
    "21248": 86,
    "21250": 86,
    "21252": 86,
    "21254": 86,
    "21256": 86,
    "21258": 86,
    "21260": 86,
    "21262": 86,
    "21264": 86,
    "21266": 86,
    "21268": 86,
    "21270": 86,
    "21272": 86,
    "21274": 86,
    "21276": 86,
    "21278": 86,
    "21280": 86,
    "21282": 86,
    "21284": 86,
    "21286": 86,
    "21288": 86,
    "21290": 86,
    "21292": 86,
    "21294": 86,
    "21296": 86,
    "21298": 86,
    "21300": 86,
    "21302": 86,
    "21304": 86,
    "21306": 86,
    "21308": 86,
    "21310": 86,
    "21312": 86,
    "21314": 86,
    "21316": 86,
    "21318": 86,
    "21450": 86,
    "23071": 86,
    "23073": 86,
    "23075": 86,
    "23077": 86,
    "23079": 86,
    "23081": 86,
    "23083": 86,
    "23085": 86,
    "23089": 86,
    "23091": 86,
    "23093": 86,
    "23095": 86,
    "23097": 86,
    "23099": 86,
    "23101": 86,
    "23103": 86,
    "23105": 86,
    "23107": 86,
    "23109": 86,
    "23111": 86,
    "23113": 86,
    "23115": 86,
    "23117": 86,
    "23119": 86,
    "32799": 86,
    "3536": 325,
    "11355": 325,
    "11357": 325,
    "11359": 325,
    "16433": 325,
    "16435": 325,
    "16437": 325,
    "16439": 325,
    "16441": 325,
    "16443": 325,
    "16445": 325,
    "16447": 325,
    "16449": 325,
    "16451": 325,
    "16453": 325,
    "16455": 325,
    "18981": 325,
    "18983": 325,
    "18985": 325,
    "18987": 325,
    "18989": 325,
    "18991": 325,
    "19047": 325,
    "19049": 325,
    "19051": 325,
    "19053": 325,
    "19055": 325,
    "19057": 325,
    "22947": 325,
    "22949": 325,
    "22951": 325,
    "23414": 325,
    "23416": 325,
    "24569": 325,
    "26912": 325,
    "26913": 325,
    "26914": 325,
    "32469": 325,
    "11279": 329,
    "11291": 329,
    "11293": 329,
    "11295": 329,
    "11297": 329,
    "11299": 329,
    "11307": 329,
    "11309": 329,
    "11311": 329,
    "11313": 329,
    "11315": 329,
    "11317": 329,
    "11319": 329,
    "11321": 329,
    "11323": 329,
    "11325": 329,
    "11327": 329,
    "11329": 329,
    "11331": 329,
    "11333": 329,
    "11335": 329,
    "11337": 329,
    "11339": 329,
    "11341": 329,
    "11343": 329,
    "11345": 329,
    "11347": 329,
    "11349": 329,
    "11351": 329,
    "11353": 329,
    "20343": 329,
    "20345": 329,
    "20347": 329,
    "20349": 329,
    "20351": 329,
    "20353": 329,
    "23783": 329,
    "23785": 329,
    "23787": 329,
    "23789": 329,
    "23791": 329,
    "23793": 329,
    "28778": 329,
    "28780": 329,
    "28782": 329,
    "28784": 329,
    "28786": 329,
    "31896": 329,
    "31898": 329,
    "31900": 329,
    "31902": 329,
    "31904": 329,
    "31906": 329,
    "31908": 329,
    "31910": 329,
    "31916": 329,
    "31918": 329,
    "12608": 372,
    "12625": 372,
    "12627": 372,
    "12773": 372,
    "12775": 372,
    "12777": 372,
    "12779": 372,
    "12781": 372,
    "12783": 372,
    "12616": 373,
    "12618": 373,
    "12620": 373,
    "12797": 373,
    "12799": 373,
    "12801": 373,
    "12803": 373,
    "12805": 373,
    "12807": 373,
    "12552": 374,
    "12557": 374,
    "12559": 374,
    "12822": 374,
    "12824": 374,
    "12826": 374,
    "12828": 374,
    "12830": 374,
    "12832": 374,
    "12561": 375,
    "12563": 375,
    "12565": 375,
    "12810": 375,
    "12812": 375,
    "12814": 375,
    "12816": 375,
    "12818": 375,
    "12820": 375,
    "12629": 376,
    "12631": 376,
    "12633": 376,
    "12761": 376,
    "12763": 376,
    "12765": 376,
    "12767": 376,
    "12769": 376,
    "12771": 376,
    "12610": 377,
    "12612": 377,
    "12614": 377,
    "12785": 377,
    "12787": 377,
    "12789": 377,
    "12791": 377,
    "12793": 377,
    "12795": 377,
    "210": 384,
    "211": 384,
    "212": 384,
    "213": 384,
    "16025": 384,
    "27353": 384,
    "27361": 384,
    "27365": 384,
    "27367": 384,
    "27369": 384,
    "27371": 384,
    "27375": 384,
    "27379": 384,
    "27381": 384,
    "27383": 384,
    "27385": 384,
    "27387": 384,
    "27885": 384,
    "27886": 384,
    "30430": 384,
    "32463": 384,
    "206": 385,
    "207": 385,
    "208": 385,
    "209": 385,
    "2212": 385,
    "27433": 385,
    "27435": 385,
    "27437": 385,
    "27439": 385,
    "27441": 385,
    "27443": 385,
    "27445": 385,
    "27447": 385,
    "27449": 385,
    "27451": 385,
    "27453": 385,
    "27455": 385,
    "27889": 385,
    "27890": 385,
    "30428": 385,
    "266": 387,
    "2512": 387,
    "2514": 387,
    "2516": 387,
    "27313": 387,
    "27315": 387,
    "27317": 387,
    "27319": 387,
    "27321": 387,
    "27323": 387,
    "27325": 387,
    "27327": 387,
    "27329": 387,
    "27331": 387,
    "27333": 387,
    "27335": 387,
    "27883": 387,
    "27884": 387,
    "1818": 395,
    "1820": 395,
    "1822": 395,
    "1824": 395,
    "27481": 395,
    "27483": 395,
    "27485": 395,
    "27487": 395,
    "27489": 395,
    "27491": 395,
    "27493": 395,
    "27495": 395,
    "27497": 395,
    "27499": 395,
    "27501": 395,
    "27503": 395,
    "10629": 507,
    "10631": 507,
    "13931": 507,
    "13933": 507,
    "16065": 507,
    "16521": 507,
    "16523": 507,
    "16525": 507,
    "16527": 507,
    "17488": 507,
    "20593": 507,
    "21542": 507,
    "22564": 507,
    "28511": 507,
    "499": 509,
    "2404": 509,
    "7993": 509,
    "8089": 509,
    "8091": 509,
    "8093": 509,
    "13925": 509,
    "13926": 509,
    "16068": 509,
    "16136": 509,
    "17491": 509,
    "20595": 509,
    "22565": 509,
    "32461": 509,
    "501": 510,
    "2410": 510,
    "7997": 510,
    "8101": 510,
    "8103": 510,
    "8105": 510,
    "13921": 510,
    "13922": 510,
    "16064": 510,
    "16137": 510,
    "17487": 510,
    "20599": 510,
    "22567": 510,
    "1875": 511,
    "1877": 511,
    "8007": 511,
    "8023": 511,
    "8025": 511,
    "8027": 511,
    "13919": 511,
    "13920": 511,
    "16061": 511,
    "17484": 511,
    "20597": 511,
    "22566": 511,
    "2817": 648,
    "13119": 648,
    "24471": 648,
    "24473": 648,
    "24475": 648,
    "24477": 648,
    "24478": 648,
    "24479": 648,
    "2613": 653,
    "2647": 653,
    "24495": 653,
    "24497": 653,
    "24499": 653,
    "24501": 653,
    "24503": 653,
    "24505": 653,
    "2679": 654,
    "13856": 654,
    "24486": 654,
    "24488": 654,
    "24490": 654,
    "24492": 654,
    "24493": 654,
    "24494": 654,
    "2629": 655,
    "2655": 655,
    "24507": 655,
    "24509": 655,
    "24511": 655,
    "24513": 655,
    "24515": 655,
    "24517": 655,
    "1242": 763,
    "2603": 763,
    "2605": 763,
    "5559": 763,
    "5561": 763,
    "5591": 763,
    "5593": 763,
    "5595": 763,
    "5597": 763,
    "5599": 763,
    "5601": 763,
    "14127": 763,
    "15813": 763,
    "21500": 763,
    "20138": 771,
    "25707": 771,
    "25709": 771,
    "25711": 771,
    "25713": 771,
    "25715": 771,
    "28375": 771,
    "28377": 771,
    "28379": 771,
    "28381": 771,
    "28383": 771,
    "28565": 771,
    "20306": 772,
    "20307": 772,
    "20308": 772,
    "21867": 772,
    "27393": 772,
    "27397": 772,
    "27401": 772,
    "27403": 772,
    "27405": 772,
    "27407": 772,
    "27411": 772,
    "27413": 772,
    "27415": 772,
    "27417": 772,
    "27419": 772,
    "27421": 772,
    "27887": 772,
    "27888": 772,
    "25736": 773,
    "25888": 773,
    "25890": 773,
    "25892": 773,
    "25894": 773,
    "25896": 773,
    "25898": 773,
    "25900": 773,
    "25902": 773,
    "26286": 773,
    "26288": 773,
    "26290": 773,
    "26292": 773,
    "26294": 773,
    "26296": 773,
    "26298": 773,
    "26300": 773,
    "26302": 773,
    "27064": 773,
    "27066": 773,
    "27068": 773,
    "30987": 773,
    "30993": 773,
    "30997": 773,
    "30999": 773,
    "31001": 773,
    "31003": 773,
    "31005": 773,
    "31007": 773,
    "31009": 773,
    "31011": 773,
    "31013": 773,
    "31015": 773,
    "31017": 773,
    "31019": 773,
    "31021": 773,
    "31023": 773,
    "31025": 773,
    "31027": 773,
    "31029": 773,
    "31031": 773,
    "31033": 773,
    "31035": 773,
    "31037": 773,
    "31039": 773,
    "31041": 773,
    "31043": 773,
    "31045": 773,
    "31047": 773,
    "31049": 773,
    "31051": 773,
    "31053": 773,
    "31055": 773,
    "31057": 773,
    "31059": 773,
    "31061": 773,
    "31063": 773,
    "31065": 773,
    "31067": 773,
    "31069": 773,
    "31071": 773,
    "31073": 773,
    "31075": 773,
    "31077": 773,
    "31079": 773,
    "31081": 773,
    "31083": 773,
    "31085": 773,
    "31087": 773,
    "31089": 773,
    "31091": 773,
    "31093": 773,
    "25906": 774,
    "26076": 774,
    "26078": 774,
    "26080": 774,
    "26082": 774,
    "26084": 774,
    "26086": 774,
    "26088": 774,
    "26090": 774,
    "26436": 774,
    "26438": 774,
    "26440": 774,
    "26442": 774,
    "26444": 774,
    "26446": 774,
    "26448": 774,
    "26450": 774,
    "26452": 774,
    "26964": 774,
    "26966": 774,
    "31716": 774,
    "31718": 774,
    "31720": 774,
    "31722": 774,
    "31724": 774,
    "31726": 774,
    "31728": 774,
    "31730": 774,
    "31732": 774,
    "31734": 774,
    "31736": 774,
    "31738": 774,
    "31740": 774,
    "31742": 774,
    "31744": 774,
    "31746": 774,
    "31748": 774,
    "31750": 774,
    "31752": 774,
    "31754": 774,
    "31756": 774,
    "31758": 774,
    "31760": 774,
    "31762": 774,
    "31764": 774,
    "31766": 774,
    "31768": 774,
    "31770": 774,
    "31772": 774,
    "31774": 774,
    "31776": 774,
    "31778": 774,
    "31780": 774,
    "31782": 774,
    "31784": 774,
    "31786": 774,
    "31788": 774,
    "31790": 774,
    "31792": 774,
    "31794": 774,
    "31796": 774,
    "31798": 774,
    "31800": 774,
    "31802": 774,
    "31804": 774,
    "31810": 774,
    "31812": 774,
    "31814": 774,
    "31816": 774,
    "31818": 774,
    "31820": 774,
    "31822": 774,
    "31824": 774,
    "31826": 774
  };
}
