import { Link } from "react-router-dom";
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Grid, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { BUTTON_ICON_MARGIN_RIGHT } from "../constants/constants.js";

function PersonalProjectsSection() {
    return (
        <div>
            <h3 className="SectionHeader">
                GAME JAMS & PERSONAL PROJECTS
                <hr className="HorizontalLineBlue" />
            </h3>
            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                <Grid item xs={5.5} className="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/NS3pbhwq57w"
                            title="Mighty Morphin' Motorcat Game Jam Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen>
                        </iframe>
                    </div>
                </Grid>
                <Grid item xs={5.5} className='SectionSubCard'>
                    <div className="SectionHeaderCard">
                        <h3>
                            Mighty Morphin' Motorcat
                            <br />
                            GMTK Game Jam 2024
                            <hr className="HorizontalLineBlue" />
                        </h3>
                    </div>
                    <p>
                        <span className='ContributionsCardGameDesign'>Game Designer</span>
                        &nbsp;
                        <span className='ContributionsCardProgramming'>Lead Programmer</span>
                        &nbsp;
                        <span className='ContributionsCardLeadership'>Game Director</span>
                        <br /><br />
                        <span className='ContributionsCardScrumMaster'>Scrum Master</span>
                    </p>
                    <p>
                        <b>Team: </b>Jerry Davis, Alec Straw, David Wilson, Chelsea Davis
                    </p>
                    <p>
                        Submission for Gamemaker's Toolkit Game Jam 2024 for the theme, "Built to Scale."
                    </p>
                    <p>
                        Mighty Morphin Motorcat is a Puzzle-Racing game where you must use your ability to shrink or grow to handle all obstacles in your path.
                        Float on the wind and fit through small holes as smol Motorcat, build up speed as Maximum-Mediumness Motorcat, Smash through Cardboard, resist wind,
                        and maintain traction as the <i>BEEG</i> Motorcat!
                    </p>
                    <Button className="ImageLogo" variant='outlined'
                        startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                        component={Link} to="/MMM" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>

            <br />
            <br />

            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                <Grid item xs={5.5} className="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/Gkng-3ep7_A"
                            title="Black Friday Game Jam Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen>
                        </iframe>
                    </div>
                </Grid>
                <Grid item xs={5.5} className='SectionSubCard'>
                    <div className="SectionHeaderCard">
                        <h3>
                            Black Friday: The Last Stand
                            <br />
                            GameDev.TV Game Jam 2024
                            <hr className="HorizontalLineBlue" />
                        </h3>
                    </div>
                    <p>
                        <span className='ContributionsCardGameDesign'>Game Designer</span>
                        &nbsp;
                        <span className='ContributionsCardProgramming'>Lead Programmer</span>
                        &nbsp;
                        <span className='ContributionsCardLeadership'>Game Director</span>
                        <br /><br />
                        <span className='ContributionsCardScrumMaster'>Scrum Master</span>
                    </p>
                    <p>
                        <b>Team: </b>Jerry Davis, Lloyd Thomas, Alec Straw, Logan Allen, David Wilson, Chelsea Davis
                    </p>
                    <p>
                        Submission for GameDev.TV Game Jam 2024 for the theme, "Last Stand."
                    </p>
                    <p>
                        Black Friday: The Last Stand is a tower-defense game where you must stop customers from reaching the manager's office by
                        using towers made from the store's merchandise. As you defeat customers, you'll receive money to buy towers.
                        Between waves of customers, you'll unlock a new tower, but be careful as it will also add another aisle for you to defend!
                    </p>
                    <Button className="ImageLogo" variant='outlined'
                        startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                        component={Link} to="/BlackFriday" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>

            <br />
            <br />

            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                <Grid item xs={5.5} className="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/GNVOkna3ZhM"
                            title="Cracked Glass Game Jam Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen>
                        </iframe>
                    </div>
                </Grid>
                <Grid item xs={5.5} className='SectionSubCard'>
                    <div className="SectionHeaderCard">
                        <h3>
                            Cracked Glass
                            <br />
                            Underwater Horror Jam 2024
                            <hr className="HorizontalLineBlue" />
                        </h3>
                    </div>
                    <p>
                        <span className='ContributionsCardGameDesign'>Game Designer</span>
                        &nbsp;
                        <span className='ContributionsCardProgramming'>Lead Programmer</span>
                        &nbsp;
                        <span className='ContributionsCardArt'>Artist</span>
                        <br /><br />
                        <span className='ContributionsCardScrumMaster'>Scrum Master</span>
                    </p>
                    <p>
                        <b>Team: </b>Jerry Davis, Lloyd Thomas, Alec Straw
                        <br />
                        <b>Overall Ranking: </b>2nd <EmojiEventsIcon sx={{ color: "silver" }} />
                    </p>
                    <p>
                        Submission for the Underwater Horror Jam 2024 for the theme, "Underwater Megalophobia."
                    </p>
                    <p>
                        Cracked Glass is a 2D platforming shooter and Wave Defense Horror Game. While exploring a series of abandoned underwater facilities,
                        you are attacked by a massive leviathan. Master all three phases: Defending, Gathering, and Repairing the submarine to send the Leviathan to its water grave!
                    </p>
                    <Button className="ImageLogo" variant='outlined'
                        startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                        component={Link} to="/CrackedGlass" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>

            <br />
            <br />

            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                <Grid item xs={5.5} className="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/uWy9_vH6XGQ"
                            title="Phoenix Walker Game Prototype Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen>
                        </iframe>
                    </div>
                </Grid>
                <Grid item xs={5.5} className='SectionSubCard'>
                    <div className="SectionHeaderCard">
                        <h3>
                            Phoenix Walker
                            <br />
                            Game Prototype
                            <hr className="HorizontalLineBlue" />
                        </h3>
                    </div>
                    <p>
                        <span className='ContributionsCardGameDesign'>Game Designer</span>
                        &nbsp;
                        <span className='ContributionsCardProgramming'>Programmer</span>
                        &nbsp;
                        <span className='ContributionsCardArt'>Artist</span>
                        <br />
                        <br />
                        <span className='ContributionsCardMusic'>Music Composer</span>
                    </p>
                    <p>
                        <b>Team: </b>Jerry Davis
                    </p>
                    <p>
                        Phoenix Walker is a fun genre-bending 2D game that lets you freely switch between an on-the-rails shmup (Shoot'em Up)
                        and an omni-directional shooter similar to a twin-stick shooter.
                        <br />
                        <br />
                        Can you master both forms to beat the boss?
                    </p>
                    <Button className="ImageLogo" variant='outlined'
                        startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                        component={Link} to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>

            <br />
            <br />

            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                <Grid item xs={5.5} >
                    <Link to="/DesignExercises" onClick={() => window.scrollTo(0, 0)}>
                        <img className="NewBannerImageCard outlineBorderOnHover" src={ChineseVampireBanner} alt="Yingyue the Jiangshi - League of Legends Character Concept" />
                    </Link>
                    <br />
                </Grid>
                <Grid item xs={5.5} className='SectionSubCard'>
                    <div className="SectionHeaderCard">
                        <h3>
                            Yingyue the Jiangshi
                            <br />
                            League of Legends Character Concept
                            <hr className="HorizontalLineBlue" />
                        </h3>
                    </div>
                    <p>
                        <span className='ContributionsCardGameDesign'>Game Designer</span>
                        &nbsp;
                        <span className='ContributionsCardWriting'>Writer</span>
                    </p>
                    <p>
                        <i>
                            "Yingyue was an Ionian priestess killed during the Noxian invasion of Ionia. Her spirit was never put to rest,
                            and remained trapped in her corpse for years. When her jade eyes finally opened, she had become a Jiangshi,
                            a Vampiric Lifestealer of Qi energy that stalks the moonlit hours. Now she hunts the Noxians that cursed her."
                        </i>
                    </p>
                    <p>
                        Yingyue was designed because League of Legends does not have any support characters that utilize the Lifesteal mechanic. 
                        I wanted to create a very aggressive support character that would be very true to
                        her theme as a Chinese Vampire.
                        <br /><br />
                        <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                            <b>Artwork by:</b> Chen Ruo Yu
                        </a>
                    </p>
                    <Button className="ImageLogo" variant='outlined'
                        startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                        component={Link} to="/DesignExercises" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
}

export { PersonalProjectsSection };