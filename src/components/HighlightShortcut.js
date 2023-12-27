import { Link } from "react-router-dom";

function HighlightShortcut() {
    return (
        <div className="NormalPageLayout">
            <p>
                <Link to='/SWWLevelingOverhaul'>
                    <p className="HeaderTitle animationcolorWhiteOrangeFlashing">
                        <b>
                            Game Design Product Demo
                        </b>
                    </p>
                </Link>
            </p>
        </div >
    );
}

export { HighlightShortcut };