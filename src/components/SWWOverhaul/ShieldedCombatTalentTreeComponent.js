import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';


import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

import ShieldedCombatIcon from '../../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import PlusOneIcon from '../../resources/images/talentTreesImages/PlusOneIcon.png';
import Tier3Icon from '../../resources/images/talentTreesImages/Tier3Icon.png';
import Tier6Icon from '../../resources/images/talentTreesImages/Tier6Icon.png';
import Tier9Icon from '../../resources/images/talentTreesImages/Tier9Icon.png';
import Tier12Icon from '../../resources/images/talentTreesImages/Tier12Icon.png';
import Tier15Icon from '../../resources/images/talentTreesImages/Tier15Icon.png';
import Tier18Icon from '../../resources/images/talentTreesImages/Tier18Icon.png';

import { ShieldedCombatPlusOneTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatPlusOneTemplate';
import { ShieldedCombatTier3Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier3Template';
import { ShieldedCombatTier6Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier6Template';
import { ShieldedCombatTier9Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier9Template';
import { ShieldedCombatTier12Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier12Template';
import { ShieldedCombatTier15Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier15Template';
import { ShieldedCombatTier18Template } from   './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier18Template';

function ShieldedCombatTalentTreeComponent(props) {
    const [abilityDescription, setAbilityDescription] = useState(0);
    const [designInsightsVisible, setDesignInsightsVisible] = useState(true);

    useEffect(() => {
        setAbilityDescription(0);
        setDesignInsightsVisible(false);
    }, []);

    function resetTalentHighlight() {
        document.getElementById("shieldedCombatPlusOneTalent").className = "ImageLogo";
        document.getElementById("shieldedCombatT3Talent").className = "ImageLogo";
        document.getElementById("shieldedCombatT6Talent").className = "ImageLogo";
        document.getElementById("shieldedCombatT9Talent").className = "ImageLogo";
        document.getElementById("shieldedCombatT12Talent").className = "ImageLogo";
        document.getElementById("shieldedCombatT15Talent").className = "ImageLogo";
        document.getElementById("shieldedCombatT18Talent").className = "ImageLogo";
    }

    function RenderTalentDescription(props) {
        let description = "";
        resetTalentHighlight();
        if (props.slot === 1) {
            document.getElementById("shieldedCombatPlusOneTalent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatPlusOneTemplate/>
            }
            else description = "+1 EFFECT INSIGHT"
        }
        if (props.slot === 2) {
            document.getElementById("shieldedCombatT3Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier3Template/>
            }
            else description = "T3 INSIGHT"
        }
        else if (props.slot === 3) {
            document.getElementById("shieldedCombatT6Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier6Template/>
            }
            else description = "T6 INSIGHT"
        }
        else if (props.slot === 4) {
            document.getElementById("shieldedCombatT9Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier9Template/>
            }
            else description = "T9 INSIGHT"
        }
        else if (props.slot === 5) {
            document.getElementById("shieldedCombatT12Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier12Template/>
            }
            else description = "T12 INSIGHT"
        }
        else if (props.slot === 6) {
            document.getElementById("shieldedCombatT15Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier15Template/>
            }
            else description = "T15 INSIGHT"
        }
        else if (props.slot === 7) {
            document.getElementById("shieldedCombatT18Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier18Template/>
            }
            else description = "T18 INSIGHT"
        }
        return description;
    }

    return (
        <div className="NormalPageLayout">
            <Grid id="Row 0 shieldedCombat Title" container spacing={0}>
                <Grid item xs={12}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> SHIELDED COMBAT
                    </p>
                </Grid>
            </Grid>
            <Grid id="Row 1 shieldedCombat Art and Summary" container spacing={1}>
                <Grid item xs={6}>
                    <img src={ShieldedCombatIcon} height="auto" alt="shieldedCombat Tree" className="SWWBanner" />
                </Grid>
                <Grid item xs={4}>
                    <div className="SmallHeaderTitleNoHover moveLeft15">
                        SUMMARY
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft25">
                        Shielded Combat evokes the idea of the stalwart defender. 
                        A skilled Shieldmaster who tactically chooses the best time to 
                        block powerful attacks while able to safeguard nearby allies with 
                        that same ability. A Shielded Combatant may also fight with their 
                        shield as if it were a weapon and punish their enemies when their 
                        blades fail against the Shieldmaster's shield. A Shielded Combatant 
                        is a powerful and reliable backbone to build a team around.
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        TYPE
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft35">
                        Martial
                    </div>
                    <br />
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        ROLE
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft35">
                        Defender
                    </div>
                </Grid>
            </Grid>
            <Grid id="Row 2 shieldedCombat Talent Icons" container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo" src={PlusOneIcon}
                        id="shieldedCombatPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo" src={Tier3Icon}
                        id="shieldedCombatT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo" src={Tier6Icon}
                        id="shieldedCombatT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo" src={Tier9Icon}
                        id="shieldedCombatT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo" src={Tier12Icon}
                        id="shieldedCombatT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo" src={Tier15Icon}
                        id="shieldedCombatT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo" src={Tier18Icon}
                        id="shieldedCombatT18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    {abilityDescription ?
                        <div className="DesignInsightButton" onClick={() => setDesignInsightsVisible(!designInsightsVisible)}>
                            Toggle<br />Design<br />Insights
                        </div> :
                        ""
                    }
                </Grid>
            </Grid>
            <Grid id="Row 3 shieldedCombat Ability Descriptions" container spacing={0}>
                <Grid item xs={12}>
                    <br />
                    <div id="TalentTreeDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                        {!abilityDescription >= 1 ?
                            <h3 className="textFontPixel textAlignCenter">CLICK A TALENT ICON TO SEE ITS DESCRIPTION
                                </h3> : <RenderTalentDescription slot={abilityDescription} />}
                    </div>
                    <br /><br /><br />
                </Grid>
            </Grid> 
        </div >
    );
}

export { ShieldedCombatTalentTreeComponent };