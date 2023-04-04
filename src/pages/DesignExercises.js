import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import ChineseVampireImage from '../resources/images/designExercise/ChineseVampireLeagueChampionPortrait.png';
import AbilityPassiveQiIcon from '../resources/images/designExercise/AbilityPassiveQi.png';
import AbilityJadeReachIcon from '../resources/images/designExercise/AbilityJadeReach.png';
import AbilityVengefulLeapIcon from '../resources/images/designExercise/AbilityVengefulLeap.png';
import AbilityInsatiableTouchIcon from '../resources/images/designExercise/AbilityInsatiableTouch.png';
import AbilityMoonlightCurseIcon from '../resources/images/designExercise/AbilityMoonlightCurse.png';


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
        document.getElementById("jadeReachButton").className = "ImageLogo";
        document.getElementById("resentfulLungeButton").className = "ImageLogo";
        document.getElementById("insatiableTouchButton").className = "ImageLogo";
        document.getElementById("moonlightCurseButton").className = "ImageLogo";
    }

    function RenderJiangshiDescription(props) {
        let description = "";
        resetJiangshiAbilityHighlight();
        if (props.slot === 1) {
            document.getElementById("passiveQiButton").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <QiSiphonTemplate />
            }
            else description = <QiSiphonDesignTemplate />
        }
        if (props.slot === 2) {
            document.getElementById("jadeReachButton").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <JadeReachTemplate />
            }
            else description = <JadeReachDesignTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("resentfulLungeButton").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <ResentfulLungeTemplate />
            }
            else description = <ResentfulLungeDesignTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("insatiableTouchButton").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <InsatiableTouchTemplate />
            }
            else description = <InsatiableTouchDesignTemplate />
        }
        else if (props.slot === 5) {
            document.getElementById("moonlightCurseButton").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = <MoonlitCurseTemplate />
            }
            else description = <MoonlitCurseDesignTemplate />
        }
        return description;
    }
    return (
        <div>
            <div className="NormalPageLayout">
                <p className="HeaderTitleWide">
                    <EngineeringSharpIcon fontSize='inherit' /> DESIGN EXERCISES
                </p>
                <h1 className="textFontPixel">
                    LEAGUE OF LEGENDS CHAMPION CONCEPTS
                </h1>
                <Grid id="Row 0 Yingyue Title" container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <p className="HeaderTitleWide">
                            <EngineeringSharpIcon fontSize='inherit' /> YINGYUE THE JIANGSHI
                        </p>
                    </Grid>
                </Grid>
                <Grid id="Row 1 Yingyue Art" container spacing={0}>
                    <Grid item xs={6}>
                        <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                            <img src={ChineseVampireImage} width="100%" alt="Yingyue the Jiangshi, Art by Chen Ruo Yu" className="CharacterArt" />
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            LORE
                        </div>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35">
                            Yingyue was an Ionian priestess killed during the Noxian invasion of Ionia.
                            Her spirit was never put to rest, and remained trapped in her
                            corpse for years.
                            When her jade eyes finally opened, she had become a Jiangshi, a Vampiric Lifestealer
                            of Qi energy that stalks the moonlit hours.
                            Now she hunts the Noxians that cursed her.
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            ROLE
                        </div>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35 textAlignCenter">
                            Agressive Enchanter Support
                        </div>
                        <br />
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            ARTWORK BY:
                        </div>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35 textAlignCenter">
                            Ruo Yu <br />
                        </div>
                        <p className="SmallHeaderTitleNoHover moveLeft35">
                            <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                                View Ruo Yu's Portfolio
                            </a>
                        </p>
                    </Grid>
                </Grid>
                <Grid id="Row 2 Ability Icons" container spacing={1}>
                    <Grid item xs={3} />
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(1)}
                            className="ImageLogo" src={AbilityPassiveQiIcon}
                            id="passiveQiButton" alt="Qi Siphon"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(2)}
                            className="ImageLogo" src={AbilityJadeReachIcon}
                            id="jadeReachButton" alt="Jade Reach"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(3)}
                            className="ImageLogo" src={AbilityVengefulLeapIcon}
                            id="resentfulLungeButton" alt="Resentful Lunge"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(4)}
                            className="ImageLogo" src={AbilityInsatiableTouchIcon}
                            id="insatiableTouchButton" alt="Insatiable Touch"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(5)}
                            className="ImageLogo" src={AbilityMoonlightCurseIcon}
                            id="moonlightCurseButton" alt="Moonlight Curse"></img>
                    </Grid>
                    <Grid item xs={1}>
                        {abilityDescription ?
                            <div className="DesignInsightButton" onClick={() => setDesignInsightsVisible(!designInsightsVisible)}>
                                Design Insights
                            </div> :
                            ""
                        }
                    </Grid>
                </Grid>
                <Grid id="Row 3 Ability Descriptions" container spacing={0}>
                    <Grid item xs={12}>
                        <br />
                        <div id="JiangshiAbilityDescription" className="NormalPageLayoutLeftSmaller AbilityDescriptionSection ScrollingBox">
                            {!abilityDescription >= 1 ?
                                <h3 className="textFontPixel textAlignCenter">CLICK AN ABILITY ICON TO SEE ITS DESCRIPTION
                                </h3> : <RenderJiangshiDescription slot={abilityDescription} />}
                        </div>
                        <br /><br /><br />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export { DesignExercises };