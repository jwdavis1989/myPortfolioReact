import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import swwOverhaulLogo from "../../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Grid } from '@mui/material';

function OverhaulOverviewComponent() {
    return (
        <div>
            <Grid container spacing={0}>
            <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <img className='ImageBorder' src={swwOverhaulLogo} width="95%" alt="D&D Overhaul" />
                </Grid>
                <Grid item xs={7}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                            <DashboardSharpIcon fontSize='inherit' /> HOW DOES IT WORK?
                    </p>
                    <div className="NormalPageLayoutLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        <DashboardSharpIcon fontSize='inherit' /> WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <div className="NormalPageLayoutLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { OverhaulOverviewComponent };