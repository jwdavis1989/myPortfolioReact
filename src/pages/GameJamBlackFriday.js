import DownloadIcon from '@mui/icons-material/Download';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SourceIcon from '@mui/icons-material/Source';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';

import BlackFridayDownload from "../resources/gamePrototypes/BlackFridayTheLastStandV1.3.zip";

function GameJamBlackFriday() {

    return (
        <div>
            <div>
                <h3 className="SectionHeader">
                    Black Friday: The Last Stand - GameDev.TV Game Jam 2024
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p>
                    <div class="auto-resizable-iframe">
                        <div>
                            <iframe width="792" height="294" src="https://www.youtube.com/embed/Gkng-3ep7_A"
                                title="Black Friday Game Jam Demo" frameborder="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <p>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={10}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<SourceIcon />}
                                        component="a" href="https://github.com/jwdavis1989/GameDevTvGameJam2024" target="_blank" rel="noreferrer">
                                        Github
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<EmojiEventsIcon />}
                                        component="a" href="https://itch.io/jam/gamedevtv-jam-2024/rate/2750579" target="_blank" rel="noreferrer">
                                        Jam Rankings
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={10}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                    <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                        component="a" href={"https://docs.google.com/document/d/1oLtc68ixtdXaahR2DjMnLqkFSzS7oAtWkp_1t3Xv1-k/edit?usp=sharing"} target="_blank" rel="noreferrer">
                                        Design Document
                                    </Button>
                                    <Button className="ImageLogo" startIcon={<ListAltIcon />}
                                        component="a" href="https://trello.com/b/sUqB6kU9/gamedevtv-game-jam-2024" target="_blank" rel="noreferrer">
                                        Scrum Board
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={10}>
                                <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                                <Button className="ImageLogo" startIcon={<DownloadIcon />}
                                        component="a" href={BlackFridayDownload} target="_blank" rel="noreferrer">
                                        Download
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </p>
                    <div className="textAlignLeft animationFadeIn NormalPageWithLRPadding">
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <br />
                            Game Director, Product Owner, Scrum Master, Game Designer, Lead Programmer
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Overview:
                            </b>
                            <br />
                            It's the 1980's and you're an employee at Black Friday during one of the busiest shopping times of the year, Black Friday.
                            <p>
                                Black Friday: The Last Stand is a tower-defense game where customers move down aisles towards the managers office. If one reaches
                                the office, you'll get a write-up. If you get 5 write-ups and you're done. To prevent this, you've weaponized some of the store's
                                merchandise to attack customers in range (towers) and you can strike customers with the titular Last Stand in melee.
                                As you defeat customers, you'll receive money to buy towers. Between waves of
                                customers, you'll unlock a new tower, but be careful as it will also add
                                another aisle for you to defend.
                            </p>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Design Goals:
                            </b>
                            <ul>
                                <li>
                                    Form a larger team of 6 and lead them through entering a game jam designed around the theme of "Last Stand".
                                </li>
                                <li>
                                    Design and implement a 3d Action/Tower Defense hybrid game in Unity using an interdisciplinary team.
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
                                    Managing 6 team members requires a lot of documentation and managing skills,
                                    making the need for dedicated Directors, Product Owners, and Scrum Masters very clear to me.
                                    <br />
                                    As team size increases, documentation and overhead exponentially grows.
                                </li>
                                <li>
                                    All 3 programmers are now proficient in using Unity to create 3d video games.
                                    None of my team had ever made a 3d game before this jam, while half of the team had never
                                    made a video game before.
                                    <br />This was an exceptional learning experience and I strove to be a good mentor and leader for the team.
                                </li>
                                <li>
                                    I received great experience in conveying artistic ideas to our 3d artist and sound designer.
                                    <br />
                                    It is clear to me that it is a valuable skill that requires practice, much like all other skills displayed.
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
                                        <b>Move: </b> W/A/S/D:
                                    </li>
                                    <li>
                                        <b>Turn Camera:</b> Mouse
                                    </li>
                                    <li>
                                        <b>Melee Attack:</b> Left Mouse Button
                                    </li>
                                    <li>
                                        <b>Toggle Build Mode:</b> Tab, Q, E, or F
                                    </li>
                                    <li>
                                        <b>Select/Build Turret:</b> Left Mouse Button or 1-6 while in Build Mode
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Towers:
                                </b>
                                <br />
                                <ul>
                                    <li>
                                        <b className="textColorBlue">Toaster:</b>
                                        <br />
                                        Basic tower. Does decent damage at decent range.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Game Console:</b>
                                        <br />
                                        Long range missile tower. Fires slowly, but deals high damage.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Lawnmower:</b>
                                        <br />
                                        Short range melee tower. Deals high damage at close range.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Cassette Player:</b>
                                        <br />
                                        Low-cost tower. Lower damage than the toaster, but fires faster.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Microwave:</b>
                                        <br />
                                        Area-of-effect tower. Low damage, but deals damage in an area.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Generator:</b>
                                        <br />
                                        Buffing tower. Does no damage, but boosts nearby towers' damage and fire rate by 25%.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div>
                                <b className="textColorBlue">
                                    Enemy Customers:
                                </b>
                                <br />
                                <ul>
                                    <li>
                                        <b className="textColorBlue">Adult:</b>
                                        <br />
                                        Standard Black Friday shopper, perfectly average.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Rollerskate Kid:</b>
                                        <br />
                                        These little punks are quick on their feet, thanks to those rollerskates.
                                        Can't take as many hits as an adult though.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Scooter Rider:</b>
                                        <br />
                                        The scooter they ride helps them shrug off damage at the cost of their speed.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Dad:</b>
                                        <br />
                                        There's one in every power tool section, it's Dad!
                                        His hardy body prevents his movement from being altered.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">Mom:</b>
                                        <br />
                                        Trying to some last minute shopping done with her kids, it's Mom!
                                        Watch out for her toddlers when you defeat her.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">KAREN:</b>
                                        <br />
                                        First boss, grows to immense size and is worth double the write-ups when she reaches your poor manager.
                                    </li>
                                    <li>
                                        <b className="textColorBlue">The CEO:</b>
                                        <br />
                                        Final boss, all write-ups are doubled while he is alive. Can you survive the corporate ladder?
                                    </li>
                                </ul>
                            </div>
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
                                        <a href='https://strider25.itch.io/' target="_blank" rel="noreferrer"><b>Logan Allen:</b> Programmer</a>
                                    </li>
                                    <li>
                                        <a href='https://itch.io/profile/cytechflow' target="_blank" rel="noreferrer"><b>David Wilson:</b> Sound Designer</a>
                                    </li>
                                    <li>
                                        <a href='https://itch.io/profile/drolavellan' target="_blank" rel="noreferrer"><b>Chelsea Davis:</b> 3d Artist</a>
                                    </li>
                                    <li>
                                        <a href='https://triasho.itch.io/' target="_blank" rel="noreferrer"><b>Lloyd Thomas:</b> Game Designer</a>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <b>Game Jam: </b> <a href='https://itch.io/jam/gamedevtv-jam-2024' target="_blank" rel="noreferrer">GameDev.TV Game Jam (May 24th 2024)</a>
                            <br />
                        </p>
                    </div>
                </p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export { GameJamBlackFriday };