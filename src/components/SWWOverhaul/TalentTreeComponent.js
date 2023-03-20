import { Grid } from '@material-ui/core';
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

function TalentTreeComponent(props) {
    const [abilityDescription, setAbilityDescription] = useState(0);
    const [designInsightsVisible, setDesignInsightsVisible] = useState(true);

    useEffect(() => {
        setAbilityDescription(0);
        setDesignInsightsVisible(false);
    }, []);

    function resetTalentHighlight() {
        document.getElementById("plusOneTalent").className = "ImageLogo";
        document.getElementById("t3Talent").className = "ImageLogo";
        document.getElementById("t6Talent").className = "ImageLogo";
        document.getElementById("t9Talent").className = "ImageLogo";
        document.getElementById("t12Talent").className = "ImageLogo";
        document.getElementById("t15Talent").className = "ImageLogo";
        document.getElementById("t18Talent").className = "ImageLogo";
    }

    function RenderTalentDescription(props) {
        let description = "";
        resetTalentHighlight();
        if (props.slot === 1) {
            document.getElementById("plusOneTalent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "+1 EFFECT"
            }
            else description = "+1 EFFECT INSIGHT"
        }
        if (props.slot === 2) {
            document.getElementById("t3Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T3"
            }
            else description = "T3 INSIGHT"
        }
        else if (props.slot === 3) {
            document.getElementById("t6Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T6"
            }
            else description = "T6 INSIGHT"
        }
        else if (props.slot === 4) {
            document.getElementById("t9Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T9"
            }
            else description = "T9 INSIGHT"
        }
        else if (props.slot === 5) {
            document.getElementById("t12Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T12"
            }
            else description = "T12 INSIGHT"
        }
        else if (props.slot === 6) {
            document.getElementById("t15Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T15"
            }
            else description = "T15 INSIGHT"
        }
        else if (props.slot === 7) {
            document.getElementById("t18Talent").className = "ImageLogoSelected";
            if (!designInsightsVisible) {
                description = "T18"
            }
            else description = "T18 INSIGHT"
        }
        return description;
    }

    return (
        <div className="NormalPageLayout">
            <Grid id="Row 0 Yingyue Title" container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> SKILL TREE 1
                    </p>
                </Grid>
            </Grid>
            <Grid id="Row 1 Yingyue Art" container spacing={0}>
                <Grid item xs={6}>
                    <img src={LeadershipIcon} width="100%" alt="Leadership Tree" className="SWWBanner" />
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
                    <div className="NormalPageLayoutLeft moveLeft35">
                        Agressive Enchanter Support
                    </div>
                    <br />
                    <div className="SmallHeaderTitleNoHover moveLeft35">
                        ARTWORK BY:
                    </div>
                    <div className="NormalPageLayoutLeft moveLeft35">
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
                <Grid item xs={2} />
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(1)}
                        className="ImageLogo" src={PlusOneIcon}
                        id="plusOneTalent" alt="Plus One Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(2)}
                        className="ImageLogo" src={Tier3Icon}
                        id="t3Talent" alt="Tier 3 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(3)}
                        className="ImageLogo" src={Tier6Icon}
                        id="t6Talent" alt="Tier 6 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(4)}
                        className="ImageLogo" src={Tier9Icon}
                        id="t9Talent" alt="Tier 9 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(5)}
                        className="ImageLogo" src={Tier12Icon}
                        id="t12Talent" alt="Tier 12 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(6)}
                        className="ImageLogo" src={Tier15Icon}
                        id="t15Talent" alt="Tier 15 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    <img onClick={() => setAbilityDescription(7)}
                        className="ImageLogo" src={Tier18Icon}
                        id="t18Talent" alt="Tier 18 Talent Effect"></img>
                </Grid>
                <Grid item xs={1}>
                    {abilityDescription ?
                        <div className="DesignInsightButton" onClick={() => setDesignInsightsVisible(!designInsightsVisible)}>
                            Toggle<br />Design<br />Insights
                        </div> :
                        ""
                    }
                </Grid>
            </Grid>
            <Grid id="Row 3 Ability Descriptions" container spacing={0}>
                <Grid item xs={12}>
                    <br /><br />
                    <div id="TalentTreeDescription" className="NormalPageLayoutLeft AbilityDescriptionSection">
                        {!abilityDescription >= 1 ?
                            <h3 className="textFontPixel textAlignCenter">CLICK AN ABILITY ICON TO SEE ITS DESCRIPTION
                                <br /><br /><br /><br /><br /><br /></h3> : <RenderTalentDescription slot={abilityDescription} />}
                    </div>
                    <br /><br /><br />
                </Grid>
            </Grid>
            <br /><br /><br /><br /><br /><br />
        </div >
    );
}

export { TalentTreeComponent };