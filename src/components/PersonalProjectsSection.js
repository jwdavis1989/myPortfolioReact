import { Link } from "react-router-dom";
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Grid, Button } from '@mui/material';

function PersonalProjectsSection() {
    return (
        <div id="PersonalProjectsSection">
            <h3 className="SectionHeader">
                GAME JAMS & PERSONAL PROJECTS
                <hr className="HorizontalLineBlue" />
            </h3>
            This is a collection of Game Jam and fun personal projects I've created to hone and demonstrate my game design skills.
            <br />
            <br />
            <br />
            <p className="NormalPageLayout">
                <h4 className="SectionHeader">
                    <b>
                        Black Friday: The Last Stand -
                        <br />
                        GameDev.TV Game Jam 2024
                    </b>
                </h4>
                <div class="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/Gkng-3ep7_A"
                            title="Black Friday Game Jam Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <p>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Button className="ImageLogo" variant='outlined'
                                component={Link} to="/BlackFriday" onClick={() => window.scrollTo(0, 0)}>
                                Learn More
                            </Button>
                            <div className="textAlignLeft">
                                <b>Contributions:</b> Game Director, Product Owner, Scrum Master, Game Designer, Lead Programmer
                                <br />
                                <b>Team:</b> Jerry Davis, Lloyd Thomas, Alec Straw, Logan Allen, David Wilson, Chelsea Davis
                                <br />
                            </div>
                        </Grid>
                    </Grid>
                </p>
                <br />
                <br />
                <br />
            </p>
            <p className="NormalPageLayout">
                <h4 className="SectionHeader">
                    <b>
                        Cracked Glass -
                        <br />
                        Underwater Horror Jam 2024
                        (<EmojiEventsIcon sx={{ color: "silver" }} />)
                    </b>
                </h4>
                <div class="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/GNVOkna3ZhM"
                            title="Cracked Glass Game Jam Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <p>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Button className="ImageLogo" variant='outlined'
                                component={Link} to="/CrackedGlass" onClick={() => window.scrollTo(0, 0)}>
                                Learn More
                            </Button>
                            <div className="textAlignLeft">
                                <b>Contributions:</b> Product Owner, Scrum Master, Game Designer, Programmer (Physics, Player, Enemy AI, Main Gameplay Loop), Artist (Enemy, Tileset)
                                <br />
                                <b>Team:</b> Jerry Davis, Lloyd Thomas, Alec Straw
                                <br />
                                <b>Overall Ranking:</b> 2nd
                            </div>
                        </Grid>
                    </Grid>
                </p>
                <br />
                <br />
                <br />
            </p>
            <p className="NormalPageLayout">
                <h4 className="SectionHeader">
                    <b>
                        Phoenix Walker -
                        Game Prototype
                    </b>
                </h4>
                <div class="auto-resizable-iframe">
                    <div>
                        <iframe width="792" height="294" src="https://www.youtube.com/embed/uWy9_vH6XGQ"
                            title="Phoenix Walker Game Prototype Demo" frameborder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <p>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={10}>
                            <Button className="ImageLogo" variant='outlined'
                                component={Link} to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)}>
                                Learn More
                            </Button>
                            <div className="textAlignLeft">
                                <b>Contributions:</b> Game Designer, Programmer, Sprite Artist, Music Composer
                            </div>
                        </Grid>
                    </Grid>
                </p>
                <br />
                <br />
                <br />
            </p>
            <p className="NormalPageLayout">
                <h4 className="SectionHeader">
                    <b>
                        Yingyue the Jiangshi -
                        <br />
                        League of Legends Character Concept
                    </b>
                </h4>
                <Link to="/DesignExercises" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage outlineBorderOnHover" src={ChineseVampireBanner} alt="Yingyue the Jiangshi - League of Legends Character Concept" />
                </Link>
                <br />
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={10}>
                            <Button className="ImageLogo" variant='outlined'
                                component={Link} to="/DesignExercises" onClick={() => window.scrollTo(0, 0)}>
                                Learn More
                            </Button>
                            <div className="textAlignLeft">
                                <b>Contributions:</b> Game Designer, Writer
                                <br />
                                <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                                    <b>Artwork by:</b> Chen Ruo Yu
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

export { PersonalProjectsSection };