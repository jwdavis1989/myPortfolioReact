import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import ChineseVampireImage from '../resources/images/designExercise/ChineseVampireLeagueChampionPortrait.png';
import AbilityJadeReachIcon from '../resources/images/designExercise/AbilityJadeReach.png';
import AbilityVengefulLeapIcon from '../resources/images/designExercise/AbilityVengefulLeap.png';
import AbilityInsatiableTouchIcon from '../resources/images/designExercise/AbilityInsatiableTouch.png';
import AbilityMoonlightCurseIcon from '../resources/images/designExercise/AbilityMoonlightCurse.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function DesignExercises() {
    const [abilityDescription, setAbilityDescription] = useState(true);

    function RenderJiangshiQDescription(props) {
        let description = 0;
        if (props.slot === 1) {
            document.getElementById("jadeReachButton").className="ImageLogoSelected";
            document.getElementById("vengefulLeapButton").className="ImageLogo";
            document.getElementById("insatiableTouchButton").className="ImageLogo";
            document.getElementById("moonlightCurseButton").className="ImageLogo";
            description = <div>
                <h3>Q - JADE REACH:</h3>
                Yingyue steals Qi from a target within 600 range, dealing 80 / 100 / 120 / 140 / 160(+60 % AP) magic damage. If used on an enemy champion, she gains a stack of Qi.
                EMPOWERED: Jade Reach now heals Yingyue for 40 / 80 / 120 / 160 / 200(+5 % missing health)
                COOLDOWN: 9 / 7.9 / 6.8 / 5.7 / 4.6 seconds<br/><br/><br/>
            </div>;
        }
        else if (props.slot === 2) {
            document.getElementById("jadeReachButton").className="ImageLogo";
            document.getElementById("vengefulLeapButton").className="ImageLogoSelected";
            document.getElementById("insatiableTouchButton").className="ImageLogo";
            document.getElementById("moonlightCurseButton").className="ImageLogo";
            description = <div>
                <h3>W - RESENTFUL LUNGE:</h3>
                Yingyue leaps through the air, dashing to a target unit within 700 distance. When used on an enemy champion, they take 70/105/140/175/210(+40% AP) Magic Damage and she gains a stack of Qi.
                EMPOWERED: Resentful Lunge can be used a second time within 3 seconds for free. Additionally, the second use of Resentful Lunge also knocks the target up for 1 second, and afterwards slows them by 60% for 1.5 seconds.
                COOLDOWN: 8/7.5/7/6.5/6 seconds<br/><br/>
            </div>;
        }
        else if (props.slot === 3) {
            document.getElementById("jadeReachButton").className="ImageLogo";
            document.getElementById("vengefulLeapButton").className="ImageLogo";
            document.getElementById("insatiableTouchButton").className="ImageLogoSelected";
            document.getElementById("moonlightCurseButton").className="ImageLogo";
            description = <div>
                <h3>E - INSATIABLE TOUCH:</h3>
                Yingyue buffs an ally's omnivamp by 10/15/20/25/30% (+0.5% for every 1% Heal and Shield Power) for 2/2/2/3/4 seconds. Only affects attacks and abilities used on enemy champions. This ability can not be cast on yourself.
                EMPOWERED: Insatiable Touch now instantly cures Grievous Wounds and increases the ally's movement speed by 25% (+5% per 100 AP) for 6 seconds.
                COOLDOWN:  15/13.5/12/10.5/9 seconds<br/><br/>
            </div>;
        }
        else if (props.slot === 4) {
            document.getElementById("jadeReachButton").className="ImageLogo";
            document.getElementById("vengefulLeapButton").className="ImageLogo";
            document.getElementById("insatiableTouchButton").className="ImageLogo";
            document.getElementById("moonlightCurseButton").className="ImageLogoSelected";
            description = <div>
                <h3>R - MOONLIGHT CURSE:</h3>
                Yingyue temporarily shares her curse in an area within 950 range. After a 0.627 second delay, any enemy champions still in the zone take 100/200/300(+40%) Magic Damage, are slowed by 80% decaying over 4 seconds, and if they die within the next 2/4/6 seconds they are brought back as a zombie with rapidly decaying health that will attack the nearest enemy champions for up to 15 seconds. Whenever Yingyue uses Vengeful Lunge, all Zombies leap to the same target. Zombies deal 40−200(based on level) Magic Damage with an attack speed of 0.8.
                COOLDOWN: 120/100/80 seconds
            </div>;
        }

        return description;
    }
    return (
        <div>
            <div className="NormalPageLayout">
                <p className="HeaderTitleWide">
                    <EngineeringSharpIcon fontSize='inherit' /> DESIGN EXERCISES
                </p>
                <p className="HeaderTitleWide">
                    <EngineeringSharpIcon fontSize='inherit' /> LEAGUE OF LEGENDS CHAMPION CONCEPTS
                </p>
                <Grid id="Row 0" container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <p className="HeaderTitleWide">
                            <EngineeringSharpIcon fontSize='inherit' /> YINGYUE THE JIANGSHI
                        </p>
                    </Grid>
                </Grid>
                <Grid id="Row 1" container spacing={0}>
                    <Grid item xs={6}>
                        <Link to='/SWWLevelingOverhaul'>
                            <img src={ChineseVampireImage} width="100%" alt="Yingyue the Jiangshi" className="SWWBanner" />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            SUMMARY
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SmallHeaderTitleNoHover moveLeft35">
                            PASSIVE - QI
                        </div>
                        <div className="NormalPageLayoutLeft moveLeft35">
                            Every time Yingyue damages a champion with Jade Reach,
                            she gains a stack of Qi. When she reaches 3 stacks of Qi,
                            her next ability is empowered. She can hold up to 3 Qi at
                            a time and all are expended when an empowered ability is cast.
                        </div>
                    </Grid>
                </Grid>
                <Grid id="Row 2" container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <p className="SmallHeaderTitleNoHover">
                            <b>CLICK AN ABILITY TO SEE ITS DESCRIPTION:</b>
                        </p>
                        <br/>
                    </Grid>
                </Grid>
                <Grid id="Row 3" container spacing={0}>
                    <Grid item xs={3}>
                        <img onClick={() => setAbilityDescription(1)}
                            className="ImageLogo" src={AbilityJadeReachIcon} 
                            id="jadeReachButton" alt="Jade Reach"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <img onClick={() => setAbilityDescription(2)}
                            className="ImageLogo" src={AbilityVengefulLeapIcon} 
                            id="vengefulLeapButton" alt="Resentful Lunge"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <img onClick={() => setAbilityDescription(3)}
                            className="ImageLogo" src={AbilityInsatiableTouchIcon} 
                            id="insatiableTouchButton" alt="Insatiable Touch"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <img onClick={() => setAbilityDescription(4)}
                            className="ImageLogo" src={AbilityMoonlightCurseIcon} 
                            id="moonlightCurseButton" alt="Moonlight Curse"></img>
                    </Grid>
                </Grid>
                <Grid id="Row 4" container spacing={0}>
                    <Grid item xs={12}>
                        <br /><br />
                        <div id="JiangshiAbilityDescription" className="NormalPageLayoutLeft textFontPixel AbilityDescriptionSection">
                            {abilityDescription !== 1 && abilityDescription !== 2 && abilityDescription !== 3 && abilityDescription !== 4?
                                <div><br/><br/><br/><br/><br/><br/></div>: ""
                            }
                            {abilityDescription === 1 ?
                                <RenderJiangshiQDescription slot={1} /> : ""
                            }
                            {abilityDescription === 2 ?
                                <RenderJiangshiQDescription slot={2} /> : ""
                            }
                            {abilityDescription === 3 ?
                                <RenderJiangshiQDescription slot={3} /> : ""
                            }
                            {abilityDescription === 4 ?
                                <RenderJiangshiQDescription slot={4} /> : ""
                            }
                        </div>
                    </Grid>
                </Grid>
                <br/><br/><br/>
                <Grid id="Row 5" container spacing={0}>
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