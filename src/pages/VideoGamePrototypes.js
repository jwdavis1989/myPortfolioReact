import DownloadIcon from '@mui/icons-material/Download';
import { Button, Grid } from '@mui/material';
import React from 'react';
import MechShmupLink from "../resources/gamePrototypes/MechSchmup/ArcadeMechShootEmUpVersion06.exe";

import { TwoFormsTwoGenresTemplate } from "../components/gamePrototypeTemplates/TwoFormsTwoGenresTemplate";
import { PhoenixBombTemplate } from "../components/gamePrototypeTemplates/PhoenixBombTemplate";
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";

function VideoGamePrototypes() {

    return (
        <div>
            <div className='NavBarSectionPadding' />
            <div>
                <h3 className="SectionHeader">
                    Phoenix Walker - Game Prototype
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p>
                    <div class="auto-resizable-iframe">
                        <div>
                            <iframe width="792" height="294" src="https://www.youtube.com/embed/uWy9_vH6XGQ"
                                title="Phoenix Walker Game Prototype Demo" frameborder="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <p>
                        <Grid container spacing={0}>
                            <Grid item xs={1.2} />
                            <Grid item xs={9.6}>
                                <a href={MechShmupLink} target="_blank" rel="noreferrer">
                                    <Button className="ImageLogo" startIcon={<DownloadIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}
                                        style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }} variant='outlined'>
                                        DOWNLOAD INSTALLER
                                    </Button>
                                </a>
                            </Grid>
                        </Grid>
                    </p>
                    <div className="textAlignLeft animationFadeIn SectionCard">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <p>
                                <span className='ContributionsCardGameDesign'>Game Designer:</span> Designed primary gameplay loop, player transformation, phoenix missiles, enemies, and train boss fight.
                                <br />
                                <br />
                                <span className='ContributionsCardProgramming'>Programmer:</span> Programmed primary gameplay loop, player controller, phonix missiles, enemies, victory/defeat, train boss fight.
                                <br />
                                <br />
                                <span className='ContributionsCardArt'>Artist:</span> Drew pixel-art sprites for player, power-ups, phoenix missiles, User Interface, enemies, railroad, and train boss fight.
                                <br />
                                <br />
                                <span className='ContributionsCardMusic'>Music Composer:</span> Composed two songs for the normal gameplay level, and bossfight theme.
                                <br />
                                <br />
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Overview:
                            </b>
                            <br />
                            Have you ever played a shmup ("shoot-em-up") game and thought to yourself, "What if I could put this thing in reverse and
                            check out a different direction or go back for something I missed?" Do you ever find yourself thinking, "Yeah, this game is pretty cool, but I wish I could transform into a giant robot mech?"
                            <p>
                                It's okay, we've all been there before my friend. Phoenix Walker is a fun genre-bending game that lets you freely switch between an on-the-rails shmup and an omni-directional
                                shooter similar to a twin-stick shooter.
                            </p>
                            <p>
                                Can you master both forms to beat the boss?
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Design Goals:
                            </b>
                            <ul>
                                <li>
                                    Create a fun arcade schmup game that combines the on-rails shoot-em-up and free roaming twin-stick shooter genres.
                                </li>
                                <li>
                                    Design and implement a more strategic screen clearing tool that allows players to get creative.
                                </li>
                                <li>
                                    Demonstrate skills in Gameplay Design, Balancing, Sprite Art, Music Composition, and converting an idea into a full game prototype.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <div>
                                <b className="textColorBlue">
                                    Two Forms-Two Genres:
                                </b>
                                <TwoFormsTwoGenresTemplate />
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Draw Your Own Custom Missile Routes:
                                </b>
                                <PhoenixBombTemplate />
                            </div>
                        </p>
                    </div>
                </p>
            </div>
        </div>
    );
}

export { VideoGamePrototypes };