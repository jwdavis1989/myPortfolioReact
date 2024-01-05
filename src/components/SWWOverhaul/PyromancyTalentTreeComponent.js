import { Grid, Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../../constants/constants";

import PyromancyIcon from '../../resources/images/talentTreesImages/PyromancyIcon.png';
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
        document.getElementById('Skill Tree Demos').scrollIntoView();
    }, []);

    function resetTalentHighlight() {
        document.getElementById("pyromancyPlusOneTalent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT3Talent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT6Talent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT9Talent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT12Talent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT15Talent").className = "ImageLogo cursorClickable";
        document.getElementById("pyromancyT18Talent").className = "ImageLogo cursorClickable";
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
                    Pyromancy Tree Demo
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p className="NormalPageLayout">
                    <Grid container spacing={0} id="Logo and Overview">
                        <Grid item xs={4}>
                            <img className="NewBannerImage" src={PyromancyIcon}
                                alt="Pyromancy Icon" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="textAlignLeft animationFadeIn">
                                <b className='textColorBlue'>
                                    Overview:
                                </b>
                                <br />
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
                                <p>
                                    <b className='textColorBlue'>
                                        Skill Tree Class:
                                    </b>
                                    <br />
                                    Magic
                                </p>
                                <p>
                                    <b className='textColorBlue'>
                                        Role:
                                    </b>
                                    <br />
                                    Multi-Target Damage & Area Control
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
                                        <HelpOutlineIcon /> Help
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
            <Grid id="Row 1 Leadership Talent Icons" container spacing={0} alignItems="center">
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
                        className="ImageLogo cursorClickable" src={PlusOneIcon}
                        id="pyromancyPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo cursorClickable" src={Tier3Icon}
                        id="pyromancyT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo cursorClickable" src={Tier6Icon}
                        id="pyromancyT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo cursorClickable" src={Tier9Icon}
                        id="pyromancyT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo cursorClickable" src={Tier12Icon}
                        id="pyromancyT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo cursorClickable" src={Tier15Icon}
                        id="pyromancyT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo cursorClickable" src={Tier18Icon}
                        id="pyromancyT18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item md={1.3} sm={1.3} xs={1.3} className='textAlignCenter' zeroMinWidth>
                    <Typography noWrap>
                    <Button variant="outlined" style={{ minWidth: '0%', maxWidth: "30px"}}
                            title='Next Talent'
                            onClick={() => incrementAbilityDescription()}>
                            <NavigateNextIcon />
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Grid id="Row 3 Leadership Ability Descriptions" container spacing={0}>
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

export { PyromancyTalentTreeComponent };