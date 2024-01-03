import { Grid, Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../../constants/constants";

import ShieldedCombatIcon from '../../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import PlusOneIcon from '../../resources/images/talentTreesImages/PlusOneIcon.png';
import Tier3Icon from '../../resources/images/talentTreesImages/Tier3Icon.png';
import Tier6Icon from '../../resources/images/talentTreesImages/Tier6Icon.png';
import Tier9Icon from '../../resources/images/talentTreesImages/Tier9Icon.png';
import Tier12Icon from '../../resources/images/talentTreesImages/Tier12Icon.png';
import Tier15Icon from '../../resources/images/talentTreesImages/Tier15Icon.png';
import Tier18Icon from '../../resources/images/talentTreesImages/Tier18Icon.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { ShieldedCombatPlusOneTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatPlusOneTemplate';
import { ShieldedCombatTier3Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier3Template';
import { ShieldedCombatTier6Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier6Template';
import { ShieldedCombatTier9Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier9Template';
import { ShieldedCombatTier12Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier12Template';
import { ShieldedCombatTier15Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier15Template';
import { ShieldedCombatTier18Template } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier18Template';

import { ShieldedCombatPlusOneDesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatPlusOneDesignTemplate';
import { ShieldedCombatTier3DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier3DesignTemplate';
import { ShieldedCombatTier6DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier6DesignTemplate';
import { ShieldedCombatTier9DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier9DesignTemplate';
import { ShieldedCombatTier12DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier12DesignTemplate';
import { ShieldedCombatTier15DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier15DesignTemplate';
import { ShieldedCombatTier18DesignTemplate } from './OverhaulSkillTreeTemplates/shieldedCombatTemplates/ShieldedCombatTier18DesignTemplate';

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
                description = <ShieldedCombatPlusOneTemplate />
            }
            else description = <ShieldedCombatPlusOneDesignTemplate />
        }
        if (props.slot === 2) {
            document.getElementById("shieldedCombatT3Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier3Template />
            }
            else description = <ShieldedCombatTier3DesignTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("shieldedCombatT6Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier6Template />
            }
            else description = <ShieldedCombatTier6DesignTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("shieldedCombatT9Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier9Template />
            }
            else description = <ShieldedCombatTier9DesignTemplate />
        }
        else if (props.slot === 5) {
            document.getElementById("shieldedCombatT12Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier12Template />
            }
            else description = <ShieldedCombatTier12DesignTemplate />
        }
        else if (props.slot === 6) {
            document.getElementById("shieldedCombatT15Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier15Template />
            }
            else description = <ShieldedCombatTier15DesignTemplate />
        }
        else if (props.slot === 7) {
            document.getElementById("shieldedCombatT18Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ShieldedCombatTier18Template />
            }
            else description = <ShieldedCombatTier18DesignTemplate />
        }
        return description;
    }

    function decrementAbilityDescription() {
        if (abilityDescription > 1 && abilityDescription < 8) {
            setAbilityDescription(abilityDescription - 1);
        }
        else {
            setAbilityDescription(7);
        }
    }

    function incrementAbilityDescription() {
        if (abilityDescription < 7 && abilityDescription > 0) {
            setAbilityDescription(abilityDescription + 1);
        }
        else {
            setAbilityDescription(1);
        }
    }

    return (
        <div>
            <div>
                <h3 id="TreeHeaderSection" className="SectionHeader">
                    Shield Mastery Tree Demo
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p className="NormalPageLayout">
                    <Grid container spacing={0} id="Logo and Overview">
                        <Grid item xs={4}>
                            <img className="NewBannerImage" src={ShieldedCombatIcon}
                                alt="Shield Mastery Icon" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="textAlignLeft animationFadeIn">
                                <b className='textColorBlue'>
                                    Overview:
                                </b>
                                <br />
                                Shield Mastery evokes the idea of the stalwart defender.
                                A skilled Shieldmaster who tactically chooses the best time to
                                block powerful attacks while able to safeguard nearby allies with
                                that same ability. A Shield Master may also fight with their
                                shield as if it were a weapon and punish their enemies when their
                                blades fail against the Shieldmaster's shield. A Shield Master
                                is a powerful and reliable backbone to build a team around.
                                <p>
                                    <b className='textColorBlue'>
                                        Skill Tree Class:
                                    </b>
                                    <br />
                                    Martial
                                </p>
                                <p>
                                    <b className='textColorBlue'>
                                        Role:
                                    </b>
                                    <br />
                                    Defender & Interceptor
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </p>
            </div>
            <Grid id="Row 0 Design Insight and Help Buttons" container spacing={0} className='textAlignRight'>
                <Grid item xs={8} />
                <Grid item xs={4}>
                    <div>
                        <ButtonGroup variant="text" className='NavBarButtonGroup'>
                            <Button className="NavBarButton"
                                title='Click a Talent icon to the left to learn more.'
                                onClick={() => { setAbilityDescription(false); resetTalentHighlight() }}>
                                <HelpOutlineIcon />
                            </Button>
                        </ButtonGroup>
                    </div>
                </Grid>
            </Grid>
            <Grid id="Row 1 ShieldedCombat Talent Icons" container spacing={0} alignItems="center">
                <Grid item md={1.3} sm={1.3} xs={1.3} className='textAlignCenter' zeroMinWidth>
                    <Typography noWrap>
                        <Button variant="outlined" style={{ minWidth: '0%', maxWidth: "30px"}}
                            title='Previous Talent'
                            onClick={() => decrementAbilityDescription()} >
                            <NavigateBeforeIcon />
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo" src={PlusOneIcon}
                        id="shieldedCombatPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo" src={Tier3Icon}
                        id="shieldedCombatT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo" src={Tier6Icon}
                        id="shieldedCombatT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo" src={Tier9Icon}
                        id="shieldedCombatT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo" src={Tier12Icon}
                        id="shieldedCombatT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo" src={Tier15Icon}
                        id="shieldedCombatT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo" src={Tier18Icon}
                        id="shieldedCombatT18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item md={1.3} sm={1.3} xs={1.3} className='textAlignCenter' zeroMinWidth>
                    <Typography noWrap>
                        <Button variant="outlined" fullWidth style={{ minWidth: '0%', maxWidth: "30px"}}
                            title='Next Talent'
                            onClick={() => incrementAbilityDescription()}>
                            <NavigateNextIcon />
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Grid id="Row 3 ShieldedCombat Ability Descriptions" container spacing={0}>
                <Grid item xs={12}>
                    <br />
                    <div id="TalentTreeDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                        {!abilityDescription >= 1 ?
                            <h4 className="textAlignCenter animationcolorWhiteOrangeFlashing">
                                Click a talent icon to see its Description and Design Insights.
                            </h4> : <div> <RenderTalentDescription slot={abilityDescription} />
                                <p>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Button variant='outlined'
                                            title='Return to Top' style={{ fontSize: BUTTON_FONT_SIZE }}
                                            onClick={() => { document.getElementById('TreeHeaderSection').scrollIntoView(); }}
                                            startIcon={<KeyboardArrowUpIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}>
                                            Return to Top
                                        </Button>
                                    </Grid>
                                </p>
                            </div>}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { ShieldedCombatTalentTreeComponent };