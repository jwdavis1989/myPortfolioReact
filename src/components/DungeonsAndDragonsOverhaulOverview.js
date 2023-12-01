import swwOverhaulLogo from "../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Grid } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';

function DungeonsAndDragonsOverhaulOverview() {
    return (
        <div>
            <Grid id="Row 0 Leadership Title" container spacing={0}>
                <Grid item xs={12}>
                    <p className="HeaderTitleWide">
                        OVERVIEW
                    </p>
                </Grid>
            </Grid>
            <Grid id="Row 0 How Does It Work?" container spacing={0}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <img className='ImageBorder' src={swwOverhaulLogo} width="95%" alt="D&D Overhaul" />
                </Grid>
                <Grid item xs={7}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        SUMMARY
                    </p>
                    <div className="NormalPageLayoutLeft ScrollingBox">
                        Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                        strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                        is more than just a leveling overhaul. Build a character by spending talent points in your choice of 29 skill trees,
                        adding significantly more character concepts to create your dream character!
                    </div>
                    <p className="HeaderTitle">
                        <a href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                            <LocalGroceryStoreIcon fontSize='inherit' /> Store Page
                        </a>
                    </p>
                    <p className="HeaderTitle">
                        <a href={patchNotes} target="_blank" rel="noreferrer">
                            <DownloadIcon fontSize='inherit' /> Patch Notes
                        </a>
                    </p>
                </Grid>
            </Grid>
        </div>



    );
}

export { DungeonsAndDragonsOverhaulOverview };