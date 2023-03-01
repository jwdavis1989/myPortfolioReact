import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import profilePicture from '../resources/images/Jerry_Davis_Portrait_2020.png';
import SWPicture from '../resources/images/SWCreatorLogo.png';
import { Grid } from '@material-ui/core';

function Dashboard() {
    return (
        <div>
            <Grid container spacing={3}>
            <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <img className='ImageBorder' src={SWPicture} width="95%" alt="Silverwind Workshop" />
                </Grid>
                <Grid item xs={4}>
                    <br />
                    <p className="HeaderTitle">
                        <DashboardSharpIcon fontSize='inherit' /> JEREMY DAVIS
                    </p>
                    <div className="NormalPageLayout">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <br /><br />
                    <img className='ImageBorder' src={profilePicture} width="60%" alt="Profile" />
                </Grid>
                <Grid item xs={12}>
                    <br />
                    <p className="HeaderTitle">
                        <DashboardSharpIcon fontSize='inherit' /> MISSION STATEMENT
                    </p>
                    <div className="NormalPageLayout">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { Dashboard };