import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@mui/material';

import AbilityPassiveQiIcon from '../resources/images/designExercise/AbilityPassiveQi.png';
import AbilityJadeReachIcon from '../resources/images/designExercise/AbilityJadeReach.png';
import AbilityVengefulLeapIcon from '../resources/images/designExercise/AbilityVengefulLeap.png';
import AbilityInsatiableTouchIcon from '../resources/images/designExercise/AbilityInsatiableTouch.png';
import AbilityMoonlightCurseIcon from '../resources/images/designExercise/AbilityMoonlightCurse.png';
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
        setAbilityDescription(false);
        setDesignInsightsVisible(false);
    }, []);

    function resetJiangshiAbilityHighlight() {
        document.getElementById("passiveQiButton").className = "ImageLogo";
        document.getElementById("Passive").className = "";
        document.getElementById("jadeReachButton").className = "ImageLogo";
        document.getElementById("Q").className = "";
        document.getElementById("resentfulLungeButton").className = "ImageLogo";
        document.getElementById("W").className = "";
        document.getElementById("insatiableTouchButton").className = "ImageLogo";
        document.getElementById("E").className = "";
        document.getElementById("moonlightCurseButton").className = "ImageLogo";
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
                <h2 className="SectionHeader">
                    Yingyue the Jiangshi - League of Legends Character Concept
                    <hr className="HorizontalLineBlue" />
                </h2>
                <p className="NormalPageLayout">
                    <img className="NormalPageLayout" src={ChineseVampireBanner}
                        alt="Yingyue the Jiangshi - League of Legends Character Concept" />
                    <div className="NormalPageLayoutLeft">
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
                    <h3 className="SectionHeader">
                        Interactive Abilities & Design Insights:
                        <hr className="HorizontalLineBlue" />
                    </h3>
                    <Grid id="Row 0 Design Insight and Help Buttons" container spacing={0} className='textAlignRight'>
                        <Grid item xs={8} />
                        <Grid item xs={4}>
                            <div>
                                <ButtonGroup variant="text" className='NavBarButtonGroup'>
                                    <Button className="NavBarButton"
                                        title='Click an ability icon to see its description. Click Design Insights or Ability Details to toggle between Design Insights or Ability Details.'
                                        onClick={() => { setAbilityDescription(false); resetJiangshiAbilityHighlight() }}
                                        >
                                        <HelpOutlineIcon />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <p />
                    <Grid id="Row 1 Ability Icons" container spacing={0}>
                        <Grid item xs={1.5} />
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(1)}
                                className="ImageLogo" src={AbilityPassiveQiIcon}
                                id="passiveQiButton" alt="Qi Siphon" title='Passive: Qi Siphon' />
                            <p className='textAlignCenter'>
                                <b id='Passive'>Passive</b>
                            </p>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(2)}
                                className="ImageLogo" src={AbilityJadeReachIcon}
                                id="jadeReachButton" alt="Jade Reach" title='Q: Jade Reach' />
                            <p className='textAlignCenter'>
                                <b id='Q'>Q</b>
                            </p>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(3)}
                                className="ImageLogo" src={AbilityVengefulLeapIcon}
                                id="resentfulLungeButton" alt="Resentful Lunge" title='W: Resentful Lunge' />
                            <p className='textAlignCenter'>
                                <b id='W'>W</b>
                            </p>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(4)}
                                className="ImageLogo" src={AbilityInsatiableTouchIcon}
                                id="insatiableTouchButton" alt="Insatiable Touch" title='E: Insatiable Touch' />
                            <p className='textAlignCenter'>
                                <b id='E'>E</b>
                            </p>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <img onClick={() => setAbilityDescription(5)}
                                className="ImageLogo" src={AbilityMoonlightCurseIcon}
                                id="moonlightCurseButton" alt="Moonlight Curse" title='R: Moonlight Curse' />
                            <p className='textAlignCenter'>
                                <b id='R'>R</b>
                            </p>
                        </Grid>
                        <Grid item xs={1.5} />
                    </Grid>
                    <p />
                    <Grid id="Row 2 Ability Descriptions" container spacing={0}>
                        <Grid item xs={12}>
                            <br />
                            <div id="JiangshiAbilityDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                                {!abilityDescription >= 1 ?
                                    <h3 className="textAlignCenter animationcolorWhiteOrangeFlashing">
                                        Click an ability icon to see its Description and Design Insights.
                                    </h3> : <RenderJiangshiDescription slot={abilityDescription} />}
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