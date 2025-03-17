import DownloadIcon from '@mui/icons-material/Download';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SourceIcon from '@mui/icons-material/Source';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';
import IdeaCameraDemoGif from '../resources/images/ArcadianSea/ArcadianSeaIdeaCamClip.gif';
import TitleScreen from '../resources/images/ArcadianSea/ArcadianSeaLogo.gif';
import ScreenshotMateoFront from '../resources/images/ArcadianSea/ArcadianSeaMateoFrontMed.png';
import ScreenshotRunningOverGreenHills from '../resources/images/ArcadianSea/ArcadianSeaRunningOverGreenHills.png';
import ScreenshotRunningThroughTheChoppedForest from '../resources/images/ArcadianSea/ArcadianSeaRunningThroughTheChoppedForest.png';
import ScreenshotLavaRoomSwordSwing from '../resources/images/ArcadianSea/ArcadianSeaLavaSwing.png';
import ScreenshotAlphaWeaponTinkeringScreen from '../resources/images/ArcadianSea/WeaponTinkeringPlaceHolderMenu.png';

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
                    <Grid item xs={6}>
                        <img className="NewBannerImageLearnMore" src={TitleScreen}
                            alt="Arcadian Sea - In-Devevlopment Steam Game Title" />
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
                                <span className='ContributionsCardArt'>Writer:</span> Wrote entirety of the setting lore, characters, and in-game events.
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
                            Arcadian Sea is the working-title for our upcoming Dungeon Crawler Action RPG being developed in Unity for Steam starring Mateo,
                            an adventurous young Artificer with a knack for invention, and his partner Rose.
                            <br />
                            Combining a unique invention system, expansive pokemon-like weapon evolution trees, in-depth weapon customization,
                            and a post-flooded world of deluvian mystery, we're very excited to bring this unique game to market.
                        </p>
                        <br />
                        <p>
                            <b className='textColorBlue'>
                                Designing the Invention, Ideas, & Camera System:
                            </b>
                            <br />
                            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                                <Grid item xs={6}>
                                    I designed our invention, idea, and photography systems to give the player a sense of artifice that is sorely
                                    lacking in most modern games.
                                    <br />
                                    Inventions serve as the primary means of improving the utility and defensive aspects of gameplay,
                                    such as new boosters for your armor, an Elixir of Stoneskin for defense, or even a Treasure Scanner!
                                    <ul>
                                        <li>
                                            Use your drone's camera to take pictures of objects. If the object is an Idea, it gets added
                                            to your idea journal.
                                        </li>
                                        <li>
                                            Ideas are the "ingredients" of a new invention. Combine three ideas, and if they match an undiscovered invention,
                                            you'll invent a new item!
                                        </li>
                                        <li>
                                            Experiment with different combinations of ideas, talk to NPCs or read books to give Mateo hints for new invention combinations.
                                            Just like real-life, inspiration can come from many different places so get out there and see the world and its people!
                                        </li>
                                        <li>
                                            If you get 2 out of 3 ideas right for a combination, you'll get the first letter and length of the missing ingredient, as if the
                                            idea was on the tip of your tongue!
                                        </li>
                                        <li>
                                            Sometimes, even dungeon treasure will give you new ideas!
                                        </li>
                                        <li>
                                            You begin the game with one free invention of your choice from a list, to further differentiate everyone's character playstyle.
                                            You'll be able to eventually invent all of the other starting inventions if you can figure out their Idea combination!
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5} className='textAlignCenter'>
                                    <img src={IdeaCameraDemoGif} className='width90' alt='Idea Camera Demo' />
                                    <br />
                                    <i>Capturing an idea in a photo.</i>
                                </Grid>
                            </Grid>
                        </p>
                        <br />
                        <p>
                            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                                <Grid item xs={6} />
                                <Grid item xs={6} className='textAlignLeft'>
                                    <b className='textColorBlue'>
                                        Designing the Weapon Leveling & Evolution Tree System:
                                    </b>
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                                <Grid item xs={5} className='textAlignCenter'>
                                    <img src={ScreenshotAlphaWeaponTinkeringScreen} className='width90' alt='Idea Camera Demo' />
                                    <br />
                                    <i>
                                        Alpha Weapon Upgrade and Evolution Screen.
                                        <br />
                                        (Graphics are placeholders and not final.)
                                    </i>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={6}>
                                    I designed our weapon system to act as the home of all of the player's offensive stats as part of an effort
                                    to create a spiritual successor to Dark Cloud's weapon system.
                                    <br />
                                    Will you try to make the ultimate custom weapon, or try to invent them all?
                                    <ul>
                                        <li>
                                            Weapons contain a total of 13 different attributes. (e.g. Attack, Durability, Wind, Beast)
                                        </li>
                                        <li>
                                            Upon level-up, weapons gain Tinkering points which allow Mateo to customize his weapons using
                                            various components found in dungeons and from monsters that permanently raise their
                                            attributes. (e.g. Bolts, Plating, Wind Prism, Diamond)
                                        </li>
                                        <li>
                                            As a weapon's attributes increase, they will eventually meet the requirements to evolve into a
                                            new weapon. Many weapons have branching paths they may evolve, ensuring no play through is the same!
                                        </li>
                                        <li>
                                            Once a weapon is level 5 or higher, it may be broken down into a tinkering component to be merged into other weapons.
                                            This means that if you ever want to try a new weapon,
                                            <br />
                                            <i>it's easy to swap without losing too much!</i>
                                        </li>
                                        <li>
                                            Many Weapon evolutions also come with interesting new special abilities that carry forward to any further evolutions of the weapon.
                                            These unique skills can even be combined into other weapons via breaking the weapon down into a tinkering component.
                                            <br />
                                            <i>Create your own unique ultimate weapon, or use Skills to remove weaknesses from a weapon family!</i>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </p>
                        <br />
                        <p>
                            <b className='textColorBlue'>
                                Programming & Designing the Action RPG Entity Controllers and Combat:
                            </b>
                            <br />
                            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                                <Grid item xs={6}>
                                    I programmed and designed our entity controlling suite of scripts, animations, and combat. This includes the player, monsters, 
                                    and NPCs (except the NPC dialogue system) that utilize inheritence to ensure their code is robust, maintainable, 
                                    expandable, and re-usable.
                                    <ul>
                                        <li>
                                            Players can walk, sprint, roll, jump, and air-boost through the air briefly by utilizing a stamina system similar to Dark Souls.
                                        </li>
                                        <li>
                                            The Weapon system is accentuated by multi-attack combinations that vary by weapon type, post-roll attacks, post-back-step attacks, 
                                            sprinting attacks, chargeable power attacks, and an intuitive lock-on system.
                                        </li>
                                        <li>
                                            The Player controller utilizes Input Queues to ensure gameplay feels fluid to the user when performing multi-attack 
                                            combinations.
                                        </li>
                                        <li>
                                            Entities take advantage of Animation Blend Trees and Layers to organically blend between different animations.
                                        </li>
                                        <li>
                                            Non-Player entities utilize Unity's navigation meshes to traverse both the sunny surface, as well as the 
                                            gloomy forgotten tunnels of the old world.
                                        </li>
                                        <li>
                                            Weapons play immersive sound effects when swung, and when striking entities to increase game-feel and player feedback. This is
                                            furthered by entities playing "Hurt" animations once damaged depending on the angle of attack.
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5} className='textAlignCenter'>
                                    <img src={IdeaCameraDemoGif} className='width90' alt='Idea Camera Demo' />
                                    <br />
                                    <i>REPLACE WITH IMAGE/GIF/VIDEO OF GAMEPLAY!</i>
                                </Grid>
                            </Grid>
                        </p>
                        <br />
                        <p>
                            <b className='textColorBlue'>
                                Design Process & Challenges:
                            </b>
                            <ul>
                                <li>
                                    LOREM EPSIM EVERYBODY!
                                </li>
                            </ul>
                        </p>
                        <br />
                        <p>
                            <b className='textColorBlue'>
                                Tools & Technologies:
                            </b>
                            <ul>
                                <li>
                                    <b>Game Engine:</b> Unity
                                </li>
                                <li>
                                    <b>Programming Language:</b> C#
                                </li>
                                <li>
                                    <b>3D Modeling Software:</b> Blender
                                </li>
                            </ul>
                        </p>
                    </div>
                </p>
            </div>

            <p>
                Gallery:
                <br />
                <div className='width50'>
                    <img src={ScreenshotMateoFront} className='width50' alt='Mateo in The Dark' />
                </div>
                <img src={ScreenshotRunningOverGreenHills} className='width50' alt='Running Over Green Hills Demo' />
                <img src={ScreenshotRunningThroughTheChoppedForest} className='width50' alt='Running Through Chopped Forest demo' />
                <img src={ScreenshotLavaRoomSwordSwing} className='width50' alt='Lava Room Demo' />
            </p>
        </div>
    );
}

export { SteamGame01 };