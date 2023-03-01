import swwOverhaulLogo from "../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Link } from "react-router-dom";
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import { Grid } from '@material-ui/core';
import SWArtifactsPicture from '../resources/images/SWVaultOfArtifactsLogo2.png'
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

function DungeonsAndDragonsContent() {
    return (
        <div>
            <div className="NormalPageLayout">
                <p className="HeaderTitleNoHover">
                    <CasinoSharpIcon fontSize='inherit' /> PUBLISHED DUNGEONS AND DRAGONS CONTENT
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <Link to='/SWWLevelingOverhaul'>
                            <p className="HeaderTitleNoHover">
                                <CasinoSharpIcon fontSize='inherit' /> D&D SKILL TREES & LEVELING OVERHAUL
                            </p></Link>
                        <Link to='/SWWLevelingOverhaul'>
                            <img src={swwOverhaulLogo} width="100%" alt="Silverwind Workshop Banner" className="SWWBanner" />
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <br /><br /><br />
                        <div className="NormalPageLayoutLeft moveLeft35">
                            Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                            strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                            is more than just a leveling overhaul. Build a character by spending talent points in your choice of 29 skill trees,
                            adding significantly more character concepts to create your dream character!
                            <p><b>Module includes:</b>
                                <ul>
                                    <li>9 New Martial Skill Trees</li>
                                    <li>12 New Magic Skill Trees</li>
                                    <li>8 New Utility Skill Trees</li>
                                    <li>65 New Spells</li>
                                    <li>19 New Weapons that play well with base 5th Edition or this Module</li>
                                    <li>43 Inventions/Enchantments/Enchanted Items crafted through Artifice</li>
                                    <li>34 New Potions/Poisons crafted through Alchemy</li>
                                    <li>7 Example Characters with backstories included</li>
                                    <li>30 New Art Assets representing each Skill Tree and H.E.L.P.E.R. the tutorial bot</li>
                                </ul>
                            </p>
                            <Link to='/SWWLevelingOverhaul'>
                                <p className="HeaderTitle">
                                    <ZoomInIcon fontSize='inherit' /> Click to Learn More
                                </p>
                            </Link>
                            <p className="HeaderTitle">
                                <a href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                    <LocalGroceryStoreIcon fontSize='inherit' /> Link to Store Page
                                </a>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/*In Development Section*/}
            <div className="NormalPageLayout">
                <p className="HeaderTitleNoHover">
                    <ConstructionIcon fontSize='inherit' /> CRAFTING NEW BLUEPRINTS . . .
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <p className="HeaderTitleNoHover">
                            <CasinoSharpIcon fontSize='inherit' /> D&D VAULT OF ARTIFACTS
                        </p>
                        <img src={SWArtifactsPicture} width="100%" alt="DnD Vault of Artifacts" className="SWWBanner" />
                    </Grid>
                    <Grid item xs={4}>
                        <br /><br /><br />
                        <div className="NormalPageLayoutLeft moveLeft35">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="HeaderTitle">
                                <ConstructionIcon fontSize='inherit' /> Coming Soon!
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div >
        </div>
    );
}

export { DungeonsAndDragonsContent };