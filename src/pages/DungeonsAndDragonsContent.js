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
                    <Grid item xs={10}>
                        <p className="HeaderTitleNoHover">
                            <CasinoSharpIcon fontSize='inherit' /> D&D SKILL TREES & LEVELING OVERHAUL
                        </p>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Link to='/SWWLevelingOverhaul'>
                            <img src={swwOverhaulLogo} width="100%" alt="DnD Skill Tree & Leveling Overhaul" className="SWWBanner" />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover">
                            <b>SUMMARY:</b>
                        </p>
                        <div className="NormalPageLayoutLeft moveLeft35">
                            Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                            strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                            is more than just a leveling overhaul. Build a character by spending talent points in your choice of 29 skill trees,
                            adding significantly more character concepts to create your dream character!
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover">
                            <b>INCLUDES:</b>
                        </p>
                        <div className="NormalPageLayoutLeft moveLeft35">
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
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
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
                    </Grid>
                </Grid>
            </div>
            {/*In Development Section*/}
            <br/><br/>
            <div className="NormalPageLayout">
                <p className="HeaderTitleNoHover">
                    <ConstructionIcon fontSize='inherit' /> CRAFTING NEW BLUEPRINTS . . .
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <p className="HeaderTitleNoHover">
                            <CasinoSharpIcon fontSize='inherit' /> D&D VAULT OF ARTIFACTS
                        </p>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Link to='/SWWLevelingOverhaul'>
                            <img src={SWArtifactsPicture} width="100%" alt="DnD Vault of Artifacts" className="SWWBanner" />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover">
                            <b>SUMMARY:</b>
                        </p>
                        <div className="NormalPageLayoutLeft moveLeft35">
                            Coming soon to Roll20, Silverwind Workshop's Vault of Artifacts 
                            is overflowing with new, interesting, and powerful magical items
                            for your players to discover!
                            <p>
                                Unsure of how rare an item should be? 
                                That's okay because we've included loot rolling tables 
                                that are weighted based on the rarity of items!
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover">
                            <b>INCLUDES:</b>
                        </p>
                        <div className="NormalPageLayoutLeft moveLeft35">
                            <ul>
                                <li>Dozens of New Artifacts of Various Qualities</li>
                                <li>Loot Roll Tables</li>
                                <li>New Item Artwork</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <p className="HeaderTitle">
                            <ConstructionIcon fontSize='inherit' /> Coming Soon!
                        </p>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>
        </div >
    );
}

export { DungeonsAndDragonsContent };