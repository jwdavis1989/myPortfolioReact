import GamesSharpIcon from '@mui/icons-material/GamesSharp';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import MechShmupLink from "../resources/gamePrototypes/MechSchmup/ArcadeMechShootEmUpVersion06.exe";
import PhoenixWalkerTitleScreen from "../resources/images/gamePrototypes/gifs/PhoenixWalkerTitleScreen/PhoenixWalkerTitleScreen.gif";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { TwoFormsTwoGenresTemplate } from "../components/gamePrototypeTemplates/TwoFormsTwoGenresTemplate";
import { PhoenixBombTemplate } from "../components/gamePrototypeTemplates/PhoenixBombTemplate";

function VideoGamePrototypes() {
    const [hookOneExpanded, setHookOneExpanded] = useState(0);
    const [hookTwoExpanded, setHookTwoExpanded] = useState(0);

    return (
        <div className="NormalPageLayout">
            <p className="HeaderTitleNoHover">
                <GamesSharpIcon fontSize='inherit' /> VIDEO GAME PROTOTYPES
            </p>
            <h1 className="textFontPixel">
                PHOENIX WALKER
            </h1>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <img src={PhoenixWalkerTitleScreen} width="100%" alt='Phoenix Walker' className="SWWBanner" />
                    <p /><a href={MechShmupLink} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> DOWNLOAD INSTALLER
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <p className="SmallHeaderTitleNoHover width95">
                        <b>SUMMARY:</b>
                    </p>
                    <div className="NormalPageLayoutLeft ScrollingBox width75">
                        Have you ever played a shmup ("shoot-em-up") game and thought to yourself, "What if I could put this thing in reverse and
                        check out a different direction or go back for something I missed?"
                        <br />Do you ever find yourself thinking, "Yeah, this game is pretty cool, but I wish I could transform into a giant robot mech?"
                        <br />It's okay, we've all been there before my friend.
                        <br />Phoenix Walker is a fun genre-bending game that lets you freely switch between an on-the-rails shmup and an omni-directional
                        shooter similar to a twin-stick shooter.
                        <br />Can you master both forms to beat the boss?
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p className="SmallHeaderTitleNoHoverEvenMargin width100">
                        <b>WHAT'S THE HOOK?</b>
                    </p>
                    <div className="NormalPageLayout moveLeft10 width100">
                        <p>Click a Button to Expand the Section.</p>
                        {hookOneExpanded ?
                            <div>
                                <div className="AccordionButton width90" onClick={() => setHookOneExpanded(!hookOneExpanded)}>
                                    Two Forms-Two Genres <ExpandLessIcon fontSize='inherit' />
                                </div>
                                <TwoFormsTwoGenresTemplate />
                            </div>
                            : <div className="AccordionButton" onClick={() => setHookOneExpanded(!hookOneExpanded)}>
                                Two Forms-Two Genres <ExpandMoreIcon fontSize='inherit' />
                            </div>
                        }
                        {hookTwoExpanded ?
                            <div>
                                <div className="AccordionButton textAlignLeft width90" onClick={() => setHookTwoExpanded(!hookTwoExpanded)}>
                                Custom Path Phoenix Missile <ExpandLessIcon fontSize='inherit' />
                                </div>
                                <PhoenixBombTemplate />
                            </div>
                            : <div className="AccordionButton textAlignLeft" onClick={() => setHookTwoExpanded(!hookTwoExpanded)}>
                                Custom Path Phoenix Missile <ExpandMoreIcon fontSize='inherit' />
                            </div>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { VideoGamePrototypes };