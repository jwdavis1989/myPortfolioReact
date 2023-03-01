import LeakAddSharpIcon from '@mui/icons-material/LeakAddSharp';
import { Grid, Link } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function ContactMe() {
    return (
        <div className="ResumePage">
            <p className="HeaderTitle">
                <LeakAddSharpIcon fontSize='inherit'/> CONTACT ME
            </p>
            <div className="NormalPageLayout">
                <p className="HeaderTitle">
                    <EmailIcon fontSize='inherit' /> EMAIL
                </p>
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                            <p className="HeaderTitle">
                                <TwitterIcon fontSize='inherit' /> TWITTER
                            </p>
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
        </div>
    );
}

export { ContactMe };