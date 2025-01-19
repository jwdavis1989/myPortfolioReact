import { Grid, Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../../constants/constants";

import LeadershipIcon from '../../resources/images/talentTreesImages/LeadershipIcon.png';
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
        document.getElementById('Skill Tree Demos').scrollIntoView();
    }, []);

    function resetTalentHighlight() {
        document.getElementById("leadershipPlusOneTalent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT3Talent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT6Talent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT9Talent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT12Talent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT15Talent").className = "ImageLogo cursorClickable";
        document.getElementById("leadershipT18Talent").className = "ImageLogo cursorClickable";
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
                    Leadership Tree Demo
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p className="NormalPageLayout">
                    <Grid container spacing={0} id="Logo and Overview">
                        <Grid item xs={4}>
                            <img className="NewBannerImage" src={LeadershipIcon}
                                alt="Leadership Icon" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="textAlignLeft animationFadeIn">
                                <b className='textColorBlue'>
                                    Overview:
                                </b>
                                <br />
                                Leadership is born from the image of the heroic leader,
                                waving their banner in the air as they inspire their allies
                                with glowing charisma and infuriate their opponents with their tactical wit.
                                Leadership offers several commands you may issue allies to grant them potent buffs
                                to shape the battlefield to your advantage.
                                <p>
                                    <b className='textColorBlue'>
                                        Skill Tree Class:
                                    </b>
                                    <br />
                                    Utility
                                </p>
                                <p>
                                    <b className='textColorBlue'>
                                        Role:
                                    </b>
                                    <br />
                                    Battlefield Tactician & Leader
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
                        <Button variant="outlined"  style={{ minWidth: '0%', maxWidth: "30px"}}
                            title='Previous Talent'
                            onClick={() => decrementAbilityDescription()} >
                            <NavigateBeforeIcon />
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo cursorClickable" src={PlusOneIcon}
                        id="leadershipPlusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo cursorClickable" src={Tier3Icon}
                        id="leadershipT3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo cursorClickable" src={Tier6Icon}
                        id="leadershipT6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo cursorClickable" src={Tier9Icon}
                        id="leadershipT9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo cursorClickable" src={Tier12Icon}
                        id="leadershipT12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo cursorClickable" src={Tier15Icon}
                        id="leadershipT15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={0.4} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo cursorClickable" src={Tier18Icon}
                        id="leadershipT18Talent" alt="Tier 18 Talent Effect"></img>
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
                                            onClick={() => { document.getElementById('TreeHeaderSection').scrollIntoView(); }}>
                                            <KeyboardArrowUpIcon style={{ fontSize: BUTTON_ICON_SIZE }} />
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

export { LeadershipTalentTreeComponent };