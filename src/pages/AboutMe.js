import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Button, Grid } from '@mui/material';
import profilePicture from '../resources/images/Jerry_Davis_Portrait_50pc.png';
import gameDesignPDF from "../resources/handouts/Davis Jerry Game Developer Resume.pdf";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function AboutMe() {
    return (
        <div>
            <div className='NavBarSectionPadding' />
            <h3 className="SectionHeader">
                About Me
                <hr className="HorizontalLineBlue" />
            </h3>
            <p className="NormalPageLayout">
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <img className="NewBannerImage" src={profilePicture}
                            alt="Profile" />
                            <b className='textColorBlue'>
                            Resume
                            Download:
                        </b>
                        <p>
                            <Button variant="outlined" component="a" href={gameDesignPDF} target="_blank" rel="noreferrer">
                                <PictureAsPdfIcon alt="Download Resume" className="" />
                            </Button>
                        </p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={9} className='textAlignLeft'>
                        My name is Jerry Davis and I've been creating software, game mods, maps, and modes since I
                        was 11. I've always loved creating gameplay experiences that challenge players,
                        while letting them shine in their own unique way.
                        <p>
                            Silverwind Workshop is my independent game development company of 6 employees, currently working hard to bring our first 
                            indie video game to Steam.
                        </p>
                        <p>
                            Previously, I released my well-reviewed Dungeons & Dragons 5th Edition character progress overhaul, 
                            Silverwind Workshop's Skill Tree system on the popular virtual tabletop, Roll20. 
                            <br />
                            Check out my professional work section for a free demo of 3 of the 29 Skill Trees and basic rules!
                        </p>
                    </Grid>
                </Grid>
                <p>
                    <h4 className="SectionHeader">
                        <SchoolIcon fontSize='inherit' /> Education
                        <hr className="HorizontalLineBlue" />
                    </h4>
                    <p className="NormalPageLayout">
                        <b>Bachelor's of Computer Science with a Minor in Business</b>
                        <br />
                        Arkansas A-State University, Jonesboro AR
                        <br />
                        <i>08/2016 – 05/2020</i>
                    </p>
                    <h4 className="SectionHeader">
                        <EmojiEventsIcon fontSize='inherit' /> Awards
                        <hr className="HorizontalLineBlue" />
                    </h4>
                    <p className="NormalPageLayout">
                        2nd Place - Figerox Underwater Horror Jam 2024
                        <br />
                        Infosys Certificate of Appreciation – Going The Extra
                        Mile
                        <br />
                        Infosys Certificate of Excellence – Rising Star
                        <br />
                        Graduated with Cum Laude
                        <br />
                    </p>
                    <h4 className="SectionHeader">
                        <SportsEsportsIcon fontSize='inherit' /> I Love Games That . . .
                        <hr className="HorizontalLineBlue" />
                    </h4>
                    <p className="NormalPageLayoutLeft">
                        <p>
                            <b className='textColorBlue'>
                                Let the Player Figure it Out:
                                <br />
                            </b>
                            The player is free to think and solve puzzles without a side character blurting out the
                            solution within 2 seconds.
                            I always enjoy the "Ah-ha!" moment when you finally figure something out.
                            <br />
                            <i>&emsp; (e.g. Dark Souls, Outer Wilds, We Were Here Together, Eldin Ring, Zelda)</i>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Present Players with Compelling Choices:
                                <br />
                            </b>
                            Decisions need to matter, both through choice selection, and impactful outcomes.
                            <br />
                            <i>&emsp; (e.g. XCOM, Sid Meier's Civilization, Age of Wonders, Mass Effect, Dragon Age)</i>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Reward Creativity:
                                <br />
                            </b>
                            Multiple solutions to problems is a great way to reward lateral thinking players.
                            <br />
                            <i>&emsp; (e.g. Outer Wilds, Zelda: Tears of The Kingdom, Banjo-Kazooie: Nuts & Bolts, Dark Cloud 2)</i>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Present Asymmetrical Teamwork:
                                <br />
                            </b>
                            Specialization & reliance on teammates in multiplayer games creates compelling interactions.
                            <br />
                            <i>&emsp; (e.g. World of Warcraft, Final Fantasy 14, Risk of Rain, Deep Rock Galactic)</i>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Have Strong Thematic Atmospheres:
                                <br />
                            </b>
                            Thematic atmospheres lead to an increased sense of immersion.
                            <br />
                            <i>&emsp; (e.g. Dark Souls, Outer Wilds, Eldin Ring, Armored Core, Bloodbourne, Sekiro: Shadows Die Twice,
                                Mass Effect, Dragon Age, Undertale)</i>
                        </p>
                        <p>
                            <b className='textColorBlue'>
                                Mechanically Challenge the Player:
                                <br />
                            </b>
                            Games with a high skill ceiling that have avenues to express mastery of their mechanics.
                            <br />
                            <i>&emsp; (e.g. Dark Souls, Eldin Ring, Armored Core, Risk of Rain)</i>
                        </p>
                    </p>
                </p>
            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export { AboutMe };