import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import { Link } from 'react-router-dom';

function ProfessionalWorkSection() {
    return (
        <div id="ProfessionalWorkSection">
            <h3 className="SectionHeader">
                PROFESSIONAL WORK
                <hr className="HorizontalLineBlue" />
            </h3>
            <br />
            <p className="NormalPageLayout">
                <Link to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage outlineBorderOnHover" src={SWWOverhaulBanner} alt="Phoenix Walker - Game Prototype" />
                </Link>
                <div className="SectionHeader">
                    <b>
                        Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon
                    </b>
                </div>
                <b>Contributions:</b> Game Designer, Artist, QA Analyst
                <br />
                <Link to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)} className="animationcolorWhiteOrangeFlashing">
                    Click to learn more.
                </Link>
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

export { ProfessionalWorkSection };