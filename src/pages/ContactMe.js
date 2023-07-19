import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function ContactMe() {
    return (
        <div className="NormalPageLayout">
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
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={5}>
                </Grid>
            </Grid>
        </div >
    );
}

export { ContactMe };