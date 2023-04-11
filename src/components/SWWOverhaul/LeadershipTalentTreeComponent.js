import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';


import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

import LeadershipIcon from '../../resources/images/talentTreesImages/LeadershipIcon.png';
import PlusOneIcon from '../../resources/images/talentTreesImages/PlusOneIcon.png';
import Tier3Icon from '../../resources/images/talentTreesImages/Tier3Icon.png';
import Tier6Icon from '../../resources/images/talentTreesImages/Tier6Icon.png';
import Tier9Icon from '../../resources/images/talentTreesImages/Tier9Icon.png';
import Tier12Icon from '../../resources/images/talentTreesImages/Tier12Icon.png';
import Tier15Icon from '../../resources/images/talentTreesImages/Tier15Icon.png';
import Tier18Icon from '../../resources/images/talentTreesImages/Tier18Icon.png';

import { LeadershipPlusOneTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipPlusOneTemplate';
import { LeadershipTier3Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier3Template';
import { LeadershipTier6Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier6Template';
import { LeadershipTier9Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier9Template';
import { LeadershipTier12Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier12Template';
import { LeadershipTier15Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier15Template';
import { LeadershipTier18Template } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier18Template';

import { LeadershipPlusOneDesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipPlusOneDesignTemplate';
import { LeadershipTier3DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier3DesignTemplate';
import { LeadershipTier6DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier6DesignTemplate';
import { LeadershipTier9DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier9DesignTemplate';
import { LeadershipTier12DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier12DesignTemplate';
import { LeadershipTier15DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier15DesignTemplate';
import { LeadershipTier18DesignTemplate } from './OverhaulSkillTreeTemplates/leadershipTemplates/LeadershipTier18DesignTemplate';

function LeadershipTalentTreeComponent(props) {
    const [abilityDescription, setAbilityDescription] = useState(0);
    const [designInsightsVisible, setDesignInsightsVisible] = useState(true);

    useEffect(() => {
        setAbilityDescription(0);
        setDesignInsightsVisible(false);
    }, []);

    function resetTalentHighlight() {
        document.getElementById("leadershipPlusOneTalent").className = "ImageLogo";
        document.getElementById("leadershipT3Talent").className = "ImageLogo";
        document.getElementById("leadershipT6Talent").className = "ImageLogo";
        document.getElementById("leadershipT9Talent").className = "ImageLogo";
        document.getElementById("leadershipT12Talent").className = "ImageLogo";
        document.getElementById("leadershipT15Talent").className = "ImageLogo";
        document.getElementById("leadershipT18Talent").className = "ImageLogo";
    }

    function RenderTalentDescription(props) {
        let description = "";
        resetTalentHighlight();
        if (props.slot === 1) {
            document.getElementById("leadershipPlusOneTalent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipPlusOneTemplate />
            }
            else description = <LeadershipPlusOneDesignTemplate />
        }
        if (props.slot === 2) {
            document.getElementById("leadershipT3Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier3Template />
            }
            else description = <LeadershipTier3DesignTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("leadershipT6Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier6Template />
            }
            else description = <LeadershipTier6DesignTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("leadershipT9Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier9Template />
            }
            else description = <LeadershipTier9DesignTemplate />
        }
        else if (props.slot === 5) {
            document.getElementById("leadershipT12Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier12Template />
            }
            else description = <LeadershipTier12DesignTemplate />
        }
        else if (props.slot === 6) {
            document.getElementById("leadershipT15Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier15Template />
            }
            else description = <LeadershipTier15DesignTemplate />
        }
        else if (props.slot === 7) {
            document.getElementById("leadershipT18Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <LeadershipTier18Template />
            }
            else description = <LeadershipTier18DesignTemplate />
        }
        return description;
    }

    return (
        <div className="NormalPageLayout">
            <Grid id="Row 0 Leadership Title" container spacing={0}>
                <Grid item xs={12}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> LEADERSHIP
                    </p>
                </Grid>
            </Grid>
            <Grid id="Row 1 Leadership Art and Summary" container spacing={1}>
                <Grid item xs={4}>
                    <img src={LeadershipIcon} height="auto" alt="Leadership Tree" className="TalentImage" />
                </Grid>
                <Grid item xs={4}>
                    <div className="SmallHeaderTitleNoHover moveLeft15">
                        SUMMARY
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft25 ScrollingBox">
                        Leadership is born from the image of the heroic leader,
                        waving their banner in the air as they inspire their allies
                        with glowing charisma and infuriate their opponents with their tactical wit.
                        Leadership offers several commands you may issue allies to grant them potent buffs
                        to shape the battlefield to your advantage.
                    </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        TYPE
                    </div>
                    <div className="NormalPageLayoutLeftSmaller moveLeft35 textAlignCenter">
                        Utility
                    </div>
                    <br />
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        ROLE
                    </div>
                    <div className="NormalPageLayoutLeftSmaller moveLeft35 textAlignCenter">
                        Battlefield Tactician & Leader
                    </div>
                </Grid>
            </Grid>
            <p />
            <Grid id="Row 2 Leadership Talent Icons" container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo" src={PlusOneIcon}
                        id="leadershipPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo" src={Tier3Icon}
                        id="leadershipT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo" src={Tier6Icon}
                        id="leadershipT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo" src={Tier9Icon}
                        id="leadershipT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo" src={Tier12Icon}
                        id="leadershipT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo" src={Tier15Icon}
                        id="leadershipT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo" src={Tier18Icon}
                        id="leadershipT18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    {abilityDescription ?
                        <div className="DesignInsightButton" onClick={() => setDesignInsightsVisible(!designInsightsVisible)}>
                            Toggle Design Insights
                        </div> :
                        ""
                    }
                </Grid>
            </Grid>
            <Grid id="Row 3 Leadership Ability Descriptions" container spacing={0}>
                <Grid item xs={12}>
                    <br />
                    <div id="TalentTreeDescription" className="NormalPageLayoutLeft AbilityDescriptionSection ScrollingBox">
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

export { LeadershipTalentTreeComponent };