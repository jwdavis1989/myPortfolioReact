import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';

function ProfessionalWorkSection() {
    return (
        <div id="ProfessionalWorkSection">
            <h3 className="SectionHeader">
                PROFESSIONAL WORK
                <hr className="HorizontalLineBlue" />
            </h3>
            <br />
            <p className="NormalPageLayout">
                <div className="SectionHeader">
                    <h4>
                        Silverwind Skill Trees -
                        <br />
                        D&D Tabletop Game Addon
                    </h4>
                </div>
                <Link to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage outlineBorderOnHover" src={SWWOverhaulBanner} alt="Phoenix Walker - Game Prototype" />
                </Link>
                <br />
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={10}>
                        <Button className="ImageLogo" variant='outlined'
                            component={Link} to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                            Learn More
                        </Button>
                        <div className="textAlignLeft">
                            <b>Contributions:</b> Game Designer, Artist, QA Analyst
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

export { ProfessionalWorkSection };