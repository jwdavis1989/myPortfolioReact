import swwOverhaulLogo from "../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Link } from "react-router-dom";
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import { Grid } from '@material-ui/core';
import SWArtifactsPicture from '../resources/images/SWVaultOfArtifactsLogo2.png'
import ConstructionIcon from '@mui/icons-material/Construction';

function DungeonsAndDragonsContent() {
    return (
        <div>
            <div className="NormalPageLayout">
                <p className="HeaderTitle">
                    <CasinoSharpIcon fontSize='inherit' /> PUBLISHED DUNGEONS AND DRAGONS CONTENT
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <Link to='/SWWLevelingOverhaul'>
                            <p className="HeaderTitle">
                                <CasinoSharpIcon fontSize='inherit' /> D&D SKILL TREES & LEVELING OVERHAUL
                            </p></Link>
                        <Link to='/SWWLevelingOverhaul'>
                            <img src={swwOverhaulLogo} width="100%" alt="Silverwind Workshop Banner" className="SWWBanner" />
                        </Link>
                    </Grid>
                    <Grid item xs={4}> 
                        <br/><br/><br/>
                        <div className="NormalPageLayoutLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    </Grid>
                </Grid>
            </div>
            {/*In Development Section*/}
            <div className="NormalPageLayout">
                <p className="HeaderTitle">
                    <ConstructionIcon fontSize='inherit' /> CRAFTING NEW BLUEPRINTS . . .
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                            <p className="HeaderTitle">
                                <CasinoSharpIcon fontSize='inherit' /> D&D VAULT OF ARTIFACTS
                            </p>
                            <img src={SWArtifactsPicture} width="100%" alt="DnD Map Generator" className="SWWBanner" />
                    </Grid>
                    <Grid item xs={4}> 
                        <br/><br/><br/>
                        <div className="NormalPageLayoutLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    </Grid>
                </Grid>
            </div >
        </div>
    );
}

export { DungeonsAndDragonsContent };