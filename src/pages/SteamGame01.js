import DownloadIcon from '@mui/icons-material/Download';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SourceIcon from '@mui/icons-material/Source';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';
import IdeaCameraGif from '../resources/images/ArcadianSea/ArcadianSeaIdeaCamClip.gif';
import TitleScreen from '../resources/images/ArcadianSea/ArcadianSeaTitleScreenPlaceholder.png';

function SteamGame01() {

    return (
        <div>
            <div className='NavBarSectionPadding' />
            <div>
                <h3 className="SectionHeader">
                    Arcadian Sea (In-Development Steam Game)
                    <hr className="HorizontalLineBlue" />
                </h3>
                <Grid className="textAlignCenter" container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={12}>
                        <img className="NewBannerImageLearnMore" src={TitleScreen}
                            alt="Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon Banner" />
                    </Grid>
                </Grid>
                <p>
                    <p>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={6}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<SourceIcon />}
                                        component="a" href="https://docs.google.com/document/d/1XTMwjepFqAUYWYT6TnrkX5UhiAmdh7Zp2XyzFjKgP5M/edit?tab=t.0#heading=h.2gazcsgmxkub" target="_blank" rel="noreferrer">
                                        Design Document
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<ListAltIcon />}
                                        component="a" href="https://trello.com/b/kJ725NKp/arcadian-sea" target="_blank" rel="noreferrer">
                                        Scrum Board
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={6}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<HistoryEduIcon />}
                                        component="a" href={"https://docs.google.com/document/d/1m0ACke8Y8aZU3Ko0i4ynE_L0bhucuSqJ9Ex97bZKAhI/edit?tab=t.0#heading=h.2gazcsgmxkub"} target="_blank" rel="noreferrer">
                                        Story Document
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                        component="a" href="https://github.com/jwdavis1989/SWWIndieGame" target="_blank" rel="noreferrer">
                                        Github
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </p>
                    <div className="textAlignLeft animationFadeIn SectionCard">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <p>
                                <span className='ContributionsCardLeadership'>Game Director:</span> Directed our 6-man team of 4 Programmers, 1 3D Artist, and 1 Sound Designer
                                towards fulfilling the creative vision of the game.
                                <br />
                                <br />
                                <span className='ContributionsCardGameDesign'>Game Designer:</span> Designed the primary gameplay loop involving action-RPG dungeon crawling,
                                weapon upgrading, weapon evolution, photography, idea gathering, invention through combining ideas, dungeon layouts, User Interface, enemy behaviors.
                                <br />
                                <br />
                                <span className='ContributionsCardProgramming'>Lead Programmer:</span> Programmed player controller, enemy controller/AI, character animation trees, horror-style lighting,
                                save/load system, User Interface, and particle effects.
                                <br />
                                <br />
                                <span className='ContributionsCardArt'>Writer:</span> Wrote setting lore and in-game story.
                                <br />
                                <br />
                                <span className='ContributionsCardScrumMaster'>Scrum Master:</span> Lead weekly stand-ups to ensure team efficiency and remove
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
                                <img src={IdeaCameraGif} className='width50' alt='Idea Camera Demo' />
                            </p>
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

export { SteamGame01 };