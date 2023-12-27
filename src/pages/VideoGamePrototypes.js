import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import React from 'react';
import MechShmupLink from "../resources/gamePrototypes/MechSchmup/ArcadeMechShootEmUpVersion06.exe";

import { TwoFormsTwoGenresTemplate } from "../components/gamePrototypeTemplates/TwoFormsTwoGenresTemplate";
import { PhoenixBombTemplate } from "../components/gamePrototypeTemplates/PhoenixBombTemplate";

function VideoGamePrototypes() {
    return (
        <div>
            <div>
                <h2 className="SectionHeader">
                    Phoenix Walker - Game Prototype
                    <hr className="HorizontalLineBlue" />
                </h2>
                <p className="NormalPageLayout">
                    <div class="auto-resizable-iframe">
                        <div>
                            <iframe width="792" height="294" src="https://www.youtube.com/embed/uWy9_vH6XGQ"
                                title="Phoenix Walker Game Prototype Demo" frameborder="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <p>

                        <a href={MechShmupLink} target="_blank" rel="noreferrer">
                            <Button className="ImageLogo" startIcon={<DownloadIcon />}>
                                DOWNLOAD INSTALLER
                            </Button>
                        </a>
                    </p>
                    <div className="textAlignLeft animationFadeIn">
                    <p>
                            <b className='textColorBlue'>Contributions:</b> 
                            <br />
                            Game Designer, Programmer, Sprite Artist, Music Composer
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export { VideoGamePrototypes };