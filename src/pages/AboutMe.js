import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Grid } from '@mui/material';

function AboutMe() {
    return (
        <div>
            <p className="HeaderTitleNoHover">
                <SchoolIcon fontSize='inherit' /> EDUCATION
            </p>
            <div className="NormalPageLayout">
                <b>Bachelors of Computer Science with a Minor in Business</b>
                <br />
                Arkansas A-State University, Jonesboro AR
                <br />
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
                I love games that:
                <br />
                <ul>
                    <li>Aren't afraid to let the player think and figure it out without "God of War: Ragnarok-syndrome,"
                        where a character blurts the solution either immediately or if the player takes more than 2 seconds to solve a puzzle.
                        I always enjoy the "Ah-ha!" moment when you finally solve the puzzle.
                        <br />&emsp; (e.g. Dark Souls, Outer Wilds, We Were Here Together, Eldin Ring, Zelda)
                    </li>
                    <li>Present players with compelling choices with impactful outcomes.
                        <br />&emsp; (e.g. XCOM, Sid Meier's Civilization, Age of Wonders, Mass Effect, Dragon Age)
                    </li>
                    <li>Reward and promote creativity and innovation.
                        <br />&emsp; (e.g. Outer Wilds, Zelda: Tears of The Kingdom, Banjo-Kazooie: Nuts & Bolts, Dark Cloud 2)
                    </li>
                    <li>Allow for specialization & reliance on teammates in multiplayer games.
                    <br />&emsp; (e.g. World of Warcraft, Final Fantasy 14, Risk of Rain, Deep Rock Galactic)
                    </li>
                    <li>Have strong thematic atmospheres.
                    <br />&emsp; (e.g. Dark Souls, Outer Wilds, Eldin Ring, Armored Core, Bloodbourne, Sekiro: Shadows Die Twice, 
                    Mass Effect, Dragon Age, Undertale)
                    </li>
                    <li>Challenge the player to master their mechanics.
                    <br />&emsp; (e.g. Dark Souls, Eldin Ring, Armored Core, Risk of Rain)
                    </li>
                </ul>
            </div>
            <br />
        </div>
    );
}

export { AboutMe };