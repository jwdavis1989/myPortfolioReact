import SWWOverhaulBanner from '../resources/images/SW Skill Tree Logo Final 1024px.png';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import TitleScreen from '../resources/images/ArcadianSea/ArcadianSeaLogo.gif';
import { BUTTON_ICON_MARGIN_RIGHT } from "../constants/constants.js";

function ProfessionalWorkSection() {
    return (
        <div>
            <h3 className="SectionHeader">
                PROFESSIONAL WORK
                <hr className="HorizontalLineBlue" />
            </h3>
            <p className="NormalPageLayoutWide">
                <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                    <Grid item xs={5.5} className="width100">
                        <Link to="/ArcadianSeaSteamGame" onClick={() => window.scrollTo(0, 0)}>
                            <img className="NewBannerImageCard outlineBorderOnHover" src={TitleScreen}
                            alt="Arcadian Sea - In-Devevlopment Steam Game Title" />
                        </Link>
                        <br />
                    </Grid>
                    <Grid item xs={5.5} className='SectionSubCard'>
                        <div className="SectionHeaderCard">
                            <h3>
                                Arcadian Sea
                                <br />
                                In-Development Steam Game
                                <hr className="HorizontalLineBlue" />
                            </h3>
                        </div>
                        <p>
                            <span className='ContributionsCardLeadership'>Game Director</span>
                            &nbsp;
                            <span className='ContributionsCardGameDesign'>Game Designer</span>
                            &nbsp;
                            <span className='ContributionsCardProgramming'>Lead Programmer</span>
                            &nbsp;
                            <br /><br />
                            <span className='ContributionsCardArt'>Writer</span>
                            &nbsp;
                            <span className='ContributionsCardScrumMaster'>Scrum Master</span>
                        </p>
                        <p>
                            <b>Team: </b>Jerry Davis, Alec Straw, Jacob Baltazar, David Wilson, Chelsea Davis, Logan Allen
                        </p>
                        <p>
                            Arcadian Sea is the working-title for our upcoming Dungeon Crawler Invention Action RPG being developed in Unity for Steam inspired by Dark Cloud
                            and Megaman Legends. It stars Mateo and Rose, two adventurous young Artificers with a knack for invention, and is currently in the alpha stage of development.
                            <br />
                            <br />
                            Combining a unique invention system, expansive Pokemon-like weapon evolution trees, in-depth weapon customization,
                            and a post-flooded steampunk world of deluvian mystery, we're very excited to bring this unique game to market.
                        </p>
                        <Button className="ImageLogo" variant='outlined'
                            startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                            component={Link} to="/ArcadianSeaSteamGame" onClick={() => window.scrollTo(0, 0)}>
                            Learn More
                        </Button>
                    </Grid>
                </Grid>

                <br />
                <br />

                <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" className='SectionCard'>
                    <Grid item xs={5.5} className="width50">
                        <Link to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                            <img className="NewBannerImageCard outlineBorderOnHover" src={SWWOverhaulBanner} alt="Dungeons & Dragons Overhaul" />
                        </Link>
                        <br />
                    </Grid>
                    <Grid item xs={5.5} className='SectionSubCard'>
                        <div className="SectionHeaderCard">
                            <h3>
                                Silverwind Skill Trees
                                <br />
                                <b>D&D Tabletop Game Addon</b>
                                <hr className="HorizontalLineBlue" />
                            </h3>
                        </div>
                        <p>
                            <span className='ContributionsCardGameDesign'>Game Designer</span>
                            &nbsp;
                            <span className='ContributionsCardArt'>Artist</span>
                            &nbsp;
                            <span className='ContributionsCardQA'>Quality Assurance</span>
                        </p>
                        <p>
                            Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                            strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                            is more than just a leveling overhaul.
                            <br /><br />
                            Build a character by spending talent points in your choice of 29 skill trees,
                            adding significantly more character concepts to create your dream character!
                        </p>
                        <Button className="ImageLogo" variant='outlined'
                            startIcon={<ZoomInIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                            component={Link} to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                            Learn More
                        </Button>
                        <Button className="ImageLogo" variant='outlined'
                            startIcon={<PlayArrowIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                            component={Link} to="/SWWLevelingOverhaul" onClick={() => document.getElementById('PersonalProjectsSection').scrollIntoView()}>
                            Free Demo
                        </Button>
                        <Button className="ImageLogo" variant='outlined' startIcon={<LocalGroceryStoreIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                            component="a" href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                            Store Page
                        </Button>
                    </Grid>
                </Grid>
            </p>
        </div>
    );
}

export { ProfessionalWorkSection };