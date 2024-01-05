import React, { useState, useEffect } from 'react';
import { Grid, Button, ButtonGroup } from '@mui/material';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants";

import AbilityPassiveQiIcon from '../resources/images/designExercise/AbilityPassiveQi.png';
import AbilityJadeReachIcon from '../resources/images/designExercise/AbilityJadeReach.png';
import AbilityVengefulLeapIcon from '../resources/images/designExercise/AbilityVengefulLeap.png';
import AbilityInsatiableTouchIcon from '../resources/images/designExercise/AbilityInsatiableTouch.png';
import AbilityMoonlightCurseIcon from '../resources/images/designExercise/AbilityMoonlightCurse.png';
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { QiSiphonTemplate } from '../components/designAbilityTemplates/QiSiphonTemplate';
import { JadeReachTemplate } from '../components/designAbilityTemplates/JadeReachTemplate';
import { ResentfulLungeTemplate } from '../components/designAbilityTemplates/ResentfulLungeTemplate';
import { InsatiableTouchTemplate } from '../components/designAbilityTemplates/InsatiableTouchTemplate';
import { MoonlitCurseTemplate } from '../components/designAbilityTemplates/MoonlitCurseTemplate';
import { JadeReachDesignTemplate } from '../components/designAbilityTemplates/JadeReachDesignTemplate';
import { QiSiphonDesignTemplate } from '../components/designAbilityTemplates/QiSiphonDesignTemplate';
import { ResentfulLungeDesignTemplate } from '../components/designAbilityTemplates/ResentfulLungeDesignTemplate';
import { InsatiableTouchDesignTemplate } from '../components/designAbilityTemplates/InsatiableTouchDesignTemplate';
import { MoonlitCurseDesignTemplate } from '../components/designAbilityTemplates/MoonlitCurseDesignTemplate';

function DesignExercises() {
    const [abilityDescription, setAbilityDescription] = useState(0);
    const [designInsightsVisible, setDesignInsightsVisible] = useState(true);

    useEffect(() => {
        setAbilityDescription(0);
        setDesignInsightsVisible(false);
    }, []);

    function decrementAbilityDescription() {
        if (abilityDescription > 1 && abilityDescription < 6) {
            setAbilityDescription(abilityDescription - 1);
        }
        else {
            setAbilityDescription(5);
        }
    }

    function incrementAbilityDescription() {
        if (abilityDescription < 5 && abilityDescription > 0) {
            setAbilityDescription(abilityDescription + 1);
        }
        else {
            setAbilityDescription(1);
        }
    }

    function resetJiangshiAbilityHighlight() {
        document.getElementById("passiveQiButton").className = "ImageLogo cursorClickable";
        document.getElementById("Passive").className = "";
        document.getElementById("jadeReachButton").className = "ImageLogo cursorClickable";
        document.getElementById("Q").className = "";
        document.getElementById("resentfulLungeButton").className = "ImageLogo cursorClickable";
        document.getElementById("W").className = "";
        document.getElementById("insatiableTouchButton").className = "ImageLogo cursorClickable";
        document.getElementById("E").className = "";
        document.getElementById("moonlightCurseButton").className = "ImageLogo cursorClickable";
        document.getElementById("R").className = "";
    }

    function RenderJiangshiDescription(props) {
        let description = "";
        resetJiangshiAbilityHighlight();
        if (props.slot === 1) {
            document.getElementById("passiveQiButton").className = "ImageLogoSelected";
            document.getElementById("Passive").className = "textColorRed";
            if (!designInsightsVisible) {
                description = <QiSiphonTemplate />
            }
            else description = <QiSiphonDesignTemplate />
        }
        if (props.slot === 2) {
            document.getElementById("jadeReachButton").className = "ImageLogoSelected";
            document.getElementById("Q").className = "textColorRed";
            if (!designInsightsVisible) {
                description = <JadeReachTemplate />
            }
            else description = <JadeReachDesignTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("resentfulLungeButton").className = "ImageLogoSelected";
            document.getElementById("W").className = "textColorRed";
            if (!designInsightsVisible) {
                description = <ResentfulLungeTemplate />
            }
            else description = <ResentfulLungeDesignTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("insatiableTouchButton").className = "ImageLogoSelected";
            document.getElementById("E").className = "textColorRed";
            if (!designInsightsVisible) {
                description = <InsatiableTouchTemplate />
            }
            else description = <InsatiableTouchDesignTemplate />
        }
        else if (props.slot === 5) {
            document.getElementById("moonlightCurseButton").className = "ImageLogoSelected";
            document.getElementById("R").className = "textColorRed";
            if (!designInsightsVisible) {
                description = <MoonlitCurseTemplate />
            }
            else description = <MoonlitCurseDesignTemplate />
        }
        return description;
    }
    return (
        <div>
            <div>
                <h3 className="SectionHeader">
                    Yingyue the Jiangshi - League of Legends Character Concept
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p>
                    <img className="NormalPageLayout" src={ChineseVampireBanner}
                        alt="Yingyue the Jiangshi - League of Legends Character Concept" />
                    <div className="textAlignLeft animationFadeIn">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <br />
                            Game Designer, Writer
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Overview:
                            </b>
                            <br />
                            Yingyue was designed because League of Legends, at the time of writing this,
                            does not have any support characters that utilize the Lifesteal mechanic.
                            Additionally, I wanted to create a very aggressive support character that would
                            be very true to her theme as a Chinese Vampire.
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Design Exercise Goals:
                            </b>
                            <ul>
                                <li>
                                    Create a fun new League of Legends character to fill
                                    the aggressive/Lifesteal support niche that is currently empty.
                                </li>
                                <li>
                                    Demonstrate skills in Gameplay Design, Balancing, and converting
                                    an idea into a full character.
                                </li>
                                <li>
                                    Create a character whose story would interlock well with many existing
                                    character plot hooks to provide many storyline opportunities for Riot Games.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Lore:
                            </b>
                            <br />
                            Yingyue was an Ionian priestess killed during the Noxian invasion of Ionia.
                            Her spirit was never put to rest, and remained trapped in her
                            corpse for years.
                            When her jade eyes finally opened, she had become a Jiangshi, a Vampiric Lifestealer
                            of Qi energy that stalks the moonlit hours.
                            Now she hunts the Noxians that cursed her.
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Role:
                            </b>
                            <br />
                            Agressive Enchanter Support
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Artwork by:
                            </b>
                            <br />
                            <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                                Ruo Yu
                            </a>
                        </p>
                    </div>
                </p>
                <p>
                    <h4 id="InteractiveDemoHeader" className="SectionHeader">
                        Interactive Abilities & Design Insights:
                        <hr className="HorizontalLineBlue" />
                    </h4>
                    <Grid id="Row 0 Help Buttons" container spacing={0} className='textAlignRight'>
                        <Grid item xs={8} />
                        <Grid item xs={4}>
                            <div>
                                <ButtonGroup variant="text" className='NavBarButtonGroup'>
                                    <Button className="NavBarButton"
                                        title='Click an ability icon to the left to learn more.'
                                        onClick={() => { setAbilityDescription(false); resetJiangshiAbilityHighlight() }}>
                                        <HelpOutlineIcon /> Help
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <p />
                    <Grid id="Row 1 Ability Icons" container spacing={0} className='textAlignCenter' 
                    direction="row" justifyContent="space-evenly"
                    alignItems="flex-start" >
                        <Grid item xs={0.8} className='textAlignCenter'>
                            <Button variant="outlined" style={{ minWidth: '1px', maxWidth: "30px", minHeight: '60%', maxHeight: '60%' }}
                                title='Previous Ability'
                                onClick={() => decrementAbilityDescription()} >
                                <NavigateBeforeIcon style={{ minWidth: '1px', maxWidth: "30px", minHeight: '60%', maxHeight: '60%' }} />
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(1)}
                                className="ImageLogo cursorClickable" src={AbilityPassiveQiIcon}
                                id="passiveQiButton" alt="Qi Siphon" title='Passive: Qi Siphon' />
                            <p className='textAlignCenter'>
                                <b id='Passive'>Passive</b>
                            </p>
                        </Grid>
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(2)}
                                className="ImageLogo cursorClickable" src={AbilityJadeReachIcon}
                                id="jadeReachButton" alt="Jade Reach" title='Q: Jade Reach' />
                            <p className='textAlignCenter'>
                                <b id='Q'>Q</b>
                            </p>
                        </Grid>
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(3)}
                                className="ImageLogo cursorClickable" src={AbilityVengefulLeapIcon}
                                id="resentfulLungeButton" alt="Resentful Lunge" title='W: Resentful Lunge' />
                            <p className='textAlignCenter'>
                                <b id='W'>W</b>
                            </p>
                        </Grid>
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(4)}
                                className="ImageLogo cursorClickable" src={AbilityInsatiableTouchIcon}
                                id="insatiableTouchButton" alt="Insatiable Touch" title='E: Insatiable Touch' />
                            <p className='textAlignCenter'>
                                <b id='E'>E</b>
                            </p>
                        </Grid>
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(5)}
                                className="ImageLogo cursorClickable" src={AbilityMoonlightCurseIcon}
                                id="moonlightCurseButton" alt="Moonlight Curse" title='R: Moonlight Curse' />
                            <p className='textAlignCenter'>
                                <b id='R'>R</b>
                            </p>
                        </Grid>
                        <Grid item xs={0.8} className='textAlignCenter'>
                            <Button variant="outlined" style={{ minWidth: '1px', maxWidth: "30px", minHeight: '60%', maxHeight: '60%' }}
                                title='Next Ability'
                                onClick={() => incrementAbilityDescription()}>
                                <NavigateNextIcon style={{ minWidth: '1px', maxWidth: "30px", minHeight: '60%', maxHeight: '60%' }} />
                            </Button>
                        </Grid>
                    </Grid>
                    <p />
                    <Grid id="Row 2 Ability Descriptions" container spacing={0}>
                        <Grid item xs={12}>
                            <br />
                            <div id="JiangshiAbilityDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                                {!abilityDescription >= 1 ?
                                    <h4 className="textAlignCenter animationcolorWhiteOrangeFlashing">
                                        Click an ability icon to see its Description and Design Insights.
                                    </h4> : <div><RenderJiangshiDescription slot={abilityDescription} />
                                        <p>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Button variant='outlined'
                                                    title='Return to Top' style={{ fontSize: BUTTON_FONT_SIZE }}
                                                    onClick={() => { document.getElementById('InteractiveDemoHeader').scrollIntoView(); }}
                                                    startIcon={<KeyboardArrowUpIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}>
                                                    Return to Top
                                                </Button>
                                            </Grid>
                                        </p>
                                    </div>}
                            </div>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Grid>
                    </Grid>
                </p>
            </div>
        </div>
    );
}

export { DesignExercises };