import LeakAddSharpIcon from '@mui/icons-material/LeakAddSharp';
import { Grid } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function ContactMe() {
    return (
        <div className="ContactMePage">
            <p className="HeaderTitleNoHover">
                <LeakAddSharpIcon fontSize='inherit' /> CONTACT ME
            </p>
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <p className="HeaderTitleNoHover">
                        <p>
                            <EmailIcon fontSize='inherit' /> EMAIL
                        </p>
                    </p>
                    <p className="NormalPageLayout">
                        <a href="mailto:jwdavis8589@gmail.com" target="_blank" rel="noreferrer">
                            jwdavis8589@gmail.com
                        </a>
                    </p>
                </Grid>
                <Grid item xs={5}>
                    <p className="HeaderTitleNoHover">
                        <p>
                            <TwitterIcon fontSize='inherit' /> TWITTER
                        </p>
                    </p>
                    <p className="NormalPageLayout">
                        <a href="https://twitter.com/SilverwindWork1" target="_blank" rel="noreferrer">
                            @SilverwindWork1
                        </a>
                    </p>
                </Grid>
            </Grid>
        </div >
    );
}

export { ContactMe };