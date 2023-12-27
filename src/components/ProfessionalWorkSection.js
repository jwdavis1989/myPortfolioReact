import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import { Link } from 'react-router-dom';

function ProfessionalWorkSection() {
    return (
        <div id="ProfessionalWorkSection">
            <h1 className="SectionHeader">
                PROFESSIONAL WORK
                <hr className="HorizontalLineBlue" />
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <br />
            <br />
            <br />
            <p className="NormalPageLayout">
                <Link to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage" src={SWWOverhaulBanner} alt="Phoenix Walker - Game Prototype" />
                </Link>
                <div className="SectionHeader">
                    <b>
                        Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon
                    </b>
                </div>
                <b>Contributions:</b> Game Designer, Artist
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