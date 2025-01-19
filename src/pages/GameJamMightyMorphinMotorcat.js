import DownloadIcon from '@mui/icons-material/Download';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SourceIcon from '@mui/icons-material/Source';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';

function GameJamMightyMorphinMotorcat() {

    return (
        <div>
            <div className='NavBarSectionPadding' />
            <div>
                <h3 className="SectionHeader">
                    Mighty Morphin' Motorcat - GMTK Game Jam 2024
                    <hr className="HorizontalLineBlue" />
                </h3>
                <Grid className="textAlignCenter" container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={12}>
                        <div class="auto-resizable-iframe">
                            <div>
                                <iframe width="792" height="294" src="https://www.youtube.com/embed/NS3pbhwq57w"
                                    title="Mighty Morphin' Motorcat Game Jam Demo" frameborder="1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <p>
                    <p>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={6}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<SourceIcon />}
                                        component="a" href="https://github.com/jwdavis1989/GamemakersToolkitGameJam2024Repo" target="_blank" rel="noreferrer">
                                        Github
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<EmojiEventsIcon />}
                                        component="a" href="https://itch.io/jam/gmtk-2024/rate/2911406" target="_blank" rel="noreferrer">
                                        Jam Rankings
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={6}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                        component="a" href={"https://docs.google.com/document/d/1NhMGPbC-oTsWm-WK7naAFokrysBu1TwzgsNT9qDsBWk/edit?usp=sharing"} target="_blank" rel="noreferrer">
                                        Design Document
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<ListAltIcon />}
                                        component="a" href="https://trello.com/b/NKQDZO3J/gmtkgamejam2024trelloboard" target="_blank" rel="noreferrer">
                                        Scrum Board
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={6}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<PlayArrowIcon />}
                                        component="a" href="https://silverwindworkshop.itch.io/mighty-morphin-motorcat" target="_blank" rel="noreferrer">
                                        Play On Itch.io
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </p>
                    <div className="textAlignLeft animationFadeIn SectionCard">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <p>
                                <span className='ContributionsCardLeadership'>Game Director:</span> Directed our 4-man team of 2 Programmers, 1 3D Artist, and 1 Sound Designer towards fulfilling the creative vision of the game.
                                <br />
                                <br />
                                <span className='ContributionsCardGameDesign'>Game Designer:</span> Designed the primary gameplay loop, User Interface, growing, shrinking, and obstacle puzzle mechanics.
                                <br />
                                <br />
                                <span className='ContributionsCardProgramming'>Lead Programmer:</span> Programmed player movement, growing, shrinking, success/failure mechanics, 
                                helicopter stop light race countdown indicator, User Interface, Title/Game Over/Victory screens, and particle effects.
                                <br />
                                <br />
                                <span className='ContributionsCardScrumMaster'>Scrum Master:</span> Lead daily stand-ups during game jam to ensure team efficiency and remove
                                blockers while maintaining the group's Trello Board. This was done to full game industry standards.
                                <br />
                                <br />
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Overview:
                            </b>
                            <br />
                            <p>
                                Submission for Gamemaker's Toolkit 2024 for the theme, Built to Scale.
                            </p>
                            <p>
                                You're a lost cat that is also a car, and you've been separated from the other motorcats!
                                <br />
                                Use your power to grow or shrink dynamically and your noggin to return to the Motorcat Singularity before it closes!
                            </p>
                            <p>
                                Mighty Morphin Motorcat is a Puzzle-Racing game where you must use your ability to shrink or grow to handle all obstacles in your path.
                                Float on the wind and fit through small holes as smol Motorcat, build up speed as Maximum-Mediumness Motorcat, Smash through Cardboard, resist wind,
                                and maintain traction as the <i>BEEG</i> Motorcat!
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Design Goals:
                            </b>
                            <ul>
                                <li>
                                    Form a team of 4 and lead them through entering a game jam designed around the theme of "Built to Scale".
                                </li>
                                <li>
                                    Design and implement a 3d Puzzle-Racer hybrid game in Unity using an interdisciplinary team.
                                </li>
                                <li>
                                    Demonstrate skills in Teamwork, Leadership, Gameplay Design, Programming,
                                    and converting an idea into a full game within a finite time limit
                                    while using SCRUM best-practices.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Learning Outcomes:
                            </b>
                            <ul>
                                <li>
                                    I gained experience in creating a Unity game that runs in-browser.
                                    This came with new restrictions that taught me a lot about alternate ways to structure different stages of a game to fit in one scene.
                                </li>
                                <li>
                                    By creating a game that runs in-browser, it showed me an excellent example of how making your game accessable to your audience
                                    demographic is critical to getting more people to play and enjoy your game.
                                </li>
                                <li>
                                    I have a better understanding of how the Unity physics system can simultaneously create an intuitive character controller,
                                    while also acting as a black box that can sometimes cause unexpected physics behavior.
                                    This has improved my ability to create and predict character physics behavior, even in situations where the character model changes rapidly.
                                </li>
                                <li>
                                    As with Black Friday, I received great experience in game programming, leadership,
                                    and communicating artistic ideas to our 3d artist and sound designer.
                                </li>
                                <li>
                                    Our team has gained the experience and confidence needed to begin work on our first independent commercial game planned to release on Steam.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Controls:
                                </b>
                                <ul>
                                    <li>
                                        <b>W: </b> Go Forward
                                    </li>
                                    <li>
                                        <b>S:</b> Reverse
                                    </li>
                                    <li>
                                        <b>A:</b> Turn Left
                                    </li>
                                    <li>
                                        <b>D:</b> Turn Right
                                    </li>
                                    <li>
                                        <b>Space:</b> Jump
                                    </li>
                                    <li>
                                        <b>Q:</b> Shrink
                                    </li>
                                    <li>
                                        <b>E:</b> Enlarge
                                    </li>
                                    <li>
                                        <b>Escape:</b> Pause Menu
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Tips:
                                </b>
                                <br />
                                <ol>
                                    <li>
                                        Shrink to fit through Cheese!
                                    </li>
                                    <li>
                                        Enlarge to smash through Boxes!
                                    </li>
                                    <li>
                                        Shrink to fly across Fan gaps!
                                    </li>
                                    <li>
                                        Enlarge to keep traction on Ice!
                                    </li>
                                    <li>
                                        Stay Medium to build speed, somehow!
                                    </li>
                                    <li>
                                        After smashing through boxes, consider shrinking to fit through gaps if needed.
                                    </li>
                                    <li>
                                        Enlarge to pass by Windmills without being blown away!
                                    </li>
                                    <li>
                                        Change sizes to flip over when stuck!
                                    </li>
                                    <li>
                                        Hitting [Q] and [E] repeatably creates beautiful rainbow waves. (This one's just for fun)
                                    </li>
                                </ol>
                            </div>
                            <br />
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Credits:
                                </b>
                                <ul>
                                    <li>
                                        <a href='https://www.silverwindworkshop.com/' target="_blank" rel="noreferrer"><b>Jerry Davis:</b> Game Director, Product Owner, Scrum Master, Game Designer, Lead Programmer</a>
                                    </li>
                                    <li>
                                        <a href='https://itch.io/profile/alekstr' target="_blank" rel="noreferrer"><b>Alec Straw:</b> Programmer</a>
                                    </li>
                                    <li>
                                        <a href='https://itch.io/profile/drolavellan' target="_blank" rel="noreferrer"><b>Chelsea Davis:</b> 3D Artist</a>
                                    </li>
                                    <li>
                                        <a href='https://itch.io/profile/cytechflow' target="_blank" rel="noreferrer"><b>David Wilson:</b> Sound Designer, Music Composer, and Trailer Editor</a>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <b>Game Jam: </b> <a href='https://itch.io/jam/gmtk-2024' target="_blank" rel="noreferrer">GMTK Game Jam (August 2024)</a>
                            <br />
                        </p>
                    </div>
                </p>
            </div>
        </div>
    );
}

export { GameJamMightyMorphinMotorcat };