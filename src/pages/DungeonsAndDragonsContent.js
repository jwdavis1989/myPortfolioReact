import swwOverhaulLogo from "../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Link } from "react-router-dom";
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import { Grid } from '@mui/material';
import SWArtifactsPicture from '../resources/images/SWVaultOfArtifactsLogo2.png'
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';

function DungeonsAndDragonsContent() {
    return (
        <div>
            <div className="NormalPageLayout">
                <p className="HeaderTitleNoHover">
                    <CasinoSharpIcon fontSize='inherit' /> DUNGEONS AND DRAGONS CONTENT
                </p>
                <h1 className="textFontPixel">
                    PUBLISHED CONTENT
                </h1>
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
                            <img src={swwOverhaulLogo} width="100%" alt="DnD Skill Tree & Leveling Overhaul" className="CharacterArt" />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover moveLeft35">
                            <b>SUMMARY:</b>
                        </p>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35">
                            Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                            strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                            is more than just a leveling overhaul. Build a character by spending talent points in your choice of 29 skill trees,
                            adding significantly more character concepts to create your dream character!
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <p className="SmallHeaderTitleNoHover moveLeft35">
                            <b>INCLUDES:</b>
                        </p>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35">
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
                                <ZoomInIcon fontSize='inherit' /> Design Insights
                            </p>
                        </Link>
                        <p className="HeaderTitle">
                            <a href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                <LocalGroceryStoreIcon fontSize='inherit' /> Link to Store Page
                            </a>
                        </p>
                        <p className="HeaderTitle">
                            <a href={patchNotes} target="_blank" rel="noreferrer">
                                <DownloadIcon fontSize='inherit' /> View Patch Notes
                            </a>
                        </p>
                    </Grid>
                </Grid>
            </div>
            {/*In Development Section*/}
            <br /><br />
            <div className="NormalPageLayout">
                <h1 className="textFontPixel">
                    CRAFTING NEW BLUEPRINTS . . .
                </h1>
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
                        <p className="SmallHeaderTitleNoHover moveLeft35">
                            <b>SUMMARY:</b>
                        </p>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35">
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
                        <p className="SmallHeaderTitleNoHover moveLeft35">
                            <b>INCLUDES:</b>
                        </p>
                        <div className="NormalPageLayoutLeftSmaller moveLeft35">
                            <ul>
                                <li>Dozens of New Artifacts of Various Qualities</li>
                                <li>Loot Roll Tables</li>
                                <li>New Item Artwork</li>
                                <li>Compatibility with both D&D 5e and our Skill Tree & Leveling Overhaul</li>
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
            <br /><br />
        </div >
    );
}

export { DungeonsAndDragonsContent };