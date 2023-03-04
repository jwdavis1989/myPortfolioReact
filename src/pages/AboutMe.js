import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Grid } from '@material-ui/core';

function AboutMe() {
    return (
        <div>
            <p className="HeaderTitleNoHover">
                <SchoolIcon fontSize='inherit' /> EDUCATION
            </p>
            <div className="NormalPageLayout">
                <b>Bachelors of Computer Science with a Minor in Business</b>
                <br/>
                Arkansas A-State University, Jonesboro AR
                <br/>
                <i>08/2016 – 05/2020</i>
            </div>
            <br />
            <p className="HeaderTitleNoHover">
                <EmojiEventsIcon fontSize='inherit' /> AWARDS & CERTIFICATIONS
            </p>
            <div className="NormalPageLayoutLeft">
                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                        Infosys Certificate of Appreciation – Going The Extra
                        Mile
                        <br />
                        Infosys Certificate of Excellence – Rising Star
                        <br />
                        Graduated with Cum Laude
                        <br />
                    </Grid>
                    <Grid item xs={3} />
                    <Grid item xs={4}>
                        Global Agile Developer Certification
                        <br />
                        Cobalt Cloud Certification
                        <br /> Infosys React JS Certification
                    </Grid>
                </Grid>
            </div>
            <br />
            <p className="HeaderTitleNoHover">
                <SportsEsportsIcon fontSize='inherit' /> GAMES I LOVE AND WHY
            </p>
            <div className="NormalPageLayoutLeft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <br />
        </div>
    );
}

export { AboutMe };