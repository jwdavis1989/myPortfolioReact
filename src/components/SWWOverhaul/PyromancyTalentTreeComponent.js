import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';


import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

import PyromancyIcon from '../../resources/images/talentTreesImages/PyromancyIcon.png';
import PlusOneIcon from '../../resources/images/talentTreesImages/PlusOneIcon.png';
import Tier3Icon from '../../resources/images/talentTreesImages/Tier3Icon.png';
import Tier6Icon from '../../resources/images/talentTreesImages/Tier6Icon.png';
import Tier9Icon from '../../resources/images/talentTreesImages/Tier9Icon.png';
import Tier12Icon from '../../resources/images/talentTreesImages/Tier12Icon.png';
import Tier15Icon from '../../resources/images/talentTreesImages/Tier15Icon.png';
import Tier18Icon from '../../resources/images/talentTreesImages/Tier18Icon.png';

import { PyromancyPlusOneTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyPlusOneTemplate';
import { PyromancyTier3Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier3Template';
import { PyromancyTier6Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier6Template';
import { PyromancyTier9Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier9Template';
import { PyromancyTier12Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier12Template';
import { PyromancyTier15Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier15Template';
import { PyromancyTier18Template } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier18Template';

import { PyromancyPlusOneDesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyPlusOneDesignTemplate';
import { PyromancyTier3DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier3DesignTemplate';
import { PyromancyTier6DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier6DesignTemplate';
import { PyromancyTier9DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier9DesignTemplate';
import { PyromancyTier12DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier12DesignTemplate';
import { PyromancyTier15DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier15DesignTemplate';
import { PyromancyTier18DesignTemplate } from './OverhaulSkillTreeTemplates/pyromancyTemplates/PyromancyTier18DesignTemplate';

function PyromancyTalentTreeComponent(props) {
    const [abilityDescription, setAbilityDescription] = useState(0);
    const [designInsightsVisible, setDesignInsightsVisible] = useState(true);

    useEffect(() => {
        setAbilityDescription(0);
        setDesignInsightsVisible(false);
    }, []);

    function resetTalentHighlight() {
        document.getElementById("pyromancyPlusOneTalent").className = "ImageLogo";
        document.getElementById("pyromancyT3Talent").className = "ImageLogo";
        document.getElementById("pyromancyT6Talent").className = "ImageLogo";
        document.getElementById("pyromancyT9Talent").className = "ImageLogo";
        document.getElementById("pyromancyT12Talent").className = "ImageLogo";
        document.getElementById("pyromancyT15Talent").className = "ImageLogo";
        document.getElementById("pyromancyT18Talent").className = "ImageLogo";
    }

    function RenderTalentDescription(props) {
        let description = "";
        resetTalentHighlight();
        if (props.slot === 1) {
            document.getElementById("pyromancyPlusOneTalent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyPlusOneTemplate />
            }
            else description = <PyromancyPlusOneDesignTemplate />
        }
        if (props.slot === 2) {
            document.getElementById("pyromancyT3Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier3Template />
            }
            else description = <PyromancyTier3DesignTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("pyromancyT6Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier6Template />
            }
            else description = <PyromancyTier6DesignTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("pyromancyT9Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier9Template />
            }
            else description = <PyromancyTier9DesignTemplate />
        }
        else if (props.slot === 5) {
            document.getElementById("pyromancyT12Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier12Template />
            }
            else description = <PyromancyTier12DesignTemplate />
        }
        else if (props.slot === 6) {
            document.getElementById("pyromancyT15Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier15Template />
            }
            else description = <PyromancyTier15DesignTemplate />
        }
        else if (props.slot === 7) {
            document.getElementById("pyromancyT18Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <PyromancyTier18Template />
            }
            else description = <PyromancyTier18DesignTemplate />
        }
        return description;
    }

    return (
        <div className="NormalPageLayoutSlim backgroundRadialBlack">
            <Grid id="Row 0 pyromancy Title" container spacing={0}>
                <Grid item xs={12}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> PYROMANCY
                    </p>
                </Grid>
            </Grid>
            <Grid id="Row 1 pyromancy Art and Summary" container spacing={1}>
                <Grid item xs={4}>
                    <img src={PyromancyIcon} height="auto" alt="pyromancy Tree" className="TalentImage width80" />
                </Grid>
                <Grid item xs={4}>
                    <div className="SmallHeaderTitleNoHover moveLeft15 width100">
                        SUMMARY
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft15 ScrollingBox">
                        <i>
                            "Will your fire ignite the world?
                            <br />Will you raise magma to destroy entire swathes of terrain?
                            <br />Will you become the walking inferno?"
                        </i>
                        <p />Pyromancy embodies the concept of a pure fire mage. Its destructive potential is
                        unmatched in large encounters, and it is unparalleled in its ability to shutdown large areas of the map through
                        a mix of tactical wit and expanded area of effect sizes.
                        <p />
                        <i>
                            "So what if your friends get a little crispy?"
                        </i>
                    </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        TYPE
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft35 textAlignCenter">
                        Magic
                    </div>
                    <br />
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        ROLE
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft35 textAlignCenter">
                        Multi-Target Damage & Area Control
                    </div>
                </Grid>
            </Grid>
            <p />
            <Grid id="Row 2 pyromancy Talent Icons" container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo" src={PlusOneIcon}
                        id="pyromancyPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo" src={Tier3Icon}
                        id="pyromancyT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo" src={Tier6Icon}
                        id="pyromancyT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo" src={Tier9Icon}
                        id="pyromancyT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo" src={Tier12Icon}
                        id="pyromancyT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo" src={Tier15Icon}
                        id="pyromancyT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo" src={Tier18Icon}
                        id="pyromancyT18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <div className="DesignInsightButton animationcolorWhiteOrangeFlashing" onClick={() => setDesignInsightsVisible(!designInsightsVisible)}>
                        Toggle Design Insights
                    </div>
                </Grid>
            </Grid>
            <Grid id="Row 3 pyromancy Ability Descriptions" container spacing={0}>
                <Grid item xs={12}>
                    <br />
                    <div id="TalentTreeDescription" className="NormalPageLayoutLeft AbilityDescriptionSection ScrollingBox">
                        {!abilityDescription >= 1 ?
                            <h3 className="textAlignCenter">CLICK A TALENT ICON TO SEE ITS DESCRIPTION
                            </h3> : <RenderTalentDescription slot={abilityDescription} />}
                    </div>
                    <br /><br /><br />
                </Grid>
            </Grid>
        </div >
    );
}

export { PyromancyTalentTreeComponent };