import { Link } from "react-router-dom";
import PhoenixWalkerTitleScreen from '../resources/images/gamePrototypes/gifs/PhoenixWalkerTitleScreenBanner/PhoenixWalkerTitleScreen.gif';
import ChineseVampireBanner from '../resources/images/designExercise/ChineseVampireLeagueChampionBannerSmall.png';

function PersonalProjectsSection() {
    return (
        <div>
            <h1 className="SectionHeader">
                PERSONAL PROJECTS
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
                <Link to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)}>
                    <img className="NewBannerImage" src={PhoenixWalkerTitleScreen} alt="Phoenix Walker - Game Prototype"/>
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
                    <img className="NewBannerImage" src={ChineseVampireBanner} alt="Yingyue the Jiangshi - League of Legends Character Concept"/>
                </Link>
                <div className="SectionHeader">
                    <b>
                        Yingyue the Jiangshi - League of Legends Character Concept
                    </b>
                </div>
                <b>Contributions:</b> Game Designer
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