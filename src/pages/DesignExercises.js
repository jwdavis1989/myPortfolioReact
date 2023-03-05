import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import ChineseVampireImage from '../resources/images/designExercise/ChineseVampireLeagueChampionPortrait.png';
import AbilityPassiveQiIcon from '../resources/images/designExercise/AbilityPassiveQi.png';
import AbilityJadeReachIcon from '../resources/images/designExercise/AbilityJadeReach.png';
import AbilityVengefulLeapIcon from '../resources/images/designExercise/AbilityVengefulLeap.png';
import AbilityInsatiableTouchIcon from '../resources/images/designExercise/AbilityInsatiableTouch.png';
import AbilityMoonlightCurseIcon from '../resources/images/designExercise/AbilityMoonlightCurse.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { QiSiphonTemplate } from '../components/designAbilityTemplates/QiSiphonTemplate';
import { JadeReachTemplate } from '../components/designAbilityTemplates/JadeReachTemplate';
import { ResentfulLungeTemplate } from '../components/designAbilityTemplates/ResentfulLungeTemplate';
import { InsatiableTouchTemplate } from '../components/designAbilityTemplates/InsatiableTouchTemplate';
import { MoonlitCurseTemplate } from '../components/designAbilityTemplates/MoonlitCurseTemplate';

function DesignExercises() {
    const [abilityDescription, setAbilityDescription] = useState(true);

    function resetJiangshiAbilityHighlight() {
        document.getElementById("passiveQiButton").className = "ImageLogo";
        document.getElementById("jadeReachButton").className = "ImageLogo";
        document.getElementById("vengefulLeapButton").className = "ImageLogo";
        document.getElementById("insatiableTouchButton").className = "ImageLogo";
        document.getElementById("moonlightCurseButton").className = "ImageLogo";
    }

    function RenderJiangshiQDescription(props) {
        let description = "";
        resetJiangshiAbilityHighlight();
        if (props.slot === 0) {
            document.getElementById("passiveQiButton").className = "ImageLogoSelected";
            description = <QiSiphonTemplate />
        }
        if (props.slot === 1) {
            document.getElementById("jadeReachButton").className = "ImageLogoSelected";
            description = <JadeReachTemplate />
        }
        else if (props.slot === 2) {
            document.getElementById("vengefulLeapButton").className = "ImageLogoSelected";
            description = <ResentfulLungeTemplate />
        }
        else if (props.slot === 3) {
            document.getElementById("insatiableTouchButton").className = "ImageLogoSelected";
            description = <InsatiableTouchTemplate />
        }
        else if (props.slot === 4) {
            document.getElementById("moonlightCurseButton").className = "ImageLogoSelected";
            description = <MoonlitCurseTemplate />
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
                            <img src={ChineseVampireImage} width="100%" alt="Yingyue the Jiangshi, Art by Chen Ruo Yu" className="SWWBanner" />
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            LORE
                        </div>
                        <div className="NormalPageLayoutLeft moveLeft35">
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
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            Agressive <br /> Enchanter <br /> Support
                        </div>
                    </Grid>
                </Grid>
                <Grid id="Row 2 Ability Icons" container spacing={1}>
                    <Grid item xs={4} />
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(0)}
                            className="ImageLogo" src={AbilityPassiveQiIcon}
                            id="passiveQiButton" alt="Jade Reach"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(1)}
                            className="ImageLogo" src={AbilityJadeReachIcon}
                            id="jadeReachButton" alt="Jade Reach"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(2)}
                            className="ImageLogo" src={AbilityVengefulLeapIcon}
                            id="vengefulLeapButton" alt="Resentful Lunge"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(3)}
                            className="ImageLogo" src={AbilityInsatiableTouchIcon}
                            id="insatiableTouchButton" alt="Insatiable Touch"></img>
                    </Grid>
                    <Grid item xs={1}>
                        <img onClick={() => setAbilityDescription(4)}
                            className="ImageLogo" src={AbilityMoonlightCurseIcon}
                            id="moonlightCurseButton" alt="Moonlight Curse"></img>
                    </Grid>
                </Grid>
                <Grid id="Row 3 Ability Descriptions" container spacing={0}>
                    <Grid item xs={12}>
                        <br /><br />
                        <div id="JiangshiAbilityDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                            {abilityDescription !== 0 &&
                                abilityDescription !== 1 &&
                                abilityDescription !== 2 &&
                                abilityDescription !== 3 &&
                                abilityDescription !== 4 ?
                                <h3 className="textFontPixel textAlignCenter">CLICK AN ABILITY ICON TO SEE ITS DESCRIPTION
                                <br /><br /><br /><br /><br /><br /></h3> : <RenderJiangshiQDescription slot={abilityDescription} />}
                            
                        </div>
                    </Grid>
                </Grid>
                <br /><br /><br />
                <Grid id="Row 4 WIP" container spacing={0}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Link to='/SWWLevelingOverhaul'>
                            <p className="HeaderTitle">
                                <ZoomInIcon fontSize='inherit' /> Click to Learn More
                            </p>
                        </Link>
                        <p className="HeaderTitle">
                            <a href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                <LocalGroceryStoreIcon fontSize='inherit' /> Link to Store Page
                            </a>
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export { DesignExercises };