import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactMe() {
    return (
        <div className="NormalPageLayout">
                    <p className="HeaderTitleNoHover">
                        <p>
                            <LinkedInIcon fontSize='inherit' /> LINKEDIN
                        </p>
                    </p>
                    <p className="NormalPageLayout">
                        <a href="https://www.linkedin.com/in/jerry-davis-8991641b4/" target="_blank" rel="noreferrer">
                        jerry-davis-8991641b4
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