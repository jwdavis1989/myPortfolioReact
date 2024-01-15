import { Link } from "react-router-dom";
import PhoenixWalkerTitleScreen from '../resources/images/gamePrototypes/gifs/PhoenixWalkerTitleScreenBanner/PhoenixWalkerTitleScreen.gif';
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';

function PersonalProjectsSection() {
    return (
        <div id="PersonalProjectsSection">
            <h3 className="SectionHeader">
                PERSONAL PROJECTS
                <hr className="HorizontalLineBlue" />
            </h3>
            This is a collection of fun personal projects I've created to hone and demonstrate my game design skills.
            <br />
            <br />
            <br />
            <p className="NormalPageLayout">
                <Link to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage outlineBorderOnHover" src={PhoenixWalkerTitleScreen} alt="Phoenix Walker - Game Prototype"/>
                </Link>
                <div className="SectionHeader">
                    <b>
                        Phoenix Walker - Game Prototype
                    </b>
                </div>
                <b>Contributions:</b> Game Designer, Programmer, Sprite Artist, Music Composer
                <br />
                <Link to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)} className="animationcolorWhiteOrangeFlashing">
                    Click to learn more.
                </Link>
                <br />
                <br />
                <br />
            </p>
            <p className="NormalPageLayout">
                <Link to="/DesignExercises" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage outlineBorderOnHover" src={ChineseVampireBanner} alt="Yingyue the Jiangshi - League of Legends Character Concept"/>
                </Link>
                <div className="SectionHeader">
                    <b>
                        Yingyue the Jiangshi - League of Legends Character Concept
                    </b>
                </div>
                <b>Contributions:</b> Game Designer, Writer
                <br />

                <a href='https://www.chenruoyu.com/' target="_blank" rel="noreferrer">
                    <b>Artwork by:</b> Chen Ruo Yu
                </a>
                <br />
                <Link to="/DesignExercises" onClick={() => window.scrollTo(0, 0)} className="animationcolorWhiteOrangeFlashing">
                    Click to learn more.
                </Link>
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

export { PersonalProjectsSection };