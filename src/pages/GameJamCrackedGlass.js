import DownloadIcon from '@mui/icons-material/Download';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';

import CrackedGlassDownload from "../resources/gamePrototypes/CrackedGlassUnderwaterHorrorJam.zip";
import CrackedGlassDesignDocument from "../resources/handouts/CrackedGlassDesignDocument.pdf";
import CrackedGlassRankings from "../resources/images/gamePrototypes/CrackedGlassRankings.png";
//import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";

function GameJamCrackedGlass() {

    return (
        <div>
            <div>
                <h3 className="SectionHeader">
                    Cracked Glass - Underwater Horror Jam 2024
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p>
                    <div class="auto-resizable-iframe">
                        <div>
                            <iframe width="792" height="294" src="https://www.youtube.com/embed/GNVOkna3ZhM"
                                title="Cracked Glass Game Jam Demo" frameborder="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <p>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={10}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                        component="a" href={CrackedGlassDownload} target="_blank" rel="noreferrer">
                                        Download
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<EmojiEventsIcon />}
                                        component="a" href="https://itch.io/jam/underwater-horror-jam/results/mechanics" target="_blank" rel="noreferrer">
                                        Jam Rankings
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </p>
                    <div className="textAlignCenter textColorBlue">
                        <b>
                            Documentation
                        </b>
                        <p />
                    </div>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={10}>
                            <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                    component="a" href={CrackedGlassDesignDocument} target="_blank" rel="noreferrer">
                                    Design Document
                                </Button>
                                <Button className="ImageLogo" startIcon={<ListAltIcon />}
                                    component="a" href="https://trello.com/b/crldYWZA/underwater-horror-jam-march-28th-2024" target="_blank" rel="noreferrer">
                                    Scrum Board
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <div className="textAlignCenter textColorBlue">
                        <p>
                            <b>
                                Rankings Preview
                            </b>
                            <p />
                            <Grid container direction="row" justifyContent="center" alignItems="center" >
                                <Grid item xs={10}>
                                    <a href="https://itch.io/jam/underwater-horror-jam/results/mechanics" target="_blank" rel="noreferrer" >
                                        <img src={CrackedGlassRankings} alt="Rankings Preview" className='imageMaxSize100' />
                                    </a>
                                </Grid>
                            </Grid>
                        </p>
                    </div>
                    <div className="textAlignLeft animationFadeIn NormalPageWithLRPadding">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <br />
                            Product Owner, Scrum Master, Game Designer, Programmer (Physics, Player, Shotgun, Enemy AI, Main Gameplay Loop), Artist (Enemy, Tileset)
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Overview:
                            </b>
                            <br />
                            While exploring a series of abandoned underwater facilities, you are attacked by a massive leviathan.
                            This deep sea 2D platforming shooter is broken into 3 phases: Defense, Gather, and Repair.
                            <p>
                                Master all three to send the Leviathan to its watery grave.
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Design Goals:
                            </b>
                            <ul>
                                <li>
                                    Form a team and lead them through entering a game jam designed around a specific theme.
                                </li>
                                <li>
                                    Design and implement an underwater horror game that best shows off the
                                    mechanical depth that a three-programmer team can enable with limited art assets.
                                </li>
                                <li>
                                    Demonstrate skills in Teamwork, Leadership, Gameplay Design, Programming,
                                    and converting an idea into a full game within a finite time limit
                                    while using SCRUM best-practices.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <div>
                                <b className="textColorBlue">
                                    Three Phases:
                                </b>
                                <br />
                                This deep sea 2D platforming shooter is broken into 3 phases: Defense, Gather, and Repair.
                                To win, you will need to master all three and find all three keycards.
                                <ul>
                                    <li>
                                        <b className="textColorBlue">Defense:</b>
                                        <br />
                                        The leviathan has your submarine in its jaws! Defeat the spawning creatures to fire missiles
                                        and make it let you go! Watch your submarine's health! If it's reduced to 0, you're dead!
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Gather:</b>
                                        <br />
                                        The leviathan has retreated for now... Use this time to explore the facilities and gather
                                        supplies for its next attack. While gathering supplies, keep a look-out for the 3 keycards.
                                        Once you have all 3, your submarine has a nasty surprise for that leviathan...
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Repair:</b>
                                        <br />
                                        The leviathan is about to attack! Use this time to fix any damage to the submarine (displayed by worsening cracks in the bridge window)
                                        and prepare yourself. You may end this phase early by interacting with the helm.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Controls:
                                </b>
                                <ul>
                                    <li>
                                        <b>W/A/S/D:</b> Move
                                    </li>
                                    <li>
                                        <b>Space:</b> Jump
                                    </li>
                                    <li>
                                        <b>Shift:</b> Dash
                                    </li>
                                    <li>
                                        <b>Shift (While Airborn):</b> Air Dash
                                    </li>
                                    <li>
                                        <b>Left Mouse:</b> Shoot
                                    </li>
                                    <li>
                                        <b>R:</b> Reload
                                    </li>
                                    <li>
                                        <b>Mouse Wheel or Num. 1-5 :</b> Change weapon (Once you have other weapons)
                                    </li>
                                    <li>
                                        <b>E:</b> Interact
                                    </li>
                                    <li>
                                        <b>F:</b> Use Med-Kit
                                    </li>
                                    <li>
                                        <b>Q:</b> Return to submarine (Only usable during gather phase)
                                    </li>
                                    <li>
                                        <b>Esc :</b> Pause/Options Menu
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Weapons:
                                </b>
                                <br />
                                <ul>
                                    <li>
                                        <b className="textColorBlue">Shotgun:</b>
                                        <br />
                                        Does heavy damage up close, but less efficient at longer ranges.
                                        <br />
                                        Starting weapon.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Speargun:</b>
                                        <br />
                                        Longer range than the shotgun, but does less damage up close. Pierces through walls.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Flamethrower:</b>
                                        <br />
                                        Fast fire-rate, area of effect, and large capacity.
                                        <br />
                                        Does not work underwater.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Arc-Laser:</b>
                                        <br />
                                        Fires fast and has homing projectiles, but has a slow reload.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Grenade Launcher:</b>
                                        <br />
                                        Launches powerful explosives, but only carries one shot at a time.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Items:
                                </b>
                                <br />
                                <ul>
                                    <li>
                                        <b className="textColorBlue">Scrap:</b>
                                        <br />
                                        Used with rivets to repair windows.
                                        <br />
                                        You need 1 scrap and 2 rivets to repair the submarine.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Rivets:</b>
                                        <br />
                                        Used with scrap to repair windows.
                                        <br />
                                        You need 1 scrap and 2 rivets to repair the submarine.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Med-Kit:</b>
                                        <br />
                                        Heals 30 HP on use.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Health Drop:</b>
                                        <br />
                                        Heals 15 HP on contact. Sometimes dropped by enemies.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Keycard (Level 1/2/3):</b>
                                        <br />
                                        Used to open the corresponding locked door.
                                        Required to progress to next area.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Tips:
                                </b>
                                <ol>
                                    <li>
                                        Try dashing then jumping to get more air time.
                                    </li>
                                    <li>
                                        Watch out for flying orb bugs, they can go into walls and shoot through walls. Lure them out or use the speargun to kill them.
                                    </li>
                                    <li>

                                        Beetles have a brief period before they charge, use this time to jump over them.
                                    </li>
                                    <li>

                                        Maggots will turn into orb bugs if left alone. Kill them quickly.
                                    </li>
                                </ol>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Credits:
                                </b>
                                <ul>
                                    <li>
                                        <b>Jerry Davis:</b> <a href='https://www.silverwindworkshop.com/' target="_blank" rel="noreferrer">https://www.silverwindworkshop.com/</a>
                                    </li>
                                    <li>
                                        <b>Lloyd Thomas:</b> <a href='https://triasho.itch.io/' target="_blank" rel="noreferrer">https://triasho.itch.io/</a>
                                    </li>
                                    <li>
                                        <b>Alec Straw:</b> <a href='https://itch.io/profile/alekstr' target="_blank" rel="noreferrer">https://itch.io/profile/alekstr</a>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <b>Game Jam: </b> <a href='https://itch.io/jam/underwater-horror-jam' target="_blank" rel="noreferrer">Underwater Horror Game Jam (March 28th 2024)</a>
                            <br />
                            <b>Music: </b>
                            "SCP-x2x (Unseen Presence)" Kevin MacLeod <a href='https://incompetech.com/' target="_blank" rel="noreferrer">(incompetech.com)</a>
                            <br />Licensed under Creative Commons: By <a href='http://creativecommons.org/licenses/by/4.0/' target="_blank" rel="noreferrer">Attribution 4.0 License</a>
                            <br />
                        </p>
                    </div>
                </p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export { GameJamCrackedGlass };